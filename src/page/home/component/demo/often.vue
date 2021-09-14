<template>
    <div id="base">
        <h2>常见配置</h2>
        <p>给出本组件的常见配置</p>

        <el-tree :default-expand-all="true"
                 :data="[{label:'目录',
                    children:[
                        {label:'分栏表单'},
                        {label:'自定义每列要素数'},
                        {label:'表单是否带边框'},
                        {label:'支持收起和展开的表单'},
                        {label:'大表单专用（分块布局，浏览模式切换，全部收起/展开）'},
                    ]}]"/>

        <h3>分栏表单</h3>
        <p>表单有一种常见的场景，是根据不同的表单元素，划分到不同的区块里。方便管理和阅读。不过他们提交的时候，数据都是一起提交的，具体可以查看提交结果</p>
        <wti-form :fields="fields1"
                  ref="form1"/>

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

        <h3>自定义每列要素数</h3>
        <p>默认情况下，表单每行是 2 个表单元素。但是根据实际需要，我们也可以让每行 4 个，或者每行一个。</p>
        <p>这个是通过设置 formItemCol 属性来实现（这个本质是设置 <code>el-col</code> 标签的 <code>span</code> 属性）</p>
        <p>
            <el-radio-group v-model="formItemCol">
                <el-radio-button :label="24">一行一个</el-radio-button>
                <el-radio-button :label="12">一行两个</el-radio-button>
                <el-radio-button :label="8">一行三个</el-radio-button>
                <el-radio-button :label="6">一行四个</el-radio-button>
            </el-radio-group>
        </p>
        <wti-form :fields="fields2"
                  ref="form2"
                  :form-item-col="formItemCol"/>

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

        <h3>表单是否带边框</h3>
        <p>默认情况下，表格是带边框的，但也许你会觉得这个边框并没有什么用</p>
        <wti-form :fields="fields3"
                  :border-form="false"
                  ref="form3"/>

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

        <h3>支持收起和展开的表单</h3>
        <p>如果表单元素很多，表单比较长，那么就基于分块的基础上，支持对每块表单的收起和展开，可以提高用户体验。</p>
        <p>showFoldBtn: true，单个表单显示收起/展开按钮</p>
        <p>showAllFoldBtn: true，显示全部表单收起/展开按钮</p>
        <wti-form :fields="fields4"
                  :show-fold-btn="true"
                  :show-all-fold-btn="true"
                  ref="form4"/>

        <div class="submit-line">
            <el-button type="primary" @click="submit('form4')">提交按钮</el-button>
            <span class="tips">请查看控制台看提交结果</span>
        </div>

        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>

                <pre v-highlightjs><code class="javascript">{{ code4 }}</code></pre>
            </el-collapse-item>
        </el-collapse>

        <el-divider/>

        <h3>大表单专用（分块布局，浏览模式切换，全部收起/展开）</h3>
        <p>对于大表单，提供了几个配置专门处理这个场景。</p>
        <p>首先是常规的分块展示（见本页示例一），其次是收起和展开（见本页示例四）。</p>
        <p>除此之外，我们还可以通过将大表单拆分为带 tab 模式的小表单（showScanTypeBtn）</p>
        <wti-form :fields="fields4"
                  :show-fold-btn="true"
                  :show-all-fold-btn="true"
                  :show-scan-type-btn="true"
                  ref="form4"/>

        <div class="submit-line">
            <el-button type="primary" @click="submit('form4')">提交按钮</el-button>
            <span class="tips">请查看控制台看提交结果</span>
        </div>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>

                <pre v-highlightjs><code class="javascript">{{ code4 }}</code></pre>
            </el-collapse-item>
        </el-collapse>

        <el-divider/>
    </div>
</template>

<script>
    export default {
        name: 'Base',
        data () {
            return {
                fields1: [
                    {
                        label: '用户基本信息',
                        children: [
                            {
                                key: 'name',
                                type: 'input',
                                label: '姓名'
                            },
                            {
                                options: [
                                    {
                                        value: 'male',
                                        label: '男'
                                    },
                                    {
                                        value: 'female',
                                        label: '女'
                                    },
                                ],
                                key: 'gender',
                                label: '性别',
                                type: 'radio'
                            },
                            {
                                options: [
                                    {
                                        value: '自由职业者',
                                        label: '自由职业者'
                                    },
                                    {
                                        value: '体制内',
                                        label: '体制内'
                                    },
                                    {
                                        value: '打工人',
                                        label: '打工人'
                                    },
                                    {
                                        value: '其他',
                                        label: '其他'
                                    },
                                ],
                                key: 'job',
                                label: '职业',
                                placeholder: '请选择',
                                type: 'normal-select'
                            },
                        ]
                    },
                    {
                        label: '资产信息',
                        children: [
                            {
                                key: 'money',
                                type: 'money-input',
                                label: '定金',
                                append: '元'
                            },
                            {
                                key: 'reg_date',
                                label: '注册时间',
                                placeholder: '请输入',
                                type: 'date-input'
                            },
                            {
                                key: 'rate',
                                type: 'rate-input',
                                label: '预期利率',
                            },
                        ]
                    }
                ],

                code1: `<wti-form :fields="fields1"
                  ref="form1"/>
---
fields1: [
    {
        label: '用户基本信息',
        children: [
            {
                key: 'name',
                type: 'input',
                label: '姓名'
            },
            {
                options: [
                    {
                        value: 'male',
                        label: '男'
                    },
                    {
                        value: 'female',
                        label: '女'
                    },
                ],
                key: 'gender',
                label: '性别',
                type: 'radio'
            },
            {
                options: [
                    {
                        value: '自由职业者',
                        label: '自由职业者'
                    },
                    {
                        value: '体制内',
                        label: '体制内'
                    },
                    {
                        value: '打工人',
                        label: '打工人'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    },
                ],
                key: 'job',
                label: '职业',
                placeholder: '请选择',
                type: 'normal-select'
            },
        ]
    },
    {
        label: '资产信息',
        children: [
            {
                key: 'money',
                type: 'money-input',
                label: '定金',
                append: '元'
            },
            {
                key: 'reg_date',
                label: '注册时间',
                placeholder: '请输入',
                type: 'date-input'
            },
            {
                key: 'rate',
                type: 'rate-input',
                label: '预期利率',
            },
        ]
    }
]`,

                formItemCol: 12,
                fields2: [
                    {
                        label: '用户信息登记',
                        children: [
                            {
                                key: 'name1',
                                type: 'input',
                                label: '示例1'
                            },
                            {
                                key: 'name2',
                                type: 'input',
                                label: '示例2'
                            },
                            {
                                key: 'name3',
                                type: 'input',
                                label: '示例3'
                            },
                            {
                                key: 'name4',
                                type: 'input',
                                label: '示例4'
                            },
                            {
                                key: 'name5',
                                type: 'input',
                                label: '示例5'
                            },
                        ]
                    }
                ],
                code2: `<el-radio-group v-model="formItemCol" size="mini">
    <el-radio-button :label="24">一行一个</el-radio-button>
    <el-radio-button :label="12">一行两个</el-radio-button>
    <el-radio-button :label="8">一行三个</el-radio-button>
    <el-radio-button :label="6">一行四个</el-radio-button>
</el-radio-group>
<wti-form :fields="fields2"
              ref="form2"
              :form-item-col="formItemCol"/>
---
formItemCol: 12,
fields2: [
    {
        label: '用户信息登记',
        children: [
            {
                key: 'name1',
                type: 'input',
                label: '示例1'
            },
            {
                key: 'name2',
                type: 'input',
                label: '示例2'
            },
            {
                key: 'name3',
                type: 'input',
                label: '示例3'
            },
            {
                key: 'name4',
                type: 'input',
                label: '示例4'
            },
            {
                key: 'name5',
                type: 'input',
                label: '示例5'
            },
        ]
    }
]`,


                fields3: [
                    {
                        label: '用户基本信息',
                        children: [
                            {
                                key: 'name',
                                type: 'input',
                                label: '姓名'
                            }
                        ]
                    },
                    {
                        label: '资产信息',
                        children: [
                            {
                                key: 'money',
                                type: 'money-input',
                                label: '定金',
                                append: '元'
                            },
                        ]
                    }
                ],

                code3: `<wti-form :fields="fields3"
                  :border-form="false"
                  ref="form3"/>
---
fields3: [
    {
        label: '用户基本信息',
        children: [
            {
                key: 'name',
                type: 'input',
                label: '姓名'
            }
        ]
    },
    {
        label: '资产信息',
        children: [
            {
                key: 'money',
                type: 'money-input',
                label: '定金',
                append: '元'
            },
        ]
    }
]`,

                fields4: [
                    {
                        label: '用户基本信息',
                        children: [
                            {
                                key: 'name',
                                type: 'input',
                                label: '姓名'
                            },
                        ]
                    },
                    {
                        label: '资产信息',
                        children: [
                            {
                                key: 'money',
                                type: 'money-input',
                                label: '定金',
                                append: '元'
                            },
                        ]
                    },
                    {
                        label: '联系信息',
                        children: [
                            {
                                key: 'phone',
                                type: 'normal-number',
                                label: '电话'
                            },
                        ]
                    },
                ],

                code4: `<wti-form :fields="fields4"
                  :show-fold-btn="true"
                  ref="form4"/>
---
fields4: [
    {
        label: '用户基本信息',
        children: [
            {
                key: 'name',
                type: 'input',
                label: '姓名'
            },
        ]
    },
    {
        label: '资产信息',
        children: [
            {
                key: 'money',
                type: 'money-input',
                label: '定金',
                append: '元'
            },
        ]
    },
    {
        label: '联系信息',
        children: [
            {
                key: 'phone',
                type: 'normal-number',
                label: '电话'
            },
        ]
    },
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

    #base {
        position: relative;
        width: 100%;

    }


    .collapse {
        position: relative;
        width: 100%;

        .code {
            white-space: pre;
            background: #fafafa;
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 10px;
        }
    }
</style>
