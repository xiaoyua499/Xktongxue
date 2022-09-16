import Vue from 'vue';
//引入Vant组件库
import { Button } from 'vant';
let plugins = [Button]
export default function getVant() {
  plugins.forEach((item) => {
    return Vue.use(item)
  })
}