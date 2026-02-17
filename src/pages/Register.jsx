import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../contexts/AuthContext'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { register } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username.trim() || !email.trim() || !password.trim()) {
      toast.error('Please fill all fields')
      return
    }
    setLoading(true)
    const res = register({ username: username.trim(), email: email.trim(), password })
    setLoading(false)
    if (!res.success) {
      toast.error(res.message)
      return
    }
    toast.success('Account created — logged in')
    navigate('/')
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-gradient-to-br from-[#0b0b0d] to-[#111214] rounded-2xl text-white shadow-lg">
      <h2 className="text-3xl font-extrabold mb-4">Create an account</h2>
      <p className="text-sm text-gray-400 mb-6">Start building components with GenUI</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col text-sm">
          <span className="mb-2 text-gray-300">Username</span>
          <input value={username} onChange={e => setUsername(e.target.value)} placeholder="e.g. janedoe" className="p-3 rounded bg-[#0a0a0b] outline-none focus:ring-2 focus:ring-purple-600" />
        </label>

        <label className="flex flex-col text-sm">
          <span className="mb-2 text-gray-300">Email</span>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" className="p-3 rounded bg-[#0a0a0b] outline-none focus:ring-2 focus:ring-purple-600" />
        </label>

        <label className="flex flex-col text-sm">
          <span className="mb-2 text-gray-300">Password</span>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Choose a secure password" className="p-3 rounded bg-[#0a0a0b] outline-none focus:ring-2 focus:ring-purple-600" />
        </label>

        <button type="submit" className="mt-2 p-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg font-semibold hover:opacity-95" disabled={loading}>
          {loading ? 'Creating...' : 'Create account'}
        </button>
      </form>

      <div className="mt-4 text-center text-gray-400">
        Already have an account? <Link to="/login" className="text-purple-400 hover:underline">Sign in</Link>
      </div>
    </div>
  )
}

export default Register
