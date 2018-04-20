<template>
  <div class="container">
    <div class="image">
        <img src="../../../static/u12.jpg" background-size="cover">
    </div>
    <div class="userInfo">
        <p>{{userInfo.nickName}}</p>
        <p>2018年3月16日</p>
    </div>
    <div class="share">
        <div class="btn-group">
            <button size="mini" type="default" plain="true" @click="share">分享到群里</button>
            <button size="mini" type="default" plain="true" @click="goHome">我也要创建Home</button>
        </div>
    </div>
    <viewed :list="list" :userInfo="userInfo"></viewed>
  </div>
</template>

<script>
import viewed from '@/components/viewed'
import { onShare } from "../../utils/share"
export default {
    onShareAppMessage(res) {
        return onShare(res,this.userInfo.nickName, "fromID")
    },
    onLoad(e) {
        console.log(JSON.stringify(e))
    },
    data() {
        return {
            userInfo: {},
            list: [{},{},{},{}]
        }
    },

    components: {
        viewed
    },

    methods: {
        getUserInfo() {
            // 调用登录接口
            wx.login({
                success: () => {
                    wx.getUserInfo({
                        success: res => {
                            this.userInfo = res.userInfo
                        },
                    })
                },
            })
        },
        share() {

        },
        goHome() {
            const url = '../index/main'
            wx.navigateTo({url})
        }
    },

    created() {
        // 调用应用实例的方法获取全局数据
        this.getUserInfo()
    },
}
</script>

<style>
    .container {
        padding: 0;
    }
    .image {
        margin-bottom: 40px;
        padding: 0 10px;
    }
    .userInfo {
        margin-bottom: 20px;
        text-align: right;
        padding-right: 10px;
    }
    .share {
        margin: 0 10px 10px;
        border-top: 1px solid #d9d9d9;
    }
    .btn-group {
        display: flex;
        padding: 10px 0;
    }
</style>
