"use client";

// Imports
import { useState, useEffect } from 'react';

// Assets
import Laptop1 from '@/assets/images/Hero/Laptop/1.svg';
import Laptop2 from '@/assets/images/Hero/Laptop/2.svg';
import Laptop3 from '@/assets/images/Hero/Laptop/3.svg';
import Laptop4 from '@/assets/images/Hero/Laptop/4.svg';
import Laptop5 from '@/assets/images/Hero/Laptop/5.svg';
import Laptop6 from '@/assets/images/Hero/Laptop/6.svg';
import Laptop7 from '@/assets/images/Hero/Laptop/7.svg';
import Laptop8 from '@/assets/images/Hero/Laptop/8.svg';
import Laptop9 from '@/assets/images/Hero/Laptop/9.svg';
import Laptop10 from '@/assets/images/Hero/Laptop/10.svg';
import Laptop11 from '@/assets/images/Hero/Laptop/11.svg';

const laptops = [
  Laptop1, Laptop2, Laptop3, Laptop4, Laptop5,
  Laptop6, Laptop7, Laptop8, Laptop9, Laptop10, Laptop11,
];

const Laptop = (): JSX.Element => {
  // Animation handler
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % laptops.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {laptops.map((laptop, index) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={index}
          className={`mx-auto ${currentImage === index ? 'block' : 'hidden'}`}
          src={laptop.src}
          alt={`Laptop ${index + 1}`}
          style={{
            objectFit: 'contain',
            width: '100%',
            height: '100%',
            maxWidth: '500px',
            maxHeight: '100%',
          }}
        />
      ))}
    </div>
  );
};

export default Laptop;
