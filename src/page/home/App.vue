<template>
    <div id="app">
        <el-menu
            id="nav"
            default-active="2"
            :router="true"
            :collapse-transition="false"
            class="el-menu-vertical-demo">
            <el-menu-item-group>
                <template slot="title">Demo</template>
                <el-menu-item index="compoenent/base">基础使用方法</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
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
            window.app = this;
        },
        name: 'App',
        methods: {}
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
</style>

