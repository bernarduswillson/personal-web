const About = (): JSX.Element => {
    return (
      <div id="About" className='h-screen relative dark:bg-black bg-[#FFFFFF] transition duration-400 flex items-center justify-center'>
        <div className="lg:flex">
          <div className="lg:w-1/2 justify-center hidden lg:flex">foto orang ganteng</div>
          <div className="lg:w-1/2 pr-[10vw]">
            <div className="text-[50px] font-extrabold leading-[50px] mb-5">
              I’m Bernardus Willson.
            </div>
          <div className="lg:w-1/2 justify-center lg:hidden">foto orang ganteng</div>
            <div className="text-2xl font-semibold">
              <div>
              Currently in my 5th semester and interested in computer-related things such as web development and software development. 
              </div>
              <div className="mt-3">
                I consistently seek opportunities to develop my soft and hard skills through volunteers, committees, and projects.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  