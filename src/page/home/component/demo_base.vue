<template>
    <div id="base">
        <el-backtop target="#header"/>
        <h2 id="header">常见用法</h2>
        <p>给出本组件的常见用法</p>

        <h3>典型表单</h3>
        <p>包含各种表单项，比如文本输入框，数字输入框，单选框，多选框、子表单等</p>

        <wti-form :fields="fields1"
                  ref="form1"
                  :form-item-col="12"
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

        <!--        <wti-form :fields="fields2"-->
        <!--                  ref="form2"-->
        <!--                  :form-item-col="12"-->
        <!--                  :dynamic-select-option="dynamicSelectOption"/>-->
    </div>
</template>

<script>
    export default {
        name: 'Base',
        data () {
            return {
                dynamicSelectOption: {
                    // 这是字典接口的 url
                    dictUrl: '/dict',
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

                code1: `dynamicSelectOption: {
        // 这是字典接口的 url
        dictUrl: '/dict',
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
                        label: '用户信息登记',
                        children: [
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
                                        key: 'dict_code2',
                                        type: 'dynamic-select',
                                        label: '这是一个字典下拉框（想不出来用处了）',
                                        parentKey: '101'
                                    },
                                ]
                            }
                        ]
                    }
                ]
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
