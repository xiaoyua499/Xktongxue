<template>
  <div class="todayCourse">
    <div class="TitleTop">
      <p class="courseTitle">今日课程</p>
      <span class="ClassNum">{{MyClass.length}}门课</span>
    </div>
    <div class="course" v-for="(item,index) in MyClass" :key="index" v-show="show">
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
    <div class="course" v-show="!show">
      <h1 class="none">今天没有课啦！！！</h1>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "MyClass",
  data() {
    return {
      //今日课表
      MyClass: [],
      //是否显示课表
      show: true
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
      let myClass = JSON.parse(sessionStorage.getItem("CurrentClass"));
      if (myClass == null) {
        this.show = false
        this.MyClass.length = 0
      } else {
        this.MyClass = myClass
      }
      console.log(this.MyClass);
    },
  },
}
</script>

<style lang="less" scoped>
.todayCourse {
  box-sizing: border-box;
  margin-top: .2rem;
  padding: .2rem;
  width: 100%;
  border-radius: 5%;
  background-color: #fff;

  .TitleTop {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .courseTitle {
      text-align: left;
      margin-bottom: .2rem;
      margin-top: 0;
      font-weight: 800;
    }

    .ClassNum {
      font-size: .24rem;
    }
  }


  .course {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .1rem;

    .courseTop {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: center;
      font-size: .24rem;
    }

    .courseContent {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .name {
        margin: 0;
        font-size: .32rem;
      }

      .teacher {
        margin-left: .1rem;
        font-size: .28rem;
      }
    }
    .none{
      margin: 20px auto;
    }
  }
}
</style>