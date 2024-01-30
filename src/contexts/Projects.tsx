import Image from "next/image";

import Code from '@/assets/images/Illustration/Code.svg';

const Projects = (): JSX.Element => {
    return (
      <div id="Projects" className='min-h-screen relative dark:bg-black bg-[#FFFFFF] transition duration-400 flex items-center justify-center'>
        <div className="font-extrabold text-[50px]">
          PROJECTS
        </div>

        <div className='absolute left-[-600px] lg:left-[-250px] top-[-40px] lg:top-[-60px] blur-[10px]'>
          <Image
            src={Code}
            alt="Code"
          />
        </div>
      </div>
    );
  };
  
  export default Projects;
  