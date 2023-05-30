"use client"
import React from 'react';
import ReactIMG from 'public/react-js-logo.png';
import JavaIMG from 'public/java.png';
import CppIMG from 'public/c-plus-plus.png';
import PythonIMG from 'public/python-logo.png';
import HtmlIMG from 'public/html (1).png';
import Image from 'next/image';
import javascriptIMG from 'public/javascript-logo.png';
import cssIMG from 'public/css3.png';

function SecondPage() {
    return (
        <div>
            <main>
                <div
                    className="text-center shadow-2xl p-10 rounded-xl mb-10 mt-3 dark:bg-white flex-1 mx-auto">
                    <h1 className="text-4xl py-1 pb-10">Programming Languages</h1>
                    <div className="flex justify-center gap-40">
                        <div
                            className="flex flex-col text-center items-center justify-center shadow-md rounded-lg hover:scale-105 transition-transform duration-200 ease-in">
                            <h2 className="text-2xl leading-8 py-3">Java</h2>
                            <Image src={JavaIMG} alt={'Java Image'} width={150}/>
                        </div>
                        <div
                            className="flex flex-col text-center items-center justify-center shadow-md rounded-lg hover:scale-105 transition-transform duration-200 ease-in">
                            <h2 className="text-2xl leading-8 py-3">C++</h2>
                            <Image src={CppIMG} alt={'CPP Image'} width={150}/>
                        </div>
                        <div
                            className="flex flex-col text-center items-center justify-center shadow-md rounded-lg hover:scale-105 transition-transform duration-200 ease-in">
                            <h2 className="text-md sm:text-2xl leading-8 py-3">Python</h2>
                            <Image src={PythonIMG} alt={'Python Image'} width={150}/>
                        </div>
                        <div
                            className="flex flex-col text-center items-center justify-center shadow-md rounded-lg hover:scale-105 transition-transform duration-200 ease-in">
                            <h2 className="text-2xl leading-8 py-3">React</h2>
                            <Image src={ReactIMG} alt={'React Image'} width={150}/>
                        </div>
                        <div
                            className="flex flex-col text-center items-center justify-center shadow-md rounded-lg hover:scale-105 transition-transform duration-200 ease-in">
                            <h2 className="text-2xl leading-8 py-3">HTML</h2>
                            <Image src={HtmlIMG} alt={'HTML Image'} width={150}/>
                        </div>
                        <div
                            className="flex flex-col text-center items-center justify-center shadow-md rounded-lg hover:scale-105 transition-transform duration-200 ease-in">
                            <h2 className="text-2xl leading-8 py-3">CSS</h2>
                            <Image src={cssIMG} alt={'CSS Image'} width={150}/>
                        </div>
                        <div
                            className="flex flex-col text-center items-center justify-center shadow-md rounded-lg hover:scale-105 transition-transform duration-200 ease-in">
                            <h2 className="text-2xl leading-8 py-3">JavaScript</h2>
                            <Image src={javascriptIMG} alt={'CSS Image'} width={150}/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SecondPage;
