<template>
    <div class="formitem-box">
        <h2>利率输入框 RateInput</h2>
        <p>利率输入框，显示的百分比的数字，存储/提交的时候，给的是转换后的真实小数。例如 50% 提交时的值是 0.5。</p>

        <h3>基本用法</h3>
        <p>数据单位是元，根据显示单位自动切换显示文字，小数点后不限制。在焦点时是正常输入框，取消焦点后自动添加<b>千分位</b></p>
        <wti-form ref="form1"
                  :fields="fields1"/>
        <div class="submit-line">
            <el-button type="primary" @click="submit('form1')">提交按钮</el-button>
            <span class="tips">请查看控制台看提交结果</span>
        </div>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ code1 }}</code></pre>
            </el-collapse-item>
        </el-collapse>

        <el-divider/>
    </div>
</template>

<script>
    export default {
        name: 'RateInput',
        data () {
            return {
                fields1: [
                    {
                        children: [
                            {
                                key: 'key1',
                                type: 'rate-input',
                                label: '利率输入框',
                            }
                        ]
                    }
                ],

                code1: `<wti-form
            ref="form1"
            :fields="fields1"/>
---
fields1: [
    {
        children: [
            {
                key: 'key1',
                type: 'rate-input',
                label: '利率输入框',
            }
        ]
    }
]`,
            };
        },
        methods: {
            submit (formName) {
                this.$refs[formName].validate((isPass, data) => {
                    if (isPass) {
                        console.log('这是你刚提交的数据', data);
                    } else {
                        this.$message.error('校验失败！');
                    }
                });
            }
        }
    };
</script>

<style scoped lang="less">
    @import '~common/less/config.less';

    .formitem-box {
        position: relative;
        width: 100%;

        .submit-line {
            margin: 10px 0;

            .tips {
                margin-left: 24px;
                font-size: 10px;
            }
        }


        .collapse {
            position: relative;
            width: 600px;

            .code {
                white-space: pre;
                background: #fafafa;
                border: 1px solid #ddd;
                padding: 10px;
                border-radius: 10px;
            }
        }
    }
</style>
