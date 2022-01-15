import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../views/StartPageView.vue'
import CalculatePage from '../views/CalculateView.vue'
import ResultPage from '../views/PrintPageView.vue'

import store from '../store'
const routes = [
  {
    path: '/',
    name: 'startpage',
    component: StartPage,
    meta: {title: '醫藥產生器'}
  },
  {
    path: '/calculate',
    name: 'calculate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:CalculatePage,
    props:(route) => route.params,
    meta: {title: '醫藥產生器'}
  },
  {
    path: '/result',
    name: 'result',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:ResultPage,
    props:(route) => route.params,
    meta: {title: '醫藥產生器'}
  },
  {
    // 会匹配所有路径
    path: '/:pathMatch(.*)*',
    name: 'error path',
    redirect:'/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let checkValid = store.state.isConfigured
  if (to.path !== '/' && checkValid == false) next({ path: '/' })
  else next()
  window.document.title = to.meta.title;
  window.scroll(0,0)
})

export default router
