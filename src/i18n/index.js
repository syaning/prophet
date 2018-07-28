import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
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
  locale: Cookies.get('language') || 'zh',
  messages
})

export default i18n
