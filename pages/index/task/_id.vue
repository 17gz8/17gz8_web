<template>
  <div class="task-detail">
    <el-row>
      <el-col :span="6">
        <div>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="task-title">播种豌豆</span>
              <span>发起中</span>
            </div>
            <div class="text item">
              <span class="task-position">希望小村菜地</span>
              <el-button type="danger">
                加入任务
              </el-button>
            </div>
          </el-card>
          <el-card>
            <div class="person-info">
              <el-avatar :src="task.profile.avatarSrc" shape="circle" :size="120" />
              <div class="card-info">
                <div>
                  <h2 class="person-title">
                    {{ task.profile.school }}
                  </h2>
                </div>
                <div>
                  <span class="person-name"> {{ task.profile.name }}</span>
                  <span class="person-time">{{ task.profile.time }}天前</span>
                </div>
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
        <div>
          视频组件待封装
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="timeline">
          <h2 class="timeline-title">
            任务时间轴
          </h2>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div />
      </el-col>
    </el-row>
    <el-row class="task-footer">
      <el-col :span="24">
        <div>
          <span v-for="(item,index) in taskCategory" :key="item" :class="[index === 0 ? 'task-same' : '', index === 1 ? 'task-history' : '', currentIndex === index? 'active' : '']" @click="isClick(index)">{{ item }}</span>
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
              <div class="card-right">
                <h2 class="task-info-title">
                  玫瑰花种植
                </h2>
                <div class="task-info-text">
                  <el-avatar :src="url" shape="circle" :size="60" />
                  <div class="task-info-text-wrap2">
                    <h2 class="task-info-person">
                      刘老师
                    </h2>
                    <p class="task-info-position">
                      新华小学
                    </p>
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
      currentIndex: 0,
      task: {
        title: '播种豌豆',
        position: '希望小村菜地',
        // 简介
        profile: {
          avatarSrc: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
          school: '重庆市渝北小学',
          name: '刘老师',
          time: '2'
        }
        // 任务描述
        // description:{

        // }
      },
      urls: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ],
      taskCategory: ['同类任务', '菜地历史']
    }
  },
  methods: {
    isClick (index) {
      this.currentIndex = index
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
  font-family: Source Han Sans CN;
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
    /* height: 160px; */
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
    font-weight: bold;
    color: #707070;
    padding-left: 18px;
    border-left: 8px solid #FF6262;
  }

  .task-position{
    /* width: 216px;
    height: 36px; */
    font-size: 36px;
    font-weight: 400;
    line-height: 61px;
    color: #666666;
  }

  .person-title{
    /* width: 252px;
    height: 36px; */
    margin-top:20px;
    font-size: 36px;
    font-weight: 500;
    line-height: 61px;
    color: #666666;
    /* opacity: 1; */
  }

  .person-name{
    font-size: 24px;
    font-weight: 500;
    line-height: 41px;
    color: #666666;
  }

  .person-time{
    margin-left:20px;
    font-size: 24px;
    font-weight: 400;
    line-height: 41px;
    color: #999999;
  }

  .card-info{
    margin-left:20px;
  }

  .task-startTime{
    font-size: 24px;
    font-weight: 400;
    line-height: 41px;
    color: #999999;
  }

  .task-text{
    font-size: 24px;
    font-weight: 400;
    line-height: 41px;
    color: #999999;
  }

  .task-info-title{
    font-size: 24px;
    font-weight: bold;
    line-height: 41px;
    color: #666666;
  }

  .task-info-text{
    display: flex;
    margin-top:15px;
  }

  .card-right{
    margin: 20px 0 0 23px;
  }

  .task-info-person{
    font-size: 24px;
    font-weight: 500;
    line-height: 35px;
    color: #999999;
    /* margin-bottom:8px ; */
  }

  .task-info-position{
    font-size: 16px;
    font-weight: 300;
    line-height: 27px;
    color: #999999;
  }

  .task-info-text-wrap2{
    margin-left:10px;
  }

  .task-same,.task-history{
  font-size: 36px;
  font-weight: 400;
  color: #666666;
  cursor: pointer;
  }

  .task-same{
    padding-left: 18px;
    border-left: 8px solid #FF6262;
    margin-right:40px ;
  }

  .timeline-title{
    padding-left: 18px;
    border-left: 8px solid #FF6262;
    font-size: 48px;
    font-weight: bold;
    color: #666666;
  }

  .el-button{
    font-size:24px;
    padding: 6px 12px;
    float: right;
    margin-top: 14px;
  }

  .active{
    font-size: 48px;
    font-weight: bold;
  }
  </style>
