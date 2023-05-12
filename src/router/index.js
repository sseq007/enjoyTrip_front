import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView'
import notice from '../views/notice/noticeBoard'
import noticeWrite from '../components/notice/noticeWrite'
import noticeModify from '../components/notice/noticeModify'
import noticeContent from '../components/notice/noticeContent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/notice/write',
    name: 'noticeWrite',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component : noticeWrite
  },
  {
    path: '/notice/list',
    name: 'notice',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component : notice
  },
  {
    path: '/noticeview/:articleNo',
    name: 'noticeview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component : noticeContent
  },
  {
    path: '/noticemodify/:articleNo',
    name: 'noticemodify',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component : noticeModify
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
