import i18n from '@/i18n'

const LOCALE_KEY = 'prophet_locale'

const app = {
  state: {
    locale: localStorage.getItem(LOCALE_KEY) || window.navigator.language
  },

  getters: {
    locale(state) {
      return state.locale
    }
  },

  mutations: {
    SET_LOCALE(state, locale) {
      state.locale = locale
      localStorage.setItem(LOCALE_KEY, locale)
      i18n.locale = locale
    }
  },

  actions: {
    setLocale({ commit }, locale) {
      commit('SET_LOCALE', locale)
    }
  }
}

export default app
