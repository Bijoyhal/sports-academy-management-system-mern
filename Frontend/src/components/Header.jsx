import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='h-[70vh] flex flex-col ' id='header'>
      <Navbar/>
      <div className='flex-1 flex items-center justify-center md:justify-start'>
          <h1 className='relative z-5  md:pl-[50px] text-[50px] lg:text-[90px] text-white font-bold'>TRAIN LIKE <br/>
          A <span className='text-[#B53232] '>CHAMP</span></h1>
      </div>
    </div>
  )
}

export default Header
