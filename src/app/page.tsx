import Navbar from '@/components/Navigation/Navbar';

const Page = (): JSX.Element => {
  return (
    <div className='h-screen dark:bg-black bg-[#FFFFFF] transition duration-400'>
      <Navbar />
    </div>
  );
};

export default Page;
