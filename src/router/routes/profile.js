import BasicLayout from '@/layouts/basic-layout'

export default {
  path: '/profile',
  name: 'profile',
  redirect: '/result/basic',
  component: BasicLayout,
  meta: { title: 'menu.profile', icon: 'md-list-box' },
  children: [{
    path: 'basic',
    name: 'basic-profile',
    component: () => import(
      /* webpackChunkName: "basic-profile" */
      '@/views/profile/basic'
    ),
    meta: { title: 'menu.basicProfile' }
  }]
}
