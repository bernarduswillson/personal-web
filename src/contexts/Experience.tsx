"use client"

// Imports
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from 'react';
import Image from "next/image";

// Utils
import { getSectionHeight } from '@/lib/sectionHeight';

// Assets
import Code from '@/assets/images/Illustration/Code.svg';

const Experience = (): JSX.Element => { 
  // Skills and Experience's section height
  const [startPixel1, setStartPixel1] = useState(0);
  const [endPixel1, setEndPixel1] = useState(0);
  const [height1, setHeight1] = useState(0);
  const [startPixel2, setStartPixel2] = useState(0);
  const [endPixel2, setEndPixel2] = useState(0);

  const sectionId1 = 'Skills';
  useEffect(() => {
    const sectionSkills = getSectionHeight<number>(sectionId1);
    setStartPixel1(sectionSkills.startPixel);
    setEndPixel1(sectionSkills.endPixel);
    setHeight1(sectionSkills.height);
  }, [startPixel1, endPixel1]);

  const sectionId2 = 'Experience';
  useEffect(() => {
    const sectionExperience = getSectionHeight<number>(sectionId2);
    setStartPixel2(sectionExperience.startPixel);
    setEndPixel2(sectionExperience.endPixel);
  }, [startPixel2, endPixel2]);

  // About's animation
  const { scrollY } = useScroll();
  // translate
  const yt = useTransform(scrollY, [startPixel2 - (height1/2), endPixel2], [250, -500]);
    
  return (
    <div id="Experience" className='min-h-screen relative dark:bg-black bg-[#FFFFFF] transition duration-400 flex items-center justify-center'>
      EXPERIENCE

      <div className='absolute right-[-650px] lg:right-[-250px] top-[-40px] lg:top-[-60px] blur-[10px] opacity-50 rotate-180'>
        <Image
          src={Code}
          alt="Code"
        />
      </div>
    </div>
  );
};
  
  export default Experience;
  