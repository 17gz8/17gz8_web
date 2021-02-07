<template>
  <div>
    <!-- 1.时间轴 -->
    <div class="time-axis-img">
      <!-- 1.没有时间轴节点显示的数据 -->
      <div v-if="arr.length === 0" class="text">
        <h1>
          暂无时间轴节点
        </h1>
      </div>
      <!-- 2. 有时间轴节点显示的数据 -->
      <div v-for="(item, index) in arr" :key="index" class="items">
        <!-- 1.节点图片 -->
        <div class="items_image">
          <el-image style="height: 90px;width: 90px;border-radius:999px" :src="item.bcgImg" :class="{ imgChange : imgActiveIndex === index}" @click.native="imgClick(index)" />
          <div class="items_image_time" @click="imgClick(index)">
            <div class="year">
              {{ item.getYear }}
            </div>
            <div class="day">
              {{ item.getDay }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 2.数据 -->
    <div class="time-axis-info">
      <el-card v-if="imgActiveIndex !== -1" class="items_card">
        <!-- 1.上方介绍 -->
        <el-row class="item_top">
          <el-col :xs="24" :sm="15" class="item_top_left">
            <span>{{ arr[imgActiveIndex].title }}</span>
            <div class="item_top_left_comment">
              <div class="comment" style="margin-right:10px">
                <img style="height:20px;width:20px" src="../assets/taskImg/pinglun.png">
                <span>99</span>
              </div>
              <div class="admire">
                <img style="height:20px;width:20px" src="../assets/taskImg/dianzan.png">
                <span>99</span>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="8" class="item_top_right">
            <div v-for="(imgList, index) in arr[imgActiveIndex].imgArr" :key="index">
              <el-image :src="imgList.img" />
            </div>
          </el-col>
          <el-col :xs="24" :sm="1" class="item_top_dot">
            <div class="tempContainer">
              <div v-for="index in 4" :key="index" class="dotItem" :class="{ dotActive : dotActiveIndex === index}" @click="dotClick(index)" />
            </div>
          </el-col>
        </el-row>
        <!-- 2.下方评论 -->
        <h3 style="margin-top: 2%">
          评论
        </h3>
        <el-row v-for="index in 3" :key="index" class="item_bootom">
          <el-col :span="8">
            <div class="user" style="display: flex">
              <el-avatar :src="arr[imgActiveIndex].bcgImg" :size="50" />
              <div class="info" style="margin-left:30px;margin-top:7px">
                <p>李老师</p>
                <p>30分钟前</p>
              </div>
            </div>
            <div class="comment" style="margin-top:7px;margin-left:82px">
              <span>口感会有一点变化</span>
            </div>
          </el-col>
        </el-row>
        <!-- 3.输入框 -->
        <el-row :gutter="40" class="bootomInput">
          <el-col :span="16">
            <el-input
              v-model="input"
              placeholder="请输入内容"
            />
          </el-col>
          <el-col :span="8">
            <el-button round style="color:red">
              发送
            </el-button>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      arr: [
        {
          bcgImg: require('@/assets/taskImg/test1.png'),
          getYear: '2018',
          getDay: '9.12',
          title: '三年级二班今天种了桃树,三年级二班今天种了桃树,三年级二班今天种了桃树,三年级二班今天种了桃树,三年级二班今天种了桃树,三年级二班今天种了桃树',
          imgArr: [
            {
              img: require('@/assets/taskImg/test1.png')
            },
            {
              img: require('@/assets/taskImg/text2.png')
            },
            {
              img: require('@/assets/taskImg/test1.png')
            },
            {
              img: require('@/assets/taskImg/test3.png')
            }
          ]
        },
        {
          bcgImg: require('@/assets/taskImg/test3.png'),
          getYear: '2018',
          getDay: '10.12',
          title: '三年级二班今天种了西瓜',
          imgArr: [
            {
              img: require('@/assets/taskImg/test1.png')
            },
            {
              img: require('@/assets/taskImg/text2.png')
            },
            {
              img: require('@/assets/taskImg/test1.png')
            },
            {
              img: require('@/assets/taskImg/test3.png')
            }
          ]
        },
        {
          bcgImg: require('@/assets/taskImg/test1.png'),
          getYear: '2018',
          getDay: '11.12',
          title: '三年级二班今天种了橘子',
          imgArr: [
            {
              img: require('@/assets/taskImg/test1.png')
            },
            {
              img: require('@/assets/taskImg/text2.png')
            },
            {
              img: require('@/assets/taskImg/test1.png')
            },
            {
              img: require('@/assets/taskImg/test3.png')
            }
          ]
        },
        {
          bcgImg: require('@/assets/taskImg/test3.png'),
          getYear: '2018',
          getDay: '12.12',
          title: '三年级二班今天种了土豆',
          imgArr: [
            {
              img: require('@/assets/taskImg/test1.png')
            },
            {
              img: require('@/assets/taskImg/text2.png')
            },
            {
              img: require('@/assets/taskImg/test1.png')
            },
            {
              img: require('@/assets/taskImg/test3.png')
            }
          ]
        },
        {
          bcgImg: require('@/assets/taskImg/test3.png'),
          getYear: '2019',
          getDay: '1.12',
          title: '三年级二班今天种了大白菜',
          imgArr: [
            {
              img: require('@/assets/taskImg/test1.png')
            },
            {
              img: require('@/assets/taskImg/text2.png')
            },
            {
              img: require('@/assets/taskImg/test1.png')
            },
            {
              img: require('@/assets/taskImg/test3.png')
            }
          ]
        }
      ],
      imgActiveIndex: -1,
      isChoose: false,
      dotActiveIndex: 1
    }
  },
  methods: {
    imgClick (index) {
      if (this.imgActiveIndex === index) {
        this.imgActiveIndex = -1
        this.isChoose = false
      } else {
        this.imgActiveIndex = index
        // alert(this.imgActiveIndex)
        this.isChoose = true
      }
    },
    dotClick (index) {
      this.dotActiveIndex = index
    }
  }
}
</script>

<style scoped>
  .time-axis-img {
    width: 100%;
    height: 140px;
    /* background-color: aquamarine; */
  }
  .text {
    text-align: center;
    line-height: 100px;
    color: rgb(238, 230, 230);
  }
  /* 头像栏开始 */
  .items .items_image {
    position: relative;
    float: left;
    margin: 2% 20px 10px 0;
    color: #fff;
    text-align: center;
    font-weight: 300;
  }
  .items .items_image_time {
    position: absolute;
    top: 30%;
    left: 33%;
  }
  @media screen and (max-width: 700px){
    .text {
      margin-left: 22%;
    }
    .time-axis-img {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      overflow-x: scroll;
      overflow-y: hidden;
    }
    .items .items_image {
      margin-top: 13%;
    }
  }
  .imgChange{
    width: 120px !important;
    height: 120px !important;
    transform: translateY(-15px);
  }
  /* 头像栏结束 */

  /* 节点数据开始 */
  .time-axis-info {
    margin-top: 2%;
  }
  .items_card {
    position: relative;
    width: 80%;
    height: 700px;
  }
  .items_card .item_top {
    position: relative;
    border-bottom: 2px grey dashed;
  }
  .items_card .item_top .item_top_left_comment {
    position: absolute;
    display: flex;
    bottom: 8%;
    right: 38%;
  }
  .items_card .item_top .item_top_right {
    height: 100% ;
    margin-bottom: 20px;
    /* background-color: hotpink; */
  }
  .items_card .item_top .item_top_right .el-image {
    float: left;
    width: 50%;
    padding: 2%;
  }
  .items_card .item_top .item_top_dot {
    position: absolute;
    right: 0;
    top: calc(50% - 45px);
  }
  .items_card .item_top .item_top_dot .dotItem{
    width: 10px;
    height: 10px;
    background-color: orange;
    margin: 10px auto;
    border-radius: 999px;
  }
  .dotActive {
    background-color: red !important;
  }
  .items_card .item_bootom .el-col {
    width: 56%;
    height: 100px;
    /* background-color: khaki; */
    margin-top: 20px;
    border-bottom: 1px rgb(243, 240, 240) solid;
  }
  .items_card .bootomInput {
    position: absolute;
    width: 80%;
    bottom: 1%;
    left: 20%;
  }
  @media screen and (max-width: 763px){
    .items_card {
      width: 100%;
      height: 900px;
    }
    .items_card .item_top .item_top_left {
      position: relative;
      height: 100px;
      /* background-color: indianred; */
    }
    .items_card .item_top .item_top_left_comment {
      bottom: 0;
      right: 0;
    }
    .items_card .item_top .item_top_dot {
      position: static;
    }
    .items_card .item_top .item_top_dot .tempContainer {
      position: absolute;
      bottom: 0;
      left:calc(50% - 60px);
    }
    .items_card .item_top .item_top_dot .dotItem{
      float: left;
      margin: 10px;
    }
    .items_card .bootomInput {
      left: 15%;
    }
    .items_card .item_bootom .el-col {
      width: 100%;
    }
  }
</style>
