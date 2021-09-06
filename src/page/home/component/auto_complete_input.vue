<template>
    <div class="formitem-box">
        <h2>输入搜索下拉框 AutoCompleteInput</h2>
        <p>应对场景：某个通用接口，可以搜索到若干候选项。在选中其中一个候选项后，可以自动将值填充到表单里的多个表单元素中</p>
        <p>还没来得及写文档</p>

        <h3>基本用法</h3>
        <p>配置好表单组件，然后输入字符串，自动将内容回显到输入框里</p>
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
    </div>
</template>

<script>
    export default {
        name: 'AutoCompleteInput',
        mounted () {
            // this.$ajax.autocomplete({
            //     search: '1'
            // }).then(res => {
            //     console.log(res);
            // });
        },
        data () {
            return {
                fields1: [
                    {
                        children: [ {
                            'autoCompleteKeys': [],
                            'searchUrl': '/autocomplete',
                            'searchKey': 'search',
                            'mainShowKey': 'search',
                            'key': 'key1',
                            'label': '基础用法',
                            'placeholder': '请输入',
                            'type': 'auto-complete-input',
                        }
                        ]
                    }
                ],

                code1: ''
            };
        },
        methods: {}
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
