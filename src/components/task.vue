<template>
  <div class="task_container">
    <div class="task">
      <div class="task_header">
        <h1>基础任务</h1>
      </div>
      <ul>
        <li class="task_item">
          <div>
            <span class="task_img">
                <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/WX20180421-102904%402x.png" alt="">
            </span>
            <span class="task_title">连续登录</span>
            <span class="task_description">登录获取金币</span>
            <span class="task_value">+2金币</span>
          </div>
        </li>
        <li class="task_item task_item2">
          <div>
            <span class="task_img">
                <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/WX20180421-105501%402x.png" alt="">
            </span>
            <span class="task_title">关注微信公众号</span>
            <span class="task_description">关注获取金币</span>
            <span class="task_value">+5金币</span>
          </div>
        </li>
        <li class="task_item task_item3">
          <div>
            <span class="task_img">
                <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/WX20180421-105611%402x.png" alt="">
            </span>
            <span class="task_title">每日微信运动</span>
            <span class="task_description">微信步数获取金币</span>
            <span class="task_value">+2金币</span>
          </div>
        </li>
        <li class="task_item">
          <div>
            <span class="task_img">
                <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/WX20180421-105519%402x.png" alt="">
            </span>
            <span class="task_title">严选购物</span>
            <span class="task_description">严选购物获取金币</span>
            <span class="task_value">+5金币</span>
          </div>
        </li>
        <li class="task_item">
          <div>
            <span class="task_img">
                <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/WX20180421-102904%402x.png" alt="">
            </span>
            <span class="task_title">游戏分享</span>
            <span class="task_description">分享游戏获取金币</span>
            <span class="task_value">+2金币</span>
          </div>
        </li>
        <li class="task_item task_item6">
          <div>
            <span class="task_img">
                <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/WX20180421-105519%402x.png" alt="">
            </span>
            <span class="task_title">早睡打卡</span>
            <span class="task_description">20:00~22:00打卡获取</span>
            <span class="task_value">+2金币</span>
          </div>
        </li>
        <li class="task_item">
          <div>
            <span class="task_img">
                <img src="https://520stone-blog.oss-cn-beijing.aliyuncs.com/tmp/WX20180421-105519%402x.png" alt="">
            </span>
            <span class="task_title">早起打卡</span>
            <span class="task_description">06:00~08:00打卡获取</span>
            <span class="task_value">+2金币</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {}
    },
    methods: {},
}
</script>

<style scoped>
.task_header {
    border-bottom: 1px solid #ddd;
    font-size: 14px;
    padding: 10px;
}

.task ul {
    display: flex;
    flex-wrap: wrap;
}

.task_item {
    flex-grow: 1;
    flex: 0 0 33%;
}
.task_item .task_img {
    display: block;
    width: 40px;
    height: 40px;
    margin: 0 auto;
}
.task_item img {
    width: 40px;
    height: 40px;
    display: block;
}
.task_item {
    float: left;
    height: 100px;
    font-size: 12px;
    padding: 5px 0;
    width: 100px;
    overflow: hidden;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
}
.task_item .task_title {
    display: block;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
}
.task_item .task_description {
    display: block;
    text-align: center;
}
.task_item .task_value {
    display: block;
    text-align: center;
    font-size: 12px;
    background: goldenrod;
    opacity: 0.7;
    margin: 5px 10px 0;
}
.task_item2 img {
    width: 40px;
    height: 35px;
}
.task_item3 img {
    width: 45px;
    height: 35px;
}
.task_item3 {
    border-right: none;
}
.task_item6 {
    border-right: none;
}
.clear_fix {
    clear: both;
}
</style>
