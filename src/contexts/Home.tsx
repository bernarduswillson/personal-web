"use client"

// Imports
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from 'next-themes';

// Utils
import { getSectionHeight } from '@/lib/sectionHeight';
import { scrollToSection } from '@/lib/scroll';

// Assets
import Laptop from '@/assets/images/Hero/Laptop';
import Dots from '@/assets/images/Illustration/Dots';
import Diamond from '@/assets/images/Illustration/Diamond.svg';
import Github from '@/components/Icon/Hero/Github'
import Linkedin from '@/components/Icon/Hero/Linkedin';
import Email from '@/components/Icon/Hero/Email';
import Whatsapp from '@/components/Icon/Hero/Whatsapp';
import Line from '@/components/Icon/Hero/Line';

const Hero = (): JSX.Element => {
  // Hero's section height
  const [startPixel, setStartPixel] = useState(0);
  const [endPixel, setEndPixel] = useState(0);

  const sectionId = 'Home';
  useEffect(() => {
    const sectionHome = getSectionHeight<number>(sectionId);
    setStartPixel(sectionHome.startPixel);
    setEndPixel(sectionHome.endPixel);
  }, []);

  // Hero's animation
  const { scrollY } = useScroll();
  // translate
  const yt = useTransform(scrollY, [startPixel, endPixel], [0, -100]);
  const y1 = useTransform(scrollY, [startPixel, endPixel], [0, -300]);
  const y2 = useTransform(scrollY, [startPixel, endPixel], [0, -400]);
  const y3 = useTransform(scrollY, [startPixel, endPixel], [0, -1000]);
  // rotate
  const r1 = useTransform(scrollY, [startPixel, endPixel], [70, 250]);
  const r2 = useTransform(scrollY, [startPixel, endPixel], [-50, 130]);
  const r3 = useTransform(scrollY, [startPixel, endPixel], [0, 180]);

  // Theme handler
  const { setTheme, resolvedTheme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState(resolvedTheme);
  
  useEffect(() => {
    setMode(resolvedTheme);
    setLoading(false);
  }, [resolvedTheme]);

  // Social links
  const socialLinks = [
    {
      href: "https://github.com/bernarduswillson",
      icon: <Github width={40} height={40} />,
    },
    {
      href: "https://www.linkedin.com/in/bernarduswillson/",
      icon: <Linkedin width={40} height={40} />,
    },
    {
      href: "mailto:bernardus.willson@gmail.com",
      icon: <Email width={40} height={40} />,
    },
    {
      href: "https://wa.me/6281284085584",
      icon: <Whatsapp width={40} height={40} />,
    },
    {
      href: "https://line.me/ti/p/~bwillson03",
      icon: <Line width={40} height={40} />,
    },
  ];
  
  // Other
  const [onHover, setOnHover] = useState(false);

  return (
    <div id="Home" className='min-h-screen relative dark:bg-black bg-[#FFFFFF] transition duration-400 flex items-center justify-center'>
      <div className="w-full lg:flex-row-reverse lg:flex">
        {/* Laptop Image */}
        <div className="z-[5] mx-[5vw] mb-[5vh] lg:mb-0 lg:w-1/2 relative select-none pointer-events-none flex justify-center">
          <Laptop />
        </div>

        {/* Content */}
        <motion.div 
          className="lg:w-1/2 lg:pl-[10vw] lg:mx-0 mx-[5vw] flex flex-col justify-center text-center lg:text-start" 
          style={{ y: yt }}
        >
          <div className="text-2xl font-bold">
            Hi, I’m Willson.
          </div>
          <div className=" text-[40px] lg:text-[50px] font-extrabold leading-[40px] sm:leading-[50px] mt-2">
            A Computer Science <br/>Student.
          </div>
          <div className="text-lg mt-2">
            at Bandung Institute of Technology, Indonesia.
          </div>
          
          {/* Social Media */}
          <div className='mt-5 gap-5 sm:gap-7 flex lg:justify-start justify-center'>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className='hover:opacity-50 transition-all duration-300 hover:scale-110'
              >
                {mode === 'dark' && !loading ? (
                  React.cloneElement(link.icon, { fillColor: "white" })
                ) : (
                  React.cloneElement(link.icon, { fillColor: "black" })
                )}
              </a>
            ))}
          </div>

          <div 
            className="text-lg mt-5 inline-block cursor-pointer relative lg:w-fit w-full z-[50] hover:opacity-60 transition-all duration-500 ease-in-out hover:translate-y-[-5px]"
            onClick={() => scrollToSection('About')}
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
          >
            <span 
              className="font-bold bg-gradient-to-r from-[#FF8335] to-[#D849B0] text-transparent bg-clip-text z-[50]"
            >
              About Me
            </span>
            <span 
              className={`text-[30px] mt-[-1px] ml-2 font-semibold transition-all duration-400 ease-in-out absolute z-[50] rotate-90 ${onHover ? 'lg:rotate-90' : 'lg:rotate-0'}`}
            >
              &gt;
            </span>
          </div>
        </motion.div>
      </div>

      {/* Ornaments */}
      <div className='absolute right-0 opacity-10 sm:opacity-30'>
        <Dots
          rows={8}
          columns={20}
          dotSize={3}
          dotColor="primary"
          spacing={40}
        />
      </div>
      <motion.div
        className='absolute top-[5vw] right-[10vw] lg:w-[5vw] rotate-[70deg] w-[60px]'
        style={{ y: y1, rotate: r1 }}
      >
        <Image
          src={Diamond}
          alt="Diamond"
        />
      </motion.div>
      <motion.div
        className='absolute lg:top-[30vh] lg:w-[4vw] rotate-[-50deg] top-[40vh] left-[5vw] w-[50px] z-[6]'
        style={{ y: y2, rotate: r2 }}
      >
        <Image
          src={Diamond}
          alt="Diamond"
        />
      </motion.div>
      <motion.div 
        className='absolute lg:bottom-[5vw] lg:left-[30vw] lg:w-[8vw] bottom-[5vw] right-[5vw] w-[80px] z-[6]'
        style={{ y: y3, rotate: r3 }}
      >
        <Image
          src={Diamond}
          alt="Diamond"
        />
      </motion.div>

    </div>
  );
};

export default Hero;
