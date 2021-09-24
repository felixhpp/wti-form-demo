<template>
    <div id="base">
        <h2>一份json配置演化三表单</h2>
        <p>一般来说，表单分为三态：【新增（无初始数据）】、【编辑（有初始数据）】、【详情（有初始数据但纯文本显示）】</p>
        <p>通过同一个 fields 配置的三个不同状态的表单，演示本组件是如何在真实业务环境下，提高约 200%~1000% 的开发效率。</p>

        <el-tree :default-expand-all="true"
                 :data="[{label:'目录',children:[
                     {label:'新增表单'},
                     {label:'编辑表单'},
                     {label:'纯文本展示表单'},]}]"/>

        <h3>新增表单</h3>
        <p>新增表单里，没有任何初始内容</p>

        <wti-form :fields="fields"
                  ref="form1"
                  :all-disabled="loading1"
                  :dynamic-select-option="dynamicSelectOption"/>

        <div class="submit-line">
            <el-button type="primary" @click="submitForm1">提交</el-button>
            <span class="tips">（下个表单将反显本表单的数据）</span>
        </div>
        <el-divider/>

        <h3>编辑表单</h3>
        <p>本表单的数据，来源于另一个表单提交的结果。当然，本表单也支持二次编辑和二次提交。</p>

        <wti-form :fields="fields"
                  ref="form2"
                  :data="originData1"
                  :dynamic-select-option="dynamicSelectOption"/>

        <div class="submit-line">
            <el-button type="primary" @click="submitForm2">提交</el-button>
            <span class="tips">下个表单将以纯文本形式，显示本表单填写的内容</span>
        </div>

        <el-divider/>

        <h3>纯文本模式表单</h3>
        <p>纯文本表单的意思是，以纯文本的形式展示结果，并不展示表单选项。</p>

        <wti-form :fields="fields"
                  ref="form3"
                  :data="originData2"
                  :text-model="true"
                  :dynamic-select-option="dynamicSelectOption"/>
        <el-divider/>

        <p>
            源代码见Github：

            <el-link
                type="primary"
                href="https://github.com/qq20004604/wti-form-demo/blob/main/src/page/home/component/demo/status.vue">
                点击访问Github
            </el-link>
        </p>
    </div>
</template>

<script>
    import { baseURL } from '@/config/env.js';

    export default {
        name: 'DemoStatus',
        data () {
            return {
                dynamicSelectOption: {
                    // 这是字典接口的 url
                    dictUrl: `${baseURL}/dict`,
                    // 异步请求时，请求内容是一个对象或一个数组。
                    // 如果是对象，那么包含一个 key 和一个数组。
                    // 如果是数组，那么只有这个数组。
                    // 数组是所有字典 FormItem 的 parentKey 的集合
                    queryKey: 'search', // 这是请求时那个 key。如果为空，则请求时是一个数组，而不是一个对象
                    parentKey: 'parentKey', // 这是返回结果的 parentKey。意思是，同一个 parentKey 归属于同一个下拉框选项
                    value: 'code', // 这是下拉框选项的值
                    label: 'label' // 这是下拉框选项的 label
                },
                fields: [
                    {
                        label: '用户信息登记',
                        children: [
                            {
                                key: 'name',
                                type: 'input',
                                label: '用户名称',
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入',
                                        trigger: [
                                            'blur',
                                            'change'
                                        ]
                                    }
                                ],
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
                                label: '三级联动下拉框',
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
                                // 每个小表单头的文字部分，以及新增按钮的部分
                                headerLabel: '面签人员信息',
                                // 里面是表单的每一项，写法和外面的没区别
                                childrenForm: [
                                    {
                                        key: 'dict_code',
                                        type: 'dynamic-select',
                                        label: '这是一个字典下拉框（想不出来用处了）',
                                        parentKey: '101',
                                        valueLink: [
                                            {
                                                // 下拉框的同一个值，触发的联动，都是 valueLink 里的一个元素
                                                // 这里的 value 就是该下拉框的某个值
                                                value: '10100-',
                                                linkList: [
                                                    // 一个下拉框每联动一个表单元素，便在 linkList 添加一个元素
                                                    {
                                                        // 这里的 linkKey 是被联动元素在表单里的 key
                                                        linkKey: 'dict_code1',
                                                        // 当 enableLinkValue 为 true 时，表示这个配置是联动设置值的。此时 linkValue 才生效
                                                        enableLinkValue: true,
                                                        linkValue: '12345',
                                                    }
                                                ]
                                            },
                                            {
                                                value: '10101',
                                                linkList: [
                                                    {
                                                        linkKey: 'dict_code1',
                                                        // enableLinkDisable 表示是否打开联动禁用
                                                        enableLinkDisable: true,
                                                        // linkDisable 为 true 表示设置为禁用。false 表示取消禁用
                                                        linkDisable: true,
                                                    }
                                                ]
                                            },
                                            {
                                                value: '10102',
                                                linkList: [
                                                    {
                                                        linkKey: 'dict_code1',
                                                        enableLinkDisable: true,
                                                        linkDisable: false,
                                                    }
                                                ]
                                            },
                                            {
                                                value: '10100',
                                                linkList: [
                                                    {
                                                        linkKey: 'dict_code1',
                                                        // enableLinkHidden 表示是否打开联动隐藏/显示
                                                        enableLinkHidden: true,
                                                        // linkHidden 为 true 表示设置为隐藏。false 表示取消隐藏
                                                        // 被隐藏的元素，通过 $ref.form.validate 调用校验方法时，将不会出现在 data 里
                                                        linkHidden: true,
                                                    }
                                                ]
                                            },
                                            {
                                                value: '10101-',
                                                linkList: [
                                                    {
                                                        linkKey: 'dict_code1',
                                                        enableLinkHidden: true,
                                                        linkHidden: false,
                                                    }
                                                ]
                                            },
                                            {
                                                value: '10101-',
                                                linkList: [
                                                    {
                                                        linkKey: 'dict_code1',
                                                        // enableLinkRequired 表示是否打开联动必填
                                                        enableLinkRequired: true,
                                                        // linkRequired 为 true 表示设置为必填，false 表示取消必填
                                                        linkRequired: true
                                                    }
                                                ]
                                            },
                                            {
                                                value: '10102-',
                                                linkList: [
                                                    {
                                                        linkKey: 'dict_code1',
                                                        enableLinkRequired: true,
                                                        linkRequired: false
                                                    }
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        key: 'dict_code1',
                                        type: 'input',
                                        label: '这是一个字典下拉框（想不出来用处了）',
                                        disableDefault: true,
                                        hiddenDefault: true
                                    },
                                ]
                            },
                        ]
                    }
                ],

                code1: `// 新增表单
<wti-form :fields="fields"
          ref="form1"
          :all-disabled="loading1"
          :dynamic-select-option="dynamicSelectOption"/>
// 编辑表单
<wti-form :fields="fields"
          ref="form2"
          :data="originData1"
          :dynamic-select-option="dynamicSelectOption"/>
// 纯文本表单
<wti-form :fields="fields"
          ref="form3"
          :data="originData2"
          :text-model="true"
          :dynamic-select-option="dynamicSelectOption"/>
---
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
                        parentKey: '101',
                    },
                    {
                        key: 'dict_code1',
                        type: 'input',
                        label: '这是一个字典下拉框（想不出来用处了）',
                        parentKey: '101',
                    },
                ]
            },
        ]
    }
]`,

                disableStatus: false,

                loading1: false,
                originData1: {},
                originData2: {}
            };
        },
        methods: {
            submitForm1 () {
                this.loading1 = true;
                this.$refs.form1.validate((isPass, data) => {
                    if (isPass) {
                        this.$message.info('开始提交，模拟异步请求，1 秒后提交成功');
                        setTimeout(() => {
                            this.$message.success('提交成功，现在将把数据回显到【编辑表单】里');
                            console.log('这是你刚提交的数据', data);
                            this.originData1 = Object.assign({}, data);
                            this.loading1 = false;
                        }, 1000);
                    } else {
                        this.loading1 = false;
                        this.$message.error('校验失败！');
                    }
                });
            },
            submitForm2 () {
                this.$refs.form2.validate((isPass, data) => {
                    if (isPass) {
                        this.$message.info('直接将内容显示到纯文本表单里');

                        this.originData2 = Object.assign({}, data);
                    } else {
                        this.loading1 = false;
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
