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
  components: { MyClass, Weather, Swipe, FunBar,  TieBa }
}
</script>

<style lang="less" scoped>
.home {
  position: relative;
  height: 617px;

  &:after {
    content: " ";
    position: absolute;
    top: 57px;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 50px;
    border-radius: 50%;
    background-color: #6484cf;
  }

  // padding: 0 10px;
  .top {
    position: relative;
    height: 10%;
    padding: 10px;
    background-color: #6484cf;

    .swipe {
      position: absolute;
      top: 45px;
      left: 1 0px;
      width: 95%;
      // height: 80%;
      z-index: 999;
    }
  }


  .bottom {
    height: 90%;
    padding: 10px;
    padding-top: 105px;
    background-color: rgb(240, 236, 236);
  }
}
</style>
