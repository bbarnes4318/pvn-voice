import React from 'react';
import { FaBolt, FaChartLine, FaPhone, FaServer, FaSlidersH, FaTimesCircle } from 'react-icons/fa';

const capabilities = [
  {
    title: 'Keep VICIdial exactly where it is',
    copy: "Point your carrier entry at PVN. Campaigns, lists and agents don't change.",
    icon: FaServer,
  },
  {
    title: 'Carrier failures go to the next route',
    copy: 'Carrier errors 400 and up move on, except busy, decline and dialer-hangup responses, which stop.',
    icon: FaTimesCircle,
  },
  {
    title: 'Volume limits you set',
    copy: 'Calls-per-second and concurrent-call caps are enforced before a call leaves PVN.',
    icon: FaSlidersH,
  },
  {
    title: 'Caller ID matched to the area code',
    copy: "Outbound numbers are picked from your approved inventory, matched to the area code you're calling, with daily use caps per number.",
    icon: FaPhone,
  },
  {
    title: 'The real reason a call failed',
    copy: 'Every attempt is logged with the carrier, response code, ring time and post-dial delay.',
    icon: FaBolt,
  },
  {
    title: 'Cost and connect rate side by side',
    copy: 'Route rates and answer rates stay in one view so you can route on both.',
    icon: FaChartLine,
  },
];

const FloorSection: React.FC = () => (
  <section className="bg-white py-20 md:py-24">
    <div className="container-custom">
      <div className="grid items-start gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:gap-20">
        <div className="max-w-lg lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-700">Built around the floor</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.025em] text-primary-950 md:text-[50px]">
            Built for call centers that live and die by connect rate.
          </h2>
          <p className="mt-6 text-lg leading-[1.7] text-gray-700">
            The routing controls map directly to what your floor deals with every day: getting traffic out of VICIdial, managing volume, keeping carrier paths available and knowing why calls stopped.
          </p>
        </div>

        <div>
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {capabilities.map(({ title, copy, icon: Icon }, index) => (
              <div key={title} className="grid gap-4 py-6 sm:grid-cols-[52px_1fr] sm:gap-5 md:py-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <Icon />
                </div>
                <div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-xs font-bold text-gray-400">0{index + 1}</span>
                    <h3 className="text-xl font-bold text-primary-950">{title}</h3>
                  </div>
                  <p className="mt-2 pl-8 leading-relaxed text-gray-600">{copy}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm leading-relaxed text-gray-500">
            Lower 48 US destinations <span className="mx-2 text-gray-300">·</span> Media relayed on every failover <span className="mx-2 text-gray-300">·</span> Real SIP code on every attempt
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FloorSection;
