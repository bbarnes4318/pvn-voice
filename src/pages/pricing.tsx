import React from 'react';
import Head from 'next/head';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import Band from '../components/Band';
import Eyebrow from '../components/Eyebrow';
import Estimator from '../components/Estimator';
import RateDeck from '../components/RateDeck';
import SeatPriceTile from '../components/SeatPriceTile';
import { DID_MINIMUM, PHONE_DISPLAY, PHONE_HREF } from '../lib/pricing';

/**
 * NOTE: this page was composed from the shared RateDeck, SeatPriceTile and
 * Estimator components rather than ported from a reference mockup — no
 * pvnvoice-pricing.html was supplied. Every rate and quantity comes from
 * lib/pricing, so nothing here can disagree with Home or Call Centers; the
 * section ordering and the connective copy are the only original parts and are
 * the bits to replace when the real mockup lands.
 */
export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Head>
        <title>PVN Voice — Pricing</title>
        <meta
          name="description"
          content="Posted rates for outbound call centers and wholesale buyers: $3/agent/day per seat with included minutes and monitored DIDs, or a direct per-minute rate deck. No sales call required."
        />
      </Head>

      <SiteHeader active="/pricing" />

      <main className="flex-grow">
        <section className="py-[clamp(44px,6vw,72px)]">
          <div className="container-custom">
            <Eyebrow className="mb-5">Pricing</Eyebrow>
            <h1 className="text-[clamp(36px,4.8vw,54px)] leading-[1.02] max-w-[22ch]">
              Two rate structures. Both posted in full.
            </h1>
            <p className="mt-5 text-[19px] text-slate max-w-[56ch]">
              Running an outbound floor? Take the per-seat rate. Buying minutes for your own platform?
              Take the rate deck. Either way the numbers are on this page &mdash; there is no quote
              form standing between you and a price.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <a href={PHONE_HREF} className="btn-solid">
                Call {PHONE_DISPLAY}
              </a>
              <a href="#estimate" className="btn-line">
                Run the estimate
              </a>
            </div>
          </div>
        </section>

        <Band id="rates">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-end mb-10">
            <div>
              <Eyebrow>Rates</Eyebrow>
              <h2 className="text-[clamp(30px,4.2vw,50px)] mt-3.5">Per seat, or per minute.</h2>
            </div>
            <p className="text-lg text-slate max-w-[62ch]">
              The per-seat rate bundles dialing infrastructure, monitored numbers and pre-dial
              compliance into one number per agent per dialing day. The rate deck is the direct
              carrier price for buyers who bring their own platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] gap-5 lg:gap-8 items-start">
            <SeatPriceTile />
            <RateDeck />
          </div>

          <p className="mt-6 text-sm text-slate">
            Wholesale accounts carry a {DID_MINIMUM} DID minimum. The litigator gate is included at $0
            on every route, on both rate structures, and is never billed per record.
          </p>
        </Band>

        <Band id="estimate">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-end mb-10">
            <div>
              <Eyebrow>Cost Estimator</Eyebrow>
              <h2 className="text-[clamp(30px,4.2vw,50px)] mt-3.5">
                Price it before you pick up the phone.
              </h2>
            </div>
            <p className="text-lg text-slate max-w-[62ch]">
              Adjust your seats and dials, or your minutes and DIDs. Nothing is stored or submitted.
              When the math makes sense, call us to verify against your specific NPA-NXX mix.
            </p>
          </div>
          <Estimator />
        </Band>

        <section className="text-center py-[clamp(52px,7vw,88px)]">
          <div className="container-custom">
            <Eyebrow centered>Get a direct rate on the phone</Eyebrow>
            <h2 className="text-[clamp(30px,4.2vw,50px)] max-w-[19ch] mx-auto mt-3.5">
              Tell us your seats or your minutes. We&apos;ll quote you on the call.
            </h2>
            <p className="mt-4 text-lg text-slate">No slide decks, no scheduling a demo.</p>
            <div className="flex flex-wrap gap-3 mt-7 justify-center">
              <a href={PHONE_HREF} className="btn-solid">
                Call {PHONE_DISPLAY}
              </a>
              <a href="/voip-for-call-centers" className="btn-line">
                See the per-seat page
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
