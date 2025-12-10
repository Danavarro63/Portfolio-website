import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Magnetic from './Magnetic';
import { Eye } from 'lucide-react';

interface HeroProps {
  startAnimation: boolean;
}

const Hero: React.FC<HeroProps> = ({ startAnimation }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create Particles
      const particleCount = 50;
      if (particlesRef.current) {
        particlesRef.current.innerHTML = ''; // clear
        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.className = 'absolute w-1 h-1 bg-[#00ff88] rounded-full opacity-30';
          particle.style.left = Math.random() * 100 + '%';
          particle.style.top = Math.random() * 100 + '%';
          particlesRef.current.appendChild(particle);

          gsap.to(particle, {
            y: -100 - Math.random() * 200,
            x: (Math.random() - 0.5) * 100,
            opacity: 0,
            duration: 3 + Math.random() * 4,
            repeat: -1,
            delay: Math.random() * 2,
            ease: 'none',
            onRepeat: function() {
              gsap.set(particle, {
                y: 0,
                x: 0,
                opacity: 0.3,
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              });
            }
          });
        }
      }

      if (!startAnimation) return;

      const tl = gsap.timeline({ delay: 0.5 });

      tl.from('.hero-badge', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from('.hero-char', {
        y: '100%',
        rotateX: -90,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        stagger: 0.02,
      }, '-=0.4')
      .from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5')
      .from('.hero-btn', {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      }, '-=0.4')
      .from('.scroll-indicator', {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, '-=0.2');

      // Glitch Effect
      const glitchTitle = document.querySelector('.hero-glitch');
      const glitch = () => {
        if (!glitchTitle) return;
        const glitchTl = gsap.timeline();
        glitchTl.to(glitchTitle, {
          skewX: 20,
          textShadow: '-5px 0 #ff0080, 5px 0 #00ffff',
          duration: 0.1,
        })
        .to(glitchTitle, {
          skewX: -20,
          textShadow: '5px 0 #ff0080, -5px 0 #00ffff',
          duration: 0.1,
        })
        .to(glitchTitle, {
          skewX: 0,
          textShadow: '0 0 60px rgba(0, 255, 136, 0.4)',
          duration: 0.1,
        });
        gsap.delayedCall(5 + Math.random() * 10, glitch);
      };
      if (startAnimation) {
         gsap.delayedCall(3, glitch);
      }

      gsap.to('.hero-orb', {
        scale: 1.2,
        opacity: 0.8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.scroll-dot', {
        y: 50,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: 'power2.in',
      });

    }, containerRef);

    return () => ctx.revert();
  }, [startAnimation]);

  const splitText = (text: string) => {
  const words = text.split(' ');
  
  return words.map((word, wordIndex) => (
    <span key={wordIndex} className="inline-block whitespace-nowrap">
      {word.split('').map((char, charIndex) => (
        <span key={charIndex} className="hero-char inline-block">
          {char}
        </span>
      ))}
      {wordIndex < words.length - 1 && (
        <span className="hero-char inline-block whitespace-pre"> </span>
      )}
    </span>
  ));
};

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(102,126,234,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_80%_50%,rgba(118,75,162,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_50%_100%,rgba(0,255,136,0.1)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_70%)] pointer-events-none"></div>
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none"></div>
      
      <div className="hero-orb absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,255,136,0.1)_0%,transparent_70%)] blur-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-[1200px]">
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-[#888888] mb-8 backdrop-blur-md">
          <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></span>
          CS Student • IBM Intern
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tighter mb-6">
          <div className="block overflow-hidden">
            {splitText("Daniel Simms")}
          </div>
          <div className="block overflow-hidden mt-2">
            <span className="hero-glitch text-[#00ff88] shadow-[0_0_60px_rgba(0,255,136,0.3)]">
              {splitText("Software Engineer")}
            </span>
          </div>
        </h1>

        <p className="hero-subtitle text-[#888888] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Specialising in AI, backend systems, and full-stack development. Currently completing a BSc Computer Science with a Year in Industry at IBM.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <Magnetic>
            <button
              className="hero-btn group relative px-8 py-4 bg-[#00ff88] text-[#0a0a0a] text-lg font-bold rounded-full overflow-hidden"
              onClick={() => gsap.to(window, { duration: 0.1, scrollTo: '#projects', ease: 'power2.inOut' })}
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-full transition-transform duration-500 ease-out"></div>
            </button>
          </Magnetic>
          <Magnetic>
            <a
              href="/Daniel%20Simms%20SWE%20CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn flex items-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white text-lg font-bold rounded-full hover:border-[#00ff88] hover:text-[#00ff88] transition-colors"
            >
              <Eye size={20} />
              <span>View CV</span>
            </a>
          </Magnetic>
        </div>
      </div>

      <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#888888] text-xs uppercase tracking-widest">
        <span>Scroll</span>
        <div className="w-[1px] h-[60px] bg-gradient-to-b from-[#00ff88] to-transparent relative overflow-hidden">
          <div className="scroll-dot absolute top-0 left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-[#00ff88] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
