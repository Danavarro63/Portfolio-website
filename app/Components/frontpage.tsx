import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image';
import DanielPfp from 'public/ProfilePic.png';

function FrontPage() {
  return (
    <div>
      <div className="text-center p-10">
        <h2 className="text-5xl pb-2 text-teal-600 font-medium sm:mb-6 sm:text-7xl">Daniel Simms</h2>
        <h3 className="text-2xl py-2 sm:text-4xl">Software Engineer</h3>
        <p className="text-md py-5 leading-8 text-gray-800 sm:text-xl">
          Computer Science student studying at the University of Nottingham. Learning Full Stack Development and have keen interests in Java and C++.
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <a className="cursor-pointer" href="https://github.com/Danavarro63"><AiFillGithub /></a>
          <a className="cursor-pointer" href="https://www.linkedin.com/in/daniel-simms-5956b9204/"><AiFillLinkedin /></a>
        </div>
        <div className="mx-auto border-solid border-black rounded-full aspect-square w-80 mt-20 flex justify-center items-center">
          <Image priority src={DanielPfp} alt="ProfilePhoto" />
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
