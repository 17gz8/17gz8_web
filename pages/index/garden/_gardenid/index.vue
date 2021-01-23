<template>
  <div class="container">
    <div class="warp">
      <h3><span> 菜园{{ gardenid }}</span></h3>
      <el-card v-for="(item,index) in fields" :key="index">
        <nuxt-link :to="`/garden/${gardenid}/${item.id}`">
          <div>
            <p>{{ item.name }}</p>
          </div>
        </nuxt-link>
      </el-card>
    </div>
    <div class="warp">
      <h3><span>菜园任务</span> </h3>
      <div>
        具体布局
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gardenid: '',
      fields: [
        { id: '1', name: '菜地1' },
        { id: '2', name: '菜地2' },
        { id: '3', name: '菜地3' }
      ]
    }
  },
  created () {
    this.gardenid = this.$route.params.gardenid
  }

}
</script>

<style  scoped>
.warp{
  background-color:lightgray;
  min-height:300px;
  margin: 1%;
}
h3 span{
  padding: 2px 10px;
  border-left: 5px solid rgb(124, 146, 245)
}
.el-card{
  width: 31%;
  margin: 1%;
  float:left;

}
</style>
