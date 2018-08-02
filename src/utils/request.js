import axios from 'axios'
import { Message } from 'iview'

const service = axios.create({
  baseUrl: '',
  timeout: 5000
})

service.interceptors.response.use(
  response => response,
  error => {
    Message.error(error.message)
    return Promise.reject(error)
  }
)

export default service
