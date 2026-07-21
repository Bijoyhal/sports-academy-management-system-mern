import React from 'react'
import { useContext } from 'react'
import { userAuth } from '../context/userContext'

const Header = () => {
    const {logout} = useContext(userAuth);
    return (
        <div className='flex justify-between items-center bg-gray-200 py-3 px-[20px] md:px-[50px] lg:px-[100px]'>
            <h1 className='text-[16px] md:text-[20px] font-semibold text-gray-700'>&#127942; Champacad Academy</h1>
            <button onClick={logout}  className="flex text-[14px] items-center justify-center px-3 py-3 bg-red-600 text-white rounded hover:bg-red-400 transition">
                Logout
            </button>
        </div>
    )
}

export default Header
