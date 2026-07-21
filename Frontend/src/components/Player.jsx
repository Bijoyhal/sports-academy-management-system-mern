import React from 'react'
import picture from '../assets/picture2.png'

const Player = () => {
    return (

        <div id='player' className=' flex flex-col- lg:flex-row items-center  px-[20px] py-[20px] md:p-[100px]'>
            <div className='w-[100%] lg:w-[50%] p-[20px] lg:p-[30px]'>
                <img src={picture} alt="pic" className='w-full' />
            </div>
            <div className='w-[100%] lg:w-[50%] text-center'>
                <h1 className='text-xl lg:text-4xl text-white/50 font-bold mb-5'>
                    PLAYER OF THE WEEK
                </h1>
                <h1 className='text-2xl lg:text-6xl text-white font-bold mb-5'>
                    JOHAN BRANDY
                </h1>
                <div className='flex gap-5 justify-center'>
                    <div className='text-[25px] text-black/50 font-bold'>
                        <span className='text-[#4395D2]'>10</span> GOALS
                    </div>
                    <div className='text-[25px] text-black/50 font-bold'>
                        <span className='text-[#4395D2]'>5</span> ASSIST
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Player
