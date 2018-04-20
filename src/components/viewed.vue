<template>
    <div>
        <a href="/pages/index/main" class="home">去往首页</a>
        <div class="viewed">
            <p class="count">
                已查看{{list.length}}人
            </p>
            <ul class="friends">
                <li class="friend">
                    <span class="userinfo-portrait">
                        <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
                    </span>
                    <span class="userinfo-nickname">{{userInfo.nickName}}</span>
                    <span class="userinfo-time">4月20日 11:15:15</span>
                </li>
                <li v-for="(item, index) in list" :key="index" class="friend">
                    <span class="userinfo-portrait">
                        <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
                    </span>
                    <span class="userinfo-nickname">{{userInfo.nickName}}</span>
                    <span class="userinfo-time">4月20日 11:15:15</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  props: ["list", "userInfo"]
};
</script>

<style>
.count {
  padding: 0 20rpx;
  color: #999;
}
.friend {
  clear: both;
}
.userinfo-portrait,
.userinfo-nickname,
.userinfo-time {
  display: inline-block;
  height: 168rpx;
  line-height: 168rpx;
  vertical-align: top;
}
.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}
.userinfo-nickname {
  width: 335rpx;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space:nowrap;
}
.userinfo-time {
  float: right;
  color: #ccc;
  font-size: 28rpx;
  margin-right: 20rpx;
}
</style>
