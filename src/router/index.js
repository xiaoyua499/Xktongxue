import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/timetable',
    name: 'Timetable',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Timetable" */ '../views/TimetableView.vue'),
  },
  {
    path: '/results',
    name: 'Results',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Results" */ '../views/ResultsView.vue'),
    children: [
      {
        path: 'details',
        name: 'ResultDetails',
        component: () => import(/* webpackChunkName: "ResultDetails" */ '../views/ResultDetailsView.vue'),
        meta: {
          requireAuth: true //该路由需要登录
        }
      }
    ]
  },
  {
    path: '/user',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "User */ '../views/UserView.vue'),
    meta: {
      requireAuth: true //该路由需要登录
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login */ '../views/LoginView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//登录拦截
router.beforeEach((to, from, next) => {
  //判断是否需要拦截
  if (to.meta.requireAuth) {
    if (sessionStorage.token) {
      //如果有token
      next()
    } else {
      //如果没有token
      next({
        path: '/login', //返回登录页面
      })
    }
  } else {
    next()
  }
})

export default router
