export default {
  path: '/about',
  name: 'about',
  component: () => import(
    /* webpackChunkName: "about" */
    '@/views/about'
  ),
  meta: { title: 'menu.about', icon: 'md-information-circle' }
}
