<template>
    <div class="formitem-box">
        <h2>从“要素表”开始</h2>
        <p>因为表单元素的内容，是来源于产品经理的要素表。</p>
        <p>因此，假设我们开发一个平台，产品经理在这里填写要素，然后便能自动生成最基本的表单配置文件。毫无疑问，可以减少很多开发时间。</p>
        <p>同时，通过这种方式生成，我们可以给每个要素捆绑一个唯一 id，然后不同页面相同要素通过这个唯一 id 来识别是否是同一个要素。</p>
        <p>通过这样的方法，一方面打通了产品经理和开发的渠道，另一方面，也方便在长流程和复杂流程里，管理跨页面跨功能的要素。</p>
        <p>功能和文档待补充，也欢迎感兴趣的同学一起参与进来贡献开源代码</p>
    </div>
</template>

<script>
    export default {
        name: 'ElementStart',
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
