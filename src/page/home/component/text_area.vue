<template>
    <div class="formitem-box">
        <h2>文本域输入框 TextArea</h2>
        <p>文本域输入框，很常见的表单组件。默认 4 行高度，不允许拖拽输入框大小。</p>

        <h3>基本用法</h3>
        <p>一个简简单单普普通通的文本域输入框</p>
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

        <h3>自适应高度 + 文字长度限制</h3>
        <p>最少 2 行高度，最多 6 行高度，最多输入 200 字</p>
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

        <h3>用户可拖拽输入框</h3>
        <p>
            <code>none</code> 默认，不可拖拽宽高；
            <code>both</code> 双向拖拽宽高；
            <code>horizontal</code> 左右拖拽宽度；
            <code>vertical</code> 垂直拖拽；
        </p>
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

        <el-divider/>
    </div>
</template>

<script>
    export default {
        name: 'Textarea',
        data () {
            return {
                fields1: [
                    {
                        children: [
                            {
                                key: 'key1',
                                type: 'textarea',
                                label: '一个文本域输入框',
                            }
                        ]
                    }
                ],

                code1: `<wti-form ref="form1"
            :fields="fields1">
---
fields1: [
    {
        children: [
            {
                key: 'key1',
                type: 'textarea',
                label: '一个文本域输入框',
            }
        ]
    }
]`,

                fields2: [
                    {
                        children: [
                            {
                                key: 'key2',
                                type: 'textarea',
                                label: '可变高度 + 字符限制',
                                autosize: {
                                    minRows: 2,
                                    maxRows: 6
                                },
                                showWordLimit: true,
                                maxlength: 200
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
                                key: 'key2',
                                type: 'textarea',
                                label: '可变高度 + 字符限制',
                                autosize: {
                                    minRows: 2,
                                    maxRows: 6
                                },
                                showWordLimit: true,
                                maxlength: 200
                            }
        ]
    }
]`,


                fields3: [
                    {
                        children: [
                            {
                                key: 'key3',
                                type: 'textarea',
                                label: '控制是否能被用户缩放',
                                resize: 'vertical'
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
                type: 'textarea',
                label: '控制是否能被用户缩放',
                resize: 'vertical'
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
