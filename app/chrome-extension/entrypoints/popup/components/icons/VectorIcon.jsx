import React from 'react';

const VectorIcon = ({ className = 'icon-default' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6.875v10.5c0 .345.28.625.625.625h10.75c.345 0 .625-.28.625-.625V14.5M18 6.875V14.5M18 14.5H10.375M18 14.5l-5.875-5.875"
      />
    </svg>
  );
};

export default VectorIcon;
