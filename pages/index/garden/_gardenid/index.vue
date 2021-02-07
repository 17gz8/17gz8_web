<template>
  <div class="container">
    <div id="one" class="warp">
      <h3><span class="span-s"> 菜园{{ gardenid }}</span></h3>
      <div class="address-d">
        <img :src="imgS.picS" alt="addresss" class="address-img">
        <br>
        <p class="address-p">
          {{ address }}
        </p>
      </div>
      <br>
      <div class="intro">
        <p>{{ data1 }}</p>
        <p>{{ data2 }}</p>
      </div>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item,index) in fields" :key="index">
          <el-card v-for="(card,index1) in item" :key="index1" class="card-group">
            <div class="card-link">
              <nuxt-link :to="`/garden/${gardenid}/${card.id}`">
                <el-popover
                  placement="top-start"
                  title="菜地数据"
                  trigger="hover"
                  class="card-link-data"
                >
                  <div class="card-link-detail">
                    <p>数据详情</p>
                  </div>
                  <el-row>
                    <el-progress
                      type="circle"
                      :percentage="20.8"
                      :width="80"
                      color="#e6a23c"
                      :stroke-width="10"
                      :format="format1"
                    />
                    <el-progress
                      type="circle"
                      :percentage="50"
                      :width="80"
                      color="#6f7ad3"
                      :stroke-width="10"
                      :format="format2"
                    />
                    <el-progress
                      type="circle"
                      :percentage="23"
                      :width="80"
                      color="#f56c6c"
                      :stroke-width="10"
                      :format="format3"
                    />
                    <el-progress
                      type="circle"
                      :percentage="27.6"
                      :width="80"
                      color="#5cb87a"
                      :stroke-width="10"
                      :format="format4"
                    />
                  </el-row>
                  <p slot="reference">
                    {{ card.name }}
                  </p>
                </el-popover>
              </nuxt-link>
            </div>
            <video-player :src="videoS.videoSrc" class="video-container" />
          </el-card>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="warp">
      <h3><span>菜园任务</span> </h3>
      <div class="cardTask">
        <el-row v-for="(item2,index3) in task" :key="index3">
          <el-card v-for="(item5,index4) in item2" :key="index4" class="gardenTask" :body-style="{ padding: '0px' }">
            <div class="ka">
              <div class="img">
                <el-avatar :size="60" :src="item5.pic" />
              </div>
              <div>
                <span class="task-type">{{ item5.type }}</span>
                <p>
                  <span class="task-school">{{ item5.school }}</span>
                  <span class="task-teacher">{{ item5.teacher }}</span>
                </p>
              </div>
              <div class="img2">
                <img :src="taskStatusImg(item5.status)" alt="">
              </div>
              <div>
                <div class="kong" />
                <div class="shu" />
              </div>
              <div>
                <div class="kong2" />
                <div class="buttom">
                  <el-button type="text">
                    查看
                  </el-button>
                </div>
              </div>
            </div>
          </el-card>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data1: '希望小村菜地距离重庆市中心约有五十公里，占地面积5000亩（主体参观区400亩）。',
      data2: '是国家4A级旅游景区、全国农业旅游示范点、上海市科普教育基地',
      gardenid: '',
      address: '重庆市巴南区×××',
      taskStatus: 'toDo',
      fields: [[
        { id: '1', name: '1号菜地' },
        { id: '2', name: '2号菜地' },
        { id: '3', name: '3号菜地' }
      ],
      [
        { id: '4', name: '4号菜地' },
        { id: '5', name: '5号菜地' },
        { id: '6', name: '6号菜地' }
      ],
      [
        { id: '7', name: '7号菜地' },
        { id: '8', name: '8号菜地' },
        { id: '9', name: '9号菜地' }
      ],
      [
        { id: '10', name: '10号菜地' },
        { id: '11', name: '11号菜地' },
        { id: '12', name: '12号菜地' }
      ]
      ],
      task: [
        [
          { type: '南瓜种植', school: '希望小学', teacher: '赵老师', pic: require('@/assets/images/task1.jpg'), status: 'toDo' },
          { type: '果树培养', school: '哥谭小学', teacher: '赵老师', pic: require('@/assets/images/task1.jpg'), status: 'toDo' }
        ],
        [
          { type: '葡萄种植', school: '勤奋中学', teacher: '刘老师', pic: require('@/assets/images/task1.jpg'), status: 'toDo' },
          { type: '鲜花种植', school: '获得转小学', teacher: '熙老师', pic: require('@/assets/images/task1.jpg'), status: 'Done' }
        ],
        [
          { type: '西瓜种植', school: '重庆重点小学', teacher: '马老师', pic: require('@/assets/images/task1.jpg'), status: 'toDo' },
          { type: '土豆种植', school: '新华中学', teacher: '钱老师', pic: require('@/assets/images/task1.jpg'), status: 'doing' }
        ]
      ],
      videoS: {
        videoSrc: 'https://video.pearvideo.com/mp4/adshort/20210202/cont-1718954-15596002_adpkg-ad_hd.mp4'
      },
      imgS: {
        picS: require('@/assets/images/location.png')
      }
    }
  },
  computed: {
    taskStatusImg (status) {
      return function (i) {
        if (i === 'toDo') {
          return require('@/assets/images/发起中.png')
        } else if (i === 'doing') {
          return require('@/assets/images/实验中.png')
        } else {
          return require('@/assets/images/已完成.png')
        }
      }
    }
  },
  created () {
    this.gardenid = this.$route.params.gardenid
  },
  methods: {
    format1 (percentage) {
      return `${percentage}℃` + '\n' + '温度'
    },
    format2 (percentage) {
      return `${percentage}%` + '\n' + '湿度'
    },
    format3 (percentage) {
      return `${percentage}%` + '\n' + '土壤水分'
    },
    format4 (percentage) {
      return `${percentage}℃` + '\n' + '土壤温度'
    }
  }

}
</script>

<style  scoped>
.intro{
  margin-left: 1%;
  margin-top: 2%;
  margin-bottom: 2%;
}
.address-d{
  display: block;
}
.address-img{
  margin-top: 0.8%;
  width: 1.5%;
  height: 1.5%;
  float: left;
}
/* .address-p{
  float: left;
  margin-top: 3%;
} */
.warp{
  /* background-color:lightgray; */
  min-height:300px;
  margin: 3%;
  /* display: block; */
}
h3 span{
  padding: 2px 10px;
  border-left: 5px solid rgb(233, 18, 72);
  font-size: 35px;
  /* float: left; */
}
.span-s{
  padding: 2px 10px;
  border-left: 5px solid rgb(233, 18, 72);
  font-size: 35px;
  float: left;
}
.cardTask{
  margin: 0,auto;
  margin-top: 20px;

}
.task-type{
  font-size: 30px;
}
.task-school{
  padding-right: 12px;
  font-size: 17px;
}
.task-teacher{
  font-size: 17px;
}
.card-group{
  position: relative;
}
.card-link{
  position: absolute;
  z-index: 10;
  opacity: 70%;
  left: 78%;
  top: -6%;
  height: 60%;
  text-align:center;
}
.card-link p{
  width: 140%;
  font-size: 80%;
  background: rgb(248, 246, 246);
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
}
.card-link-data{
  position: relative;
}
.card-link-detail{
  position: absolute;
  top: 9%;
  left: 80%;
  border: 1px solid darkblue;
  color: darkblue;
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
}
.video-container{
  width: 100%;
  /* margin-top:10px; */
  position: relative;
  /* box-shadow: 0px 0px 3px 3px rgba(168, 168, 168, 0.5); */
}
.el-card{
  width: 31%;
  margin: 1%;
  float:left;
}
.img2{
  margin-top: 2%;
}
.ka{
  display: flex;
  justify-content:space-around;
}
.gardenTask{
  margin-right: 9%;
  width:37%;
}

.shu{
  border-left: 2px solid rgb(233, 18, 72);
  height: 25px;
}

.kong{
  height: 30%;
}
.kong2{
  height: 27%;
}
@media screen and (max-width:1600px){
  .card-link p{
  width: 110%;
}
  .card-link{
  top: -10%;
}
  .address-img{
    width: 3%;
    height: 3%;
  }
}
@media screen and (max-width:1300px){
  .card-link p{
  width: 100%;
}
  .gardenTask{
    width:33%;
    height: auto;
  }
  .address-img{
    margin-top: 1%;
    width: 4%;
    height: 4%;
  }
}
@media screen and (max-width:1000px){
  .card-link{
  left: 76%;
  top: -10%;
}
  .address-p{
    margin-top: 1.2%;
  }
  .gardenTask{
    width:50%;
    height: auto;
  }
    .address-img{
    margin-top: 3%;
    width: 5%;
    height: 5%;
  }
}
@media screen and (max-width:800px){
  .address-p{
    margin-top: 2%;
  }
  .gardenTask{
    width: 60%;
    height: auto;
  }
    .address-img{
    margin-top: 3%;
    width: 4%;
    height: 4%;
  }
}
@media screen and (max-width:600px){
  #one{
    margin-top: 37px;
  }
  .address-p{
    margin-top: 0.8%;
  }
  .address-img{
    margin-top: 3%;
    width: 8%;
    height: 8%;
  }
  .card-link{
  left: 78%;
  top: 10%;
  }
  .card-link p{
    width: 60%;
    font-size: 2px;
  }
  .gardenTask{
      width:80%;
      height: auto;
  }
  .card-group{
    width: 48%;
    height: auto;
  }
}
</style>
