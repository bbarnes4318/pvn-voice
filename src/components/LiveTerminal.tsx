import React, { useEffect, useRef, useState } from 'react';

export interface LiveTerminalProps {
  /** Label in the terminal's header bar. */
  label: string;
  /** Match sources cited on a DECLINE line. */
  sources?: string[];
  /** How many lines the terminal holds. */
  lines?: number;
  /** Share of attempts that are declined, 0–1. */
  blockRate?: number;
  /** Milliseconds between new lines. */
  intervalMs?: number;
  /** Footer facts rendered under the stream. */
  footer?: { label: string; value: string }[];
  /** Show the running count of declined calls. */
  showBlockedCount?: boolean;
  /**
   * `solid` is the ink card used on light bands; `inset` is the translucent
   * card used inside a navy band.
   */
  surface?: 'solid' | 'inset';
  className?: string;
}

const NPA = ['904', '865', '407', '813', '770', '214', '602', '216', '704', '480', '312', '919', '615', '503', '801'];

/**
 * Module-level so the default is a stable reference. Inlining this as a default
 * parameter would hand the effect a new array on every render and re-run it
 * each time.
 */
const DEFAULT_SOURCES = ['LITIGATOR-DB', 'SERIAL-FILER', 'FED-DOCKET', 'DNC-COMPLAINT'];

const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

interface Line {
  id: number;
  time: string;
  number: string;
  blocked: boolean;
  detail: string;
}

/**
 * Dark card streaming monospace PASS / DECLINE lines from the suppression gate.
 * One parameterized component, used on Home, Call Centers and Dialer Systems
 * with different feeds.
 *
 * Lines are generated on the client only: the markup is identical on the server
 * and on first paint, so the randomized stream cannot cause a hydration
 * mismatch.
 */
const LiveTerminal: React.FC<LiveTerminalProps> = ({
  label,
  sources = DEFAULT_SOURCES,
  lines = 10,
  blockRate = 0.18,
  intervalMs = 1300,
  footer = [],
  showBlockedCount = true,
  surface = 'solid',
  className = '',
}) => {
  const [stream, setStream] = useState<Line[]>([]);
  const [blocked, setBlocked] = useState(0);
  const nextId = useRef(0);
  const sourceKey = sources.join('|');

  useEffect(() => {
    const makeLine = (): Line => {
      const now = new Date();
      const number = `${NPA[Math.floor(Math.random() * NPA.length)]}-${
        200 + Math.floor(Math.random() * 700)
      }-${pad(Math.floor(Math.random() * 100))}${pad(Math.floor(Math.random() * 100))}`;
      const isBlock = Math.random() < blockRate;

      return {
        id: nextId.current++,
        time: `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`,
        number,
        blocked: isBlock,
        detail: isBlock
          ? `match:${sources[Math.floor(Math.random() * sources.length)]}`
          : `0.${Math.floor(Math.random() * 7) + 2}ms`,
      };
    };

    const seed = Array.from({ length: lines }, makeLine);
    setStream(seed);
    setBlocked(seed.filter((line) => line.blocked).length);

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const timer = window.setInterval(() => {
      const line = makeLine();
      if (line.blocked) setBlocked((current) => current + 1);
      setStream((current) => [line, ...current].slice(0, lines));
    }, intervalMs);

    return () => window.clearInterval(timer);
    // `sourceKey` rather than `sources` so a caller passing an inline array
    // literal does not re-seed the stream on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockRate, intervalMs, lines, sourceKey]);

  const shell =
    surface === 'inset'
      ? 'bg-black/25 border border-white/[.14]'
      : 'bg-ink border border-white/[.14]';

  return (
    <div className={`${shell} rounded-md overflow-hidden ${className}`}>
      <div className="px-[18px] py-3 border-b border-white/[.12] font-data text-[11px] uppercase tracking-[.14em] text-[#8FB2C7] flex items-center gap-2.5">
        <span className="w-[7px] h-[7px] rounded-full bg-attest pvn-pulse" aria-hidden="true" />
        {label}
      </div>

      <div
        className="px-[18px] py-3.5 font-data text-[11px] sm:text-[12.5px] leading-[1.9] min-h-[220px] text-[#8FB2C7]"
        aria-live="off"
      >
        {stream.map((line) => (
          <div
            key={line.id}
            className={`pvn-slide whitespace-nowrap overflow-hidden text-ellipsis ${
              line.blocked ? 'text-[#FF8A7D]' : ''
            }`}
          >
            {line.time}&nbsp;&nbsp;INVITE {line.number}&nbsp;&nbsp;&rarr;{' '}
            <b className={`font-semibold ${line.blocked ? '' : 'text-attest'}`}>
              {line.blocked ? '603 DECLINE' : 'PASS'}
            </b>
            &nbsp;&nbsp;{line.detail}
          </div>
        ))}
      </div>

      {(showBlockedCount || footer.length > 0) && (
        <div className="px-[18px] py-3 border-t border-white/[.12] font-data text-[11.5px] text-[#6D8CA1] flex flex-wrap gap-y-1.5 gap-x-5">
          {showBlockedCount && (
            <span>
              Blocked today: <b className="text-white font-semibold">{blocked.toLocaleString('en-US')}</b>
            </span>
          )}
          {footer.map((item) => (
            <span key={item.label}>
              {item.label}: <b className="text-white font-semibold">{item.value}</b>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default LiveTerminal;
