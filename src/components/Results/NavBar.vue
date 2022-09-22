<template>
  <div class="NavBar">
    <van-nav-bar title="成绩查询" @click-left="onClickLeft" fixed placeholder>
      <template #left>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhuijiantou"></use>
        </svg>
      </template>
      <template #right>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo1"></use>
        </svg>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  props:['goHome'],
  name: 'NavBar',
  methods: {
    onClickLeft() {
      this.$router.go(-1)
      this.goHome()
    },
  },
};
</script>

<style lang="less" scoped>
.NavBar {
  .icon {
    height: .5rem;
    width: .5rem;
  }
}
</style>