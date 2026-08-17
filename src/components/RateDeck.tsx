import React from 'react';
import { RATE_DECK, RATE_DECK_FOOTNOTE } from '../lib/pricing';

interface RateDeckProps {
  /** Column header over the service column. */
  heading?: string;
  className?: string;
}

/**
 * The wholesale per-minute rate deck. Rows and rates come from lib/pricing, so
 * Home and Pricing cannot show different numbers.
 */
const RateDeck: React.FC<RateDeckProps> = ({ heading = 'Wholesale — Per Minute', className = '' }) => (
  <div className={`bg-card border border-rule rounded-md overflow-hidden ${className}`}>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left font-data text-[11px] font-semibold uppercase tracking-[.13em] text-slate px-5 py-3.5 border-b border-rule bg-[#FAFCFD]">
              {heading}
            </th>
            <th className="text-left font-data text-[11px] font-semibold uppercase tracking-[.13em] text-slate px-5 py-3.5 border-b border-rule bg-[#FAFCFD] hidden sm:table-cell">
              Terms
            </th>
            <th className="text-right font-data text-[11px] font-semibold uppercase tracking-[.13em] text-slate px-5 py-3.5 border-b border-rule bg-[#FAFCFD]">
              Rate
            </th>
          </tr>
        </thead>
        <tbody>
          {RATE_DECK.map((row) => (
            <tr key={row.service}>
              <td className="px-5 py-4 border-b border-rule align-top last:border-b-0">
                <span className="font-semibold">{row.service}</span>
                <span className="block text-sm text-slate mt-0.5 font-normal">{row.note}</span>
              </td>
              <td className="px-5 py-4 border-b border-rule align-top text-slate hidden sm:table-cell">
                {row.terms}
              </td>
              <td
                className={`px-5 py-4 border-b border-rule align-top font-data font-semibold text-base whitespace-nowrap text-right ${
                  row.included ? 'text-attest' : ''
                }`}
              >
                {row.rate}
                {row.unit && <small className="text-slate font-normal"> {row.unit}</small>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="px-5 py-4 bg-[#FAFCFD] text-[14.5px] text-slate border-t border-rule">
      {RATE_DECK_FOOTNOTE}
    </p>
  </div>
);

export default RateDeck;
