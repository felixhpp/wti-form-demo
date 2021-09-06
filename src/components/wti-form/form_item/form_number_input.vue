<template>
    <!-- 数字输入框 -->
    <div :style="item.style||{}"
         :class="`form-unqiue-${item.key} ${getTextModel?'':' form-item-box-input'}`"
         class="form-item-box input-number-wrapper">
        <template v-if="!getTextModel">
            <el-input v-model.trim="val"
                      :placeholder="getPlaceholder(item)"
                      :disabled="getDisabled"
                      class="input"
                      type="number"
                      @keydown.native="onKeydown($event)"
                      :class="isShowInput?'show':'hidden'"
                      @blur="e => onBlur(item, e)"
                      @focus="e => onFocus(item, e)"
                      :clearable="true"/>
            <div class="div-input-box el-input__inner"
                 :class="{'show': !isShowInput, 'hidden': isShowInput, 'is-disabled': getDisabled}">
                <span>{{ symbolBefore }}</span>
                <span>{{ dealInputValue }}</span>
                <span>{{ symbolAfter }}</span>
                <span class="place-holder"
                      v-if="!dealInputValue && !symbolBefore && !symbolAfter">{{ getPlaceholder(item) }}</span>
            </div>
        </template>
        <div v-else :style="item.textStyle||{}">
            {{ symbolBefore }}
            {{ dealInputValue || '-' }}
            {{ symbolAfter }}
        </div>
    </div>
</template>

<script>
    import FormMixin from './mixin';

    export default {
        name: 'FormNumberInput',
        mixins: [ FormMixin ],
        data () {
            return {
                // 千分位的值
                // dealInputValue: '',
                isShowInput: false,
                // symbolBefore: '',
                // symbolAfter: ''
            };
        },
        computed: {
            dealNumberFormat () {
                const num = this.value !== '' ? this.value : '';
                const res = num.toString().replace(/\d+/, (n) => {
                    return n.replace(/(\d)(?=(\d{3})+$)/g, ($1) => {
                        return $1 + ',';
                    });
                });
                return res;
            },
            // 千分位的数字
            dealInputValue () {
                let n = this.dealNumberFormat;
                if (n.length === 0) {
                    return n;
                }
                if (this.item.zeroMsg && this.item.zeroMsg > 0) {
                    // 如果没有点，那么补点，并且补零
                    if (!String(this.value).includes('.')) {
                        n += '.';
                        for (let i = 0; i < this.item.zeroMsg; i++) {
                            n += '0';
                        }
                    } else {
                        // 否则去除之前的 0 后，
                        // 1、小数位数小于 this.item.zeroMsg，再补零
                        // 2、小数位数大于 this.item.zeroMsg，干掉多余的小数位数。不用补零（在 input 的时候执行）
                        // 3、等于 this.item.zeroMsg，不管
                        const currentLength = String(this.value).split('.')[1].length;
                        if (currentLength < this.item.zeroMsg) {
                            for (let i = 0; i < this.item.zeroMsg - currentLength; i++) {
                                n += '0';
                            }
                        }
                    }
                }
                return n;
            },
            // 前置符号
            symbolBefore () {
                if (this.item.symbolBeforeMsg) {
                    return this.item.symbolBeforeMsg;
                } else {
                    return '';
                }
            },
            // 后置符号
            symbolAfter () {
                if (this.item.symbolAfterMsg) {
                    return this.item.symbolAfterMsg;
                } else {
                    return '';
                }
            },
            val: {
                get () {
                    return this.value;
                },
                set (v) {
                    const newVal = v;
                    let n = String(newVal);
                    // 这里主要目的是限制小数位数超过限制的
                    if (this.item.zeroMsg && this.item.zeroMsg > 0) {
                        // 包含小数点，并且小数点后面有数字
                        if (n.includes('.') && n.split('.').length > 1) {
                            const currentLength = n.split('.')[1].length;
                            if (currentLength > this.item.zeroMsg) {
                                const s = n.split('.');
                                n = `${s[0]}.${s[1].slice(0, this.item.zeroMsg)}`;
                            }
                        }
                    }

                    // 假如禁止输入负数，那么小于 0 则自动变为 0
                    if (this.item.positive && n && Number(n) < 0) {
                        n = '0';
                    }
                    this.$emit('input', n);

                    // 只有非子表单的情况下，才会冒泡上去数据变更
                    if (this.formItemType !== 'childForm') {
                        this.statusChangeFn.valueUpdateEvent({
                            [this.item.key]: n,
                        });
                    } else {
                        // 如果是子表单的话，执行内置的变更
                        this.childChangeData.valueUpdateEvent();
                    }
                }
            }
        },
        methods: {
            onKeydown (e) {
                // 假如禁止输入负数，那么干掉负号
                if (this.item.positive) {
                    if (e.key === '-' || e.code === 'Minus') {
                        e.preventDefault();
                        return;
                    }
                }
                // 假如只允许输入整数，那么干掉小数点
                if (this.item.onlyInt) {
                    if (e.key === '.' || e.code === 'Period') {
                        e.preventDefault();
                        return;
                    }
                }
            },
            onBlur () {
                this.isShowInput = false;
                // 如果为空，则返回空
                if (this.val === '') {
                    return;
                }
                let newVal = this.val;
                // 如果需要补零
                if (this.item.zeroMsg && this.item.zeroMsg > 0) {
                    const l = String(newVal).split('.');
                    // 如果没有小数点（说明只有整数位），自动补零
                    if (l.length === 1) {
                        // 判断 l[0].length 是否为 0，为 0 则说明没填，啥事都不做
                        if (l[0].length === 0) {
                            newVal = '';
                        } else {
                            newVal += '.';
                            // 自动补零
                            for (let i = 0; i < this.item.zeroMsg; i++) {
                                newVal += '0';
                            }
                        }
                    } else {
                        // 此时说明有小数点，那么小数位数多，则去掉多余的。位数小，则补零
                        const currentLength = l[1].length;
                        // 小数位数少，则补零
                        if (currentLength < this.item.zeroMsg) {
                            for (let i = 0; i < this.item.zeroMsg - currentLength; i++) {
                                newVal += '0';
                            }
                        }
                        // 如果大于
                        if (currentLength > this.item.zeroMsg) {
                            newVal = String(l[0]) + '.' + l[1].slice(0, this.item.zeroMsg);
                        }
                    }
                }
                newVal = String(newVal);
                newVal = newVal.split('.').map((s, index) => {
                    if (index !== 0) {
                        return s;
                    }
                    // 通过正则，匹配首位开始的所有 0（用于去除整数部分开始的 0）
                    const newS = s.replace(/$0+/g, '');
                    // 如果只有 0，那么最后返回 0，确保小数点前有数字
                    if (newS.length === 0) {
                        return '0';
                    } else {
                        return newS;
                    }
                }).join('.');
                if (newVal === '') {
                    newVal = 0;
                }
                if (!this.item.returnString) {
                    newVal = Number(newVal);
                }

                // 假如禁止输入负数，那么小于 0 则自动变为 0
                if (this.item.positive && newVal < 0) {
                    newVal = 0;
                }
                this.val = newVal;
            },
            onFocus () {
                this.isShowInput = true;
            },
        },
        watch: {
            item: {
                handler () {
                    this.isShowInput = false;
                },
                immediate: true
            }
        }
    };
</script>

<style scoped lang="less">
@import '~common/less/config.less';

.show {
    opacity: 1;

    .place-holder {
        float: left;
        color: #c0c4cc;
        vertical-align: top;
        height: 34px;
        line-height: 34px;
    }
}

.hidden {
    opacity: 0;
}

.input /deep/ .el-input {
    position: relative;
    width: 100%;
    height: 36px;

}

.input /deep/ .el-input__inner {
    position: absolute;
    width: 100%;
    height: 36px;
    line-height: 36px;
    padding-right: 50px;
    padding-left: 12px;
}

.div-input-box.is-disabled {
    background-color: #F5F7FA;
    border-color: #E4E7ED;
    color: #C0C4CC;
    cursor: not-allowed;
}

.div-input-box {
    height: 36px;
    line-height: 34px;
    color: #606266;
    font-size: inherit;
    font: 400 14px Arial;
}

.input /deep/ .el-input-group__prepend, .single-input .input /deep/ .el-input-group__append {
    padding: 0 10px;
}

.form-item-box {
    height: 40px;
    line-height: 40px;

    .el-input__inner {
        height: 36px;
        line-height: 34px;
        padding-right: 50px;
        padding-left: 12px;
        border-radius: 4px;
        border: 1px solid #DCDFE6;
        color: #606266;
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
}
</style>
