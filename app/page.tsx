"use client"
import Nav from './Components/navbar';
import Frontpage from './Components/frontpage';
import Languages from './Components/Languages';
import Education from './Components/education';

export default function Home() {
    return (
        <div className=' bg-white px-10 md:px-20 lg:px-40'>
            <section className="min-h-screen">
                <Nav/>
                <Frontpage/>
                <Education/>
                <Languages/>
            </section>
        </div>
    )
}
