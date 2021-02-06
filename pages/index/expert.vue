<template>
  <div id="#box" class="container">
    <el-card v-for="(item,index) in expers[currentIndex]" :key="index">
      <div class="exper">
        <div class="left-picture">
          <el-image :src="item.currentImg" alt="" class="img" />
        </div>
        <div class="right-intro">
          <p class="name">
            {{ item.name }}
          </p>
          <p class="position">
            {{ item.position }}
          </p>
          <p class="point">
            {{ item.point }}
          </p>
          <p class="intro">
            {{ item.intro }}
          </p>
        </div>
      </div>
    </el-card>
  </div>
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
      currentIndex: 0,
      expers: {
        0: [
          {
            id: '1',
            currentImg: require('../../static/images/001.jpg'),
            name: '汪明荃',
            position: '陕西农业大学教授',
            point: '农作物的生长特效，病理研究',
            intro: '现任山东省医学科学院名誉院长、山东省科协副主席、山东省眼科研究所名誉所长、省部共建眼科学国家重点实验室培育基地主任。兼任中华医学会和中国医师协会眼科学分会荣誉主任委员、亚洲角膜学会副主席、国际眼表疾病学会理事、国际泪膜与眼表学会学术委员会委员和亚太接触镜眼科医师协会理事等，是目前我国眼科学界唯一的中国工程院院士'
          },
          {
            id: '2',
            currentImg: require('../../static/images/001.jpg'),
            name: '汪明荃',
            position: '陕西农业大学教授',
            point: '农作物的生长特效，病理研究',
            intro: '现任山东省医学科学院名誉院长、山东省科协副主席、山东省眼科研究所名誉所长、省部共建眼科学国家重点实验室培育基地主任。兼任中华医学会和中国医师协会眼科学分会荣誉主任委员、亚洲角膜学会副主席、国际眼表疾病学会理事、国际泪膜与眼表学会学术委员会委员和亚太接触镜眼科医师协会理事等，是目前我国眼科学界唯一的中国工程院院士'
          },
          {
            id: '3',
            currentImg: require('../../static/images/001.jpg'),
            name: '汪明荃',
            position: '陕西农业大学教授',
            point: '农作物的生长特效，病理研究',
            intro: '现任山东省医学科学院名誉院长、山东省科协副主席、山东省眼科研究所名誉所长、省部共建眼科学国家重点实验室培育基地主任。兼任中华医学会和中国医师协会眼科学分会荣誉主任委员、亚洲角膜学会副主席、国际眼表疾病学会理事、国际泪膜与眼表学会学术委员会委员和亚太接触镜眼科医师协会理事等，是目前我国眼科学界唯一的中国工程院院士'
          },
          {
            id: '1',
            currentImg: require('../../static/images/001.jpg'),
            name: '汪明荃',
            position: '陕西农业大学教授',
            point: '农作物的生长特效，病理研究',
            intro: '现任山东省医学科学院名誉院长、山东省科协副主席、山东省眼科研究所名誉所长、省部共建眼科学国家重点实验室培育基地主任。兼任中华医学会和中国医师协会眼科学分会荣誉主任委员、亚洲角膜学会副主席、国际眼表疾病学会理事、国际泪膜与眼表学会学术委员会委员和亚太接触镜眼科医师协会理事等，是目前我国眼科学界唯一的中国工程院院士'
          }
        ]
      }
    }
  }
}
</script>
<style scoped>
/* 大卡片 */
template{
  min-width:600px;
}
#box{
  min-width:600px;
}
.container{
  padding:2% 2%;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap
}
.el-card{
  height:350px;
  display:flex;
  width:75%;
  margin-bottom:2rem;
  padding:0 1rem;
}
.exper{
  width:100%;
  height:100%;
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  /* column-gap:1rem; */
}
.left-picture{
  flex:1;
  height:100%;
}
.img{
  width:100%;
  height:100%;
  object-fit:cover;
}
.right-intro{
  flex:1.2;
  display: flex;
  flex-direction: column;
  color:#666666;
  /* justify-content: space-between;
  align-items: space-around; */
}
.right-intro .name{
  flex:1;
  font-size:24px;
  margin-bottom:2%;
  color:#666666;
  font-weight:600;
  font:Source Han Sans CN bold 80px;
  border-left:5px #FF6262 solid;
  padding:0 1%;
}
.right-intro .position{
  flex:1;
  margin-bottom:2%;
  font-weight:600;
}
.right-intro .point{
  flex:1;
  margin-bottom:2%;
  font-weight:600;
}
.right-intro .intro{
  flex:6;
  margin-bottom:2%;
}
/* 媒体查询 */
@media screen and (max-width: 900px){
  .container{
  padding:1px;
  }
  .el-card{
  width:95%;
  }
}
@media screen and (max-width: 700px){
  .right-intro .name{
  font-size:18px;
  margin-bottom:2%;
  color:#666666;
  font-weight:600;
  font:Source Han Sans CN bold 80px;
  border-left:5px #FF6262 solid;
  padding:0 1%;
}
.right-intro .position{
  font-size:14px;
}
.right-intro .point{
  font-size:14px;
}
.right-intro .intro{
  font-size:14px;
}
}
</style>
