<template>
    <div class="formitem-box">
        <h2>时分输入框 HourMinuteInput</h2>
        <p>用于输入小时和分钟的输入框</p>

        <h3>基本用法</h3>
        <p>提交的值是 hh:mm:ss 格式</p>
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
                <div class="code">{{ code1 }}</div>
            </el-collapse-item>
        </el-collapse>

        <el-divider/>

        <h3>其他</h3>
        <p>也可以像 Element UI 那样支持很多功能，但是，除非你催更，否则，暂时，还不支持</p>
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
                                'key': 'key1',
                                'label': '时分输入框',
                                'type': 'hour-minute-input',
                                'step': '00:15',
                                'value-format': 'HH:mm:00',
                                editable: false
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
