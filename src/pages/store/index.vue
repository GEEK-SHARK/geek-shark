<template>
<div class="container">
  <div class="header_container">
    <span class="power">市值111</span>
    <input type="text" value="380万" class="power_value" />
    <span class="coin">金币</span>
    <input type="text" value="279" class="coin_value" />
    <span @click="addCoin()" class="add_coin">+</span>
  </div>
  <div class="image">
    <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/u12.jpg" alt="" @click="changeGameItem()">
    <div class="view_button">
      <a href="/pages/share/main">👀</a>
    </div>
  </div>
  <div style="width: 100%; height: 8px;background: #eee;">
  </div>
  <div class="game_item_container" v-if="type == 'game_item'">
    <div class="game_item_header">
      <h1>待选商品</h1>
    </div>
    <ul class="game_item">
      <li>
        <div>
          <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/84f4ac7d46dc4a8814fa4974798d25a0.png" alt="">
          <span>沙发1</span>
        </div>
      </li>
      <li>
        <div>
          <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/4b4dc24c777115efe22478c5601f1ea9%20%281%29.png" alt="">
          <span>沙发2</span>
        </div>
      </li>
      <li>
        <div>
          <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/84f4ac7d46dc4a8814fa4974798d25a0.png" alt="">
          <span>沙发3</span>
        </div>
      </li>
      <li>
        <div>
          <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/a67a775fcb0712b691a492cc387d1dc4.png" alt="">
          <span>沙发4</span>
        </div>
      </li>
      <li>
        <div>
          <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/cb05cb5eb82f0d9c6f5c295731abb7f7.png" alt="">
          <span>沙发5</span>
        </div>
      </li>
      <li>
        <div>
          <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/e21b58dc1fe7de3228ab9f45bbeec0d5.png" alt="">
          <span>沙发6</span>
        </div>
      </li>
    </ul>
  </div>
  <task v-if="type == 'task_items'"></task>

  <div style="width: 100%; height: 8px;background: #eee;">
  </div>
  <div class="button_groups">
    <ul>
      <li>
        <a href="">
                <img class="button_img" src="https://cdn1.iconfinder.com/data/icons/finance-banking-tiny-icons/16/shopping-128.png" alt="">
            </a>
      </li>
      <li>
        <a href="/pages/leaderboard/main"><img class="button_img" src="https://cdn4.iconfinder.com/data/icons/people-37/512/38-128.png" alt=""></a>
      </li>
      <li>
        <button class="share-btn" open-type="share" size="mini" plain="true" @click="share($event)"><img class="button_img" src="https://cdn3.iconfinder.com/data/icons/pictofoundry-pro-vector-set/512/Share-128.png" alt=""></button>
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
        return onShare(res, this.userInfo.nickName, 'fromID')
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
            onShare(res, this.userInfo.nickName, 'fromID')
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
}

.header_container {
    padding: 0 10px;
}

.power {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    vertical-align: bottom;
    font-size: 14px;
}

.power_value {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    vertical-align: bottom;
    width: 60px;
    background: #fff;
    padding: 0 10px 0 0;
    font-size: 14px;
}

.coin {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    vertical-align: bottom;
    font-size: 14px;
}

.coin_value {
    display: inline-block;
    width: 128rpx;
    height: 40px;
    line-height: 40px;
    vertical-align: bottom;
    width: 60px;
    background: #fff;
    padding: 0 10px 0 0;
    font-size: 14px;
}

.add_coin {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    vertical-align: bottom;
    font-size: 14px;
}

.image {
    position: relative;
    padding: 0 10px;
}

.image .view_button {
    position: absolute;
    right: 10px;
    bottom: 10px;
}

.image img {
    width: 100%;
    border-radius: 5px;
}

.game_item li {
    float: left;
    position: relative;
    width: 100px;
    height: 100px;
    margin-left: 20px;
}

.game_item li img {
    width: 100px;
    height: 80px;
}

.game_item li span {
    position: absolute;
    left: 20px;
    top: 60px;
    text-align: center;
    margin-left: 10px;
    font-size: 12px;
    color: #999;
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
    background: rgb(242, 242, 242);
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
    bottom: 10px;
    right: 10px;
    height: 40px;
    font-size: 14px;
}

.button_groups ul {
    overflow: hidden;
}

.button_groups li {
    float: right;
    margin-left: 10px;
}

.button_groups li a {
    padding: 0 10px;
}

.button_groups li .button_img {
    width: 32px;
    height: 32px;
}

.button_groups li .share-btn {
    border: none;
    padding: 0 10px;
    line-height: 1;
}
</style>
