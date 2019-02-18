import BlankLayout from '@/layouts/blank-layout'

export default {
  path: '/dashboard',
  name: 'dashboard',
  redirect: '/dashboard/analysis',
  component: BlankLayout,
  meta: { title: 'menu.dashboard', icon: 'md-speedometer' },
  children: [{
    path: 'analysis',
    name: 'analysis',
    component: () => import(
      /* webpackChunkName: "analysis" */
      '@/views/dashboard/analysis'
    ),
    meta: { title: 'menu.analysis' }
  }, {
    path: 'monitor',
    name: 'monitor',
    component: () => import(
      /* webpackChunkName: "monitor" */
      '@/views/dashboard/monitor'
    ),
    meta: { title: 'menu.monitor' }
  }, {
    path: 'workplace',
    name: 'workplace',
    component: () => import(
      /* webpackChunkName: "workplace" */
      '@/views/dashboard/workplace'
    ),
    meta: { title: 'menu.workplace' }
  }]
}
