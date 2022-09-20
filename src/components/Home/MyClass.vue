<template>
  <div class="todayCourse">
    <p class="courseTitle">今日课程</p>
    <div class="course" v-for="(item,index) in MyClass" :key="index">
      <div class="courseTop">
        <span class="starts">{{item.timeStarts}}</span>
        <span> | </span>
        <span class="ends">{{item.timeEnds}}</span>
      </div>
      <div class="courseContent">
        <h1 class="name">{{item.className}}</h1>
        <span class="teacher">{{item.teacher}}</span>
      </div>
      <div class="courseBottom">{{item.classroom}}</div>
    </div>
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

<style lang="less" scoped>
.todayCourse {
  box-sizing: border-box;
  margin-top: 30px;
  padding: 10px;
  width: 100%;
  border-radius: 5%;
  background-color: #fff;

  .courseTitle {
    text-align: left;
    margin-bottom: 10px;
    margin-top: 0;
  }

  .course {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;

    .courseTop {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
    }

    .courseContent {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .name {
        margin: 0;
        font-size: 16px;
      }
      .teacher{
        margin-left: 5px;
        font-size: 14px;
      }
    }
  }
}
</style>