import React, { useRef, useState } from 'react'
import { BGIMG_URL } from '../utils/Links'
import Header from './Header'
import { checkValidateData } from '../utils/Validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/Firebase';

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage,setErrorMessage] = useState();

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () =>{

    const message = checkValidateData(email.current.value,password.current.value);
    setErrorMessage(message);

    if(message) return;

    if(!isSignIn)
    {
      //Sign Up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user)
      // ...
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + " " +errorMessage);
    // ..
      });
    }
    else{
      //Sign In
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
    // Signed in 
      const user = userCredential.user;
    // ...
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + " " +errorMessage);
     });
    }
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
            <button className='w-full rounded-lg bg-red-700 p-4 my-2 font-medium cursor-pointer'
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