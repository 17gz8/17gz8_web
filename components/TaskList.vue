<template>
  <div class="task-list">
    <!-- 1.导航栏 -->
    <div class="nav">
      <div class="nav_items">
        <div class="nav_items_line" />
        <div class="nav_items_list">
          <span
            v-for="(item, index) in listArray"
            :key="index"
            :class="{ active: index === currentIndex }"
            @click="listClick(index)"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
    <!-- 2.列表数据 -->
    <el-card v-for="(item,index) in tasks[currentIndex]" :key="index">
      <nuxt-link :to="`/task/${item.id}`" class="link">
        <div style="display: flex; height: 300px">
          <!-- 2-1.左侧图片 -->
          <div class="left">
            <img :src="item.landImg" alt="">
          </div>
          <!-- 2-2.右侧描述 -->
          <div class="right">
            <!-- 2-3.标题和地址 -->
            <p class="title">
              {{ item.title }}
            </p>
            <div style="display: flex">
              <img src="../assets/taskImg/location.png" alt="" style="width: 17px; height: 17px">
              <p class="addres">
                {{ item.addres }}
              </p>
            </div>
            <!-- 2-4. 学校与负责人 -->
            <div class="center">
              <img :src="item.scoolImg" alt="">
              <div style="padding-left: 7px" class="center_info">
                <p class="scoolName">
                  {{ item.scoolName }}
                </p>
                <span class="scoolManager">
                  {{ item.scoolManager }}
                </span>
                <span class="update">
                  {{ item.update }}
                </span>
              </div>
            </div>
            <!-- 2-5. 参与人员 -->
            <div class="center_down">
              <div
                v-for="(itemM, index2) in item.scoolMember"
                :key="index2"
                class="members"
              >
                <img :src="itemM.img" alt="">
                <div class="name">
                  {{ itemM.name }}
                </div>
              </div>
            </div>
            <!-- 2-6. 操作按钮 -->
            <div class="bottom clearfix">
              <el-button v-show="currentIndex === 0" type="text" class="button">
                加入任务
              </el-button>
              <el-button type="text" class="button">
                任务详情
              </el-button>
            </div>
          </div>
        </div>
      </nuxt-link>
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
      // 1.导航栏部分变量
      listArray: ['发起中', '实验中', '已完成'],
      currentIndex: 0,
      // 监听tab,只在当前页面取消tab默认行为
      activeTab: true,
      // 2.列表数据
      tasks: {
        // { id: '1', name: '任务1', src: '/task/1' },
        // { id: '2', name: '任务2', src: '/task/2' },
        // { id: '3', name: '任务3', src: '/task/3' },
        // { id: '4', name: '任务4', src: '/task/4' }
        0: [
          {
            id: '1',
            landImg: require('@/assets/taskImg/test1.png'),
            title: '种植白菜',
            addres: '重庆市巴南区',
            scoolImg: require('@/assets/taskImg/test1.png'),
            scoolName: '重庆市渝中小学',
            scoolManager: '刘老师',
            update: '2天前',
            scoolMember: [
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '马老师'
              },
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '罗老师'
              },
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '何老师'
              },
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '宋老师'
              },
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '邓老师'
              },
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '邓老师'
              },
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '邓老师'
              },
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '邓老师'
              },
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '邓老师'
              }
            ]
          },
          {
            id: '2',
            landImg: require('@/assets/taskImg/test1.png'),
            title: '种植萝卜',
            addres: '重庆市永川区',
            scoolImg: require('@/assets/taskImg/test1.png'),
            scoolName: '重庆市永川小学',
            scoolManager: '何老师',
            update: '2天前',
            scoolMember: [
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '马老师'
              },
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '罗老师'
              },
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '何老师'
              },
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '宋老师'
              },
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '邓老师'
              }
            ]
          },
          {
            id: '3',
            landImg: require('@/assets/taskImg/test1.png'),
            title: '种植白菜',
            addres: '重庆市巴南区',
            scoolImg: require('@/assets/taskImg/test1.png'),
            scoolName: '重庆市渝中小学',
            scoolManager: '刘老师',
            update: '2天前',
            scoolMember: [
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '马老师'
              },
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '罗老师'
              },
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '何老师'
              },
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '宋老师'
              },
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '邓老师'
              }
            ]
          },
          {
            id: '4',
            landImg: require('@/assets/taskImg/test1.png'),
            title: '种植白菜',
            addres: '重庆市巴南区',
            scoolImg: require('@/assets/taskImg/test1.png'),
            scoolName: '重庆市渝中小学',
            scoolManager: '刘老师',
            update: '2天前',
            scoolMember: [
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '马老师'
              },
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '罗老师'
              },
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '何老师'
              },
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '宋老师'
              },
              {
                img: require('@/assets/taskImg/test1.png'),
                name: '邓老师'
              }
            ]
          }
        ],
        1: [
          {
            id: '1',
            landImg: require('@/assets/taskImg/text2.png'),
            title: '种植白菜',
            addres: '重庆市合川区',
            scoolImg: require('@/assets/taskImg/text2.png'),
            scoolName: '重庆市渝中小学',
            scoolManager: '刘老师',
            update: '2天前',
            scoolMember: [
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '马老师'
              },
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '罗老师'
              },
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '何老师'
              }
            ]
          },
          {
            id: '2',
            landImg: require('@/assets/taskImg/text2.png'),
            title: '种植萝卜',
            addres: '重庆市永川区',
            scoolImg: require('@/assets/taskImg/text2.png'),
            scoolName: '重庆市永川小学',
            scoolManager: '何老师',
            update: '2天前',
            scoolMember: [
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '马老师'
              },
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '罗老师'
              },
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '何老师'
              },
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '宋老师'
              },
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '邓老师'
              }
            ]
          },
          {
            id: '3',
            landImg: require('@/assets/taskImg/text2.png'),
            title: '种植白菜',
            addres: '重庆市巴南区',
            scoolImg: require('@/assets/taskImg/text2.png'),
            scoolName: '重庆市渝中小学',
            scoolManager: '刘老师',
            update: '2天前',
            scoolMember: [
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '马老师'
              },
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '罗老师'
              },
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '何老师'
              },
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '宋老师'
              },
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '邓老师'
              }
            ]
          },
          {
            id: '4',
            landImg: require('@/assets/taskImg/text2.png'),
            title: '种植白菜',
            addres: '重庆市巴南区',
            scoolImg: require('@/assets/taskImg/text2.png'),
            scoolName: '重庆市渝中小学',
            scoolManager: '刘老师',
            update: '2天前',
            scoolMember: [
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '马老师'
              },
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '罗老师'
              },
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '何老师'
              },
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '宋老师'
              },
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '邓老师'
              },
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '何老师'
              },
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '宋老师'
              },
              {
                img: require('@/assets/taskImg/text2.png'),
                name: '邓老师'
              }
            ]
          }
        ],
        2: [
          {
            id: '1',
            landImg: require('@/assets/taskImg/test3.png'),
            title: '种植白菜',
            addres: '重庆市巴南区',
            scoolImg: require('@/assets/taskImg/test3.png'),
            scoolName: '重庆市渝中小学',
            scoolManager: '刘老师',
            update: '2天前',
            scoolMember: [
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '马老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '罗老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '何老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '宋老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '邓老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '邓老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '邓老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '邓老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '邓老师'
              }
            ]
          },
          {
            id: '2',
            landImg: require('@/assets/taskImg/test3.png'),
            title: '种植萝卜',
            addres: '重庆市永川区',
            scoolImg: require('@/assets/taskImg/test3.png'),
            scoolName: '重庆市永川小学',
            scoolManager: '何老师',
            update: '2天前',
            scoolMember: [
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '马老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '罗老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '何老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '宋老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '邓老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '罗老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '何老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '宋老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '邓老师'
              }
            ]
          },
          {
            id: '3',
            landImg: require('@/assets/taskImg/test3.png'),
            title: '种植白菜',
            addres: '重庆市巴南区',
            scoolImg: require('@/assets/taskImg/test3.png'),
            scoolName: '重庆市渝中小学',
            scoolManager: '刘老师',
            update: '2天前',
            scoolMember: [
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '马老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '罗老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '何老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '宋老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '邓老师'
              }
            ]
          },
          {
            id: '4',
            landImg: require('@/assets/taskImg/test3.png'),
            title: '种植白菜',
            addres: '重庆市巴南区',
            scoolImg: require('@/assets/taskImg/test3.png'),
            scoolName: '重庆市渝中小学',
            scoolManager: '刘老师',
            update: '2天前',
            scoolMember: [
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '马老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '罗老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '何老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '宋老师'
              },
              {
                img: require('@/assets/taskImg/test3.png'),
                name: '邓老师'
              }
            ]
          }
        ]
      }

    }
  },
  mounted () {
    // 1.开启监听事件
    this.tabEvent()
  },
  created () {
    // 1.页面创建时取消tab的默认行为
    this.activeTab = true
  },
  destroyed () {
    // 1.页面销毁时恢复tab的默认行为
    this.activeTab = false
  },
  methods: {
    // 1.切换列表导航事件
    listClick (index) {
      // alert('我是第' + index + '个')
      this.currentIndex = index
      // this.$emit('current-index')
    },
    // 2.监听tab事件
    tabEvent () {
      document.addEventListener('keydown', (e) => {
        const keyName = e.key
        // alert(keyName + ' ' + this.activeTab)
        if (keyName === 'Tab') {
          // 阻止默认tab选中焦点的默认行为
          if (this.activeTab) {
            e.preventDefault()
            e.returnValue = false
            // 切换导航
            this.currentIndex += 1
            this.currentIndex = this.currentIndex % 3
          } else {
            e.returnValue = true
          }
        }
      })
    }
    // 标注列表
  //   getList () {
  //     this.loading = true
  //     const data = {
  //       jobId: this.id,
  //       pageNum: this.pageNum,
  //       pageSize: this.pageSize,
  //       status: this.status
  //     }
  //     this.$fetch({
  //       url: '/tabJobSub/listSubJobMark',
  //       params: data,
  //       method: 'get'
  //     }).then((res) => {
  //       this.loading = false
  //       if (res.data) {
  //         this.total = res.data.totalCount
  //         this.pageNum = res.data.pageNumber
  //         this.tableData = res.data.list
  //         this.$emit('getCurrentInfo', res.data.list[0])
  //       } else {
  //         this.tableData.length = 0
  //         this.$emit('getCurrentInfo', false)
  //       }
  //     }).catch(() => { })
  //       .finally(() => {
  //         this.loading = false
  //       })
  //   }
  }

}
</script>

<style scoped>
.task-list {
  margin: 2% 3% 0;
}

/* 导航栏开始 */
.nav {
  margin-left: 1.25%;
}
.nav .nav_items .nav_items_line {
  float: left;
  width: .6%;
  height: 33px;
  background: #ff6262;
  opacity: 1;
}
.nav .nav_items .nav_items_list span {
  width: 86px;
  height: 25px;
  margin: 0 10px;
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #999999;
  opacity: 1;
}
.nav .nav_items .nav_items_list span:hover {
  cursor: pointer;
}
.nav .nav_items .nav_items_list .active {
  font-size: 25px;
  color: #707070;
}
/* 导航栏结束 */
/* 列表数据开始 */
.el-card{
  float: left;
  width: 48%;
  margin: 1%;
}
@media screen and (max-width: 700px){
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
@media screen and (min-width: 1400px){
  .el-card {
    width: 30%;
  }
}
.el-card .link {
  padding: 0;
}
.el-card .left {
  width: 50%;
  /* background-color: lightcyan; */
}
/* 卡片左侧图片开始 */
.el-card .left img {
  width: 100%;
  height: 100%;
  border-radius: 11px;
  object-fit: cover;
}
/* 卡片左侧图片结束 */

/* 卡片右侧开始 */
.el-card .right {
  width: 50%;
  position: relative;
  margin-left: 2%;
}
.el-card .right .title {
  width: 120px;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  color: #666666;
  opacity: 1;
}

.el-card .right .addres {
  width: 149px;
  height: 17px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: #cccccc;
  opacity: 1;
}
.el-card .right .center {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.el-card .right .center img {
  /* width: 63px;
  height: 63px; */
  width: 30%;
  border-radius: 999px;
}
.el-card .right .center .center_info {
  font-weight: 500;
  opacity: 1;
}
.el-card .right .center .scoolName {
  width: 179px;
  height: 26px;
  /* font-size: 18px; */
  font-size: calc(100vw / 77);
  line-height: 43px;
   font-weight: 500;
  color: #666666;
}
.el-card .right .center .scoolManager {
  width: 51px;
  height: 17px;
  /* font-size: 15px; */
  font-size: calc(100vw / 85);
  line-height: 29px;
  color: #666666;
}

.el-card .right .center .update {
  width: 43px;
  height: 17px;
  /* font-size: 15px; */
  font-size: calc(100vw / 85);
  font-weight: 400;
  line-height: 29px;
  color: #999999;
}
.center_down {
  display: flex;
  flex-wrap: wrap;
  font-size: 9px;
  font-weight: 200;
  height: 100px;
  width: 91%;
  overflow: hidden;
}

.center_down .members {
  padding-right: 2px;
  position: relative;
  /* background-color: lightgreen; */
  height: 50px;
}
.center_down .members .name {
  position: absolute;
  top: 34%;
}
.center_down .members img {
  width: 35px;
  height: 35px;
  border-radius: 999px;
}
/* 右侧中间人员头像和学校名称结束 */

/* 右侧下方操作按钮开始 */
.bottom {
  position: absolute;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  /* right: 7%; */
  width: 100%;
  /* background-color: lightpink; */
}

.bottom .button {
  width: 85px;
  height: 26px;
  line-height: 2px;
  border: 1px solid #ff6262;
  opacity: 1;
  border-radius: 21px;
  color: #ff6262;
}
.bottom .button:last-child {
  background: #ff6262;
  color: #ffffff;
}
/* 右侧下方操作按钮结束 */

/* 卡片右侧结束 */

/* 列表数据结束 */
</style>
