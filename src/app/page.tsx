// Components
import Navbar from '@/components/Navigation/Navbar';
import Sidebar from '@/components/Navigation/Sidebar';

// Sections
import Home from '@/contexts/Home';
import About from '@/contexts/About';
import Skills from '@/contexts/Skills';
import Experience from '@/contexts/Experience';

const Page = (): JSX.Element => {
  return (
    <div className='h-auto relative overflow-hidden'>
      <Navbar />
      <Sidebar />
      <Home />
      <About />
      <Skills />
      <Experience />
    </div>
  );
};

export default Page;
