import BasicLayout from '@/layouts/basic-layout'

export default {
  path: '/account',
  name: 'account',
  redirect: '/account/center',
  component: BasicLayout,
  meta: { title: 'menu.account', icon: 'md-person' },
  children: [{
    path: 'center',
    name: 'account-center',
    component: () => import(
      /* webpackChunkName: "account-center" */
      '@/views/account/center'
    ),
    meta: { title: 'menu.accountCenter' }
  }, {
    path: 'settings',
    name: 'account-settings',
    component: () => import(
      /* webpackChunkName: "account-settings" */
      '@/views/account/settings'
    ),
    meta: { title: 'menu.accountSettings' }
  }]
}
