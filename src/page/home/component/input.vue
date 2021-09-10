<template>
    <div class="formitem-box">
        <h2>文本输入框 Input</h2>
        <p>最基本的文本输入框啦</p>

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

        <el-divider/>

        <h3>必填</h3>
        <p>你可以直接点击提交按钮试试。其他例子同这种写法，所以其他表单组件里就不写了。</p>
        <wti-form ref="form2"
                  :fields="fields2"
                  :border-form="false"/>
        <div class="submit-line">
            <el-button type="primary" @click="submit('form2')">提交按钮</el-button>
            <span class="tips">请查看控制台看提交结果</span>
        </div>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ code2 }}</code></pre>
            </el-collapse-item>
        </el-collapse>

        <el-divider/>

        <h3>最大最小长度限制</h3>
        <p>可以为空，但不是空的话就必须符合长度要求</p>
        <wti-form ref="form3"
                  :fields="fields3"
                  :border-form="false"/>
        <div class="submit-line">
            <el-button type="primary" @click="submit('form3')">提交按钮</el-button>
            <span class="tips">请查看控制台看提交结果</span>
        </div>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ code3 }}</code></pre>
            </el-collapse-item>
        </el-collapse>

        <el-divider/>

        <h3>输入框前后添加文字</h3>
        <p>其实跟 elementui 的玩法是差不多的</p>
        <wti-form ref="form4"
                  :fields="fields4"
                  :border-form="false"/>
        <div class="submit-line">
            <el-button type="primary" @click="submit('form4')">提交按钮</el-button>
            <span class="tips">请查看控制台看提交结果</span>
        </div>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ code4 }}</code></pre>
            </el-collapse-item>
        </el-collapse>

        <el-divider/>

        <h3>默认值</h3>
        <p>在初始化的时候，如果没有给值，那么则会使用默认值。如果给值的则使用给的值。其他例子同这种写法，所以其他表单组件里就不写了。</p>
        <wti-form ref="form5"
                  :fields="fields5"
                  :border-form="false"/>
        <div class="submit-line">
            <el-button type="primary" @click="submit('form5')">提交按钮</el-button>
            <span class="tips">请查看控制台看提交结果</span>
        </div>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ code5 }}</code></pre>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: 'Input',
        data () {
            return {
                fields1: [
                    {
                        children: [
                            {
                                key: 'key1',
                                type: 'input',
                                label: '我是输入框的 label'
                            }
                        ]
                    }
                ],

                code1: `<wti-form
            ref="form1"
            :fields="fields1"
            :border-form="false"/>
---
fields1: [
    {
        children: [
            {
                key: 'key1',
                type: 'input',
                label: '我是输入框的 label'
            }
        ]
    }
]`,

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
                ],

                code2: `<wti-form
            ref="form2"
            :fields="fields2"
            :border-form="false"/>
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
                                type: 'input',
                                label: '最少3个字，最多6个字',
                                rules: [
                                    {
                                        trigger: [
                                            'blur',
                                            'change'
                                        ],
                                        max: 6,
                                        message: '长度应当处于3到6之间',
                                        min: 3
                                    }
                                ],
                            }
                        ]
                    }
                ],

                code3: `<wti-form
            ref="form3"
            :fields="fields3"
            :border-form="false"/>
---
fields3: [
    {
        children: [
            {
                key: 'key3',
                type: 'input',
                label: '最少3个字，最多6个字',
                rules: [
                    {
                        trigger: [
                            'blur',
                            'change'
                        ],
                        max: 6,
                        message: '长度应当处于3到6之间',
                        min: 3
                    }
                ],
            }
        ]
    }
]`,


                fields4: [
                    {
                        children: [
                            {
                                key: 'key4',
                                type: 'input',
                                label: '比如第 x 月这样就可以这么用',
                                prepend: '第',
                                append: '月',
                                placeholder: '请输入月份'
                            }
                        ]
                    }
                ],

                code4: `<wti-form
            ref="form4"
            :fields="fields4"
            :border-form="false"/>
---
fields4: [
    {
        children: [
            {
                key: 'key4',
                type: 'input',
                label: '比如第 x 月这样就可以这么用',
                prepend: '第',
                append: '月',
                placeholder: '请输入月份'
            }
        ]
    }
]`,


                fields5: [
                    {
                        children: [
                            {
                                key: 'key5',
                                type: 'input',
                                label: '给个默认值吧',
                                defaultValue: '1234'
                            }
                        ]
                    }
                ],

                code5: `<wti-form
            ref="form5"
            :fields="fields5"
            :border-form="false"/>
---
fields5: [
    {
        children: [
            {
                key: 'key5',
                type: 'input',
                label: '给个默认值吧',
                defaultValue: '1234'
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
