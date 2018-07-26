import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [{
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('@/pages/dashboard'),
  meta: { title: 'Dashboard' }
}, {
  path: '/components',
  name: 'componnets',
  component: () => import('@/pages/layout'),
  meta: { title: 'Components' }
}, {
  path: '/charts',
  name: 'charts',
  component: () => import('@/pages/layout'),
  meta: { title: 'Charts' },
  children: [{
    path: 'chart1',
    component: () => import('@/pages/layout'),
    meta: { title: 'Chart-1' }
  }]
}]

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: () => import('@/pages/layout'),
    children: routes
  }]
})
