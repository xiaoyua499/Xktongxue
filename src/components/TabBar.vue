<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">
      <router-link to="/">首页</router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="apps-o">
      <router-link to="/timetable">课程表</router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="bar-chart-o">
      <router-link to="/results">成绩</router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="friends-o">
      <router-link to="/user">我的</router-link>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {
      active: 0,
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
