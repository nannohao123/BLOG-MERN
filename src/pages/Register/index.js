import React from 'react';
import './register.scss';
import { RegisterBG } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import { useNavigate } from 'react-router-dom';

function Register() {
  const History = useNavigate()
  return (
    <div className="main-page">
      <div className='left'>
        <img src={RegisterBG} className='bg-image' alt='BG'/>
      </div>

      <div className='right'>
        <p className='tittle'>Register</p>
        <Input label="Full Name" placeholder="Full Name"/>
        <Gap height={20}/>
        <Input label="Email" placeholder="Email"/>
        <Gap height={20}/>
        <Input label="Password" placeholder="Password"/>
        <Gap height={50}/>
        <Button tittle="Register" onClick={() => History('/login')}/>
        <Gap height={120}/>
        <Link tittle="Kembali ke login" onClick={() => History('/login')}/>
      </div>
    </div>
  );
}

export default Register;
