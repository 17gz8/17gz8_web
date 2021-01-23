<template>
  <div>
    <el-card v-for="(item,index) in tasks" :key="index">
      <nuxt-link :to="`/task/${item.id}`">
        <div>
          <p>{{ item.name }}</p>
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
        { id: '1', name: '任务1', src: '/task/1' },
        { id: '2', name: '任务2', src: '/task/2' },
        { id: '3', name: '任务3', src: '/task/3' },
        { id: '4', name: '任务4', src: '/task/4' }
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

}

</style>
