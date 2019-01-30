import UserLayout from '@/layouts/user-layout'

export default {
  path: '/user',
  name: 'user',
  component: UserLayout,
  children: [{
    path: 'login',
    name: 'login',
    component: () => import(
      /* webpackChunkName: "login" */
      '@/views/user/login'
    ),
    meta: { auth: false }
  }, {
    path: 'register',
    name: 'register',
    component: () => import(
      /* webpackChunkName: "register" */
      '@/views/user/register'
    ),
    meta: { auth: false }
  }]
}
