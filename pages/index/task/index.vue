<template>
  <div class="container">
    <TaskList />
  </div>
</template>

<script>
// import TaskList from 'components/TaskList.vue'
export default {
  // component: {
  //   TaskList
  // },

  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    // 切换标注
    // tabClick (type) {
    //   // this.$refs[type.name].getList()
    // }
  }
}
</script>

<style  scoped></style>
