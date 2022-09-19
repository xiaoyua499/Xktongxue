<template>

  <div class="todayCourse">
    今日课程
    <p v-for="(item,index) in MyClass" :key="index">
      {{item.className}}
    </p>
  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "MyClass",
  data() {
    return {
      MyClass: [],

    };
  },
  computed: {
    ...mapState("Home", ["CurrentClass"]),
  },
  created() {
    this.getMyClass();
  },
  methods: {
    //获取今日课表
    getMyClass() {
      this.MyClass = JSON.parse(sessionStorage.getItem("CurrentClass"));
      console.log(this.MyClass);
    },
  },
}
</script>

<style>

</style>