import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import channal from '../views/channal'
import trend from '../views/trend'
import vipshop from '../views/vipshop'
import personal from '../views/personal'
import vdshow from '../views/vdshow'
import cookie from 'vue-cookies'

Vue.use(VueRouter)
Vue.use(cookie)

const routes = [
  {
    path: '/home',
    component: home
  },
  {
    path: '/vdshow/:id',
    component: vdshow
  },
  {
    path: '/channal',
    component: channal,
    children: [
      {
        path: 'part1',
        component: () => import('../views/channal/part1.vue')
      },
      {
        path: 'part2',
        component: () => import('../views/channal/part2.vue')
      },
      {
        path: '',
        redirect: '/channal/part1'
      }
    ]
  },
  {
    path: '/trend',
    component: trend
  },
  {
    path: '/vipshop',
    component: vipshop
  },
  {
    path: '/personal',
    component: personal
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path.match('/vdshow')) {
    if (!Vue.$cookies.get('token')) {
      alert('请先登录!')
      next('/personal')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
