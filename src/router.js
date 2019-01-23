import Vue from 'vue'
import iView from 'iview'
import Router from 'vue-router'
import Home from './views/home'
import ViewWrapper from './components/view-wrapper'

Vue.use(Router)

export const menus = [{
  path: '/dashboard',
  name: 'dashboard',
  redirect: '/dashboard/analysis',
  component: ViewWrapper,
  meta: { title: 'route.dashboard', icon: 'md-speedometer' },
  children: [{
    path: 'analysis',
    name: 'analysis',
    component: () => import('@/views/dashboard/analysis'),
    meta: { title: 'route.analysis' }
  }, {
    path: 'monitor',
    name: 'monitor',
    component: () => import('@/views/dashboard/monitor'),
    meta: { title: 'route.monitor' }
  }, {
    path: 'workplace',
    name: 'workplace',
    component: () => import('@/views/dashboard/workplace'),
    meta: { title: 'route.workplace' }
  }]
}, {
  path: '/form',
  name: 'form',
  redirect: '/form/basic-form',
  component: ViewWrapper,
  meta: { title: 'route.form', icon: 'md-create' },
  children: [{
    path: 'basic-form',
    name: 'basic-form',
    component: () => import('@/views/form/basic-form'),
    meta: { title: 'route.basicForm' }
  }, {
    path: 'step-form',
    name: 'step-form',
    redirect: '/form/step-form/info',
    component: () => import('@/views/form/step-form'),
    meta: { title: 'route.stepForm' },
    children: [{
      path: 'info',
      name: 'step-form-info',
      component: () => import('@/views/form/step-form/info'),
      meta: { title: 'route.stepFormInfo' }
    }, {
      path: 'confirm',
      name: 'step-form-confirm',
      component: () => import('@/views/form/step-form/confirm'),
      meta: { title: 'route.stepFormConfirm' }
    }, {
      path: 'result',
      name: 'step-form-result',
      component: () => import('@/views/form/step-form/result'),
      meta: { title: 'route.stepFormResult' }
    }]
  }, {
    path: 'advanced-form',
    name: 'advanced-form',
    component: () => import('@/views/form/advanced-form'),
    meta: { title: 'route.advancedForm' }
  }]
}, {
  path: '/account',
  name: 'account',
  redirect: '/account/center',
  component: ViewWrapper,
  meta: { title: 'route.account', icon: 'md-person' },
  children: [{
    path: 'center',
    name: 'account-center',
    component: () => import('@/views/account/center'),
    meta: { title: 'route.accountCenter' }
  }, {
    path: 'settings',
    name: 'account-settings',
    component: () => import('@/views/account/settings'),
    meta: { title: 'route.accountSettings' }
  }]
}]

const router = new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'route.home' },
    children: menus
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
