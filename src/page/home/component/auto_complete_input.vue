<template>
    <div class="formitem-box">
        <h2>输入搜索下拉框 AutoCompleteInput</h2>
        <p>应对场景：某个通用接口，可以搜索到若干候选项。在选中其中一个候选项后，可以自动将值填充到表单里的多个表单元素中</p>
        <p>还没来得及写文档</p>
    </div>
</template>

<script>
    export default {
        name: 'AutoCompleteInput',
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
