<template>
  <div class="container">
    <el-card v-for="(item,index) in gardens" :key="index">
      <nuxt-link :to="`/garden/${item.id}`">
        <div class="left">
          <el-container>
            <el-aside width="100%" style="overflow: hidden">
              <el-image
                style="width: 100%; height: 100%"
                :src="item.url"
                :fit="fit"
              />
            </el-aside>
            <el-container>
              <el-header>{{ item.name }}</el-header>
              <el-main>
                <p class="title">
                  {{ item.text }}
                </p>
                <div class="test1" style="display: flex">
                  <img src="../../../assets/taskImg/location.png" alt="" style="width: 17px; height: 17px">
                  <p class="addres">
                    {{ item.addres }}
                  </p>
                </div>
              </el-main>
              <el-footer>
                <el-button type="text" class="button">
                  任务详情
                </el-button>
              </el-footer>
            </el-container>
          </el-container>
        </div>
      </nuxt-link>
    </el-card>
    {{ arr }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  asyncData ({ res, error }) {
    return axios
      .get('http://www.17gz8.com/allycs/server/device/v1/api/data')
      .then((res) => {
        // console.log('res', res.data.list)
        return { arr: res.data }
      })
      .catch((error) => {
        // console.log('error', error)
        return error
      })
  },
  data () {
    return {
      gardens: [
        { id: '1', name: '希望菜园', src: '/garden/1', text: '希望小村菜地距离重庆时钟线约有巫师公里，栈底面积5000亩（主题参观去为400亩）。是国家4A级旅游景区、全国农业旅游示范点、上海市科普教育基地。', addres: '重庆市巴南区', url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
        { id: '2', name: '菜园子菜园', src: '/garden/2', text: '希望小村菜地距离重庆时钟线约有巫师公里，栈底面积5000亩（主题参观去为400亩）。是国家4A级旅游景区、全国农业旅游示范点、上海市科普教育基地。', addres: '重庆市巴南区XXXX', url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
        { id: '3', name: '长得快菜园', src: '/garden/3', text: '希望小村菜地距离重庆时钟线约有巫师公里，栈底面积5000亩（主题参观去为400亩）。是国家4A级旅游景区、全国农业旅游示范点、上海市科普教育基地。', addres: '重庆市巴南区XXXX', url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
        { id: '4', name: '长得多菜园', src: '/garden/4', text: '希望小村菜地距离重庆时钟线约有巫师公里，栈底面积5000亩（主题参观去为400亩）。是国家4A级旅游景区、全国农业旅游示范点、上海市科普教育基地。', addres: '重庆市巴南区XXXX', url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' }
      ],
      fit: 'cover'
    }
  }
}
</script>
<style scoped>

.el-card{
  width: 48%;
  margin: 1%;
  float:left;

}
@media screen and (max-width: 1300px){
  .nav {
    margin-top: 50px;
    margin-bottom: 20px;
  }
  .el-card {
    float: none;
    width: 100%;
    margin-bottom: 20px;
  }
}
@media screen and (min-width: 2000px){
  .el-card {
    width: 30%;
  }
}
 .test1{
   display: flex;
   align-items: center;
 }
 .el-card .el-container {
   width: 100%;
   flex-direction: column;
 }
 .el-card .el-container .el-header, .el-footer {
    width: 100%;
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
 .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 0px;
  }
  .el-card .el-container .el-main {
    width: 100%;
    background-color: #E9EEF3;
    color: #333;
    line-height: 60px;
  }
  body > .el-container {
    margin-bottom: 400px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
    width: 10%;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
    width: 10%;
  }
  .el-button {
  width: 85px;
  height: 26px;
  line-height: 2px;
  border: 1px solid #ff6262;
  opacity: 1;
  border-radius: 21px;
  color: #ff6262;
}
</style>
