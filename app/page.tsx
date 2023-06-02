"use client"
import Nav from './Components/navbar';
import Frontpage from './Components/frontpage';
import Languages from './Components/Languages';
import Education from './Components/education';
import Projects from './Components/projects';

export default function Home() {
    return (
        <div className=' bg-white px-10'>
            <section className="min-h-screen">
                <Nav/>
                <Frontpage/>
                <Education/>
                <Languages/>
                <Projects />
            </section>
        </div>
    )
}
