import BasicLayout from '@/layouts/basic-layout'

export default {
  path: '/form',
  name: 'form',
  redirect: '/form/basic-form',
  component: BasicLayout,
  meta: { title: 'route.form', icon: 'md-create' },
  children: [{
    path: 'basic-form',
    name: 'basic-form',
    component: () => import(
      /* webpackChunkName: "basic-form" */
      '@/views/form/basic-form'
    ),
    meta: { title: 'route.basicForm' }
  }, {
    path: 'step-form',
    name: 'step-form',
    redirect: '/form/step-form/info',
    component: () => import(
      /* webpackChunkName: "step-form" */
      '@/views/form/step-form'
    ),
    meta: { title: 'route.stepForm' },
    children: [{
      path: 'info',
      name: 'step-form-info',
      component: () => import(
        /* webpackChunkName: "step-form-info" */
        '@/views/form/step-form/info'
      ),
      meta: { title: 'route.stepFormInfo' }
    }, {
      path: 'confirm',
      name: 'step-form-confirm',
      component: () => import(
        /* webpackChunkName: "step-form-confirm" */
        '@/views/form/step-form/confirm'
      ),
      meta: { title: 'route.stepFormConfirm' }
    }, {
      path: 'result',
      name: 'step-form-result',
      component: () => import(
        /* webpackChunkName: "step-form-result" */
        '@/views/form/step-form/result'
      ),
      meta: { title: 'route.stepFormResult' }
    }]
  }, {
    path: 'advanced-form',
    name: 'advanced-form',
    component: () => import(
      /* webpackChunkName: "advanced-form" */
      '@/views/form/advanced-form'
    ),
    meta: { title: 'route.advancedForm' }
  }]
}
