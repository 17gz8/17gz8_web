<template>
  <div>
    <div class="warp">
      <h2><span>优秀的解决方案</span> </h2>
      <div v-for="(item,index) in imgs" :key="index" class="list">
        <el-image
          style="width: 100%; height: 100%"
          :src="item.url"
        />
        <p>{{ item.name }}</p>
      </div>
    </div>
    <div class="warp">
      <h2><span>需求对接</span> </h2>
    </div>
    <div class="warp">
      <h2><span>资讯与活动</span> </h2>
      <div v-for="(item,index) in imgss" :key="index" class="list2">
        <el-image
          style="width: 100%; height: 100%"
          :src="item.url"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgs: [
        { url: require('@/assets/img/solution1.png'), name: '电气云平台' },
        { url: require('@/assets/img/solution2.png'), name: '无人机智能基站巡检' },
        { url: require('@/assets/img/solution3.png'), name: '工业能源智能监测' },
        { url: require('@/assets/img/solution4.png'), name: '工业数据融合平台' },
        { url: require('@/assets/img/solution5.png'), name: '机电设备振动监测' }
      ],
      imgss: [
        { url: require('@/assets/img/11.jpg') },
        { url: require('@/assets/img/12.jpg') },
        { url: require('@/assets/img/13.jpg') },
        { url: require('@/assets/img/14.jpg') }
      ]
    }
  }

}
</script>

<style scoped>
.warp{
  margin: 2% 5%;
  min-height: 200px;
  /* background-color: lightsalmon; */
}
h2{
  margin: 0 0 1% 0;
}
h2 span{
  display: inline-block;
  width:200px;
  padding: 0 10px;
  border-left: 5px solid  rgb(59, 59, 247);
  border-right: 5px solid rgb(59, 59, 247);
}
.list{
  margin: 2%;
  text-align: center;
  float:left;
  width:16%;
  /* background-color: limegreen; */
}
.list2{
  margin: 2%;
  text-align: center;
  float:left;
  width:21%;
  /* background-color: limegreen; */
}
@media screen and (max-width: 700px) {
  .list p{
    display: none;
  }
}
</style>
