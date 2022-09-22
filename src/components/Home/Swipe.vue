<template>
  <div>
    <div class="Swipe">
      <van-swipe class="my-swipe" :autoplay="3000" :height="100" indicator-color="white">
        <van-swipe-item>
          <img src="@/assets/swipe/1.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/swipe/2.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/swipe/3.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/swipe/4.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/swipe/5.jpg" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <span class="swipeBottom">
      <div class="Bottom1"></div>
      <div class="Bottom2"></div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Swipe',
  data() {
    return {
    }
  },
}
</script>

<style lang="less" scoped>
.Swipe {
  position: relative;
  box-sizing: border-box;
  padding: .2rem;
  height: 2.48rem;
  background-color: #fff;
  border: .04rem solid #5d7dc5;
  border-radius: .4rem;

  .my-swipe {
    border-radius: .3rem;

    .van-swipe-item {
      color: #fff;
      font-size: .4rem;
      line-height: 2rem;
      text-align: center;
      background-color: #39a9ed;
      // border-radius: .3rem;
      z-index: 999;
      img{
        height: 100%;
        width: 100%;
      }
    }
  }
}

.swipeBottom {
  position: relative;
  top: -0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;

  .Bottom1 {
    margin-right: 4.4rem;
    height: .4rem;
    width: .3rem;
    background-color: #5d7dc5;
    border-radius: .06rem;
  }

  .Bottom2 {
    margin: 0;
    height: .4rem;
    width: .3rem;
    background-color: #5d7dc5;
    border-radius: .06rem;
  }

}
</style>