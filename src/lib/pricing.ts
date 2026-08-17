// Single source of truth for every rate, quantity and identifier published on
// this site. The rate deck, seat tile and estimator all read from here so the
// numbers cannot drift between Home, Pricing, Call Centers and Dialer Systems.
// Changing a value here changes it everywhere it appears.

export const PHONE_DISPLAY = '(904) 512-8487';
export const PHONE_HREF = 'tel:+19045128487';
export const RMD_CERTIFICATION = 'RMD0027386';

/** Per-seat plan. */
export const SEAT_DAY_RATE = 3.0; // $ per agent per dialing day
export const SEAT_INCLUDED_MINUTES = 300; // outbound minutes per agent per day
export const DIDS_PER_SEAT = 16;
export const REFERENCE_SEATS = 50; // standard dialer build

/** Per-minute / wholesale rates. */
export const OUTBOUND_RATE = 0.006;
export const INBOUND_RATE = 0.0045;
export const VOLUME_RATE = 0.005; // from, at the volume threshold
export const VOLUME_THRESHOLD_MIN_PER_DAY = 100000;
export const DID_MONTHLY_RATE = 0.2;
export const DID_MINIMUM = 400; // wholesale accounts

/**
 * Billed minutes per dial, used by the seat-mode estimator. Equivalent to
 * ~210 billed minutes per 1,000 dials.
 */
export const MINUTES_PER_DIAL = 0.21;
export const MINUTES_PER_1000_DIALS = Math.round(MINUTES_PER_DIAL * 1000);

/** Display helpers so formatting is consistent everywhere a rate is printed. */
export const rate = (value: number): string => `$${value.toFixed(4)}`;

export const money = (value: number, decimals = 0): string =>
  `$${value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;

export const count = (value: number): string => value.toLocaleString('en-US');

export interface SeatEstimate {
  agents: number;
  dialsPerAgentDay: number;
  dialingDays: number;
  billedMinutesPerAgentDay: number;
  overageMinutesPerAgentDay: number;
  overageCostPerAgentDay: number;
  effectivePerAgentDay: number;
  monthlyTotal: number;
}

/** Seat-mode math. Shared by the estimator on Home, Pricing and Call Centers. */
export const estimateBySeat = (
  agents: number,
  dialsPerAgentDay: number,
  dialingDays: number
): SeatEstimate => {
  const billedMinutesPerAgentDay = dialsPerAgentDay * MINUTES_PER_DIAL;
  const overageMinutesPerAgentDay = Math.max(0, billedMinutesPerAgentDay - SEAT_INCLUDED_MINUTES);
  const overageCostPerAgentDay = overageMinutesPerAgentDay * OUTBOUND_RATE;
  const effectivePerAgentDay = SEAT_DAY_RATE + overageCostPerAgentDay;

  return {
    agents,
    dialsPerAgentDay,
    dialingDays,
    billedMinutesPerAgentDay,
    overageMinutesPerAgentDay,
    overageCostPerAgentDay,
    effectivePerAgentDay,
    monthlyTotal: effectivePerAgentDay * agents * dialingDays,
  };
};

export interface MinuteEstimate {
  isVolume: boolean;
  outboundRate: number;
  inboundRate: number;
  outboundMinutes: number;
  inboundMinutes: number;
  outboundCost: number;
  inboundCost: number;
  didCost: number;
  effectiveBlended: number;
  monthlyTotal: number;
}

/** Minute-mode math. Shared by the estimator on Home and Pricing. */
export const estimateByMinute = (
  minutesPerDay: number,
  outboundSharePct: number,
  dids: number,
  dialingDays: number
): MinuteEstimate => {
  const share = outboundSharePct / 100;
  const isVolume = minutesPerDay >= VOLUME_THRESHOLD_MIN_PER_DAY;
  const outboundRate = isVolume ? VOLUME_RATE : OUTBOUND_RATE;
  const inboundRate = isVolume ? VOLUME_RATE : INBOUND_RATE;

  const outboundMinutes = minutesPerDay * share * dialingDays;
  const inboundMinutes = minutesPerDay * (1 - share) * dialingDays;
  const outboundCost = outboundMinutes * outboundRate;
  const inboundCost = inboundMinutes * inboundRate;
  const didCost = dids * DID_MONTHLY_RATE;
  const totalMinutes = minutesPerDay * dialingDays;

  return {
    isVolume,
    outboundRate,
    inboundRate,
    outboundMinutes,
    inboundMinutes,
    outboundCost,
    inboundCost,
    didCost,
    effectiveBlended: totalMinutes > 0 ? (outboundCost + inboundCost) / totalMinutes : 0,
    monthlyTotal: outboundCost + inboundCost + didCost,
  };
};

export const SEAT_FEATURES: string[] = [
  `${SEAT_INCLUDED_MINUTES} outbound minutes per agent/day included (overage: ${rate(OUTBOUND_RATE)}/min)`,
  `${DIDS_PER_SEAT} registered DIDs per seat, monitored continuously and replaced free when flagged`,
  'In-line TCPA litigator suppression on every single dial ($0 per-record fee)',
  'Predictive & auto dialing infrastructure included with zero seat licensing fees',
  'Direct US-based engineering support included',
];

export interface RateRow {
  service: string;
  note: string;
  terms: string;
  rate: string;
  unit?: string;
  included?: boolean;
}

/** The wholesale rate deck. Rendered identically on Home and Pricing. */
export const RATE_DECK: RateRow[] = [
  {
    service: 'Outbound Termination',
    note: 'Domestic, A-attested on direct routes',
    terms: '12/6 billing. Clean CLI, isolated trunks with zero mixed traffic.',
    rate: rate(OUTBOUND_RATE),
    unit: '/min',
  },
  {
    service: 'Inbound',
    note: 'DID & callback termination',
    terms: 'Direct to your dialer or queue.',
    rate: rate(INBOUND_RATE),
    unit: '/min',
  },
  {
    service: 'High-Volume Tier',
    note: `${count(VOLUME_THRESHOLD_MIN_PER_DAY)}+ min/day`,
    terms: 'Dedicated high-capacity trunks for clean, normal-duration traffic.',
    rate: `from ${rate(VOLUME_RATE)}`,
    unit: '/min',
  },
  {
    service: 'DIDs',
    note: 'STIR/SHAKEN registered',
    terms: 'Spam-monitored. Free instant swap when tagged.',
    rate: `$${DID_MONTHLY_RATE.toFixed(2)}`,
    unit: '/DID/mo',
  },
  {
    service: 'TCPA Litigator Gate',
    note: 'Pre-dial suppression at the SIP edge',
    terms: 'Built-in, non-negotiable protection.',
    rate: 'Included ($0)',
    included: true,
  },
];

export const RATE_DECK_FOOTNOTE = `${DID_MINIMUM} DID minimum on wholesale accounts. No term contracts, no monthly commitments, no cancellation fees.`;

export const SEAT_ESTIMATE_NOTE = `Seat estimates assume ~${MINUTES_PER_1000_DIALS} billed minutes per 1,000 dials based on standard predictive connect rates and 12/6 rounding.`;

export const MINUTE_ESTIMATE_NOTE =
  'Estimates use raw minutes. Actual invoicing rounds on 12/6 increments, so short calls bill slightly higher than the straight-line figure.';

export const RATE_DISCLAIMER =
  'Rates shown are standard pricing and are confirmed against destination mix at quote.';

/**
 * Wording used in the footer of the legal documents, where no rates appear on
 * the page itself.
 */
export const RATE_DISCLAIMER_ELSEWHERE =
  'Rates shown elsewhere on this site are standard pricing and are confirmed against destination mix at quote.';
