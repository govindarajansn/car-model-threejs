import { SVGProps } from 'react';

const RightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill='none' aria-hidden='true' {...props}>
    <path
      stroke='currentColor'
      strokeWidth='1.5'
      d='M12.979 18.967L19.945 12 12.98 5.033M20 12H3'
    ></path>
  </svg>
);

export default RightArrow;
