import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import App from './App'
import router from './router'
import store from './store'
import i18n from './i18n'
import filters from './filters'

Vue.config.productionTip = false
Vue.use(iView)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
