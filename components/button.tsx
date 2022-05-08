import React from 'react';
import Link from 'next/link';
import { IconBrandTwitter, IconBrandGithub } from '@tabler/icons';

interface Props {
  children?: React.ReactNode;
  // onClick: () => void;
  // href: string;
}

const Button: React.FC<Props> = ({ children }) => {
  return (
    <button
      // href={href}
      className='flex items-center h-8 px-3 rounded-md text-neutral-200 bg-neutral-800 hover:bg-neutral-750 hover:text-neutral-100'
    >
      {children}
    </button>
  );
};

export default Button;
