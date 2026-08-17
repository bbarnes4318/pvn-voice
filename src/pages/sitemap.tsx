import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import Eyebrow from '../components/Eyebrow';
import { COMPLIANCE_POLICIES } from '../lib/compliance-policies';

const groups: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: 'Main',
    links: [
      { href: '/', label: 'Home' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/voip-for-call-centers', label: 'VOIP for Call Centers' },
      { href: '/dialer-systems', label: 'Dialer Systems' },
      { href: '/contact-us', label: 'Contact Us' },
    ],
  },
  {
    heading: 'Compliance Policies',
    links: [
      { href: '/compliance', label: 'Compliance Overview' },
      ...COMPLIANCE_POLICIES.map((policy) => ({ href: policy.href, label: policy.name })),
    ],
  },
  {
    heading: 'Legal',
    links: [
      { href: '/terms-of-service', label: 'Terms of Service' },
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/disclosures', label: 'Disclosures' },
      { href: '/sitemap', label: 'Sitemap' },
    ],
  },
  {
    heading: 'Resources',
    links: [{ href: '/glossary', label: 'VoIP Glossary' }],
  },
];

export default function Sitemap() {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Head>
        <title>PVN Voice — Sitemap</title>
        <meta name="description" content="A complete list of every page on pvnvoice.com." />
      </Head>

      <SiteHeader />

      <main className="flex-grow">
        <div className="mx-auto w-full max-w-[1000px] px-5 sm:px-8 lg:px-14">
          <section className="pt-[clamp(40px,6vw,60px)] pb-[clamp(20px,3vw,30px)]">
            <Eyebrow>Sitemap</Eyebrow>
            <h1 className="text-[clamp(30px,4vw,42px)] mt-3.5">Every page on this site.</h1>
            <p className="mt-4 text-[17.5px] text-slate max-w-[60ch]">
              A complete list, grouped by section.
            </p>
          </section>

          <section className="py-[clamp(30px,4vw,44px)]">
            {groups.map((group) => (
              <div key={group.heading} className="mb-[clamp(32px,4vw,44px)]">
                <Eyebrow>{group.heading}</Eyebrow>
                <ul className="list-none mt-4 p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
                  {group.links.map((link) => (
                    <li key={link.href} className="py-2.5 border-t border-rule">
                      <Link
                        href={link.href}
                        className="no-underline text-[15.5px] text-ink hover:text-navy hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </main>

      <SiteFooter variant="minimal" showDisclaimer={false} />
    </div>
  );
}
