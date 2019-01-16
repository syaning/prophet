import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from 'iview/dist/locale/en-US'
import zhLocale from 'iview/dist/locale/zh-CN'
import enUS from './lang/en-US'
import zhCN from './lang/zh-CN'

Vue.use(VueI18n)

const messages = {
  enUS: { ...enUS, ...enLocale },
  zhCN: { ...zhCN, ...zhLocale }
}

const i18n = new VueI18n({
  // locale: store.state.app.lang,
  locale: 'enUS',
  messages
})

export default i18n
