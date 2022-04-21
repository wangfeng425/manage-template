import React, { useState, useEffect } from 'react';
import BGParticle from '@/utils/BGParticle';
import LoginForm from './loginForm';
import RegisterForm from './registerForm'
import './index.scss'

const login = () => {
  const [showBox, setShowBox] = useState('login')

  let particle: BGParticle | undefined;

  useEffect(() => {
    particle = new BGParticle('backgroundBox')
    particle.init()
    return function cleanup () {
      particle && particle.destory()
    };
  })

  const switchShowBox = (box: string) => {
    setShowBox(box)
  }
  return (
    <div className="login-page">
      <div>
        <div id="backgroundBox"></div>
        <div className="container">
          <LoginForm className={showBox === 'login' ? 'box showBox' : 'box hiddenBox'}
            switchShowBox={switchShowBox}
          ></LoginForm>
          <RegisterForm className={showBox === 'register' ? 'box showBox' : 'box hiddenBox'}
            switchShowBox={switchShowBox}
          ></RegisterForm>
        </div>
      </div>
    </div>
  )
}

export default login