import Vue from 'vue'
import iView from 'iview'
import Router from 'vue-router'
import store from '@/store'
import BasicLayout from '@/layouts/basic-layout'
import BlankLayout from '@/layouts/blank-layout'
import UserLayout from '@/layouts/user-layout'

Vue.use(Router)

export const menus = [{
  path: '/dashboard',
  name: 'dashboard',
  redirect: '/dashboard/analysis',
  component: BlankLayout,
  meta: { title: 'route.dashboard', icon: 'md-speedometer' },
  children: [{
    path: 'analysis',
    name: 'analysis',
    component: () => import(
      /* webpackChunkName: "analysis" */
      '@/views/dashboard/analysis'
    ),
    meta: { title: 'route.analysis' }
  }, {
    path: 'monitor',
    name: 'monitor',
    component: () => import(
      /* webpackChunkName: "monitor" */
      '@/views/dashboard/monitor'
    ),
    meta: { title: 'route.monitor' }
  }, {
    path: 'workplace',
    name: 'workplace',
    component: () => import(
      /* webpackChunkName: "workplace" */
      '@/views/dashboard/workplace'
    ),
    meta: { title: 'route.workplace' }
  }]
}, {
  path: '/form',
  name: 'form',
  redirect: '/form/basic-form',
  component: BlankLayout,
  meta: { title: 'route.form', icon: 'md-create' },
  children: [{
    path: 'basic-form',
    name: 'basic-form',
    component: () => import(
      /* webpackChunkName: "basic-form" */
      '@/views/form/basic-form'
    ),
    meta: { title: 'route.basicForm' }
  }, {
    path: 'step-form',
    name: 'step-form',
    redirect: '/form/step-form/info',
    component: () => import(
      /* webpackChunkName: "step-form" */
      '@/views/form/step-form'
    ),
    meta: { title: 'route.stepForm' },
    children: [{
      path: 'info',
      name: 'step-form-info',
      component: () => import(
        /* webpackChunkName: "step-form-info" */
        '@/views/form/step-form/info'
      ),
      meta: { title: 'route.stepFormInfo' }
    }, {
      path: 'confirm',
      name: 'step-form-confirm',
      component: () => import(
        /* webpackChunkName: "step-form-confirm" */
        '@/views/form/step-form/confirm'
      ),
      meta: { title: 'route.stepFormConfirm' }
    }, {
      path: 'result',
      name: 'step-form-result',
      component: () => import(
        /* webpackChunkName: "step-form-result" */
        '@/views/form/step-form/result'
      ),
      meta: { title: 'route.stepFormResult' }
    }]
  }, {
    path: 'advanced-form',
    name: 'advanced-form',
    component: () => import(
      /* webpackChunkName: "advanced-form" */
      '@/views/form/advanced-form'
    ),
    meta: { title: 'route.advancedForm' }
  }]
}, {
  path: '/profile',
  name: 'profile',
  redirect: '/result/basic',
  component: BlankLayout,
  meta: { title: 'route.profile', icon: 'md-list-box' },
  children: [{
    path: 'basic',
    name: 'basic-profile',
    component: () => import(
      /* webpackChunkName: "basic-profile" */
      '@/views/profile/basic'
    ),
    meta: { title: 'route.basicProfile' }
  }]
}, {
  path: '/result',
  name: 'result',
  redirect: '/result/success',
  component: BlankLayout,
  meta: { title: 'route.result', icon: 'md-checkmark-circle-outline' },
  children: [{
    path: 'success',
    name: 'result-success',
    component: () => import(
      /* webpackChunkName: "result-success" */
      '@/views/result/success'
    ),
    meta: { title: 'route.resultSuccess' }
  }, {
    path: 'fail',
    name: 'result-fail',
    component: () => import(
      /* webpackChunkName: "result-fail" */
      '@/views/result/fail'
    ),
    meta: { title: 'route.resultFail' }
  }]
}, {
  path: '/exception',
  name: 'exception',
  redirect: '/exception/403',
  component: BlankLayout,
  meta: { title: 'route.exception', icon: 'md-warning' },
  children: [{
    path: '403',
    name: 'exception-403',
    component: () => import(
      /* webpackChunkName: "403" */
      '@/views/exception/403'
    ),
    meta: { title: 'route.exception403' }
  }, {
    path: '404',
    name: 'exception-404',
    component: () => import(
      /* webpackChunkName: "404" */
      '@/views/exception/404'
    ),
    meta: { title: 'route.exception404' }
  }, {
    path: '500',
    name: 'exception-500',
    component: () => import(
      /* webpackChunkName: "500" */
      '@/views/exception/500'
    ),
    meta: { title: 'route.exception500' }
  }]
}, {
  path: '/account',
  name: 'account',
  redirect: '/account/center',
  component: BlankLayout,
  meta: { title: 'route.account', icon: 'md-person' },
  children: [{
    path: 'center',
    name: 'account-center',
    component: () => import(
      /* webpackChunkName: "account-center" */
      '@/views/account/center'
    ),
    meta: { title: 'route.accountCenter' }
  }, {
    path: 'settings',
    name: 'account-settings',
    component: () => import(
      /* webpackChunkName: "account-settings" */
      '@/views/account/settings'
    ),
    meta: { title: 'route.accountSettings' }
  }]
}]

const router = new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: BasicLayout,
    meta: { title: 'route.home' },
    children: menus
  }, {
    path: '/user',
    name: 'user',
    component: UserLayout,
    children: [{
      path: 'login',
      name: 'login',
      component: () => import(
        /* webpackChunkName: "login" */
        '@/views/user/login'
      ),
      meta: { auth: false }
    }, {
      path: 'register',
      name: 'register',
      component: () => import(
        /* webpackChunkName: "register" */
        '@/views/user/register'
      ),
      meta: { auth: false }
    }]
  }]
})

router.beforeEach((to, from, next) => {
  // TODO: auth inherit
  const requireAuth = to.meta.auth !== false
  const token = store.getters.token

  if (requireAuth) {
    if (token) {
      next()
    } else {
      next({
        name: 'login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    if (to.name === 'login' && token) {
      const redirect = to.query.redirect || from.fullPath
      next(redirect)
    } else {
      next()
    }
  }
})

// TODO: check roles

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(() => {
  iView.LoadingBar.finish()
})

export default router
