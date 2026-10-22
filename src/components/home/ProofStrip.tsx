import React from 'react';

const proofItems = [
  ['ONE CONNECTION', 'VICIdial points at PVN once.'],
  ['BACKUP CARRIERS', 'Configured carriers sit behind that one connection.'],
  ['YOUR CARRIER STAYS', 'Put your current provider first, middle or last.'],
  ['EVERY ATTEMPT LOGGED', 'Carrier, response code and ring time for each try.'],
];

const ProofStrip: React.FC = () => (
  <section className="border-b border-gray-200 bg-white">
    <div className="container-custom grid md:grid-cols-4">
      {proofItems.map(([label, copy], index) => (
        <div key={label} className={`py-6 md:px-6 ${index !== 0 ? 'md:border-l md:border-gray-200' : ''}`}>
          <p className="text-xs font-bold tracking-[0.15em] text-secondary-700">{label}</p>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{copy}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ProofStrip;
