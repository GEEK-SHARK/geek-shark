<template>
  <div class="container">
    <div class="section my-rank">
        <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
        <p>我的排名</p>
        <div class="my-rank-info">
          <div>4</div>
          <div>
            <p class="my-rank-info-text">当前市值</p>
            <p class="my-rank-info-cash">789.50万</p>
          </div>
        </div>
    </div>
    <div class="section">
        <div class="rank-type">
            <span class="rank-txt">排行榜</span>
            <div class="btn-group">
                <button size="mini" plain="true" :class="{'active':type==0}" @click="rankType(0)">好友</button>
                <button size="mini" plain="true" :class="{'active':type==1}" @click="rankType(1)">全部</button>
            </div>
        </div>
        <ul>
            <li v-for="(item, index) in list" :key="index" class="rank-item">
                <span class="userinfo-rank" v-if="index==0"><img class="rank_img" src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/gold.jpg"/></span>
                <span class="userinfo-rank" v-if="index==1"><img class="rank_img" src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/silver.jpg"/></span>
                <span class="userinfo-rank" v-if="index==2"><img class="rank_img" src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/copper.jpg"/></span>
                <span class="userinfo-rank" v-if="index>2">{{index+1}}</span>
                <div class="wrap">
                  <span class="userinfo-portrait">
                      <img class="userinfo-avatar" v-if="item.avatarUrl" :src="item.avatarUrl" background-size="cover" />
                  </span>
                  <span class="userinfo-nickname">{{item.nickName}}</span>
                  <span class="userinfo-worth">{{item.worth}}</span>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import {onShare} from '../../utils/share'
export default {
    onLoad(e) {
        wx.hideShareMenu()
    },
    data() {
        const list = [{
                avatarUrl:
                    'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoD19gq63hC5nciceRnSAMkbwM0M8Q3AjG5bgTibKfqiafL6v0jb3EAQC0oVPEfibJmYdCGRtp30Svcsw/0',
                nickName: '吃雪怪君',
                worth: '1000.00万',
            },
            {
                avatarUrl:
                    'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ervyMJ8rP0ialLQ50ZeeAYzZHskRia8QjgePdibaZciat3eK0icfh9uSnyUakXVpTEQg7ftNAXTKb6Sb6g/0',
                nickName: '金炳',
                worth: '970.00万',
            },
            {
                avatarUrl:
                    'https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEIu2y3ibpr0UiaTm6nib8GpEd7ecgLQBOibYNtzGXquA1KvicuESLhByv0OqLS7ASLsZoftjS6BG7UBMLw/0',
                nickName: '楼下小黑',
                worth: '890.50万',
            },
            {
                avatarUrl:
                    'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ0iaMTicE4P8EdORX7zeMuLzUiabZvvkJynpdmvc7L5KHYd0UTWAPZhQNhsHIHicc3BDWXjDm9ueYTWA/0',
                nickName: 'W',
                worth: '789.50万',
            },
            {
                avatarUrl:
                    'http://scimg.158pic.com/touxiang/201709/2017093023374596.jpg',
                nickName: '维城',
                worth: '600.50万',
            },
            {
                avatarUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-Lo_jr4vafbd8jYB20ozb2at3hV3_ak3Ro7zU2RCJyRX4c41',
                nickName: '二削皮',
                worth: '539.50万',
            }
        ]
        const list1 = [{
                avatarUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9GN68n-GTfsqwxcZixlGM7QleeiENzLxOFflDfZpZqmj-2oC',
                nickName: 'BOBO',
                worth: '2.90亿',
            },
            {
                avatarUrl:
                    'http://www.gx8899.com/uploads/allimg/180118/3-1P11P92057.jpg',
                nickName: '海阔天空',
                worth: '2.19亿',
            },
            {
                avatarUrl:
                    'https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/WechatIMG368.jpeg',
                nickName: 'Smile_Cuz',
                worth: '1.90亿',
            },
            {
                avatarUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXh9yQEHKK-nc2mSsB9i4Tb_F7oU7LcTMyP0ifT28Zri267lOm',
                nickName: '熊哈孩',
                worth: '1.50亿',
            },
            {
                avatarUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6MdkAJi-qKFq5RWHviwDr-5SKgmgynfBBCOT-N_kJYNqrmA-qvA',
                nickName: '保温杯+枸杞',
                worth: '1.32亿',
            },
            {
                avatarUrl:
                    'http://www.9kuly.com/upFiles/infoImg/201803302301497219.jpg',
                nickName: '笑看人生',
                worth: '1.20亿',
            },
            {
                avatarUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ewXINOcGG6aAJv0FeiBM2KU8SNhZlRmGVogmcNFUpGUFiE4uPQ',
                nickName: '孤单恋人',
                worth: '9900.00万',
            },
            {
                avatarUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMAdfngC0ju2WXoTnMHInGQuAdpx6dGX43__qqCakHxJAKiqlmCg',
                nickName: 'Asurading',
                worth: '9700.00万',
            },
            {
                avatarUrl:
                    'http://imgtu.5011.net/uploads/content/20170221/4878861487660709.jpg',
                nickName: '文斌',
                worth: '9650.00万',
            },
            {
                avatarUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiA2LzWvAWw4reSATPB8kt4HSXt0Yo_97grhGhnwKv7o-0sKe0ZA',
                nickName: 'Fresh.Qin',
                worth: '9500.00万',
            },
            {
                avatarUrl:
                    'http://www.biaobaiju.com/uploads/20180122/16/1516609564-kdSTRAsjeg.jpg',
                nickName: 'Jad',
                worth: '9300.00万',
            },
            {
                avatarUrl:
                    'https://www.68xi.cn/d/file/20170723/859-1F30Q54117-52.jpg',
                nickName: '花花',
                worth: '9270.00万',
            },
            {
                avatarUrl:
                    'http://p9.pstatp.com/large/4ad50001fb2dc7ccb64d',
                nickName: '加速',
                worth: '9220.00万',
            }
        ]
        return {
            userInfo: {},
            list: list,
            listTmp1:list,
            listTmp2: list1,
            type: 0,
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
        },
        rankType(type) {
            this.type = type
            if(type==0) this.list = this.listTmp1;
            else this.list = this.listTmp2;
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
    background-color: #f4f4f4;
    padding: 0;
}
.section {
    background-color: #fff;
}
.my-rank {
    margin-bottom: 8px;
    padding-top: 10px;
    text-align: center;
}
.my-rank .userinfo-avatar {
    width: 64px;
    height: 64px;
    margin: 10px;
    border-radius: 50%;
}
.my-rank .my-rank-info {
    font-size: 0;
}
.my-rank .my-rank-info div {
    font-size: 20px;
    display: inline-block;
    width: 50%;
    padding: 20px 0;
    vertical-align: middle;
}
.my-rank .my-rank-info .my-rank-info-text {
    color: #ccc;
    font-size: 14px;
}
.my-rank .my-rank-info .my-rank-info-cash {
    color: #1aac19;
    font-size: 20px;
}
.rank-type {
    padding: 10px;
    border-bottom: 1px solid #f4f4f4;
    overflow: hidden;
}
.rank-type .rank-txt {
    position: relative;
    top: 4px;
    font-size: 14px;
}
.rank-type .btn-group {
    float: right;
    font-size: 0;
}
.rank-type .btn-group button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
}
.rank-type .btn-group button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.rank-type .btn-group button.active {
    background-color: #353535;
    color: #fff;
}

.rank-item {
    clear: both;
    overflow: hidden;
}
.rank-item .wrap {
    margin-left: 30px;
    border-bottom: 1px solid #f4f4f4;
}
.rank-item:last-child .wrap {
    border-bottom: none;
}
.rank-item .userinfo-rank,
.rank-item .userinfo-portrait,
.rank-item .userinfo-nickname,
.rank-item .userinfo-worth {
    display: inline-block;
    height: 61px;
    line-height: 61px;
    vertical-align: top;
}
.rank-item .userinfo-rank {
    float: left;
    width: 30px;
    text-align: center;
}
.rank-item .userinfo-rank .rank_img {
    width: 23px;
    height: 32px;
    position: relative;
    top: 10px;
}
.rank-item .userinfo-avatar {
    width: 45px;
    height: 45px;
    margin: 8px 10px;
    border-radius: 4px;
}
.rank-item .userinfo-nickname {
    width: 170px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.rank-item .userinfo-worth {
    float: right;
    margin-right: 10px;
}
</style>
