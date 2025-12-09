import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary-700 to-primary-900 text-white pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-16">
          {/* Column 1 - Logo & About */}
          <div className="lg:col-span-2">
            <div className="flex items-start">
              <Link href="/" className="block">
                <Image 
                  src="/images/logo2.png" 
                  alt="PVN Voice Footer Logo"
                  width={240}
                  height={65}
                  priority
                />
              </Link>
            </div>
            <div className="mt-4">
              <p className="text-gray-200">
                PVN Voice is a leading provider of cloud-based business phone systems and unified communications solutions, helping companies communicate better while saving substantially on their telecom costs.
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-200 hover:text-white transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
          
          {/* Column 2 - Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-200 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-200 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/phone-system" className="text-gray-200 hover:text-white transition-colors">
                  Business Phone System
                </Link>
              </li>
              <li>
                <Link href="/unified-communications" className="text-gray-200 hover:text-white transition-colors">
                  Unified Communications
                </Link>
              </li>
              <li>
                <Link href="/contact-center" className="text-gray-200 hover:text-white transition-colors">
                  Contact Center
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-gray-200 hover:text-white transition-colors">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-200 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-200 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-200 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} PVN Voice. All rights reserved.
            </p>
            <p className="text-gray-200 text-sm text-center md:text-right">
              Reliable, affordable business communications solutions.
              <br className="hidden md:block" />
              Contact us today.
            </p>
          </div>
          <div className="mt-6 text-xs text-center text-gray-300">
            <p>
              *PVN Voice is a registered trademark. Our cloud phone systems operate over your existing internet connection. Call quality may vary depending on your internet connection speed and quality. A stable internet connection is recommended for optimal performance.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 