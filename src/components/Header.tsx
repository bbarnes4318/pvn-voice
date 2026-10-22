import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaPhone, FaSignInAlt, FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { PORTAL_LOGIN_URL } from '../lib/site-links';

const navItems = [
  ['Why Waterfall', '/#why-waterfall'],
  ['How It Works', '/#how-it-works'],
  ['BYOC', '/#byoc'],
  ['Platform', '/#platform'],
  ['Pricing', '/pricing'],
  ['Resellers', '/#resellers'],
  ['Compliance', '/compliance'],
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="bg-primary-950 text-primary-100">
        <div className="container-custom py-2.5 flex items-center justify-between gap-4 text-xs md:text-sm">
          <div className="font-semibold tracking-wide">
            CARRIER ROUTING FOR HIGH-VOLUME CALL CENTERS
          </div>
          <div className="hidden sm:flex items-center gap-5">
            <span className="text-primary-300">VICIdial • Multi-carrier routing • BYOC</span>
            <a href="tel:+19045128487" className="font-semibold text-white hover:text-secondary-300 transition-colors">
              (904) 512-8487
            </a>
            <a
              href={PORTAL_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-secondary-300 transition-colors"
            >
              Login
            </a>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="container-custom h-20 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="PVN Voice home">
            <Logo />
          </Link>

          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 whitespace-nowrap">
            {navItems.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-semibold text-gray-700 hover:text-primary-700 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href={PORTAL_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden 2xl:inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:border-primary-300 hover:text-primary-700 transition-colors"
            >
              <FaSignInAlt />
              Customer Login
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-lg bg-secondary-600 px-5 py-2.5 text-sm font-bold text-white shadow-cta hover:bg-secondary-700 transition-colors"
            >
              Test My Traffic
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="lg:hidden text-primary-950 text-2xl"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[112px] bottom-0 z-50 overflow-y-auto bg-white border-t border-gray-100">
          <div className="container-custom py-6">
            <div className="space-y-1">
              {navItems.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-gray-800 hover:bg-primary-50 hover:text-primary-700"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="mt-6 border-t border-gray-100 pt-6 space-y-3">
              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-lg bg-secondary-600 px-5 py-3 font-bold text-white"
              >
                Test My Traffic
              </Link>
              <a
                href={PORTAL_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-primary-200 px-5 py-3 font-semibold text-primary-800"
              >
                <FaSignInAlt />
                Customer Login
              </a>
              <a
                href="tel:+19045128487"
                className="flex items-center justify-center gap-2 rounded-lg bg-primary-950 px-5 py-3 font-semibold text-white"
              >
                <FaPhone />
                Call (904) 512-8487
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
