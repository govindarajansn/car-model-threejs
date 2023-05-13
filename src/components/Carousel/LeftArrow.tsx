import React, { SVGProps } from 'react';

const LeftArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill='none' aria-hidden='true' {...props}>
    <path stroke='currentColor' strokeWidth={1.5} d='M11.021 18.967 4.055 12l6.966-6.967M4 12h17' />
  </svg>
);

export default LeftArrow;
