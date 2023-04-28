import React from 'react'
import { ButtonLogin } from '../components/Login/ButtonLogin'
import { LogoResponsive } from "../components/Logo/LogoResponsive";
export const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <LogoResponsive />
      <div className='text-center'>
        <ButtonLogin />
      </div>
    </div>
  )
}
