<template>
    <div class="formitem-box">
        <h2>自动化测试</h2>
        <p>基于 js 生成的表单页面，因此我们可以通过表单的 type 和其他配置项，推断出表单内容的合法值和非法值。然后提交数据给后端，进行后端接口测试。</p>
        <p>通过这种方法，我们可以快速验证后端接口是否正常，是否和前端接口匹配。</p>
        <p>功能和文档待补充，也欢迎感兴趣的同学一起参与进来贡献开源代码</p>

        <p>
            <el-button type="primary" @click="makeTestTools">手动生成标准测试数据</el-button>
        </p>
        <TestTools ref="testTool"
                   ref-form-name="form"
                   :data-status="dataStatus"
                   :customize-fn="customizeFn"/>

        <wti-form :fields="fields1"
                  ref="form"/>

        <p>
            数据生成逻辑，参考源代码→
            <el-link
                type="primary"
                href="https://github.com/qq20004604/wti-form-demo/blob/main/src/components/test_tools/TestValueCreator.js">
                点击访问Github
            </el-link>
        </p>
    </div>
</template>

<script>
    import TestTools from '@/components/test_tools';

    export default {
        name: 'AutoTest',
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
                                key: 'serverName',
                                type: 'input',
                                label: '服务器名称',
                                rules: [
                                    {
                                        trigger: [
                                            'blur',
                                            'change'
                                        ],
                                        max: 6,
                                        message: '长度应当处于4到6之间',
                                        min: 4
                                    }
                                ]
                            },
                            {
                                key: 'serverAddress',
                                type: 'input',
                                label: '服务器地址'
                            },
                            {
                                key: 'autoDataKey',
                                type: 'input',
                                label: '自定义数据'
                            },
                        ]
                    },
                ],

                dataStatus: 'outlimit',
                customizeFn: {
                    autoDataKey () {
                        return 'autoDataKey测试数据';
                    }
                }
            };
        },
        methods: {
            makeTestTools () {
                this.$refs.testTool.makeTestData();
            }
        },
        components: {
            TestTools
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
