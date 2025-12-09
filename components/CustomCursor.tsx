import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const textEl = textRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    const ticker = gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - 0.2, gsap.ticker.deltaRatio());
      
      cursorX += (mouseX - cursorX) * dt;
      cursorY += (mouseY - cursorY) * dt;
      
      followerX += (mouseX - followerX) * (dt * 0.5);
      followerY += (mouseY - followerY) * (dt * 0.5);

      if (cursor) gsap.set(cursor, { x: cursorX, y: cursorY });
      if (follower) gsap.set(follower, { x: followerX, y: followerY });
      if (textEl) gsap.set(textEl, { x: mouseX, y: mouseY - 40 });
    });

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isClickable = target.closest('a') || target.closest('button') || target.closest('[data-magnetic]');
      const projectCard = target.closest('.project-card');
      
      if (projectCard) {
        setCursorText("View");
        gsap.to(textEl, { opacity: 1, duration: 0.3 });
        gsap.to(cursor, { scale: 2, opacity: 0.5, duration: 0.3 });
        gsap.to(follower, { scale: 0, opacity: 0, duration: 0.3 });
      } else if (isClickable) {
        setCursorText("");
        gsap.to(textEl, { opacity: 0 });
        gsap.to(follower, { 
          width: 60, 
          height: 60, 
          backgroundColor: 'rgba(0, 255, 136, 0.1)',
          borderColor: '#00ff88',
          duration: 0.3 
        });
        gsap.to(cursor, { scale: 0.5, duration: 0.3 });
      } else {
        setCursorText("");
        gsap.to(textEl, { opacity: 0 });
        gsap.to(follower, { 
          width: 40, 
          height: 40, 
          backgroundColor: 'transparent',
          borderColor: '#00ff88',
          duration: 0.3 
        });
        gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
        gsap.to(follower, { scale: 1, opacity: 1, duration: 0.3 });
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="custom-cursor fixed top-0 left-0 w-5 h-5 bg-[#00ff88] rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
      />
      <div 
        ref={followerRef} 
        className="custom-cursor fixed top-0 left-0 w-10 h-10 border border-[#00ff88] rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-colors"
      />
      <div 
        ref={textRef}
        className="custom-cursor fixed pointer-events-none z-[9999] text-xs font-bold text-[#0a0a0a] bg-[#00ff88] px-2 py-1 rounded opacity-0 -translate-x-1/2 -translate-y-1/2"
      >
        {cursorText}
      </div>
    </>
  );
};

export default CustomCursor;