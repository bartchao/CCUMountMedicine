import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../views/StartPageView.vue'
import CalculatePage from '../views/CalculateView.vue'
import ResultPage from '../views/PrintPageView.vue'

import store from '../store'
const routes = [
  {
    path: '/',
    name: 'startpage',
    component: StartPage
  },
  {
    path: '/calculate',
    name: 'calculate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:CalculatePage,
    props:(route) => route.params
  },
  {
    path: '/result',
    name: 'result',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:ResultPage,
    props:(route) => route.params
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
  if (to.name === 'calculate' && !checkValid) next({ name: 'startpage' })
  else next()
})
export default router
