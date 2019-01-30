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
    meta: { title: 'menu.accountSettings' },
    children: [{
      path: 'basic',
      name: 'basic-settings',
      component: () => import(
        /* webpackChunkName: "basic-settings" */
        '@/views/account/settings/basic'
      ),
      meta: { title: 'menu.basicSettings' }
    }, {
      path: 'security',
      name: 'security-settings',
      component: () => import(
        /* webpackChunkName: "security-settings" */
        '@/views/account/settings/security'
      ),
      meta: { title: 'menu.securitySettings' }
    }, {
      path: 'binding',
      name: 'account-binding',
      component: () => import(
        /* webpackChunkName: "account-binding" */
        '@/views/account/settings/binding'
      ),
      meta: { title: 'menu.accountBinding' }
    }, {
      path: 'notification',
      name: 'message-notification',
      component: () => import(
        /* webpackChunkName: "message-notification" */
        '@/views/account/settings/notification'
      ),
      meta: { title: 'menu.messageNotification' }
    }]
  }]
}
