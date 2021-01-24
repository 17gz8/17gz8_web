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
    <!-- 2.列表数据 -->
    <nuxt-child />
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 导航栏部分变量
      listArray: ['发起中', '实验中', '已完成'],
      currentIndex: 0
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
      // this.$emit('current-index')
    },
    // 2.监听tab事件（与浏览器自带的tab事件冲突）
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
