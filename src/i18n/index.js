import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '@/store'
import enLocale from 'iview/dist/locale/en-US'
import zhLocale from 'iview/dist/locale/zh-CN'
import en from './en'
import zh from './zh'

Vue.use(VueI18n)

const messages = {
  en: { ...en, ...enLocale },
  zh: { ...zh, ...zhLocale }
}

const i18n = new VueI18n({
  locale: store.state.app.lang,
  messages
})

export default i18n
