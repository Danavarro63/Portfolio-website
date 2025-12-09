import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.timeline-line-fill', {
        scaleY: 1,
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: 1,
        },
      });

      const items = gsap.utils.toArray('.timeline-item');
      items.forEach((item: any, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
          opacity: 0,
          x: -50,
          duration: 0.8,
          delay: 0.1,
          ease: 'power3.out',
        });

        gsap.from(item.querySelector('.timeline-dot'), {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
          scale: 0,
          duration: 0.5,
          delay: 0.3,
          ease: 'back.out(1.7)',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="experience" className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-4 text-[#00ff88] text-sm font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-10 h-[1px] bg-[#00ff88]"></span>
            Career
          </div>
          <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Work<br />
            <span className="text-[#00ff88]">experience</span>
          </h2>
        </div>

        <div className="timeline relative pl-4 md:pl-0">
          <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-white/10 origin-top"></div>
          <div className="timeline-line-fill absolute left-[23px] top-0 w-[2px] h-full bg-[#00ff88] origin-top scale-y-0"></div>

          <div className="timeline-item relative pl-12 pb-16">
            <div className="timeline-dot absolute left-[16px] top-0 w-[14px] h-[14px] bg-[#050505] border-2 border-[#00ff88] rounded-full z-10 group-hover:bg-[#00ff88] transition-colors"></div>
            <div className="text-[#00ff88] text-sm font-bold mb-2">2024 - 2025</div>
            <h3 className="text-2xl font-bold mb-1">IBM Consultant Intern</h3>
            <div className="text-[#888888] mb-4">IBM</div>
            <p className="text-[#888888] leading-relaxed max-w-2xl">
              Won the Q3 Growth Minded Intern Award, earning "Exceptional" ratings across all performance reviews.
              Led onboarding/offboarding for a 25-member account with 100% DS&P compliance.
              Built a RAG model enabling new joiners to resolve 85% of support queries.
              Created an IBM Cloud Functions pipeline reducing processing time by 40%.
              Fine-tuned Watson Discovery and Mixtral-8x7B models, improving accuracy up to 20–30%.
            </p>
          </div>           
        </div>
      </div>
    </section>
  );
};

export default Experience;