<template>
    <div>
        <p class="count">
            已查看{{list.length}}人
        </p>
        <ul>
            <li v-for="(item, index) in list" :key="index" class="friend">
                <span class="userinfo-portrait">
                    <img class="userinfo-avatar" v-if="item.avatarUrl" :src="item.avatarUrl" background-size="cover" />
                </span>
                <span class="userinfo-nickname">{{item.nickName}}</span>
                <span class="userinfo-time">{{item.time}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: ["list", "userInfo"]
};
</script>

<style>
.count {
  padding: 10px;
  color: #999;
  font-size: 14px;
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
  height: 61px;
  line-height: 61px;
  vertical-align: top;
}
.userinfo-avatar {
  width: 45px;
  height: 45px;
  margin: 8px 10px;
  border-radius: 50%;
}
.userinfo-nickname {
  width: 180px;
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
