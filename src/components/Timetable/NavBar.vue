<template>
  <div class="NavBar">
    <van-nav-bar title="课程表" @click-left="onClickLeft" fixed placeholder >
      <template #left>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </template>
      <template #right>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jia-fangkuang"></use>
        </svg>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  methods: {
    onClickLeft() {
      Toast('设置');
    },
  },
};
</script>

<style lang="less" scoped>
.NavBar{
  .icon{
    height: 25px;
    width: 25px;
  }
}
</style>