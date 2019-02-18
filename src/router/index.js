import Vue from 'vue'
import iView from 'iview'
import Router from 'vue-router'
import store from '@/store'
import dashboard from './routes/dashboard'
import form from './routes/form'
import profile from './routes/profile'
import result from './routes/result'
import exception from './routes/exception'
import account from './routes/account'
import user from './routes/user'

import BasicLayout from '@/layouts/basic-layout'

Vue.use(Router)

export const menus = [
  dashboard,
  form,
  profile,
  result,
  exception,
  account
]

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/dashboard',
    component: BasicLayout,
    children: menus
  },
  // ...menus,
  user
]

const router = new Router({ routes })

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
