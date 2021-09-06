<template>
    <!-- 普通输入框 -->
    <div :style="item.style||{}"
         :class="`form-unqiue-${item.key}`"
         class="form-input-box form-item-box">
        <el-input v-model.trim="val"
                  :placeholder="getPlaceholder(item)"
                  :disabled="getDisabled"
                  @blur="e => onBlur(item, e)"
                  @focus="e => onFocus(item, e)"
                  type="text"
                  :clearable="true"
                  v-if="!getTextModel">
            <template slot="prepend" v-if="prependMsg">{{ prependMsg }}</template>
            <template slot="append" v-if="appendMsg">{{ appendMsg }}</template>
        </el-input>
        <div v-else :style="item.textStyle||{}" class="form-input-text">
            <span class="prepend-msg" v-if="prependMsg">{{ prependMsg }}</span>
            <span class="text">{{ val || '-' }}</span>
            <span class="append-msg" v-if="appendMsg">{{ appendMsg }}</span>
        </div>
    </div>
</template>

<script>
    import FormMixin from './mixin';

    export default {
        name: 'FormInput',
        mixins: [ FormMixin ],
        data () {
            return {
                prependMsg: '',
                appendMsg: ''
            };
        },
        watch: {
            item: {
                handler (n) {
                    if (n.prefixMsg) {
                        this.prependMsg = n.prefixMsg;
                    }
                    if (n.suffixMsg) {
                        this.appendMsg = n.suffixMsg;
                    }
                },
                immediate: true
            }
        }
    };
</script>

<style scoped lang="less">
@import '~common/less/config.less';

.form-input-box /deep/ .el-input {
    position: relative;
    width: 100%;
    height: 36px;

    .el-input__inner {
        height: 36px;
        line-height: 36px;
    }
}

.form-input-text {
    position: relative;
    width: 100%;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    color: #12182A;
}
</style>
