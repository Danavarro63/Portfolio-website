import React, { useState, useEffect, useRef } from 'react';
import Magnetic from './Magnetic';
import gsap from 'gsap';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 100) {
        gsap.to(navRef.current, { y: -100, duration: 0.3, ease: 'power2.out' });
      } else {
        gsap.to(navRef.current, { y: 0, duration: 0.3, ease: 'power2.out' });
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    gsap.to(window, { duration: 1, scrollTo: { y: id, offsetY: 50 }, ease: 'power3.inOut' });
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-white">
      <Magnetic>
        <a href="#" className="text-2xl font-bold tracking-tight">
          DanielSimms<span className="text-[#00ff88]">.Dev</span>
        </a>
      </Magnetic>

      <div className="hidden md:flex gap-12">
        {links.map((link) => (
          <Magnetic key={link.name}>
            <a 
              href={link.href} 
              onClick={(e) => handleScrollTo(e, link.href)}
              className="relative text-sm font-medium hover:text-[#00ff88] transition-colors group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00ff88] scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-300"></span>
            </a>
          </Magnetic>
        ))}
      </div>

      <button 
        onClick={toggleMenu} 
        className="md:hidden flex flex-col gap-[6px] p-2 z-50"
      >
        <span className={`w-[30px] h-[2px] bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
        <span className={`w-[30px] h-[2px] bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-[30px] h-[2px] bg-white transition-transform ${isOpen ? '-rotate-45 translate-y-[-8px]' : ''}`}></span>
      </button>

      <div className={`fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-expo ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         {links.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-4xl font-bold hover:text-[#00ff88] transition-colors"
            >
              {link.name}
            </a>
         ))}
      </div>
    </nav>
  );
};

export default Navbar;