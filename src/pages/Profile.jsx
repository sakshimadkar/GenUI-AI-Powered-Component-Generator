import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

const Profile = () => {
  const { user, logout } = useAuth()
  const [editing, setEditing] = useState(false)
  const [username, setUsername] = useState(user?.username || '')

  const handleSave = () => {
    // For this mock, update localStorage directly
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const idx = users.findIndex(u => u.email === user.email)
    if (idx >= 0) {
      users[idx].username = username
      localStorage.setItem('users', JSON.stringify(users))
      localStorage.setItem('auth', JSON.stringify({ email: user.email, username }))
      setEditing(false)
      alert('Profile updated')
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-12 p-8 bg-[#0f0f12] rounded-lg text-white">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="mb-4">
        <div className="text-sm text-gray-400">Email</div>
        <div className="font-medium">{user.email}</div>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-400">Username</div>
        {!editing ? (
          <div className="flex items-center gap-4">
            <div className="font-medium">{user.username}</div>
            <button onClick={() => setEditing(true)} className="text-sm text-purple-400">Edit</button>
          </div>
        ) : (
          <div className="flex gap-3">
            <input value={username} onChange={e => setUsername(e.target.value)} className="p-2 rounded bg-[#0b0b0d]" />
            <button onClick={handleSave} className="p-2 bg-purple-600 rounded">Save</button>
            <button onClick={() => setEditing(false)} className="p-2 bg-gray-700 rounded">Cancel</button>
          </div>
        )}
      </div>

      <div>
        <button onClick={logout} className="p-3 bg-red-600 rounded">Logout</button>
      </div>
    </div>
  )
}

export default Profile
