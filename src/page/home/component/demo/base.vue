<template>
    <div id="base">
        <h2>常见用法</h2>
        <p>给出本组件的常见用法</p>

        <el-tree :default-expand-all="true"
                 :data="[{label:'目录',children:[
                     {label:'典型表单'},{label:'横排表单'},
                     {label:'表单全局禁用'},{label:'纯文本模式表单'},]}]"/>

        <h3>典型表单</h3>
        <p>包含各种表单项，比如文本输入框，数字输入框，单选框，多选框、子表单等</p>

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

        <h3>横排表单</h3>
        <p>每排一个。label 右对齐，自定义 label 宽度为 100px 宽，不要标题行，不要外框。</p>
        <p>注意，如果再限制一下容器宽度，那么就跟 Element UI 给的表单示例是一模一样了。</p>
        <p>也可以通过另外 2 个表单元素属性来限制，参照 表单元素通用属性页 的配置方法</p>

        <wti-form :fields="fields2"
                  label-position="right"
                  :form-item-col="24"
                  :border-form="false"
                  label-width="100px"
                  ref="form2"/>

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

        <h3>表单全局禁用</h3>
        <p>当我们提交表单、或者其他场景时，需要禁止用户修改表单元素。这个时候，我们需要对全局表单进行禁用限制。</p>
        <p>注意，禁用状态下，只是禁止了用户操作，但是仍然是可以通过 js 进行添加、删除的</p>

        <p>
            <el-radio-group v-model="disableStatus">
                <el-radio-button :label="true">禁用</el-radio-button>
                <el-radio-button :label="false">取消禁用</el-radio-button>
            </el-radio-group>
        </p>
        <wti-form :fields="fields3"
                  :all-disabled="disableStatus"
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
    </div>
</template>

<script>
    export default {
        name: 'DemoBase',
        data () {
            return {
                fields1: [
                    {
                        label: '用户信息登记',
                        children: [
                            {
                                key: 'name',
                                type: 'input',
                                label: '用户名称'
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
                            {
                                key: 'money',
                                type: 'money-input',
                                label: '定金',
                                append: '元'
                            },
                            {
                                autoCompleteKeys: [],
                                searchUrl: '/autocomplete',
                                searchKey: 'search',
                                mainShowKey: 'search',
                                key: 'code',
                                label: '输入搜索',
                                placeholder: '请输入',
                                type: 'auto-complete-input',
                            },
                            {
                                key: 'reg_date',
                                label: '注册时间',
                                placeholder: '请输入',
                                type: 'date-input'
                            },
                            {
                                key: 'timearea',
                                label: '有效范围',
                                placeholder: '请输入',
                                type: 'date-range-input'
                            },
                            {
                                key: 'notice_time',
                                label: '每日短信通知时刻',
                                type: 'hour-minute-input',
                            },
                            {
                                key: 'number_limit',
                                type: 'number-input',
                                label: '数量限制',
                                append: '个'
                            },
                            {
                                key: 'dict_code',
                                type: 'dynamic-select',
                                label: '这是一个字典下拉框（想不出来用处了）',
                                parentKey: '101'
                            },
                            {
                                key: 'rate',
                                type: 'rate-input',
                                label: '存款利率',
                            },
                            {
                                key: 'area',
                                type: 'mul-linkage',
                                label: '三级联动下拉框，',
                                linkLevel: 3,
                                firstParentKey: '100'
                            },
                            {
                                key: 'address',
                                type: 'textarea',
                                label: '详细地址',
                                span: 24
                            },
                            {
                                // key
                                key: 'testInput',
                                // 小型表单
                                type: 'child-form',
                                // 是否允许删除单个子表单，默认 true（允许）（未完成）
                                deleteEnable: true,
                                // 是否允许新增单个子表单，默认 true（允许）（未完成）
                                addEnable: true,
                                // 每个小表单头的文字部分，以及新增按钮的部分
                                headerLabel: '面签人员信息',
                                // 里面是表单的每一项，写法和外面的没区别
                                childrenForm: [
                                    {
                                        key: 'dict_code',
                                        type: 'dynamic-select',
                                        label: '这是一个字典下拉框（想不出来用处了）',
                                        parentKey: '101'
                                    },
                                ]
                            },
                        ]
                    }
                ],

                code1: `<wti-form :fields="fields1"
              ref="form1"/>
---
fields1: [
    {
        label: '用户信息登记',
        children: [
            {
                key: 'name',
                type: 'input',
                label: '用户名称'
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
            {
                key: 'money',
                type: 'money-input',
                label: '定金',
                append: '元'
            },
            {
                key: 'money',
                type: 'money-input',
                label: '定金',
                append: '元'
            },
            {
                autoCompleteKeys: [],
                searchUrl: '/autocomplete',
                searchKey: 'search',
                mainShowKey: 'search',
                key: 'code',
                label: 'code码',
                placeholder: '请输入',
                type: 'auto-complete-input',
            },
            {
                key: 'reg_date',
                label: '注册时间',
                placeholder: '请输入',
                type: 'date-input'
            },
            {
                key: 'timearea',
                label: '有效范围',
                placeholder: '请输入',
                type: 'date-range-input'
            },
            {
                key: 'notice_time',
                label: '每日短信通知时刻',
                type: 'hour-minute-input',
            },
            {
                key: 'number_limit',
                type: 'number-input',
                label: '数量限制',
                append: '个'
            },
            {
                key: 'dict_code',
                type: 'dynamic-select',
                label: '这是一个字典下拉框（想不出来用处了）',
                parentKey: '101'
            },
            {
                key: 'rate',
                type: 'rate-input',
                label: '存款利率',
            },
            {
                key: 'area',
                type: 'mul-linkage',
                label: '三级联动下拉框，',
                linkLevel: 3,
                firstParentKey: '100'
            },
            {
                key: 'address',
                type: 'textarea',
                label: '详细地址',
                span: 24
            },
            {
                // key
                key: 'testInput',
                // 小型表单
                type: 'child-form',
                // 是否允许删除单个子表单，默认 true（允许）（未完成）
                deleteEnable: true,
                // 是否允许新增单个子表单，默认 true（允许）（未完成）
                addEnable: true,
                // 每个小表单头的文字部分，以及新增按钮的部分
                headerLabel: '面签人员信息',
                // 里面是表单的每一项，写法和外面的没区别
                childrenForm: [
                    {
                        key: 'dict_code',
                        type: 'dynamic-select',
                        label: '这是一个字典下拉框（想不出来用处了）',
                        parentKey: '101'
                    },
                ]
            },
        ]
    }
]`,

                fields2: [
                    {
                        children: [
                            {
                                key: 'name',
                                type: 'input',
                                label: '用户名称'
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
                            {
                                key: 'money',
                                type: 'money-input',
                                label: '定金',
                                append: '元'
                            },
                        ]
                    }
                ],

                code2: `<wti-form :fields="fields2"
label-position="right"
:form-item-col="24"
label-width="100px"
ref="form2"/>
---
fields2: [
    {
        children: [
            {
                key: 'name',
                type: 'input',
                label: '用户名称'
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
            {
                key: 'money',
                type: 'money-input',
                label: '定金',
                append: '元'
            },
        ]
    }
]`,

                disableStatus: false,

                fields3: [
                    {
                        label: '禁用表单',
                        children: [
                            {
                                key: 'name',
                                type: 'input',
                                label: '用户名称'
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
                    :all-disabled="disableStatus"
                    ref="form3"/>
---
// 这里无特殊配置
fields3: [
    {
        children: [
            {
                key: 'name',
                type: 'input',
                label: '用户名称'
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
            {
                key: 'money',
                type: 'money-input',
                label: '定金',
                append: '元'
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
