<template>
    <div id="test-tools">
        <div class="header">
            <button>1</button>
            <button>2</button>
        </div>
        <div>
            <router-view/>
        </div>
    </div>
</template>

<script>
    // 自动测试工具
    // 目的是通过 refForm 获取表单组件，以及 fields 获取表单结构，自动推断出表单应该填写的内容
    export default {
        name: 'TestTools',
        props: {
            // form 表单
            refForm: {
                type: Object,
                default: () => {
                    return {};
                }
            },
            // 配置文件
            fields: {
                type: Array,
                default: () => []
            }
        },
        methods: {}
    };
</script>

<style scoped lang="less">
    @import '~common/less/config.less';

</style>
