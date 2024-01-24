"use client"

import React, { useState } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";

interface Menu {
  text: string;
  section: string;
}

const MENU_LIST: Menu[] = [
  {
    text: '01',
    section: 'home',
  },
  {
    text: '02',
    section: 'about',
  },
  {
    text: '03',
    section: 'projects',
  }
];

const Sidebar = (): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <aside className="fixed h-screen flex items-center ml-7 z-50">
      <div className="h-fit flex relative">
        <div className="w-[1px] bg-primary opacity-60"></div>
        <motion.div
          className="w-[5px] bg-primary"
          style={{ scaleY, transformOrigin: 'top', marginTop: '56px', translateX: '-58%' }}
        />
        <div className="flex flex-col items-start text-md relative">
          {MENU_LIST.map((menu: Menu) => (
            <div key={menu.text} className='flex relative'>
              <div className={`${menu.text == "01" ? '' : 'hidden'} absolute top-0 left-0 bg-primary w-[5px] h-[56px] translate-x-[-7.9px]`}></div>
              <div className="my-4 ml-3">{menu.text}</div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
