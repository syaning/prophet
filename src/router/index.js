import Vue from 'vue'
import iView from 'iview'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

const ViewWrapper = {
  template: '<router-view></router-view>'
}

export const menus = [{
  path: '/home',
  name: 'home',
  component: () =>
    import ('@/components/home'),
  meta: { title: 'home', icon: 'ios-home' }
}, {
  path: 'dashboard',
  name: 'dashboard',
  component: () =>
    import ('@/components/dashboard'),
  meta: { title: 'dashboard', icon: 'ios-compass' }
}, {
  path: '/components',
  name: 'components',
  redirect: '/components/iview',
  component: ViewWrapper,
  meta: { title: 'components', icon: 'ios-construct' },
  children: [{
    path: 'iview',
    name: 'iview',
    component: () =>
      import ('@/components/iview'),
    meta: { title: 'iview' }
  }, {
    path: 'editor',
    name: 'editor',
    component: () =>
      import ('@/components/editor'),
    meta: { title: 'editor' }
  }]
}, {
  path: '/charts',
  name: 'charts',
  redirect: '/charts/chartjs',
  component: ViewWrapper,
  meta: { title: 'charts', icon: 'ios-stats' },
  children: [{
    path: 'chartjs',
    name: 'chartjs',
    component: () =>
      import ('@/components/charts/chartjs'),
    meta: { title: 'chartjs' }
  }, {
    path: 'G2',
    name: 'g2',
    component: () =>
      import ('@/components/charts/g2'),
    meta: { title: 'g2' }
  }]
}, {
  path: '/tables',
  name: 'tables',
  redirect: '/tables/basic',
  component: ViewWrapper,
  meta: { title: 'tables', icon: 'md-grid' },
  children: [{
    path: 'basic',
    name: 'basic_table',
    component: () =>
      import ('@/components/tables/BasicTable'),
    meta: { title: 'tables_basic' }
  }, {
    path: 'complex',
    name: 'complex_table',
    component: () =>
      import ('@/components/tables/ComplexTable'),
    meta: { title: 'tables_complex' }
  }]
}, {
  path: '/thanks',
  name: 'thanks',
  component: () =>
    import ('@/components/thanks'),
  meta: { title: 'thanks', icon: 'ios-heart' }
}]

const router = new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: () =>
      import ('@/components/layout'),
    children: menus
  }, {
    path: '/login',
    name: 'login',
    component: () =>
      import ('@/components/login')
  }]
})

const noAuth = ['/login']

router.beforeEach((to, from, next) => {
  const requireAuth = noAuth.indexOf(to.path) < 0
  const token = store.state.auth.token

  if (requireAuth) {
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    if (noAuth.indexOf(to.path) >= 0 && token) {
      const redirect = to.query.redirect || '/'
      next(redirect)
    } else {
      next()
    }
  }
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(() => {
  iView.LoadingBar.finish()
})

export default router
