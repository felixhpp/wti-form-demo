<template>
    <div id="app">
        <el-menu id="nav"
                 :default-active="defaultHash"
                 :collapse-transition="false"
                 class="el-menu-vertical-demo"
                 @select="selectMenu">
            <el-menu-item-group>
                <template slot="title">Demo</template>
                <el-menu-item index="/demo/base">常见用法</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <template slot="title">各表单组件</template>
                <el-menu-item index="/formItem/input">文本输入框 Input</el-menu-item>
                <el-menu-item index="/formItem/normal_select">普通下拉框 NormalSelect</el-menu-item>
                <el-menu-item index="/formItem/radio">单选框 Radio</el-menu-item>
                <el-menu-item index="/formItem/money_input">金钱输入框 MoneyInput</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <template slot="title">其他</template>
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
        width: 200px;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
    }

    #main {
        position: absolute;
        top: 0;
        left: 200px;
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
</style>

