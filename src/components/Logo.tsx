import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link href="/" className={`block w-auto h-auto ${className}`}>
      <Image 
        src="/images/logo.png" 
        alt="PVN Voice Logo"
        width={291}
        height={77}
        priority
      />
    </Link>
  );
};

export default Logo;