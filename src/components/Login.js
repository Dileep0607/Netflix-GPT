import React, { useRef, useState } from 'react'
import { BGIMG_URL } from '../utils/Links'
import Header from './Header'
import { checkValidateData } from '../utils/Validate';

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage,setErrorMessage] = useState();

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () =>{
    //validate form submission
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidateData(email.current.value,password.current.value);
    setErrorMessage(message);
    //console.log(message);
  }

  const toggleSignUp = () =>{
    setIsSignIn(!isSignIn)
  }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src={BGIMG_URL} alt='background' className='relative w-full h-full object-cover scale-125'/>
        </div>
        <form onSubmit={(e) => e.preventDefault()}
        className='w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-black opacity-80 text-white'>
            <h1 className='font-bold text-3xl p-4'>
            {isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && 
            (<input 
            type='text' 
            placeholder='Full Name...' 
            className='w-full border border-gray-500 p-4 my-3' />)}
            <input 
            ref={email}
            type='email' 
            placeholder='Email Address' 
            className='w-full border border-gray-500 p-4 my-3' />
            <input 
            ref={password}
            type='password' 
            placeholder='Password' 
            className='w-full border border-gray-500 p-4 my-3' />
            <p className='text-red-600 font-bold text-lg py-2'>{errorMessage}</p>
            <button className='w-full rounded-lg bg-red-700 p-4 my-2 font-medium'
            onClick={handleButtonClick}>
              {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            <p className='py-4 cursor-pointer' onClick={toggleSignUp}>
              {isSignIn ? `New to Netflix? Sign Up Now` : `Already Registered! Sign In Now...`}
            </p>
        </form>
    </div>
  )
}

export default Login