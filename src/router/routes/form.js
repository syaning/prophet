import BlankLayout from '@/layouts/blank-layout'

export default {
  path: '/form',
  name: 'form',
  redirect: '/form/basic-form',
  component: BlankLayout,
  meta: { title: 'menu.form', icon: 'md-create' },
  children: [{
    path: 'basic-form',
    name: 'basic-form',
    component: () => import(
      /* webpackChunkName: "basic-form" */
      '@/views/form/basic-form'
    ),
    meta: { title: 'menu.basicForm' }
  }, {
    path: 'step-form',
    name: 'step-form',
    redirect: '/form/step-form/info',
    component: () => import(
      /* webpackChunkName: "step-form" */
      '@/views/form/step-form'
    ),
    meta: { title: 'menu.stepForm' },
    children: [{
      path: 'info',
      name: 'step-form-info',
      component: () => import(
        /* webpackChunkName: "step-form-info" */
        '@/views/form/step-form/info'
      ),
      meta: { title: 'menu.stepFormInfo' }
    }, {
      path: 'confirm',
      name: 'step-form-confirm',
      component: () => import(
        /* webpackChunkName: "step-form-confirm" */
        '@/views/form/step-form/confirm'
      ),
      meta: { title: 'menu.stepFormConfirm' }
    }, {
      path: 'result',
      name: 'step-form-result',
      component: () => import(
        /* webpackChunkName: "step-form-result" */
        '@/views/form/step-form/result'
      ),
      meta: { title: 'menu.stepFormResult' }
    }]
  }, {
    path: 'advanced-form',
    name: 'advanced-form',
    component: () => import(
      /* webpackChunkName: "advanced-form" */
      '@/views/form/advanced-form'
    ),
    meta: { title: 'menu.advancedForm' }
  }]
}
