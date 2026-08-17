import React from 'react';

interface BandProps {
  children: React.ReactNode;
  /** Navy background variant. */
  dark?: boolean;
  id?: string;
  className?: string;
}

/**
 * Standard full-width section wrapper. `dark` switches to the navy band used
 * for the litigator gate, DID reputation and pacing sections.
 */
const Band: React.FC<BandProps> = ({ children, dark, id, className = '' }) => (
  <section
    id={id}
    className={`py-[clamp(48px,6.5vw,88px)] ${
      dark ? 'bg-navy text-white' : 'border-t border-rule'
    } ${className}`}
  >
    <div className="container-custom">{children}</div>
  </section>
);

export default Band;
