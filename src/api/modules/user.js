import request from '../request'

export default {
  login() {
    return request.get('/api/users')
  }
}
