<template>
    <div class="formitem-box">
        <h2>安装</h2>

        <h3>npm 安装</h3>
        <p>推荐使用 npm 的方式安装，原因很简单，因为他很简单。</p>
        <p>注意，本组件依赖于 Element UI，没那玩意是不行的。</p>
        <p><code class="pro-code">npm i wti-form --save</code></p>


        <h3>CDN 安装</h3>
        <p>暂时不支持，pass</p>

        <h3>快速上手</h3>
        <pre v-highlightjs><code class="javascript">{{ demoCode }}</code></pre>
        <code class="code demo-code javascript"></code>
    </div>
</template>

<script>
    export default {
        name: 'RateInput',
        data () {
            return {
                demoCode: `// 引入 Vue
import Vue from 'vue';

// 引入 Element UI 的两个
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入本组件
import WtiForm from 'wti-form';

// 把 Element UI 和 本组件挂载上去
Vue.use(Element);
Vue.use(WtiForm);`
            };
        },
        methods: {},
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
        }

        .code {
            white-space: pre;
            background: #fafafa;
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 10px;
        }

        .demo-code {
            width: 100%;
            padding: 10px;
            width: 100%;
            display: inline-block;
            line-height: 22px;
        }
    }
</style>
