<template>
  <div class="times">
    <div class="time-bottom">
      <p class="week">
        <span v-for="(item,index) of weeks" :key="index">{{item}}</span>
      </p>
      <p class="day">
        <span v-for="(item,index) of months" :key="index">
          <span class="dayitem"
            :class="{'fontcolor':item.state,'finish':item.date==flag &amp;item.state,'test':!item.state}" tapmode=""
            @click="getIndex(index,item.date)">
            {{item.showDate}}
          </span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentWeek',
  data() {
    return {
      weeks: [],
      months: [],
      day: 0,
      date: 0,
      month: 0,
      d: 0,
      today: '',
      flag: 0,
    }
  },
  created() {
    this.d = new Date(); //当前日期
    this.day = this.d.getDay(); //周几
    this.date = this.d.getDate(); //几号
    this.month = this.d.getMonth() + 1; //月
    var timestr = this.month + "月" + this.date + "日";
    this.today = timestr;
    // this.flag = this.date;
    this.flag = this.formatDate(this.d);
    this.getResult(this.d);
    var ctime = parseInt(this.d.getFullYear().toString() + this.month.toString() + this.date.toString());
  },
  methods: {
    getMonDate: function (test) {
      if (test.getDay() == 1)
        return test;
      if (test.getDay() == 0)
        test.setDate(test.getDate() - 6);
      else
        test.setDate(test.getDate() - test.getDay() + 1);
      return test;
    },
    // 0-6转换成中文名称
    getDayName: function (day) {
      var day = parseInt(day);
      if (isNaN(day) || day < 0 || day > 6)
        return false;
      var weekday = ["日", "一", "二", "三", "四", "五", "六"];
      return weekday[day];
    },
    getResult: function (time, a) {
      var timeobj = this.getMonDate(time); // timeobj是当前星期一的日期对象
      var temTime = new Date(timeobj.getTime()); //当前当前星期一对象转换成时间戳
      var arr = [];
      var week = [];
      var dayss = new Date();
      for (var i = 0; i < 7; i++) {
        var time1 = new Date(temTime.getTime());
        var time2 = dayss.getTime();
        var result = time1 <= time2;
        var ymd = this.formatDate(temTime);
        // arr.push({'dayss':temTime.getDate(),'daystate':false}); //一周几号
        arr.push({
          'date': ymd,
          'state': result,
          'showDate': temTime.getDate()
        });
        week.push(this.getDayName(temTime.getDay())); //一周 周几
        temTime.setDate(temTime.getDate() + 1);
      }
      this.weeks = week;
      this.months = arr;
      // console.log(this.months);

      if (a == 'left') {
        // $(".dayitem")NaNpxoveClass("finish");
        this.flag = this.months[this.months.length - 1].date;
        var temp1 = temp;
        temp1.setDate(temp1.getDate() - temp1.getDay() + 7);
        this.getTimes(temp1);
      } else if (a == 'right') {
        // $(".dayitem")NaNpxoveClass("finish");
        this.flag = this.months[0].date;
        var temp1 = temp;
        this.getTimes(temp1);
      }
    },
    getTimes: function (temp2) {
      var m = temp2.getMonth() + 1;
      var d = temp2.getDate();
      if (m < 10) {
        m = "0" + m;
      }
      if (d < 10) {
        d = "0" + d;
      }
      this.today = m + "月" + d + "日";
    },
    beforeDate: function (action) {
      temp.setDate(temp.getDate() - 7);
      this.getResult(temp, action);
    },
    nextDate: function (action) {
      temp.setDate(temp.getDate() + 7);
      this.getResult(temp, action);
    },
    formatDate: function (date) {
      var year = date.getFullYear();
      var months = date.getMonth() + 1;
      var month = (months < 10 ? '0' + months : months).toString();
      var day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()).toString();
      return year + month + day;
    },
    getIndex: function (idx, item) {
      this.flag = this.months[idx].date;
      var year = item.substring(0, 4);
      var month = item.substring(4, 6);
      var day = item.substring(6, 8);
      var str = month + "月" + day + "日";
      this.today = str;
      // console.log(item);
      // getReportList(year + '-' + month + '-' + day);
    }
  }
}
</script>

<style scoped lang="less">
.times {
  width: 100%;
  text-align: center;

  .time-bottom {
    .week {
      width: 100%;
      text-align: left;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;

      span {
        text-align: center;
        flex: 1;
        color: #8A8A8A;
        font-size: .32rem;
      }
    }
  }

  .day {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;

    span {
      flex: 1;
    }

    .dayitem {
      width: .4rem;
      height: .4rem;
      border-radius: 50%;
      color: #838385;
      font-size: .32rem;
      display: inline-block;
      line-height: .4rem;
      text-align: center;
    }
  }
}


.finish {
  background: #8ACBAD;
  color: #fff !important;
}

.fontcolor {
  color: #191919;
}

.test {
  pointer-events: none;
}

</style>