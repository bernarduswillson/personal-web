"use client"

// Imports
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

// Utils
import { getSectionHeight } from '@/lib/sectionHeight';

// Assets
import Dots from '@/components/Icon/Dots';
import Photo from '@/assets/images/About/Photo.webp';
import Code from '@/assets/images/Illustration/Code.svg';
import Diamond from '@/assets/images/Illustration/Diamond.svg';
import { Button } from "@/components/ui/button";

const About = (): JSX.Element => {
  // Hero and About's section height
  const [startPixel1, setStartPixel1] = useState(0);
  const [endPixel1, setEndPixel1] = useState(0);
  const [startPixel2, setStartPixel2] = useState(0);
  const [endPixel2, setEndPixel2] = useState(0);

  const sectionId1 = 'Home';
  useEffect(() => {
    const sectionHome = getSectionHeight<number>(sectionId1);
    setStartPixel1(sectionHome.startPixel);
    setEndPixel1(sectionHome.endPixel);
  }, [startPixel1, endPixel1]);

  const sectionId2 = 'About';
  useEffect(() => {
    const sectionAbout = getSectionHeight<number>(sectionId2);
    setStartPixel2(sectionAbout.startPixel);
    setEndPixel2(sectionAbout.endPixel);
  }, [startPixel2, endPixel2]);

  // About's animation
  const { scrollY } = useScroll();
  // translate
  const yt = useTransform(scrollY, [endPixel1/3, endPixel2], [250, -500]);
  const yi = useTransform(scrollY, [endPixel1/3, endPixel2], [150, -300]);
  const y1 = useTransform(scrollY, [endPixel1/3, endPixel2], [400, -800]);
  const y2 = useTransform(scrollY, [endPixel1/3, endPixel2], [500, -1000]);
  // rotate
  const r1 = useTransform(scrollY, [endPixel1/3, endPixel2], [0, 200]);
  const r2 = useTransform(scrollY, [endPixel1/3, endPixel2], [100, 350]);

    return (
      <div id="About" className='min-h-screen relative dark:bg-black bg-[#FFFFFF] transition duration-400 flex items-center justify-center'>
        <div className="lg:flex z-[10]">
          <motion.div
            className="lg:w-1/2 justify-center hidden lg:flex z-[10]" 
            style={{ y: yi }}
          >
            {/* Desktop Photo */}
            <div className="w-[40%]">
              <Image
                src={Photo}
                alt="Photo"
                placeholder="blur"
                className="rounded-[50px]"
              />
            </div>
          </motion.div>
          {/* Content */}
          <motion.div 
            className="lg:w-1/2 lg:pr-[10vw] lg:px-0 px-[10vw] lg:flex lg:flex-col lg:justify-center" 
            style={{ y: yt }}
          >
            <div className="text-[40px] sm:text-[50px] font-extrabold leading-[50px] mb-5 text-center lg:text-left">
              I’m Bernardus Willson.
            </div>
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
            <div className="text-lg font-normal sm:text-xl lg:text-2xl opacity-80 text-center lg:text-left leading-tight sm:leading-normal">
              <div>
                Currently in my 6th semester and interested in computer-related things such as web development and software development.
              </div>
              <div className="mt-2 hidden sm:block">
                I consistently seek opportunities to develop my soft and hard skills through volunteers, committees, and projects.
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Link href="/next.svg">
                <Button
                  className="mt-5 text-lg font-semibold"
                >
                  Download CV
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Ornaments */}
        <div className='absolute right-0 top-0 opacity-10 sm:opacity-30'>
          <Dots
            rows={8}
            columns={50}
            dotSize={3}
            dotColor="primary"
            spacing={50}
          />
        </div>
        <div className='absolute right-[-600px] lg:right-[-250px] top-[-40px] lg:top-[-60px] blur-[10px]'>
          <Image
            src={Code}
            alt="Code"
          />
        </div>
        <motion.div
          className='absolute lg:top-[50vh] lg:right-0 lg:w-[8vw] top-[50vh] right-[-20px] w-[70px] z-[10]'
          style={{ y: y1, rotate: r1 }}
        >
          <Image
            src={Diamond}
            alt="Diamond"
          />
        </motion.div>
        <motion.div
          className='absolute lg:bottom-[5vw] lg:left-[5vw] lg:w-[5vw] bottom-[5vw] left-[-20px] w-[50px] z-[10]'
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
  