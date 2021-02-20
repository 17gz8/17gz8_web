<template>
  <div>
    <div :class="['navbar-warp',scoll>199?'on':'']">
      <Navbar />
    </div>
    <div v-for="item in arr" :key="item.id" style="margin-top:60px">
      <div v-if="$route.path===item.id" class="top-warp">
        <p style="font-size:30px;">
          {{ item.title }}
        </p>
        <p>{{ item.des }}</p>
      </div>
    </div>
    <nuxt-child />
  </div>
</template>

<script>

export default {
  data () {
    return {
      scoll: '',
      arr: [
        { id: '/task', title: '耕种实验', des: '耕种实验耕种实验耕种实验耕种实验耕种实验' },
        { id: '/garden', title: '菜园', des: '菜园菜园菜园菜园菜园菜园菜园菜园菜园' },
        { id: '/expert', title: '专家介绍', des: '专家介绍专家介绍专家介绍专家介绍专家介绍专家介绍' }
      ]
    }
  },
  computed: {

  },
  beforeMount () {
    window.addEventListener('scroll', this.getScoll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.getScoll)
  },
  methods: {
    getScoll () {
      this.scoll = `${document.documentElement.scrollTop}`
    }
  }
}
</script>

<style scope>
.navbar-warp{
  position: fixed;
  top:0;
  width:100%;
  z-index: 999;

  /* border-bottom: 1px solid lightgray; */
}
.on{
  border-bottom: 1px solid #ebebeb;
  box-shadow: 0px 2px 20px #f1f1f1;
}
.top-warp{
  /* z-index: 2000; */
  padding: 50px 0 0 10%;
  color:white;
  height:200px;
  background: url('/images/index/lunbo2.png') no-repeat center;

}
@media screen and (max-width: 700px) {

}

</style>
