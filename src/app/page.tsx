import Navbar from '@/components/Navigation/Navbar';
import Sidebar from '@/components/Navigation/Sidebar';

import Hero from '@/contexts/Hero';
import About from '@/contexts/About';
import Projects from '@/contexts/Projects';

const Page = (): JSX.Element => {
  return (
    <div className='h-auto relative'>
      <Navbar />
      <Sidebar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default Page;
