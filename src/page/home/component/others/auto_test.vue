<template>
    <div class="formitem-box">
        <h2>自动化测试</h2>
        <p>基于 js 生成的表单页面，因此我们可以通过表单的 type 和其他配置项，推断出表单内容的合法值和非法值。然后提交数据给后端，进行后端接口测试。</p>
        <p>通过这种方法，我们可以快速验证后端接口是否正常，是否和前端接口匹配。</p>
        <p>功能和文档待补充，也欢迎感兴趣的同学一起参与进来贡献开源代码</p>
    </div>
</template>

<script>
    export default {
        name: 'AutoTest',
        data () {
            return {};
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
