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

        // 🔥 PFP animation  
        gsap.from('.about-pfp', {
          scrollTrigger: {
            trigger: '.about-pfp',
            start: 'top 85%',
          },
          opacity: 0,
          y: 40,
          scale: 0.9,
          duration: 1,
          ease: 'power3.out',
        });

        gsap.to('.about-pfp', {
          backgroundPosition: '200% 50%',
          duration: 8,
          ease: 'none',
          repeat: -1,
        });

        gsap.fromTo(
          '.about-pfp',
          { boxShadow: '0 0 0px rgba(0,255,136,0.12)' },
          { boxShadow: '0 0 40px rgba(0,255,136,0.35)', duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut' }
        );

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
            Turning complex ideas into <br />
            <span className="text-[#00ff88]">working software.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="about-text text-xl text-[#888888] leading-relaxed space-y-8">
            <p>
              I’m a final-year Computer Science student at the University of Nottingham, having completed a Year in Industry at IBM focused on AI engineering, backend development, automation pipelines, and cloud-native systems.
            </p>
            <p>
              I build RAG systems, fine-tune LLMs, develop scalable Python pipelines, and optimise model performance using confusion-matrix analysis.
            </p>
            <p>
              I’m passionate about designing clean, reliable systems and creating intuitive user experiences, from full-stack web apps to complex AI-powered learning tools.
            </p>
          </div>

        <div className="flex justify-center lg:justify-end">
    <div className="about-pfp relative p-[4px] rounded-full bg-[linear-gradient(120deg,rgba(0,255,136,0.6),rgba(0,255,136,0.2),rgba(0,255,136,0.6))] bg-[length:200%_200%] w-120 h-120 md:w-[480px] md:h-[480px]">
        
      <div className="relative rounded-full overflow-hidden border border-[#00ff88]/60 shadow-[0_10px_40px_rgba(0,255,136,0.25)] w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/20 via-transparent to-transparent pointer-events-none"></div>

        <img
          src="/Daniel%20Simms.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </div>

        </div>
      </section>
    );
  };

  export default About;
