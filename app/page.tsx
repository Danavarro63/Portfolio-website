"use client"
import Nav from './Components/navbar';
import Frontpage from './Components/frontpage';
import Languages from './Components/Languages';
import Education from './Components/education';
import Projects from './Components/projects';
import Head from 'next/head';
import JsonLd from './Components/JsonLd';
import SocialShare from './Components/SocialShare';

export default function Home() {

    return (
        <div className=' bg-white px-10'>
            <JsonLd />
            <Head>
                <title>Daniel Simms - Computer Science Undergraduate</title>
                <meta name="description" content="Daniel Simms, Computer Science student at the University of Nottingham, learning Full Stack Development, with expertise in Java and C++." />
                <meta name="keywords" content="Daniel Simms, Computer Science, Full Stack Development, Java, C++, University of Nottingham, IBM, Software Engineer, Consultant, Ai, Artificial Intelligence, Daniel, Simms" />
                <meta property="og:title" content="Daniel Simms - Computer Science Undergraduate" />
                <meta property="og:description" content="Daniel Simms, Computer Science student at the University of Nottingham, learning Full Stack Development, with expertise in Java and C++." />
                <meta property="og:image" content="/ProfilePic.png" />
                <meta property="og:url" content="https://danielsimms.dev" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Daniel Simms - Computer Science Undergraduate" />
                <meta name="twitter:description" content="Daniel Simms, Computer Science student at the University of Nottingham, learning Full Stack Development, with expertise in Java and C++." />
                <meta name="twitter:image" content="/ProfilePic.png" />
            </Head>
            <Nav/>
            <Frontpage/>
            <Education/>
            <Languages/>
            <Projects/>
            <SocialShare />
        </div>
    )
}
