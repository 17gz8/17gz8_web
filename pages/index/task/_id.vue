<template>
  <div class="container">
    <div class="task-head">
      <div class="task-text">
        <div class="task-text-container">
          <div class="task-text-title">
            <h2>{{ task.title }}</h2>
            <p>{{ task.position }}</p>
          </div>
          <div class="task-text-icon" />
        </div>
        <PersonInfo />
      </div>
      <div class="task-video" />
    </div>
    <div class="timeline" />
    <div class="task-info" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      task: {
        title: '播种豌豆',
        position: '希望小村菜地'
      }
    }
  }
}
</script>

<style  scoped></style>
