<template>
  <div class="container">
    <div class="leftContent">
      <el-image :src="imgUrl" class="ex-img" />
    </div>
    <div class="rightContent">
      <div id="experIntro" class="experIntro">
        <h2>汪明荃</h2>
        <h3>陕西农业大学教授</h3>
        <p>农作物的生长特效，病理研究</p>
      </div>
      <div id="detailIntro" class="detailIntro">
        <div class="context">
          <el-image :src="imgUrl2" class="littleimg" />
          <p>
            现任山东省医学科学院名誉院长、山东省科协副主席、山东省眼科研究所名誉所长、省部共建眼科学国家重点实验室培育基地主任。兼任中华医学会和中国医师协会眼科学分会荣誉主任委员、亚洲角膜学会副主席、国际眼表疾病学会理事、国际泪膜与眼表学会学术委员会委员和亚太接触镜眼科医师协会理事等，是目前我国眼科学界唯一的中国工程院院士
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
          <el-image :src="img007" class="helpLeft" />
          <el-image :src="img006" class="exper01" />
          <el-image :src="img004" class="exper02" />
          <el-image :src="img005" class="exper03" />
          <el-image :src="img003" class="exper04" />
          <el-image :src="img008" class="helpRight" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgUrl: require('../../static/images/001.jpg'),
      imgUrl2: require('../../static/images/02.png'),
      img009: require('../../static/images/009.png'),
      img010: require('../../static/images/010.png'),
      img007: require('../../static/images/007.png'),
      img003: require('../../static/images/003.png'),
      img004: require('../../static/images/004.png'),
      img005: require('../../static/images/00x.png'),
      img006: require('../../static/images/006.png'),
      img008: require('../../static/images/008.png'),
      img100: require('../../static/images/100.png'),
      img101: require('../../static/images/101.png')
    }
  }
}
</script>
<style scoped>
.container{
  position: relative;
  width:100vw;
  height:700px;
  padding:50px 200px 40px 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.leftContent{
  flex:1;
   /* margin-left:200px; */
  height:100%;
  width:100%;
}
.ex-img{
  height:650px;
  width:470px;
}
.rightContent{
  flex:1.2;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:space-around;
   /* margin-left:50px; */
}
.experIntro{
flex:1;
width:100%;
margin-bottom:10px;
}
.experIntro h2{
  color:#666666;
  font:Source Han Sans CN bold 80px;
  border-left:5px #FF6262 solid;
  padding:0 10px;
  position:relative;
  left:-110px;
  text-align:left;
}
.experIntro h3{
  color:#666666;
  font:Source Han Sans CN lighter 48px;
  font-weight:lighter;
  line-height:48px;
}
.experIntro p{
  color:#666666;
  font:Source Han Sans CN lighter 24px;
  font-weight:lighter;
  line-height:24px;
}
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
  width:39px;
  height:32px;
  margin-bottom:10px;
}
.experList{
  flex:1;
  width:120%;
  margin-top:10px;
}
.experList .helpImg{
  width:60px;
  height:60px;
}
.experList .helpText{
  width:96px;
  height:24px;
  position: relative;
  top:-12px;
}
.experList .experImgs{
  transform:translateX(-8%);
  display:flex;
  justify-content: center;
  align-items: center;
  column-gap: 15px;
  margin-top:10px;
}
.exper01,.exper02,.exper03,.exper04{
width:120px;
height:120px;
cursor:pointer;
}
.helpLeft,.helpRight{
  cursor:pointer;
}
</style>
