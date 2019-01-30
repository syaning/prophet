import BasicLayout from '@/layouts/basic-layout'

export default {
  path: '/result',
  name: 'result',
  redirect: '/result/success',
  component: BasicLayout,
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
}
