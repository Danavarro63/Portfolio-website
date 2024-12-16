import React, {useEffect} from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import Image from 'next/image';
import DanielPfp from '/public/ProfilePic.png';
import AOS from 'aos'
import 'aos/dist/aos.css'

function FrontPage() {
    return (
        <div>
            <div className="text-center p-10 pb-32 md:pb-72">
                <h1
                    className="text-5xl pb-2 text-teal-600 font-medium sm:mb-6 sm:text-7xl"
                    data-aos="zoom-in-down"
                    data-aos-duration="1000">Daniel Simms</h1>
                <h3
                    className="text-2xl py-2 sm:text-4xl"
                    data-aos="zoom-in-down"
                    data-aos-duration="1500">Computer Science Undergraduate</h3>
                <p
                    className="text-md py-5 leading-8 text-gray-800 sm:text-xl"
                    data-aos="fade-right"
                    data-aos-duration="1800">
                    Computer Science student studying at the University of Nottingham. Learning Full
                    Stack Development and have keen interests in Java and C++.
                </p>
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                    <a
                        className="cursor-pointer"
                        href="https://github.com/Danavarro63"
                        data-aos="flip-up"
                        data-aos-duration="1750"><AiFillGithub/></a>
                    <a
                        className="cursor-pointer"
                        href="https://www.linkedin.com/in/daniel-simms-5956b9204/"
                        data-aos="flip-up"
                        data-aos-duration="1750"><AiFillLinkedin/></a>
                </div>
                <div className="mx-auto rounded-full aspect-square w-50 max-w-xl mt-20">
                    <div className="relative pb-full">
                        <Image
                            src={DanielPfp}
                            data-aos="zoom-in-up"
                            data-aos-duration="1000"
                            alt="ProfilePhoto"
                            className="rounded-full"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FrontPage;
