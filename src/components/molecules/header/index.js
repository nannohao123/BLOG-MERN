import React from 'react'
import './header.scss'
import { useNavigate } from 'react-router-dom'

function Header() {
  const History = useNavigate();
  return (
    <div className='header'>
      <p className='logo-app'>Mern-Blog</p>
      <p className='menu' onClick={() => History('/login')}>Logout</p>
    </div>
  )
}

export default Header
