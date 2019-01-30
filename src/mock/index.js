import mock from './mock'

mock.onGet('/api/users').reply(200, {
  users: [{ id: 1, name: 'admin' }]
})
