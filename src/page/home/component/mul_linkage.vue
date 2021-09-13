<template>
    <div class="formitem-box">
        <h2>多级联动选择框 MulLinkage</h2>
        <p>支持 2~4 级联动，需要跟字典接口数据格式保持一致。与多级下拉框区分，这个的关键是会前后联动</p>

        <h3>基本用法</h3>
        <p>这是一个简单的三级联动下拉框</p>
        <wti-form ref="form1"
                  :fields="fields1"
                  :dynamic-select-option="dynamicSelectOption"/>
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
        name: 'MulLinkage',
        data () {
            return {
                dynamicSelectOption: {
                    // 这是字典接口的 url
                    dictUrl: '/dict',
                    // 异步请求时，请求内容是一个对象或一个数组。
                    // 如果是对象，那么包含一个 key 和一个数组。
                    // 如果是数组，那么只有这个数组。
                    // 数组是所有字典 FormItem 的 parentKey 的集合
                    queryKey: 'search', // 这是请求时那个 key。如果为空，则请求时是一个数组，而不是一个对象
                    parentKey: 'parentKey', // 这是返回结果的 parentKey。意思是，同一个 parentKey 归属于同一个下拉框选项
                    value: 'code', // 这是下拉框选项的值
                    label: 'label' // 这是下拉框选项的 label
                },
                fields1: [
                    {
                        children: [
                            {
                                key: 'key1',
                                type: 'mul-linkage',
                                label: '这是一个三级联动下拉框',
                                linkLevel: 3,
                                firstParentKey: '100'
                            }
                        ]
                    }
                ],

                code1: `<wti-form ref="form1"
              :fields="fields1"
              :dynamic-select-option="dynamicSelectOption"/>
---
dynamicSelectOption: {
    // 这是字典接口的 url
    dictUrl: '/dict',
    // 异步请求时，请求内容是一个对象或一个数组。
    // 如果是对象，那么包含一个 key 和一个数组。
    // 如果是数组，那么只有这个数组。
    // 数组是所有字典 FormItem 的 parentKey 的集合
    queryKey: 'search', // 这是请求时那个 key。如果为空，则请求时是一个数组，而不是一个对象
    parentKey: 'parentKey', // 这是返回结果的 parentKey。意思是，同一个 parentKey 归属于同一个下拉框选项
    value: 'code', // 这是下拉框选项的值
    label: 'label' // 这是下拉框选项的 label
},
fields1: [
    {
        children: [
            {
                key: 'key1',
                type: 'mul-linkage',
                label: '这是一个三级联动下拉框',
                linkLevel: 3,
                firstParentKey: '100'
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
