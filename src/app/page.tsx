import Navbar from '@/components/Navigation/Navbar';
import Sidebar from '@/components/Navigation/Sidebar';

import Home from '@/contexts/Home';
import About from '@/contexts/About';
import Projects from '@/contexts/Projects';

const Page = (): JSX.Element => {
  return (
    <div className='h-auto relative'>
      <Navbar />
      <Sidebar />
      <Home />
      <About />
      <Projects />
    </div>
  );
};

export default Page;
