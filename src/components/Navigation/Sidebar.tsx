"use client"

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface Menu {
  text: string;
  section: string;
}

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
    section: 'Projects',
  },
];

const Sidebar = (): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleMenuClick = (section: string) => {
    setHoveredSection(section);
    const targetElement = document.getElementById(section);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substr(1);
      setHoveredSection(hash);
      handleMenuClick(hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <aside className="fixed h-screen items-center ml-7 z-50 lg:flex hidden">
      <div className="h-fit flex relative">
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
              onClick={() => handleMenuClick(menu.section)}
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
