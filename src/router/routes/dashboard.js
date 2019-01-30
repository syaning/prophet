import BasicLayout from '@/layouts/basic-layout'

export default {
  path: '/dashboard',
  name: 'dashboard',
  redirect: '/dashboard/analysis',
  component: BasicLayout,
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
}
