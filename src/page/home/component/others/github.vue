<template>
    <div class="formitem-box">
        <h2>Github</h2>
        <p>
            <el-link href="https://github.com/qq20004604/wti-form"
                     target="_blank"
                     type="primary">
                点击跳转 Github
                <i class="el-icon-view el-icon--right"></i>
            </el-link>

            ← STAR，谢
        </p>


        <p>
            <a href="https://www.npmjs.org/package/wti-form">
                <img src="https://img.shields.io/npm/v/wti-form.svg"/>
            </a>
            <a href="https://npmcharts.com/compare/wti-form?minimal=true">
                <img src="http://img.shields.io/npm/dm/wti-form.svg"/>
            </a>
            <img src="https://img.shields.io/github/stars/qq20004604/wti-form.svg?label=Stars&color=success" alt=""/>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Github',
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
