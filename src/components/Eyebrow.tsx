import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  /** Dark bands need the lighter ink treatment. */
  dark?: boolean;
  /** Centered variant used in the closing CTA blocks, where the rule is dropped. */
  centered?: boolean;
  className?: string;
}

/**
 * Small-caps mono kicker with a trailing rule. Used above almost every section
 * heading on the site.
 */
const Eyebrow: React.FC<EyebrowProps> = ({ children, dark, centered, className = '' }) => (
  <p
    className={`font-data text-[11.5px] font-semibold uppercase tracking-[.16em] flex items-center gap-2.5 ${
      dark ? 'text-[#8FB2C7]' : 'text-slate'
    } ${centered ? 'justify-center' : ''} ${className}`}
  >
    {centered ? (
      <span>{children}</span>
    ) : (
      <>
        {children}
        <span className={`flex-1 h-px ${dark ? 'bg-white/20' : 'bg-rule'}`} aria-hidden="true" />
      </>
    )}
  </p>
);

export default Eyebrow;
