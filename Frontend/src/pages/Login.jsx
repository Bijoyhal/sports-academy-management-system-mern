import React, { useContext } from 'react'
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { userAuth } from '../context/userContext';
import Otp from '../modals/Otp';

const Login = () => {
  const {Login,handleLogin , submitLogin , otp} = useContext(userAuth); 

  return (
    <>
      <div className='h-[100vh] flex justify-center items-center relative'>
        <div className='border rounded px-3 py-4 bg-white w-[80%] sm:w-[45%] md:w-[50%] lg:w-[27%] shadow-[0_0_15px_rgba(0,0,0,0.25)] '>
          <Link to="/">
            <div className='flex justify-end items-center mb-5 cursor-pointer'>
              <RxCross2 />
            </div>
          </Link>

          <div className='text-center text-blue-600 mb-4 text-[20px] lg:text-[24px]'>Login</div>
          <form className='flex flex-col gap-4' onSubmit={submitLogin}>
            <input type="email" name='email' value={Login.email} onChange={handleLogin} placeholder='Email' className='h-[40px] text-[12px] lg:text-[14px] border pl-3 rounded focus:outline-none' />
            <input type="password" name='password' value={Login.password} onChange={handleLogin} placeholder='Password' className='h-[40px] border text-[12px] lg:text-[14px] pl-3 rounded focus:outline-none' />
            <button type='submit' className='bg-blue-600 text-white text-[12px] lg:text-[14px] py-2 rounded hover:bg-blue-700 active:bg-blue-600 cursor-pointer'>
              Login
            </button>
          </form>
          <div className='text-center text-[12px]  lg:text-[14px] mt-4 text-black/50'>
            Already have an account? <Link to="/Register" className='text-blue-600 hover:text-blue-500 '>Register</Link>
          </div>

        </div>
         {otp && <Otp/> }
      </div>
    </>
  )
}

export default Login
