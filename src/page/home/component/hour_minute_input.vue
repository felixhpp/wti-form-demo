<template>
    <div class="formitem-box">
        <h2>时分输入框 HourMinuteInput</h2>
        <p>用于输入小时和分钟的输入框</p>

        <h3>基本用法</h3>
        <p>提交的值是 hh:mm:ss 格式。注意，这个是基于 <code>el-time-picker</code> 标签开发的，不适用于 <code>el-time-select</code> 标签的选项。</p>
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

        <h3>其他</h3>
        <p>Element UI 该组件的原生方法，大部分支持，例如可以传入属性：<code>is-range: true</code> 将其变为时间范围输入框</p>
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
    </div>
</template>

<script>
    export default {
        name: 'HourMinuteInput',
        data () {
            return {
                con: {
                    borderForm: false
                },

                fields1: [
                    {
                        children: [
                            {
                                key: 'key1',
                                label: '时分输入框',
                                type: 'hour-minute-input',
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
                label: '时分输入框',
                type: 'hour-minute-input',
            }
        ]
    }
]`,

                fields2: [
                    {
                        children: [
                            {
                                key: 'key2',
                                label: '时分范围输入框',
                                type: 'hour-minute-input',
                                'value-format': 'HH:mm',
                                // is-range: true
                                'picker-options': {
                                    selectableRange: '18:30:00 - 20:30:00'
                                }
                            }
                        ]
                    }
                ],

                code2: `<wti-form
            ref="form1"
            :fields="fields1"
            :border-form="false"/>
---
fields1: [
    {
        children: [
            {
                key: 'key2',
                label: '时分范围输入框',
                type: 'hour-minute-input',
                'value-format': 'HH:mm',
                // is-range: true
                'picker-options': {
                    selectableRange: '18:30:00 - 20:30:00'
                }
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
