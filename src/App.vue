<script>
export default {
  onLaunch: function() {
    console.log('App Launch,当uni-app 初始化完成时触发（全局只触发一次）');
  },
  onShow: function() {
    console.log('App Show,当 uni-app 启动，或从后台进入前台显示');
  },
  onHide: function() {
    console.log('App Hide,当 uni-app 从前台进入后台');
  },
  onError: () => {
    console.log('App Error,当 uni-app 报错时触发.');
  },
  onUniNViewMessage: () => {
    console.log('App UniNViewMessage,对 nvue 页面发送的数据进行监听');
  },
  onUnhandledRejection: () => {
    console.log('App UnhandledRejection,对未处理的 Promise 拒绝事件监听函数');
  },
  onPageNotFound: () => {
    console.log('App PageNotFound,页面不存在监听函数')
  },
  onThemeChange: () => {
    console.log('APP ThemeChange,监听系统主题变化.')
  },
}
</script>

<style lang="scss">
/*引入uView基础样式*/
@import "uview-ui/index.scss";
/*每个页面公共css */
</style>
