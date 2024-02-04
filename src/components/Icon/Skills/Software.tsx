import React from 'react';

const Software = ({ width, height, fillColor }: { width: number; height: number; fillColor?: string }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.397 3H6.48529C4.56042 3 3 4.56042 3 6.48529V27.397C3 29.3219 4.56042 30.8823 6.48529 30.8823H27.397C29.3219 30.8823 30.8823 29.3219 30.8823 27.397V6.48529C30.8823 4.56042 29.3219 3 27.397 3Z" stroke={fillColor} strokeWidth="5" strokeLinejoin="round"/>
      <path d="M27.397 44.8235H6.48529C4.56042 44.8235 3 46.3839 3 48.3088V69.2205C3 71.1454 4.56042 72.7058 6.48529 72.7058H27.397C29.3219 72.7058 30.8823 71.1454 30.8823 69.2205V48.3088C30.8823 46.3839 29.3219 44.8235 27.397 44.8235Z" stroke={fillColor} strokeWidth="5" strokeLinejoin="round"/>
      <path d="M69.2203 3H48.3085C46.3837 3 44.8232 4.56042 44.8232 6.48529V27.397C44.8232 29.3219 46.3837 30.8823 48.3085 30.8823H69.2203C71.1451 30.8823 72.7056 29.3219 72.7056 27.397V6.48529C72.7056 4.56042 71.1451 3 69.2203 3Z" stroke={fillColor} strokeWidth="5" strokeLinejoin="round"/>
      <path d="M44.8232 44.8235H72.7056" stroke={fillColor} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M58.7646 58.7646H72.7058" stroke={fillColor} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M44.8232 72.7058H72.7056" stroke={fillColor} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Software;
