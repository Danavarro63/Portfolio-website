import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Magnetic from './Magnetic';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.contact-bg-text', {
        x: 100,
        scrollTrigger: {
          trigger: '.contact',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%',
        }
      });

      tl.from('.contact-title', {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'back.out(1.7)'
      })
      .from('.contact-email', {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          ease: 'back.out(1.7)'
      }, '-=0.4')
      .from('.social-link', {
          y: 20,
          opacity: 0,
          scale: 0.5,
          stagger: 0.1,
          duration: 0.6,
          ease: 'back.out(1.7)'
      }, '-=0.4');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="contact" className="contact relative py-32 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="contact-bg-text absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-bold text-white/5 pointer-events-none whitespace-nowrap leading-none">
        LET'S TALK
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 text-[#00ff88] text-sm font-bold uppercase tracking-[0.2em] mb-8">
          <span className="w-10 h-[1px] bg-[#00ff88]"></span>
          Get in Touch
          <span className="w-10 h-[1px] bg-[#00ff88]"></span>
        </div>

        <p className="contact-title text-3xl md:text-5xl font-normal leading-tight mb-12">
          I'm open to software engineering roles, collaborations, and interesting AI or web projects
        </p>

        <Magnetic>
          <a 
            href="mailto:danielsimms.dev@gmail.com" 
            className="contact-email inline-block text-4xl md:text-6xl lg:text-7xl font-bold text-[#00ff88] relative group pb-2"
          >
            danielsimms.dev@gmail.com
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#00ff88] scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-500"></span>
          </a>
        </Magnetic>

        <div className="flex justify-center gap-6 mt-16">
          <Magnetic>
            <a href="https://github.com/Danavarro63" target="_blank" rel="noopener noreferrer" className="social-link w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-[#00ff88] hover:border-[#00ff88] transition-all bg-[#0a0a0a]">
              <Github size={24} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="https://www.linkedin.com/in/daniel-simms-5956b9204" target="_blank" rel="noopener noreferrer" className="social-link w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-[#00ff88] hover:border-[#00ff88] transition-all bg-[#0a0a0a]">
              <Linkedin size={24} />
            </a>
          </Magnetic>
           <Magnetic>
            <a href="mailto:danielsimms.dev@gmail.com" className="social-link w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-[#00ff88] hover:border-[#00ff88] transition-all bg-[#0a0a0a]">
              <Mail size={24} />
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default Contact;