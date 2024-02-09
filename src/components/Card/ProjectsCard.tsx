"use client"

// Imports
import { useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  name: string;
  image: StaticImageData;
  desc: string;
}

const Card = ({ name, image, desc }: CardProps): JSX.Element => {
  const [onHover, setOnHover] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (onHover) {
      timer = setTimeout(() => {
        setShowText(true);
      }, 200);
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
        minHeight: '400px',
        maxWidth: '400px',
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
        style={{ borderRadius: '20px', transform: onHover ? 'scale(1.2)' : 'scale(1)' }}
      />
      <div
      className={`text-start relative flex flex-col justify-end w-full bg-secondary cursor-pointer px-7 ease-in-out pb-5 ${
        showText ? 'opacity-80 transition-opacity duration-500' : 'opacity-0'
      }`}
      style={{ transition: 'opacity 0.5s ease-in-out' }}
    >
      <h2 className='font-bold text-2xl'>{name}</h2>
      <h3>{desc}</h3>
    </div>
  </div>
  );
};

export default Card;
