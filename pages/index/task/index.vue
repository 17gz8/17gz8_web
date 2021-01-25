<template>
  <div class="container">
    <!-- 传入当前导航栏的下标来决定[加入任务]模块是否显示 -->
    <TaskList :show-index="currentIndex" />
  </div>
</template>

<script>
// import TaskList from 'components/TaskList.vue'
export default {
  props: {
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  // component: {
  //   TaskList
  // },
  methods: {
    // 切换标注
    // tabClick (type) {
    //   // this.$refs[type.name].getList()
    // }
  }
}
</script>

<style  scoped></style>
