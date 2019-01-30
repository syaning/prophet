import BasicLayout from '@/layouts/basic-layout'

export default {
  path: '/exception',
  name: 'exception',
  redirect: '/exception/403',
  component: BasicLayout,
  meta: { title: 'menu.exception', icon: 'md-warning' },
  children: [{
    path: '403',
    name: 'exception-403',
    component: () => import(
      /* webpackChunkName: "403" */
      '@/views/exception/403'
    ),
    meta: { title: 'menu.exception403' }
  }, {
    path: '404',
    name: 'exception-404',
    component: () => import(
      /* webpackChunkName: "404" */
      '@/views/exception/404'
    ),
    meta: { title: 'menu.exception404' }
  }, {
    path: '500',
    name: 'exception-500',
    component: () => import(
      /* webpackChunkName: "500" */
      '@/views/exception/500'
    ),
    meta: { title: 'menu.exception500' }
  }]
}
