<template>
    <div>
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
  padding: 15px 10px;
  color: #999;
  border-bottom:1px solid #f4f4f4;
}
.friend {
  clear: both;
  border-bottom:1px solid #f4f4f4;
}
.userinfo-portrait,
.userinfo-nickname,
.userinfo-time {
  display: inline-block;
  height: 74px;
  line-height: 74px;
  vertical-align: top;
}
.userinfo-avatar {
  width: 54px;
  height: 54px;
  margin: 10px;
  border-radius: 50%;
}
.userinfo-nickname {
  width: 170px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space:nowrap;
}
.userinfo-time {
  float: right;
  color: #ccc;
  font-size: 14px;
  margin-right: 10px;
}
</style>
