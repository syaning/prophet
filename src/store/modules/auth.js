import Cookies from 'js-cookie'
import api from '@/api'
import parseToken from '@/utils/parseToken'

const key = 'PROPHET_TOKEN'

const auth = {
  state: {
    token: Cookies.get(key)
  },

  getters: {
    username(state) {
      return parseToken(state.token).username
    },

    role(state) {
      return parseToken(state.token).role
    },

    isAdmin(state) {
      return parseToken(state.token).role === 'admin'
    }
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      Cookies.set(key, token)
    },

    CLEAR_TOKEN(state) {
      state.token = ''
      Cookies.remove(key)
    }
  },

  actions: {
    login({ commit }, user) {
      return api.auth.login(user)
        .then(data => {
          commit('SET_TOKEN', data)
        })
    },

    logout({ commit }) {
      return new Promise(resolve => {
        commit('CLEAR_TOKEN')
        resolve()
      })
    }
  }
}

export default auth
