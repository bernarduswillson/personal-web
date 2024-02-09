"use client"

// Imports
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from 'next-themes';

// Utils
import { scrollToSection } from '@/lib/scroll';

// Assets
import RightArrow from '@/components/Icon/Navbar/RightArrow';
import Close from '@/components/Icon/Navbar/Close';

interface Menu {
  text: string;
  section: string;
}

// Menu list
const MENU_LIST: Menu[] = [
  {
    text: '01',
    section: 'Home',
  },
  {
    text: '02',
    section: 'About',
  },
  {
    text: '03',
    section: 'Skills',
  },
  {
    text: '04',
    section: 'Projects',
  },
  {
    text: '05',
    section: 'Contact',
  },
];

const Sidebar = (): JSX.Element => {
  // Scrollbar progress
  const { scrollYProgress } = useScroll();
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Mobile menu handler
  const [isOpened, setIsOpened] = useState(false);

  // Theme handler
  const { setTheme, resolvedTheme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState(resolvedTheme);
  
  useEffect(() => {
    setMode(resolvedTheme);
    setLoading(false);
  }, [resolvedTheme]);

  return (
    <aside className="fixed h-screen items-center z-50 flex">
      {/* Mobile */}
      <div
        className={`lg:hidden cursor-pointer ${isOpened ? 'hidden' : 'block'}`}
        style={{ paddingLeft: '5px', paddingTop: '20px', paddingBottom: '20px', paddingRight: '10px'}}
        onClick={() => setIsOpened(!isOpened)}
      >
        <RightArrow width={25} height={25} fillColor={`${mode == 'dark' && !loading ? 'white' : 'black'}`} />
      </div>
      <div className={`flex items-center justify-center fixed lg:hidden top-0 left-0 w-full h-full z-[60] transform transition-all duration-500 ease-in-out filter backdrop-blur-[10px] ${isOpened ? 'translate-x-0' : '-translate-x-full '}`} style={{ WebkitBackdropFilter: 'blur(10px)', backdropFilter: 'blur(10px)' }}>
        <div className='flex items-center justify-center'>
          <div className="h-fit relative flex">
            <div className="w-[1px] bg-primary opacity-60"></div>
            <motion.div
              className="w-[5px] bg-primary"
              style={{ scaleY, transformOrigin: 'top', marginTop: '56px', translateX: '-58%' }}
            />
            <div className="flex flex-col items-start text-md relative">
              {MENU_LIST.map((menu: Menu) => (
                <div
                  key={menu.text}
                  className={`flex relative cursor-pointer transition duration-300 ${
                    hoveredSection === menu.section ? 'hover:bg-primary hover:text-secondary' : ''
                  }`}
                  onClick={() => scrollToSection(menu.section)}
                  onMouseEnter={() => setHoveredSection(menu.section)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <div
                    className={`${menu.text === '01' ? '' : 'hidden'} absolute top-0 left-0 bg-primary w-[5px] h-[56px] translate-x-[-7.9px]`}
                  ></div>
                  <div className="my-4 px-3">{menu.text}</div>
                  <div className='my-4 px-3 font-bold' onClick={() => setIsOpened(false)}>{menu.section}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="absolute top-0 right-0 cursor-pointer" style={{ paddingLeft: '20px', paddingTop: '20px', paddingBottom: '20px', paddingRight: '20px'}}>
            <div onClick={() => setIsOpened(!isOpened)} className={`transform duration-500 ${isOpened ? 'rotate-0' : 'rotate-90'}`}> 
              <Close width={25} height={25} fillColor={`${mode === 'dark' && !loading ? 'white' : 'black'}`} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop */}
      <div className="h-fit relative lg:flex hidden ml-7">
        <div className="w-[1px] bg-primary opacity-60"></div>
        <motion.div
          className="w-[5px] bg-primary"
          style={{ scaleY, transformOrigin: 'top', marginTop: '56px', translateX: '-58%' }}
        />
        <div className="flex flex-col items-start text-md relative">
          {MENU_LIST.map((menu: Menu) => (
            <div
              key={menu.text}
              className={`flex relative cursor-pointer transition duration-300 ${
                hoveredSection === menu.section ? 'hover:bg-primary hover:text-secondary' : ''
              }`}
              onClick={() => scrollToSection(menu.section)}
              onMouseEnter={() => setHoveredSection(menu.section)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div
                className={`${menu.text === '01' ? '' : 'hidden'} absolute top-0 left-0 bg-primary w-[5px] h-[56px] translate-x-[-7.9px]`}
              ></div>
              <div className="my-4 px-3">{menu.text}</div>
              <div className={`${hoveredSection === menu.section ? 'opacity-100' : 'opacity-0'} my-4 px-3 font-bold`}>{menu.section}</div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

