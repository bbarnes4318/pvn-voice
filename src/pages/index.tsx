import React from 'react';
import Head from 'next/head';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import Band from '../components/Band';
import Eyebrow from '../components/Eyebrow';
import LiveTerminal from '../components/LiveTerminal';
import DidPoolChips from '../components/DidPoolChips';
import Estimator from '../components/Estimator';
import RateDeck from '../components/RateDeck';
import SeatPriceTile from '../components/SeatPriceTile';
import {
  DID_MONTHLY_RATE,
  INBOUND_RATE,
  OUTBOUND_RATE,
  PHONE_DISPLAY,
  PHONE_HREF,
  REFERENCE_SEATS,
  rate,
} from '../lib/pricing';

const heroBullets = [
  {
    title: 'Free DID Swapping',
    body: 'Flagged numbers replaced before your pickup rates drop.',
  },
  {
    title: 'Zero-Cost TCPA Shield',
    body: 'Known lawsuit filers blocked automatically at the SIP layer.',
  },
  {
    title: 'Upfront Pricing',
    body: 'Rates posted below. Test our routes today without a sales pitch.',
  },
];

const mechanics = [
  'Spam labels monitored daily. Swapped free.',
  'Lawsuit risk killed before you dial.',
  'True 12/6 billing. Zero blended routes.',
];

const sampleCdr = [
  ['11:49:42', '904-675-9028', '0:00', 'A', 'BUSY'],
  ['11:49:42', '214-650-0225', '0:00', 'A', 'NO ANSWER'],
  ['11:49:42', '919-336-5239', '3:41', 'A', 'ANSWERED'],
  ['11:49:42', '615-400-6778', '0:40', 'A', 'ANSWERED'],
  ['11:49:42', '602-700-5656', '3:10', 'A', 'ANSWERED'],
  ['11:49:42', '813-311-1862', '0:15', 'A', 'ANSWERED'],
  ['11:49:42', '602-816-9759', '0:09', 'A', 'ANSWERED'],
  ['11:49:42', '801-355-3863', '2:28', 'A', 'ANSWERED'],
];

const gatePoints = [
  {
    title: 'Sub-Millisecond SBC Lookup',
    body: 'Executes locally in switch memory before the call leaves our edge. No third-party API lag, no per-record scrubbing fees.',
  },
  {
    title: 'Daily Court Docket Sync',
    body: 'Direct ingestion of federal TCPA court filings and commercial plaintiff rosters. If a plaintiff filed last week, they are blocked this week.',
  },
  {
    title: 'Logged Demand-Letter Defense',
    body: 'Every drop logs timestamps, target numbers, and docket reference IDs—giving you immediate documentation that the number was never dialed.',
  },
];

const callerIdSteps = [
  {
    title: 'Own Carrier OCN',
    body: 'Numbers provisioned directly under our carrier code and signed on our own certificate. No borrowed credentials.',
  },
  {
    title: 'Continuous Reputation Scans',
    body: 'Automated checks across major mobile analytics engines. We catch flags before your floor sees an answer-rate drop.',
  },
  {
    title: 'Zero-Cost Instant Replacements',
    body: 'The moment a number catches heat, it is rotated out and a pristine DID goes in at $0 extra charge.',
  },
  {
    title: 'Strict Data Privacy',
    body: 'We never sell, share, or broker your lists to third parties or other campaigns. Ever.',
  },
];

const runs = [
  {
    tag: 'Network',
    title: 'Termination & DIDs',
    body: 'Direct outbound and inbound termination on clean carrier routes with dynamic DID pools.',
    facts: [
      ['Outbound', `${rate(OUTBOUND_RATE)}/min`],
      ['Inbound', `${rate(INBOUND_RATE)}/min`],
      ['DIDs', `$${DID_MONTHLY_RATE.toFixed(2)}/mo`],
    ],
  },
  {
    tag: 'Infrastructure',
    title: 'Dialer Builds',
    body: 'Dedicated predictive and auto-dialing engines with zero per-seat software licensing tax.',
    facts: [
      ['Reference build', `${REFERENCE_SEATS} seats`],
      ['Licensing', 'Included'],
    ],
  },
  {
    tag: 'Compliance',
    title: 'TCPA Litigator Gate',
    body: 'Edge-level pre-dial block of serial litigators. Included at zero extra cost.',
    facts: [
      ['Placement', 'Pre-dial, at the SBC'],
      ['Cost', 'Included'],
    ],
  },
  {
    tag: 'Compliance',
    title: 'Calling-Hours Compliance',
    body: 'NPA-NXX switch-level enforcement mapping federal and state mini-TCPA dialing windows.',
    facts: [
      ['Resolution', 'NPA-NXX, not area code'],
      ['Coverage', 'Federal + state windows'],
    ],
  },
  {
    tag: 'Data',
    title: 'Verified Opt-In Data',
    body: 'Clean lead feeds backed by verifiable Jornaya LeadID and TrustedForm certificates.',
    facts: [
      ['Proof', 'TrustedForm / LeadID'],
      ['Scripts', 'Operator-built'],
    ],
  },
  {
    tag: 'Support',
    title: 'Direct Engineering Support',
    body: 'US-based network engineers who troubleshoot at the packet and CDR level. No ticket queues.',
    facts: [['Direct line', PHONE_DISPLAY]],
  },
];

const integrity = [
  {
    title: 'Licensed US Facility Carrier',
    body: 'Operating under our own certified OCN, never reselling third-party attestation.',
  },
  {
    title: 'Active Traceback Cooperation',
    body: 'Direct integration with the Industry Traceback Group (ITG) to identify and isolate abuse immediately.',
  },
  {
    title: 'Two-Stage KYB Onboarding',
    body: 'Rigorous customer verification to keep bad actors off the network.',
  },
  {
    title: 'Zero-Tolerance AUP',
    body: 'Illegal autodialing and dirty lists are disconnected immediately to protect the route pool.',
  },
];

const faqs = [
  {
    q: 'Do I pay extra for the litigator gate?',
    a: 'No. It runs on every single route at no charge. A customer who opts out of scrubbing is a customer who brings us a traceback. We price it into the network because protecting our routes saves us more than the list costs.',
  },
  {
    q: 'What if a legitimate contact gets blocked?',
    a: "Call us with the number. We'll show you the exact docket or list match. Verified false positives are added to your dedicated account allowlist within the hour.",
  },
  {
    q: 'How fast can we go live?',
    a: 'Typically within 24 to 48 hours. The timeline is purely KYB verification, not provisioning. Return your onboarding packet quickly and test traffic passes the next day.',
  },
  {
    q: 'Can I port existing numbers over?',
    a: 'Yes. Ported DIDs are registered under our OCN and integrated into our free replacement program. If a number ports in dirty, we recommend swapping it out immediately rather than paying to keep a dead number alive.',
  },
  {
    q: 'What gets traffic shut off?',
    a: 'Tracebacks, abnormally short call durations, and dirty unscrubbed data. Clean deliverability requires clean traffic.',
  },
  {
    q: 'Per-seat or wholesale per-minute: which should I choose?',
    a: 'Running an outbound floor? Take the predictable $3/day seat model with included minutes and DIDs. Buying wholesale minutes for custom platforms? Take the per-minute rate deck.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Head>
        <title>PVN Voice — Phone service for outbound call centers</title>
        <meta
          name="description"
          content="Licensed US phone carrier for outbound call centers. We watch your numbers for spam labels and swap them for free, and we block known TCPA lawsuit filers before you dial. Rates posted, no sales call needed."
        />
      </Head>

      <SiteHeader />

      <main className="flex-grow" id="top">
        {/* Hero */}
        <section className="pt-[clamp(48px,7vw,84px)] pb-[clamp(40px,6vw,64px)]">
          <div className="container-custom">
            <div className="max-w-[740px]">
              <Eyebrow className="mb-5">Licensed US phone carrier &middot; Built for call centers</Eyebrow>
              <h1 className="text-[clamp(36px,5vw,58px)] leading-[1.02] max-w-[18ch]">
                Clean Caller IDs. Zero Spam Flags. <em className="not-italic text-attest">Maximum Contact Rates.</em>
              </h1>
              <p className="mt-5 text-[19px] text-[#20455F] max-w-[46ch]">
                Every carrier signs your call. Almost none watch what happens after. We manage your
                DID reputation in real time so your agents stay on live calls, not voicemail.
              </p>
              <div className="flex flex-wrap gap-3 mt-7">
                <a href="#pricing" className="btn-solid">
                  View Live Rates
                </a>
                <a href={PHONE_HREF} className="btn-line">
                  Direct Line: {PHONE_DISPLAY}
                </a>
              </div>
              <ul className="mt-8 pt-6 border-t border-rule grid grid-cols-1 sm:grid-cols-3 gap-5 list-none pl-0">
                {heroBullets.map((bullet) => (
                  <li key={bullet.title}>
                    <b className="block font-display font-extrabold text-[15.5px] tracking-[-.015em] text-ink">
                      {bullet.title}
                    </b>
                    <span className="block mt-1.5 text-sm leading-[1.5] text-slate">{bullet.body}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Mechanics */}
        <Band id="mechanics">
          <Eyebrow>The Mechanics</Eyebrow>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-3.5 list-none p-0 mt-4">
            {mechanics.map((item) => (
              <li
                key={item}
                className="font-data text-sm text-ink px-4 py-4 bg-card border border-rule rounded leading-[1.5]"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 bg-ink border border-white/[.14] rounded-md overflow-hidden">
            <div className="px-[18px] py-3 border-b border-white/10 font-data text-[11px] sm:text-[11.5px] uppercase tracking-[.14em] text-[#8FB2C7] flex items-center gap-2.5">
              <span className="w-[7px] h-[7px] rounded-full bg-attest pvn-pulse" aria-hidden="true" />
              Live CDR stream &mdash; attestation A (own OCN) &mdash; tracebacks (90d): 0
            </div>
            <div className="px-[18px] py-3.5 font-data text-[11px] sm:text-[12.5px] leading-[1.9] text-[#8FB2C7]">
              {sampleCdr.map((row, index) => (
                <div key={index} className="whitespace-nowrap overflow-hidden text-ellipsis">
                  {row.join(' | ')}
                </div>
              ))}
            </div>
          </div>
        </Band>

        {/* Pricing */}
        <Band id="pricing">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-end mb-10">
            <div>
              <Eyebrow>Transparent Pricing</Eyebrow>
              <h2 className="text-[clamp(30px,4.2vw,50px)] mt-3.5">
                Two rate structures. Pick how you buy.
              </h2>
            </div>
            <p className="text-lg text-slate max-w-[62ch]">
              Running an outbound floor? Lock in one predictable number with zero software tax. Buying
              wholesale minutes? Direct carrier rate deck below&mdash;no gatekeeping, no sales forms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] gap-5 lg:gap-8 items-start">
            <SeatPriceTile />
            <RateDeck />
          </div>
        </Band>

        {/* Estimator */}
        <Band id="estimate">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-end mb-10">
            <div>
              <Eyebrow>Cost Estimator</Eyebrow>
              <h2 className="text-[clamp(30px,4.2vw,50px)] mt-3.5">
                Price your floor before you pick up the phone.
              </h2>
            </div>
            <p className="text-lg text-slate max-w-[62ch]">
              Adjust your seats and dials. Nothing is stored or submitted. When the math makes sense,
              call us to verify against your specific NPA-NXX mix.
            </p>
          </div>
          <Estimator />
        </Band>

        {/* Litigator gate */}
        <Band id="gate" dark>
          <Eyebrow dark>TCPA Defense</Eyebrow>
          <h2 className="text-[clamp(30px,4.2vw,50px)] text-white mt-3.5 max-w-[24ch]">
            Professional litigators cost $1,500 a dial. We kill the call before it hits the wire.
          </h2>
          <p className="mt-4 text-lg text-[#A9C6D6] max-w-[62ch]">
            Most carriers happily bill you for dials placed to professional plaintiffs, then hand you
            the traceback when a lawsuit lands. We check every outbound request against federal court
            dockets and serial litigator registries locally in memory (&lt;1ms). Matches get dropped
            with an instant SIP 603 Decline at our switch. No connection, no dial, zero legal exposure.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] gap-7 lg:gap-14 items-start mt-10">
            <LiveTerminal
              label="Suppression gate — live"
              surface="inset"
              footer={[
                { label: 'Lookup', value: '<1 ms' },
                { label: 'List refreshed', value: 'daily' },
              ]}
            />

            <ul className="list-none m-0 p-0">
              {gatePoints.map((point, index) => (
                <li
                  key={point.title}
                  className={`py-[18px] border-b border-white/[.16] ${index === 0 ? 'border-t' : ''}`}
                >
                  <strong className="block font-display font-bold text-[17.5px] tracking-[-.02em] text-white">
                    {point.title}
                  </strong>
                  <span className="block text-[#A9C6D6] text-[15.5px] mt-1.5">{point.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </Band>

        {/* Caller ID */}
        <Band id="callerid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-end mb-10">
            <div>
              <Eyebrow>Beyond STIR/SHAKEN</Eyebrow>
              <h2 className="text-[clamp(30px,4.2vw,50px)] mt-3.5">
                Attestation gets you signed. We keep you answered.
              </h2>
            </div>
            <p className="text-lg text-slate max-w-[62ch]">
              Carriers brag about Attestation A like it&apos;s a silver bullet. It only proves who you
              are&mdash;it doesn&apos;t stop carrier analytics algorithms from slapping &quot;Scam
              Likely&quot; on your DIDs after 50 calls. We handle both:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,.95fr)_minmax(0,1fr)] gap-6 lg:gap-14 items-center">
            <DidPoolChips />
            <ol className="list-none m-0 p-0">
              {callerIdSteps.map((step, index) => (
                <li
                  key={step.title}
                  className={`py-4 border-t border-rule ${
                    index === callerIdSteps.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <strong className="block font-display font-bold text-[17px] tracking-[-.02em]">
                    {step.title}
                  </strong>
                  <span className="block text-slate text-[15.5px] mt-1">{step.body}</span>
                </li>
              ))}
            </ol>
          </div>
        </Band>

        {/* What we run */}
        <Band id="run">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-end mb-10">
            <div>
              <Eyebrow>Infrastructure</Eyebrow>
              <h2 className="text-[clamp(30px,4.2vw,50px)] mt-3.5">What we actually run.</h2>
            </div>
            <p className="text-lg text-slate max-w-[62ch]">
              Take the entire stack or plug in what you need. Most floors start on termination and
              DIDs, then consolidate their dialer infrastructure once contact rates stabilize.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule rounded-md overflow-hidden">
            {runs.map((run) => (
              <div key={run.title} className="bg-card p-6 sm:p-7">
                <p className="font-data text-[11px] uppercase tracking-[.13em] text-attest font-semibold">
                  {run.tag}
                </p>
                <h3 className="text-xl my-3">{run.title}</h3>
                <p className="text-slate text-[15.5px]">{run.body}</p>
                <ul className="mt-3.5 p-0 list-none font-data text-[13px] text-ink">
                  {run.facts.map(([label, value]) => (
                    <li key={label} className="py-1.5 border-t border-rule flex justify-between gap-3">
                      {label}
                      <span className="text-slate">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Band>

        {/* Network integrity */}
        <Band id="compliance">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-end mb-10">
            <div>
              <Eyebrow>Network Integrity</Eyebrow>
              <h2 className="text-[clamp(30px,4.2vw,50px)] mt-3.5">
                We protect our routes so your traffic doesn&apos;t get burned.
              </h2>
            </div>
            <p className="text-lg text-slate max-w-[62ch]">
              Bad traffic from one reckless dialer ruins IP reputation and deliverability for everyone
              on the switch. We screen hard up front so your clean traffic stays protected.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-9">
            {integrity.map((item) => (
              <div key={item.title} className="border-l-2 border-attest pl-[18px]">
                <h3 className="text-[17px]">{item.title}</h3>
                <p className="mt-2 text-slate text-[15.5px]">{item.body}</p>
              </div>
            ))}
          </div>
        </Band>

        {/* FAQ */}
        <Band id="faq">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="text-[clamp(30px,4.2vw,50px)] mt-3.5 mb-7">
            Straight answers for floor operators.
          </h2>
          <div className="max-w-[860px]">
            {faqs.map((faq, index) => (
              <details key={faq.q} open={index === 0} className="border-b border-rule group">
                <summary className="cursor-pointer list-none py-5 font-display font-bold text-lg tracking-[-.02em] flex gap-4 items-center">
                  {faq.q}
                  <span className="ml-auto font-data font-medium text-attest text-[22px] group-open:hidden">
                    +
                  </span>
                  <span className="ml-auto font-data font-medium text-attest text-[22px] hidden group-open:block">
                    –
                  </span>
                </summary>
                <p className="pb-[22px] text-slate max-w-[70ch]">{faq.a}</p>
              </details>
            ))}
          </div>
        </Band>

        {/* Close */}
        <section className="text-center py-[clamp(56px,7vw,92px)]">
          <div className="container-custom">
            <Eyebrow centered>Get a direct rate on the phone</Eyebrow>
            <h2 className="text-[clamp(30px,4.2vw,50px)] max-w-[19ch] mx-auto mt-3.5">
              Tell us your seat count or monthly volume. We&apos;ll quote you on the call.
            </h2>
            <p className="mt-4 text-lg text-slate mx-auto">No slide decks, no scheduling a demo.</p>
            <div className="flex flex-wrap gap-3 mt-7 justify-center">
              <a href={PHONE_HREF} className="btn-solid">
                Call {PHONE_DISPLAY}
              </a>
              <a href="#estimate" className="btn-line">
                Run the estimate first
              </a>
            </div>
            <p className="mt-5 font-data text-[12.5px] text-slate tracking-[.04em]">
              No contract term &middot; No minimum commit &middot; KYC required before turn-up
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
