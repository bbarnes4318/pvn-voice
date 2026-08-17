import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import Band from '../components/Band';
import Eyebrow from '../components/Eyebrow';
import LiveTerminal from '../components/LiveTerminal';
import {
  DIDS_PER_SEAT,
  INBOUND_RATE,
  OUTBOUND_RATE,
  PHONE_DISPLAY,
  PHONE_HREF,
  REFERENCE_SEATS,
  SEAT_DAY_RATE,
  SEAT_INCLUDED_MINUTES,
  rate,
} from '../lib/pricing';

const spec: [string, string][] = [
  ['Seats', `${REFERENCE_SEATS}, predictive and auto dialing`],
  ['Hardware', "Dedicated servers, not shared with other customers' traffic"],
  ['Software licensing', '$0 — included in the per-seat rate'],
  ['Agent transfer', 'Internal, between agents on your floor or out to a licensed closer'],
  ['DIDs', `${DIDS_PER_SEAT} per seat, registered and monitored`],
  ['Compliance checks', 'Litigator gate and calling-hours gate run at dial time on every call'],
  ['Support', 'Direct US-based engineering, packet and CDR level'],
];

const pacingSteps = [
  {
    title: 'Live agent-availability tracking',
    body: 'The engine knows in real time how many agents are on a call, wrapping up, or idle, and paces new dials against that number.',
  },
  {
    title: 'Answer-rate feedback',
    body: 'Connect rate on the current list feeds back into the pacing ratio continuously, instead of running a fixed dial-to-agent ratio all day.',
  },
  {
    title: 'Compliance checks run before pacing, not after',
    body: "The litigator gate and calling-hours gate filter a number out of the queue before it's ever counted toward the pacing calculation.",
  },
  {
    title: 'Auto dialing for single-line campaigns',
    body: "When predictive pacing isn't the right fit — small lists, high-touch outreach — the same infrastructure runs straight auto dialing instead.",
  },
];

const included = [
  {
    tag: 'Engine',
    title: 'Predictive & auto dialing',
    body: 'Pacing algorithm tuned to your live answer rate, or straight auto dialing for smaller lists. No per-seat licensing either way.',
  },
  {
    tag: 'Compliance',
    title: 'Litigator & calling-hours gates',
    body: 'Both run in-line, at dial time, on every call. Not a separate list-scrubbing step you have to remember to run first.',
  },
  {
    tag: 'Routing',
    title: 'Internal transfer',
    body: 'Agents transfer live calls to each other or to a closer without a second termination leg or leaving our network.',
  },
  {
    tag: 'Network',
    title: 'Termination & DIDs',
    body: `Outbound at ${rate(OUTBOUND_RATE)}/min, inbound at ${rate(
      INBOUND_RATE
    )}/min, DIDs monitored and replaced free when tagged.`,
  },
  {
    tag: 'Support',
    title: 'Direct engineering',
    body: 'US-based network engineers who troubleshoot at the packet and CDR level. No ticket queues.',
  },
  {
    tag: 'Billing',
    title: 'Per seat, per dialing day',
    body: `$${SEAT_DAY_RATE.toFixed(
      0
    )}/agent/day with ${SEAT_INCLUDED_MINUTES} minutes included. Billed on days you actually dial, not calendar days.`,
  },
];

const faqs = [
  {
    q: 'Can I bring my own dialer software?',
    a: 'Yes. If you already run a dialer platform, we can supply termination and monitored DIDs on their own — see the wholesale rate deck. The per-seat pricing on this page is for the full infrastructure build.',
  },
  {
    q: `What if I need more than ${REFERENCE_SEATS} seats?`,
    a: `${REFERENCE_SEATS} is our standard reference build; larger floors are quoted proportionally on the same hardware and licensing terms. Call with your seat count and we'll price it directly.`,
  },
  {
    q: 'Do you support remote agents?',
    a: 'Yes. Seats connect over your assigned trunk regardless of physical location.',
  },
  {
    q: 'Is the hardware shared with other customers?',
    a: 'No. Dedicated servers per build, not a shared multi-tenant pool.',
  },
  {
    q: 'How does compliance interact with pacing?',
    a: "A number gets filtered by the litigator and calling-hours gates before it's counted in the pacing calculation, so a blocked number never occupies a dial slot that could've gone to a live one.",
  },
];

const PACE_STATES = ['dial', 'talk', 'talk', 'wrap', '', '', 'dial', 'talk'] as const;
type PaceState = (typeof PACE_STATES)[number];

const paceLabel: Record<string, string> = {
  dial: 'Dialing',
  talk: 'Talking',
  wrap: 'Wrap-up',
  '': 'Available',
};

/** Agent-state board driving the live pace ratio readout. */
const PaceBoard: React.FC = () => {
  const [states, setStates] = useState<PaceState[]>([...PACE_STATES]);
  const [ratio, setRatio] = useState('3.1');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(() => {
      setStates((current) => {
        const next = [...current];
        const index = Math.floor(Math.random() * next.length);
        next[index] = (['dial', 'talk', 'wrap', ''] as const)[Math.floor(Math.random() * 4)];
        return next;
      });
      setRatio((2.4 + Math.random() * 1.6).toFixed(1));
    }, 1100);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="bg-black/25 border border-white/[.14] rounded-md p-[26px]">
      <p className="font-data text-[11px] uppercase tracking-[.14em] text-[#8FB2C7]">
        Live pace ratio
      </p>
      <p className="font-display font-extrabold text-[clamp(44px,6vw,64px)] tracking-[-.04em] text-white my-2.5">
        {ratio} : 1
      </p>
      <p className="text-[#A9C6D6] text-sm">
        Dials placed per available agent, recalculated continuously
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2 mt-[18px]">
        {states.map((state, index) => (
          <div
            key={index}
            className={`font-data text-[11.5px] px-2.5 py-2.5 rounded-[3px] text-center border transition-all duration-[400ms] ${
              state === 'dial'
                ? 'bg-white/10 text-white border-white/[.14]'
                : state === 'talk'
                ? 'bg-attest/[.22] text-[#8CE8B4] border-attest/40'
                : state === 'wrap'
                ? 'bg-flag/[.16] text-[#FFB3A6] border-flag/35'
                : 'bg-white/[.06] text-[#A9C6D6] border-white/[.14]'
            }`}
          >
            {paceLabel[state]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function DialerSystems() {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Head>
        <title>PVN Voice — Dialer Systems</title>
        <meta
          name="description"
          content="Predictive and auto dialing infrastructure on dedicated hardware. No per-seat software licensing, compliance checks built into the dial path, 50-seat reference build."
        />
      </Head>

      <SiteHeader active="/dialer-systems" />

      <main className="flex-grow">
        <section className="py-[clamp(44px,6vw,72px)]">
          <div className="container-custom">
            <Eyebrow className="mb-5">Dialer systems</Eyebrow>
            <h1 className="text-[clamp(36px,4.8vw,54px)] leading-[1.02] max-w-[26ch]">
              Predictive dialing. Zero per-seat software tax.
            </h1>
            <p className="mt-5 text-[19px] text-slate max-w-[56ch]">
              Dedicated hardware, a pacing engine that adjusts to your live answer rate, and every
              compliance check running at dial time &mdash; not bolted on afterward as a separate
              integration.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <a href={PHONE_HREF} className="btn-solid">
                Call {PHONE_DISPLAY}
              </a>
              <a href="#spec" className="btn-line">
                See the reference build
              </a>
            </div>
          </div>
        </section>

        <Band id="spec">
          <Eyebrow>Reference build</Eyebrow>
          <h2 className="text-[clamp(30px,4.2vw,50px)] mt-3.5 max-w-[16ch]">
            {REFERENCE_SEATS} seats, one flat number.
          </h2>
          <p className="mt-4 text-lg text-slate max-w-[62ch]">
            This is our standard build. Smaller and larger floors are quoted proportionally &mdash;
            call with your seat count.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,.7fr)_minmax(0,1.3fr)] gap-6 lg:gap-14 items-center mt-8">
            <div className="bg-ink text-white rounded-md p-8 sm:p-11 text-center">
              <p className="font-display font-extrabold text-[clamp(72px,9vw,120px)] tracking-[-.045em] leading-[.9] text-attest">
                {REFERENCE_SEATS}
              </p>
              <p className="mt-3.5 font-data text-[12.5px] uppercase tracking-[.1em] text-[#A9C6D6]">
                Seats in the standard build
              </p>
            </div>

            <div className="bg-card border border-rule rounded-md overflow-hidden">
              <table className="w-full border-collapse">
                <tbody>
                  {spec.map(([key, value]) => (
                    <tr key={key}>
                      <td className="px-5 py-4 border-b border-rule align-top font-semibold w-[38%]">
                        {key}
                      </td>
                      <td className="px-5 py-4 border-b border-rule align-top text-slate">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Band>

        <Band dark>
          <Eyebrow dark>How the pacing engine works</Eyebrow>
          <h2 className="text-[clamp(30px,4.2vw,50px)] text-white mt-3.5 max-w-[18ch]">
            The dialer adjusts to your floor, not the other way around.
          </h2>
          <p className="mt-4 text-lg text-[#A9C6D6] max-w-[62ch]">
            A predictive dialer&apos;s whole job is placing enough calls to keep agents busy without
            abandoning the ones nobody&apos;s free to take. That balance moves constantly &mdash; ours
            moves with it.
          </p>

          <ol className="list-none m-0 p-0 mt-7">
            {pacingSteps.map((step, index) => (
              <li
                key={step.title}
                className={`py-5 border-t border-white/[.16] ${
                  index === pacingSteps.length - 1 ? 'border-b' : ''
                }`}
              >
                <strong className="block font-display font-bold text-[17.5px] tracking-[-.02em] text-white">
                  {step.title}
                </strong>
                <span className="block text-[#A9C6D6] text-[15.5px] mt-1.5">{step.body}</span>
              </li>
            ))}
          </ol>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-center mt-8">
            <PaceBoard />
            <LiveTerminal
              label="Litigator + calling-hours gate — live"
              surface="inset"
              lines={8}
              sources={['LITIGATOR-DB', 'SERIAL-FILER', 'FED-DOCKET', 'CALL-HOURS']}
              footer={[{ label: 'Lookup', value: '<1 ms' }]}
            />
          </div>
        </Band>

        <Band>
          <Eyebrow>What&apos;s included</Eyebrow>
          <h2 className="text-[clamp(30px,4.2vw,50px)] mt-3.5 max-w-[16ch]">
            The pieces that make up a build.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule rounded-md overflow-hidden mt-9">
            {included.map((item) => (
              <div key={item.title} className="bg-card p-6 sm:p-7">
                <p className="font-data text-[11px] uppercase tracking-[.13em] text-attest font-semibold">
                  {item.tag}
                </p>
                <h3 className="text-xl my-3">{item.title}</h3>
                <p className="text-slate text-[15.5px]">{item.body}</p>
              </div>
            ))}
          </div>
        </Band>

        <Band id="faq">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="text-[clamp(30px,4.2vw,50px)] mt-3.5 mb-7">
            Questions about the build itself.
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

        <section className="text-center py-[clamp(52px,7vw,88px)]">
          <div className="container-custom">
            <Eyebrow centered>Get a direct rate on the phone</Eyebrow>
            <h2 className="text-[clamp(30px,4.2vw,50px)] max-w-[19ch] mx-auto mt-3.5">
              Tell us your seat count. We&apos;ll quote the build on the call.
            </h2>
            <p className="mt-4 text-lg text-slate">No slide decks, no scheduling a demo.</p>
            <div className="flex flex-wrap gap-3 mt-7 justify-center">
              <a href={PHONE_HREF} className="btn-solid">
                Call {PHONE_DISPLAY}
              </a>
              <a href="/voip-for-call-centers" className="btn-line">
                See per-seat pricing
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
