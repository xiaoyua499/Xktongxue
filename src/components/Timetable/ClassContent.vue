<template>
  <div class="Class">
    <!-- 月份与上下课时间 -->
    <div class="left">
      <ul>
        <li>{{month}}月</li>
        <li v-for="(item,index) in schedule" :key="index">
          <p>{{item.classNum}}</p>
          <span>{{item.timeStarts}}</span>
          <span>{{item.timeEnds}}</span>
        </li>
      </ul>
    </div>
    <div class="right">
      <!-- 日期与对应星期 -->
      <div class="date">
        <ul>
          <CurrentWeek />
        </ul>
      </div>
      <!-- 课程内容 -->
      <div class="content">
        <van-row class="row" v-for="(item,i1) in classDetails" :key="i1">
          <div class="classBox" v-for="(detail,i2) in item" :key="i2" @click="getIndex(i1,i2)"
            :style="{'height':detail.classTime?'25%':'12.5%'}">
            <div class="col" :style="{'visibility':detail.isHave?'visible':'hidden'}" ref="class">
              <div class="bgc" :style="randomRgb()">
                <p>{{detail.className}}</p>
                <span>@{{detail.classroom}}</span>
              </div>
            </div>
          </div>
        </van-row>
      </div>
    </div>
    <!-- 弹出层 -->
    <van-popup v-model="show" class="popup">
      <ClassConfigure :updataOldDetail='updataOldDetail' :updataShow='updataShow' />
    </van-popup>
  </div>
</template>
      
<script>
import { mapMutations } from 'vuex';
import ClassConfigure from './ClassConfigure.vue';
import CurrentWeek from './CurrentWeek.vue';
export default {
  name: "ClassConcent",
  components: { ClassConfigure, CurrentWeek },
  data() {
    return {
      show: false,
      //上下课时间与对应节数
      schedule: [
        {
          classNum: "1",
          timeStarts: "08:15",
          timeEnds: "09:00"
        },
        {
          classNum: "2",
          timeStarts: "09:05",
          timeEnds: "09:50"
        },
        {
          classNum: "3",
          timeStarts: "10:15",
          timeEnds: "11:00"
        },
        {
          classNum: "4",
          timeStarts: "11:05",
          timeEnds: "11:50"
        },
        {
          classNum: "5",
          timeStarts: "13:20",
          timeEnds: "14:05"
        },
        {
          classNum: "6",
          timeStarts: "14:10",
          timeEnds: "14:55"
        },
        {
          classNum: "7",
          timeStarts: "15:20",
          timeEnds: "16:05"
        },
        {
          classNum: "8",
          timeStarts: "16:10",
          timeEnds: "16:55"
        },
      ],
      //课程详情
      classDetails: [
        [
          {
            //是否有课
            isHave: false,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: false,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: true,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: true,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
        ],
        [
          {
            //是否有课
            isHave: true,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: false,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: true,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: false,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
        ],
        [
          {
            //是否有课
            isHave: false,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: false,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: false,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: true,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
        ],
        [
          {
            //是否有课
            isHave: false,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: true,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: true,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: false,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
        ],
        [
          {
            //是否有课
            isHave: true,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: true,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: true,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: true,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
        ],
        [
          {
            //是否有课
            isHave: false,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: false,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: false,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: false,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
        ],
        [
          {
            //是否有课
            isHave: false,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: false,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: true,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
          {
            //是否有课
            isHave: true,
            //课程时长
            classTime: true,
            //课程开始节数
            classBegin: "1",
            //课程名称
            className: "C语言",
            //任课教师
            teacher: "张晓",
            // 教室
            classroom: "A301",
            //开始时间
            timeStarts: "08:15",
            //结束时间
            timeEnds: "09:00"
          },
        ],
      ],
      //课程更新后的数据
      newClassDetails: '',
      //课程对应的行与列
      index1: '',
      index2: '',
      //获取当前月
      month: '',
      //获取当日课程
      currentClass:[]
    };
  },
  mounted() {
    this.randomRgb();
    this.getDate()
  },
  watch: {
    //监视数据是否改变
    newClassDetails(newValue) {
      this.classDetails[this.index1][this.index2] = newValue
    }
  },
  methods: {
    ...mapMutations('Home', ['getCurrentClass']),
    //开启弹出层，获取对应元素坐标
    getIndex(i1, i2) {
      this.index1 = i1
      this.index2 = i2
      this.show = true
    },
    //更新数据
    updataOldDetail(value) {
      this.newClassDetails = value
    },
    //关闭弹出层
    updataShow() {
      this.show = false
    },
    //随机背景颜色
    randomRgb() {
      let R = Math.floor(Math.random() * 130 + 110);
      let G = Math.floor(Math.random() * 130 + 110);
      let B = Math.floor(Math.random() * 130 + 110);
      // console.log(R, G, B)
      return {
        background: "rgb(" + R + "," + G + "," + B + ", .5)"
      };
    },
    //获取当前日期与当日课程
    getDate() {
      let date = new Date()
      this.month = date.getMonth() + 1 //当前月
      let day = date.getDay()
      if (day != 0) {
        day = day - 1
      } else {
        day = 6
      }
      this.classDetails[day].forEach((item) => {
        if (item.isHave) {
          this.currentClass.push(item)
        }
      })
      this.getCurrentClass(this.currentClass)
      // console.log(this.currentClass);
    }
  },

}
</script>

<style lang="less" scoped>
.Class {
  height: 11.44rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  // background-color: pink;

  .left {
    width: 10%;
    height: 100%;
    // background-color: blue;

    ul {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      height: 100%;

      li {
        height: 1.14rem;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;

        p {
          margin: 0;
        }

        span {
          font-size: .24rem;
        }
      }
    }
  }

  .right {
    width: 90%;
    height: 100%;

    .date {
      height: 10%;
      background-color: #fff;

      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;

        li {
          p {
            margin: 0;
          }
        }
      }
    }

    .content {
      display: flex;
      justify-content: space-evenly;
      height: 90%;
      width: 100%;

      .row {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;

        .classBox {
          box-sizing: border-box;
          height: 25%;
          width: 100%;
          padding: .04rem;


          .col {
            height: 100%;
            width: 100%;


            .bgc {
              box-sizing: border-box;
              display: flex;
              flex-flow: column;
              justify-content: center;
              font-size: .24rem;
              height: 100%;
              width: 100%;

              p {
                margin: 0;
                word-wrap: break-word;
              }
            }
          }
        }
      }
    }
  }

  .popup {
    border-radius: 5%;
  }
}
</style>