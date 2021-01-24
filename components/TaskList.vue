<template>
  <div>
    <el-card v-for="(item,index) in tasks" :key="index">
      <nuxt-link :to="`/task/${item.id}`" class="link">
        <div style="display: flex; height: 300px">
          <!-- 1.左侧图片 -->
          <div class="left">
            <img :src="item.landImg" alt="">
          </div>
          <!-- 2.右侧描述 -->
          <div class="right">
            <!-- 3.标题和地址 -->
            <p class="title">
              {{ item.title }}
            </p>
            <div style="display: flex">
              <img src="../assets/taskImg/location.png" alt="" style="width: 17px; height: 17px">
              <p class="addres">
                {{ item.addres }}
              </p>
            </div>
            <!-- 4. 学校与负责人 -->
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
            <!-- 5. 参与人员 -->
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
            <!-- 6. 操作按钮 -->
            <div class="bottom clearfix">
              <el-button type="text" class="button">
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
      tasks: [
        // { id: '1', name: '任务1', src: '/task/1' },
        // { id: '2', name: '任务2', src: '/task/2' },
        // { id: '3', name: '任务3', src: '/task/3' },
        // { id: '4', name: '任务4', src: '/task/4' }
        {
          id: '1',
          landImg: require('@/assets/taskImg/1.jpg'),
          title: '种植白菜',
          addres: '重庆市巴南区',
          scoolImg: require('@/assets/taskImg/1.jpg'),
          scoolName: '重庆市渝中小学',
          scoolManager: '刘老师',
          update: '2天前',
          scoolMember: [
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '马老师'
            },
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '罗老师'
            },
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '何老师'
            },
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '宋老师'
            },
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '邓老师'
            },
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '邓老师'
            },
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '邓老师'
            },
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '邓老师'
            },
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '邓老师'
            }
          ]
        },
        {
          id: '2',
          landImg: require('@/assets/taskImg/1.jpg'),
          title: '种植萝卜',
          addres: '重庆市永川区',
          scoolImg: require('@/assets/taskImg/1.jpg'),
          scoolName: '重庆市永川小学',
          scoolManager: '何老师',
          update: '2天前',
          scoolMember: [
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '马老师'
            },
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '罗老师'
            },
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '何老师'
            },
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '宋老师'
            },
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '邓老师'
            }
          ]
        },
        {
          id: '3',
          landImg: require('@/assets/taskImg/1.jpg'),
          title: '种植白菜',
          addres: '重庆市巴南区',
          scoolImg: require('@/assets/taskImg/1.jpg'),
          scoolName: '重庆市渝中小学',
          scoolManager: '刘老师',
          update: '2天前',
          scoolMember: [
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '马老师'
            },
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '罗老师'
            },
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '何老师'
            },
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '宋老师'
            },
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '邓老师'
            }
          ]
        },
        {
          id: '4',
          landImg: require('@/assets/taskImg/1.jpg'),
          title: '种植白菜',
          addres: '重庆市巴南区',
          scoolImg: require('@/assets/taskImg/1.jpg'),
          scoolName: '重庆市渝中小学',
          scoolManager: '刘老师',
          update: '2天前',
          scoolMember: [
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '马老师'
            },
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '罗老师'
            },
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '何老师'
            },
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '宋老师'
            },
            {
              img: require('@/assets/taskImg/1.jpg'),
              name: '邓老师'
            }
          ]
        }
      ]

    }
  },
  methods: {
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
.el-card{
  width: 48%;
  margin: 1%;
  float:left;
  height: 343px;
}
.el-card .link {
  padding: 0;
}
.el-card .left {
  width: 50%;
  background-color: lightcyan;
}
.el-card .left img {
  width: 100%;
  height: 100%;
  border-radius: 11px;
  object-fit: cover;
}
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
  margin-top: 10px;
}

.el-card .right .center img {
  width: 63px;
  height: 63px;
  border-radius: 999px;
}
.el-card .right .center .center_info {
  font-weight: 500;
  opacity: 1;
}
.el-card .right .center .scoolName {
  width: 179px;
  height: 26px;
  font-size: 18px;
  line-height: 43px;
   font-weight: 500;
  color: #666666;
}
.el-card .right .center .scoolManager {
  width: 51px;
  height: 17px;
  font-size: 15px;
  line-height: 29px;
  color: #666666;
}

.el-card .right .center .update {
  width: 43px;
  height: 17px;
  font-size: 15px;
  font-weight: 400;
  line-height: 29px;
  color: #999999;
}
.center_down {
  display: flex;
  flex-wrap: wrap;
  font-size: 9px;
  font-weight: 200;
  text-align: center;
}

.center_down .members {
  padding-right: 2px;
  position: relative;
  /* background-color: lightgreen; */
  /* height: 50px; */
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
  right: 7%;
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
</style>
