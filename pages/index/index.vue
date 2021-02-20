<template>
  <div class="block">
    <el-carousel :interval="5000" height="600px">
      <el-carousel-item v-for="item in pictures" :key="item.id">
        <el-image
          style="width: 100%; height: 100%"
          :src="item.url"
          :fit="fit"
        />
      </el-carousel-item>
    </el-carousel>
    <div style="margin:10px 10%">
      <div v-for="(item,index) in gardens" :key="index">
        <h3 style="text-align: center;margin:20px 0;">
          <span class="item-text">{{ item.text }}</span>
        </h3>
        <el-image
          style="width: 100%; height: 300px"
          :src="item.url"
          :fit="fit"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pictures: [
        { id: 1, url: '/images/index/lunbo2.png' },
        { id: 2, url: '/images/index/lunbo2.png' },
        { id: 3, url: '/images/index/lunbo2.png' },
        { id: 4, url: '/images/index/lunbo2.png' }
      ],
      gardens: [
        { text: '体验种植、热爱劳动、热爱生活', url: '/images/index/lunbo2.png' },
        { text: '照顾农作物、关爱生命、热爱自然', url: '/images/index/lunbo2.png' },
        { text: '科学实验培养科学兴趣', url: '/images/index/lunbo2.png' },
        { text: '团结协作、珍惜劳动成果', url: '/images/index/lunbo2.png' }
      ],
      fit: 'cover'
    }
  }
}
</script>

<style scoped>

::-webkit-scrollbar{
  width: 0 !important;
}
::-webkit-scrollbar{
  width: 0 !important;
  height: 0;
}

.el-carousel{
  width:100%;
  /* height:600px; */

}
.el-card{
  width: 98%;
  margin: 1%;
  float:left;

}
.item-text{
  padding:0 10px;
  border-left: 4px solid #409EFF;
  border-right: 4px solid #409EFF;

}

</style>
