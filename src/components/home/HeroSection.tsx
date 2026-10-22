import React, { useEffect, useMemo, useState } from 'react';
import { FaArrowRight, FaCheckCircle, FaServer } from 'react-icons/fa';

type ScenarioKey = 'recovered' | 'stopped';

type Attempt = {
  route: string;
  code: string;
  outcome: string;
  tone: 'amber' | 'green' | 'gray';
};

type Scenario = {
  label: string;
  attempts: Attempt[];
  result: string;
};

const scenarios: Record<ScenarioKey, Scenario> = {
  recovered: {
    label: 'Carrier failure → recovered',
    attempts: [
      { route: 'PVN Premium', code: '503 Service Unavailable', outcome: 'TRYING NEXT', tone: 'amber' },
      { route: 'Your Carrier', code: '408 Request Timeout', outcome: 'TRYING NEXT', tone: 'amber' },
      { route: 'PVN Standard', code: '200 OK', outcome: 'ANSWERED', tone: 'green' },
    ],
    result: 'Answered',
  },
  stopped: {
    label: 'Person said no → stops',
    attempts: [
      { route: 'PVN Premium', code: '486 Busy Here', outcome: 'STOPPED', tone: 'gray' },
    ],
    result: 'Busy, not retried',
  },
};

const proofChecks = ['Keep VICIdial', 'Keep your carrier', 'Add backup carriers', 'See every attempt'];

const toneClasses = {
  amber: {
    border: 'border-amber-300/20 bg-amber-300/[0.04]',
    dot: 'bg-amber-300',
    badge: 'bg-amber-300/10 text-amber-200',
    code: 'text-primary-300',
  },
  green: {
    border: 'border-success-400/25 bg-success-500/[0.08]',
    dot: 'bg-success-400',
    badge: 'bg-success-500/15 text-success-100',
    code: 'text-success-100',
  },
  gray: {
    border: 'border-white/10 bg-white/[0.035]',
    dot: 'bg-primary-300',
    badge: 'bg-white/[0.08] text-primary-200',
    code: 'text-primary-300',
  },
};

const HeroSection: React.FC = () => {
  const [scenarioKey, setScenarioKey] = useState<ScenarioKey>('recovered');
  const [visibleSteps, setVisibleSteps] = useState(1);
  const [autoplay, setAutoplay] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const scenario = scenarios[scenarioKey];

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener?.('change', sync);
    return () => media.removeEventListener?.('change', sync);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setScenarioKey('recovered');
      setVisibleSteps(scenarios.recovered.attempts.length);
      return;
    }

    if (!autoplay) return;

    const delay = visibleSteps < scenario.attempts.length ? 2200 : 1500;
    const timer = window.setTimeout(() => {
      if (visibleSteps < scenario.attempts.length) {
        setVisibleSteps((steps) => steps + 1);
      } else {
        const nextKey: ScenarioKey = scenarioKey === 'recovered' ? 'stopped' : 'recovered';
        setScenarioKey(nextKey);
        setVisibleSteps(1);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [autoplay, reducedMotion, scenario.attempts.length, scenarioKey, visibleSteps]);

  const visibleAttempts = useMemo(
    () => scenario.attempts.slice(0, reducedMotion ? scenario.attempts.length : visibleSteps),
    [reducedMotion, scenario.attempts, visibleSteps]
  );

  const selectScenario = (key: ScenarioKey) => {
    setScenarioKey(key);
    setAutoplay(false);
    setVisibleSteps(scenarios[key].attempts.length);
  };

  const progress = reducedMotion ? 100 : Math.max(18, Math.min(100, (visibleSteps / scenario.attempts.length) * 100));

  return (
    <section className="relative overflow-hidden bg-primary-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(52,173,121,0.13),transparent_28%),linear-gradient(135deg,#14233d_0%,#0f1d34_55%,#0a1426_100%)]" />
      <div className="container-custom relative py-12 md:py-16 lg:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 xl:gap-20">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary-400/25 bg-secondary-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-secondary-200">
              <span className="h-2 w-2 rounded-full bg-secondary-400" />
              Carrier routing for VICIdial call centers
            </div>

            <h1 className="mt-7 max-w-3xl font-display text-[46px] leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-[64px] xl:text-[68px]">
              How Many Calls Are You Losing?
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-[1.6] text-primary-100 md:text-[22px]">
              Your dialer sends each call to one carrier. When that carrier fails the call, it&apos;s gone. PVN sends the same call to your next carrier automatically, so a carrier problem doesn&apos;t cost you the conversation. You keep VICIdial and the carrier you already use.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/#traffic-test"
                className="inline-flex items-center justify-center rounded-xl bg-secondary-500 px-7 py-4 text-base font-bold text-white shadow-[0_14px_32px_rgba(40,156,106,0.28)] transition-all hover:-translate-y-0.5 hover:bg-secondary-400"
              >
                Test My Traffic <FaArrowRight className="ml-3" />
              </a>
              <a
                href="/#how-it-works"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] px-7 py-4 text-base font-bold text-white transition-colors hover:bg-white/[0.09]"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-white/10 pt-6 sm:flex sm:flex-wrap">
              {proofChecks.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-semibold text-primary-200">
                  <FaCheckCircle className="flex-shrink-0 text-secondary-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-1">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#13243f] shadow-[0_24px_70px_rgba(0,0,0,0.32)]">
              <div className="border-b border-white/10 px-5 py-4 md:px-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-300">Illustrative route trace</p>
                <h2 className="mt-1 text-xl font-bold md:text-2xl">One call. More than one carrier.</h2>
                <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Route trace scenarios">
                  {(Object.keys(scenarios) as ScenarioKey[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      role="tab"
                      aria-selected={scenarioKey === key}
                      onClick={() => selectScenario(key)}
                      className={`rounded-full border px-3 py-1.5 text-[11px] font-bold transition-colors ${
                        scenarioKey === key
                          ? 'border-secondary-400/40 bg-secondary-400/15 text-secondary-200'
                          : 'border-white/10 bg-white/[0.03] text-primary-300 hover:bg-white/[0.07]'
                      }`}
                    >
                      {scenarios[key].label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-5 md:p-6">
                <div className="flex items-center justify-between rounded-xl border border-primary-400/20 bg-primary-950/70 px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                      <FaServer />
                    </div>
                    <div>
                      <p className="font-bold">VICIdial → PVN</p>
                      <p className="mt-0.5 text-sm text-primary-300">Call received from VICIdial</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-success-200">RECEIVED</span>
                </div>

                <div className="relative ml-5 py-4 pl-5">
                  <div className="absolute bottom-6 left-[5px] top-6 w-px bg-white/10" />
                  <div
                    className="absolute left-[5px] top-6 w-px bg-secondary-400/60 transition-[height] duration-700"
                    style={{ height: `calc(${progress}% - 24px)` }}
                    aria-hidden="true"
                  />
                  <div className="space-y-3">
                    {visibleAttempts.map((attempt, index) => {
                      const tone = toneClasses[attempt.tone];
                      return (
                        <div
                          key={`${scenarioKey}-${attempt.route}-${index}`}
                          className={`relative rounded-xl border p-4 ${tone.border}`}
                          style={{ animation: reducedMotion ? 'none' : 'routeStepIn 450ms ease-out both' }}
                        >
                          <span className={`absolute -left-[26px] top-5 h-2.5 w-2.5 rounded-full ${tone.dot}`} />
                          <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary-300">Attempt {index + 1}</p>
                              <p className="mt-1 font-bold text-white">{attempt.route}</p>
                              <p className={`mt-1 text-sm ${tone.code}`}>{attempt.code}</p>
                            </div>
                            <span className={`flex-shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${tone.badge}`}>
                              {attempt.outcome}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-3 divide-x divide-white/10 rounded-xl border border-white/10 bg-white/[0.035]">
                  {[
                    ['Dialer handoffs', '1'],
                    ['Carrier attempts', String(scenario.attempts.length)],
                    ['Result', scenario.result],
                  ].map(([label, value]) => (
                    <div key={label} className="min-w-0 px-3 py-3 md:px-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary-300">{label}</p>
                      <p className="mt-1 truncate text-sm font-bold text-white" title={value}>{value}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-primary-300">Illustrative route trace. Actual outcomes vary by traffic, destination and carrier conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes routeStepIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
