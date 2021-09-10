<template>
    <div class="formitem-box">
        <h2>日期范围输入框 DateRangeInput</h2>
        <p>日期范围输入下拉框，用于处理需要提交范围日期的场景</p>

        <h3>基本用法</h3>
        <p>一个普通的日期范围输入框。</p>
        <p>考虑到不确定提交时后端接收的数据是什么格式，因此已自动把数组转为了字符串。有需要的可以自行通过 JSON.parse() 转换回数组</p>
        <p>例如，提交的值是这样的：'["2021-09-01","2021-10-13"]' ←这是一个字符串</p>
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
        <p>理论上可以支持更多功能（比如限制开始时间、结束时间等），但是我懒得添加了。有需要的话可以自己改，或者找我催更</p>
    </div>
</template>

<script>
    export default {
        name: 'DateRangeInput',
        data () {
            return {
                fields1: [
                    {
                        children: [
                            {
                                key: 'key1',
                                label: '一个日期输入框',
                                placeholder: '请输入',
                                type: 'date-range-input',
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
                key: 'key1',
                label: '一个日期输入框',
                placeholder: '请输入',
                type: 'date-range-input'
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
