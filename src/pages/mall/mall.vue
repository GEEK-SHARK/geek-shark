<template>
<div>
    <header>
        <ul class="header_list">
            <li class="active header_item1">严选+</li>
            <li class="header_item header_item2">游戏道具</li>
            <li class="header_item3">游戏装饰品</li>
        </ul>
    </header>
    <div class="image_adv_container">
      <img src="https://yanxuan.nosdn.127.net/ca43fff43dfe08be67b6345f9fbf3255.jpg?imageView&quality=95&thumbnail=940y450" alt="">
      <div class="background_adv"></div>
      <span>严选圈给你想要的优惠</span>
    </div>
    <div class="container">
        <div class="item_title">MUJI等品牌制造商出品</div>
        <ul class="items">
            <li class="item item1">
                <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/84f4ac7d46dc4a8814fa4974798d25a0.png" alt="">
                <div class="buy-block">
                    <span>500金币+￥100</span>
                    <button class="buy-btn"><a href="http://m.you.163.com/item/detail?id=1006007&_stat_area=mod_2_item_14&_stat_id=1005000&_stat_referer=itemList#/?_k=h8xgt6">立即购买</a></button>
                </div>
            </li>
            <li class="item item2">
                <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/4b4dc24c777115efe22478c5601f1ea9%20%281%29.png" alt="">
                <div class="buy-block">
                    <span>500金币+￥100</span>
                    <button class="buy-btn">立即购买</button>
                </div>
            </li>
        </ul>
        <div class="clearfix"></div>
    </div>
    <div class="container2">
        <div class="item_title">优惠券</div>
        <ul class="items items_2">
            <li class="item_quan item1">
                <img src="http://yanxuan.nosdn.127.net/db67c4a0667c9f6cabaf0d2401e81272.png" alt="">
                <div class="zhekou">
                  <span>8</span>
                  <span>折</span>
                </div>
                <div class="zhekou_description_title">
                  <span>8</span>
                  <span>折券</span>
                </div>
                <div class="zhekou_description_content">
                  <span>有效期: 1个月</span>
                </div>
                <div class="zhekou_fanwei">
                  全场通用：严选圈专享;
                </div>
                <div class="buy-block">
                    <span>500金币+￥100</span>
                    <button class="buy-btn">立即购买</button>
                </div>
            </li>
            <li class="item_quan item2">
                <img src="http://yanxuan.nosdn.127.net/b27cc98a6f4de6056e06c442ef6cc52e.png" alt="">
                <div class="zhekou">
                  <span>单品</span>
                  <span>券</span>
                </div>
                <div class="zhekou_description_title">
                  <span>网易马桶8折</span>
                </div>
                <div class="zhekou_description_content">
                  <span>有效期: 1个月</span>
                </div>
                <div class="zhekou_fanwei">
                  全场通用：严选圈专享;
                </div>
                <div class="buy-block">
                    <span>400金币</span>
                    <button class="buy-btn">立即购买</button>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import {onShare} from '../../utils/share'

export default {
    onShareAppMessage(res) {
        return onShare(res, this.userInfo.nickName, 'fromID')
    },
    methods: {},
}
</script>

<style scoped>
header {
    padding: 0 5px;
    border-bottom: 1px solid #d9d9d9;
}
.header_list {
    width: 100%;
    white-space: nowrap;
}
.image_adv_container {
    padding: 0 15px;
    margin-top: 15px;
    position: relative;
}
.image_adv_container img {
    width: 100%;
    border-radius: 4px;
    height: 170px;
    border: 1px solid #f4f4f4;
    box-shadow: 0 0 1px #f4f4f4;
}
.image_adv_container .background_adv {
    width: 347px;
    height: 172px;
    background: #000;
    opacity: 0.3;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 15px;
    border-radius: 3px;
}
.image_adv_container span {
    position: absolute;
    font-size: 26px;
    color: #fff;
    right: 55px;
    top: 70px;
    z-index: 2;
}
.header_list .active {
    border-bottom: 2px solid rgb(151, 25, 38);
}
.header_list li {
    display: inline-block;
    font-size: 16px;
    padding: 5px 6px;
    font-size: 16px;
    color: #333;
}
.header_item1 {
    margin-left: 10px;
}
.header_item2 {
    margin-left: 15px;
}
.header_item3 {
    margin-left: 15px;
}
.header_item4 {
    margin-left: 15px;
}
.header_item5 {
    margin-left: 15px;
}
.container {
    margin-top: 10px;
    margin-bottom: 5px;
}
.container2 {
    margin-top: 5px;
    padding: 0 5px;
}
.container2 .item_title {
    text-align: center;
    font-size: 14px;
    color: #999;
    margin-bottom: 10px;
    display: block;
    border-top: 1px solid #eee;
    padding-top: 3px;
}
.container .item_title {
    text-align: center;
    font-size: 14px;
    color: #999;
    margin-bottom: 10px;
}
.items .item_quan {
    width: 160px;
    height: 150px;
    overflow: auto;
    font-size: 16px;
    background: #f4f4f4;
    float: left;
    position: relative;
}
.items .item {
    width: 160px;
    height: 150px;
    overflow: auto;
    font-size: 16px;
    background: #f4f4f4;
    float: left;
    position: relative;
}
.items .item1 {
    margin-left: 10px;
}
.items .item2 {
    margin-left: 10px;
}
.items .item img {
    width: 150px;
    float: left;
    height: 150px;
    position: absolute;
    top: -20px;
}
.items .item_quan img {
    width: 150px;
    float: left;
    height: 70px;
    position: absolute;
    top: -20px;
}
.items .item_quan .zhekou {
    position: absolute;
    left: 20px;
    top: 10px;
    color: #fff;
    font-size: 24px;
}
.items .item2 .zhekou {
    font-size: 18px;
    left: 12px;
    top: 13px;
}
.items_2 {
    margin-left: 10px;
}
.items .item_quan .zhekou_description_title {
    position: absolute;
    left: 70px;
    top: 10px;
    font-size: 12px;
    color: #fff;
}
.items .item_quan .zhekou_description_content {
    position: absolute;
    left: 65px;
    top: 25px;
    font-size: 12px;
    color: #fff;
}
.items .item2 .zhekou_description_content {
    position: absolute;
    left: 70px;
    top: 25px;
    font-size: 12px;
    color: #fff;
}
.items .item_quan .zhekou_fanwei {
    display: block;
    background: rgb(233, 233, 233);
    margin-top: 50px;
    width: 140px;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    color: #999;
    padding-left: 10px;
}
.buy-block {
    position: absolute;
    top: 85px;
    font-size: 12px;
    color: #999;
    text-align: center;
    margin-left: 20px;
    display: block;
}
.buy-block span {
    display: block;
    margin-left: 10px;
}
.buy-btn {
    font-size: 12px;
    line-height: 30px;
    margin-left: 0;
    height: 32px;
    display: inline-block;
    padding: 0;
    width: 100px;
    border: 1px solid #f4f4f4;
    color: #ccc;
}
.clearfix {
    clear: both;
}
</style>
