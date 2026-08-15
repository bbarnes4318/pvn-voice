import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaPhone, FaBars, FaTimes, FaShieldAlt, FaCheckCircle, FaStar, FaLock, FaSignInAlt } from 'react-icons/fa';
import Logo from './Logo';
import { PORTAL_LOGIN_URL } from '../lib/site-links';

interface HeaderProps {
  /** Float the header over a dark hero, using the knockout logo until scrolled past it. */
  overlay?: boolean;
}

const Header: React.FC<HeaderProps> = ({ overlay = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(!overlay);
  const headerRef = useRef<HTMLElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Publish the rendered header height so an overlaid hero can pull itself up
  // underneath it without anyone hardcoding a pixel guess.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const publish = () => {
      // Only publish a real measurement — writing 0px would defeat the fallback
      // and leave the hero sitting below the bar instead of under it.
      const h = el.offsetHeight;
      if (h > 0) {
        document.documentElement.style.setProperty('--pvn-header-h', `${h}px`);
      }
    };
    publish();
    window.addEventListener('resize', publish);
    return () => window.removeEventListener('resize', publish);
  }, []);

  // Minimal scroll listener: transparent while the hero is behind the bar,
  // solid white once it isn't.
  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => {
      const hero = document.getElementById('pvn-hero');
      const barH = headerRef.current ? headerRef.current.offsetHeight : 128;
      const threshold = hero ? Math.max(hero.offsetHeight - barH, 24) : 24;
      setScrolledPastHero(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [overlay]);

  // An open mobile menu always gets the solid treatment so its trigger stays legible.
  const isSolid = scrolledPastHero || mobileMenuOpen;

  const navLinkClass = `font-medium transition-colors ${
    isSolid ? 'text-gray-700 hover:text-navy-500' : 'text-white hover:text-navy-50'
  }`;
  const dropdownPanelClass =
    'absolute mt-2 bg-white border border-gray-100 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-opacity z-20';
  const dropdownItemClass =
    'block px-5 py-3 text-gray-700 hover:bg-navy-50 hover:text-navy-600 transition-colors';

  return (
    <header ref={headerRef} className={overlay ? 'sticky top-0 z-40' : ''}>
      {/* Top Bar */}
      <div
        className={`py-1 text-white transition-colors duration-300 ${
          isSolid ? 'bg-navy-500' : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center">
                <FaShieldAlt className="mr-1" />
                256-bit SSL Encrypted
              </span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center">
                <FaCheckCircle className="mr-1" />
                BBB Accredited Business
              </span>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center">
                <FaStar className="mr-1 text-yellow-400" />
                4.9/5 Customer Rating
              </span>
              <span className="hidden md:inline">|</span>
              <a href="tel:+19045128487" className="hover:text-navy-50 transition-colors">
                Call (904) 512-8487
              </a>
              <span className="hidden md:inline">|</span>
              <a
                href={PORTAL_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-medium hover:text-navy-50 transition-colors"
              >
                <FaLock className="mr-1" />
                Customer Login
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`transition-colors duration-300 ${overlay ? '' : 'sticky top-0 z-40'} ${
          isSolid ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex items-center">
              <Logo variant={isSolid ? 'navy' : 'white'} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-3 xl:space-x-4 2xl:space-x-6 whitespace-nowrap">
              <Link href="/" className={navLinkClass}>
                Home
              </Link>
              <Link href="/services" className={navLinkClass}>
                Services
              </Link>
              <div className="relative group">
                <button className={`${navLinkClass} flex items-center focus:outline-none`}>
                  Solutions
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className={`${dropdownPanelClass} left-0 w-64`}>
                  <Link href="/services/voip-for-call-centers" className={dropdownItemClass}>VOIP for Call Centers</Link>
                  <Link href="/services/dialer-systems" className={dropdownItemClass}>Dialer Systems</Link>
                  <Link href="/services/ai-powered-solutions" className={dropdownItemClass}>AI-Powered Solutions</Link>
                  <Link href="/services/ai-voice-agents" className={dropdownItemClass}>AI Voice Agents / Virtual Agents</Link>
                  <Link href="/phone-system" className={dropdownItemClass}>Business Phone System</Link>
                  <Link href="/unified-communications" className={dropdownItemClass}>Unified Communications</Link>
                  <Link href="/contact-center" className={dropdownItemClass}>Contact Center</Link>
                  <Link href="/integrations" className={dropdownItemClass}>Integrations</Link>
                </div>
              </div>
              <Link href="/pricing" className={navLinkClass}>
                Pricing
              </Link>
              <div className="relative group">
                <button className={`${navLinkClass} flex items-center focus:outline-none`}>
                  Resources
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className={`${dropdownPanelClass} left-0 w-56`}>
                  <Link href="/blog" className={dropdownItemClass}>Blog</Link>
                  <Link href="/faq" className={dropdownItemClass}>FAQ</Link>
                  <Link href="/glossary" className={dropdownItemClass}>VoIP Glossary</Link>
                  <Link href="/tips" className={dropdownItemClass}>Business Communication Tips</Link>
                  <a href="https://app.pvndialer.com" target="_blank" rel="noopener noreferrer" className={dropdownItemClass}>GeoFilter Tool</a>
                </div>
              </div>
              <div className="relative group">
                <button className={`${navLinkClass} flex items-center focus:outline-none`}>
                  Company
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className={`${dropdownPanelClass} right-0 w-56`}>
                  <Link href="/about-us" className={dropdownItemClass}>About Us</Link>
                  <Link href="/contact-us" className={dropdownItemClass}>Contact Us</Link>
                  <Link href="/compliance" className={dropdownItemClass}>Compliance</Link>
                </div>
              </div>
              <a
                href={PORTAL_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden xl:flex items-center space-x-2 border px-4 py-2 rounded font-medium transition-colors ${
                  isSolid
                    ? 'border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-navy-900'
                }`}
              >
                <FaSignInAlt />
                <span>Customer Login</span>
              </a>
              <a
                href="tel:+19045128487"
                className="bg-navy-500 text-white px-4 py-2 rounded hover:bg-navy-600 transition-colors font-medium flex items-center space-x-2"
              >
                <FaPhone />
                <span>Call (904) 512-8487</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`focus:outline-none transition-colors ${
                  isSolid ? 'text-gray-700 hover:text-navy-500' : 'text-white hover:text-navy-50'
                }`}
              >
                {mobileMenuOpen ? (
                  <FaTimes className="text-2xl" />
                ) : (
                  <FaBars className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 fixed inset-x-0 top-[80px] bottom-0 z-30 overflow-y-auto">
          <div className="container-custom py-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-navy-500 font-medium py-2 transition-colors">
              Home
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-navy-500 font-medium py-2 transition-colors">
              Services
            </Link>
            <div className="border-t border-gray-100 pt-3">
              <span className="block text-gray-700 font-semibold mb-2">Solutions</span>
              <Link href="/services/voip-for-call-centers" className="block text-gray-700 hover:text-navy-500 font-medium py-2 transition-colors pl-4">VOIP for Call Centers</Link>
              <Link href="/services/dialer-systems" className="block text-gray-700 hover:text-navy-500 font-medium py-2 transition-colors pl-4">Dialer Systems</Link>
              <Link href="/services/ai-powered-solutions" className="block text-gray-700 hover:text-navy-500 font-medium py-2 transition-colors pl-4">AI-Powered Solutions</Link>
              <Link href="/services/ai-voice-agents" className="block text-gray-700 hover:text-navy-500 font-medium py-2 transition-colors pl-4">AI Voice Agents / Virtual Agents</Link>
              <Link href="/phone-system" className="block text-gray-700 hover:text-navy-500 font-medium py-2 transition-colors pl-4">Business Phone System</Link>
              <Link href="/unified-communications" className="block text-gray-700 hover:text-navy-500 font-medium py-2 transition-colors pl-4">Unified Communications</Link>
              <Link href="/contact-center" className="block text-gray-700 hover:text-navy-500 font-medium py-2 transition-colors pl-4">Contact Center</Link>
              <Link href="/integrations" className="block text-gray-700 hover:text-navy-500 font-medium py-2 transition-colors pl-4">Integrations</Link>
            </div>
            <Link href="/pricing" className="block text-gray-700 hover:text-navy-500 font-medium py-2 transition-colors">
              Pricing
            </Link>
            <div className="border-t border-gray-100 pt-3">
              <span className="block text-gray-700 font-semibold mb-2">Resources</span>
              <Link href="/blog" className="block text-gray-700 hover:text-navy-500 font-medium py-2 transition-colors pl-4">Blog</Link>
              <Link href="/faq" className="block text-gray-700 hover:text-navy-500 font-medium py-2 transition-colors pl-4">FAQ</Link>
              <Link href="/glossary" className="block text-gray-700 hover:text-navy-500 font-medium py-2 transition-colors pl-4">VoIP Glossary</Link>
              <Link href="/tips" className="block text-gray-700 hover:text-navy-500 font-medium py-2 transition-colors pl-4">Business Communication Tips</Link>
              <a href="https://app.pvndialer.com" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-navy-500 font-medium py-2 transition-colors pl-4">GeoFilter Tool</a>
            </div>
            <div className="border-t border-gray-100 pt-3">
              <span className="block text-gray-700 font-semibold mb-2">Company</span>
              <Link href="/about-us" className="block text-gray-700 hover:text-navy-500 font-medium py-2 transition-colors pl-4">About Us</Link>
              <Link href="/contact-us" className="block text-gray-700 hover:text-navy-500 font-medium py-2 transition-colors pl-4">Contact Us</Link>
              <Link href="/compliance" className="block text-gray-700 hover:text-navy-500 font-medium py-2 transition-colors pl-4">Compliance</Link>
            </div>
            <div className="pt-3 border-t border-gray-100 space-y-3">
              <a
                href={PORTAL_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-navy-500 text-navy-500 px-4 py-2 rounded hover:bg-navy-500 hover:text-white transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <FaSignInAlt />
                <span>Customer Login</span>
              </a>
              <a
                href="tel:+19045128487"
                className="bg-navy-500 text-white px-4 py-2 rounded hover:bg-navy-600 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <FaPhone />
                <span>Call (904) 512-8487</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
