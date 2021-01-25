<template>
  <div class="task-detail">
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple-dark">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="task-title">播种豌豆</span>
              <span>发起中</span>
            </div>
            <div class="text item">
              <span class="task-position">希望小村菜地</span>
              <el-button type="danger" plain>
                加入任务
              </el-button>
            </div>
          </el-card>
          <el-card>
            <div class="person-info">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" shape="circle" :size="120" />
              <div class="card-info">
                <div>
                  <h2 class="person-title">
                    重庆市渝中小学
                  </h2>
                </div>
                <div><span class="person-name">刘老师</span> <span class="person-time">2天前</span></div>
              </div>
            </div>
          </el-card>
          <el-card>
            <div slot="header" class="clearfix">
              <span class="task-startTime">任务发起时间:2021.1.11</span>
            </div>
            <div class="task-text item">
              根据实践课程要求，在希望菜地进行豌豆
              的种植与知识教育，提高同学的实践能力
              让同学们更亲近大自然，感受大自然的魅力。
            </div>
          </el-card>
          <el-card class="box-card">
            <div class="head-icon">
              <div v-for="(url,index) in urls" :key="index" class="img-list">
                <el-avatar :src="url" shape="circle" :size="40" class="img-item" />
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple">
          视频组件待封装
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <h2>任务时间轴</h2>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple" />
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light" />
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple" />
      </el-col>
    </el-row>
    <el-row class="task-footer">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <span>同类任务</span>
          <span>菜地历史</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple task-info">
          <el-card v-for="(url,index) in urls" :key="index" class="card-box">
            <div class="task-info-box">
              <div class="card-img">
                <el-image :src="url" style="width: 160px; height: 160px" />
              </div>
              <div>
                <h2>玫瑰花种植</h2>
                <div class="task-info-text">
                  <el-avatar :src="url" shape="circle" :size="20" />
                  <div>
                    <h2>刘老师</h2>
                    <p>新华小学</p>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      task: {
        title: '播种豌豆',
        position: '希望小村菜地'
      },
      urls: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ]

    }
  }
}
</script>

<style  scoped>
*{
  margin:0;
  padding: 0;
}
.task-detail{
  margin-left:100px;
}
.el-row {
    margin-bottom: 20px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .text {
    font-size: 24px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }

  .person-info{
    display: flex;
  }

  .img-list{
    display: flex;
  }
  .img-item{
    margin-right:10px ;
  }

  .head-icon{
    display: flex;
  }

  .task-info{
    display: flex;
    flex-wrap: wrap;
  }

  .card-box{
    width:402px;
    height: 160px;
    margin:0px 40px 52px 0px;
  }

  .task-info-box{
    display: flex;
    width: 100%;
  }

  .task-footer{
    margin-bottom:40px ;
  }

  .task-title{
    /* width: 192px;
    height: 48px; */
    font-size: 48px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    line-height: 82px;
    color: #707070;
  }

  .task-position{
    /* width: 216px;
    height: 36px; */
    font-size: 36px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 61px;
    color: #666666;
  }

  .person-title{
    /* width: 252px;
    height: 36px; */
    margin-top:20px;
    font-size: 36px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    line-height: 61px;
    color: #666666;
    /* opacity: 1; */
  }

  .person-name{
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    line-height: 41px;
    color: #666666;
  }

  .person-time{
    margin-left:20px;
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 41px;
    color: #999999;
  }

  .card-info{
    margin-left:20px;
  }

  .task-startTime{
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 41px;
    color: #999999;
  }

  .task-text{
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 41px;
    color: #999999;
  }
  </style>
