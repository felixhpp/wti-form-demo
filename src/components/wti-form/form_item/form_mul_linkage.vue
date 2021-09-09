<template>
    <!--  字典下拉框（指通过数据字典获取选项）  -->
    <div :style="item.style||{}"
         :class="`form-unqiue-${item.key}`"
         class="form-item-box">
        <el-row v-if="!getTextModel">
            <!-- 默认 3 级联动 -->
            <el-col v-for="i in (item.linkLevel || 3)" :key="i" :span="24 / (item.linkLevel || 3)">
                <el-select style="width:100%"
                           v-model="val[i-1]"
                           :disabled="getDisabled"
                           :placeholder="getSelectPlaceholder(item)"
                           @change="v => onChange(v, i)">
                    <el-option v-for="items in getOptions(i)"
                               :key="items[dynamicSelectOption.value]"
                               :label="items[dynamicSelectOption.label]"
                               :value="items[dynamicSelectOption.value]"/>
                </el-select>
            </el-col>
        </el-row>
        <div v-else :style="item.textStyle || {}">{{ textModelValue || '-' }}</div>
    </div>
</template>

<script>
    import FormMixin from './mixin';
    import axios from 'axios';

    // 多级联动下拉框
    export default {
        name: 'FormMulLinkage',
        mixins: [ FormMixin ],
        watch: {
            'item.linkLevel': {
                handler () {
                    this.initVal();
                },
                immediate: true
            }
        },
        created () {
            this.loadDict(this.item.firstParentKey);
        },
        computed: {
            textModelValue () {
                const content = this.dynamicDict[this.item.parentKey] && this.dynamicDict[this.item.parentKey].find((item) => {
                    return item[this.dynamicSelectOption.value] === this.val;
                });
                return content && content[this.dynamicSelectOption.label] || '';
            },

            val: {
                get () {
                    return this.value;
                },
                set (v) {
                    this.$emit('input', v);
                    this._valueLink(v);
                    // 只有非子表单的情况下，才会冒泡上去数据变更
                    if (this.formItemType !== 'childForm') {
                        this.statusChangeFn.valueUpdateEvent({
                            [this.item.key]: v,
                        });
                    } else {
                        // 如果是子表单的话，执行内置的变更
                        this.childChangeData.valueUpdateEvent();
                    }
                }
            },
        },
        methods: {
            // 根据 item.linkLevel 更新 val 长度
            initVal () {
                this.$emit('input', new Array(this.item.linkLevel || 3).fill(''));
            },
            // 获取下拉框列表
            getOptions (i) {
                if (String(i) === '1') {
                    // 第一个选项，下拉框内容的父 key 是 item.firstParentKey
                    return this.dynamicDict[this.item.firstParentKey] || [];
                } else {
                    // 后续的选项，下拉框的父 key ，是前一个的值
                    return this.dynamicDict[this.val[i - 2]] || [];
                }
            },

            // 异步加载字典
            loadDict (parentCode) {
                let payload = null;
                if (this.dynamicSelectOption.queryKey) {
                    payload = {
                        [this.dynamicSelectOption.queryKey]: [ parentCode ]
                    };
                } else {
                    payload = [ parentCode ];
                }
                this.$set(this.dynamicDict, parentCode, []);
                // 否则，根据当前的值，去请求数据字典
                axios.post(this.dynamicSelectOption.dictUrl, payload).then(res => {
                    if (res.code === 200) {
                        if (res.data.length > 0) {
                            // 加载到结果
                            res.data.forEach(item => {
                                const pCode = item[this.dynamicSelectOption.parentKey];
                                this.dynamicDict[pCode].push(
                                    item
                                );
                            });
                        }
                    } else {
                        this.$message.error(res.msg);
                    }
                }).catch(() => {
                    this.$message.error('数据字典加载错误，请刷新页面重试');
                });
            },

            // select 选择选项事件触发，
            // 值的索引从 0 开始，index 从 1 开始（即 val[0]对应 i=1）
            onChange (v, index) {
                // debugger;
                // 当 change 事件触发后，将其后的内容都置为空
                for (let i = index; i < this.item.linkLevel; i++) {
                    this.val[i] = '';
                }
                // 然后根据这个值，先判断当前数据字典里，是否有值
                if (this.dynamicDict[v] && this.dynamicDict[v].length > 0) {
                    // 有值，且长度不为0，则显然不需要再去请求数据字典了
                    return;
                } else {
                    this.loadDict(v);
                }
            },
        }
    };
</script>

<style scoped lang="less">
    @import '~common/less/config.less';

    .form-item-box /deep/ .el-input {
        position: relative;
        width: 100%;
        height: 36px;

        .el-input__inner {
            position: absolute;
            width: 100%;
            height: 36px;
            line-height: 36px;
            padding-right: 10px;
            padding-left: 12px;
        }
    }

</style>
