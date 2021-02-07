<template>
  <div class="text-box">
    <div ref="textBox" :class="['txt', { 'over-hidden': !unfold }]">
      <span ref="spanBox" :style="fontStyle">{{ content }}</span>
    </div>
    <div v-if="ifOver" class="btn" @click="unfold = !unfold">
      {{ unfold ? '收起' : '展开' }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'TextView',
  props: {
    content: {
      type: String,
      default: ''
    },
    fontStyle: {
      type: Object,
      default () {
        return {
          'font-size': '24px',
          'font-weight': 400,
          'line-height': '41px',
          color: '#999999'
        }
      }
    }
  },
  data () {
    return {
      ifOver: false, // 文本是否超出三行，默认否
      unfold: false // 文本是否是展开状态 默认为收起
    }
  },
  mounted () {
    // 判断是否显示展开收起按钮
    this.ifOver = this.$refs.spanBox.offsetHeight > this.$refs.textBox.offsetHeight
  }
}
</script>
<style scoped>
.txt {
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
}
.over-hidden {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.btn {
  color: red;
  float: right;
  cursor: pointer;
}
</style>
