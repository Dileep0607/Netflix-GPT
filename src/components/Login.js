import React, { useState } from 'react'
import { BGIMG_URL } from '../utils/Links'
import Header from './Header'

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignUp = () =>{
    setIsSignIn(!isSignIn)
  }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src={BGIMG_URL} alt='background' className='relative w-full h-full object-cover scale-125'/>
        </div>
        <form className='w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-black opacity-80 text-white'>
            <h1 className='font-bold text-3xl p-4'>
            {isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && <input type='text' placeholder='Full Name...' 
            className='w-full border border-gray-500 p-4 my-3' />}
            <input type='email' placeholder='Email Address' 
            className='w-full border border-gray-500 p-4 my-3' />
            <input type='password' placeholder='Password' 
            className='w-full border border-gray-500 p-4 my-3' />
            <button className='w-full rounded-lg bg-red-700 p-4 my-2 font-medium'>
              {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            <p className='py-4 cursor-pointer' onClick={handleSignUp}>
              {isSignIn ? `New to Netflix? Sign Up Now` : `Already Registered! Sign In Now...`}
            </p>
        </form>
    </div>
  )
}

export default Login