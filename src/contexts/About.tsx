"use client"

// Imports
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

// Utils
import { getSectionHeight } from '@/lib/sectionHeight';

// Assets
import Dots from '@/assets/images/Illustration/Dots';
import Photo from '@/assets/images/About/Photo.webp';
import Code from '@/assets/images/Illustration/Code.svg';
import Diamond from '@/assets/images/Illustration/Diamond.svg';
import ASCIIB from '@/assets/images/About/ASCIIB.png';
import ASCIIW from '@/assets/images/About/ASCIIW.png';
import { Button } from "@/components/ui/button";

const About = (): JSX.Element => {
  // About's section height
  const [startPixel, setStartPixel] = useState(0);
  const [endPixel, setEndPixel] = useState(0);

  const sectionId = 'About';
  useEffect(() => {
    const sectionAbout = getSectionHeight<number>(sectionId);
    setStartPixel(sectionAbout.startPixel);
    setEndPixel(sectionAbout.endPixel);
  }, [startPixel, endPixel]);

  // About's animation
  const { scrollY } = useScroll();
  // translate
  const yt = useTransform(scrollY, [startPixel/3, endPixel], [250, -500]);
  const yi = useTransform(scrollY, [startPixel/3, endPixel], [150, -300]);
  const y1 = useTransform(scrollY, [startPixel/3, endPixel], [800, -1600]);
  const y2 = useTransform(scrollY, [startPixel/3, endPixel], [1000, -2000]);
  // rotate
  const r1 = useTransform(scrollY, [startPixel/3, endPixel], [0, 200]);
  const r2 = useTransform(scrollY, [startPixel/3, endPixel], [100, 350]);
  // opacity
  const oi = useTransform(scrollY, [startPixel/3, endPixel], [0.2, 2]);

  // Theme handler
  const { setTheme, resolvedTheme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState(resolvedTheme);
  
  useEffect(() => {
    setMode(resolvedTheme);
    setLoading(false);
  }, [resolvedTheme]);

    return (
      <div id="About" className='h-screen relative dark:bg-black bg-[#FFFFFF] transition duration-400 flex items-center justify-center'>
        <div className="lg:flex z-[10] lg:mt-0 mt-[70px]">
          <motion.div
            className="lg:w-1/2 justify-center hidden lg:flex z-[10]" 
            style={{ y: yi, opacity: oi }}
          >
            {/* Desktop Photo */}
            <div className="w-[40%] flex items-center">
              <div 
                className="overflow-hidden transition-transform rounded-[50px] transform scale-100 ease-in-out duration-700 hover:scale-95"
              >
                <Image
                  src={Photo}
                  alt="Photo"
                  placeholder="blur"
                  className="transition-transform rounded-[50px] transform scale-100 ease-in-out duration-700 hover:scale-[1.2]"
                />
              </div>
            </div>
          </motion.div>
          {/* Content */}
          <motion.div 
            className="lg:w-1/2 lg:pr-[10vw] lg:px-0 px-[10vw] lg:flex lg:flex-col lg:justify-center" 
            style={{ y: yt }}
          >
            <h1 className="text-[30px] sm:text-[50px] font-extrabold leading-[50px] mb-5 text-center lg:text-left">
              I’m Bernardus Willson.
            </h1>
            <div className="justify-center flex lg:hidden mb-5 z-[10]">
              {/* Mobile Photo */}
              <div className="w-[70%] flex justify-center z-[10]">
                <Image
                  src={Photo}
                  alt="Photo"
                  placeholder="blur"
                  className="rounded-[50px]"
                  style={{
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%',
                    maxWidth: '300px',
                  }}
                />
              </div>
            </div>
            <div className="text-lg font-normal lg:text-xl opacity-80 text-center lg:text-left leading-tight sm:leading-normal">
              <h2>
                Currently in my 7th semester and interested in computer-related things such as web development and software development.
              </h2>
              <h2 className="mt-2 hidden sm:block">
                I consistently seek opportunities to develop my soft and hard skills through volunteers, committees, and projects.
              </h2>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Link href="/CV_Bernardus Willson.pdf">
                <Button
                  className="mt-5 text-lg font-semibold"
                >
                  Download CV
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Illustration */}
        <div className='absolute right-0 top-0 opacity-10 sm:opacity-30'>
          <Dots
            rows={8}
            columns={50}
            dotSize={3}
            dotColor="primary"
            spacing={50}
          />
        </div>
        <div className='absolute right-[-650px] lg:right-[-250px] top-[-40px] lg:top-[-60px] blur-[10px] opacity-50'>
          <Image
            src={Code}
            alt="Code"
          />
        </div>
        <div className={`absolute w-[40vw] min-w-[500px] opacity-10`}>
          <Image
            src={mode == "dark" && !loading ? ASCIIW : ASCIIB}
            alt="ASCII"
          />
        </div>
        <motion.div
          className='absolute lg:top-[50vh] lg:right-0 lg:w-[8vw] top-[50vh] right-[-20px] w-[70px] z-[10] opacity-80'
          style={{ y: y1, rotate: r1 }}
        >
          <Image
            src={Diamond}
            alt="Diamond"
          />
        </motion.div>
        <motion.div
          className='absolute lg:bottom-[5vw] lg:left-[5vw] lg:w-[5vw] bottom-[5vw] left-[-20px] w-[50px] z-[10] opacity-80'
          style={{ y: y2, rotate: r2 }}
        >
          <Image
            src={Diamond}
            alt="Diamond"
          />
        </motion.div>

      </div>
    );
  };
  
  export default About;
  