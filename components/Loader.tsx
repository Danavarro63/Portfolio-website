import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "expo.out",
            onComplete: onComplete
          });
        }
      });

      tl.to(progressRef.current, {
        width: '100%',
        duration: 2,
        ease: 'power2.inOut',
        onUpdate: function() {
          if (percentRef.current) {
            const val = Math.round(this.progress() * 100);
            percentRef.current.textContent = val.toString();
          }
        }
      })
      .to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3
      }, '-=0.5')
      .to(percentRef.current, {
        scale: 1.5,
        opacity: 0,
        duration: 0.5,
        ease: "back.in(1.7)"
      });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 bg-[#050505] z-[10000] flex flex-col items-center justify-center gap-8">
      <div ref={percentRef} className="font-mono text-6xl font-bold text-white">0</div>
      <div className="w-[200px] h-[2px] bg-white/10 rounded overflow-hidden">
        <div 
          ref={progressRef} 
          className="h-full w-0 bg-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.4)]"
        ></div>
      </div>
      <div ref={textRef} className="font-mono text-xl text-[#00ff88] overflow-hidden">
        Loading Portfolio
      </div>
    </div>
  );
};

export default Loader;