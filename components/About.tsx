import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from './Magnetic';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-header > *', {
        scrollTrigger: {
          trigger: '.about',
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.about-text p', {
        scrollTrigger: {
          trigger: '.about-text',
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
      document.querySelectorAll('[data-counter]').forEach(counter => {
        const target = parseInt(counter.getAttribute('data-counter') || '0');
        ScrollTrigger.create({
          trigger: counter,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(counter, {
              innerHTML: target,
              duration: 2,
              snap: { innerHTML: 1 },
              ease: 'power2.out',
            });
          },
          once: true,
        });
      });

      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="about py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="about-header mb-20">
        <div className="flex items-center gap-4 text-[#00ff88] text-sm font-bold uppercase tracking-[0.2em] mb-4">
          <span className="w-10 h-[1px] bg-[#00ff88]"></span>
          About Me
        </div>
        <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
          Turning ideas into<br />
          <span className="text-[#00ff88]">digital reality</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="about-text text-xl text-[#888888] leading-relaxed space-y-8">
          <p>
            I’m a Computer Science student at the University of Nottingham currently completing a Year in Industry at IBM, where I work across AI engineering, backend development, automation pipelines, and cloud-native systems.
          </p>
          <p>
            My work spans building Retrieval-Augmented Generation (RAG) systems, fine-tuning LLMs, developing scalable Python pipelines, and improving model performance through confusion-matrix driven optimisation.
          </p>
          <p>
            I’m passionate about designing clean, reliable systems and creating intuitive user experiences — from full-stack web apps to complex AI-powered learning tools.
          </p>
        </div>

        <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { num: 15, label: "Projects Completed" },
            { num: 3, label: "Years Experience" },
            { num: 10, label: "Academic Projects" }
          ].map((stat, i) => (
            <Magnetic key={i}>
              <div className="stat-card p-8 bg-white/[0.02] border border-white/5 rounded-2xl text-center hover:bg-white/5 hover:border-[#00ff88] transition-all group">
                <div className="text-5xl font-bold text-[#00ff88] font-mono mb-2 group-hover:drop-shadow-[0_0_10px_rgba(0,255,136,0.5)] transition-all">
                  <span data-counter={stat.num}>0</span>
                </div>
                <div className="text-sm text-[#888888]">{stat.label}</div>
              </div>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;