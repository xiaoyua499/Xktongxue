import service from "../index";

//获取天气数据
export function getWeather(){
  return service({
    methods: 'get',
    url: '/free/day',
    headers: {},
    params: {
      appid: '38665177', // 账号ID
      appsecret: 'Vx5xzDw0', // 账号密钥
      cityid: null, // 城市编号,不要带CN, 以下参数3选1，当前以西湖区举例
      city: '辽宁沈阳', // 城市名称,不要带市和区
      ip: null, // IP地址
      callback: 0, // jsonp方式
    },
  })
}