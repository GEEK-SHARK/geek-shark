<template>
<div>
    <header>
        <ul class="header_list">
            <li class="active">商城</li>
            <li>家具</li>
            <li>桌子</li>
            <li>桌子</li>
            <li>桌子</li>
            <li>桌子</li>
            <li>桌子</li>
            <li>桌子</li>
            <li>桌子</li>
        </ul>
    </header>
    <div class="container">
        <ul class="items">
            <li>
                <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/84f4ac7d46dc4a8814fa4974798d25a0.png" alt="">
                <div class="buy-block">
                    <span>500金币 + ￥100 </span>
                    <button class="buy-btn">购买</button>
                </div>
            </li>
            <li>
                <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/4b4dc24c777115efe22478c5601f1ea9%20%281%29.png" alt="">
                <div class="buy-block">
                    <span>500金币 + ￥100 </span>
                    <button class="buy-btn">购买</button>
                </div>
            </li>
            <li>
                <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/84f4ac7d46dc4a8814fa4974798d25a0.png" alt="">
                <div class="buy-block">
                    <span>500金币 + ￥100 </span>
                    <button class="buy-btn">购买</button>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import { onShare } from "../../utils/share"

export default {
    onShareAppMessage(res) {
        return onShare(res, this.userInfo.nickName, "fromID")
    }
}
</script>

<style>
.header_list {
    width: 100%;
    white-space: nowrap;
}
.header_list .active {
    color: gold;
    border-bottom: 1px solid gold;
}
.header_list li {
    display: inline-block;
    font-size: 16px;
    padding: 5px 6px;
}
.container {
}

.items li {
    overflow: auto;
    width: 100%;
    font-size: 16px;
}
.items li img{
    width: 50%;
    float: left;
}
.buy-block {
    margin-top: 100px;
}
.buy-btn {
    color: gold;
    border: 1px solid gold;
    font-size: 16px;
    line-height: 30px;
    width: 100px;
    margin-left: 0;
}
</style>
