"use client"

// Imports
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from 'react';
import Image from "next/image";

// Utils
import { getSectionHeight } from '@/lib/sectionHeight';

// Assets
import Code from '@/assets/images/Illustration/Code.svg';
import ProjectsCard from '@/components/Card/ProjectsCard';
import Toco from '@/assets/images/Projects/Toco.jpg';

// Projects data
const projects = [
  {
    name: "Toco",
    image: Toco,
    desc: "Lorem Ipsum.",
    tools: ["HTML5", "CSS", "JavaScript", "React", "Tailwind CSS", "Express.js", "PHP"],
    height: 400
  },
  {
    name: "Toco",
    image: Toco,
    desc: "Lorem Ipsum.",
    tools: ["HTML5", "CSS", "JavaScript", "React", "Tailwind CSS", "Express.js", "PHP"],
    height: 600
  },
  {
    name: "Toco",
    image: Toco,
    desc: "Lorem Ipsum.",
    tools: ["HTML5", "CSS", "JavaScript", "React", "Tailwind CSS", "Express.js", "PHP"],
    height: 600
  },
  {
    name: "Toco",
    image: Toco,
    desc: "Lorem Ipsum.",
    tools: ["HTML5", "CSS", "JavaScript", "React", "Tailwind CSS", "Express.js", "PHP"],
    height: 600
  },
];

const Projects = (): JSX.Element => { 
  // Skills and Projects's section height
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

  const sectionId2 = 'Projects';
  useEffect(() => {
    const sectionProjects = getSectionHeight<number>(sectionId2);
    setStartPixel2(sectionProjects.startPixel);
    setEndPixel2(sectionProjects.endPixel);
  }, [startPixel2, endPixel2]);

  // About's animation
  const { scrollY } = useScroll();
  // translate
  const yt = useTransform(scrollY, [startPixel2 - (height1/2), endPixel2], [250, -500]);
    
  return (
    <div id="Projects" className='min-h-screen relative dark:bg-black bg-[#FFFFFF] transition duration-400 flex items-center justify-center'>
      <div className="w-full relative">
        <motion.div className="z-[10] mx-[8vw]" style={{ y: yt }}>
          {/* Title */}
          <div className="text-center">
            <h2 className="text-lg font-normal lg:text-xl opacity-80">
              Take a look at my
            </h2>
            <h1 className="text-[40px] sm:text-[50px] font-extrabold mb-8 mt-[-10px]">
              Projects
            </h1>
          </div>

          {/* Projects */}
          {/* Desktop */}
          <div className="hidden lg:flex relative" style={{ gap: '40px' }}>
            <div className="flex justify-end" style={{ width: '50%' }}>
              <div className="flex flex-col">
                {projects.filter((_, index) => index % 2 === 0).map((project, index) => (
                  <div key={index} className="">
                    <ProjectsCard
                      name={project.name}
                      image={project.image}
                      desc={project.desc}
                      tools={project.tools}
                      height={project.height}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-start" style={{ width: '50%' }}>
             <div className="flex flex-col">
                {projects.filter((_, index) => index % 2 === 1).map((project, index) => (
                  <div key={index} className="">
                    <ProjectsCard
                      name={project.name}
                      image={project.image}
                      desc={project.desc}
                      tools={project.tools}
                      height={project.height}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className="lg:hidden flex flex-col gap-5 items-center">
            {projects.map((project, index) => (
              <div key={index} className="">
                <ProjectsCard
                  name={project.name}
                  image={project.image}
                  desc={project.desc}
                  tools={project.tools}
                  height={project.height}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className='absolute right-[-650px] lg:right-[-250px] top-[-40px] lg:top-[-60px] blur-[10px] opacity-50 rotate-180'>
        <Image
          src={Code}
          alt="Code"
        />
      </div>
    </div>
  );
};
  
  export default Projects;
  