import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import ViewWrapper from './components/ViewWrapper'

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
    component: () => import('@/views/form/step-form'),
    meta: { title: 'route.stepForm' }
  }, {
    path: 'advanced-form',
    name: 'advanced-form',
    component: () => import('@/views/form/advanced-form'),
    meta: { title: 'route.advancedForm' }
  }]
}]

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'route.home' },
    children: menus
  }]
})
