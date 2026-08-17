import React from 'react';
import Head from 'next/head';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import Eyebrow from '../components/Eyebrow';
import { PHONE_DISPLAY, PHONE_HREF } from '../lib/pricing';

const info: { key: string; value: React.ReactNode; sub?: string; span?: boolean }[] = [
  {
    key: 'Sales & General Inquiries',
    value: (
      <a href={PHONE_HREF} className="no-underline text-navy">
        {PHONE_DISPLAY}
      </a>
    ),
  },
  {
    key: 'Technical Support',
    value: (
      <a href={PHONE_HREF} className="no-underline text-navy">
        {PHONE_DISPLAY}
      </a>
    ),
    sub: 'Available 24/7/365',
  },
  {
    key: 'Sales & Inquiries Email',
    value: (
      <a href="mailto:sales@pvnvoice.com" className="no-underline text-navy">
        sales@pvnvoice.com
      </a>
    ),
  },
  {
    key: 'Customer Support Email',
    value: (
      <a href="mailto:support@pvnvoice.com" className="no-underline text-navy">
        support@pvnvoice.com
      </a>
    ),
  },
  {
    key: 'Headquarters',
    value: '2800 N 6th Street #796, Saint Augustine, FL 32084',
    span: true,
  },
];

/**
 * The form is presentational only — it has no backend. Wiring submissions to
 * wherever leads should actually land is a separate integration, so the submit
 * handler is a no-op and the page leads with the phone number.
 */
export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Head>
        <title>PVN Voice — Contact Us</title>
        <meta
          name="description"
          content="Call (904) 512-8487 for sales or technical support. Technical support is available 24/7. Or send a message below."
        />
      </Head>

      <SiteHeader active="/contact-us" />

      <main className="flex-grow">
        <section className="pt-[clamp(44px,6vw,68px)] pb-[clamp(30px,4vw,44px)]">
          <div className="container-custom">
            <Eyebrow className="mb-5">Contact</Eyebrow>
            <h1 className="text-[clamp(34px,4.6vw,50px)] leading-[1.04]">
              Call and get an answer. That&apos;s most of what this page is for.
            </h1>
            <p className="mt-4 text-[19px] text-slate max-w-[60ch]">
              Sales and technical support both run through the same number. If you&apos;d rather write
              it out, send a message below and we&apos;ll call you back.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href={PHONE_HREF} className="btn-solid">
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        <section className="pb-[clamp(48px,6vw,72px)]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] gap-7 lg:gap-14 items-start">
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-rule border border-rule rounded-md overflow-hidden">
                  {info.map((item) => (
                    <div
                      key={item.key}
                      className={`bg-card p-[22px] ${item.span ? 'sm:col-span-2' : ''}`}
                    >
                      <p className="font-data text-[11px] uppercase tracking-[.13em] text-slate">
                        {item.key}
                      </p>
                      <p
                        className={`mt-2 font-display text-base tracking-[-.01em] ${
                          item.span ? 'font-semibold' : 'font-bold'
                        }`}
                      >
                        {item.value}
                      </p>
                      {item.sub && <p className="mt-1 text-[13.5px] text-slate">{item.sub}</p>}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-[22px] border-t border-rule">
                  <p className="font-data text-[11px] uppercase tracking-[.13em] text-slate">
                    Business Hours
                  </p>
                  <ul className="list-none mt-2.5 p-0">
                    <li className="flex justify-between gap-3.5 py-2 text-[15px]">
                      Sales <span className="text-slate">Monday&ndash;Friday, 8am&ndash;8pm EST</span>
                    </li>
                    <li className="flex justify-between gap-3.5 py-2 border-t border-rule text-[15px]">
                      Technical Support <span className="text-slate">24/7/365</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-rule rounded-md p-6 sm:p-8">
                <h2 className="text-[22px]">Send a message</h2>
                <p className="mt-2 text-slate text-[15px]">
                  We&apos;ll call or email you back &mdash; whichever you prefer.
                </p>

                <form className="mt-6" onSubmit={(event) => event.preventDefault()}>
                  {[
                    { id: 'cf-name', label: 'Your Name', type: 'text', autoComplete: 'name' },
                    { id: 'cf-email', label: 'Email Address', type: 'email', autoComplete: 'email' },
                    { id: 'cf-phone', label: 'Phone Number', type: 'tel', autoComplete: 'tel' },
                  ].map((field) => (
                    <div key={field.id} className="mb-[18px]">
                      <label
                        htmlFor={field.id}
                        className="block font-data text-[11px] uppercase tracking-[.1em] text-slate mb-1.5"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        className="w-full px-3 py-2.5 border border-rule rounded text-[15px] bg-[#FAFCFD] text-ink"
                      />
                    </div>
                  ))}

                  <div className="mb-[18px]">
                    <label
                      htmlFor="cf-size"
                      className="block font-data text-[11px] uppercase tracking-[.1em] text-slate mb-1.5"
                    >
                      Company Size
                    </label>
                    <select
                      id="cf-size"
                      defaultValue=""
                      className="w-full px-3 py-2.5 border border-rule rounded text-[15px] bg-[#FAFCFD] text-ink"
                    >
                      <option value="">Select your company size</option>
                      <option>1&ndash;10</option>
                      <option>11&ndash;50</option>
                      <option>51&ndash;200</option>
                      <option>200+</option>
                    </select>
                  </div>

                  <div className="mb-[18px]">
                    <label
                      htmlFor="cf-msg"
                      className="block font-data text-[11px] uppercase tracking-[.1em] text-slate mb-1.5"
                    >
                      How can we help?
                    </label>
                    <textarea
                      id="cf-msg"
                      className="w-full px-3 py-2.5 border border-rule rounded text-[15px] bg-[#FAFCFD] text-ink resize-y min-h-[100px]"
                    />
                  </div>

                  <div className="flex gap-2.5 items-start mt-4">
                    <input type="checkbox" id="cf-agree" className="mt-1 shrink-0" />
                    <label htmlFor="cf-agree" className="text-[13px] text-slate leading-[1.5]">
                      I agree to the{' '}
                      <a href="/privacy-policy" className="text-navy">
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a href="/terms-of-service" className="text-navy">
                        Terms of Service
                      </a>
                      .
                    </label>
                  </div>

                  <div className="flex gap-2.5 items-start mt-4">
                    <input type="checkbox" id="cf-sms" className="mt-1 shrink-0" />
                    <label htmlFor="cf-sms" className="text-[13px] text-slate leading-[1.5]">
                      I consent to receive SMS notifications and alerts from PVN Voice. Message &amp;
                      data rates may apply. Text HELP to (424) 213-6641 for assistance. You can reply
                      STOP to unsubscribe at any time.
                    </label>
                  </div>

                  <p className="mt-4 pt-3.5 border-t border-rule text-[12.5px] text-slate leading-[1.6]">
                    Calls and messages placed to the number you provide are governed by our{' '}
                    <a href="/compliance/consent" className="text-navy">
                      Opt-In &amp; Consent Policy
                    </a>{' '}
                    and our{' '}
                    <a href="/compliance/do-not-call" className="text-navy">
                      Do-Not-Call Policy
                    </a>
                    . You may opt out at any time by calling{' '}
                    <a href={PHONE_HREF} className="text-navy">
                      {PHONE_DISPLAY}
                    </a>
                    .
                  </p>

                  <button type="submit" className="btn-solid mt-5 w-full">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>

            <div className="text-center bg-navy text-white rounded-lg p-9 sm:p-14 mt-[clamp(40px,5vw,60px)]">
              <p className="font-data text-[11.5px] font-semibold uppercase tracking-[.16em] text-[#8FB2C7]">
                Talk to a carrier, not a sales desk
              </p>
              <h2 className="text-[clamp(22px,2.6vw,30px)] text-white mt-3.5">
                Tell us your seats or your minutes. We&apos;ll quote you on the call.
              </h2>
              <p className="mt-2.5 text-[#A9C6D6]">No slide decks, no scheduling a demo.</p>
              <div className="flex flex-wrap gap-3 mt-6 justify-center">
                <a href={PHONE_HREF} className="btn-attest">
                  Call {PHONE_DISPLAY}
                </a>
              </div>
              <p className="mt-[18px] font-data text-xs text-[#8FB2C7] tracking-[.04em]">
                No contract term &middot; No minimum commit &middot; KYC required before turn-up
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
