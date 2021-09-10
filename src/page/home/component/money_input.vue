<template>
    <div class="formitem-box">
        <h2>金额文本输入框 MoneyInput</h2>
        <p>最基本的文本输入框啦</p>

        <h3>基本用法</h3>
        <p>数据单位是元，根据显示单位自动切换显示文字，小数点后不限制。在焦点时是正常输入框，取消焦点后自动添加<b>千分位</b></p>
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

        <h3>只能输入正数</h3>
        <p>不允许输入负数的金额。方法是 positive 属性设置为 true</p>
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

        <h3>单位为万元</h3>
        <p>但是实际提交的值，还是以元为单位进行提交的</p>
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
        name: 'MoneyInput',
        data () {
            return {
                fields1: [
                    {
                        children: [
                            {
                                key: 'key1',
                                type: 'money-input',
                                label: '金额输入框',
                                append: '元'
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
                type: 'money-input',
                label: '金额输入框',
                append: '元',
                size: 6
            }
        ]
    }
]`,

                fields2: [
                    {
                        children: [
                            {
                                key: 'key2',
                                type: 'money-input',
                                label: '非负金额输入框',
                                append: '元',
                                positive: true,
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
                type: 'money-input',
                label: '非负金额输入框',
                append: '元',
                positive: true,
            }
        ]
    }
]`,


                fields3: [
                    {
                        children: [
                            {
                                key: 'key3',
                                type: 'money-input',
                                label: '非负金额输入框',
                                append: '万元'
                            }
                        ]
                    }
                ],

                code3: `<wti-form ref="form3"
            :fields="fields3"/>
---
fields3: [
    {
        children: [
            {
                key: 'key3',
                type: 'money-input',
                label: '非负金额输入框',
                append: '万元'
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

    b {
        font-weight: bold;
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
