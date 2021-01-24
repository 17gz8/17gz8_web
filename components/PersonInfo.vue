<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="container">
      <div class="circle">
        <div class="block">
          <el-avatar :size="120" :src="circleUrl" />
        </div>
      </div>
      <div style="padding: 26px 0 25px 20px;">
        <span>重庆市渝中小学</span>
        <div class="bottom clearfix">
          <span>刘老师</span>
          <span>2天前</span>
        </div>
      </div>
    </div>
  </el-card>
</template>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }

  .container{
    display: flex;
  }
</style>

<script>
export default {
  data () {
    return {
      currentDate: new Date(),
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  }
}
</script>
