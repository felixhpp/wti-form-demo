<template>
    <div class="formitem-box">
        <h2>数字输入框 NumberInput</h2>
        <p>自动千分位，支持整数限制、非负数限制、小数点后自动补零、前方添加特殊符号（比如￥），后方添加特殊符号</p>
        <p>还没来得及写文档</p>
    </div>
</template>

<script>
    export default {
        name: 'NumberInput',
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
