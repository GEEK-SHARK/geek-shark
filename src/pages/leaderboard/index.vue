<template>
  <div class="container">
    <div class="section">
        排行榜
    </div>
  </div>
</template>

<script>
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

    components: {},

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
        background-color: #f4f4f4;
        padding: 0;
    }
    .section {
        background-color: #fff;
    }
</style>
