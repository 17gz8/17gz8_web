<template>
  <div class="task">
    <!-- 1.列表导航 -->
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
    <nuxt-child />
    <!-- 2. 列表数据 -->
    <!-- <list :list="listItem" /> -->
  </div>
</template>

<script>
// import list from '../../components/TaskComponents/list.vue'
export default {
  // components: { list },
  data () {
    return {
      // 导航栏部分变量
      listArray: ['发起中', '实验中', '已完成'],
      currentIndex: 0,
      // url: require('@/assets/taskImg/1.jpg')
      // 列表变量
      listItem: [
        {
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
  mounted () {
    this.tabEvent()
  },
  methods: {
    // 1.切换列表导航事件
    listClick (index) {
      // alert('我是第' + index + '个')
      this.currentIndex = index
      this.$emit('currentIndex', this.currentIndex)
    },
    // 2.监听tab事件（没有解决全局监听）
    tabEvent () {
      document.addEventListener('keydown', (e) => {
        const keyName = e.key
        // alert(keyName)
        if (keyName === 'Tab') {
          this.currentIndex += 1
          this.currentIndex = this.currentIndex % 3
        }
      })
    }
  }
}
</script>

<style  scoped>
.task {
  width: 100%vh;
  /* background-color: lightblue; */
  margin: 2% 3% 0;
}
/* 导航栏开始 */
.nav {
  margin-left: 4%;
}
.nav .nav_items {
  display: flex;
  align-items: center;
}

.nav .nav_items .nav_items_line {
  width: 6px;
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
  line-height: 42px;
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
</style>
