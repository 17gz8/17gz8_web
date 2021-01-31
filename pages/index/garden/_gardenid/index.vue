<template>
  <div class="container">
    <div class="warp">
      <h3><span> 菜园{{ gardenid }}</span></h3>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item,index) in fields" :key="index">
          <el-card v-for="(card,index1) in item" :key="index1">
            <nuxt-link :to="`/garden/${gardenid}/${item.id}`">
              <div>
                <p>{{ card.name }}</p>
              </div>
            </nuxt-link>
          </el-card>
        </el-carousel-item>
      </el-carousel>
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
      fields: [[
        { id: '1', name: '菜地1' },
        { id: '2', name: '菜地2' },
        { id: '3', name: '菜地3' }
      ],
      [
        { id: '1', name: '菜地1' },
        { id: '2', name: '菜地2' },
        { id: '3', name: '菜地3' }
      ],
      [
        { id: '1', name: '菜地1' },
        { id: '2', name: '菜地2' },
        { id: '3', name: '菜地3' }
      ],
      [
        { id: '1', name: '菜地1' },
        { id: '2', name: '菜地2' },
        { id: '3', name: '菜地3' }
      ]
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
  border-left: 5px solid rgb(233, 18, 72)
}
.el-card{
  width: 31%;
  margin: 1%;
  float:left;

}
</style>
