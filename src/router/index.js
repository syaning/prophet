import Vue from 'vue'
import iView from 'iview'
import Router from 'vue-router'

import Empty from '@/components/layout/Empty'

Vue.use(Router)

export const routes = [{
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('@/components/dashboard'),
  meta: { title: 'dashboard', icon: 'ios-speedometer' }
}, {
  path: '/components',
  name: 'components',
  component: () => import('@/components/layout'),
  meta: { title: 'components', icon: 'ios-speedometer' }
}, {
  path: '/charts',
  name: 'charts',
  component: () => import('@/components/layout'),
  meta: { title: 'charts', icon: 'ios-speedometer-outline' },
  children: [{
    path: 'chart1',
    name: 'chart1',
    component: () => import('@/components/layout'),
    meta: { title: 'Chart-1' }
  }]
}, {
  path: '/tables',
  name: 'tables',
  redirect: '/tables/basic',
  component: Empty,
  meta: { title: 'tables', icon: 'ios-grid-view' },
  children: [{
    path: 'basic',
    name: 'basic_table',
    component: () => import('@/components/tables/BasicTable'),
    meta: { title: 'tables_basic' }
  }, {
    path: 'complex',
    name: 'complex_table',
    component: () => import('@/components/tables/ComplexTable'),
    meta: { title: 'tables_complex' }
  }]
}]

const router = new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: () => import('@/components/layout'),
    children: routes
  }]
})

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start()
    next()
})

router.afterEach(() => {
    iView.LoadingBar.finish()
})

export default router
