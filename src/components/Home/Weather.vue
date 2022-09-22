<template>
  <div  class="weather">
    <div class="weatherLeft">
      <div class="date"> {{ weather.date }} </div>
      <div class="week">{{weather.week}}</div>
    </div>
    <div class="weatherRight">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="weather.wea_img"></use>
      </svg>
      <div class="wea">{{ weather.wea }}</div>
      <div class="tem">{{ weather.tem }} ℃</div>
    </div>
  </div>
</template>

<script>
import { getWeather } from '@/request/api/weather'
export default {
  name: 'Weather',
  data() {
    return {
      //天气数据
      weather: {
        // city: "沈阳",
        // date: "2022-09-19",
        // tem: "21",
        // tem_day: "20",
        // wea: "多云",
        // wea_img: "yun",
        // week: "星期一",
        // win: "北风"
      }
    }
  },
  created() {
    this.getWeathers()
  },
  methods: {
    //获取进入天气
    async getWeathers() {
      let res = await getWeather()
      if (res.errcode === 100) {
        res = JSON.parse(sessionStorage.getItem('weather'))
      } else {
        sessionStorage.setItem('weather', JSON.stringify(res))
      }
      this.weather = res
      let icon = this.weather.wea_img
      this.getWeatherIcons(icon)
      // console.log(this.weather);
    },
    //获取当日天气对应的Icon图标
    getWeatherIcons(icon) {
      switch (icon) {
        //多云
        case 'yun':
          this.weather.wea_img = '#icon-tianqi-duoyun'
          // console.log(this.weather.wea_img);
          break;
        //雪
        case 'xue':
          this.weather.wea_img = '#icon-tianqi-daxue'
          break;
        //雷
        case 'lei':
          this.weather.wea_img = '#icon-tianqi-leizhenyu'
          break;
        //沙尘
        case 'shachen':
          this.weather.wea_img = '#icon-shachenbao'
          break;
        //雾
        case 'wu':
          this.weather.wea_img = '#icon-tianqi-wu'
          break;
        //冰雹
        case 'bingbao':
          this.weather.wea_img = '#icon-tianqi-bingbao'
          break;
        //雨
        case 'yu':
          this.weather.wea_img = '#icon-tianqi-dayu'
          break;
        //阴
        case 'yin':
          this.weather.wea_img = '#icon-tianqi-yintian'
          break;
        //晴
        case 'qing':
          this.weather.wea_img = '#icon-tianqi-qing'
          break;
      }
    }
  },
}
</script>

<style lang="less" scoped>
.weather {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  // margin-top: .2rem;
  height: .4rem;
  // background-color: rgb(240, 236, 236);
  border-radius: .2rem;
  color: #fff;

  .weatherLeft {
    display: flex;
    justify-content: center;
    align-items: baseline;

    .week {
      height: 100%;
      margin-left: .1rem;
      font-size: .24rem;
    }
  }

  .weatherRight {
    display: flex;
    justify-content: center;
    align-items: baseline;

    .icon {
      position: absolute;
      top: -0.1rem;
      left: 5rem;
      width: .6rem;
      height: .6rem;
    }

    .wea {
      margin-left: .7rem;
      margin-right: .1rem;
      height: 100%;
    }

    .tem {
      height: 100%;
    }
  }

}
</style>

