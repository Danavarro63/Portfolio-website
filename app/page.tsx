"use client"
import Nav from './Components/navbar';
import Frontpage from './Components/frontpage';
import Languages from './Components/Languages';
import Education from './Components/education';

export default function Home() {
    return (
        <div className=' bg-white px-4 sm:px-10 dark:bg-gray-900 min-w-min'>
            <section className="min-h-screen">
                <Nav/>
                <Frontpage/>
                <Education/>
                <Languages/>
            </section>
        </div>
    )
}
