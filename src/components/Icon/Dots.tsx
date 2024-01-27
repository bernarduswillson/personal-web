import React from 'react';

interface DotsProps {
  rows: number;
  columns: number;
  dotSize: number;
  dotColor: string;
  spacing: number;
}

const Dots = ({ rows, columns, dotSize, dotColor, spacing }: DotsProps) => {
  const ornamentStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, ${dotSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${dotSize}px)`,
    gap: `${spacing}px`,
  };

  const generateDots = () => {
    const dots = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        dots.push(
          <div
            key={`${row}-${col}`}
            className={`rounded-full w-[${dotSize}px] h-[${dotSize}px] bg-${dotColor}`}
          />
        );
      }
    }
    return dots;
  };

  return (
    <div className="dots" style={ornamentStyle}>
      {generateDots()}
    </div>
  );
};

export default Dots;
