import React, { useState } from 'react';
import {
  DID_MINIMUM,
  MINUTE_ESTIMATE_NOTE,
  PHONE_DISPLAY,
  PHONE_HREF,
  SEAT_ESTIMATE_NOTE,
  SEAT_INCLUDED_MINUTES,
  VOLUME_THRESHOLD_MIN_PER_DAY,
  count,
  estimateByMinute,
  estimateBySeat,
  money,
} from '../lib/pricing';

interface EstimatorProps {
  /** `seat` drops the mode toggle and shows only the per-seat calculator. */
  modes?: 'both' | 'seat';
  className?: string;
}

interface Row {
  label: string;
  value: string;
}

const Field: React.FC<{
  id: string;
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  current: number;
  onChange: (value: number) => void;
}> = ({ id, label, value, min, max, step, current, onChange }) => (
  <div className="mb-6 last:mb-0">
    <label
      htmlFor={id}
      className="flex justify-between items-baseline gap-3 font-data text-[11.5px] font-semibold uppercase tracking-[.12em] text-slate"
    >
      {label}
      <output htmlFor={id} className="font-data text-[17px] font-semibold text-ink">
        {value}
      </output>
    </label>
    <input
      id={id}
      type="range"
      min={min}
      max={max}
      step={step}
      value={current}
      onChange={(event) => onChange(Number(event.target.value))}
      className="w-full mt-3 h-[22px] accent-navy"
    />
  </div>
);

/**
 * Seat / minute cost estimator. All arithmetic comes from lib/pricing so the
 * result is identical on Home, Pricing and Call Centers.
 */
const Estimator: React.FC<EstimatorProps> = ({ modes = 'both', className = '' }) => {
  const [mode, setMode] = useState<'seat' | 'min'>('seat');

  const [agents, setAgents] = useState(25);
  const [dials, setDials] = useState(1000);
  const [seatDays, setSeatDays] = useState(22);

  const [minutes, setMinutes] = useState(40000);
  const [split, setSplit] = useState(85);
  const [dids, setDids] = useState(DID_MINIMUM);
  const [minuteDays, setMinuteDays] = useState(22);

  const showToggle = modes === 'both';
  const activeMode = showToggle ? mode : 'seat';

  let total: string;
  let tier: string;
  let rows: Row[];
  let note: string;

  if (activeMode === 'seat') {
    const estimate = estimateBySeat(agents, dials, seatDays);
    total = money(estimate.monthlyTotal);
    tier = 'Per-seat rate';
    note = SEAT_ESTIMATE_NOTE;
    rows = [
      { label: 'Seats', value: count(estimate.agents) },
      {
        label: 'Billed minutes / agent / day',
        value: `${count(Math.round(estimate.billedMinutesPerAgentDay))} of ${SEAT_INCLUDED_MINUTES} incl.`,
      },
      {
        label: 'Overage / agent / day',
        value:
          estimate.overageCostPerAgentDay > 0 ? money(estimate.overageCostPerAgentDay, 2) : 'none',
      },
      { label: 'Effective per agent per day', value: money(estimate.effectivePerAgentDay, 2) },
    ];
  } else {
    const estimate = estimateByMinute(minutes, split, dids, minuteDays);
    total = money(estimate.monthlyTotal);
    tier = estimate.isVolume
      ? `Volume rate — ${count(VOLUME_THRESHOLD_MIN_PER_DAY)}+ min/day`
      : 'Standard rate';
    note = MINUTE_ESTIMATE_NOTE;
    rows = [
      {
        label: 'Outbound',
        value: `${money(estimate.outboundCost)}  (${count(Math.round(estimate.outboundMinutes))} min)`,
      },
      {
        label: 'Inbound',
        value: `${money(estimate.inboundCost)}  (${count(Math.round(estimate.inboundMinutes))} min)`,
      },
      { label: 'DIDs', value: money(estimate.didCost) },
      { label: 'Effective blended', value: `$${estimate.effectiveBlended.toFixed(4)}/min` },
    ];
  }

  return (
    <div className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,.85fr)] gap-5 lg:gap-10 items-start">
        <div className="bg-card border border-rule rounded-md p-5 sm:p-[30px]">
          {showToggle && (
            <div className="flex mb-6 border border-rule rounded-[3px] overflow-hidden" role="group" aria-label="Estimate mode">
              <button
                type="button"
                aria-pressed={mode === 'seat'}
                onClick={() => setMode('seat')}
                className={`flex-1 font-data text-xs font-semibold uppercase tracking-[.1em] px-2 py-3 ${
                  mode === 'seat' ? 'bg-navy text-white' : 'bg-[#FAFCFD] text-slate'
                }`}
              >
                By seat
              </button>
              <button
                type="button"
                aria-pressed={mode === 'min'}
                onClick={() => setMode('min')}
                className={`flex-1 font-data text-xs font-semibold uppercase tracking-[.1em] px-2 py-3 ${
                  mode === 'min' ? 'bg-navy text-white' : 'bg-[#FAFCFD] text-slate'
                }`}
              >
                By minute
              </button>
            </div>
          )}

          {activeMode === 'seat' ? (
            <>
              <Field
                id="agents"
                label="Agents on the floor"
                value={count(agents)}
                min={1}
                max={500}
                step={1}
                current={agents}
                onChange={setAgents}
              />
              <Field
                id="dials"
                label="Dials per agent per day"
                value={count(dials)}
                min={200}
                max={3000}
                step={50}
                current={dials}
                onChange={setDials}
              />
              <Field
                id="sdays"
                label="Dialing days per month"
                value={`${seatDays}`}
                min={15}
                max={31}
                step={1}
                current={seatDays}
                onChange={setSeatDays}
              />
            </>
          ) : (
            <>
              <Field
                id="mins"
                label="Minutes per day"
                value={count(minutes)}
                min={2000}
                max={2000000}
                step={2000}
                current={minutes}
                onChange={setMinutes}
              />
              <Field
                id="split"
                label="Share outbound"
                value={`${split}%`}
                min={0}
                max={100}
                step={5}
                current={split}
                onChange={setSplit}
              />
              <Field
                id="dids"
                label="DIDs in rotation"
                value={count(dids)}
                min={100}
                max={20000}
                step={100}
                current={dids}
                onChange={setDids}
              />
              <Field
                id="days"
                label="Dialing days per month"
                value={`${minuteDays}`}
                min={15}
                max={31}
                step={1}
                current={minuteDays}
                onChange={setMinuteDays}
              />
            </>
          )}
        </div>

        <div className="bg-ink text-white rounded-md p-6 sm:p-[30px]">
          <p className="font-data text-[11px] uppercase tracking-[.13em] text-[#8FB2C7]">
            Estimated monthly
          </p>
          <p className="font-display font-extrabold text-[clamp(38px,5vw,54px)] tracking-[-.04em] leading-none mt-1.5 mb-1">
            {total}
          </p>
          <span className="inline-block mt-4 font-data text-[11.5px] font-semibold uppercase tracking-[.1em] text-attest border border-attest/40 rounded-sm px-2.5 py-1">
            {tier}
          </span>

          <div className="mt-5">
            {rows.map((row) => (
              <p
                key={row.label}
                className="flex justify-between gap-3.5 font-data text-[13px] text-[#A9C6D6] py-2.5 border-b border-white/[.09] last:border-b-0"
              >
                <span>{row.label}</span>
                <b className="text-white font-semibold text-right">{row.value}</b>
              </p>
            ))}
          </div>

          <a href={PHONE_HREF} className="btn-attest mt-6 w-full">
            Confirm this rate &mdash; {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <p className="mt-[18px] text-sm text-slate">{note}</p>
    </div>
  );
};

export default Estimator;
