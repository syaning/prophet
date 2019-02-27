import request from '../request'

export default {
  province() {
    return request.get('/api/geographic/province')
  },

  city(provinceId) {
    return request.get(`/api/geographic/city/${provinceId}`)
  }
}
