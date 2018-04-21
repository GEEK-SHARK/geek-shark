<template>
  <div class="container">
    <div class="section">
        <div class="image">
            <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/84f4ac7d46dc4a8814fa4974798d25a0.png" width="100%" height="100%" background-size="cover">
            <div class="like-block">
                <span>1234 人喜欢</span>
                <button class="like-btn">
                    点赞
                </button>
            </div>
        </div>
        <div class="userInfo">
            <p>{{userInfo.nickName}}</p>
            <p>2018年4月22日</p>
        </div>
        <div class="share">
            <div class="btn-group">
                <button size="mini" open-type="share" plain="true" @click="share($event)">分享到群里</button>
                <button size="mini" plain="true" @click="goHome">我也要创建Home</button>
            </div>
        </div>
    </div>
    <div class="section viewed">
        <viewed :list="list" :userInfo="userInfo"></viewed>
    </div>
    <div class="footer">
        <p class="instructions">我们的态度是健康、积极</p>
        <p>网易公司版权所有</p>
        <p>@2018 GEEK SHARK.All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
import viewed from "@/components/viewed"
import { onShare } from "../../utils/share"
export default {
    onShareAppMessage(res) {
        return onShare(res, this.userInfo.nickName, "fromID")
    },
    onLoad(e) {
        console.log(JSON.stringify(e))
    },
    data() {
        return {
            userInfo: {},
            list: [{}, {}, {}, {}]
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
                            // wx.request({
                            //     url: 'http://10.242.129.218:8080/user',
                            //     data: res.userInfo,
                            //     success: res => {
                            //         console.log(res)
                            //     },
                            // })
                            console.log("====>", res.userInfo)
                            this.userInfo = res.userInfo
                        }
                    })
                }
            })
        },
        share(res) {
            onShare(res, this.userInfo.nickName, "fromID")
        },
        goHome() {
            const url = "../index/main"
            wx.navigateTo({ url })
        }
    },

    created() {
        // 调用应用实例的方法获取全局数据
        this.getUserInfo()
    }
}
</script>

<style>
.container {
    background-color: #f4f4f4;
    padding: 0;
}
.section {
    background-color: #fff;
}
.viewed {
    margin-top: 8px;
}
.image {
    margin-bottom: 40px;
    padding: 0 10px;
    position: relative;
}
.like-block {
    position: absolute;
    top: 10px;
    right: 5px;
}
.like-block .like-btn {
    border: 1px solid orange;
    color: orange;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    width: 50px;
    padding: 0;
}
.userInfo {
    margin-bottom: 20px;
    text-align: right;
    padding-right: 10px;
}
.share {
    margin: 0 10px;
    border-top: 1px solid #d9d9d9;
}
.btn-group {
    display: flex;
    padding: 20px 0 30px;
}
.footer {
    text-align: center;
    padding: 15px 0;
    font-size: 12px;
    color: #ccc;
}
.footer .instructions {
    line-height: 45px;
}
</style>
