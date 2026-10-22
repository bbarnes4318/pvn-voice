import React from 'react';
import { FaCheckCircle, FaSitemap } from 'react-icons/fa';

const bullets = [
  'IP-authenticated or username/password carrier connections',
  'Per-carrier calls-per-second caps and number formatting',
  'Move your carrier up, down or out of the order any time',
  'Your campaigns, agents and VICIdial setup stay exactly as they are',
];

const routes = [
  ['01', 'PVN Premium', 'PRIMARY', 'PVN'],
  ['02', 'Your Carrier', 'BYOC', 'YOUR CARRIER'],
  ['03', 'PVN Standard', 'FAILOVER', 'PVN'],
  ['04', 'PVN Value', 'FAILOVER', 'PVN'],
];

const ByocSection: React.FC = () => (
  <section id="byoc" className="scroll-mt-28 bg-white py-20 md:py-24">
    <div className="container-custom">
      <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-700">Bring your own carrier</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.025em] text-primary-950 md:text-[50px]">
            Keep the carrier you trust. Put backup routes around it.
          </h2>
          <p className="mt-6 text-xl leading-[1.65] text-gray-700">
            Your existing carrier can sit first, middle or last in the routing order. PVN adds carrier paths around the setup you already run, while your dialer keeps pointing to one place.
          </p>

          <div className="mt-7 space-y-3">
            {bullets.map((item) => (
              <div key={item} className="flex items-start gap-3 text-base font-semibold text-gray-700">
                <FaCheckCircle className="mt-1 flex-shrink-0 text-secondary-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-[#f8fafc] p-5 md:p-7">
          <div className="flex items-center justify-between border-b border-gray-200 pb-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">Your configured carrier order</p>
              <h3 className="mt-1 text-xl font-bold text-primary-950">You decide where every route belongs.</h3>
            </div>
            <FaSitemap className="text-3xl text-primary-500" />
          </div>

          <div className="mt-5 space-y-3">
            {routes.map(([rank, name, role, source]) => (
              <div key={rank} className="grid grid-cols-[48px_1fr_auto] items-center gap-4 rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-950 text-sm font-bold text-white">{rank}</div>
                <div className="min-w-0">
                  <p className="truncate font-bold text-primary-950">{name}</p>
                  <p className="mt-0.5 text-xs font-bold uppercase tracking-[0.12em] text-gray-400">{source}</p>
                </div>
                <span className="rounded-full bg-primary-50 px-3 py-1 text-[10px] font-bold text-primary-700">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ByocSection;
