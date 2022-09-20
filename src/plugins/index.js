import Vue from 'vue';
//引入Vant组件库
import { Button, Tabbar, TabbarItem, NavBar, Col, Row, Popup, Form, Field, Swipe, SwipeItem } from 'vant';
let plugins = [Button, Tabbar, TabbarItem, NavBar, Col, Row, Popup, Form, Field, Swipe, SwipeItem]
export default function getVant() {
  plugins.forEach((item) => {
    return Vue.use(item)
  })
}