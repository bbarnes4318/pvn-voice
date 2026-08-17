import React from 'react';
import Link from 'next/link';
import BrandMark from './BrandMark';
import { PHONE_DISPLAY, PHONE_HREF } from '../lib/pricing';

export interface HeaderNavItem {
  href: string;
  label: string;
}

const DEFAULT_NAV: HeaderNavItem[] = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/voip-for-call-centers', label: 'Call centers' },
  { href: '/dialer-systems', label: 'Dialer systems' },
  { href: '/compliance', label: 'Compliance' },
];

interface SiteHeaderProps {
  /** Route of the section this page belongs to, used to mark the active tab. */
  active?: string;
  /** Page-local anchors replace the default nav on pages that use them. */
  nav?: HeaderNavItem[];
}

/**
 * Sticky site header: wordmark, section nav, phone CTA. Shared by every page.
 */
const SiteHeader: React.FC<SiteHeaderProps> = ({ active, nav = DEFAULT_NAV }) => (
  <header className="sticky top-0 z-[60] bg-paper/90 backdrop-blur-[10px] border-b border-rule">
    <div className="container-custom flex items-center gap-4 md:gap-8 h-[68px]">
      <BrandMark />
      <nav className="hidden md:flex gap-6 ml-auto">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-[15px] font-medium no-underline text-ink py-1.5 border-b-2 transition-colors hover:border-attest ${
              active === item.href ? 'border-attest' : 'border-transparent'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <a
        href={PHONE_HREF}
        className="ml-auto md:ml-0 font-data font-semibold text-[14.5px] no-underline bg-navy text-white px-[18px] py-[11px] rounded-[3px] whitespace-nowrap hover:bg-ink transition-colors"
      >
        {PHONE_DISPLAY}
      </a>
    </div>
  </header>
);

export default SiteHeader;
