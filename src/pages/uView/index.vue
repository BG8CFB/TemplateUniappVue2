<template>
  <div>
    <u-button type="error">test1</u-button>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      list: [{
        text: '点赞',
        color: 'blue',
        fontSize: 28
      }, {
        text: '分享'
      }, {
        text: '评论'
      }],
      show: true
    }
  }
}
</script>

<style scoped>

</style>
