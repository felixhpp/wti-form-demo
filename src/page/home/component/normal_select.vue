<template>
    <div class="formitem-box">
        <h2>普通下拉框 NormalSelect</h2>
        <p>一个普通的下拉框。一般情况下，候选项是初始固定的。用于处理需要下拉选择的情况，暂时只支持单选。推荐 3 个元素以上的情况下，使用</p>

        <h3>基本用法</h3>
        <p>单纯的下拉框</p>
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

        <h3>动态添加/删除候选项</h3>
        <p>你可以点击添加/删除按钮试试</p>
        <wti-form ref="form2"
                  :fields="fields2"/>
        <div class="submit-line">
            <el-button type="primary" @click="submit('form2')">提交按钮</el-button>
            <el-button type="primary" @click="addOption">添加选项</el-button>
            <el-button type="primary" @click="delOption">删除选项</el-button>
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
        name: 'NormalSelect',
        data () {
            return {
                fields1: [
                    {
                        children: [
                            {
                                options: [
                                    {
                                        value: 'value_a',
                                        label: 'label A'
                                    },
                                    {
                                        value: 'value_b',
                                        label: 'label B'
                                    },
                                    {
                                        value: 'value_c',
                                        label: 'label C'
                                    },
                                    {
                                        value: 'value_d',
                                        label: 'label D'
                                    }
                                ],
                                key: 'key1',
                                label: '一个下拉框',
                                placeholder: '请选择',
                                type: 'normal-select'
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
                options: [
                    {
                        value: 'value_a',
                        label: 'label A'
                    },
                    {
                        value: 'value_b',
                        label: 'label B'
                    },
                    {
                        value: 'value_c',
                        label: 'label C'
                    },
                    {
                        value: 'value_d',
                        label: 'label D'
                    }
                ],
                key: 'key A',
                label: '一个下拉框',
                placeholder: '请选择',
                type: 'normal-select'
            }
        ]
    }
]`,

                fields2: [
                    {
                        children: [
                            {
                                options: [
                                    {
                                        value: 'value_a',
                                        label: 'label A'
                                    },
                                ],
                                key: 'key2',
                                label: '一个下拉框',
                                placeholder: '请选择',
                                type: 'normal-select'
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
                options: [
                    {
                        value: 'value_a',
                        label: 'label A'
                    },
                ],
                key: 'key2',
                label: '一个下拉框',
                placeholder: '请选择',
                type: 'normal-select'
            }
        ]
    }
]
---
addOption () {
    const options = this.fields2[0].children[0].options;
    const i = options.length;
    options.push({
        value: i,
        label: \`第\${i + 1}个选项\`
    });
    this.$message.success('添加成功');
},
delOption () {
    const options = this.fields2[0].children[0].options;
    const i = options.length;
    if (i === 0) {
        return this.$message.error('已经删完了，不能再删了');
    }
    options.splice(i - 1, 1);
    this.$message.success('删除成功');
}
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
            },
            addOption () {
                const options = this.fields2[0].children[0].options;
                const i = options.length;
                options.push({
                    value: i,
                    label: `第${i + 1}个选项`
                });
                this.$message.success('添加成功');
            },
            delOption () {
                const options = this.fields2[0].children[0].options;
                const i = options.length;
                if (i === 0) {
                    return this.$message.error('已经删完了，不能再删了');
                }
                options.splice(i - 1, 1);
                this.$message.success('删除成功');
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
