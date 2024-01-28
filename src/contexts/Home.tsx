"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

import Laptop from '@/assets/images/Hero/Laptop';
import Dots from '@/components/Icon/Dots';
import Diamond from '@/assets/images/Hero/Diamond.svg';

const Hero = (): JSX.Element => {
  const [screenHeight, setScreenHeight] = useState(0);
  useEffect(() => {
    const updateScreenHeight = () => {
      setScreenHeight(window.innerHeight);
    };
    updateScreenHeight();
    window.addEventListener('resize', updateScreenHeight);
    return () => {
      window.removeEventListener('resize', updateScreenHeight);
    };
  }, []);

  const { scrollY } = useScroll();
  const yt = useTransform(scrollY, [0, screenHeight], [0, -100]);
  const y1 = useTransform(scrollY, [0, screenHeight], [0, -300]);
  const y2 = useTransform(scrollY, [0, screenHeight], [0, -400]);
  const y3 = useTransform(scrollY, [0, screenHeight], [0, -1000]);
  const r1 = useTransform(scrollY, [0, screenHeight], [70, 250]);
  const r2 = useTransform(scrollY, [0, screenHeight], [-50, 130]);
  const r3 = useTransform(scrollY, [0, screenHeight], [0, 180]);

  const [onHover, setOnHover] = useState(false);
  const handleScroll = () => {
    const element = document.getElementById('About');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="Home" className='min-h-screen relative dark:bg-black bg-[#FFFFFF] transition duration-400 flex items-center justify-center'>
      <div className="w-full lg:flex-row-reverse lg:flex">
        <div className="z-[5] mb-[5vh] lg:mb-0 lg:w-1/2 relative select-none pointer-events-none flex justify-center">
          <Laptop />
        </div>
        <motion.div className="lg:w-1/2 lg:pl-[10vw] lg:mx-0 mx-[5vw] flex flex-col justify-center text-center lg:text-start" style={{ y: yt }}>
          <div className="text-2xl font-bold">
            Hi, I’m Bernardus Willson.
          </div>
          <div className="text-[50px] font-extrabold leading-[50px] mt-2">
            A Front-End Developer.
          </div>
          <div className="text-lg mt-5">
            Undergraduate Computer Science student at Bandung Institute of Technology
          </div>
          <div 
            className="text-lg mt-5 inline-block cursor-pointer relative lg:w-fit w-full z-[50] hover:opacity-60 transition-all duration-500 ease-in-out"
            onClick={handleScroll}
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
          >
            <span 
              className="font-bold bg-gradient-to-r from-[#FF8335] to-[#D849B0] text-transparent bg-clip-text z-[50]"
            >
              About Me
            </span>
            <span 
              className={`ml-2 font-bold transition-all duration-400 ease-in-out absolute z-[50] rotate-90 ${onHover ? 'lg:rotate-90' : 'lg:rotate-0'}`}
            >
              &gt;
            </span>
          </div>
        </motion.div>
      </div>

      <div className='absolute right-0 opacity-10 sm:opacity-30'>
        <Dots rows={8} columns={30} dotSize={3} dotColor="primary" spacing={40}/>
      </div>
      <motion.div className='absolute top-[5vw] right-[10vw] lg:w-[5vw] rotate-[70deg] w-[60px]' style={{ y: y1, rotate: r1 }}>
        <Image src={Diamond} alt="Diamond" />
      </motion.div>
      <motion.div className='absolute lg:top-[30vh] lg:w-[4vw] rotate-[-50deg] top-[40vh] left-[5vw] w-[50px] z-[6]' style={{ y: y2, rotate: r2 }}>
        <Image src={Diamond} alt="Diamond" />
      </motion.div>
      <motion.div className='absolute lg:bottom-[5vw] lg:left-[30vw] lg:w-[8vw] bottom-[5vw] right-[5vw] w-[100px] z-[6]' style={{ y: y3, rotate: r3 }}>
        <Image src={Diamond} alt="Diamond" />
      </motion.div>
    </div>
  );
};

export default Hero;
