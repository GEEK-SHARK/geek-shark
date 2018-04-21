<template>
  <div class="task_container">
    <div class="task">
      <div class="task_header">
        <h1>基础任务</h1>
      </div>
      <ul>
        <li>
          <div>
            <span>每日登陆</span>
          </div>
        </li>
        <li>
          <div>
            <span>关注微信公众号</span>
          </div>
        </li>
        <li>
          <div>
            <span>每日微信运动</span>
          </div>
        </li>
        <li>
          <div>
            <span>严选购物</span>
          </div>
        </li>
        <li>
          <div>
            <span>游戏分享</span>
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
.task_container {
    background: #fff;
}

.task_header {
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    padding: 5px;
}
.task li {
    float: left;
    width: 32%;
    height: 100px;
    font-size: 12px;
    border: 1px solid #ccc;
}
</style>
