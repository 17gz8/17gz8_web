 cd 17gz8_web<template>
  <div class="block">
    <span class="demonstration">默认 Hover 指示器触发</span>
    <el-carousel height="450px">
      <el-carousel-item v-for="item in pictures" :key="item">
        <el-image
          style="width: 100%; height: 100%"
          :src="item.url"
          :fit="fit"
        />
      </el-carousel-item>
    </el-carousel>
    <el-card v-for="(item,index) in gardens" :key="index">
      <p style="font-size: 40px;color: red;text-align: center">
        {{ item.text }}
      </p>
      <el-image
        style="width: 100%; height: 100%"
        :src="item.url"
        :fit="fit"
      />
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pictures: [
        { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
        { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
        { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
        { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' }
      ],
      gardens: [
        { text: '体验种植、热爱劳动、热爱生活', url: 'https://image.pearvideo.com/cont/20200926/cont-1699154-12478977.png' },
        { text: '照顾农作物、关爱生命、热爱自然', url: 'https://res.dutenews.com/a/10001/201903/f426caf43bbef9f6f8e04917347d9d4f.jpg' },
        { text: '科学实验培养科学兴趣', url: 'http://images.china.cn/attachement/jpg/site1000/20090423/0019b91eca160b5a28c205.jpg' },
        { text: '团结协作、珍惜劳动成果', url: 'http://5b0988e595225.cdn.sohucs.com/images/20171124/1c579ee70c414880bbf02ef7c1aeb72c.jpeg' }
      ],
      fit: 'cover'
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-card{
  width: 100%;
  height: 600px;
  margin: 1%;
  float:left;

}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
};
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.carousel-warp {
  margin: 0 auto;
  /* clear: both; */
  width: 80%;
}
.card-warp .el-card {
  width: 30%;
  float: left;
  margin: 20px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
