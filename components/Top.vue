<template>
  <div class="top-warp">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item
        v-for="(item, index) in arr"
        :key="index"
        :class="[index === 0 ? 'first' : '', index === 1 ? 'second' : '', index === 2 ? 'third' : '']"
      >
        <div class="left">
          <p>{{ item.type }}</p>
          <h3>{{ item.name }}</h3>
        </div>
        <div :class="[index === 0 ? firstRight:'',right]">
          <p>{{ item.des }}</p>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      firstRight: 'first-right',
      right: 'right',
      arr: [
        {
          type: '特色应用',
          name: '电表识别服务',
          des: '快速迭代，新增电表8小时内完成训练自适应增强识别模型，适应电表拍照倾斜、表盘异物、强光照等情况在保障识别率的前提下，提供图像算法，有利于节省流量和设备功耗。',
          img: require('@/assets/img/banner1.png')
        },
        {
          type: '标杆案例',
          name: '冀东水泥“水泥互联网+供应链资源协同云平台”',
          des: '制造业生产精细化。',
          img: require('@/assets/img/banner2.png')
        },
        {
          type: '标杆案例',
          name: '五维航电数字化管理升级',
          des: '特种合金材料零部件数字化协同制造。',
          img: require('@/assets/img/banner3.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
.top-warp {
  /* position: relative;
  height:300px; */
  border:1px solid white;

}
/* 轮播图样式 */
/* .el-carousel__container{
  height: 300px;
} */
.el-carousel__item{
  background-size: 100% 300px;
  font-size: 18px;
  opacity: 0.75;
  color: white;
  margin: 0;
}
/* 轮播图背景图片 */
.el-carousel__item.first {
  background-image: url('~assets/img/banner1.png');
  color: white;
}
.el-carousel__item.second {
  background-image: url('~assets/img/banner2.png');
}
.el-carousel__item.third {
  background-image: url('~assets/img/banner3.png');
}
/* 轮播图文字 */
.el-carousel__item .left{
  /* background-color: lightslategrey; */
  width:60%;
  margin: 2% 0 0 4%;
}
.el-carousel__item .right{
  position: absolute;
  /* background-color: lightslategrey; */
  width:35%;
  right:5%;
  bottom: 10%;
  text-align: right;
  /* margin: 10% 10% 10% 60%; */
}
.el-carousel__item .first-right.right{
  text-align: justify;
}

/* 媒体查询 */
/* @media screen and (min-width: 1000px) {
  .el-carousel__item{
    background-size: 100% 400px;
    color: blue;
    height:400px;
  }
} */
</style>
