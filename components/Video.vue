<template>
  <div class="video">
    <video ref="myvideo">
      <source :src="src" type="video/mp4">
    </video>
    <div class="centerPlay" @click="play()">
      播放
    </div>
  </div>
</template>

<script>
export default {
  // 视频的src
  props: {
    src: {
      type: String,
      default: 'https://video.pearvideo.com/mp4/adshort/20210125/cont-1717968-15587808_adpkg-ad_hd.mp4'
    }
  },
  data () {
    return {
      myVideo: null
    }
  },
  mounted () {
    this.myVideo = this.$refs.myVideo
  },
  methods: {
    play () {
      this.myVideo.play()
    }
  }
}
</script>

<style>

</style>
