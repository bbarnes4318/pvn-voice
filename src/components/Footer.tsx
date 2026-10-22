import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaSignInAlt } from 'react-icons/fa';
import { PORTAL_LOGIN_URL } from '../lib/site-links';

const Footer = () => {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container-custom py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.75fr_0.75fr_0.85fr]">
          <div>
            <Link href="/" className="inline-block">
              <Image src="/images/logo2.png" alt="PVN Voice" width={220} height={60} />
            </Link>
            <h2 className="mt-6 max-w-xl font-display text-3xl leading-tight tracking-[-0.02em]">
              More carrier paths. More control. Same dialer.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-primary-200">
              Multi-carrier VoIP routing for high-volume call centers that want more control over failover, route performance, BYOC and the traffic they are already sending from VICIdial.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact-us" className="rounded-xl bg-secondary-600 px-5 py-3 font-bold text-white transition-colors hover:bg-secondary-500">
                Test My Traffic
              </Link>
              <a href="tel:+19045128487" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-bold text-white transition-colors hover:bg-white/[0.06]">
                <FaPhone /> (904) 512-8487
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-primary-400">Platform</h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-100">
              <li><Link href="/#why-waterfall" className="hover:text-secondary-300">Why PVN</Link></li>
              <li><Link href="/#waterfall" className="hover:text-secondary-300">Waterfall Routing</Link></li>
              <li><Link href="/#byoc" className="hover:text-secondary-300">Bring Your Own Carrier</Link></li>
              <li><Link href="/#platform" className="hover:text-secondary-300">Mission Control</Link></li>
              <li><Link href="/pricing" className="hover:text-secondary-300">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-primary-400">Company</h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-100">
              <li><Link href="/about-us" className="hover:text-secondary-300">About PVN</Link></li>
              <li><Link href="/contact-us" className="hover:text-secondary-300">Contact</Link></li>
              <li><Link href="/compliance" className="hover:text-secondary-300">Compliance</Link></li>
              <li><Link href="/#resellers" className="hover:text-secondary-300">Resellers</Link></li>
              <li>
                <a href={PORTAL_LOGIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-secondary-300">
                  <FaSignInAlt /> Customer Login
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-primary-400">Resources</h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-100">
              <li><Link href="/blog" className="hover:text-secondary-300">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-secondary-300">FAQ</Link></li>
              <li><Link href="/glossary" className="hover:text-secondary-300">VoIP Glossary</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-secondary-300">Terms</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-secondary-300">Privacy</Link></li>
              <li><Link href="/compliance/do-not-call" className="hover:text-secondary-300">Do Not Call Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-primary-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} PVN Voice. All rights reserved.</p>
          <p>Carrier routing infrastructure for high-volume call centers in U.S. and international markets.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
