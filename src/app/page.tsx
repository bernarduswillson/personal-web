// Components
import Navbar from '@/components/Navigation/Navbar';
import Sidebar from '@/components/Navigation/Sidebar';

// Sections
import Home from '@/contexts/Home';
import About from '@/contexts/About';
import Skills from '@/contexts/Skills';

const Page = (): JSX.Element => {
  return (
    <div className='h-auto relative overflow-hidden'>
      <Navbar />
      <Sidebar />
      <Home />
      <About />
      <Skills />
    </div>
  );
};

export default Page;
