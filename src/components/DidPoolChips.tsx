import React, { useEffect, useState } from 'react';

const NPA = ['904', '865', '407', '813', '770', '214', '602', '216', '704', '480', '312', '919'];

const DEFAULT_POOL = [
  '(904) 512-0118',
  '(407) 226-4471',
  '(813) 559-0932',
  '(770) 318-6650',
  '(214) 907-2214',
  '(216) 445-8073',
];

type ChipState = 'clean' | 'tagged' | 'fresh';

interface Chip {
  number: string;
  state: ChipState;
}

const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

const freshNumber = () =>
  `(${NPA[Math.floor(Math.random() * NPA.length)]}) ${200 + Math.floor(Math.random() * 700)}-${pad(
    Math.floor(Math.random() * 100)
  )}${pad(Math.floor(Math.random() * 100))}`;

interface DidPoolChipsProps {
  pool?: string[];
  /** Rendered on a navy band rather than a light one. */
  dark?: boolean;
  className?: string;
}

/**
 * The DID pool board: a grid of numbers cycling clean → tagged → replaced,
 * with a log line narrating each swap. Shared by Home and Call Centers.
 */
const DidPoolChips: React.FC<DidPoolChipsProps> = ({ pool = DEFAULT_POOL, dark, className = '' }) => {
  const [chips, setChips] = useState<Chip[]>(() =>
    pool.map((number) => ({ number, state: 'clean' as ChipState }))
  );
  const [log, setLog] = useState('All numbers clear.');
  const [status, setStatus] = useState('Monitoring');

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    let tagTimer: number;
    let clearTimer: number;

    const cycle = window.setInterval(() => {
      setChips((current) => {
        const candidates = current
          .map((chip, index) => ({ chip, index }))
          .filter(({ chip }) => chip.state === 'clean');
        if (candidates.length === 0) return current;

        const { index } = candidates[Math.floor(Math.random() * candidates.length)];
        const tagged = current[index].number;
        const next = [...current];
        next[index] = { ...next[index], state: 'tagged' };

        setStatus('Label detected');
        setLog(`> ${tagged} flagged by analytics provider — pulling from rotation`);

        tagTimer = window.setTimeout(() => {
          const replacement = freshNumber();
          setChips((inner) => {
            const updated = [...inner];
            updated[index] = { number: replacement, state: 'fresh' };
            return updated;
          });
          setStatus('Monitoring');
          setLog(`> ${replacement} provisioned and signed at A — campaign continues, no charge`);

          clearTimer = window.setTimeout(() => {
            setChips((inner) => {
              const updated = [...inner];
              updated[index] = { ...updated[index], state: 'clean' };
              return updated;
            });
          }, 4200);
        }, 2600);

        return next;
      });
    }, 7000);

    return () => {
      window.clearInterval(cycle);
      window.clearTimeout(tagTimer);
      window.clearTimeout(clearTimer);
    };
  }, []);

  const stateLabel: Record<ChipState, string> = {
    clean: 'Clean',
    tagged: 'Tagged',
    fresh: 'Replaced',
  };

  return (
    <div
      className={`rounded-md p-[22px] ${
        dark ? 'bg-white/[.04] border border-white/[.14]' : 'bg-card border border-rule'
      } ${className}`}
    >
      <div
        className={`flex justify-between items-center gap-3 mb-4 font-data text-[11px] uppercase tracking-[.13em] ${
          dark ? 'text-[#8FB2C7]' : 'text-slate'
        }`}
      >
        <span>DID pool &mdash; sample</span>
        <span>{status}</span>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-2.5">
        {chips.map((chip, index) => (
          <div
            key={`${chip.number}-${index}`}
            className={`font-data text-[13px] px-3 py-[11px] rounded-[3px] border flex items-center gap-2 transition-all duration-300 ${
              chip.state === 'tagged'
                ? 'border-flag bg-flag/[.06] text-flag'
                : chip.state === 'fresh'
                ? 'border-attest bg-attest/[.09]'
                : dark
                ? 'border-white/[.14] bg-white/[.06] text-[#CFE0EA]'
                : 'border-rule bg-[#FAFCFD]'
            }`}
          >
            <span
              className={`w-[7px] h-[7px] rounded-full shrink-0 ${
                chip.state === 'tagged' ? 'bg-flag' : 'bg-attest'
              }`}
              aria-hidden="true"
            />
            {chip.number}
            <span
              className={`ml-auto text-[10.5px] uppercase tracking-[.1em] ${
                chip.state === 'tagged'
                  ? 'text-flag'
                  : chip.state === 'fresh'
                  ? 'text-attest'
                  : dark
                  ? 'text-[#8FB2C7]'
                  : 'text-slate'
              }`}
            >
              {stateLabel[chip.state]}
            </span>
          </div>
        ))}
      </div>

      <p
        className={`mt-4 pt-3.5 font-data text-[12.5px] min-h-[42px] border-t ${
          dark ? 'border-white/[.14] text-[#8FB2C7]' : 'border-rule text-slate'
        }`}
      >
        {log}
      </p>
    </div>
  );
};

export default DidPoolChips;
