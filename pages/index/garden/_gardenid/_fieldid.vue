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
          <el-radio-group v-model="radio" fill="#F56C6C">
            <span style="margin-left:3px"><el-radio :label="none" class="radio" fill="#F56C6C" /></span>
            <span style="margin-left:3px"><el-radio :label="none" class="radio" /></span>
            <span style="margin-left:3px"><el-radio :label="none" class="radio" /></span>
            <span style="margin-left:3px"><el-radio :label="none" class="radio" /></span>
          </el-radio-group>
        </div>
      </div>
      <div id="time_data">
        <div class="title">
          实时数据
        </div>
        <div class="data_circle">
          <span class="circle"><el-progress type="circle" :percentage="25" width="80" stroke-width="12" color="#E6A23C" /></span>
          <span class="circle"><el-progress type="circle" :percentage="45" width="80" stroke-width="12" color="#409EFF" /></span>
          <span class="circle"><el-progress type="circle" :percentage="30" width="80" stroke-width="12" color="#F56C6C" /></span>
          <span class="circle"><el-progress type="circle" :percentage="70" width="80" stroke-width="12" color="#67C23A" /></span>
        </div>
      </div>
    </div>
    <div id="right">
      <div id="video">
        <el-image :src="videos" style="width:100%;height:100%;border-radius:16px" />
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
      picture: [
        { id: '1', name: '菜地4' },
        { id: '2', name: '菜地2' },
        { id: '3', name: '菜地3' },
        { id: '4', name: '菜地1' }
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
      if (this.isClick[index] === false) {
        this.isClick = !this.isClick
      } else {
        this.isClick = !this.isClick
        // console.log(this.isClick)
      }
    }
  }
}
</script>
<style scoped>
#right{
  margin-top:0.625em;
  /* float: left; */
  overflow: hidden;
  width: 60%;
  height: 85vh;
  /* background-color: blue; */
}
#left{
  margin-top:0.625em;
  float: left;
  width: 40%;
  height: 85vh;
  padding-left:2%;
  /* background-color: brown; */
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
  margin-left: 0.3125em;
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
  height:auto;
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
  height: 5%;
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
#video{
  width: 100%;
  height: 100%;
  border-radius: 16px;
  /* background-color:#999999; */
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
  #left{
    height: auto;
    padding-bottom: 5%;
  }
  .img{
    height: 15em;
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
}
@media (max-width: 759px){
  .img{
    height: 10em;
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
  #content_img{
    height:auto;
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
}
</style>
