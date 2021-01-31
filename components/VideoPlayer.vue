<template>
  <div>
    <video ref="videoNode" class="video-js vjs-default-skin vjs-big-play-centered">抱歉，您的浏览器不支持</video>
  </div>
</template>

<script>
import videojs from 'video.js'
// 播放器中文，不能使用.js文件
import videozhCN from 'video.js/dist/lang/zh-CN.json'
// 样式文件注意要加上
import 'video.js/dist/video-js.css'
export default {
  props: {
    options: {
      type: Object,
      default () {
        return {
          autoplay: false, // 自动播放
          language: 'zh-CN',
          controls: true, // 控制条
          preload: 'auto', // 自动加载
          errorDisplay: true, // 错误展示
          fluid: true, // 跟随外层容器变化大小，跟随的是外层宽度
          width: '1200px',
          height: '918px',
          // controlBar: false,  // 设为false不渲染控制条DOM元素，只设置controls为false虽然不展示，但是存在
          // textTrackDisplay: false,  // 不渲染字幕相关DOM
          userActions: {
            hotkeys: true // 是否支持热键
          },
          notSupportedMessage: '此视频暂无法播放，请稍后再试',
          techOrder: ['html5'], // 定义Video.js技术首选的顺序
          sources: [
            {
              src: 'https://video.pearvideo.com/mp4/adshort/20210130/cont-1718696-15593963_adpkg-ad_hd.mp4',
              type: 'video/mp4'
            }
          ]
        }
      }
    }
  },
  data () {
    return {
      player: null
    }
  },
  // 初始化播放器
  mounted () {
    this.player = videojs(
      this.$refs.videoNode,
      this.options,
      function onPlayerReady () {
        videojs.log('Your player is ready!')
      }
    )
    videojs.addLanguage('zh-CN', videozhCN)
  },
  beforeDestroy () {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>

<style scoped>
.video-js{
  border-radius:2%;
}
</style>
