<template>
  <div class="task-detail">
    <div class="task-head">
      <div class="task-head-info">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="task-title">播种豌豆</span>
            <span>发起中</span>
          </div>
          <div class="task-head-option">
            <span class="task-position">希望小村菜地</span>
            <div class="task-head-status">
              <el-button type="danger" class="task-head-button">
                加入任务
              </el-button>
            </div>
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
              <div class="card-info-person">
                <span class="person-name"> {{ task.profile.name }}</span>
                <span class="person-time">{{ task.profile.time }}天前</span>
              </div>
            </div>
          </div>
        </el-card>
        <el-card>
          <div slot="header" class="clearfix">
            <span class="task-startTime">任务发起时间:{{ task.description.startTime }}</span>
          </div>
          <div class="task-text item">
            {{ task.description.text }}
          </div>
        </el-card>
        <el-card class="box-card" :body-style="{padding:'10px'}">
          <div class="head-icon">
            <div v-for="(member,index) in task.members" :key="index" class="img-list">
              <el-avatar :src="member.src" shape="circle" :size="40" class="img-item" />
              <p class="avatar-name">
                {{ member.name }}
              </p>
            </div>
          </div>
        </el-card>
      </div>
      <div class="task-head-video">
        <el-tag type="info">
          {{ task.gardenId }}号菜地
        </el-tag>
        <video-player :src="task.videoSrc" class="video-container" />
      </div>
    </div>
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
      <el-col>
        <time-axis />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="timeline-info">
          <el-tabs type="border-card">
            <el-tab-pane>
              <span slot="label">
                <el-popover
                  placement="right"
                  width="400"
                  trigger="click"
                >
                  <el-table>
                    <el-table-column width="150" property="date" label="日期" />
                    <el-table-column width="100" property="name" label="姓名" />
                    <el-table-column width="300" property="address" label="地址" />
                  </el-table>
                  <div slot="reference">
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="40" />
                  </div>
                </el-popover>
              </span>
              我的行程
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label">
                <el-popover
                  placement="right"
                  width="400"
                  trigger="click"
                >
                  <el-table>
                    <el-table-column width="150" property="date" label="日期" />
                    <el-table-column width="100" property="name" label="姓名" />
                    <el-table-column width="300" property="address" label="地址" />
                  </el-table>
                  <div slot="reference">
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                  </div>
                </el-popover>
              </span>
              我的行程
            </el-tab-pane>
          </el-tabs>
        </div>
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
        <div class="task-info">
          <div v-for="(card,index) in task.cards" :key="index" class="card-box">
            <el-card>
              <div class="task-info-box">
                <div class="card-img">
                  <el-image :src="card.taskImg" style="width: 160px; height: 160px" />
                </div>
                <div class="card-right">
                  <h2 class="task-info-title">
                    {{ card.title }}
                  </h2>
                  <div class="task-info-text">
                    <el-avatar :src="card.avatarImg" shape="circle" :size="60" />
                    <div class="task-info-text-wrap2">
                      <h2 class="task-info-person">
                        {{ card.name }}
                      </h2>
                      <p class="task-info-position">
                        {{ card.position }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- <Video /> -->
  </div>
</template>

<script>
import TimeAxis from '../../../components/TimeAxis.vue'
export default {
  components: { TimeAxis },
  data () {
    return {
      currentIndex: 0,
      task: {
        title: '播种豌豆',
        position: '希望小村菜地',
        videoSrc: 'https://video.pearvideo.com/mp4/adshort/20210202/cont-1718954-15596002_adpkg-ad_hd.mp4',
        // 简介
        profile: {
          avatarSrc: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
          school: '重庆市渝北小学',
          name: '刘老师',
          time: '2'
        },
        // 任务描述
        description: {
          startTime: '2021.1.11',
          text: '根据实践课程要求，在希望菜地进行豌豆的种植与知识教育，提高同学的实践能力让同学们更亲近大自然，感受大自然的魅力。'
        },
        gardenId: 1,
        members: [{ src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', name: '高老师' }, { src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', name: '高老师' }, { src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', name: '高老师' }, { src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', name: '高老师' }, { src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', name: '高老师' }, { src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', name: '高老师' }, { src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', name: '高老师' }, { src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', name: '高老师' }, { src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', name: '高老师' }, { src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', name: '高老师' }, { src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', name: '高老师' }, { src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', name: '高老师' }, { src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', name: '高老师' }, { src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', name: '高老师' }],
        cards: [{ taskImg: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg', title: '玫瑰花种植', avatarImg: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg', name: '刘老师', position: '新华小学' }, { taskImg: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg', title: '玫瑰花种植', avatarImg: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg', name: '刘老师', position: '新华小学' }, { taskImg: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg', title: '玫瑰花种植', avatarImg: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg', name: '刘老师', position: '新华小学' }, { taskImg: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg', title: '玫瑰花种植', avatarImg: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg', name: '刘老师', position: '新华小学' }, { taskImg: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg', title: '玫瑰花种植', avatarImg: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg', name: '刘老师', position: '新华小学' }, { taskImg: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg', title: '玫瑰花种植', avatarImg: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg', name: '刘老师', position: '新华小学' }]

      },
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
  margin-left:5%;
  font-family: Source Han Sans CN;
  margin-top: 50px;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3px;
  }
  .img-item{
    margin-right:10px ;
  }

  .head-icon{
    display: flex;
    flex-wrap: wrap;
  }

  .task-info{
    display: flex;
    flex-wrap: wrap;
  }

  .card-box{
    width:402px;
    /* height: 160px; */
    padding: 0 15px;
    margin-bottom:30px ;
  }

  .task-info-box{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
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
    margin-left:10px;
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
    margin-top: 78px;
  }
  .el-tag{
    color: #FFFFFF;
    /* padding: 5px; */
    text-align: center;
    position: absolute;
    top:20px;
    left:5px;
    z-index:1;
    width: 165px;
    height: 56px;
    font-size: 36px;
    line-height: 56px;
    border-radius:30px;
    background-color:rgba(255,255,255,.3);
    border: none;
    }
  .el-button{
    font-size:24px;
    padding: 6px 12px;
    /* float: right; */
    margin-top: 14px;
  }

  .active{
    font-size: 48px;
    font-weight: bold;
  }

  .task-head-video{
    position: relative;
    width: 1200px;
    flex-shrink: 0;
    margin-left: 100px;
  }

  .avatar-name{
    font-size: 12px;
    margin-top:2px;
  }

  /* 头部的布局 */
  .task-head{
    display: flex;
    width: 100%;
    /* flex-wrap: wrap; */
  }

  .task-head-info{
    width:432px;
    /* flex:1; */
    flex-shrink: 0;
  }

  .task-head-option{
    position: relative;
    display: flex;
    justify-content:space-between;
  }

  .video-container{
    width: 100%;
    /* margin-left:83px; */
    /* border-radius:5%; */
    /* height: 900px; */
    margin-top:10px;
    box-shadow: 0px 0px 3px 3px rgba(168, 168, 168, 0.5);
  }
  @media screen and (min-width:1702px){
    .card-box{
      width: 25%;
    }
  }
   @media screen and (max-width:1702px){
    .card-box{
      width: 33%;
    }
  }
  @media screen and (max-width:1410px){
    .card-box{
      width: 33%;
    }
  }

  @media screen and (max-width:1288px){
    .card-box{
      width: 50%;
    }
    .task-info-box{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media screen and (max-width: 930px){
    /* .task-info-box{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    } */
  }

  /* @media screen and (max-width: 850px){
    .card-box{
      width: 40%;
    }
  } */
  @media screen and (max-width: 700px) {
    .task-title{
      display: inline-block;
      width: 100%;
      text-align: center;
    }

    .task-head-info{
      width:100%;
    }
    .task-head{
      flex-wrap: wrap;
    }

    .task-head-video{
      width: 100%;
      margin-left:0;
    }

    .video-container{
      width: 100%;
    }

    .task-head-option{
      flex-direction: column;
      align-items: center;
    }

    .timeline-title{
      text-align: left;
    }

    .task-detail{
      margin-left: 0px;
    }
  }
  @media screen and (max-width: 520px){
    .card-box{
      width: 100%;
    }
  }
  @media screen and (max-width: 459px){
    .card-box{
      width: 100%;
    }
    .person-info{
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .card-info-person{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 430px){
    .task-info-box{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  /* 底部的布局 */

  </style>
