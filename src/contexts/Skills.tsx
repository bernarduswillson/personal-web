"use client"

// Imports
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from 'react';
import Image from "next/image";

// Utils
import { getSectionHeight } from '@/lib/sectionHeight';

// Assets
import Code from '@/assets/images/Illustration/Code.svg';
import Web from '@/components/Icon/Skills/Web';
import Card from '@/components/Card/Card';

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
    image: Web,
    desc: "I possess intermediate-level proficiency in software development, demonstrating competence in coding and problem-solving while continuing to enhance my skills in various programming languages and frameworks.",
    tools: ["Python", "Java", "C#"]
  },
  {
    name: "Mobile Development",
    image: Web,
    desc: "I am a novice in mobile development, actively learning and gaining foundational skills to create basic mobile applications while exploring different platforms and frameworks.",
    tools: ["Flutter"]
  }
];

const Skills = (): JSX.Element => { 
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

  // About's animation
  const { scrollY } = useScroll();
  // translate
  const yt = useTransform(scrollY, [startPixel2 - (height1/2), endPixel2], [250, -500]);
    
  return (
    <div id="Skills" className='min-h-screen relative dark:bg-black bg-[#FFFFFF] transition duration-400 flex items-center justify-center'>
      <motion.div className="z-[10] mx-[8vw]" style={{ y: yt }}>
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
        <div className="flex justify-center flex-wrap gap-4 mb-10">
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
      </motion.div>

      {/* Illustration */}
      <div className='absolute left-[-600px] lg:left-[-250px] top-[-120px] lg:top-[-60px] blur-[10px]'>
        <Image
          src={Code}
          alt="Code"
        />
      </div>
    </div>
  );
};
  
  export default Skills;
  