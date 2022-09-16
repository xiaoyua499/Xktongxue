import Vue from 'vue';
//引入Vant组件库
import { Button, Tabbar, TabbarItem } from 'vant';
let plugins = [Button, Tabbar, TabbarItem]
export default function getVant() {
  plugins.forEach((item) => {
    return Vue.use(item)
  })
}