import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaPhone, FaSignInAlt, FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { PORTAL_LOGIN_URL } from '../lib/site-links';

const navItems = [
  ['Why PVN', '/#why-waterfall'],
  ['Waterfall', '/#waterfall'],
  ['BYOC', '/#byoc'],
  ['Mission Control', '/#platform'],
  ['Resellers', '/#resellers'],
  ['Pricing', '/pricing'],
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="bg-primary-950 text-white">
        <div className="container-custom flex min-h-[36px] items-center justify-between gap-4 py-2 text-xs">
          <div className="font-bold uppercase tracking-[0.13em] text-primary-200">
            Call Center VoIP • Multi-Carrier Routing • BYOC
          </div>
          <div className="hidden items-center gap-5 sm:flex">
            <span className="hidden text-primary-400 lg:inline">Built for high-volume VICIdial operations</span>
            <a href="tel:+19045128487" className="font-bold text-white transition-colors hover:text-secondary-300">
              (904) 512-8487
            </a>
            <a
              href={PORTAL_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white transition-colors hover:text-secondary-300"
            >
              Login
            </a>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 border-b border-gray-200/80 bg-white/95 backdrop-blur-md">
        <div className="container-custom flex h-[74px] items-center justify-between gap-6">
          <Link href="/" className="flex flex-shrink-0 items-center" aria-label="PVN Voice home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-5 whitespace-nowrap xl:flex 2xl:gap-7">
            {navItems.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-bold text-gray-600 transition-colors hover:text-primary-800"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden flex-shrink-0 items-center lg:flex">
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-xl bg-secondary-600 px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(40,156,106,0.22)] transition-all hover:-translate-y-0.5 hover:bg-secondary-700"
            >
              Test My Traffic
              <span className="ml-2">→</span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="text-2xl text-primary-950 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[110px] z-50 overflow-y-auto border-t border-gray-100 bg-white lg:hidden">
          <div className="container-custom py-6">
            <div className="space-y-1">
              {navItems.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-3 py-3.5 text-base font-bold text-gray-800 hover:bg-primary-50 hover:text-primary-800"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/compliance"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-xl px-3 py-3.5 text-base font-bold text-gray-800 hover:bg-primary-50 hover:text-primary-800"
              >
                Compliance
              </Link>
            </div>

            <div className="mt-6 space-y-3 border-t border-gray-100 pt-6">
              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-xl bg-secondary-600 px-5 py-3.5 font-bold text-white"
              >
                Test My Traffic
              </Link>
              <a
                href={PORTAL_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-primary-200 px-5 py-3.5 font-bold text-primary-800"
              >
                <FaSignInAlt /> Customer Login
              </a>
              <a
                href="tel:+19045128487"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary-950 px-5 py-3.5 font-bold text-white"
              >
                <FaPhone /> (904) 512-8487
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
