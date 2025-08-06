import React from 'react';

interface SwiggleLineProps {
  className?: string;
}

const SwiggleLine: React.FC<SwiggleLineProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 5 C 25 0, 75 10, 100 5 L 100 10 L 0 10 Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SwiggleLine;