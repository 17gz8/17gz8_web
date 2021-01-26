<template>
  <div class="container">
    <div id="left">
      <div id="content">
        <div id="content_title" class="title">{{ fieldid }}号菜地</div>
        <el-card shadow="never" id="content_text">
          希望小村菜地距离重庆时钟线约有巫师公里，栈底面积5000亩（
          主题参观去为400亩）。是国家4A级旅游景区、全国农业旅游示范点、
          上海市科普教育基地。
        </el-card>
        <div id="content_img">
          <div v-for="(item,index) in picture" :key="index" class="img">
            <el-image :src="imgs" style="width:100%;height:100%"></el-image>
          </div>
        </div>
        <div id="img_icon">
          <el-radio-group v-model="radio" fill="#F56C6C">
            <span style="margin-left:3px"><el-radio :label="none" class="radio" fill="#F56C6C"></el-radio></span>
            <span style="margin-left:3px"><el-radio :label="none" class="radio"></el-radio></span>
            <span style="margin-left:3px"><el-radio :label="none" class="radio"></el-radio></span>
            <span style="margin-left:3px"><el-radio :label="none" class="radio"></el-radio></span>
          </el-radio-group>
        </div>
      </div>
      <div id="time_data">
        <div class="title">实时数据</div>
        <div class="data_circle">
          <span style="margin-left:10px"><el-progress type="circle" :percentage="25" width="90" stroke-width="10" color="#E6A23C"></el-progress></span>
          <span style="margin-left:10px"><el-progress type="circle" :percentage="45" width="90" stroke-width="10" color="#409EFF"></el-progress></span>
          <span style="margin-left:10px"><el-progress type="circle" :percentage="30" width="90" stroke-width="10" color="#F56C6C"></el-progress></span>
          <span style="margin-left:10px"><el-progress type="circle" :percentage="70" width="90" stroke-width="10" color="#67C23A"></el-progress></span>
        </div>
      </div>
    </div>
    <div id="right">
      <div id="video">
        <el-image :src="videos" style="width:100%;height:100%;border-radius:16px"></el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fieldid: '',
      picture: [
        { id: '1', name: '菜地4' },
        { id: '2', name: '菜地2' },
        { id: '3', name: '菜地3' },
        { id: '4', name: '菜地1' }
      ],
      imgs: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2428072447,3963326943&fm=26&gp=0.jpg',
      videos: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstc.zjol.com.cn%2Fg1%2FM00250ECggSDloEUziAdZAhAARUVVx6mdQ966.jpg%3Fwidth%3D720%26height%3D540&refer=http%3A%2F%2Fstc.zjol.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614255686&t=ddd4bff2c6061e184c8c99d9abafc323',
      radio: 4
    }
  },
  created () {
    this.fieldid = this.$route.params.fieldid
  }
}
</script>
<style scoped>
#right{
  margin-top:10px;
  float: left;
  width: 60%;
  height: 85%;
  /* background-color: blue; */
}
#left{
  margin-top:10px;
  float: left;
  width: 40%;
  height: 85%;
  padding-left:2%;
  /* background-color: brown; */
}
#content{
  width:90%;
  height:470px;
  margin-right:10%;
  margin-top: 10px;
  /* background-color: #F56C6C; */
}
.data_circle{
  margin-top: 30px;
  margin-left: 10px;
}
.title{
  width: 100%;
  height: auto;
  margin-top: 10px;
  padding-left:5px;
  border-left: 5px #F56C6C solid;
  font-size: 26px;
  font-weight: bolder;
  color: #666666;
}
#content_text{
  width: 100%;
  height: auto;
  margin-top: 10px;
  font-size: 14px;
  color: #333333;
  /* background-color: crimson; */
}
#content_img{
  width: 100%;
  height:250px;
  /* margin-top: 30px; */
  /* background-color: darkkhaki; */
}
.img{
  width: 45%;
  height: 125px;
  margin: 2%;
  margin-left: 3%;
  border-radius: 6px;
  float: left;
}
#img_icon{
  width: 30%;
  height: 20px;
  margin-top: 10px;
  margin-left:40%;
  /* background-color: darkcyan; */
}
#time_data{
  width:90%;
  height:180px;
  margin-right:10%;
  margin-top: 10px;
  /* background-color: bisque; */
}
#video{
  width: 100%;
  height: 95%;
  margin-top: 18px;
  border-radius: 16px;
  /* background-color:#999999; */
}
</style>
