import Vue from 'vue'
import iView from 'iview'
import './styles/index.less'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import store from './store'
import filters from './filters'

document.title = i18n.t('app.title')

Vue.config.productionTip = false
Vue.use(iView)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
