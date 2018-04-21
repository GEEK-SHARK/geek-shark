<template>
<div class="container">
  <div class="image">
    <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/WechatIMG181.jpeg" alt="" @click="changeGameItem()">
    <div class="view_button">
      <a href="/pages/share/main">
        <img class="eye" src="https://png.icons8.com/ios/64/000000/street-view-filled.png" background-size="cover"/>
    </a>
    </div>
  </div>
  <div class="header_container">
    <img class="img" src="https://png.icons8.com/windows/50/000000/money-bag.png">
    <span class="power">市值</span>
    <span class="power_value">789.50万</span>
    <img class="img" src="https://png.icons8.com/dotty/50/000000/expensive.png">
    <span class="coin">金币</span>
    <span class="coin_value" @click="addCoin()">279</span>
  </div>
  <div style="width: 100%; height: 8px;background: #f4f4f4;">
  </div>
  <div class="game_item_container" v-if="type == 'game_item'">
    <div class="game_item_header">
      <h1>待选商品</h1>
    </div>
    <div class="item-block">
      <ul class="game_item">
        <li class="item item1">
            <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/84f4ac7d46dc4a8814fa4974798d25a0.png" alt="">
            <div class="buy-block">
                <span>500金币</span>
                <button class="buy-btn"><a href="http://m.you.163.com/item/detail?id=1006007&_stat_area=mod_2_item_14&_stat_id=1005000&_stat_referer=itemList#/?_k=h8xgt6">已拥有</a></button>
            </div>
            <i class="al-has"> </i>
            <span class="al-has-span">拥</span>
        </li>
        <li class="item item2">
            <img src="http://yanxuan.nosdn.127.net/a67a775fcb0712b691a492cc387d1dc4.png?imageView&thumbnail=430x430&quality=95" alt="">
            <div class="buy-block">
                <span>500金币</span>
                <button class="buy-btn">立即购买</button>
            </div>
        </li>
        <li class="item item2">
            <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/4b4dc24c777115efe22478c5601f1ea9%20%281%29.png" alt="">
            <div class="buy-block">
                <span>500金币</span>
                <button class="buy-btn">立即购买</button>
            </div>
        </li>
      </ul>
    </div>
  </div>
  <task v-if="type == 'task_items'"></task>

  <div class="button_groups">
    <ul>
      <li>
        <a href="/pages/mall/main">
                <img class="button_img" src="https://png.icons8.com/office/40/000000/small-business.png" alt="">
            </a>
      </li>
      <li>
        <a href="/pages/leaderboard/main"><img class="button_img" src="https://png.icons8.com/dusk/64/000000/groups.png" alt=""></a>
      </li>
      <li>
        <button class="share-btn" open-type="share" size="mini" plain="true" @click="share($event)"><img class="button_img" src="https://png.icons8.com/cotton/64/000000/share.png" alt=""></button>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import card from '@/components/card'
import {onShare} from '../../utils/share'
import task from '@/components/task'

export default {
    onShareAppMessage(res) {
        return onShare(res, this.userInfo.nickName, this.userInfo.gender, 'fromID')
    },
    data() {
        return {
            motto: 'Hello World',
            userInfo: {},
            type: 'task_items',
        }
    },

    components: {
        card,
        task,
    },

    methods: {
        bindViewTap() {
            const url = '../logs/main'
            wx.navigateTo({
                url,
            })
        },
        getUserInfo() {
            // 调用登录接口
            wx.login({
                success: () => {
                    wx.getUserInfo({
                        success: res => {
                            console.log('====>', res)
                            this.userInfo = res.userInfo
                        },
                    })
                },
            })
        },
        share(res) {
            onShare(res, this.userInfo.nickName, this.userInfo.gender, 'fromID')
        },
        addCoin() {
            this.type = 'task_items'
        },
        changeGameItem() {
            this.type = 'game_item'
        },
    },

    created() {
        // 调用应用实例的方法获取全局数据
        this.getUserInfo()
    },
}
</script>

<style scoped>
.container {
    padding: 0;
    margin-bottom: 40px;
}

.header_container {
    padding: 0 10px;
}

.header_container .power,
.header_container .power_value,
.header_container .coin,
.header_container .coin_value {
    display: inline-block;
    width: 32px;
    height: 40px;
    line-height: 40px;
    vertical-align: bottom;
    font-size: 14px;
}
.header_container .img {
    display: inline-block;
    width: 20px;
    height: 20px;
    position: relative;
    top: -4px;
    margin-right: 3px;
}

.header_container .power_value {
    width: 70px;
    color: #1aac19;
}

.header_container .coin_value {
    width: 70px;
    color: #1aac19;
}

.header_container .add_coin {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    vertical-align: bottom;
    font-size: 14px;
}

.image {
    position: relative;
    padding: 0 10px;
    height: 260px;
    overflow: hidden;
}

.image img {
    width: 100%;
    height: 260px;
    border-radius: 5px;
}
.image .view_button {
    position: absolute;
    right: 15px;
    bottom: 5px;
}
.image .view_button img.eye {
    display: inline-block;
    width: 40px;
    height: 40px;
    opacity: 0.5;
}
.al-has {
    font-size: 12px;
    color: #999;
    border: 1px solid salmon;
    width: 20px;
    height: 20px;
    border-radius: 12px;
    position: absolute;
    top: 3px;
    right: 3px;
}
.item-block {
    overflow: auto;
    width: 100%;
}
.game_item {
    overflow: hidden;
    width: 530px;
    white-space: nowrap;
}

.game_item li {
    display: inline-block;
    position: relative;
    margin-right: 8px;
    background: rgb(242, 242, 242);
}

.game_item .item1 {
    margin-left: 10px;
}

.game_item li img {
    width: 150px;
    height: 130px;
}
.game_item li span {
    position: absolute;
    left: 40px;
    top: 100px;
    text-align: center;
    margin-left: 10px;
    font-size: 12px;
    color: salmon;
}
.game_item li span.bug {
    border: 1px solid salmon;
    left: 40px;
    top: 115px;
}

.game_item .buy-btn {
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

.game_item li div {
    text-align: center;
}

.game_item li span {
    font-size: 12px;
}

.userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.game_item_container {
    overflow: hidden;
    padding: 0 auto;
}

.game_item_header {
    border-bottom: 1px solid #f4f4f4;
    font-size: 14px;
    padding: 10px;
}

.game_item {
}

.game_item::after {
    clear: both;
}

.game_item img {
    width: 100px;
    height: 100px;
    display: block;
}

.userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
}

.userinfo-nickname {
    color: #aaa;
}

.usermotto {
    margin-top: 150px;
}

.form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
}

.counter,
.share {
    display: inline-block;
    margin: 10px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
}

.button_groups {
    position: fixed;
    bottom: -3px;
    right: 10px;
    height: 40px;
    font-size: 14px;
}

.button_groups ul {
    overflow: hidden;
}

.button_groups li {
    float: right;
    /* margin-left: 10px; */
}

.button_groups li a {
    padding: 0 10px;
}

.button_groups li .button_img {
    width: 32px;
    height: 32px;
    opacity: 0.6;
}

.button_groups li .share-btn {
    border: none;
    padding: 0 10px;
    line-height: 1;
}

.al-has-span {
    font-size: 12px !important;
    position: absolute !important;
    top: 5px !important;
    right: 8px !important;
    left: auto !important;
    margin-left: auto;
}
.game_item .buy-block {
    margin-bottom: 8px;
}
</style>
