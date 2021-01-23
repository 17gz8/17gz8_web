<template>
  <div class="container">
    菜地{{ fieldid }}详情
  </div>
</template>

<script>
export default {
  data () {
    return {
      fieldid: ''
    }
  },
  created () {
    this.fieldid = this.$route.params.fieldid
  }

}
</script>

<style scoped>

</style>
