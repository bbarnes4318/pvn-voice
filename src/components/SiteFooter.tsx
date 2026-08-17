import React from 'react';
import Link from 'next/link';
import BrandMark from './BrandMark';
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  RATE_DISCLAIMER,
  RATE_DISCLAIMER_ELSEWHERE,
} from '../lib/pricing';
import { PORTAL_LOGIN_URL } from '../lib/site-links';

interface SiteFooterProps {
  /**
   * The legal documents and the sitemap use a single-line footer rather than
   * the four-column marketing one.
   */
  variant?: 'full' | 'minimal';
  /** The sitemap drops the rate disclaimer line as well. */
  showDisclaimer?: boolean;
}

const columns: { heading: string; links: { href: string; label: string; external?: boolean }[] }[] = [
  {
    heading: 'Service',
    links: [
      { href: '/pricing', label: 'Pricing' },
      { href: '/voip-for-call-centers', label: 'Call centers' },
      { href: '/dialer-systems', label: 'Dialer systems' },
    ],
  },
  {
    heading: 'Compliance',
    links: [
      { href: '/compliance', label: 'Compliance overview' },
      { href: '/compliance/do-not-call', label: 'Do-Not-Call policy' },
      { href: '/compliance/traceback', label: 'Traceback policy' },
      { href: '/compliance/acceptable-use', label: 'Acceptable use' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/contact-us', label: 'Contact us' },
      { href: '/terms-of-service', label: 'Terms of Service' },
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/disclosures', label: 'Disclosures' },
      { href: '/sitemap', label: 'Sitemap' },
      { href: PORTAL_LOGIN_URL, label: 'Customer login', external: true },
    ],
  },
];

const SiteFooter: React.FC<SiteFooterProps> = ({ variant = 'full', showDisclaimer = true }) => {
  if (variant === 'minimal') {
    return (
      <footer className="bg-ink text-[#8FB2C7] pt-10 pb-6 text-[14.5px] mt-5">
        <div className="container-custom">
          <p>
            &copy; 2026 PVN Voice &middot;{' '}
            <Link href="/" className="no-underline text-[#CFE0EA] hover:text-attest">
              pvnvoice.com
            </Link>{' '}
            &middot;{' '}
            <a href={PHONE_HREF} className="no-underline text-[#CFE0EA] hover:text-attest">
              {PHONE_DISPLAY}
            </a>
          </p>
          {showDisclaimer && (
            <div className="mt-5 pt-[18px] border-t border-white/10 font-data text-xs text-[#5C7F96]">
              {RATE_DISCLAIMER_ELSEWHERE}
            </div>
          )}
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-ink text-[#8FB2C7] pt-12 pb-7 text-[15px]">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)] gap-8">
          <div>
            <BrandMark onDark className="mb-3.5" />
            <p className="max-w-[34ch] text-[#8FB2C7]">
              Licensed US VoIP carrier. Outbound termination, monitored DIDs, dialer infrastructure
              and pre-dial compliance for outbound operations.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h4 className="font-data text-[11px] font-semibold uppercase tracking-[.14em] text-[#5C7F96] mb-3.5">
                {column.heading}
              </h4>
              {column.links.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block no-underline py-[5px] text-[#CFE0EA] hover:text-attest"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block no-underline py-[5px] text-[#CFE0EA] hover:text-attest"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 pt-5 border-t border-white/10 font-data text-xs text-[#5C7F96] flex flex-wrap gap-y-2 gap-x-6 justify-between">
          <span>&copy; 2026 PVN Voice</span>
          <a href={PHONE_HREF} className="no-underline text-[#5C7F96] hover:text-attest">
            {PHONE_DISPLAY}
          </a>
          <span>{RATE_DISCLAIMER}</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
