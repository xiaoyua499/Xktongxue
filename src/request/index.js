import axios from "axios";

//创建axios实例
let service = axios.create({
  baseURL: 'https://tianqiapi.com',
  timeout: 3000,
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 如果开启 token 认证
  // if (serverConfig.useTokenAuthorization) {
  //   config.headers["Authorization"] = localStorage.getItem("token"); // 请求头携带 token
  // }
  // // 设置请求头
  if (!config.headers["content-type"]) { // 如果没有设置请求头
    if (config.method === 'post') {
      config.headers["content-type"] = "application/x-www-form-urlencoded"; // post 请求
      config.data = qs.stringify(config.data); // 序列化,比如表单数据
    } else {
      config.headers["content-type"] = "application/json"; // 默认类型
    }
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  let message = "";
  if (error && error.response) {
    switch (error.response.status) {
      case 302:
        message = "接口重定向了！";
        break;
      case 400:
        message = "参数不正确！";
        break;
      case 401:
        message = "您未登录，或者登录已经超时，请先登录！";
        break;
      case 403:
        message = "您没有权限操作！";
        break;
      case 404:
        message = `请求地址出错: ${error.response.config.url}`;
        break;
      case 408:
        message = "请求超时！";
        break;
      case 409:
        message = "系统已存在相同数据！";
        break;
      case 500:
        message = "服务器内部错误！";
        break;
      case 501:
        message = "服务未实现！";
        break;
      case 502:
        message = "网关错误！";
        break;
      case 503:
        message = "服务不可用！";
        break;
      case 504:
        message = "服务暂时无法访问，请稍后再试！";
        break;
      case 505:
        message = "HTTP 版本不受支持！";
        break;
      default:
        message = "异常问题，请联系管理员！";
        break;
    }
  }
  return Promise.reject(message);
});

export default service