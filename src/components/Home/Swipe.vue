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
  padding: 10px;
  height: 124px;
  background-color: #fff;
  border: 2px solid #5d7dc5;
  border-radius: 20px;

  .my-swipe {
    border-radius: 15px;

    .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 100px;
      text-align: center;
      background-color: #39a9ed;
      // border-radius: 15px;
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
  top: -15px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;

  .Bottom1 {
    margin-right: 220px;
    height: 20px;
    width: 15px;
    background-color: #5d7dc5;
    border-radius: 3px;
  }

  .Bottom2 {
    margin: 0;
    height: 20px;
    width: 15px;
    background-color: #5d7dc5;
    border-radius: 3px;
  }

}
</style>