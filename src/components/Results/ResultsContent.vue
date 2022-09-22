<template>
  <div class="resulstContent">
    <NavBar :goHome='goHome'/>
    <div v-show="!show">
      <img class="img" src="@/assets/Results/团队-18.png" alt="">
      <div class="content">
        <div class="admin" @click="showPopup()">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shuji"></use>
          </svg>
          <p>教务系统成绩查询</p>
        </div>
        <div class="other">
          <div class="public CET">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-siliujichaxun"></use>
            </svg>
            <p>英语四六级</p>
          </div>
          <div class="public mandarin">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-putonghua"></use>
            </svg>
            <p>普通话水平测试</p>
          </div>
          <div class="public computer">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jisuanjidengji"></use>
            </svg>
            <p>全国计算机等级考试</p>
          </div>
          <div class="public examination">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-chengjichaxun-01"></use>
            </svg>
            <p>高考成绩查询</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 成绩详情页面 -->
    <router-view v-show="show" />
  </div>
</template>

<script>
import ResultDetails from './ResultDetails.vue';
import NavBar from './NavBar.vue';
export default {
  name: "ResultsContent",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
      this.$router.push({
        name: 'ResultDetails'
      })
    },
    goHome(){
      this.show = false;
    }
  },
  components: { ResultDetails, NavBar }
}
</script>

<style lang="less" scoped>
.resulstContent {
  .icon {
    width: 40px;
    height: 40px;
  }

  .img {
    width: 100%;
    height: 150px;
  }

  .content {
    padding: 10px;

    .admin {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 75px;
      background-color: #e9ecff;
      border-radius: 10px;

      .icon {
        width: 40px;
        height: 40px;
      }
    }

    .other {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 200px;

      .public {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
        width: 170px;
        height: 100px;
        border-radius: 10px;

        p {
          margin: 0;
        }
      }

      .CET {
        background-color: #d6f7ff;
      }

      .mandarin {
        background-color: #ffcbd0;

      }

      .computer {
        background-color: #7baef0;
      }

      .examination {
        background-color: #70dbd2;
      }
    }

  }
}
</style>