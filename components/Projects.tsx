import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, ShoppingCart, Layout, BrainCircuit } from 'lucide-react';

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        const projects = gsap.utils.toArray('.project-card');
        
        projects.forEach((card: any, i) => {
            const image = card.querySelector('.project-image');
            const info = card.querySelector('.project-info');
            const isEven = i % 2 === 1;

            gsap.from(image, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                },
                opacity: 0,
                x: isEven ? 100 : -100,
                rotateY: isEven ? -15 : 15,
                duration: 1,
                ease: 'power3.out',
            });

            gsap.from(info.children, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 70%',
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
            });

            // Parallax image
            gsap.to(image.querySelector('.inner-img'), {
                y: -50,
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                }
            });
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const projectData = [
    {
      id: "01",
      title: "Edvia – AI-Powered Learning Platform",
      desc: "A full-stack platform with customisable AI tutoring companions, real-time audio learning, and AI-generated recap pipelines. Built using Next.js, TypeScript, PostgreSQL, and cloud APIs, improving user learning efficiency and engagement.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Vapi", "Gemini API"],
      icon: <BrainCircuit size={80} className="text-white/50" />,
      gradient: "from-[#667eea] to-[#764ba2]"
    },
    {
      id: "02",
      title: "Personal Portfolio Website",
      desc: "A fully responsive portfolio built with React, TypeScript, and Tailwind CSS, improving performance by 30% through component abstraction and accessibility-driven UI design.",
      tags: ["React", "TypeScript", "Tailwind", "GSAP"],
      icon: <Layout size={80} className="text-white/50" />,
      gradient: "from-[#f093fb] to-[#f5576c]"
    },
    {
      id: "03",
      title: "E-Commerce Website",
      desc: "A full responsive store with JSON-driven product flows, shopping cart logic, and end-to-end UI design.",
      tags: ["React", "Next.js", "JavaScript", "JSON"],
      icon: <ShoppingCart size={80} className="text-white/50" />,
      gradient: "from-[#4facfe] to-[#00f2fe]"
    }
  ];

  return (
    <section ref={containerRef} id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-20">
        <div className="flex items-center gap-4 text-[#00ff88] text-sm font-bold uppercase tracking-[0.2em] mb-4">
          <span className="w-10 h-[1px] bg-[#00ff88]"></span>
          Portfolio
        </div>
        <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
          Featured<br />
          <span className="text-[#00ff88]">projects</span>
        </h2>
      </div>

      <div className="flex flex-col gap-32">
        {projectData.map((project, index) => (
          <div key={index} className={`project-card grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
            
            <div className={`project-image relative aspect-[16/10] rounded-3xl overflow-hidden group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className={`inner-img absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center transition-transform duration-700 group-hover:scale-105`}>
                {project.icon}
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className={`project-info ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="text-8xl font-mono font-bold text-white/5 mb-4">{project.id}</div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">{project.title}</h3>
              <p className="text-[#888888] text-lg leading-relaxed mb-6">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 bg-white/5 rounded-full text-sm text-[#888888] border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              <a href="#" className="inline-flex items-center gap-2 text-[#00ff88] font-bold hover:gap-4 transition-all group">
                View Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;