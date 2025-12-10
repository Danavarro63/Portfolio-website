import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Marquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.marquee-content');
      if (!items.length) return;
      const width = (items[0] as HTMLElement).offsetWidth;

      gsap.to('.marquee-content', {
        x: -width,
        duration: 30,
        ease: 'none',
        repeat: -1,
      });

      gsap.to('.marquee-star', {
        scale: 1.2,
        rotation: 8,
        opacity: 1,
        duration: 1.2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.08,
          from: 'random',
        },
      });
      
    }, containerRef);
    

    return () => ctx.revert();
  }, []);

  const techs = [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "React",
    "Node.js",
    "Tailwind",
    "PostgreSQL",
    "Git",
    "Docker",
    "IBM Cloud",
    "AWS"
  ];

  return (
    <div ref={containerRef} className="py-8 bg-[#050505] border-y border-white/5 overflow-hidden">
      <div className="flex gap-16 whitespace-nowrap">
        {[0, 1].map((i) => (
          <div key={i} className="marquee-content flex gap-16">
            {techs.map((tech, idx) => (
              <span key={`${i}-${idx}`} className="text-2xl font-bold text-[#888888] flex items-center gap-4 uppercase tracking-wider">
                {tech} <span className="text-[#00ff88] text-lg">★</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
