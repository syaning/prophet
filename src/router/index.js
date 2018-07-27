import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [{
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('@/components/dashboard'),
  meta: { title: 'dashboard' }
}, {
  path: '/components',
  name: 'components',
  component: () => import('@/components/layout'),
  meta: { title: 'components' }
}, {
  path: '/charts',
  name: 'charts',
  component: () => import('@/components/layout'),
  meta: { title: 'charts' },
  children: [{
    path: 'chart1',
    name: 'chart1',
    component: () => import('@/components/layout'),
    meta: { title: 'Chart-1' }
  }]
}]

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: () => import('@/components/layout'),
    children: routes
  }]
})
