<template>
    <div class="formitem-box">
<h2>联系方式</h2>

        <h3>想吹牛逼</h3>
        <p>QQ 群：387017550</p>

        <h3>想咨询问题、联系合作</h3>
        <p>微信：qq20004604</p>
        <p>ＱＱ：20004604</p>

        <h3>想捐赠</h3>
        <p>真的会有人捐？哪怕 1 块钱？我咋感觉不太现实呢</p>
        <p>
            <img class="img" :src="require('img/money_wechat.jpg')" alt=""/>
            <img class="img" :src="require('img/money_ali.jpg')" alt=""/>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Connection',
        data () {
            return {};
        }
    };
</script>

<style scoped lang="less">
@import '~common/less/config.less';

.formitem-box {
    position: relative;
    width: 100%;

    .img {
        width: 300px;
    }
}

</style>
