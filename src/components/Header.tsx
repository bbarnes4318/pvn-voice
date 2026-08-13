import React, { useState } from 'react';
import Link from 'next/link';
import { FaPhone, FaBars, FaTimes, FaShieldAlt, FaCheckCircle, FaStar, FaLock, FaSignInAlt } from 'react-icons/fa';
import Logo from './Logo';
import { PORTAL_LOGIN_URL } from '../lib/site-links';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white">
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-1">
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
              <a href="tel:+19045128487" className="hover:text-primary-100 transition-colors">
                Call (904) 512-8487
              </a>
              <span className="hidden md:inline">|</span>
              <a
                href={PORTAL_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-medium hover:text-primary-100 transition-colors"
              >
                <FaLock className="mr-1" />
                Customer Login
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container-custom">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-3 xl:space-x-4 2xl:space-x-6 whitespace-nowrap">
              <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Services
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center focus:outline-none">
                  Solutions
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-100 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-opacity z-20">
                  <Link href="/services/voip-for-call-centers" className="block px-5 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors">VOIP for Call Centers</Link>
                  <Link href="/services/dialer-systems" className="block px-5 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors">Dialer Systems</Link>
                  <Link href="/services/ai-powered-solutions" className="block px-5 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors">AI-Powered Solutions</Link>
                  <Link href="/services/ai-voice-agents" className="block px-5 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors">AI Voice Agents / Virtual Agents</Link>
                  <Link href="/phone-system" className="block px-5 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors">Business Phone System</Link>
                  <Link href="/unified-communications" className="block px-5 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors">Unified Communications</Link>
                  <Link href="/contact-center" className="block px-5 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors">Contact Center</Link>
                  <Link href="/integrations" className="block px-5 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors">Integrations</Link>
                </div>
              </div>
              <Link href="/pricing" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Pricing
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center focus:outline-none">
                  Resources
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-100 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-opacity z-20">
                  <Link href="/blog" className="block px-5 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors">Blog</Link>
                  <Link href="/faq" className="block px-5 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors">FAQ</Link>
                  <Link href="/glossary" className="block px-5 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors">VoIP Glossary</Link>
                  <Link href="/tips" className="block px-5 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors">Business Communication Tips</Link>
                  <a href="https://app.pvndialer.com" target="_blank" rel="noopener noreferrer" className="block px-5 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors">GeoFilter Tool</a>
                </div>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center focus:outline-none">
                  Company
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-opacity z-20">
                  <Link href="/about-us" className="block px-5 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors">About Us</Link>
                  <Link href="/contact-us" className="block px-5 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors">Contact Us</Link>
                  <Link href="/compliance" className="block px-5 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors">Compliance</Link>
                </div>
              </div>
              <a
                href={PORTAL_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center space-x-2 border border-primary-600 text-primary-600 px-4 py-2 rounded hover:bg-primary-600 hover:text-white transition-colors font-medium"
              >
                <FaSignInAlt />
                <span>Customer Login</span>
              </a>
              <a
                href="tel:+19045128487"
                className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors font-medium flex items-center space-x-2"
              >
                <FaPhone />
                <span>Call (904) 512-8487</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-primary-600 focus:outline-none transition-colors"
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
            <Link href="/" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">
              Home
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">
              Services
            </Link>
            <div className="border-t border-gray-100 pt-3">
              <span className="block text-gray-700 font-semibold mb-2">Solutions</span>
              <Link href="/services/voip-for-call-centers" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors pl-4">VOIP for Call Centers</Link>
              <Link href="/services/dialer-systems" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors pl-4">Dialer Systems</Link>
              <Link href="/services/ai-powered-solutions" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors pl-4">AI-Powered Solutions</Link>
              <Link href="/services/ai-voice-agents" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors pl-4">AI Voice Agents / Virtual Agents</Link>
              <Link href="/phone-system" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors pl-4">Business Phone System</Link>
              <Link href="/unified-communications" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors pl-4">Unified Communications</Link>
              <Link href="/contact-center" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors pl-4">Contact Center</Link>
              <Link href="/integrations" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors pl-4">Integrations</Link>
            </div>
            <Link href="/pricing" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">
              Pricing
            </Link>
            <div className="border-t border-gray-100 pt-3">
              <span className="block text-gray-700 font-semibold mb-2">Resources</span>
              <Link href="/blog" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors pl-4">Blog</Link>
              <Link href="/faq" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors pl-4">FAQ</Link>
              <Link href="/glossary" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors pl-4">VoIP Glossary</Link>
              <Link href="/tips" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors pl-4">Business Communication Tips</Link>
              <a href="https://app.pvndialer.com" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors pl-4">GeoFilter Tool</a>
            </div>
            <div className="border-t border-gray-100 pt-3">
              <span className="block text-gray-700 font-semibold mb-2">Company</span>
              <Link href="/about-us" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors pl-4">About Us</Link>
              <Link href="/contact-us" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors pl-4">Contact Us</Link>
              <Link href="/compliance" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors pl-4">Compliance</Link>
            </div>
            <div className="pt-3 border-t border-gray-100 space-y-3">
              <a
                href={PORTAL_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary-600 text-primary-600 px-4 py-2 rounded hover:bg-primary-600 hover:text-white transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <FaSignInAlt />
                <span>Customer Login</span>
              </a>
              <a
                href="tel:+19045128487"
                className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors font-medium flex items-center justify-center space-x-2"
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
