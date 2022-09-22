<template>
  <van-tabbar route>
    <van-tabbar-item icon="home-o" to="/">
      首页
    </van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/timetable">
      课程表
    </van-tabbar-item>
    <van-tabbar-item icon="bar-chart-o" to="/results">
      成绩
    </van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/user">
      我的
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'TabBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
