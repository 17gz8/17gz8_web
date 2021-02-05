 cd 17gz8_web<template>
  <div class="block">
    <span class="demonstration">.</span>
    <el-carousel height="450px">
      <el-carousel-item v-for="item in pictures" :key="item.id">
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
        { id: 1, url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
        { id: 2, url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
        { id: 3, url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
        { id: 4, url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' }
      ],
      gardens: [
        { text: '体验种植、热爱劳动、热爱生活', url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp1.img.cctvpic.com%2Fphotoworkspace%2Fcontentimg%2F2014%2F05%2F03%2F2014050314265431837.jpg&refer=http%3A%2F%2Fp1.img.cctvpic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614873324&t=28fa51217df1be933cb03c81cf9fc605' },
        { text: '照顾农作物、关爱生命、热爱自然', url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Feducation.news.cn%2F2015-09%2F23%2F128257788_14429652808171n.jpg&refer=http%3A%2F%2Feducation.news.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614873324&t=bdcb534f02157085cfa38a310fdb1ce1' },
        { text: '科学实验培养科学兴趣', url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphotocdn.sohu.com%2F20151229%2Fmp51259876_1451402000036_4.jpeg&refer=http%3A%2F%2Fphotocdn.sohu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614873324&t=7ed267765cd97ce4d2de171b3b7a07df' },
        { text: '团结协作、珍惜劳动成果', url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180626%2Ff6d9d94c6c6b4aca9ad2223051a23d38.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614873324&t=24494515cfa20d1946e4af27b0aa7f73' }
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-card{
  width: 98%;
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
