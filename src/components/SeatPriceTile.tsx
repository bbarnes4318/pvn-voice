import React from 'react';
import { SEAT_DAY_RATE, SEAT_FEATURES } from '../lib/pricing';

interface SeatPriceTileProps {
  caption?: string;
  className?: string;
}

/**
 * The dark $3/agent/day tile. Rate and feature list come from lib/pricing.
 */
const SeatPriceTile: React.FC<SeatPriceTileProps> = ({
  caption = 'Call Centers — Per Seat',
  className = '',
}) => (
  <div className={`bg-ink text-white rounded-md p-6 sm:p-8 ${className}`}>
    <p className="font-data text-[11px] uppercase tracking-[.14em] text-[#8FB2C7]">{caption}</p>
    <p className="font-display font-extrabold text-[clamp(46px,6vw,64px)] tracking-[-.04em] leading-none mt-3 mb-0.5">
      ${SEAT_DAY_RATE.toFixed(0)}
      <small className="text-[19px] font-semibold tracking-[-.01em] text-[#8FB2C7]"> / agent / day</small>
    </p>
    <p className="text-[#A9C6D6] text-[15.5px] mt-2.5">
      Billed strictly on active dialing days. If your floor doesn&apos;t dial, you don&apos;t pay.
    </p>
    <ul className="list-none mt-6 p-0">
      {SEAT_FEATURES.map((feature) => (
        <li
          key={feature}
          className="flex gap-3 py-2.5 border-t border-white/10 text-[15.5px] text-[#CFE0EA]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-attest mt-2.5 shrink-0" aria-hidden="true" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default SeatPriceTile;
