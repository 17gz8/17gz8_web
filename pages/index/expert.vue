/* eslint-disable no-console */
<template>
  <el-card class="bigBox">
    <div class="container">
      <div class="leftContent">
        <el-image :src="imgCurrent" class="ex-img" />
      </div>
      <div class="rightContent">
        <div id="experIntro" class="experIntro">
          <h2>{{ currentExper }}</h2>
          <h3>{{ currentPosition }}</h3>
          <p>{{ currentPoint }}</p>
        </div>
        <div id="detailIntro" class="detailIntro">
          <div class="context">
            <el-image :src="imgUrl2" class="littleimg" />
            <p>
              {{ currentIntro }}
            </p>
          </div>
          <div class="imgLists">
            <el-image :src="img100" class="img100" />
            <el-image :src="img101" class="img101" />
            <el-image :src="img100" class="img102" />
            <el-image :src="img100" class="img103" />
          </div>
        </div>
        <div class="experList">
          <el-image :src="img009" class="helpImg" />
          <el-image :src="img010" class="helpText" />
          <div class="experImgs">
            <div class="mainlyExper">
              <el-image :src="img007" class="helpLeft" />
              <div v-for="(item,index) in imgs" :key="index" class="imgs">
                <el-image :src="item.url" class="exper01" />
              </div>
              <el-image id="btn" :src="img008" class="helpRight" @click="handle" />
            </div>
            <div v-show="isShow" id="allExper" class="allExpers">
              <div v-for="(item,index) in allImgs" :key="index" class="Expers">
                <el-image :src="item.url" class="expers" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  props: {
    status: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      currentExper: '汪明荃',
      currentPosition: '陕西农业大学教授',
      currentPoint: '农作物的生长特效，病理研究',
      currentIntro: '现任山东省医学科学院名誉院长、山东省科协副主席、山东省眼科研究所名誉所长、省部共建眼科学国家重点实验室培育基地主任。兼任中华医学会和中国医师协会眼科学分会荣誉主任委员、亚洲角膜学会副主席、国际眼表疾病学会理事、国际泪膜与眼表学会学术委员会委员和亚太接触镜眼科医师协会理事等，是目前我国眼科学界唯一的中国工程院院士',
      imgCurrent: require('../../static/images/001.jpg'),
      imgUrl2: require('../../static/images/02.png'),
      img009: require('../../static/images/009.png'),
      img010: require('../../static/images/010.png'),
      img007: require('../../static/images/007.png'),
      img003: require('../../static/images/003.png'),
      img004: require('../../static/images/004.png'),
      img005: require('../../static/images/00x.png'),
      img008: require('../../static/images/008.png'),
      img100: require('../../static/images/100.png'),
      img101: require('../../static/images/101.png'),
      imgs: [
        { url: require('../../static/images/006.png') },
        { url: require('../../static/images/004.png') },
        { url: require('../../static/images/005.png') },
        { url: require('../../static/images/003.png') }
      ],
      allImgs: [
        { url: require('../../static/images/006.png') },
        { url: require('../../static/images/004.png') },
        { url: require('../../static/images/00x.png') },
        { url: require('../../static/images/003.png') },
        { url: require('../../static/images/006.png') },
        { url: require('../../static/images/004.png') },
        { url: require('../../static/images/00x.png') },
        { url: require('../../static/images/003.png') }
      ],
      methods: {
        handle () {
          alert('123')
        }
      }
    }
  }
}
</script>
<style scoped>
/* 大卡片 */
.bigBox{
  width:90%;
  margin:2% 5%;
  height:100%;
  min-width:250px;
}
.container{
  position: relative;
  width:100%;
  height:96%;
  /* padding:20px 200px 40px 150px; */
  padding:5% 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
/* 左侧图片 */
.leftContent{
  flex:1;
   /* margin-left:200px; */
  height:100%;
  width:100%;
}
/* 专家大图片 */
.ex-img{
  width:100%;
  height:100%;
}
/* 右侧介绍部分 */
.rightContent{
  flex:1.2;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:space-around;
   /* margin-left:50px; */
}
/* 介绍标题 */
.experIntro{
flex:1;
width:100%;
margin-bottom:10px;
position: relative;
}
.experIntro h2{
  width:100%;
  color:#666666;
  font:Source Han Sans CN bold 80px;
  border-left:5px #FF6262 solid;
  padding:0 1%;
  position:relative;
  left:-110px;
  text-align:left;
}
.experIntro h3{
  color:#666666;
  font:Source Han Sans CN lighter 48px;
  font-weight:lighter;
  line-height:48px;
  text-align:left;
}
.experIntro p{
  color:#666666;
  font:Source Han Sans CN lighter 24px;
  font-weight:lighter;
  line-height:24px;
  text-align:left;
}
/* 详细介绍 */
.detailIntro{
  flex:1;
  width:100%;
  color:#666666;
  font:Source Han Sans CN lighter 24px;
  font-weight:lighter;
  line-height:41px;
  display:flex;
  flex-direction: row;
}
.detailIntro .context{
  flex:7;
}
.detailIntro .imgLists{
  flex:1;
  height:120px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transform: translateY(90px);
}
.detailIntro .imgLists .img100,.detailIntro .imgLists .img101{
  width:24px;
  height:24px;
}
.detailIntro .imgLists .img102,.detailIntro .imgLists .img103{
  width:10px;
  height:10px;
}
.littleimg{
  width:8%;
  height:9%;
  margin-bottom:10px;
}
/* 右侧下方专家列表 */
.experList{
  flex:1;
  width:100%;
  margin-top:10px;
}
.experList .helpImg{
  width:12%;
  height:20%;
}
.experList .helpText{
  width:12%;
  height:8%;
  position: relative;
  top:-3%;
}
.experList .experImgs{
  width:100%;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
}
/* 当前显示的专家列表 */
.experList .experImgs .mainlyExper{
  flex:1;
  transform:translateX(-3%);
  width:100%;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 3%;
  margin:20px 0 10px 0;
  row-gap:1%;
}
/* 点击右键后显示的其余专家 */
.experList .experImgs .allExpers{
  flex:2;
  width:100%;
  display:flex;
  /* display:none; */
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 3%;
  /* row-gap:4%; */
  transform:translateX(4%);
}
.experList .experImgs .allExpers .Expers{
  width:19%;
  margin-bottom:10px;
}
.helpLeft,.helpRight{
  flex:1;
  cursor:pointer;
}
.experList .experImgs .imgs{
  flex:4;
  display:flex;
  flex-direction:row;
  cursor:pointer;
}
/* 媒体查询 */
@media screen and (max-width: 1000px){
  .rightContent h2{
    left:-80px;
  }
}
@media screen and (max-width: 870px)
{
  .bigBox{
    height:60%;
  }
  .ex-img{
    width:100%;
    height:100%;
  }
  .rightContent{
    flex:1;
  }
  .rightContent h2{
    left:-70px;
  }
  .detailIntro{
  font:Source Han Sans CN lighter 20px;
  line-height:20px;
}
}
@media screen and (max-width: 800px){
  .rightContent h2{
    left:-60px;
  }
}
@media screen and (max-width: 700px){
  .rightContent h2{
    left:0px;
  }
  .detailIntro{
  font:Source Han Sans CN lighter 18px;
  line-height:18px;
}
.littleimg{
  width:8%;
  height:5%;
  margin-bottom:10px;
}
}
@media screen and (max-width: 600px){
  .rightContent h2{
    left:0px;
  }
  .detailIntro{
  font:Source Han Sans CN lighter 12px;
  line-height:16px;
}
.littleimg{
  width:6%;
  height:5%;
  margin-bottom:10px;
}
}
@media screen and (max-width: 500px){
  .container{
  flex-direction: column;
}
.littleimg{
  width:6%;
  height:6%;
  margin-bottom:10px;
}
.detailIntro{
  font:Source Han Sans CN lighter 18px;
  line-height:18px;
}
}
</style>
