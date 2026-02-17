const USERS_KEY = 'users'
const AUTH_KEY = 'auth'

function register({ username, email, password }) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
  if (users.find(u => u.email === email)) {
    return { success: false, message: 'Email already registered' }
  }
  if (users.find(u => u.username === username)) {
    return { success: false, message: 'Username already taken' }
  }
  const user = { username, email, password }
  users.push(user)
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
  localStorage.setItem(AUTH_KEY, JSON.stringify({ username, email }))
  return { success: true, user: { username, email } }
}

function login({ email, password }) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
  const user = users.find(u => u.email === email && u.password === password)
  if (!user) return { success: false, message: 'Invalid credentials' }
  localStorage.setItem(AUTH_KEY, JSON.stringify({ username: user.username, email: user.email }))
  return { success: true, user: { username: user.username, email: user.email } }
}

function logout() {
  localStorage.removeItem(AUTH_KEY)
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem(AUTH_KEY) || 'null')
}

export default { register, login, logout, getCurrentUser }
