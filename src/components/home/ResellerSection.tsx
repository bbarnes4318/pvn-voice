import React from 'react';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const resellerPoints = [
  'Your brand and custom domain',
  'Your downstream customer accounts',
  'Your support details and customer relationship',
  'Routing and usage visibility for each customer',
];

const ResellerSection: React.FC = () => (
  <section id="resellers" className="scroll-mt-28 bg-[#f7f9fc] py-20 md:py-24">
    <div className="container-custom">
      <div className="overflow-hidden rounded-2xl border border-primary-900/10 bg-primary-950 text-white shadow-[0_20px_60px_rgba(20,35,61,0.16)]">
        <div className="grid gap-10 p-8 md:p-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:p-12 xl:p-14">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-300">For VICIdial installers &amp; VoIP resellers</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.025em] md:text-[50px]">
              Give your clients a routing advantage they can actually see.
            </h2>
            <p className="mt-6 text-xl leading-[1.65] text-primary-100">
              Put your brand on the portal, keep control of the customer relationship, and offer multi-carrier routing under your own name with route and usage visibility for each customer.
            </p>
            <a href="/contact-us" className="mt-8 inline-flex items-center font-bold text-secondary-300 hover:text-secondary-200">
              Talk to PVN about reseller access <FaArrowRight className="ml-2" />
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {resellerPoints.map((item) => (
              <div key={item} className="flex min-h-[92px] items-start gap-3 rounded-xl border border-white/10 bg-white/[0.045] p-5">
                <FaCheckCircle className="mt-1 flex-shrink-0 text-secondary-300" />
                <span className="font-semibold leading-relaxed text-primary-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ResellerSection;
