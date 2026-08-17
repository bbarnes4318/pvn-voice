import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import Eyebrow from '../../components/Eyebrow';
import { PHONE_DISPLAY, PHONE_HREF } from '../../lib/pricing';
import { COMPLIANCE_POLICIES, POLICY_META_LINE } from '../../lib/compliance-policies';

export default function Compliance() {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Head>
        <title>PVN Voice — Compliance Policies</title>
        <meta
          name="description"
          content="PVN LLC's telemarketing compliance policies: Do-Not-Call, Do-Not-Originate, Reassigned Numbers Database, Opt-In & Consent, Traceback Response, and Acceptable Use. Published in full for carriers, clients, and consumers."
        />
      </Head>

      <SiteHeader active="/compliance" />

      <main className="flex-grow">
        <div className="mx-auto w-full max-w-[960px] px-5 sm:px-8 lg:px-14">
          <section className="pt-[clamp(40px,6vw,64px)] pb-[clamp(30px,4vw,44px)]">
            <Eyebrow>Compliance</Eyebrow>
            <h1 className="text-[clamp(32px,4.2vw,46px)] leading-[1.04] mt-4">Compliance Policies</h1>
            <p className="mt-4 font-data text-[13px] text-slate">{POLICY_META_LINE}</p>
            <p className="mt-5 text-lg text-slate max-w-[66ch]">
              PVN LLC conducts and supports outbound calling in compliance with the Telephone Consumer
              Protection Act (TCPA), the FCC&apos;s implementing rules, the FTC&apos;s Telemarketing
              Sales Rule, and applicable state telemarketing laws. The policies below govern every
              campaign we place or support, and each one is published in full so that consumers,
              clients, carriers, and auditors can review it directly.
            </p>
          </section>

          <section className="pb-[clamp(48px,6vw,72px)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COMPLIANCE_POLICIES.map((policy) => (
                <Link
                  key={policy.href}
                  href={policy.href}
                  className="block bg-card border border-rule rounded-md p-6 no-underline text-ink transition-all hover:border-attest hover:-translate-y-0.5"
                >
                  <h2 className="text-lg">{policy.name}</h2>
                  <p className="mt-2 text-slate text-[14.5px] leading-[1.55]">{policy.description}</p>
                  <p className="mt-3.5 font-data text-xs font-semibold tracking-[.06em] text-attest">
                    Read the {policy.shortName} &rarr;
                  </p>
                </Link>
              ))}
            </div>

            <div className="bg-navy text-white rounded-lg p-7 sm:p-10 mt-[clamp(40px,5vw,60px)]">
              <h2 className="text-2xl text-white">Do-Not-Call Requests and Policy Copies</h2>
              <p className="mt-2.5 text-[#A9C6D6] max-w-[60ch]">
                To be added to our internal Do-Not-Call list, or to request a written copy of any
                policy on this page, call us. Do-not-call requests are honored immediately, and in all
                cases within 24 hours.
              </p>
              <a href={PHONE_HREF} className="btn-attest mt-5">
                Call {PHONE_DISPLAY}
              </a>
            </div>

            <p className="mt-6 text-sm text-slate">
              These policies are reviewed at least annually and upon any material change in applicable
              law. Copies are available on request at{' '}
              <a href={PHONE_HREF} className="text-navy">
                {PHONE_DISPLAY}
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <SiteFooter variant="minimal" />
    </div>
  );
}
