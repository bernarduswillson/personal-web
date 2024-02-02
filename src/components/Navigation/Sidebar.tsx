"use client"

// Imports
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Utils
import { scrollToSection } from '@/lib/scroll';

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
    section: 'Experience',
  },
  // {
  //   text: '05',
  //   section: 'Projects',
  // },
  // {
  //   text: '06',
  //   section: 'Contact',
  // },
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

  const [isOpened, setIsOpened] = useState(false);

  return (
    <aside className="fixed h-screen items-center z-50 flex">
      {/* Mobile */}
      <div className='flex lg:hidden' onClick={() => setIsOpened(!isOpened)}>
        &gt;
      </div>

      <div className={`fixed lg:hidden top-0 left-0 w-full h-full bg-secondary z-[60] transform transition-all duration-500 ease-in-out ${isOpened ? 'translate-x-0' : '-translate-x-full '}`}>
        <div>
          <div className="flex justify-end p-5">
            <div onClick={() => setIsOpened(!isOpened)}>
              &lt;
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          {MENU_LIST.map((menu: Menu) => (
            <div
              key={menu.text}
              className="flex relative cursor-pointer transition duration-300"
              onClick={() => {
                scrollToSection(menu.section);
                setIsOpened(!isOpened);
              }}
            >
              <div className="my-4 px-3">{menu.section}</div>
            </div>
          ))}
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

