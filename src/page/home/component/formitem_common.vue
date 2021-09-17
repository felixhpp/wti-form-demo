<template>
    <div class="formitem-box">
        <h2>表单元素通用属性 CommonAttr</h2>
        <p>这里分享一些多个表单组件通用属性的说明。</p>

        <el-tree :default-expand-all="true"
                 :data="[{label:'目录',
                    children:[
                        {label:'校验规则'},
                        {label:'表单项默认值'},
                        {label:'表单联动'},
                        {label:'高级数据更新事件'},
                    ]}]"/>

        <h3>校验规则</h3>
        <p>表单组件的校验规则，底层源自于 Element UI 的 rules 属性，所以，你可以自己基于其规则，编写 rules 来实现校验需求</p>
        <p>这里列举几个常见 rules 规则，包括必填、长度限制、自定义校验函数</p>

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

        <h3>表单项默认值</h3>
        <p>我们有时候需要对某些表单组件元素设置默认值。也就是说，在这个表单填写之前，某些值就已经在表单里了，比如说某个下拉框默认选中了一个选项。</p>
        <p>当然，默认值的优先级，应该低于在表单编辑模式下的赋值。</p>
        <p>默认值是设置是通过 <code>defaultValue</code> 属性来设置的。</p>

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

        <h3>表单联动</h3>
        <p>在某些场景下，我们需要在某个表单元素为特定值时，给其他表单元素自动回填值。</p>
        <p>因此，对于此种场景，我们目前支持在【单选框】、【普通下拉框】、【字典下拉框】这三种情况下，选择特定值时，支持联动表单内其他选项。</p>
        <p>具体来说，支持四种功能：1、联动设置值；2、联动设置禁用/非禁用；3、联动设置隐藏/取消隐藏；4、联动设置必填/取消必填；</p>
        <p>同时，这个联动具有以下特点：①支持一个值联动多个表单项；②支持联动一个表单项时，执行多种操作（比如同时设置值和禁用）。<span style="color:red;">具体可以看代码里的注释。</span></p>
        <p>除此之外，我们也支持【输入搜索下拉框】在搜索到值并选中后，自动将值回填给某一项或多项（具体参考表单对应文档）</p>

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

        <h3>高级数据更新事件</h3>
        <p>表单联动，支持了表单内部值的更新。但是有时候，这个功能仍无法满足一些特殊需求。我列举一些特殊场景：</p>
        <p>①当某个输入框值为某个特定值时，更新表单内部某些值或状态；</p>
        <p>②当某个字段为某个值时，设置另一个表单的某个字段为禁用；</p>
        <p>无论哪种特殊场景，细化来说可以列为两种情况：①表单内部值的变化希望表单外可以监听到；②表单外有办法可以影响表单内部的状态；</p>
        <p>针对前者场景，我们可以通过监听 <code>updateValue</code> 事件来获取到变化的key 和值；</p>
        <p>对于后者场景，设置值可以通过 <code>this.$refs.form.updateFormData({k:v})</code> 实现；</p>
        <p>设置禁用/取消禁用通过 <code>this.$refs.form.setElementDisable (key, beDisable = true)</code> 实现；</p>
        <p>设置隐藏/取消隐藏通过 <code>this.$refs.form.setElementHidden (key, beDisable = true)</code> 实现；</p>

        <wti-form ref="form4"
                  @updateValue="updateValue"
                  :fields="fields4"/>

        <p>1、值变化时，更新后的值会显示在右边→ {{ valueChange }}</p>
        <p>
            2、
            <el-button type="primary"
                       size="mini"
                       @click="setValue">
                点击我，设置输入框的值为 1234
            </el-button>
            注意，他不会触发 updateValue 事件
        </p>
        <p>
            3、
            <el-button type="primary"
                       size="mini"
                       @click="setDisable">
                点击我，随机设置输入框禁用/非禁用
            </el-button>
            因为是随机的，所以一次没变化就多点几次吧
        </p>
        <p>
            4、
            <el-button type="primary"
                       size="mini"
                       @click="setHidden">
                点击我，随机设置输入框隐藏/非隐藏
            </el-button>
            因为是随机的，所以一次没变化就多点几次吧
        </p>
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


        <h3>默认禁用和默认隐藏表单元素</h3>
        <p>表单的默认隐藏和默认禁用</p>

        <wti-form ref="form5"
                  :fields="fields5"/>
        <div class="submit-line">
            <el-button type="primary" @click="submit('form5')">提交按钮</el-button>
            <span class="tips">请查看控制台看提交结果</span>
        </div>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ code5 }}</code></pre>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: 'FormitemCommon',
        data () {
            return {
                fields1: [
                    {
                        label: '规则列举',
                        children: [
                            {
                                key: 'key1',
                                type: 'input',
                                label: '必填规则，触发时机 change + blur',
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
                                key: 'key2',
                                type: 'input',
                                label: '长度 2~4 个字，触发时机 change + blur',
                                rules: [
                                    {
                                        trigger: [
                                            'blur',
                                            'change'
                                        ],
                                        max: 4,
                                        message: '长度应当处于2到4之间',
                                        min: 2
                                    }
                                ],
                            },
                            {
                                key: 'key3',
                                type: 'date-input',
                                label: '年龄校验，18 ~ 60 岁。触发事件 change + blur',
                                rules: [
                                    {
                                        validator (rule, value, callback) {
                                            if (!value) {
                                                return callback(new Error('必须填写年龄'));
                                            }
                                            const v = Number(new Date(value));
                                            let today = new Date();
                                            let d1 = today.setFullYear(today.getFullYear() - 18);
                                            d1 = Number(d1);
                                            if (d1 < v) {
                                                return callback(new Error('必须年满 18 岁'));
                                            }
                                            today = new Date();
                                            let d2 = today.setFullYear(today.getFullYear() - 60);
                                            d2 = Number(d2);
                                            if (d2 > v) {
                                                return callback(new Error('必须小于 60 岁'));
                                            }
                                            callback();
                                        },
                                        trigger: [
                                            'blur',
                                            'change'
                                        ],
                                    }
                                ],
                            },
                        ]
                    }
                ],

                code1: `<wti-form ref="form1"
                :fields="fields1"/>
---
fields1: [
    {
        label: '规则列举',
        children: [
            {
                key: 'key1',
                type: 'input',
                label: '必填规则，触发时机 change + blur',
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
                key: 'key2',
                type: 'input',
                label: '长度 2~4 个字，触发时机 change + blur',
                rules: [
                    {
                        trigger: [
                            'blur',
                            'change'
                        ],
                        max: 4,
                        message: '长度应当处于2到4之间',
                        min: 2
                    }
                ],
            },
            {
                key: 'key3',
                type: 'date-input',
                label: '年龄校验，18 ~ 60 岁。触发事件 change + blur',
                rules: [
                    {
                        validator (rule, value, callback) {
                            if (!value) {
                                return callback(new Error('必须填写年龄'));
                            }
                            const v = Number(new Date(value));
                            let today = new Date();
                            let d1 = today.setFullYear(today.getFullYear() - 18);
                            d1 = Number(d1);
                            if (d1 < v) {
                                return callback(new Error('必须年满 18 岁'));
                            }
                            today = new Date();
                            let d2 = today.setFullYear(today.getFullYear() - 60);
                            d2 = Number(d2);
                            if (d2 > v) {
                                return callback(new Error('必须小于 60 岁'));
                            }
                            callback();
                        },
                        trigger: [
                            'blur',
                            'change'
                        ],
                    }
                ],
            },
        ]
    }
],`,

                fields2: [
                    {
                        label: '规则列举',
                        children: [
                            {
                                key: 'key1',
                                type: 'input',
                                label: '我是普通输入框，默认值是 123',
                                defaultValue: '123',
                            },
                            {
                                key: 'key2',
                                type: 'dynamic-select',
                                label: '我是动态下拉框，默认值是 "101"',
                                parentKey: '100',
                                defaultValue: '101',
                            },
                        ]
                    }
                ],

                code2: `<wti-form ref="form2"
                :fields="fields2"/>
---
fields2: [
    {
        label: '规则列举',
        children: [
            {
                key: 'key1',
                type: 'input',
                label: '示例 1',
                defaultValue: '123',
            },
            {
                key: 'key2',
                type: 'input',
                label: '长度 2~4 个字，触发时机 change + blur',
                defaultValue: '234',
            },
        ]
    }
]`,

                fields3: [
                    {
                        label: '表单联动示例',
                        children: [
                            {
                                key: 'key1',
                                type: 'input',
                                label: '我是一个工具人输入框'
                            },
                            {
                                key: 'key2',
                                type: 'normal-select',
                                label: '我是动态下拉框，默认值是 "101"',
                                options: [
                                    {
                                        value: '1',
                                        label: '选我会给输入框赋值【12345】'
                                    },
                                    {
                                        value: '2',
                                        label: '选我会禁用输入框'
                                    },
                                    {
                                        value: '3',
                                        label: '如果输入框已禁用，那么选我会取消禁用他'
                                    },
                                    {
                                        value: '4',
                                        label: '选我会把输入框隐藏起来'
                                    },
                                    {
                                        value: '5',
                                        label: '如果输入框已隐藏，那么选我会把他取消隐藏'
                                    },
                                    {
                                        value: '6',
                                        label: '选我，输入框会添加校验规则【必填】'
                                    },
                                    {
                                        value: '7',
                                        label: '如果输入框已是【必填】，那么选我【必填】会被取消掉'
                                    },
                                ],
                                valueLink: [
                                    {
                                        // 下拉框的同一个值，触发的联动，都是 valueLink 里的一个元素
                                        // 这里的 value 就是该下拉框的某个值
                                        value: '1',
                                        linkList: [
                                            // 一个下拉框每联动一个表单元素，便在 linkList 添加一个元素
                                            {
                                                // 这里的 linkKey 是被联动元素在表单里的 key
                                                linkKey: 'key1',
                                                // 当 enableLinkValue 为 true 时，表示这个配置是联动设置值的。此时 linkValue 才生效
                                                enableLinkValue: true,
                                                linkValue: '12345',
                                            }
                                        ]
                                    },
                                    {
                                        value: '2',
                                        linkList: [
                                            {
                                                linkKey: 'key1',
                                                // enableLinkDisable 表示是否打开联动禁用
                                                enableLinkDisable: true,
                                                // linkDisable 为 true 表示设置为禁用。false 表示取消禁用
                                                linkDisable: true,
                                            }
                                        ]
                                    },
                                    {
                                        value: '3',
                                        linkList: [
                                            {
                                                linkKey: 'key1',
                                                enableLinkDisable: true,
                                                linkDisable: false,
                                            }
                                        ]
                                    },
                                    {
                                        value: '4',
                                        linkList: [
                                            {
                                                linkKey: 'key1',
                                                // enableLinkHidden 表示是否打开联动隐藏/显示
                                                enableLinkHidden: true,
                                                // linkHidden 为 true 表示设置为隐藏。false 表示取消隐藏
                                                // 被隐藏的元素，通过 $ref.form.validate 调用校验方法时，将不会出现在 data 里
                                                linkHidden: true,
                                            }
                                        ]
                                    },
                                    {
                                        value: '5',
                                        linkList: [
                                            {
                                                linkKey: 'key1',
                                                enableLinkHidden: true,
                                                linkHidden: false,
                                            }
                                        ]
                                    },
                                    {
                                        value: '6',
                                        linkList: [
                                            {
                                                linkKey: 'key1',
                                                // enableLinkRequired 表示是否打开联动必填
                                                enableLinkRequired: true,
                                                // linkRequired 为 true 表示设置为必填，false 表示取消必填
                                                linkRequired: true
                                            }
                                        ]
                                    },
                                    {
                                        value: '7',
                                        linkList: [
                                            {
                                                linkKey: 'key1',
                                                enableLinkRequired: true,
                                                linkRequired: false
                                            }
                                        ]
                                    },
                                ],
                            },
                        ]
                    }
                ],

                code3: `<wti-form ref="form3"
                :fields="fields3"/>
---
fields3: [
    {
        label: '表单联动示例',
        children: [
            {
                key: 'key1',
                type: 'input',
                label: '我是一个工具人输入框'
            },
            {
                key: 'key2',
                type: 'normal-select',
                label: '我是动态下拉框，默认值是 "101"',
                options: [
                    {
                        value: '1',
                        label: '选我会给输入框赋值【12345】'
                    },
                    {
                        value: '2',
                        label: '选我会禁用输入框'
                    },
                    {
                        value: '3',
                        label: '如果输入框已禁用，那么选我会取消禁用他'
                    },
                    {
                        value: '4',
                        label: '选我会把输入框隐藏起来'
                    },
                    {
                        value: '5',
                        label: '如果输入框已隐藏，那么选我会把他取消隐藏'
                    },
                    {
                        value: '6',
                        label: '选我，输入框会添加校验规则【必填】'
                    },
                    {
                        value: '7',
                        label: '如果输入框已是【必填】，那么选我【必填】会被取消掉'
                    },
                ],
                valueLink: [
                    {
                        // 下拉框的同一个值，触发的联动，都是 valueLink 里的一个元素
                        // 这里的 value 就是该下拉框的某个值
                        value: '1',
                        linkList: [
                            // 一个下拉框每联动一个表单元素，便在 linkList 添加一个元素
                            {
                                // 这里的 linkKey 是被联动元素在表单里的 key
                                linkKey: 'key1',
                                // 当 enableLinkValue 为 true 时，表示这个配置是联动设置值的。此时 linkValue 才生效
                                enableLinkValue: true,
                                linkValue: '12345',
                            }
                        ]
                    },
                    {
                        value: '2',
                        linkList: [
                            {
                                linkKey: 'key1',
                                // enableLinkDisable 表示是否打开联动禁用
                                enableLinkDisable: true,
                                // linkDisable 为 true 表示设置为禁用。false 表示取消禁用
                                linkDisable: true,
                            }
                        ]
                    },
                    {
                        value: '3',
                        linkList: [
                            {
                                linkKey: 'key1',
                                enableLinkDisable: true,
                                linkDisable: false,
                            }
                        ]
                    },
                    {
                        value: '4',
                        linkList: [
                            {
                                linkKey: 'key1',
                                // enableLinkHidden 表示是否打开联动隐藏/显示
                                enableLinkHidden: true,
                                // linkHidden 为 true 表示设置为隐藏。false 表示取消隐藏
                                // 被隐藏的元素，通过 $ref.form.validate 调用校验方法时，将不会出现在 data 里
                                linkHidden: true,
                            }
                        ]
                    },
                    {
                        value: '5',
                        linkList: [
                            {
                                linkKey: 'key1',
                                enableLinkHidden: true,
                                linkHidden: false,
                            }
                        ]
                    },
                    {
                        value: '6',
                        linkList: [
                            {
                                linkKey: 'key1',
                                // enableLinkRequired 表示是否打开联动必填
                                enableLinkRequired: true,
                                // linkRequired 为 true 表示设置为必填，false 表示取消必填
                                linkRequired: true
                            }
                        ]
                    },
                    {
                        value: '7',
                        linkList: [
                            {
                                linkKey: 'key1',
                                enableLinkRequired: true,
                                linkRequired: false
                            }
                        ]
                    },
                ],
            },
        ]
    }
]`,

                fields4: [
                    {
                        label: '高级数据更新事件',
                        children: [
                            {
                                key: 'key1',
                                type: 'input',
                                label: '我是一个工具人输入框'
                            },
                        ]
                    }
                ],

                code4: `<wti-form ref="form4"
                  @updateValue="updateValue"
                  :fields="fields4"/>
---
setValue () {
    this.$refs.form4.updateFormData({
        key1: '1234'
    });
},
setDisable () {
    const bool = Math.random() > 0.5;
    this.$message.info(\`本次为\${bool ? '禁用' : '取消禁用'}\`);
    this.$refs.form4.setElementDisable('key1', bool);
},
setHidden () {
    const bool = Math.random() > 0.5;
    this.$message.info(\`本次为\${bool ? '隐藏' : '显示'}\`);
    this.$refs.form4.setElementHidden('key1', bool);
}`,

                valueChange: '',


                fields5: [
                    {
                        label: '默认示例',
                        children: [
                            {
                                key: 'key1',
                                type: 'input',
                                label: '默认禁用',
                                disableDefault: true,
                            },
                            {
                                key: 'key2',
                                type: 'input',
                                label: '默认隐藏',
                                hiddenDefault: true,
                            },
                            {
                                key: 'key3',
                                type: 'normal-select',
                                label: '工具人下拉框，选我取消禁用和取消隐藏',
                                options: [
                                    {
                                        value: '1',
                                        label: '取消第一个的禁用状态'
                                    },
                                    {
                                        value: '2',
                                        label: '取消另一个的隐藏'
                                    },
                                ],
                                valueLink: [
                                    {
                                        value: '1',
                                        linkList: [
                                            {
                                                linkKey: 'key1',
                                                enableLinkDisable: true,
                                                linkDisable: false,
                                            }
                                        ]
                                    },
                                    {
                                        value: '2',
                                        linkList: [
                                            {
                                                linkKey: 'key2',
                                                enableLinkHidden: true,
                                                linkHidden: false,
                                            }
                                        ]
                                    },
                                ],
                            },

                            {
                                // key
                                key: 'testInput',
                                // 小型表单
                                type: 'child-form',
                                // 每个小表单头的文字部分，以及新增按钮的部分
                                headerLabel: '子表单的示例',
                                // 里面是表单的每一项，写法和外面的没区别
                                childrenForm: [

                                    {
                                        key: 'key3',
                                        type: 'input',
                                        label: '默认禁用',
                                        disableDefault: true,
                                    },
                                    {
                                        key: 'key4',
                                        type: 'input',
                                        label: '默认隐藏',
                                        hiddenDefault: true,
                                    },
                                    {
                                        key: 'key5',
                                        type: 'normal-select',
                                        label: '工具人下拉框，选我取消禁用和取消隐藏',
                                        options: [
                                            {
                                                value: '1',
                                                label: '取消第一个的禁用状态'
                                            },
                                            {
                                                value: '2',
                                                label: '取消另一个的隐藏'
                                            },
                                        ],
                                        valueLink: [
                                            {
                                                value: '1',
                                                linkList: [
                                                    {
                                                        linkKey: 'key3',
                                                        enableLinkDisable: true,
                                                        linkDisable: false,
                                                    }
                                                ]
                                            },
                                            {
                                                value: '2',
                                                linkList: [
                                                    {
                                                        linkKey: 'key4',
                                                        enableLinkHidden: true,
                                                        linkHidden: false,
                                                    }
                                                ]
                                            },
                                        ],
                                    },
                                ]
                            }
                        ]
                    }
                ],

                code5: `<wti-form ref="form5"
                  :fields="fields5"/>
---
fields5: [
    {
        label: '默认示例',
        children: [
            {
                key: 'key1',
                type: 'input',
                label: '默认禁用',
                disableDefault: true,
            },
            {
                key: 'key2',
                type: 'input',
                label: '默认隐藏',
                hiddenDefault: true,
            },
            {
                key: 'key3',
                type: 'normal-select',
                label: '工具人下拉框，选我取消禁用和取消隐藏',
                options: [
                    {
                        value: '1',
                        label: '取消第一个的禁用状态'
                    },
                    {
                        value: '2',
                        label: '取消另一个的隐藏'
                    },
                ],
                valueLink: [
                    {
                        value: '1',
                        linkList: [
                            {
                                linkKey: 'key1',
                                enableLinkDisable: true,
                                linkDisable: false,
                            }
                        ]
                    },
                    {
                        value: '2',
                        linkList: [
                            {
                                linkKey: 'key2',
                                enableLinkHidden: true,
                                linkHidden: false,
                            }
                        ]
                    },
                ],
            },

            {
                // key
                key: 'testInput',
                // 小型表单
                type: 'child-form',
                // 每个小表单头的文字部分，以及新增按钮的部分
                headerLabel: '子表单的示例',
                // 里面是表单的每一项，写法和外面的没区别
                childrenForm: [

                    {
                        key: 'key3',
                        type: 'input',
                        label: '默认禁用',
                        disableDefault: true,
                    },
                    {
                        key: 'key4',
                        type: 'input',
                        label: '默认隐藏',
                        hiddenDefault: true,
                    },
                    {
                        key: 'key5',
                        type: 'normal-select',
                        label: '工具人下拉框，选我取消禁用和取消隐藏',
                        options: [
                            {
                                value: '1',
                                label: '取消第一个的禁用状态'
                            },
                            {
                                value: '2',
                                label: '取消另一个的隐藏'
                            },
                        ],
                        valueLink: [
                            {
                                value: '1',
                                linkList: [
                                    {
                                        linkKey: 'key3',
                                        enableLinkDisable: true,
                                        linkDisable: false,
                                    }
                                ]
                            },
                            {
                                value: '2',
                                linkList: [
                                    {
                                        linkKey: 'key4',
                                        enableLinkHidden: true,
                                        linkHidden: false,
                                    }
                                ]
                            },
                        ],
                    },
                ]
            }
        ]
    }
]`
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
            updateValue (kv) {
                this.valueChange = kv;
            },
            setValue () {
                this.$refs.form4.updateFormData({
                    key1: '1234'
                });
            },
            setDisable () {
                const bool = Math.random() > 0.5;
                this.$message.info(`本次为${bool ? '禁用' : '取消禁用'}`);
                this.$refs.form4.setElementDisable('key1', bool);
            },
            setHidden () {
                const bool = Math.random() > 0.5;
                this.$message.info(`本次为${bool ? '隐藏' : '显示'}`);
                this.$refs.form4.setElementHidden('key1', bool);
            },
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
