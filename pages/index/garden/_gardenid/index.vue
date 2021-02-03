<template>
  <div class="container">
    <div class="warp">
      <h3><span> 菜园{{ gardenid }}</span></h3>
      <div class="intro">
        <p>{{ data1 }}</p>
        <p>{{ data2 }}</p>
      </div>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item,index) in fields" :key="index">
          <el-card v-for="(card,index1) in item" :key="index1">
            <nuxt-link :to="`/garden/${gardenid}/${card.id}`">
              <el-popover
                placement="top-start"
                title="菜地数据"
                trigger="hover"
              >
                <el-row>
                  <el-progress type="circle" :percentage="25" width="80" color="#e6a23c" stroke-width="10" />
                  <el-progress type="circle" :percentage="25" width="80" color="#6f7ad3" stroke-width="10" />
                  <el-progress type="circle" :percentage="25" width="80" color="#5cb87a" stroke-width="10" />
                  <el-progress type="circle" :percentage="25" width="80" color="#f56c6c" stroke-width="10" />
                </el-row>
                <p slot="reference">
                  {{ card.name }}
                </p>
              </el-popover>
            </nuxt-link>
            <video-player class="video-container" />
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
              <div class="text">
                <span>{{ item5.type }}</span>
                <p>{{ item5.school }}{{ item5.teacher }}</p>
              </div>
              <div class="img2">
                <img :src="item5.pic2" alt="完成">
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
      fields: [[
        { id: '1', name: '菜地1' },
        { id: '2', name: '菜地2' },
        { id: '3', name: '菜地3' }
      ],
      [
        { id: '4', name: '菜地4' },
        { id: '5', name: '菜地5' },
        { id: '6', name: '菜地6' }
      ],
      [
        { id: '7', name: '菜地7' },
        { id: '8', name: '菜地8' },
        { id: '9', name: '菜地9' }
      ],
      [
        { id: '10', name: '菜地10' },
        { id: '11', name: '菜地11' },
        { id: '12', name: '菜地12' }
      ]
      ],
      task: [
        [
          { type: '南瓜种植', school: '希望小学', teacher: '赵老师', pic: require('@/assets/images/task1.jpg'), pic2: require('@/assets/images/task2.jpg') },
          { type: '果树培养', school: '哥谭小学', teacher: '赵老师', pic: require('@/assets/images/task1.jpg'), pic2: require('@/assets/images/task2.jpg') }
        ],
        [
          { type: '葡萄种植', school: '勤奋中学', teacher: '刘老师', pic: require('@/assets/images/task1.jpg'), pic2: require('@/assets/images/task2.jpg') },
          { type: '鲜花种植', school: '获得转小学', teacher: '熙老师', pic: require('@/assets/images/task1.jpg'), pic2: require('@/assets/images/task2.jpg') }
        ],
        [
          { type: '西瓜种植', school: '重庆重点小学', teacher: '马老师', pic: require('@/assets/images/task1.jpg'), pic2: require('@/assets/images/task2.jpg') },
          { type: '土豆种植', school: '新华中学', teacher: '钱老师', pic: require('@/assets/images/task1.jpg'), pic2: require('@/assets/images/task2.jpg') }
        ]
      ]
    }
  },
  created () {
    this.gardenid = this.$route.params.gardenid
  }

}
</script>

<style  scoped>
.intro{
  margin-left: 1%;
  margin-top: 2%;
  margin-bottom: 2%;
}
.warp{
  background-color:lightgray;
  min-height:300px;
  margin: 1%;
}
h3 span{
  padding: 2px 10px;
  border-left: 5px solid rgb(233, 18, 72);
  font-size: 35px;
}
.cardTask{
  margin: 0,auto;
  margin-top: 20px;

}
  .video-container{
    width: 100%;
    margin-top:10px;
    box-shadow: 0px 0px 3px 3px rgba(168, 168, 168, 0.5);
  }
.el-card{
  width: 31%;
  margin: 1%;
  float:left;
}
.img3{
  margin: 0 auto;
}
.ka{
  display: flex;
  justify-content:space-around;
}
.gardenTask{
  margin-left: 11%;
  width:33%;
}
.shu{
  border-left: 2px solid rgb(233, 18, 72);
  height: 25px;
}
.text span{
  font-size: 25px;
}
.kong{
  height: 30%;
}
.kong2{
  height: 27%;
}
</style>
