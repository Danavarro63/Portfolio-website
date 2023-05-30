"use client"

import React from 'react'

function education() {
    return (
        <div>
            <main>
                <div
                    className="text-center shadow-2xl p-10 rounded-xl dark:bg-white flex-1 max-w-5xl mx-auto mt-24 hover:scale-105 transition-transform duration-200 ease-in  mb-56 ">
                    <h1 className="text-4xl py-1 pb-10">Education</h1>
                    <div className="flex justify-center gap-10">
                        <div
                            className="shadow-md rounded-lg hover:scale-105 transition-transform duration-200 ease-in p-6">
                            <h2 className="text-l sm:text-2xl leading-8 py-3">A-Levels</h2>
                            <div className="flex items-center justify-center">
                                <ul className='sm:text-xs lg:text-xl'>
                                    <li>A - Computer Science</li>
                                    <li>A - Mathematics</li>
                                    <li>A - Photography</li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="shadow-md rounded-lg hover:scale-105 transition-transform duration-200 ease-in p-6">
                            <h2 className="text-l sm:text-2xl leading-8 py3 pb-7 ">Studying Degree</h2>
                            <ul className='sm:text-xs lg:text-xl min-w-full whitespace'>Computer-Science with Year in Industry - 2.1</ul>
                        </div>
                        <div
                            className="flex flex-col shadow-md rounded-lg hover:scale-105 transition-transform duration-200 ease-in p-6">
                            <h2 className="text-l sm:text-2xl leading-8 py-3 align">GCSEs</h2>
                            <ul className='sm:text-xs lg:text-xl'>
                                <li>9 - Computer Science</li>
                                <li>8 - Mathematics</li>
                                <li>8 - Chemistry</li>
                                <li>8 - Photography</li>
                                <li>7 - Biology</li>
                                <li>6 - Further Mathematics</li>
                                <li>6 - Physics</li>
                                <li>6 - English Literature</li>
                                <li>5 - English Language</li>
                                <li>5 - History</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default education