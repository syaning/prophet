import MockAdapter from 'axios-mock-adapter'
import request from '@/api/request'
import user from './modules/user'
import geographic from './modules/geographic'

const mock = new MockAdapter(request)

user(mock)
geographic(mock)

mock.onAny().passThrough()
