<template>
  <div class="container">
    <div class="section">
        <div class="image">
            <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/2018-04-21%2018_10_09.gif" background-size="cover">
        </div>
        <div class="like-block">
            <span class="like-btn">
                为<span v-if="userInfo.gender==1">他</span><span v-if="userInfo.gender==2">她</span><span v-if="userInfo.gender==0">Ta</span>点赞
                <img v-if="like" @click="iLike(false)" src="https://png.icons8.com/dusk/64/000000/good-quality.png" alt="已点赞"/>
                <img v-if="!like" @click="iLike(true)" src="https://png.icons8.com/wired/64/000000/good-quality.png"  alt="未点赞"/>
                <img style="display:none;" src="https://png.icons8.com/wired/64/000000/good-quality.png"  alt="未点赞"/>
            </span>
            <span class="lick-count">已有 {{likeCount}} 人点赞</span>
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
    <!-- <div class="footer">
        我们的态度是健康、积极
    </div> -->
  </div>
</template>

<script>
import viewed from '@/components/viewed'
import {onShare} from '../../utils/share'
export default {
    onShareAppMessage(res) {
        return onShare(res, this.userInfo.nickName, this.userInfo.gender, 'fromID')
    },
    onLoad(e) {
        console.log(JSON.stringify(e))
    },
    data() {
        return {
            userInfo: {},
            list: [{
                    avatarUrl:
                        'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ervyMJ8rP0ialLQ50ZeeAYzZHskRia8QjgePdibaZciat3eK0icfh9uSnyUakXVpTEQg7ftNAXTKb6Sb6g/0',
                    nickName: '金炳',
                    time: '4月22日 09:32:20',
                },{
                    avatarUrl:
                        'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoD19gq63hC5nciceRnSAMkbwM0M8Q3AjG5bgTibKfqiafL6v0jb3EAQC0oVPEfibJmYdCGRtp30Svcsw/0',
                    nickName: '吃雪怪君',
                    time: '4月22日 09:31:15',
                },
                {
                    avatarUrl:
                        'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ0iaMTicE4P8EdORX7zeMuLzUiabZvvkJynpdmvc7L5KHYd0UTWAPZhQNhsHIHicc3BDWXjDm9ueYTWA/0',
                    nickName: 'W',
                    time: '4月22日 09:31:09',
                },
                {
                    avatarUrl:
                        'https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEIu2y3ibpr0UiaTm6nib8GpEd7ecgLQBOibYNtzGXquA1KvicuESLhByv0OqLS7ASLsZoftjS6BG7UBMLw/0',
                    nickName: '楼下小黑',
                    time: '4月22日 09:31:07',
                },
                {
                    avatarUrl:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-Lo_jr4vafbd8jYB20ozb2at3hV3_ak3Ro7zU2RCJyRX4c41',
                    nickName: '二削皮',
                    time: '4月22日 09:30:57',
                },
                {
                    avatarUrl:
                        'http://scimg.158pic.com/touxiang/201709/2017093023374596.jpg',
                    nickName: '维城',
                    time: '4月22日 09:30:53',
                }
            ],
            likeCount: 3,
            like: false
        }
    },

    components: {
        viewed,
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
        share(res) {
            onShare(res, this.userInfo.nickName, this.userInfo.gender, 'fromID')
        },
        goHome() {
            const url = '../index/main'
            wx.navigateTo({url})
        },
        iLike(flag) {
            if(flag) this.likeCount += 1;
            else this.likeCount -= 1;
            this.like = flag;
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
.viewed {
    margin-top: 8px;
}
.image {
    padding: 0 10px;
    position: relative;
}
.image img {
    width: 100%;
    margin: 10px 0;
    border-radius: 3px;
}
.like-block {
    margin-bottom: 15px;
    text-align: right;
    padding-right: 10px;
    overflow: hidden;
}
.like-block .lick-count {
    font-size: 14px;
    color: #333;
    float: left;
    line-height: 40px;
    margin-left: 10px;;
}
.like-block .like-btn img {
    display: inline-block;
    width: 28px;
    height: 28px;
    position: relative;
    top: 8px;
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
</style>
