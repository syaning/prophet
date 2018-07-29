import Vue from 'vue'
import iView from 'iview'
import Router from 'vue-router'
import Layout from '@/components/layout'

Vue.use(Router)

const routes = [{
  path: '/dashboard',
  redirect: '/dashboard/index',
  component: Layout,
  children: [{
    path: 'index',
    name: 'dashboard',
    component: () => import('@/components/dashboard'),
    meta: { title: 'dashboard', icon: 'ios-speedometer' }
  }]
}, {
  path: '/components',
  name: 'components',
  component: () => import('@/components/layout'),
  meta: { title: 'components', icon: 'ios-speedometer' }
}, {
  path: '/charts',
  name: 'charts',
  component: Layout,
  meta: { title: 'charts', icon: 'ios-speedometer-outline' },
  children: [{
    path: 'chart1',
    name: 'chart1',
    component: () => import('@/components/layout'),
    meta: { title: 'Chart-1' }
  }, {
    path: 'chart2',
    name: 'chart2',
    component: () => import('@/components/layout'),
    meta: { title: 'Chart-2', hidden: true }
  }]
}, {
  path: '/tables',
  name: 'tables',
  redirect: '/tables/basic',
  component: Layout,
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

export const menus = routes.reduce((ret, route) => {
  if (route.meta && !route.meta.hidden) {
    if (route.children) {
      const items = route.children.filter(subroute => {
        return subroute.meta && !subroute.meta.hidden
      })
      if (items.length) {
        route.items = items
        ret.push(route)
      }
    } else {
      ret.push(route)
    }
  } else {
    route.children.forEach(subroute => {
      if (subroute.meta && !subroute.meta.hidden) {
        ret.push(subroute)
      }
    })
  }
  return ret
}, [])

const router = new Router({
  routes: [{
    path: '/',
    name: 'index',
    redirect: '/dashboard'
  }, ...routes]
})

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start()
    next()
})

router.afterEach(() => {
    iView.LoadingBar.finish()
})

export default router
