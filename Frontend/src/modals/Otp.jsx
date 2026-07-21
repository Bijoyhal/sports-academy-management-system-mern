import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { userAuth } from '../context/userContext'


const Otp = () => {

    const{setOtp, handleOtp ,getOtp, submitOtp} = useContext(userAuth);
   
   const navigate = useNavigate()

    return (
        <div className='flex justify-center items-center min-h-[100vh] bg-black/20 absolute z-30 top-0 left-0 right-0'>
            <div className=' px-5 py-[30px] rounded-[10px] bg-white'>
                <input type="text" placeholder='Enter your otp here' name='otp' value={getOtp} onChange={handleOtp} className='mb-5 border black h-[40px] w-[250px] pl-[10px] text-[14px] focus:outline-none' />
                <div className='flex justify-center gap-5 w-full'>
                    <button className='text-[14px] bg-blue-500  text-white px-5 py-2 rounded cursor-pointer' onClick={submitOtp} >Send</button>
                    <button className='text-[14px] bg-gray-500  text-white px-5 py-2 rounded cursor-pointer' onClick={()=> setOtp(false)}  >Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Otp