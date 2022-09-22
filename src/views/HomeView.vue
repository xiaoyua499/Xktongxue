<template>
  <div class="home">
    <div class="top">
      <Weather />
      <Swipe class="swipe" />
    </div>
    <div class="bottom">
      <FunBar />
      <MyClass />
      <TieBa />
    </div>
  </div>
</template>

<script>
import MyClass from '@/components/Home/MyClass.vue';
import Weather from '@/components/Home/Weather.vue';
import Swipe from '@/components/Home/Swipe.vue';
import FunBar from '@/components/Home/FunBar.vue';
import TieBa from '@/components/Home/TieBa.vue';
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { MyClass, Weather, Swipe, FunBar, TieBa }
}
</script>

<style lang="less" scoped>
.home {
  position: relative;
  height: 12.34rem;

  &:after {
    content: " ";
    position: absolute;
    top: 1.14rem;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 1rem;
    border-radius: 50%;
    background-color: #6484cf;
  }

  // padding: 0 .2rem;
  .top {
    position: relative;
    height: 10%;
    padding: .2rem;
    background-color: #6484cf;

    .swipe {
      position: absolute;
      top: .9rem;
      left: 1 0rem;
      width: 95%;
      // height: 80%;
      z-index: 999;
    }
  }


  .bottom {
    height: 90%;
    padding: .2rem;
    padding-top: 2.1rem;
    background-color: rgb(240, 236, 236);
  }
}
</style>
