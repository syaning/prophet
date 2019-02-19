import mock from '../mock'

const adminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZXMiOlsiYWRtaW4iXX0.OzcSBVWlVoKvc16dEwiY--UC6z3qEv8DCDHn3ocwdJM'
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJyb2xlcyI6WyJ1c2VyIl19._GqvDT48Wu-jKPe5Pp5VpdFYulPZfa7KeXsTyNC7mFM'

mock
  // login as admin
  .onPost('/api/user/login', { username: 'admin', password: 'prophet' })
  .reply(200, { token: adminToken })

  // login as user
  .onPost('/api/user/login', { username: 'user', password: 'prophet' })
  .reply(200, { token: userToken })

  // login failed
  .onPost('/api/user/login')
  .reply(401)

  // logout
  .onPost('/api/user/logout')
  .reply(200)

  // profile
  .onGet('/api/user/profile')
  .reply(200, {
    email: 'prophet@example.com',
    nickname: 'Prophet',
    description: '',
    country: 'china'
  })
