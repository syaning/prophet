import Vue from 'vue'
import iView from 'iview'
import Router from 'vue-router'
import Layout from '@/components/layout'

Vue.use(Router)

const routes = [{
  path: '/home',
  redirect: '/home/index',
  component: Layout,
  children: [{
    path: 'index',
    name: 'home',
    component: () => import('@/components/home'),
    meta: { title: 'home', icon: 'ios-home-outline' }
  }]
}, {
  path: '/dashboard',
  redirect: '/dashboard/index',
  component: Layout,
  children: [{
    path: 'index',
    name: 'dashboard',
    component: () => import('@/components/dashboard'),
    meta: { title: 'dashboard', icon: 'speedometer' }
  }]
}, {
  path: '/components',
  redirect: '/components/index',
  component: Layout,
  children: [{
    path: 'index',
    name: 'components',
    component: () => import('@/components/editor'),
    meta: { title: 'components', icon: 'compass' }
  }]
}, {
  path: '/charts',
  name: 'charts',
  redirect: '/charts/chartjs',
  component: Layout,
  meta: { title: 'charts', icon: 'stats-bars' },
  children: [{
    path: 'chartjs',
    name: 'chartjs',
    component: () => import('@/components/charts/chartjs'),
    meta: { title: 'chartjs' }
  }, {
    path: 'G2',
    name: 'g2',
    component: () => import('@/components/charts/g2'),
    meta: { title: 'g2' }
  }]
}, {
  path: '/tables',
  name: 'tables',
  redirect: '/tables/basic',
  component: Layout,
  meta: { title: 'tables', icon: 'grid' },
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
}, {
  path: '/thanks',
  redirect: '/thanks/index',
  component: Layout,
  children: [{
    path: 'index',
    name: 'thanks',
    component: () => import('@/components/thanks'),
    meta: { title: 'thanks', icon: 'ios-heart-outline' }
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
    redirect: '/home'
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
