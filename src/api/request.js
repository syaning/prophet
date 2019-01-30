import axios from 'axios'
import store from '@/store'
import router from '@/router'

const request = axios.create({
  baseURL: '',
  timeout: 5000
})

request.interceptors.request.use(
  config => {
    const token = store.getters.token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => response,
  error => {
    const { status } = error.response

    if (status === 401) {
      const route = router.currentRoute
      if (route.name === 'login') {
        return error
      }

      const gotoLogin = () => {
        router.push({
          name: 'login',
          query: { redirect: route.fullPath }
        })
      }

      return store.dispatch('logout')
        .then(gotoLogin)
        .catch(gotoLogin)
    } else {
      return error
    }
  }
)

export default request
