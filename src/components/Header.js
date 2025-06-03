import React from 'react'
import { LOGO_URL } from '../utils/Links'

const Header = () => {
  return (
    <div className='absolute pl-32 py-2 bg-gradient-to-b from-black z-10'>
        <img className='w-44' src={LOGO_URL} alt='logo' />
    </div>
  )
}

export default Header