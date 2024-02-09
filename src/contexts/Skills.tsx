"use client"

// Imports
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { useTheme } from "next-themes";
import Autoplay from "embla-carousel-autoplay"

// Utils
import { getSectionHeight } from '@/lib/sectionHeight';

// Assets
import Code from '@/assets/images/Illustration/Code.svg';
import Code2 from '@/assets/images/Illustration/Code2.png';
import Web from '@/components/Icon/Skills/Web';
import Software from "@/components/Icon/Skills/Software";
import Mobile from '@/components/Icon/Skills/Mobile';
import Card from '@/components/Card/SkillsCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

// Skills data
const skills = [
  {
    name: "Web Development",
    image: Web,
    desc: "I excel in full-stack web development, seamlessly integrating front-end and back-end technologies to create efficient and dynamic digital solutions.",
    tools: ["HTML5", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Express.js", "Flask", "PHP"]
  },
  {
    name: "Software Development",
    image: Software,
    desc: "I have intermediate proficiency in software development, excelling in coding, problem-solving, and Object-Oriented Programming.",
    tools: ["Python", "Java", "C#"]
  },
  {
    name: "Mobile Development",
    image: Mobile,
    desc: "I am a novice in mobile development, actively learning and gaining foundational skills to create basic mobile applications while exploring different platforms and frameworks.",
    tools: ["Flutter"]
  }
];

const Skills = (): JSX.Element => {
  // Theme handler
  const { setTheme, resolvedTheme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState(resolvedTheme);
  
  useEffect(() => {
    setMode(resolvedTheme);
    setLoading(false);
  }, [resolvedTheme]);

  // About and Skills's section height
  const [startPixel1, setStartPixel1] = useState(0);
  const [endPixel1, setEndPixel1] = useState(0);
  const [height1, setHeight1] = useState(0);
  const [startPixel2, setStartPixel2] = useState(0);
  const [endPixel2, setEndPixel2] = useState(0);

  const sectionId1 = 'About';
  useEffect(() => {
    const sectionAbout = getSectionHeight<number>(sectionId1);
    setStartPixel1(sectionAbout.startPixel);
    setEndPixel1(sectionAbout.endPixel);
    setHeight1(sectionAbout.height);
  }, [startPixel1, endPixel1]);

  const sectionId2 = 'Skills';
  useEffect(() => {
    const sectionSkills = getSectionHeight<number>(sectionId2);
    setStartPixel2(sectionSkills.startPixel);
    setEndPixel2(sectionSkills.endPixel);
  }, [startPixel2, endPixel2]);

  // Skills' animation
  const { scrollY } = useScroll();
  // translate
  const yt = useTransform(scrollY, [startPixel2 - (height1/2), endPixel2], [250, -500]);
    
  return (
    <div id="Skills" className='h-screen relative dark:bg-black bg-[#FFFFFF] transition duration-400 flex items-center justify-center'>
      <motion.div className="z-[10] mx-[8vw] flex flex-col items-center" style={{ y: yt }}>
        {/* Title */}
        <div className="text-center">
          <h2 className="text-lg font-normal lg:text-xl opacity-80">
            These are my
          </h2>
          <h1 className="text-[40px] sm:text-[50px] font-extrabold mb-8 mt-[-10px]">
            Specialized Skills
          </h1>
        </div>

        {/* Skills */}
        <div className="lg:flex hidden justify-center gap-4 mb-10">
          { skills.map((skill, index) => (
            <div
              key={index}
              className="flex justify-center"
            >
              <Card
                name={skill.name}
                image={skill.image}
                desc={skill.desc}
                tools={skill.tools}
              />
            </div>
          ))}
        </div>
        <Carousel
          opts={{
            align: "center",
          }}
          className="lg:hidden flex justify-center mb-10 w-[100vw]"
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {Array.from({ length: skills.length }).map((_, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <div className="px-[10vw]">
                  <Card
                    name={skills[index].name}
                    image={skills[index].image}
                    desc={skills[index].desc}
                    tools={skills[index].tools}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>

      {/* Illustration */}
      <div className='absolute left-[-600px] lg:left-[-250px] top-[-120px] lg:top-[-60px] blur-[10px] opacity-50'>
        <Image
          src={Code}
          alt="Code"
        />
      </div>
      <div className={`absolute w-[30vw] min-w-[500px] ${mode =='dark' && !loading ? 'blur-0 opacity-30' : 'blur-[10px] opacity-100'}`}>
        <Image
          src={Code2}
          alt="Code"
        />
      </div>

    </div>
  );
};
  
  export default Skills;
  