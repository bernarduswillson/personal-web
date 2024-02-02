"use client"

import Image from "next/image";

import Code from '@/assets/images/Illustration/Code.svg';
import Web from '@/components/Icon/Skills/Web';
import Card from '@/components/Card/Card';

const skills = [
  {
    name: "Web Development",
    image: Web,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tools: ["HTML5", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Express.js", "SQL", "PHP"]
  },
  {
    name: "Software Development",
    image: Web,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tools: ["Python", "C++", "Java"]
  },
  {
    name: "Mobile Development",
    image: Web,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tools: ["React Native", "Flutter"]
  }
];

const Skills = (): JSX.Element => {      
  return (
    <div id="Skills" className='min-h-screen relative dark:bg-black bg-[#FFFFFF] transition duration-400 flex items-center justify-center'>
      <div className="z-[10] flex justify-center flex-wrap mx-[8vw] gap-4 mb-10">
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
  