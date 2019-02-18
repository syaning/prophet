import BlankLayout from '@/layouts/blank-layout'

export default {
  path: '/result',
  name: 'result',
  redirect: '/result/success',
  component: BlankLayout,
  meta: { title: 'menu.result', icon: 'md-checkmark-circle-outline' },
  children: [{
    path: 'success',
    name: 'result-success',
    component: () => import(
      /* webpackChunkName: "result-success" */
      '@/views/result/success'
    ),
    meta: { title: 'menu.resultSuccess' }
  }, {
    path: 'fail',
    name: 'result-fail',
    component: () => import(
      /* webpackChunkName: "result-fail" */
      '@/views/result/fail'
    ),
    meta: { title: 'menu.resultFail' }
  }]
}
