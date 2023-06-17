import {StaticImageData} from 'next/image';
import React from 'react'
import Image from 'next/image'
import PlaceHolder from 'public/Project PlaceHolder.png'
import FlappyBird from 'public/Flappy.jpg'
import Revision from 'public/Revision.png'
import Portfolio from 'public/Portfolio.jpg'
import Othello from 'public/othello-grid.png'
import Eco from 'public/Eco-Friendly.png'
interface projectCardProps {
    image : StaticImageData;
    livebutton : boolean;
    giturl : string;
    liveurl : string;
    title : string;
}

interface gitButtonProps {
    url : string;
    label : string;
}

function projects() {
    return (
        <main
            className="px-4 pb-32 md:pb-72 "
            data-aos="zoom-in-up"
            id='projects'
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div
                className="text-center p-6 rounded-xl mb-40 dark:bg-white flex flex-1 mx-auto flex-col">
                <h1 className="text-4xl sm:text-6xl py-1 mb-12 sm:mb-24">Projects</h1>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    <ProjectCard
                        title="Python/Pygame"
                        liveurl=''
                        giturl='https://github.com/Danavarro63/Portfolio-website'
                        livebutton={false}
                        image={FlappyBird}/>
                    <ProjectCard
                        title="HTML/CSS/JavaScript"
                        liveurl='https://revision-website.vercel.app/'
                        giturl='https://github.com/Danavarro63/Revision-website'
                        livebutton={true}
                        image={Revision}/>
                    <ProjectCard
                        title="NextJS/Tailwind"
                        liveurl='https://danielsimms.dev/'
                        giturl='https://github.com/Danavarro63/Portfolio-website'
                        livebutton={true}
                        image={Portfolio}/>
                     <ProjectCard
                        title="Java/Swing"
                        liveurl=''
                        giturl='https://github.com/Danavarro63/Reversi'
                        livebutton={false}
                        image={Othello}/>
                    <ProjectCard
                        title="NextJs/Tailwind"
                        liveurl='https://eco-friendly-website.vercel.app/'
                        giturl='https://github.com/Danavarro63/eco-friendly-website'
                        livebutton={true}
                        image={Eco}/>
                </div>
            </div>
        </main>
    );
}

function ProjectCard({image, livebutton, giturl, liveurl, title} : projectCardProps) {
    return (
        <div className="relative">
            <Image
                className="block border-black/7 border-2"
                src={image}
                title="Project"
                alt={`Project Photo`}
                style={{
                width: '100%',
                height: '100%',
                position: 'relative'
            }}/>
            <div
                className="flex flex-col gap-4 h-full w-full border-black border-2 justify-between items-center absolute top-0 left-0  bg-gradient-to-r from-cyan-500/60 to-teal-500/60 opacity-0 text-white hover:opacity-100 transition ease-in-out duration-500 hover:cursor-pointer">
                <h1 className='z-10 text-white left-0 sm:text-md md:text-xl lg:text-2xl font-light pt-10'>{title}</h1>
                <div className='gap-4 left-10 pb-20'>
                    <div className="flex gap-4">
                        <Button url={giturl} label="GitHub"/> {livebutton && <Button url={liveurl} label="Live"/>}
                    </div>
                </div>  
            </div>
        </div>
    );
}

function Button({url, label} : gitButtonProps) {
    return (
        <a
            className="bg-teal-400 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition ease-in-out duration-500"
            href={url}>
            {label}
        </a>
    );
}

export default projects;
