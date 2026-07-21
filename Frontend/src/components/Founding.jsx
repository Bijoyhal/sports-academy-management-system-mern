import React from 'react'
import picture from '../assets/picture2.png'

const Founding = () => {
  return (
    <div className='flex flex-col lg:flex-row px-[20px] py-[30px] md:p-[70px]  lg:px-[100px] lg:py-[70px] gap-4'>
      <div className='lg:w-[50%] p-[20px] lg:p-[30px]'>
        <img src={picture} alt="pic" className='w-full' />
      </div>
      <div className='lg:w-[50%] px-[20px] py-[30px] lg:p-[30px]'>
        <div className='mb-[60px] border-l-4 border-red-600 px-6 py-2'>
          <h1 className='text-2xl md:text-3xl font-bold text-black'>FOUNDING OF THE FOOTBALL ACADEMY</h1>
        </div>

        <p className='text-[12px] md:text-[14px] text-black/50'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type .
          <br />
          <br />
          and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentials.
        </p>
      </div>
    </div>
  )
}

export default Founding
