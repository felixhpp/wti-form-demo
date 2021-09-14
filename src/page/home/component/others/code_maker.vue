<template>
    <div class="formitem-box">
        <h2>代码自动生成</h2>
        <p>一般情况下，前端代码提交到后端后，后端会进行 form 表单校验，然后再存储到数据库里。</p>
        <p>因为 form 表单校验通常和前端代码的耦合度是比较高的。不管是长度校验、必填校验或者其他，除了个别带条件的场景，都是可以一一对应的。</p>
        <p>因此，我们可以通过配置 json，自动生成后端的表单校验代码。例如在 Java 里，应该就是 interface 吧（我没写过 Java，但似乎就是这个）。</p>
        <p>功能和文档待补充，也欢迎感兴趣</p>
    </div>
</template>

<script>
    export default {
        name: 'CodeMaker',
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
