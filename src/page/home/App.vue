<template>
    <div id="app">
        <el-menu id="nav"
                 :default-active="defaultHash"
                 :collapse-transition="false"
                 class="el-menu-vertical-demo"
                 @select="selectMenu">
            <el-menu-item-group>
                <template slot="title">开发指南 v1.0.8.3</template>
                <el-menu-item index="/Install">安装</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <template slot="title">常见用法</template>
                <el-menu-item index="/demo/Base">基本用法</el-menu-item>
                <el-menu-item index="/demo/Status">表单的三态</el-menu-item>
                <el-menu-item index="/demo/Often">常见配置</el-menu-item>
                <el-menu-item index="/demo/FastCreate">快捷创建表单 FastCreate</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <template slot="title">各表单组件</template>
                <el-menu-item index="/formItem/FormitemCommon">表单元素通用属性 CommonAttr</el-menu-item>
                <el-menu-item index="/formItem/Input">文本输入框 Input</el-menu-item>
                <el-menu-item index="/formItem/NormalSelect">普通下拉框 NormalSelect</el-menu-item>
                <el-menu-item index="/formItem/Radio">单选框 Radio</el-menu-item>
                <el-menu-item index="/formItem/MoneyInput">金钱输入框 MoneyInput</el-menu-item>
                <el-menu-item index="/formItem/AutoCompleteInput">输入搜索下拉框 AutoCompleteInput</el-menu-item>
                <el-menu-item index="/formItem/DateInput">日期输入框 DateInput</el-menu-item>
                <el-menu-item index="/formItem/DateRangeInput">日期范围输入框 DateRangeInput</el-menu-item>
                <el-menu-item index="/formItem/HourMinuteInput">时分输入框 HourMinuteInput</el-menu-item>
                <el-menu-item index="/formItem/NormalNumber">普通数字输入框 NormalNumber</el-menu-item>
                <el-menu-item index="/formItem/NumberInput">千分位数字输入框 NumberInput</el-menu-item>
                <el-menu-item index="/formItem/DynamicSelect">字典下拉框 DynamicSelect</el-menu-item>
                <el-menu-item index="/formItem/RateInput">利率输入框 RateInput</el-menu-item>
                <el-menu-item index="/formItem/MulLinkage">多级联动输入框 MulLinkage</el-menu-item>
                <el-menu-item index="/formItem/TextArea">文本域输入框 TextArea</el-menu-item>
                <!--<el-menu-item disabled>-&#45;&#45;↓↓文档不全↓↓-&#45;&#45;</el-menu-item>-->
            </el-menu-item-group>
            <el-menu-item-group>
                <template slot="title">其他</template>
                <el-menu-item index="/others/Github">Github</el-menu-item>
                <el-menu-item index="/others/AutoTest">自动化测试</el-menu-item>
                <el-menu-item index="/others/CodeMaker">代码自动生成</el-menu-item>
                <el-menu-item index="/others/ElementStart">从“要素表”开始</el-menu-item>
                <el-menu-item index="/others/connection">联系方式</el-menu-item>
            </el-menu-item-group>
        </el-menu>
        <div id="main">
            <router-view/>
        </div>
    </div>
</template>
<script>
    export default {
        created () {
            this.defaultHash = window.location.hash.replace('#', '');
        },
        name: 'App',
        data () {
            return {
                defaultHash: ''
            };
        },
        methods: {
            selectMenu (i) {
                console.log(i);
                this.$router.push(i);
            }
        }
    };
</script>
<style lang="less" scoped>
    #app {
        position: relative;
        width: 100%;
        height: 100%;

        #nav {
            position: absolute;
            top: 0;
            left: 0;
            width: 300px;
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
        }

        #main {
            position: absolute;
            top: 0;
            left: 300px;
            right: 0;
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
            padding: 40px 20px;
        }
    }
</style>
<style lang="less" type="text/less">
    @import '~common/css/reset.css';

    html, body {
        position: relative;
        width: 100%;
        height: 100%;
    }

    h2 {
        font-weight: 400;
        color: #1f2f3d;
        font-size: 28px;
        height: 40px;
        line-height: 40px;
    }

    h3 {
        margin: 55px 0 20px;
        font-weight: 400;
        color: #1f2f3d;
        font-size: 22px;
        height: 30px;
        line-height: 30px;
    }

    p {
        font-size: 14px;
        color: #5e6d82;
        line-height: 20px;
        margin: 14px 0;
    }

    code {
        background-color: #fafafa;
        border: 1px solid #ebebeb;
        padding: 0 5px;
        border-radius: 3px;
    }

    .pro-code {
        display: inline-block;
        width: 100%;
        padding: 10px;
        color: #333;
        font-family: Menlo;
    }

    .el-menu-item, .el-submenu__title {
        height: 46px;
        line-height: 46px;
    }

    .collapse {
        margin-top: 10px;
    }
</style>

