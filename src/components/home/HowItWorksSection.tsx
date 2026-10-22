import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const singlePathSteps = [
  ['VICIdial sends the call', 'Your carrier receives it'],
  ['Your carrier cannot complete the attempt', 'There is no second carrier path'],
  ['The attempt stops', 'The floor never gets the conversation'],
];

const pvnSteps = [
  ['VICIdial sends the call to PVN once', 'No dialer migration, no campaign rebuild'],
  ['PVN tries your first carrier', 'PVN routes, backup routes and your own carrier, in your order'],
  ['Carrier failure? Next carrier', 'Carrier error responses move on except 486, 600, 603 and 487, which are never retried'],
  ['The person answers', 'Busy and declined calls are never retried'],
];

const HowItWorksSection: React.FC = () => (
  <section id="how-it-works" className="scroll-mt-28 bg-[#f7f9fc] py-20 md:py-24">
    <div className="container-custom">
      <div className="grid items-end gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-700">The problem most centers never test</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.025em] text-primary-950 md:text-[52px]">
            One carrier can end a good call before your agent ever gets the chance.
          </h2>
        </div>
        <div className="max-w-2xl lg:pb-1">
          <p className="text-xl leading-[1.65] text-gray-700">
            You already paid for the data. The campaign is loaded. The floor is staffed. If one carrier cannot complete the attempt and there is nowhere else for the call to go, that opportunity ends before your team can do anything about it.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-2xl border border-gray-200 bg-white p-7 md:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">Single path</p>
              <h3 className="mt-2 text-2xl font-bold text-primary-950">One carrier owns the outcome.</h3>
            </div>
            <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">ONE CARRIER</span>
          </div>

          <div className="mt-7 border-l-2 border-gray-200 pl-6">
            {singlePathSteps.map(([title, copy], index) => (
              <div key={title} className={`relative pb-7 ${index === singlePathSteps.length - 1 ? 'pb-0' : ''}`}>
                <span className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full ${index === singlePathSteps.length - 1 ? 'bg-red-500' : 'bg-gray-400'}`} />
                <p className="font-bold text-primary-950">{title}</p>
                <p className="mt-1 text-sm text-gray-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-secondary-200 bg-white p-7 shadow-[0_18px_50px_rgba(20,35,61,0.08)] md:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary-700">PVN routing</p>
              <h3 className="mt-2 text-2xl font-bold text-primary-950">The call gets another carrier path.</h3>
            </div>
            <span className="rounded-full bg-secondary-50 px-3 py-1 text-xs font-bold text-secondary-800">MULTI-CARRIER</span>
          </div>

          <div className="mt-7 border-l-2 border-secondary-200 pl-6">
            {pvnSteps.map(([title, copy], index) => (
              <div key={title} className={`relative pb-7 ${index === pvnSteps.length - 1 ? 'pb-0' : ''}`}>
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-secondary-600" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-bold text-primary-950">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{copy}</p>
                  </div>
                  <FaCheckCircle className="mt-1 flex-shrink-0 text-secondary-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
