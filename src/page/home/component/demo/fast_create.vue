<template>
    <div class="formitem-box">
        <h2>快捷创建表单</h2>
        <p>这里，你可以通过快捷命令，快速创建出来一个表单的配置 JSON</p>

        <h3>表单快捷配置区</h3>
        <p>在这里，你可以通过通过选择和填写，快速生成一个表单的配置，并在下方可以预览到你要看的表单</p>
        <div class="code-box">
            <div class="row lv1" v-for="(field, index) in fields" :key="index">
                {{ field }}
            </div>
        </div>

        <el-divider/>

        <h3>表单预览区</h3>
        <p>这里将预览到你通过配置生成的表单</p>
        <wti-form ref="form"
                  :fields="fields"/>


        <el-divider/>

        <h3>表单配置 JSON 代码</h3>
        <p>复制这里的代码，你将生成同样的表单。（注意，这里不含引入的代码）</p>

        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <b>点击查看代码</b>
                </template>
                <pre v-highlightjs><code class="javascript">{{ htmlCode }}</code></pre>
                <el-divider/>
                <pre v-highlightjs><code class="javascript">{{ fields }}</code></pre>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: 'FastCreate',
        data () {
            return {
                htmlCode: `<wti-form ref="form"
                  :fields="fields"/>`,

                fields: []
            };
        },
        methods: {}
    };
</script>

<style scoped lang="less">
    @import '~common/less/config.less';

    .formitem-box {
        position: relative;
        width: 100%;

        .code-box {
            position: relative;
            width: 100%;
        }

        .submit-line {
            margin: 10px 0;

            .tips {
                margin-left: 24px;
                font-size: 10px;
            }
        }


        .collapse {
            position: relative;
            width: 100%;

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
