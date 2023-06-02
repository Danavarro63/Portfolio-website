'use client'
import React, {useState} from 'react'
import 'aos/dist/aos.css'
import {AiOutlineShrink} from 'react-icons/ai'


function navbar() {
    return (
        <nav className='py-10 px-20 flex justify-between sm:mb-12'>
            <h1 className=' text-xl' data-aos="zoom-down" data-aos-duration="1500" ><AiOutlineShrink className='text-teal-700' size={40}/></h1>
            <ul className=' flex items-center'>
                <li>
                    <a
                        className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 '
                        href='https://drive.google.com/file/d/1uCYNfzjvmC1uIAtMKSQyafk9F0xBZUsR/view?usp=sharing'
                        target='_blank'
                        rel="noopener noreferrer" data-aos="zoom-down" data-aos-duration="1500">Resume</a>
                </li>

            </ul>
        </nav>
    )
}

export default navbar