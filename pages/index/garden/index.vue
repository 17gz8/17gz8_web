<template>
  <div class="container">
    <el-card v-for="(item,index) in gardens" :key="index">
      <nuxt-link :to="`/garden/${item.id}`">
        <div>
          <p>{{ item.name }}</p>
        </div>
      </nuxt-link>
    </el-card>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  // asyncData({ res, error }) {
  //   return axios
  //     .get('http://localhost:3001/toplist/detail')
  //     .then((res) => {
  //       // console.log('res', res.data.list)
  //       return { arr: res.data.list }
  //     })
  //     .catch((error) => {
  //       // console.log('error', error)
  //       return error
  //     })
  // },
  data () {
    return {
      gardens: [
        { id: '1', name: '菜园1', src: '/garden/1' },
        { id: '2', name: '菜园2', src: '/garden/2' },
        { id: '3', name: '菜园3', src: '/garden/3' },
        { id: '4', name: '菜园4', src: '/garden/4' }
      ]
    }
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
