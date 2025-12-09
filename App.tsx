import React, { useEffect, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      gsap.to('.progress-bar', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        }
      });
    });

    return () => ctx.revert();
  }, [isLoading]);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-[#00ff88] selection:text-[#0a0a0a]">
      <CustomCursor />

      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="progress-bar fixed top-0 left-0 h-[3px] w-full bg-[#00ff88] z-[100] origin-left scale-x-0 shadow-[0_0_10px_rgba(0,255,136,0.4)]"></div>

        <Navbar />
        
        <main>
          <Hero startAnimation={!isLoading} />
          <Marquee />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <footer className="py-8 px-6 md:px-12 border-t border-white/5 text-[#888888] text-sm flex justify-between items-center font-mono">
          <div>© 2025 Daniel Simms. All rights reserved.</div>
        </footer>
      </div>
    </div>
  );
};

export default App;