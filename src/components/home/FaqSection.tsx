import React from 'react';

export const faqItems = [
  {
    question: 'Do I have to leave my current carrier?',
    answer: 'No. Your carrier goes into the routing order wherever you want it: first, middle or last. PVN adds backup routes around it.',
  },
  {
    question: 'Do I have to change anything in VICIdial?',
    answer: "You point VICIdial's carrier entry at PVN. Campaigns, lists, agents and dial settings stay the same.",
  },
  {
    question: 'Will PVN redial people who were busy or said no?',
    answer: 'No. Busy (486, 600), declined (603) and calls your dialer hung up (487) are never retried. Only carrier errors move to the next route.',
  },
  {
    question: 'Which destinations can I call?',
    answer: 'The lower 48 US states. Alaska, Hawaii, Canada and the Caribbean are blocked.',
  },
  {
    question: 'How do I see what happened to a call?',
    answer: 'Every attempt is logged with the carrier that received it, the response code, ring time and post-dial delay, and each route shows its answer rate.',
  },
  {
    question: 'How does the traffic test work?',
    answer: 'You send PVN one campaign or a share of traffic with your current carrier in the order. We compare what your first route completed against what the full order completed, on your calls.',
  },
];

const FaqSection: React.FC = () => (
  <section id="faq" className="scroll-mt-28 bg-white py-20 md:py-24">
    <div className="container-custom">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div className="max-w-lg">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-700">Common questions</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.025em] text-primary-950 md:text-[48px]">
            What call centers usually ask before testing PVN.
          </h2>
        </div>

        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {faqItems.map(({ question, answer }) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg text-left text-lg font-bold text-primary-950 marker:hidden">
                <span>{question}</span>
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-3xl pr-12 pt-3 leading-relaxed text-gray-600">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FaqSection;
