<template>
    <!-- 输入搜索框 -->
    <div :style="item.style||{}"
         :class="`form-unqiue-${item.key}`"
         class="form-item-box">
        <el-autocomplete v-model.trim="val"
                         :placeholder="getPlaceholder(item)"
                         :disabled="getDisabled"
                         class="auto-complte-input"
                         @blur="e => onBlur(item, e)"
                         @focus="e => onFocus(item, e)"
                         :clearable="true"
                         value-key="value"
                         :fetch-suggestions="querySearchAsync"
                         @select="handleSelect"
                         v-bind="bindOptions"
                         v-if="!getTextModel"/>
        <div v-else :style="item.textStyle||{}">{{ val || '-' }}</div>
    </div>
</template>

<script>
    import FormMixin from './mixin';
    import axios from 'axios';

    export default {
        name: 'FormAutoComplete',
        mixins: [ FormMixin ],
        methods: {
            querySearchAsync (queryString, cb) {
                const payload = {
                    [this.item.searchKey]: queryString
                };
                if (this.item.otherSearchKeys && this.item.otherSearchKeys.length > 0) {
                    this.item.otherSearchKeys.forEach(obj => {
                        payload[obj.key] = obj.value;
                    });
                }

                axios.post(this.item.searchUrl, payload).then(res => {
                    if (res.code === 200) {
                        if (res.data) {
                            const d = res.data.map(item => {
                                if (this.item.mainShowKey) {
                                    return {
                                        value: item[this.item.mainShowKey],
                                        item
                                    };
                                } else {
                                    return {
                                        value: item[this.item.autoCompleteKeys[0]],
                                        item
                                    };
                                }
                            });
                            cb(d);
                            if (this.item.fetchSuggestions) {
                                this.item.fetchSuggestions(d, this.randomId);
                            }
                        } else {
                            cb([]);
                            if (this.item.fetchSuggestions) {
                                this.item.fetchSuggestions([], this.randomId);
                            }
                            this.$message.error('无匹配数据');
                        }
                    } else {
                        cb([]);
                        if (this.item.fetchSuggestions) {
                            this.item.fetchSuggestions([], this.randomId);
                        }
                        this.$message.error(res.msg || '无匹配数据');
                    }
                }).catch(() => {
                    this.$message.error('服务器错误');
                });
            },
            handleSelect (selectedItem) {
                // console.log('selectedItem', selectedItem);
                const payload = {};
                // 将需要更新的数据的值，添加到 payload 里
                this.item.autoCompleteKeys.forEach(key => {
                    payload[key] = selectedItem.item[key];
                });
                // 再调用方法，推到 wti_form 这个组件中
                this.statusChangeFn.updateFormData(payload);

                if (this.item.onSelect) {
                    this.item.onSelect(selectedItem, this.randomId);
                }
            }
        }
    };
</script>

<style scoped lang="less">
    @import '~common/less/config.less';

    .auto-complte-input {
        width: 100%;
    }
</style>
