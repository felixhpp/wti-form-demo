<template>
    <div class="formitem-box">
        <h2>字典下拉框 DynamicSelect</h2>
        <p>字典下拉框，应对场景是有一个通用字典接口，通过传入父 key，自动请求到该父 key 下所有选项，并作为下拉框的候选项</p>

        <h3>基本用法</h3>
        <p>一个表单里，多个下拉框不同的 parentKey 会同步更新。</p>
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

        <h3>配置属性</h3>
        <p>可以在 Vue.use 的时候全局配置 <code>dynamicSelectOption</code> 这个 props 属性，也可以在组件应用的时候配置。</p>
        <table>
            <tr>
                <td>属性</td>
                <td>类型</td>
                <td>描述</td>
            </tr>
            <tr>
                <td>dictUrl</td>
                <td>string</td>
                <td>字典请求的接口 url</td>
            </tr>
            <tr>
                <td>queryKey</td>
                <td>string/不传</td>
                <td>非必填。当其为空时，入参是一个数组。当其存在时，请求数据是一个对象，这个字段是对象的 key</td>
            </tr>
            <tr>
                <td>parentKey</td>
                <td>string</td>
                <td>返回结果的 parentKey。下拉框将显示所有 parentKey 和其配置的 parentKey 匹配的内容</td>
            </tr>
            <tr>
                <td>value</td>
                <td>string</td>
                <td>下拉框的值</td>
            </tr>
            <tr>
                <td>label</td>
                <td>string</td>
                <td>下拉框显示的文字</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'DynamicSelect',
        data () {
            return {
                dynamicSelectOption: {
                    // 这是字典接口的 url
                    dictUrl: '/api/dict',
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
                                type: 'dynamic-select',
                                label: '我是动态下拉框，parentKey是 100',
                                parentKey: '100'
                            },
                            {
                                key: 'key2',
                                type: 'dynamic-select',
                                label: '我是动态下拉框，parentKey是 101',
                                parentKey: '101'
                            },
                            {
                                key: 'key3',
                                type: 'dynamic-select',
                                label: '我是动态下拉框，parentKey是 102',
                                parentKey: '102'
                            },
                            {
                                key: 'key4',
                                type: 'dynamic-select',
                                label: '我是动态下拉框，parentKey是 103',
                                parentKey: '103'
                            },
                        ]
                    }
                ],

                code1: `<wti-form ref="form1"
              :fields="fields1"
              :dynamic-select-option="dynamicSelectOption"/>
---
dynamicSelectOption: {
    // 这是字典接口的 url
    dictUrl: '/api/dict',
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
                type: 'dynamic-select',
                label: '我是动态下拉框，parentKey是 100',
                parentKey: '100'
            },
            {
                key: 'key2',
                type: 'dynamic-select',
                label: '我是动态下拉框，parentKey是 101',
                parentKey: '101'
            },
            {
                key: 'key3',
                type: 'dynamic-select',
                label: '我是动态下拉框，parentKey是 102',
                parentKey: '102'
            },
            {
                key: 'key4',
                type: 'dynamic-select',
                label: '我是动态下拉框，parentKey是 103',
                parentKey: '103'
            },
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

    table {
        border-collapse: collapse;
    }

    tr, td {
        border: 1px solid #ccc;
        height: 24px;
        line-height: 22px;
        font-size: 14px;
        padding: 0 10px;
    }
</style>
