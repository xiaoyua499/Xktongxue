<template>
  <div class="home">
    <Weather />
    <MyClass />
  </div>

</template>

<script>
import MyClass from '@/components/Home/MyClass.vue';
import Weather from '@/components/Home/Weather.vue';
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { MyClass, Weather }
}
</script>

<style lang="less" scoped>
.home{
  padding: 0 10px;
}
</style>
