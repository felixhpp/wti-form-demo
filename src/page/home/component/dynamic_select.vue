<template>
    <div class="formitem-box">
        <h2>字典下拉框 DynamicSelect</h2>
        <p>字典下拉框，应对场景是有一个通用字典接口，通过传入父 key，自动请求到该父 key 下所有选项，并作为下拉框的候选项</p>
        <p>还没来得及写文档</p>
    </div>
</template>

<script>
    export default {
        name: 'DynamicSelect',
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
