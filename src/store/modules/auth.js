import api from '@/api'
import { Base64 } from 'js-base64'

function parseToken(token) {
  if (!token) {
    return {}
  }

  try {
    const payload = Base64.decode(token.split('.')[1])
    return JSON.parse(payload)
  } catch (err) {
    return {}
  }
}

const TOKEN_KEY = 'prophet_token'
const token = localStorage.getItem(TOKEN_KEY)

export default {
  state: {
    token,
    user: parseToken(token)
  },

  getters: {
    token(state) {
      return state.token
    },

    username(state) {
      return state.user.username
    },

    roles(state) {
      return state.user.roles || []
    }
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      state.user = parseToken(token)
      localStorage.setItem(TOKEN_KEY, token)
    },

    CLEAR_TOKEN(state) {
      state.token = ''
      state.user = {}
      localStorage.removeItem(TOKEN_KEY)
    }
  },

  actions: {
    login({ commit }, data) {
      return api.user.login(data)
        .then(res => commit('SET_TOKEN', res.data.token))
    },

    logout({ commit }) {
      return api.user.logout()
        .then(() => commit('CLEAR_TOKEN'))
    }
  }
}
