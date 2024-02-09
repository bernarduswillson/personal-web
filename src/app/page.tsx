"use client"

// Imports
import React, { useState, useEffect } from 'react';

// Components
import Navbar from '@/components/Navigation/Navbar';
import Sidebar from '@/components/Navigation/Sidebar';
import Drawer from '@/components/Navigation/Drawer';

// Sections
import Home from '@/contexts/Home';
import About from '@/contexts/About';
import Skills from '@/contexts/Skills';
import Projects from '@/contexts/Projects';
import Contact from '@/contexts/Contact';

interface ProjectDetails {
  name: string;
  date: string;
  desc: string;
  tools: string[];
  link: string;
  github: string;
}

const Page = (): JSX.Element => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = (projectDetails: any) => {
    setSelectedProject(projectDetails);
    setIsDrawerOpen(true);
  };

  return (
    <div className='h-[500vh] relative overflow-hidden'>
      <Navbar />
      <Sidebar />
      <Drawer
        name={selectedProject?.name}
        date={selectedProject?.date}
        desc={selectedProject?.desc}
        tools={selectedProject?.tools}
        link={selectedProject?.link}
        github={selectedProject?.github}
        isOpened={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
      <Home />
      <About />
      <Skills />
      <Projects onDrawerOpen={handleDrawerOpen} />
      <Contact />
    </div>
  );
};

export default Page;
