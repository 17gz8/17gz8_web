<template>
  <div class="container">
    <div id="left">
      <div id="content">
        <div id="content_title" class="title">
          {{ fieldid }}号菜地
        </div>
        <el-card id="content_text" shadow="never">
          希望小村菜地距离重庆时钟线约有巫师公里，栈底面积5000亩（
          主题参观去为400亩）。是国家4A级旅游景区、全国农业旅游示范点、
          上海市科普教育基地。
        </el-card>
        <div id="content_img">
          <div v-for="(item,index) in picture" :key="index" class="img">
            <img :src="imgs" :class="{'active':index==isActive && isClick,'imgss':!isClick}" class="imgss" @click="showdifference(index)">
          </div>
        </div>
        <div id="img_icon">
          <!-- <div v-for="(item,index) in Radio" :key="index" class="_radio" :class="{'_radio_active':index==radio_active && risClick, '_radio':!risClick}" @click="handleRadio(index)"><span class="_radio_intent"></span></div> -->
          <div v-for="(item,index) in Radio" :key="index" class="_radio" :class="{'_radio_active':index==radio_active}" @click="handleRadio(index)">
            <span class="_radio_intent" />
          </div>
        </div>
      </div>
      <div id="time_data">
        <div class="title">
          实时数据
        </div>
        <div class="data_circle">
          <span class="circle">
            <el-progress
              type="circle"
              :percentage="25"
              :width="80"
              :stroke-width="12"
              color="#E6A23C"
              :format="format_1"
            />
          </span>
          <span class="circle">
            <el-progress
              type="circle"
              :percentage="45"
              :width="80"
              :stroke-width="12"
              color="#409EFF"
              :format="format_2"
            />
          </span>
          <span class="circle">
            <el-progress
              type="circle"
              :percentage="30"
              :width="80"
              :stroke-width="12"
              color="#F56C6C"
              :format="format_3"
            />
          </span>
          <span class="circle">
            <el-progress
              type="circle"
              :percentage="70"
              :width="80"
              :stroke-width="12"
              color="#67C23A"
              :format="format_4"
            />
          </span>
        </div>
      </div>
    </div>
    <div id="right">
      <div class="video">
        <div class="right_text">
          {{ fieldid }}号菜地
        </div>
        <video-player class="video_content" />
        <!-- <el-image :src="videos" style="width:100%;height:100%;border-radius:16px" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fieldid: '',
      isBig: '',
      isClick: false,
      isActive: '-1',
      radio_active: '0',
      Radio: [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' }
      ],
      picture: [
        { id: '1', name: '菜地4' },
        { id: '2', name: '菜地2' },
        { id: '3', name: '菜地3' },
        { id: '4', name: '菜地1' }
      ],
      Imgss: [
        { url: require('../../../../static/images/garden01.jpg') },
        { url: require('../../../../static/images/garden02.jpg') },
        { url: require('../../../../static/images/garden03.jpg') },
        { url: require('../../../../static/images/garden04.jpg') }
      ],
      imgs: require('../../../../static/images/garden01.jpg'),
      videos: require('../../../../static/images/garden02.jpg'),
      radio: 4
    }
  },
  created () {
    this.fieldid = this.$route.params.fieldid
  },
  methods: {
    showdifference (index) {
      this.isActive = index
      // eslint-disable-next-line no-console
      console.log(this.isActive)
      if (this.isClick === false) {
        this.isClick = !this.isClick
      } else {
        this.isClick = !this.isClick
        // console.log(this.isClick)
      }
    },
    handleRadio (index) {
      this.radio_active = index
      // console.log(this.radio_active)
      this.imgs = this.Imgss[index].url
    },
    format_1 (percentage) {
      return `${percentage}%` + '\n' + '温度'
    },
    format_2 (percentage) {
      return `${percentage}%` + '\n' + '湿度'
    },
    format_3 (percentage) {
      return `${percentage}%` + '\n' + '土壤水分'
    },
    format_4 (percentage) {
      return `${percentage}%` + '\n' + '土壤温度'
    }
  }
}
</script>
<style>
.el-progress .el-progress__text{
  white-space: pre-wrap;
  line-height: 125%;
}
</style>
<style scoped>
#right{
  margin-top:.6em;
  /* float: left; */
  position: relative;
  overflow: hidden;
  width: 60%;
  height: 42em;
  border-radius: 16px;
  background-color: black;
}
#left{
  margin-top:0.625em;
  float: left;
  width: 40%;
  height: 42em;
  padding-left:2%;
  overflow: hidden;
  /* background-color: brown; */
}
.right_text{
  left: .4em;
  top: .4em;
  padding: .2em;
  position: absolute;
  border-radius: 16px;
  color: white;
  font-size: 2em;
  font-weight: bolder;
  background-color: rgba(255, 255, 255, 0.377);
  z-index: 100;
}
#content{
  width:90%;
  height:auto;
  margin-right:10%;
  margin-top: 0.625em;
  /* background-color: #F56C6C; */
}
.data_circle{
  margin-top: 1.875em;
  margin-left: 0.625em;
}
._radio{
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color:white;
  border-style: solid;
  border-width: .15em;
  border-color:white;
  float: left;
  margin-right: .5em;
  cursor: pointer;
}
._radio_active{
width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color:white;
  border-style: solid;
  border-width: .15em;
  border-color: #F56C6C;
  float: left;
  margin-right: .5em;
  cursor: pointer;
}
._radio:hover ._radio_intent{
  background-color: #F56C6C;
}
._radio_intent{
  width: .5em;
  height: .5em;
  margin: .1em;
  background-color: #f56c6ca2;
  border-radius: 50%;
  float: left;
}
.imgss{
  width:100%;
  height:100%;
  border-radius: 6px;
}
.active{
  width: 30em;
  height: 20em;
  z-index: 100;
  position: absolute;
  border-radius: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.title{
  width: 100%;
  height: auto;
  margin-top: 0.625em;
  padding-left:0.3125em;
  border-left: 0.3125em #F56C6C solid;
  font-size: 2em;
  font-weight: bolder;
  color: #666666;
}
.circle{
  /* margin-left: 0.3125em; */
  margin-left: 0.625em;
}
#content_text{
  width: 100%;
  height: auto;
  margin-top: 0.625em;
  font-size: em;
  color: #333333;
  border: none;
  /* background-color: crimson; */
}
#content_img{
  width: 100%;
  height:18em;
  /* margin-top: 30px; */
  /* background-color: darkkhaki; */
}
.img{
  width: 45%;
  height: 7.8125em;
  margin: 2%;
  margin-left: 3%;
  border-radius: 6px;
  float: left;
}
#img_icon{
  width: 30%;
  height: 1em;
  margin-top: 0.625em;
  margin-left:40%;
  /* background-color: darkcyan; */
}
#time_data{
  width:90%;
  height:20vh;
  margin-right:10%;
  margin-top: 0.625em;
  /* background-color: bisque; */
}
.video{
  width: 100%;
  height: 100%;
  border-radius: 16px;
  /* background-color:#999999; */
}
.video_content{
  width: 100%;
  height: 100%;
  object-fit:fill;
  border-radius:16px;
}
@media (max-width:1200px) {
  #img_icon{
    width: 40%;
    margin-left: 40%;
  }
}
@media (max-width:1024px) {
  #left,#right{
    width: 100%;
  }
  #right{
    margin-top: 2em;
  }
  #left{
    height: auto;
    padding-bottom: 5%;
  }
  .img{
    height: 15em;
  }
  #content_img{
    height: 33em;
  }
}
@media  (max-width: 999px) {
  #left{
    height: 100%;
  }
  #right{
    height:100%;
  }
  .img{
    width: 45%;
    height: 13em;
  }
  #content_img{
    height: 30em;
  }
}
@media (max-width: 759px){
  .img{
    height: 10em;
  }
  #content_img{
    height: 23em;
  }
}
@media (max-width: 490px){
  #img_icon{
    width: 40%;
    margin-left: 40%;
    margin-top: em;
  }
  #time_data{
    margin-right:0;
    margin-top: 1.5em;
    height: auto;
  }
  .img{
    width: 45%;
    height: 7.8em;
  }
  #content_img{
    height: 18em;
  }
  #left{
    margin-right:0;
  }
  .active{
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 6px;
  }
}
@media (max-width: 440px){
  #time_data{
    margin-right:0;
    margin-top:2%;
  }
  .data_circle{
    margin-top: 1.875em;
    margin-left: 0em;
    width: auto;
  }
  .circle{
    margin-left: 2em;
  }
  #img_icon{
    width: 50%;
    margin-left: 35%;
    margin-top: em;
  }
}
@media (max-width: 376px){
  .img{
    width: 100%;
    height: 12em;
  }
  #content_img{
    height: 27em;
  }
  #img_icon{
    width: 60%;
    margin-left: 20%;
    margin-top: em;
  }
}
@media (max-width: 300px){
  .img{
    width: 12em;
    height: 8em;
  }
  #content_img{
    height: 19em;
  }
}
</style>
