import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
    return (
        <footer className='bg-black px-6 py-8 md:px-[100px] md:py-12'>
            {/* Main Content Container */}
            <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 mb-12'>
                
                {/* Left: Heading with Box Effect */}
                <div className='border-2 border-blue-500 p-4 md:p-6 flex-shrink-0'>
                    <h2 className='text-white font-bold text-lg md:text-2xl leading-tight text-center'>
                        READY FOR YOUR
                        <br />
                        <span className='text-red-500'>FIRST</span> TRAINING?
                    </h2>
                </div>

                {/* Center: Navigation Links */}
                <div className='flex flex-col items-center gap-3 md:gap-4'>
                    <p className='text-xs md:text-sm text-white/60 hover:text-white cursor-pointer transition-colors'>
                        HOME
                    </p>
                    <p className='text-xs md:text-sm text-white/60 hover:text-white cursor-pointer transition-colors'>
                        ABOUT
                    </p>
                    <p className='text-xs md:text-sm text-white/60 hover:text-white cursor-pointer transition-colors'>
                        REGISTER
                    </p>
                    <p className='text-xs md:text-sm text-white/60 hover:text-white cursor-pointer transition-colors'>
                        CONTACT
                    </p>
                </div>

                {/* Right: Social Icons */}
                <div className='flex flex-row gap-4 md:gap-6 text-white'>
                    <a href='#' className='text-2xl md:text-3xl hover:text-blue-500 transition-colors'>
                        <FaInstagram />
                    </a>
                    <a href='#' className='text-2xl md:text-3xl hover:text-blue-500 transition-colors'>
                        <CiFacebook />
                    </a>
                    <a href='#' className='text-2xl md:text-3xl hover:text-blue-500 transition-colors'>
                        <CiLinkedin />
                    </a>
                </div>
            </div>

            {/* Footer Bottom: Copyright */}
            <div className='text-xs md:text-sm text-red-500 font-semibold text-center'>
                © 2023 CHAMPACAD LTD.
            </div>
        </footer>
    )
}

export default Footer