import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  /** 'white' uses the knockout artwork for dark/transparent backgrounds. */
  variant?: 'navy' | 'white';
}

// Both artworks are stacked and cross-faded rather than swapped, so the header
// can change over a scroll without the logo blinking.
const Logo: React.FC<LogoProps> = ({ className = '', variant = 'navy' }) => {
  const isWhite = variant === 'white';
  return (
    <Link href="/" className={`relative block w-auto h-auto ${className}`}>
      <Image
        src="/images/logo.png"
        alt="PVN Voice Logo"
        width={291}
        height={77}
        priority
        className={`transition-opacity duration-300 ${isWhite ? 'opacity-0' : 'opacity-100'}`}
      />
      <Image
        src="/images/logo2.png"
        alt=""
        aria-hidden="true"
        width={291}
        height={77}
        priority
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${isWhite ? 'opacity-100' : 'opacity-0'}`}
      />
    </Link>
  );
};

export default Logo;
