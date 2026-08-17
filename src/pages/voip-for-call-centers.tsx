import React from 'react';
import Head from 'next/head';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import Band from '../components/Band';
import Eyebrow from '../components/Eyebrow';
import LiveTerminal from '../components/LiveTerminal';
import DidPoolChips from '../components/DidPoolChips';
import Estimator from '../components/Estimator';
import SeatPriceTile from '../components/SeatPriceTile';
import {
  DIDS_PER_SEAT,
  OUTBOUND_RATE,
  PHONE_DISPLAY,
  PHONE_HREF,
  SEAT_INCLUDED_MINUTES,
  rate,
} from '../lib/pricing';

const flow = [
  {
    n: '01',
    title: 'Agent dials',
    body: "Predictive or auto dialing pulls the next record and places the call through your seat's assigned trunk.",
  },
  {
    n: '02',
    title: 'Litigator gate',
    body: 'The number is checked against known plaintiffs and serial filers, in switch memory, before anything leaves the edge.',
  },
  {
    n: '03',
    title: 'Calling-hours gate',
    body: "NPA-NXX resolves the number's actual timezone and checks it against federal and state calling windows.",
  },
  {
    n: '04',
    title: 'Call placed',
    body: "The call goes out signed at A, on a DID that's currently clean, and lands in your CDRs in real time.",
  },
];

const didSteps = [
  {
    title: 'Own carrier OCN',
    body: 'Numbers provisioned directly under our carrier code and signed on our own certificate. No borrowed credentials.',
  },
  {
    title: 'Continuous reputation scans',
    body: 'Automated checks across major mobile analytics engines catch a flag before your floor sees an answer-rate drop.',
  },
  {
    title: 'Zero-cost instant replacement',
    body: 'The moment a number catches heat, it rotates out and a clean one goes in. No charge, no downtime for the agent.',
  },
];

const faqs = [
  {
    q: 'Do I need my own dialer software?',
    a: "No. Predictive and auto dialing infrastructure is included in the per-seat price with zero seat licensing fees. If you're already running your own dialer platform, we can also just supply termination and DIDs — see the wholesale rate deck.",
  },
  {
    q: 'Can agents work remote?',
    a: "Yes. Seats aren't tied to a physical location — an agent dials through their assigned trunk from wherever they're logged in.",
  },
  {
    q: 'What if my floor is overseas?',
    a: 'Fine on our end. The calling-hours gate enforces US federal and state windows based on the number being dialed, regardless of where your agents are sitting.',
  },
  {
    q: 'How does agent transfer work?',
    a: 'Live transfers route internally between agents on the same floor, or out to a licensed closer, without leaving our network or incurring a second termination leg.',
  },
  {
    q: 'What happens if I go over my included minutes?',
    a: `Overage bills at ${rate(OUTBOUND_RATE)}/min, the same rate as standard outbound termination. ${SEAT_INCLUDED_MINUTES} included minutes covers a normal 1,000-dial day with room to spare.`,
  },
  {
    q: 'Is there a contract?',
    a: "No. No contract term, no minimum seat count, no cancellation fee. You're billed on the dialing days you actually use.",
  },
];

export default function VoipForCallCenters() {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Head>
        <title>PVN Voice — VoIP for Outbound Call Centers</title>
        <meta
          name="description"
          content="Predictable per-seat pricing for outbound floors. Included minutes, monitored DIDs, and TCPA litigator suppression built into every dial. $3/agent/day, no contract."
        />
      </Head>

      <SiteHeader active="/voip-for-call-centers" />

      <main className="flex-grow">
        <section className="py-[clamp(44px,6vw,72px)]">
          <div className="container-custom grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] gap-7 lg:gap-14 items-center">
            <div>
              <Eyebrow className="mb-5">VoIP for outbound call centers</Eyebrow>
              <h1 className="text-[clamp(36px,4.8vw,54px)] leading-[1.02]">
                Run your floor. We watch your numbers, not just your invoice.
              </h1>
              <p className="mt-5 text-[19px] text-slate max-w-[52ch]">
                One predictable price per agent per day. Included minutes, monitored DIDs, and TCPA
                litigator suppression on every single dial &mdash; not sold back to you as an add-on.
              </p>
              <div className="flex flex-wrap gap-3 mt-7">
                <a href={PHONE_HREF} className="btn-solid">
                  Call {PHONE_DISPLAY}
                </a>
                <a href="#estimate" className="btn-line">
                  Price your floor
                </a>
              </div>
            </div>

            <SeatPriceTile />
          </div>
        </section>

        <Band id="dialing-day">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="text-[clamp(30px,4.2vw,50px)] mt-3.5 max-w-[20ch]">
            What happens between a dial and an answer.
          </h2>
          <p className="mt-4 text-lg text-slate max-w-[62ch]">
            Four checks run on every single call your floor places, before the far end ever rings. None
            of them are optional and none of them are separately billed.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-rule border border-rule rounded-md overflow-hidden mt-9">
            {flow.map((step) => (
              <div key={step.n} className="bg-card p-[22px]">
                <p className="font-display text-[34px] font-extrabold tracking-[-.03em] text-attest leading-none">
                  {step.n}
                </p>
                <h3 className="mt-3 text-[17px]">{step.title}</h3>
                <p className="mt-2 text-slate text-[14.5px]">{step.body}</p>
              </div>
            ))}
          </div>
        </Band>

        <Band dark>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-end mb-9">
            <div>
              <Eyebrow dark>Litigator gate</Eyebrow>
              <h2 className="text-[clamp(30px,4.2vw,50px)] text-white mt-3.5">
                Watch it decline a call in real time.
              </h2>
            </div>
            <p className="text-lg text-[#A9C6D6] max-w-[62ch]">
              This is step 02 from above, running live. Same gate on every seat, every dial, no
              per-record charge.
            </p>
          </div>

          <LiveTerminal
            label="Suppression gate — live"
            surface="inset"
            lines={9}
            footer={[
              { label: 'Lookup', value: '<1 ms' },
              { label: 'List refreshed', value: 'daily' },
            ]}
          />
        </Band>

        <Band dark>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-end mb-9">
            <div>
              <Eyebrow dark>DID reputation</Eyebrow>
              <h2 className="text-[clamp(30px,4.2vw,50px)] text-white mt-3.5">
                A tagged number stops answering. We watch for it so you don&apos;t have to.
              </h2>
            </div>
            <p className="text-lg text-[#A9C6D6] max-w-[62ch]">
              {DIDS_PER_SEAT === 16 ? 'Sixteen' : DIDS_PER_SEAT} registered DIDs per seat, rotated
              through your dial pattern, checked against the major spam-label engines continuously.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,.95fr)_minmax(0,1fr)] gap-6 lg:gap-14 items-center mt-5">
            <DidPoolChips dark />
            <ol className="list-none m-0 p-0">
              {didSteps.map((step, index) => (
                <li
                  key={step.title}
                  className={`py-4 border-t border-white/[.16] ${
                    index === didSteps.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <strong className="block font-display font-bold text-[17px] tracking-[-.02em] text-white">
                    {step.title}
                  </strong>
                  <span className="block text-[#A9C6D6] text-[15.5px] mt-1">{step.body}</span>
                </li>
              ))}
            </ol>
          </div>
        </Band>

        <Band id="estimate">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-end mb-9">
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
          <Estimator modes="seat" />
        </Band>

        <Band id="faq">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="text-[clamp(30px,4.2vw,50px)] mt-3.5 mb-7">
            Questions floor owners actually ask.
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
              Tell us how many seats you&apos;re running. We&apos;ll quote you on the call.
            </h2>
            <p className="mt-4 text-lg text-slate">No slide decks, no scheduling a demo.</p>
            <div className="flex flex-wrap gap-3 mt-7 justify-center">
              <a href={PHONE_HREF} className="btn-solid">
                Call {PHONE_DISPLAY}
              </a>
              <a href="/pricing" className="btn-line">
                See the full rate deck
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
