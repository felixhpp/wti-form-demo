<template>
    <div class="formitem-box">
        <h2>表单元素通用属性 CommonAttr</h2>
        <p>这里分享一些多个表单组件通用属性的说明。</p>

        <el-tree :default-expand-all="true"
                 :data="[{label:'目录',
                    children:[
                        {label:'校验规则'},
                        {label:''},
                        {label:''},
                        {label:''},
                        {label:''},
                    ]}]"/>

        <h3>校验规则</h3>
        <p>表单组件的校验规则，底层源自于 Element UI 的 rules 属性，所以，你可以自己基于其规则，编写 rules 来实现校验需求</p>
        <p>这里列举几个常见 rules 规则，包括必填、长度限制、自定义校验函数</p>

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
        name: 'FormitemCommon',
        data () {
            return {
                fields1: [
                    {
                        label: '规则列举',
                        children: [
                            {
                                key: 'key1',
                                type: 'input',
                                label: '必填规则，触发时机 change + blur',
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
                            },
                            {
                                key: 'key2',
                                type: 'input',
                                label: '长度 2~4 个字，触发时机 change + blur',
                                rules: [
                                    {
                                        trigger: [
                                            'blur',
                                            'change'
                                        ],
                                        max: 4,
                                        message: '长度应当处于2到4之间',
                                        min: 2
                                    }
                                ],
                            },
                            {
                                key: 'key3',
                                type: 'date-input',
                                label: '年龄校验，18 ~ 60 岁。触发事件 change + blur',
                                rules: [
                                    {
                                        validator (rule, value, callback) {
                                            if (!value) {
                                                return callback(new Error('必须填写年龄'));
                                            }
                                            const v = Number(new Date(value));
                                            let today = new Date();
                                            let d1 = today.setFullYear(today.getFullYear() - 18);
                                            d1 = Number(d1);
                                            if (d1 < v) {
                                                return callback(new Error('必须年满 18 岁'));
                                            }
                                            today = new Date();
                                            let d2 = today.setFullYear(today.getFullYear() - 60);
                                            d2 = Number(d2);
                                            if (d2 > v) {
                                                return callback(new Error('必须小于 60 岁'));
                                            }
                                        },
                                        trigger: [
                                            'blur',
                                            'change'
                                        ],
                                    }
                                ],
                            },
                        ]
                    }
                ],

                code1: `<wti-form ref="form1"
                :fields="fields1"
                :border-form="false"/>
---
fields2: [
    {
        children: [
            {
                key: 'key1',
                type: 'input',
                label: '必填规则',
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
            };
        },
        methods: {}
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
