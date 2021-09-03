<template>
    <div id="formitem-input">
        <h2>文本输入框 Input</h2>
        <p>最基本的文本输入框啦</p>

        <h3>基本用法</h3>
        <wti-form :fields="fields1"/>
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <div class="code">{{ code1 }}</div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: 'Input',
        data () {
            return {
                fields1: [
                    {
                        label: '基本用法',
                        children: [
                            {
                                key: 'test1',
                                type: 'input',
                                label: '一个文本输入框'
                            }
                        ]
                    }
                ],

                code1: `<wti-form :fields="fields1"/>
---
fields1: [
    {
        label: '基本用法',
        children: [
            {
                key: 'test1',
                type: 'input',
                label: '一个文本输入框'
            }
        ]
    }
]`
            };
        }
    };
</script>

<style scoped lang="less">
@import '~common/less/config.less';

#formitem-input {
    position: relative;
    width: 100%;

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
