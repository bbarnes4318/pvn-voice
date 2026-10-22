import React from 'react';

const retryRows = [
  ['503 Service Unavailable', 'Carrier overloaded or out of capacity'],
  ['502 Bad Gateway', "Carrier's upstream failed"],
  ['500 Server Error', 'Carrier-side fault'],
  ['504 Gateway Timeout', "Carrier's upstream didn't answer"],
  ['408 Request Timeout', 'Carrier never responded'],
  ['480 Temporarily Unavailable', "Route couldn't reach the number right now"],
  ['403 / 404', "Carrier refused or couldn't route the number"],
];

const stopRows = [
  ['486 Busy Here', 'Line busy'],
  ['600 Busy Everywhere', 'Every line busy'],
  ['603 Decline', 'Call rejected by the person'],
  ['487 Request Terminated', 'Your dialer hung up before answer'],
];

const RulesCard: React.FC<{
  title: string;
  rows: string[][];
  tone: 'green' | 'gray';
  footer?: string;
}> = ({ title, rows, tone, footer }) => (
  <div className={`overflow-hidden rounded-2xl border bg-white ${tone === 'green' ? 'border-secondary-200' : 'border-gray-200'}`}>
    <div className={`border-b px-5 py-4 md:px-6 ${tone === 'green' ? 'border-secondary-100 bg-secondary-50' : 'border-gray-200 bg-gray-50'}`}>
      <h3 className="text-xl font-bold text-primary-950">{title}</h3>
    </div>
    <div className="divide-y divide-gray-100">
      {rows.map(([code, meaning]) => (
        <div key={code} className="grid grid-cols-[minmax(0,9.25rem)_1fr] gap-4 px-5 py-4 md:grid-cols-[13rem_1fr] md:px-6">
          <code className="break-words font-mono text-sm font-bold text-primary-950">{code}</code>
          <p className="text-sm leading-relaxed text-gray-600">{meaning}</p>
        </div>
      ))}
    </div>
    {footer && <p className="border-t border-gray-100 px-5 py-4 text-sm font-semibold text-gray-600 md:px-6">{footer}</p>}
  </div>
);

const FailoverRulesSection: React.FC = () => (
  <section id="failover-rules" className="scroll-mt-28 bg-[#f7f9fc] py-20 md:py-24">
    <div className="container-custom">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-700">Failover rules</p>
        <h2 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.025em] text-primary-950 md:text-[52px]">
          We only retry what the carrier broke.
        </h2>
        <p className="mt-6 text-xl leading-[1.65] text-gray-700">
          A busy signal is the person&apos;s answer. A 503 is the carrier&apos;s problem. PVN reads the response on every attempt and moves to the next carrier when the failure came from the network. Person-level busy, decline and dialer-hangup responses stop the call.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <RulesCard
          title="Moves to the next carrier"
          rows={retryRows}
          tone="green"
          footer="Plus any other carrier failure response 400 or higher, except the person-level stop responses shown beside it."
        />
        <RulesCard title="Stops — the person answered" rows={stopRows} tone="gray" />
      </div>

      <div className="mt-6 rounded-2xl border border-primary-100 bg-white px-5 py-5 md:px-6">
        <p className="leading-relaxed text-gray-700">
          <strong className="text-primary-950">Using your own carrier with username and password?</strong> If it challenges the call with 401 or 407, PVN signs in with your credentials on that carrier first. A login challenge is never counted as a carrier failure.
        </p>
      </div>
    </div>
  </section>
);

export default FailoverRulesSection;
