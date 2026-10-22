import React, { useEffect, useMemo, useState } from 'react';
import { FaBolt, FaChartLine, FaDollarSign, FaPlug, FaRoute, FaSlidersH } from 'react-icons/fa';

const routeRows = [
  ['PVN Premium', '48,210', '6,412', '13.3%', '212', '2.1s', 'Primary'],
  ['Your Carrier', '3,960', '488', '12.3%', '61', '2.6s', 'BYOC'],
  ['PVN Standard', '1,214', '139', '11.4%', '18', '3.0s', 'Failover'],
];

const events = [
  'FAILOVER premium -> your-carrier  code=503',
  'ANSWERED your-carrier  pdd=2.4s',
  'STOPPED premium  code=486 busy, not retried',
  'FAILOVER your-carrier -> standard  code=408',
];

const controlPoints = [
  ['Reorder routes', FaRoute],
  ['Pull a route out', FaSlidersH],
  ['See every response code', FaBolt],
  ['Compare answer rates', FaChartLine],
  ['Bring your own carrier', FaPlug],
  ['See per-route rates', FaDollarSign],
];

const MissionControlSection: React.FC = () => {
  const [eventOffset, setEventOffset] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener?.('change', sync);
    return () => media.removeEventListener?.('change', sync);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(() => setEventOffset((offset) => (offset + 1) % events.length), 3000);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  const eventLines = useMemo(
    () => events.map((_, index) => events[(index + eventOffset) % events.length]),
    [eventOffset]
  );

  return (
    <section id="platform" className="scroll-mt-28 bg-[#f7f9fc] py-20 md:py-24">
      <div className="container-custom">
        <div className="grid items-start gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 xl:gap-20">
          <div className="min-w-0 overflow-hidden rounded-2xl border border-primary-900/10 bg-primary-950 text-white shadow-[0_18px_55px_rgba(20,35,61,0.14)]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 md:px-6">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-300">Mission Control</p>
                <h3 className="mt-1 text-xl font-bold">Route performance after VICIdial.</h3>
              </div>
              <span className="rounded-full border border-success-400/20 bg-success-500/10 px-3 py-1 text-[10px] font-bold text-success-200">ILLUSTRATIVE</span>
            </div>

            <div className="p-5 md:p-6">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ['Attempts today', '53,384'],
                  ['Answered', '7,039'],
                  ['Recovered by failover', '627'],
                  ['5-min answer rate', '13.2%'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-primary-300">{label}</p>
                    <p className="mt-2 font-display text-xl font-bold tabular-nums text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
                <table className="min-w-[760px] w-full border-collapse text-left text-sm">
                  <thead className="bg-white/[0.04] text-[10px] uppercase tracking-[0.1em] text-primary-300">
                    <tr>
                      {['Route', 'Attempts', 'Answered', 'Answer rate', '503s', 'Avg PDD', 'Role'].map((heading) => (
                        <th key={heading} className="whitespace-nowrap px-4 py-3 font-bold">{heading}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {routeRows.map((row, index) => (
                      <tr key={row[0]} className={index !== routeRows.length - 1 ? 'border-b border-white/10' : ''}>
                        {row.map((value, cellIndex) => (
                          <td key={`${row[0]}-${cellIndex}`} className={`whitespace-nowrap px-4 py-4 ${cellIndex === 0 ? 'font-bold text-white' : 'text-primary-200'}`}>
                            {cellIndex === 0 ? <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-success-400" />{value}</span> : value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-black/10 p-4 font-mono text-xs leading-6 text-primary-200">
                {eventLines.map((line, index) => (
                  <div key={`${line}-${index}`} className="truncate">{line}</div>
                ))}
              </div>

              <p className="mt-3 text-xs text-primary-300">Illustrative data.</p>
            </div>
          </div>

          <div className="max-w-xl lg:pt-2">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-700">Route visibility</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.025em] text-primary-950 md:text-[50px]">
              See which routes are earning their place.
            </h2>
            <p className="mt-6 text-xl leading-[1.65] text-gray-700">
              PVN records every carrier attempt with the response code, carrier, ring time and post-dial delay, then shows live route performance so your team can see what is carrying traffic and what is failing it.
            </p>

            <div className="mt-7 border-l-4 border-secondary-500 pl-5">
              <p className="text-lg font-bold leading-relaxed text-primary-950">No tickets and no waiting on a carrier to explain your own traffic.</p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {controlPoints.map(([label, Icon]) => {
                const ControlIcon = Icon as React.ComponentType<{ className?: string }>;
                return (
                  <div key={label as string} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3.5">
                    <ControlIcon className="flex-shrink-0 text-secondary-600" />
                    <span className="text-sm font-bold text-primary-950">{label as string}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionControlSection;
