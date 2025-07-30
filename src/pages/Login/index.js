import React from 'react'
import '../Register/register.scss';
import {LoginBG } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const History = useNavigate();
  return (
    <div className="main-page">
      <div className='left'>
        <img src={LoginBG} className='bg-image' alt='BG'/>
      </div>

      <div className='right'>
        <p className='tittle'>Login</p>
        <Input label="Email" placeholder="Email"/>
        <Gap height={20}/>
        <Input label="Password" placeholder="Password"/>
        <Gap height={50}/>
        <Button tittle="Login" onClick={() => History('/')}/>
        <Gap height={120}/>
        <Link tittle="Kembali ke register" onClick={() => History('/register')}/>
      </div>
    </div>
  )
}

export default Login
