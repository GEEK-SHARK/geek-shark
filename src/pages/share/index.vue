<template>
  <div class="container">
    <viewed :list="list" :userInfo="userInfo"></viewed>
  </div>
</template>

<script>
import viewed from '@/components/viewed'

export default {
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
        clickHandle(msg, ev) {
            console.log('clickHandle:', msg, ev)
        },
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
    .home {
        display: inline-block;
        margin: 20px auto;
        padding: 5px 10px;
        color: blue;
        border: 1px solid blue;
    }
</style>
