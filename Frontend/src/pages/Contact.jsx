import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router'
// import { RxCross2 } from "react-icons/rx";

const Contact = () => {
  return (
    <div>
      <div className='bg-black'>
        <Navbar />
      </div>
      <div id='contact' className='p-[30px] lg:p-[80px] flex  justify-center   md:justify-start items-center'>
        <div className='relative z-4 border rounded px-3 py-[30px] bg-white w-[80%] sm:w-[45%] md:w-[50%] lg:w-[35%] shadow-[0_0_15px_rgba(0,0,0,0.25)] '>

          <div className='text-center text-blue-600 mb-4 text-[20px] lg:text-[24px]'>Contact</div>
          <form className='flex flex-col gap-4' >
            <input type="text" name='username' placeholder='Name' className='h-[40px] border text-[12px] lg:text-[14px] pl-3 rounded focus:outline-none' />
            <input type="email" name='email' placeholder='Email' className='h-[40px] border pl-3 text-[12px] lg:text-[14px] rounded focus:outline-none' />
            <input type="text" name='number' placeholder='Number' className='h-[40px] text-[12px] lg:text-[14px] border pl-3 rounded focus:outline-none' />
            <textarea name="textarea" id="textarea" placeholder='Enter your message here' className='h-[100px] text-[12px] lg:text-[14px] border p-3 rounded focus:outline-none'></textarea>
            <button type='submit' className='bg-blue-600 text-white py-2 rounded hover:bg-blue-700 active:bg-blue-600 cursor-pointer text-[12px] lg:text-[14px]'>
              Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
