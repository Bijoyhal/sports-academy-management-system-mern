import React from 'react'
import Navbar from './Navbar'

const About_header = () => {
  return (
    <div id='about-header' className='flex flex-col h-[70vh]'>
      <div className='relative z-40'>
           <Navbar/>
      </div>
     
      <div className='relative z-10 flex-1 flex justify-center items-center' >
        <h1 className='text-[60px] md:text-[100px] text-white font-bold' >ABOUT <span className='text-[#B53232]'>US</span></h1>
      </div>
    </div>
  )
}

export default About_header
