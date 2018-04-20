<template>
  <div class="container" >
    <div>
        <span class="power">能量</span>
        <input type="text" value="279" class="power_value"/>
        <span class="coin">金币</span>
        <input type="text" value="279" class="coin_value"/>
    </div>
    <div class="image">
        <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/u12.jpg" alt="">
        <div class="view_button">
        <a href="/pages/share/main">👀</a>
        </div>
    </div>
    <div class="game_item_container">
        <ul class="game_item">
        <li>
            <div>
            <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/84f4ac7d46dc4a8814fa4974798d25a0.png" alt="" width="100px;" height="100px;">
            <span>严选沙发</span>
            </div>
        </li>
        <li>
            <div>
            <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/84f4ac7d46dc4a8814fa4974798d25a0.png" alt="" width="100px;" height="100px;">
            <span>严选沙发</span>
            </div>
        </li>
        <li>
            <div>
            <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/84f4ac7d46dc4a8814fa4974798d25a0.png" alt="" width="100px;" height="100px;">
            <span>严选沙发</span>
            </div>
        </li>
        </ul>
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

export default {
    onShareAppMessage(res) {
        return onShare(res, this.userInfo.nickName, 'fromID')
    },
    data() {
        return {
            motto: 'Hello World',
            userInfo: {},
        }
    },

    components: {
        card,
    },

    methods: {
        bindViewTap() {
            const url = '../logs/main'
            wx.navigateTo({url})
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
    },

    created() {
        // 调用应用实例的方法获取全局数据
        this.getUserInfo()
    },
}
</script>

<style scoped>
.container {
    padding: 10px;
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
.image {
    position: relative;
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
