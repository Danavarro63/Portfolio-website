'use client'
import React, {useState} from 'react'
function navbar() {
    return (
        <nav className='py-10 flex justify-between sm:mb-12'>
            <h1 className=' text-xl'>Developed by Daniel</h1>
            <ul className=' flex items-center'>
                <li>
                    <a
                        className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 '
                        href='https://drive.google.com/file/d/1uCYNfzjvmC1uIAtMKSQyafk9F0xBZUsR/view?usp=sharing'
                        target='_blank'
                        rel="noopener noreferrer">Resume</a>
                </li>

            </ul>
        </nav>
    )
}

export default navbar