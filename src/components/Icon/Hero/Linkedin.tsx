import React from 'react';

interface LinkedinProps {
  width: number;
  height: number;
  fillColor?: string;
}

const Linkedin = ({ width, height, fillColor }: LinkedinProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 39 40" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.3008 20C38.3008 31.0457 29.8496 40 19.4246 40C8.99952 40 0.54834 31.0457 0.54834 20C0.54834 8.9543 8.99952 0 19.4246 0C29.8496 0 38.3008 8.9543 38.3008 20ZM30.7029 29.855V21.6094C30.7029 17.1939 28.4774 15.1389 25.5089 15.1389C23.1115 15.1389 22.0421 16.5365 21.4425 17.5141V15.4766H16.9299C16.9904 16.8253 16.9299 29.8546 16.9299 29.8546H21.4421V21.8244C21.4421 21.3934 21.4728 20.9666 21.5915 20.6593C21.9186 19.7994 22.6592 18.9113 23.9059 18.9113C25.5395 18.9113 26.191 20.2304 26.191 22.162V29.855H30.7029ZM21.4425 17.5141V17.5611H21.4125C21.4168 17.553 21.4224 17.5447 21.4281 17.5364C21.4331 17.529 21.4382 17.5216 21.4425 17.5141ZM9.65636 11.0297C9.65636 9.61932 10.6662 8.54584 12.2096 8.54584C13.7534 8.54584 14.702 9.61932 14.7319 11.0297C14.7319 12.4102 13.7534 13.5146 12.1797 13.5146H12.1504C10.6369 13.5146 9.65636 12.4102 9.65636 11.0297ZM14.4351 29.855H9.92454V15.4766H14.4351V29.855Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default Linkedin;