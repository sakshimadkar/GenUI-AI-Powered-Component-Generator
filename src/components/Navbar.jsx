import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { HiSun } from 'react-icons/hi'
import { RiSettings3Fill } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../services/authService'
import { useAuth } from '../contexts/AuthContext'

const Navbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <>
      <div className="nav flex items-center justify-between px-[100px] h-[90px] border-b-[1px] border-gray-800">
        <div className="logo">
         <h3 className='text-[25px] font-[700] sp-text'>GenUI</h3>
        </div>
        <div className="icons flex items-center gap-[15px]">
          <div className="icon"><HiSun /></div>
          {user ? (
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-200">Hello, <span className="font-semibold">{user.username}</span></div>
              <button onClick={handleLogout} className="text-sm text-red-400 hover:underline">Logout</button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login" className="text-sm text-gray-300 hover:text-white">Login</Link>
              <Link to="/register" className="text-sm text-gray-300 hover:text-white">Register</Link>
            </div>
          )}
          <div className="icon"><FaUser /></div>
          <div className="icon"><RiSettings3Fill /></div>
        </div>
      </div>
    </>
  )
}

export default Navbar