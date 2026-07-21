import React, { useContext } from 'react'
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { userAuth } from '../context/userContext';

const Register = () => {
    const {register , setRegister , handleRegister , submitRegister} = useContext(userAuth)
    return (
        <>
            <div className='h-[100vh] flex justify-center items-center  '>
                <div className='border rounded px-3 py-4 bg-white w-[80%] sm:w-[45%] md:w-[50%] lg:w-[27%] shadow-[0_0_15px_rgba(0,0,0,0.25)] '>
                    <Link to="/">
                        <div className='flex justify-end items-center mb-5 cursor-pointer'>
                            <RxCross2 />
                        </div>
                    </Link>

                    <div className='text-center text-blue-600 mb-4 text-[20px] lg:text-[24px]'>Register</div>
                    <form className='flex flex-col gap-4' onSubmit={submitRegister} >
                        <input type="text" name='username' value={register.username} onChange={handleRegister}   placeholder='Username' className='h-[40px] border text-[12px] lg:text-[14px] pl-3 rounded focus:outline-none' />
                        <input type="email" name='email' value={register.email} onChange={handleRegister}  placeholder='Email' className='h-[40px] border pl-3 text-[12px] lg:text-[14px] rounded focus:outline-none' />
                        <input type="password" name='password' value={register.password} onChange={handleRegister}  placeholder='Password' className='h-[40px] text-[12px] lg:text-[14px] border pl-3 rounded focus:outline-none' />
                        <button type='submit' className='bg-blue-600 text-white py-2 rounded hover:bg-blue-700 active:bg-blue-600 cursor-pointer text-[12px] lg:text-[14px]'>
                            Register
                        </button>
                    </form>
                    <div className='text-center text-[12px] lg:text-[14px] mt-4 text-black/50'>
                        Already have an account? <Link to="/Login" className='text-blue-600 hover:text-blue-500 '>Login</Link>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Register
