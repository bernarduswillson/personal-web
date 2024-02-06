"use client"

// Imports
import { useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface CardProps {
  name: string;
  image: StaticImageData;
  desc: string;
  tools: string[];
  width: number;
  height: number;
}

const Card = ({ name, image, desc, tools, width, height }: CardProps): JSX.Element => {
  const [onHover, setOnHover] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (onHover) {
      timer = setTimeout(() => {
        setShowText(true);
      }, 400);
    } else {
      setShowText(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [onHover]);

  return (
    <div
      className={`relative flex overflow-hidden justify-center transition-all ease-in-out duration-500`}
      style={{
        borderRadius: '20px',
        transform: onHover ? 'scale(0.95)' : 'scale(1)',
        height: `${height}px`,
        width: `${width}px`,
        maxWidth: '100%',
      }}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => {
        setTimeout(() => setOnHover(false), 300);
        setShowText(false);
      }}
    >
      <Image
        src={image}
        alt='img'
        layout='fill'
        objectFit='cover'
        placeholder='blur'
        className='transition-all ease-in-out duration-500'
        style={{ borderRadius: '20px', transform: onHover ? 'scale(1.1)' : 'scale(1)' }}
      />
      <div
      className={`relative flex flex-col justify-end w-full bg-secondary cursor-pointer px-7 ease-in-out ${
        showText ? 'opacity-80 transition-opacity duration-500' : 'opacity-0'
      }`}
      style={{ transition: 'opacity 0.5s ease-in-out' }}
    >
      <h2 className='font-bold text-2xl'>{name}</h2>
      <h3>{desc}</h3>
      {/* Tools */}
      <div className='flex flex-wrap mt-3 mb-5'>
        {tools.map((tool, index) => (
          <h4
            key={index}
            className='bg-primary text-secondary px-3 py-1 rounded-[10px] text-sm font-semibold mr-2 mb-2 cursor-default hover:translate-y-[-4px] transition-all duration-300 ease-in-out'
          >
            {tool}
          </h4>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Card;
