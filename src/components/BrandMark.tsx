import React from 'react';
import Link from 'next/link';

interface BrandMarkProps {
  /** Footer treatment: white wordmark and an all-green pin. */
  onDark?: boolean;
  href?: string;
  className?: string;
}

/**
 * The PVN Voice wordmark and pin. `navy` is the logo blue and `attest` is the
 * pin fill; both come from the shared palette.
 */
const BrandMark: React.FC<BrandMarkProps> = ({ onDark, href = '/', className = '' }) => (
  <Link
    href={href}
    aria-label="PVN Voice home"
    className={`flex items-center gap-2.5 shrink-0 no-underline ${className}`}
  >
    <svg width="26" height="30" viewBox="0 0 26 30" aria-hidden="true">
      <path
        d="M13 1C6.9 1 2 5.8 2 11.7c0 7.6 8.9 15.6 10.3 16.8.4.4 1 .4 1.4 0C15.1 27.3 24 19.3 24 11.7 24 5.8 19.1 1 13 1z"
        fill="none"
        stroke={onDark ? '#3CB26E' : '#003359'}
        strokeWidth="2.2"
      />
      <circle cx="13" cy="11.5" r="4.2" fill="#3CB26E" />
    </svg>
    <span
      className={`font-display font-extrabold text-xl tracking-[-.035em] ${
        onDark ? 'text-white' : 'text-navy'
      }`}
    >
      PVN Voice
    </span>
  </Link>
);

export default BrandMark;
