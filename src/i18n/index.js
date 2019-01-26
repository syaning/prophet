import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from 'iview/dist/locale/en-US'
import zhLocale from 'iview/dist/locale/zh-CN'
import store from '@/store'
import enUS from './en-US'
import zhCN from './zh-CN'

Vue.use(VueI18n)

const messages = {
  'en-US': { ...enUS, ...enLocale },
  'zh-CN': { ...zhCN, ...zhLocale }
}

const i18n = new VueI18n({
  locale: store.getters.locale,
  messages
})

export default i18n
