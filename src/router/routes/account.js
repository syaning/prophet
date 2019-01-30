import BasicLayout from '@/layouts/basic-layout'

export default {
  path: '/account',
  name: 'account',
  redirect: '/account/center',
  component: BasicLayout,
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
}
