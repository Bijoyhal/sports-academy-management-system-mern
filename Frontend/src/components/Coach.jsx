import React from 'react'
import coach1 from '../assets/coach1.png'
import coach2 from '../assets/coach2.png'
import coach3 from '../assets/coach3.png'
const Coach = () => {
    return (
        <div className='p-[30px] sm:p-[50px]  md:p-[100px] flex flex-col gap-[50px]'>
            <div className='flex flex-col sm:flex-row gap-[30px]'>
                <div className='w-[100%]  sm:w-[30%] flex justify-center items-center'>
                    <img src={coach1} alt="" className='w-[80%]' />
                </div>
                <div className='flex justify-between items-center w-[100%] sm:w-[70%]'>
                    <div div className='mb-[60px] border-l-4 border-red-600 px-6 py-2'>
                        <h1 className='text-2xl md:text-3xl font-bold text-black mb-4'>JAN PANTUCEK</h1>
                        <p className='text-[12px] md:text-[16px] text-black/50 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quibusdam a maiores facilis. Soluta explicabo quaerat similique voluptatum consequuntur ea placeat aliquid quae labore? Quos, at. Quisquam rem itaque cupiditate.</p>
                    </div>
                </div>
            </div>

             <div className='flex flex-col sm:flex-row gap-[30px]'>
                <div className='w-[100%]  sm:w-[30%] flex justify-center items-center'>
                    <img src={coach2} alt="" className='w-[80%]' />
                </div>
                <div className='flex justify-between items-center w-[100%] sm:w-[70%]'>
                    <div div className='mb-[60px] border-l-4 border-red-600 px-6 py-2'>
                        <h1 className='text-2xl md:text-3xl font-bold text-black mb-4'>OLIVER WAHN</h1>
                        <p className='text-[12px] md:text-[16px] text-black/50 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quibusdam a maiores facilis. Soluta explicabo quaerat similique voluptatum consequuntur ea placeat aliquid quae labore? Quos, at. Quisquam rem itaque cupiditate.</p>
                    </div>
                </div>
            </div>

             <div className='flex flex-col sm:flex-row gap-[30px]'>
                <div className='w-[100%]  sm:w-[30%] flex justify-center items-center'>
                    <img src={coach3} alt="" className='w-[80%]' />
                </div>
                <div className='flex justify-between items-center w-[100%] sm:w-[70%]'>
                    <div div className='mb-[60px] border-l-4 border-red-600 px-6 py-2'>
                        <h1 className='text-2xl md:text-3xl font-bold text-black mb-4'>BRANDAN HULK</h1>
                        <p className='text-[12px] md:text-[16px] text-black/50 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quibusdam a maiores facilis. Soluta explicabo quaerat similique voluptatum consequuntur ea placeat aliquid quae labore? Quos, at. Quisquam rem itaque cupiditate.</p>
                    </div>
                </div>
            </div>

       

        </div>
    )
}

export default Coach
