"use client"

import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";

interface CardProps {
  name: string;
  image: React.JSXElementConstructor<any>;
  desc: string;
  tools: string[];
}

const Card = ({ name, image: ImageComponent, desc, tools }: CardProps): JSX.Element => {
  // Theme handler
  const { setTheme, resolvedTheme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState(resolvedTheme);
  
  useEffect(() => {
    setMode(resolvedTheme);
    setLoading(false);
  }, [resolvedTheme]);

  return (
    <div className="flex flex-col max-w-[400px] h-auto text-primary border-[3px] dark:border-white border-black dark:border-opacity-60 border-opacity-60 transition-all duration-300">
      <div className="text-2xl font-bold flex mx-8 gap-4 mt-5">
        <div className='flex flex-col justify-center'>
          {mode === 'dark' && !loading ? (
            <ImageComponent width={40} height={40} fillColor="white" />
          ) : (
            <ImageComponent width={40} height={40} fillColor="black" />
          )}
        </div>
        <div>
          <div className="underline decoration-4 underline-offset-[1px]">{name.split(' ')[0]}</div>{' '}
          <div className='mt-[-5px]'>{name.split(' ').slice(1).join(' ')}</div>
        </div>
      </div>
      <div className='h-fit flex relative mx-5'>
        <div className='opacity-50 flex flex-col items-center'>
          &lt;h3&gt;
          <div className='w-[1px] bg-primary h-full'></div>
          &lt;h3&gt;
        </div>
        <div className="text-lg leading-6 font-normal py-7 ml-1">
          {desc}
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-3 mb-5">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-secondary px-3 py-1 rounded-[10px] text-sm font-semibold mr-2 mb-2 text-primary"
          >
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
