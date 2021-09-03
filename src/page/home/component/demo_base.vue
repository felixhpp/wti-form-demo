<template>
    <div id="base">
        <el-backtop target="#header"/>
        <h2 id="header">常见用法</h2>
        <p>给出本组件的常见用法</p>

        <h3>典型表单</h3>
        <p>包含各种表单项，比如文本输入框，数字输入框，单选框，多选框等</p>

        <wti-form :fields="fields1"/>
    </div>
</template>

<script>
    export default {
        name: 'Base',
        data () {
            return {
                fields1: [
                    {
                        children: []
                    }
                ]
            };
        }
    };
</script>

<style scoped lang="less">
@import '~common/less/config.less';

#base {
    position: relative;
    width: 100%;

}

</style>
