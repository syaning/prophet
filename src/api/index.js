function login(user) {
  const { username, password } = user
  const isAdmin = username === 'admin' && password === 'admin'
  const isUser = username === 'test' && password === 'test'

  if (!isAdmin && !isUser) {
    return Promise.reject(new Error('Invalid username or password'))
  }

  const role = isAdmin ? 'admin' : 'user'

  return Promise.resolve({ username, role })
}

export default { login }
