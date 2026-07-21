import React from 'react';
import { Link } from 'react-router';

const Fear = () => {
  return (
    <div className='bg-black p-[50px] lg:p-[100px]' >
      <h1 className='text-white text-2xl lg:text-5xl font-bold text-center mb-4'>NEVER LET THE <span className='text-[#b53232]'>FEAR</span> OF LOOSING KEEP YOU FROM <span className='text-[#b53232]'>WINNING</span> THE GAME</h1>
      <div className='flex justify-center'>
        <Link to='/Register'>
            <p className='text-white/60 text-[12px] lg:text-[16px] cursor-pointer  border-b-2 py-2 '>REGISTER NOW</p>
        </Link>
         
      </div>
      
    </div>
  )
}

export default Fear
