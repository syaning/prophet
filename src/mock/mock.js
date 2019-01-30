import MockAdapter from 'axios-mock-adapter'
import request from '@/api/request'

export default new MockAdapter(request)
