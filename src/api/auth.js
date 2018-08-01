// this is just an example, these tokens should be signed server-side
const ADMIN_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.tz5RmSbs46d5K09Dsn3X-TLq9XeaQoKcwdeaYdEIlbU'
const USER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJyb2xlIjoidXNlciIsImlhdCI6MTUxNjIzOTAyMn0.cGWOxm1GbrJL_OCoFXmLIuKkZguj3mglQd-QwvJo1lk'

export function login(user) {
  const { username, password } = user
  const isAdmin = username === 'admin' && password === 'admin'
  const isUser = username === 'user' && password === 'user'

  if (!isAdmin && !isUser) {
    return Promise.reject(new Error('Invalid username or password'))
  }

  const token = isAdmin ? ADMIN_TOKEN : USER_TOKEN
  return Promise.resolve(token)
}
