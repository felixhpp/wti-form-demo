<template>
    <div class="formitem-box">
        <h2>空</h2>
        <p>还没来得及写文档</p>
    </div>
</template>

<script>
    export default {
        name: 'RateInput',
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
