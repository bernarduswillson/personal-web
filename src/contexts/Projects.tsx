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
import Toco from '@/assets/images/Projects/Toco.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Projects data
const projects = [
  {
    name: "SRE & IYREF Website",
    image: Toco,
    caption: "Ezz website.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.",
    desc: "As the Director of IT Development at SRE ITB, I led the creation and maintenance of a web app showcasing the organization's profile and updates. Simultaneously, as the IT Manager at IYREF, I oversaw a similar web app, providing detailed information and real-time updates. As the Director of IT Development at SRE ITB, I led the creation and maintenance of a web app showcasing the organization's profile and updates. Simultaneously, as the IT Manager at IYREF, I oversaw a similar web app, providing detailed information and real-time updates.",
    tools: ["Next.js", "Tailwind CSS", "Express.js", "Prisma", "MySQL"],
    date: "1 May 2003",
    link: "https://sreitb.com",
    github: "https://github.com/bernarduswillson"
  },
  {
    name: "Toco",
    image: Toco,
    caption: "LOREMMMLorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.",
    desc: "Lorem Ipsum.",
    tools: ["HTML5", "CSS", "JavaScript", "React", "Tailwind CSS", "Express.js", "PHP"],
    date: "1 May 2003",
    link: "https://sreitb.com",
    github: "https://github.com/bernarduswillson"
  },
  {
    name: "Toco",
    image: Toco,
    caption: "LOREMMMLorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.",
    desc: "Lorem Ipsum.",
    tools: ["HTML5", "CSS", "JavaScript", "React", "Tailwind CSS", "Express.js", "PHP"],
    date: "1 May 2003",
    link: "https://sreitb.com",
    github: "https://github.com/bernarduswillson"
  },
  {
    name: "Toco",
    image: Toco,
    caption: "LOREMMMLorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.",
    desc: "Lorem Ipsum.",
    tools: ["HTML5", "CSS", "JavaScript", "React", "Tailwind CSS", "Express.js", "PHP"],
    date: "1 May 2003",
    link: "https://sreitb.com",
    github: "https://github.com/bernarduswillson"
  },
  {
    name: "Toco",
    image: Toco,
    caption: "LOREMMMLorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.",
    desc: "Lorem Ipsum.",
    tools: ["HTML5", "CSS", "JavaScript", "React", "Tailwind CSS", "Express.js", "PHP"],
    date: "1 May 2003",
    link: "https://sreitb.com",
    github: "https://github.com/bernarduswillson"
  },
  {
    name: "Toco",
    image: Toco,
    caption: "LOREMMMLorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.",
    desc: "Lorem Ipsum.",
    tools: ["HTML5", "CSS", "JavaScript", "React", "Tailwind CSS", "Express.js", "PHP"],
    date: "1 May 2003",
    link: "https://sreitb.com",
    github: "https://github.com/bernarduswillson"
  },
  {
    name: "Toco",
    image: Toco,
    caption: "LOREMMMLorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.",
    desc: "Lorem Ipsum.",
    tools: ["HTML5", "CSS", "JavaScript", "React", "Tailwind CSS", "Express.js", "PHP"],
    date: "1 May 2003",
    link: "https://sreitb.com",
    github: "https://github.com/bernarduswillson"
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
  