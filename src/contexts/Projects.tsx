"use client"

// Imports
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from 'react';
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"

// Utils
import { getSectionHeight } from '@/lib/sectionHeight';

// Assets
import Code from '@/assets/images/Illustration/Code.svg';
import ProjectsCard from '@/components/Card/ProjectsCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import SRE from '@/assets/images/Projects/SRE.png';
import Wispril from '@/assets/images/Projects/Wispril.png';
import Arkavidia from '@/assets/images/Projects/Arkavidia.png';
import Toco from '@/assets/images/Projects/Toco.png';
import DermaticaAI from '@/assets/images/Projects/DermaticaAI.png';
import GJ from '@/assets/images/Projects/GJ.png';
import Dailify from '@/assets/images/Projects/Dailify.png';

// Projects data
const projects = [
  {
    name: "SRE & IYREF Website",
    image: SRE,
    caption: "A website showcasing the profile of the Society Renewable Energy ITB and IYREF.",
    desc: "As the Director of IT Development at SRE ITB, I led the creation and maintenance of a web app showcasing the organization's profile and updates. Simultaneously, as the IT Manager at IYREF, I oversaw a similar web app, providing detailed information and real-time updates.",
    tools: ["Next.js", "Tailwind CSS", "Express.js", "Prisma", "MySQL"],
    date: "July 2023",
    link: "https://sreitb.com",
    github: "https://github.com/bernarduswillson/SRE-ITB-frontend"
  },
  {
    name: "Parade Wisuda April Website",
    image: Wispril,
    caption: "A website showcasing information about the April 2023 graduation at ITB.",
    desc: "As the Head of Software Engineering, I led a team of 11 members to develop a web application highlighting information about the April 2023 graduation at ITB, featuring an exhibition of graduating students' final projects.",
    tools: ["Next.js", "Tailwind CSS"],
    date: "February 2023",
    link: "https://wisuda-april2023-frontend.vercel.app",
    github: "https://github.com/bernarduswillson/WisudaApril2023-frontend"
  },
  {
    name: "Arkavidia 8.0 Website",
    image: Arkavidia,
    caption: "A website for the annual IT events & competitions organized by HMIF ITB.",
    desc: "I developed Home Hero, Event Hero, and About sections for a web application designed to provide comprehensive information about an IT competition, encompassing registration details and other pertinent information.",
    tools: ["Next.js", "Tailwind CSS"],
    date: "September 2022",
    link: "https://arkavidia-frontend-8-0.vercel.app/",
    github: "https://github.com/bernarduswillson/arkavidia-frontend-8.0"
  },
  {
    name: "Toco",
    image: Toco,
    caption: "A web application designed to help users learn a new language.",
    desc: "I developed a multifaceted language-learning project, consisting of a web application aiding users in language acquisition, a single-page application for administrative content management on toco-app, and two distinct repositories for a RESTful API communication web service and a SOAP protocol web service.",
    tools: ["PHP", "HTML5", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Express.js", "Prisma", "MySQL", "JAX-WS", "Docker"],
    date: "November 2023",
    github: "https://github.com/bernarduswillson/toco-app"
  },
  {
    name: "DermaticaAI",
    image: DermaticaAI,
    caption: "An Android application about skin health and diseases.",
    desc: "I developed an Android application featuring skin disease detection, chatbot consultation, and real-time updates on skin conditions for the Compfest 2023 competition.",
    tools: ["Flutter", "Firebase"],
    date: "July 2023",
    github: "https://github.com/bernarduswillson/DermaticaAI"
  },
  {
    name: "Gangguan Jawa",
    image: GJ,
    caption: "A business management application with Object-Oriented Programming approach.",
    desc: "I developed a business management application with an Object-Oriented Programming approach encompassing functionalities such as transaction processing, inventory restocking, membership management, and more.",
    tools: ["JavaFx"],
    date: "April 2023",
    github: "https://github.com/bernarduswillson/BM-App"
  },
  {
    name: "Dailify",
    image: Dailify,
    caption: "An all-in-one diary and planner app for seamless organization of daily activities.",
    desc: "I developed a diary and planner application that allows users to create daily journals, set up a daily planner, establish goals, and include motivational elements.",
    tools: ["PyQt", "SQLite"],
    date: "April 2023",
    github: "https://github.com/bernarduswillson/Dailify"
  },
];

const Projects = ({ onDrawerOpen }: any): JSX.Element => {
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

  // Projects's animation
  const { scrollY } = useScroll();
  // translate
  const yt = useTransform(scrollY, [startPixel2 - (height1/2), endPixel2], [250, -500]);

  // Drawer
  const [isOpened, setIsOpened] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const handleDrawerClick = (projectDetails: any) => {
    setSelectedProject(projectDetails);
    setIsOpened(true);
    onDrawerOpen(projectDetails);
  };
  
    
  return (
    <div id="Projects" className='h-screen relative dark:bg-black bg-[#FFFFFF] transition duration-400 flex items-center justify-center'>
      <motion.div className="w-full relative" style={{ y: yt }}>
        <div className="z-[10] mx-[8vw] flex flex-col items-center">
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
          <Carousel
            opts={{
              align: "center",
            }}
            className="flex justify-center mb-10 w-[100vw] px-[10vw]"
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              {Array.from({ length: projects.length }).map((_, index) => (
                <CarouselItem key={index} className="flex justify-center md:basis-1/2 xl:basis-1/3">
                  <div className="" onClick={() => handleDrawerClick(projects[index])}>
                    <ProjectsCard
                      name={projects[index].name}
                      image={projects[index].image}
                      desc={projects[index].caption}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </motion.div>

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
  