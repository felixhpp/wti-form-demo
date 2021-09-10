<template>
    <div class="formitem-box">
        <h2>普通数字输入框 NormalNumber</h2>
        <p>一个普通数字输入框，跟 Element UI 的保持一致</p>

        <h3>基本用法</h3>
        <p>这是最基本的用法，一个输入框 + 一个 label + 一个提交按钮。提交结果请查看控制台。为了区分代码，加了 border</p>
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

        <!--        <el-divider/>-->

        <!--        <h3>前后缀添加</h3>-->
        <!--        <p>前缀属性： <code>prepend</code>，后缀属性： <code>append</code>。可以只使用其中一个</p>-->
        <!--        <wti-form ref="form2"-->
        <!--                  :fields="fields2"/>-->
        <!--        <div class="submit-line">-->
        <!--            <el-button type="primary" @click="submit('form2')">提交按钮</el-button>-->
        <!--            <span class="tips">请查看控制台看提交结果</span>-->
        <!--        </div>-->
        <!--        <el-collapse class="collapse">-->
        <!--            <el-collapse-item>-->
        <!--                <template slot="title">-->
        <!--                    <b>点击查看代码</b>-->
        <!--                </template>-->
        <!--                <div class="code">{{ code2 }}</div>-->
        <!--            </el-collapse-item>-->
        <!--        </el-collapse>-->

        <!--        <el-divider/>-->

        <!--        <h3>只允许输入整数</h3>-->
        <!--        <p>除非是 js 赋值负数，否则是不能输入负数的（干掉了负号的输入）</p>-->
        <!--        <wti-form ref="form3"-->
        <!--                  :fields="fields3"/>-->
        <!--        <div class="submit-line">-->
        <!--            <el-button type="primary" @click="submit('form3')">提交按钮</el-button>-->
        <!--            <span class="tips">请查看控制台看提交结果</span>-->
        <!--        </div>-->
        <!--        <el-collapse class="collapse">-->
        <!--            <el-collapse-item>-->
        <!--                <template slot="title">-->
        <!--                    <b>点击查看代码</b>-->
        <!--                </template>-->
        <!--                <div class="code">{{ code3 }}</div>-->
        <!--            </el-collapse-item>-->
        <!--        </el-collapse>-->

        <!--        <el-divider/>-->

        <!--        <h3>不允许输入小数</h3>-->
        <!--        <p>同上，干掉了小数点的输入</p>-->
        <!--        <wti-form ref="form4"-->
        <!--                  :fields="fields4"/>-->
        <!--        <div class="submit-line">-->
        <!--            <el-button type="primary" @click="submit('form4')">提交按钮</el-button>-->
        <!--            <span class="tips">请查看控制台看提交结果</span>-->
        <!--        </div>-->
        <!--        <el-collapse class="collapse">-->
        <!--            <el-collapse-item>-->
        <!--                <template slot="title">-->
        <!--                    <b>点击查看代码</b>-->
        <!--                </template>-->
        <!--                <div class="code">{{ code4 }}</div>-->
        <!--            </el-collapse-item>-->
        <!--        </el-collapse>-->

        <!--        <el-divider/>-->

        <!--        <h3>小数位数限制</h3>-->
        <!--        <p>适用场景：比如说只允许输入两位小数。在 blur 事件触发后，会干掉多余的小数</p>-->
        <!--        <wti-form ref="form5"-->
        <!--                  :fields="fields5"/>-->
        <!--        <div class="submit-line">-->
        <!--            <el-button type="primary" @click="submit('form5')">提交按钮</el-button>-->
        <!--            <span class="tips">请查看控制台看提交结果</span>-->
        <!--        </div>-->
        <!--        <el-collapse class="collapse">-->
        <!--            <el-collapse-item>-->
        <!--                <template slot="title">-->
        <!--                    <b>点击查看代码</b>-->
        <!--                </template>-->
        <!--                <div class="code">{{ code5 }}</div>-->
        <!--            </el-collapse-item>-->
        <!--        </el-collapse>-->

        <!--        <el-divider/>-->

        <!--        <h3>自动补零</h3>-->
        <!--        <p>适用场景：比如说无论输入几位小数，都自动补零到指定位数</p>-->
        <!--        <wti-form ref="form6"-->
        <!--                  :fields="fields6"/>-->
        <!--        <div class="submit-line">-->
        <!--            <el-button type="primary" @click="submit('form6')">提交按钮</el-button>-->
        <!--            <span class="tips">请查看控制台看提交结果</span>-->
        <!--        </div>-->
        <!--        <el-collapse class="collapse">-->
        <!--            <el-collapse-item>-->
        <!--                <template slot="title">-->
        <!--                    <b>点击查看代码</b>-->
        <!--                </template>-->
        <!--                <div class="code">{{ code6 }}</div>-->
        <!--            </el-collapse-item>-->
        <!--        </el-collapse>-->
    </div>
</template>

<script>
    export default {
        name: 'NormalNumberInput',
        data () {
            return {
                fields1: [
                    {
                        children: [
                            {
                                key: 'key1',
                                type: 'normal-number',
                                label: '普通数字输入框',
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
                type: 'normal-number',
                label: '普通数字输入框',
            }
        ]
    }
]`,

                fields2: [
                    {
                        children: [
                            {
                                key: 'key2',
                                type: 'number-input',
                                label: '一般用于第 x 期，第 x 月',
                                prepend: '第',
                                append: '期'
                            }
                        ]
                    }
                ],

                code2: `<wti-form
            ref="form2"
            :fields="fields2"/>
---
fields2: [
    {
        children: [
            {
                key: 'key2',
                type: 'input',
                label: '必填输入框的label',
                rules: [
                    {
                        required: true,
                        message: '请输入',
                        trigger: [
                            'blur',
                            'change'
                        ]
                    }
                ],
            }
        ]
    }
]`,


                fields3: [
                    {
                        children: [
                            {
                                key: 'key3',
                                type: 'number-input',
                                label: '无法输入负数',
                                positive: true
                            }
                        ]
                    }
                ],

                code3: `<wti-form
            ref="form3"
            :fields="fields3"/>
---
fields3: [
    {
        children: [
            {
                key: 'key3',
                type: 'number-input',
                label: '无法输入负数',
                positive: true
            }
        ]
    }
]`,


                fields4: [
                    {
                        children: [
                            {
                                key: 'key4',
                                type: 'number-input',
                                label: '禁止小数点的输入',
                                onlyInt: true
                            }
                        ]
                    }
                ],

                code4: `<wti-form
            ref="form4"
            :fields="fields4"/>
---
fields4: [
    {
        children: [
            {
                key: 'key4',
                type: 'number-input',
                label: '禁止小数点的输入',
                onlyInt: true
            }
        ]
    }
]`,


                fields5: [
                    {
                        children: [
                            {
                                key: 'key5',
                                type: 'number-input',
                                label: '最多 2 位小数',
                                decimalLimit: 2
                            }
                        ]
                    }
                ],

                code5: `<wti-form
            ref="form5"
            :fields="fields5"/>
---
fields5: [
    {
        children: [
            {
                key: 'key5',
                type: 'number-input',
                label: '最多 2 位小数',
                decimalLimit: 2
            }
        ]
    }
]`,

                fields6: [
                    {
                        children: [
                            {
                                key: 'key6',
                                type: 'number-input',
                                label: '自动补完 2 位小数',
                                zeroPadding: 2
                            }
                        ]
                    }
                ],

                code6: `<wti-form
            ref="form6"
            :fields="fields6"/>
---
fields5: [
    {
        children: [
            {
                key: 'key5',
                type: 'number-input',
                label: '最多 2 位小数',
                decimalLimit: 2
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
