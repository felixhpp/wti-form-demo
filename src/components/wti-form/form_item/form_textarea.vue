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
                  type="textarea"
                  :rows="3"
                  :maxlength="item.maxlength"
                  show-word-limit
                  resize="none"
                  :clearable="true"
                  v-if="!getTextModel">
            <template slot="prepend" v-if="prependMsg">{{ prependMsg }}</template>
            <template slot="append" v-if="appendMsg">{{ appendMsg }}</template>
        </el-input>
        <div v-else :style="item.textStyle||{}">{{ val || '-' }}</div>
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

.form-input-box /deep/ .el-input-group__prepend, .single-input .form-input-box /deep/ .el-input-group__append {
    padding: 0 10px;
}
</style>
