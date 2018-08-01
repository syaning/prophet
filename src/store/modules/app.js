import Cookies from 'js-cookie'

const key = 'lang'

const app = {
  state: {
    lang: Cookies.get(key) || 'en'
  },

  mutations: {
    SET_LANG(state, lang) {
      state.lang = lang
      Cookies.set(key, lang)
    }
  },

  actions: {
    setLang({ commit }, lang) {
      commit('SET_LANG', lang)
    }
  }
}

export default app
