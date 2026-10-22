import React, { useMemo, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

type CalculatorInputs = {
  dials: number;
  failPercent: number;
  recoverPercent: number;
  conversionPercent: number;
  value: number;
  days: number;
};

type FieldConfig = {
  key: keyof CalculatorInputs;
  label: string;
  example: string;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  prefix?: string;
};

const fields: FieldConfig[] = [
  { key: 'dials', label: 'Outbound dials per day', example: '50,000', min: 1000, max: 500000, step: 1000 },
  { key: 'failPercent', label: 'Share of attempts your carrier fails with an error', example: '3%', min: 0, max: 20, step: 0.1, suffix: '%' },
  { key: 'recoverPercent', label: 'Share of those a backup carrier completes', example: '40%', min: 0, max: 100, step: 1, suffix: '%' },
  { key: 'conversionPercent', label: 'Answered calls that become a sale or billable transfer', example: '2%', min: 0, max: 50, step: 0.1, suffix: '%' },
  { key: 'value', label: 'Value of one sale or billable transfer', example: '$40', min: 1, max: 1000, step: 1, prefix: '$' },
  { key: 'days', label: 'Working days per month', example: '22', min: 1, max: 31, step: 1 },
];

const wholeNumber = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

const TrafficCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    dials: 50000,
    failPercent: 3,
    recoverPercent: 40,
    conversionPercent: 2,
    value: 40,
    days: 22,
  });

  const results = useMemo(() => {
    const dials = Math.max(0, inputs.dials || 0);
    const fail = Math.max(0, inputs.failPercent || 0) / 100;
    const recover = Math.max(0, inputs.recoverPercent || 0) / 100;
    const conversion = Math.max(0, inputs.conversionPercent || 0) / 100;
    const value = Math.max(0, inputs.value || 0);
    const days = Math.max(0, inputs.days || 0);

    const perDay = dials * fail * recover;
    const perMonth = perDay * days;
    const extra = perMonth * conversion;
    const revenue = extra * value;

    return { perDay, perMonth, extra, revenue };
  }, [inputs]);

  const updateValue = (key: keyof CalculatorInputs, rawValue: string) => {
    const value = Number(rawValue);
    setInputs((current) => ({ ...current, [key]: Number.isFinite(value) ? value : 0 }));
  };

  return (
    <section id="calculator" className="scroll-mt-28 bg-white py-20 md:py-24">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 xl:gap-20">
          <div>
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-700">Your numbers</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.025em] text-primary-950 md:text-[52px]">
                What does one failed route cost you each month?
              </h2>
              <p className="mt-5 text-lg leading-[1.7] text-gray-600">
                Change the example inputs to match your floor. The calculator shows what recovered calls could mean at your own volume and economics.
              </p>
            </div>

            <div className="mt-9 space-y-6">
              {fields.map((field) => (
                <div key={field.key}>
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <label htmlFor={`${field.key}-number`} className="max-w-xl text-sm font-bold leading-relaxed text-primary-950">
                      {field.label}
                    </label>
                    <span className="text-xs font-semibold text-gray-500">Example: {field.example}</span>
                  </div>
                  <div className="mt-2 grid grid-cols-[1fr_108px] items-center gap-4">
                    <input
                      id={`${field.key}-range`}
                      aria-label={`${field.label} slider`}
                      type="range"
                      min={field.min}
                      max={field.max}
                      step={field.step}
                      value={inputs[field.key]}
                      onChange={(event) => updateValue(field.key, event.target.value)}
                      className="w-full cursor-pointer accent-secondary-600"
                    />
                    <div className="relative">
                      {field.prefix && <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-500">{field.prefix}</span>}
                      <input
                        id={`${field.key}-number`}
                        type="number"
                        min={field.min}
                        max={field.max}
                        step={field.step}
                        value={inputs[field.key]}
                        onChange={(event) => updateValue(field.key, event.target.value)}
                        className={`w-full rounded-lg border border-gray-200 bg-white py-2.5 text-right text-sm font-bold tabular-nums text-primary-950 shadow-sm ${field.prefix ? 'pl-7' : 'pl-3'} ${field.suffix ? 'pr-7' : 'pr-3'}`}
                      />
                      {field.suffix && <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-500">{field.suffix}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-8">
            <div className="overflow-hidden rounded-2xl border border-primary-100 bg-[#f8fafc] shadow-[0_18px_50px_rgba(20,35,61,0.08)]">
              <div className="border-b border-gray-200 px-6 py-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary-700">Illustrative output from your inputs</p>
                <h3 className="mt-2 text-2xl font-bold text-primary-950">Potential recovery at this traffic level</h3>
              </div>

              <div className="divide-y divide-gray-200">
                {[
                  ['Calls recovered per day', wholeNumber.format(Math.round(results.perDay))],
                  ['Calls recovered per month', wholeNumber.format(Math.round(results.perMonth))],
                  ['Extra sales/transfers per month', wholeNumber.format(Math.round(results.extra))],
                  ['Revenue recovered per month', currency.format(Math.round(results.revenue))],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-end justify-between gap-5 px-6 py-5">
                    <p className="max-w-[58%] text-sm font-semibold leading-relaxed text-gray-600">{label}</p>
                    <p className="text-right font-display text-2xl font-bold tabular-nums tracking-tight text-primary-950 md:text-3xl">{value}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 bg-white px-6 py-5">
                <p className="text-sm leading-relaxed text-gray-600">
                  The calculator uses only the inputs you enter. The traffic test below measures the real failure and recovery rate on your own calls.
                </p>
                <a
                  href="/#traffic-test"
                  className="mt-5 inline-flex items-center rounded-xl bg-primary-950 px-6 py-3.5 font-bold text-white transition-colors hover:bg-primary-900"
                >
                  Measure it on my traffic <FaArrowRight className="ml-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrafficCalculator;
