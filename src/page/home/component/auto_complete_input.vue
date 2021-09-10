<template>
    <div class="formitem-box">
        <h2>输入搜索下拉框 AutoCompleteInput</h2>
        <p>应对场景：某个通用接口，可以搜索到若干候选项。在选中其中一个候选项后，可以自动将值填充到表单里的多个表单元素中</p>
        <p>还没来得及写文档</p>

        <h3>基本用法</h3>
        <p>配置好表单组件，然后输入字符串，自动将内容回显到输入框里</p>
        <p>接口返回数据请自行查看 network</p>
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

        <h3>自动带入</h3>
        <p>当选择其中一个选项后，该选项里某些值，会被同步带入到表单对应的元素里</p>
        <wti-form ref="form2"
                  :fields="fields2"/>
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

        <h3>特殊回调</h3>
        <p>在搜索到数据后，会触发 <code>fetchSuggestions</code> 回调函数，入参是请求到的所有值</p>
        <p>在选中后，会触发 <code>onSelect</code> 回调，入参是当前选中的值所在的那条数据。</p>
        <p>你可以在控制台看到每个回调函数触发后的打印内容。</p>
        <wti-form ref="form3"
                  :fields="fields3"/>
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
    </div>
</template>

<script>
    export default {
        name: 'AutoCompleteInput',
        mounted () {
            // this.$ajax.autocomplete({
            //     search: '1'
            // }).then(res => {
            //     console.log(res);
            // });
        },
        data () {
            return {
                fields1: [
                    {
                        children: [
                            {
                                'autoCompleteKeys': [],
                                'searchUrl': '/autocomplete',
                                'searchKey': 'search',
                                'mainShowKey': 'search',
                                'key': 'key1',
                                'label': '基础用法',
                                'placeholder': '请输入',
                                'type': 'auto-complete-input',
                            }
                        ]
                    }
                ],

                code1: `<wti-form ref="form1"
            :fields="fields1"/>
---
fields1: [
    {
        children: [
            {
                'autoCompleteKeys': [],
                'searchUrl': '/autocomplete',
                'searchKey': 'search',
                'mainShowKey': 'search',
                'key': 'key1',
                'label': '基础用法',
                'placeholder': '请输入',
                'type': 'auto-complete-input',
            }
        ]
    }
]
`,

                fields2: [
                    {
                        children: [
                            {
                                'autoCompleteKeys': [
                                    'keyA',
                                    'keyB'
                                ],
                                'searchUrl': '/autocomplete',
                                'searchKey': 'search',
                                'mainShowKey': 'search',
                                'key': 'key2',
                                'label': '基础用法',
                                'placeholder': '请输入',
                                'type': 'auto-complete-input',
                            },
                            {
                                'key': 'keyA',
                                'label': 'keyA',
                                'type': 'input',
                                'disableDefault': true,
                                'nextRowFirst': true
                            },
                            {
                                'key': 'keyB',
                                'label': 'keyB',
                                'type': 'input',
                            }
                        ]
                    }
                ],

                code2: `<wti-form ref="form2"
            :fields="fields2"/>
---
fields2: [
    {
        children: [
            {
                'autoCompleteKeys': [
                    'keyA',
                    'keyB'
                ],
                'searchUrl': '/autocomplete',
                'searchKey': 'search',
                'mainShowKey': 'search',
                'key': 'key2',
                'label': '基础用法',
                'placeholder': '请输入',
                'type': 'auto-complete-input',
            },
            {
                'key': 'keyA',
                'label': 'keyA',
                'type': 'input',
                'disableDefault': true,
                'nextRowFirst': true
            },
            {
                'key': 'keyB',
                'label': 'keyB',
                'type': 'input',
            }
        ]
    }
]`,


                fields3: [
                    {
                        children: [
                            {
                                'autoCompleteKeys': [],
                                'searchUrl': '/autocomplete',
                                'searchKey': 'search',
                                'mainShowKey': 'search',
                                'key': 'key3',
                                'label': '回调函数',
                                'placeholder': '请输入',
                                'type': 'auto-complete-input',
                                onSelect (row) {
                                    console.log('onSelect', row);
                                },
                                fetchSuggestions (data) {
                                    console.log('fetchSuggestions', data);
                                }
                            }
                        ]
                    }
                ],

                code3: `<wti-form ref="form3"
            :fields="fields3"/>
---
fields1: [
    {
        children: [
            {
                'autoCompleteKeys': [],
                'searchUrl': '/autocomplete',
                'searchKey': 'search',
                'mainShowKey': 'search',
                'key': 'key3',
                'label': '回调函数',
                'placeholder': '请输入',
                'type': 'auto-complete-input',
                onSelect (row) {
                    console.log('onSelect', row);
                },
                fetchSuggestions (data) {
                    console.log('fetchSuggestions', data);
                }
            }
        ]
    }
]
`,
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
