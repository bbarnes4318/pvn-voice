import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import Eyebrow from './Eyebrow';
import { PHONE_DISPLAY, PHONE_HREF } from '../lib/pricing';

export interface DocSection {
  id: string;
  title: string;
}

export interface RelatedDoc {
  href: string;
  label: string;
}

interface LegalDocProps {
  metaTitle: string;
  metaDescription: string;
  /** Kicker above the title: "Compliance" or "Legal". */
  eyebrow: string;
  heading: string;
  /** e.g. "PVN LLC · Effective Date: August 14, 2026 · Version 1.0" */
  metaLine: string;
  backHref?: string;
  backLabel?: string;
  contents: DocSection[];
  /** Two-column contents list, for the longer documents. */
  contentsColumns?: boolean;
  /** The standard Do-Not-Call callout carried by every compliance policy. */
  dncCallout?: boolean;
  /** Red "Important Notice" box, used by the Terms of Service. */
  notice?: React.ReactNode;
  /** Bespoke callout replacing the DNC one, used by Terms and Privacy. */
  callout?: { heading: string; body: string };
  children: React.ReactNode;
  /** Closing review sentence. Compliance policies and Disclosures carry one. */
  reviewNote?: React.ReactNode;
  relatedHeading?: string;
  related: RelatedDoc[];
  /** Active nav tab. */
  activeNav?: string;
}

/**
 * Single-column document layout shared by the compliance policies, Terms of
 * Service, Privacy Policy and Disclosures: contents list, callout, article
 * body, related documents. Print rules live in globals.css and key off
 * `.legal-doc`.
 */
const LegalDoc: React.FC<LegalDocProps> = ({
  metaTitle,
  metaDescription,
  eyebrow,
  heading,
  metaLine,
  backHref = '/',
  backLabel = '← Back to Home',
  contents,
  contentsColumns,
  dncCallout,
  notice,
  callout,
  children,
  reviewNote,
  relatedHeading = 'Related Documents',
  related,
  activeNav,
}) => (
  <div className="min-h-screen flex flex-col bg-paper">
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
    </Head>

    <SiteHeader active={activeNav} />

    <main className="flex-grow">
      <div className="legal-doc max-w-doc mx-auto px-5 sm:px-8 lg:px-14">
        <Link
          href={backHref}
          className="no-print inline-flex items-center gap-1.5 font-data text-[13px] text-slate no-underline mt-7 hover:text-navy"
        >
          {backLabel}
        </Link>

        <Eyebrow className="mt-6">{eyebrow}</Eyebrow>
        <h1 className="text-[clamp(28px,3.6vw,38px)] leading-[1.06] mt-3.5">{heading}</h1>
        <p className="mt-[18px] font-data text-[13px] text-slate">{metaLine}</p>

        <div className="mt-6 px-[22px] py-[18px] bg-card border border-rule rounded-md">
          <p className="font-data text-[11px] uppercase tracking-[.12em] text-slate">Contents</p>
          <ol
            className={`mt-2.5 pl-[18px] text-[14.5px] ${
              contentsColumns ? 'sm:columns-2' : ''
            }`}
          >
            {contents.map((section) => (
              <li key={section.id} className="mt-1.5">
                <a href={`#${section.id}`} className="text-navy no-underline hover:underline">
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {notice && (
          <div className="mt-6 px-5 py-[18px] bg-[#FBEDEA] border border-flag/30 rounded">
            {notice}
          </div>
        )}

        {dncCallout && (
          <div className="mt-7 px-[22px] py-5 bg-card border border-rule border-l-[3px] border-l-attest rounded">
            <h3 className="font-display font-bold text-[15px] m-0">Do-Not-Call Requests</h3>
            <p className="mt-2 text-slate text-[15px]">
              To be added to our internal Do-Not-Call list, or to request a copy of this policy, call
              us. Do-not-call requests are honored immediately, and in all cases within 24 hours.
            </p>
            <a
              href={PHONE_HREF}
              className="no-print inline-flex mt-3 font-data text-[13.5px] font-semibold no-underline px-4 py-2.5 rounded-[3px] bg-navy text-white hover:bg-ink"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        )}

        {callout && (
          <div className="mt-7 px-[22px] py-5 bg-card border border-rule border-l-[3px] border-l-attest rounded">
            <h3 className="font-display font-bold text-[15px] m-0">{callout.heading}</h3>
            <p className="mt-2 text-slate text-[15px]">{callout.body}</p>
            <a
              href={PHONE_HREF}
              className="no-print inline-flex mt-3 font-data text-[13.5px] font-semibold no-underline px-4 py-2.5 rounded-[3px] bg-navy text-white hover:bg-ink"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        )}

        <article className="pt-6 pb-[clamp(48px,6vw,72px)]">
          {children}

          {reviewNote && <p className="mt-8 text-slate text-[15px]">{reviewNote}</p>}
        </article>

        <div className="no-print mt-11 pt-6 border-t border-rule pb-10">
          <p className="font-data text-[11px] uppercase tracking-[.12em] text-slate">
            {relatedHeading}
          </p>
          <div className="mt-3.5 flex flex-wrap gap-2.5">
            {related.map((doc) => (
              <Link
                key={doc.href}
                href={doc.href}
                className="text-sm no-underline bg-card border border-rule rounded-full px-4 py-2 text-ink hover:border-attest"
              >
                {doc.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>

    <SiteFooter variant="minimal" />
  </div>
);

export default LegalDoc;

/** Shared heading + list styles so every document body renders identically. */
export const docH2 =
  'font-display font-extrabold text-[22px] leading-[1.06] mt-10 pt-[22px] border-t border-rule scroll-mt-24';
export const docP = 'mt-3.5';
export const docList = 'list-disc pl-[22px] mt-3.5';
export const docLi = 'mt-2';
