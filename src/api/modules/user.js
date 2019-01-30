import request from '../request'

export default {
  login(data) {
    return request.post('/api/user/login', data)
  },

  logout() {
    return request.post('/api/user/logout')
  }
}
