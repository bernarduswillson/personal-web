import React from 'react';

interface EmailProps {
  width: number;
  height: number;
  fillColor?: string;
}

const Email = ({ width, height, fillColor }: EmailProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 38 40" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.1238 0C29.5435 0 38 8.96 38 20C38 31.04 29.5435 40 19.1238 40C8.70411 40 0.247559 31.04 0.247559 20C0.247559 8.96 8.70411 0 19.1238 0ZM28.5745 12.0267L10.252 11.9733L19.4132 19.68L28.5745 12.0267ZM17.2488 21.8267L9.24523 15.16V27.8267H29.0401V15.4267L21.6155 21.8533C19.0986 24.0267 19.8537 23.9867 17.2488 21.8267ZM9.3459 9.54667H29.0904C30.6886 9.54667 31.9848 10.9333 31.9848 12.6133V27.28C31.9848 28.9733 30.6761 30.3467 29.0904 30.3467H9.3459C7.74772 30.3467 6.45155 28.96 6.45155 27.28V12.6133C6.45155 10.92 7.7603 9.54667 9.3459 9.54667Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default Email;
