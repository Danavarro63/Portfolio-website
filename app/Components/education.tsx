"use client"

import React from 'react'

function Education() {
    return (
      <div>
        <main className="px-4">
          <div className="text-center shadow-2xl p-6 rounded-xl dark:bg-white flex flex-col gap-4 max-w-md mx-auto mt-12 mb-8">
            <h1 className="text-2xl md:text-4xl py-1">Education</h1>
            <div className="flex flex-col gap-4">
              <div className="shadow-md rounded-lg hover:scale-105 transition-transform duration-200 ease-in p-6">
                <h2 className="text-base md:text-2xl leading-6 py-3">A-Levels</h2>
                <ul className="text-xs md:text-xl">
                  <li>A - Computer Science</li>
                  <li>A - Mathematics</li>
                  <li>A - Photography</li>
                </ul>
              </div>
              <div className="shadow-md rounded-lg hover:scale-105 transition-transform duration-200 ease-in p-6">
                <h2 className="text-base md:text-2xl leading-6 py-3">Studying Degree</h2>
                <p className="text-xs md:text-xl">Computer-Science with Year in Industry - 2.1</p>
              </div>
              <div className="shadow-md rounded-lg hover:scale-105 transition-transform duration-200 ease-in p-6">
                <h2 className="text-base md:text-2xl leading-6 py-3">GCSEs</h2>
                <ul className="text-xs md:text-xl">
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
    );
  }
  
  export default Education;
  