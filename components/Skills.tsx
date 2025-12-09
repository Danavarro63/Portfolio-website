import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Database, Layout, Server, GitBranch, Cloud, Terminal, Box } from 'lucide-react';

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "Python", icon: <Code2 />, level: 90 },
    { name: "JavaScript", icon: <Layout />, level: 95 },
    { name: "TypeScript", icon: <Code2 />, level: 90 },
    { name: "Java", icon: <Box />, level: 80 },
    { name: "React", icon: <Layout />, level: 95 },
    { name: "Node.js", icon: <Server />, level: 85 },
    { name: "Tailwind", icon: <Layout />, level: 95 },
    { name: "PostgreSQL", icon: <Database />, level: 80 },
    { name: "Git", icon: <GitBranch />, level: 90 },
    { name: "Docker", icon: <Box />, level: 75 },
    { name: "IBM Cloud", icon: <Cloud />, level: 80 },
    { name: "AWS", icon: <Cloud />, level: 70 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.skills-bg-text', {
        x: -200,
        scrollTrigger: {
          trigger: '#skills',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });

      const cards = gsap.utils.toArray('.skill-card');
      
      cards.forEach((card: any, i) => {
        const levelBar = card.querySelector('.level-bar');
        const level = card.dataset.level;

        gsap.from(card, {
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 80%',
          },
          opacity: 0,
          y: 50,
          rotateX: -20,
          duration: 0.6,
          delay: i * 0.05,
          ease: 'back.out(1.5)',
        });

        ScrollTrigger.create({
          trigger: card,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(levelBar, {
              width: `${level}%`,
              duration: 1.5,
              delay: i * 0.05,
              ease: 'power2.out',
            });
          },
          once: true,
        });

        card.addEventListener('mousemove', (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            gsap.to(card, {
              rotateX: rotateX,
              rotateY: rotateY,
              duration: 0.3,
              ease: 'power2.out',
              transformPerspective: 1000,
            });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)',
          });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="skills" className="relative py-32 px-6 md:px-12 bg-[#050505] overflow-hidden">
      <div className="skills-bg-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-white/5 pointer-events-none whitespace-nowrap">
        SKILLS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-20">
            <div className="flex items-center gap-4 text-[#00ff88] text-sm font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-10 h-[1px] bg-[#00ff88]"></span>
              Expertise
            </div>
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Technologies I<br />
              <span className="text-[#00ff88]">work with</span>
            </h2>
        </div>

        <div className="skills-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div 
              key={i} 
              className="skill-card p-8 bg-white/[0.02] border border-white/5 rounded-2xl text-center group hover:border-[#00ff88] hover:shadow-[0_20px_40px_rgba(0,255,136,0.1)] transition-colors transform-style-3d cursor-default"
              data-level={skill.level}
            >
              <div className="text-4xl mb-4 text-[#888888] group-hover:text-[#00ff88] transition-colors inline-block transform-style-3d group-hover:translate-z-[20px]">
                {skill.icon}
              </div>
              <div className="text-lg font-bold mb-4 transform-style-3d group-hover:translate-z-[10px]">{skill.name}</div>
              

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;