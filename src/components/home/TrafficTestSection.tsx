import React, { FormEvent, useState } from 'react';
import { FaArrowRight, FaPhone } from 'react-icons/fa';

type FormValues = {
  name: string;
  company: string;
  phone: string;
  email: string;
  dialer: string;
  dials: string;
  currentCarrier: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof Pick<FormValues, 'name' | 'company' | 'phone' | 'email'>, string>>;
type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

const initialValues: FormValues = {
  name: '',
  company: '',
  phone: '',
  email: '',
  dialer: 'VICIdial',
  dials: '10,000–50,000',
  currentCarrier: '',
  message: '',
};

const challengeSteps = [
  ['01', 'Send a controlled slice', 'Route one campaign or a defined share of traffic from VICIdial through PVN.'],
  ['02', 'Keep your current carrier', 'Put the provider you already use inside the carrier order instead of replacing it.'],
  ['03', 'Compare what completed', 'See what the first route completed versus what the full carrier order completed.'],
];

const inputClass = 'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-primary-950 placeholder:text-gray-400';

const TrafficTestSection: React.FC = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (field in fieldErrors) {
      setFieldErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const validate = () => {
    const errors: FieldErrors = {};
    if (!values.name.trim()) errors.name = 'Name is required.';
    if (!values.company.trim()) errors.company = 'Company is required.';
    if (!values.phone.trim()) errors.phone = 'Phone is required.';
    if (!values.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      errors.email = 'Enter a valid email address.';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setSubmitState('submitting');
    setSubmitMessage('');

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch('/api/traffic-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          website: String(formData.get('website') || ''),
          xxTrustedFormCertUrl: String(formData.get('xxTrustedFormCertUrl') || ''),
        }),
      });

      const payload = await response.json();
      if (!response.ok || !payload.success) {
        throw new Error(payload.message || 'Unable to submit the request.');
      }

      setSubmitState('success');
    } catch (error) {
      setSubmitState('error');
      setSubmitMessage(error instanceof Error ? error.message : 'Unable to submit the request.');
    }
  };

  return (
    <section id="traffic-test" className="scroll-mt-28 bg-primary-950 py-20 text-white md:py-24">
      <div className="container-custom">
        <div className="grid items-start gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-20">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-300">The traffic test</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.025em] md:text-[52px]">
              Put your current route to the test.
            </h2>
            <p className="mt-6 text-xl leading-[1.65] text-primary-100">
              Keep the carrier you already use. Send PVN one campaign or a slice of traffic. Then compare what your first route completed with what the full carrier order completed.
            </p>

            <div className="mt-9 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              {challengeSteps.map(([num, title, copy], index) => (
                <div key={num} className={`grid gap-4 p-6 sm:grid-cols-[54px_1fr] ${index !== challengeSteps.length - 1 ? 'border-b border-white/10' : ''}`}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-500 text-sm font-bold text-white">{num}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-primary-200">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 text-gray-800 shadow-[0_24px_70px_rgba(0,0,0,0.25)] md:p-8">
            {submitState === 'success' ? (
              <div className="py-10">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary-700">Request received</p>
                <h3 className="mt-3 text-3xl font-bold text-primary-950">Thanks. We&apos;ll call you to set up the test.</h3>
                <p className="mt-5 leading-relaxed text-gray-600">If you want to reach us first, call the number below.</p>
                <a href="tel:+19045128487" className="mt-6 inline-flex items-center rounded-xl bg-primary-950 px-6 py-3.5 font-bold text-white hover:bg-primary-900">
                  <FaPhone className="mr-3" /> (904) 512-8487
                </a>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary-700">Request a traffic test</p>
                  <h3 className="mt-2 text-2xl font-bold text-primary-950">Tell us what you&apos;re running.</h3>
                </div>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="traffic-name" className="text-sm font-bold text-primary-950">Name *</label>
                    <input id="traffic-name" name="name" autoComplete="name" value={values.name} onChange={(e) => update('name', e.target.value)} className={`${inputClass} mt-2`} aria-invalid={Boolean(fieldErrors.name)} />
                    {fieldErrors.name && <p className="mt-1.5 text-xs font-semibold text-red-600">{fieldErrors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="traffic-company" className="text-sm font-bold text-primary-950">Company *</label>
                    <input id="traffic-company" name="company" autoComplete="organization" value={values.company} onChange={(e) => update('company', e.target.value)} className={`${inputClass} mt-2`} aria-invalid={Boolean(fieldErrors.company)} />
                    {fieldErrors.company && <p className="mt-1.5 text-xs font-semibold text-red-600">{fieldErrors.company}</p>}
                  </div>
                  <div>
                    <label htmlFor="traffic-phone" className="text-sm font-bold text-primary-950">Phone *</label>
                    <input id="traffic-phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={(e) => update('phone', e.target.value)} className={`${inputClass} mt-2`} aria-invalid={Boolean(fieldErrors.phone)} />
                    {fieldErrors.phone && <p className="mt-1.5 text-xs font-semibold text-red-600">{fieldErrors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="traffic-email" className="text-sm font-bold text-primary-950">Email *</label>
                    <input id="traffic-email" name="email" type="email" autoComplete="email" value={values.email} onChange={(e) => update('email', e.target.value)} className={`${inputClass} mt-2`} aria-invalid={Boolean(fieldErrors.email)} />
                    {fieldErrors.email && <p className="mt-1.5 text-xs font-semibold text-red-600">{fieldErrors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="traffic-dialer" className="text-sm font-bold text-primary-950">Dialer</label>
                    <select id="traffic-dialer" name="dialer" value={values.dialer} onChange={(e) => update('dialer', e.target.value)} className={`${inputClass} mt-2`}>
                      <option>VICIdial</option>
                      <option>Other ViciDial-based</option>
                      <option>Other dialer</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="traffic-dials" className="text-sm font-bold text-primary-950">Outbound dials per day</label>
                    <select id="traffic-dials" name="dials" value={values.dials} onChange={(e) => update('dials', e.target.value)} className={`${inputClass} mt-2`}>
                      <option>Under 10,000</option>
                      <option>10,000–50,000</option>
                      <option>50,000–250,000</option>
                      <option>250,000+</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="traffic-carrier" className="text-sm font-bold text-primary-950">Current carrier <span className="font-normal text-gray-500">(optional)</span></label>
                    <input id="traffic-carrier" name="currentCarrier" value={values.currentCarrier} onChange={(e) => update('currentCarrier', e.target.value)} className={`${inputClass} mt-2`} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="traffic-message" className="text-sm font-bold text-primary-950">Anything we should know <span className="font-normal text-gray-500">(optional)</span></label>
                    <textarea id="traffic-message" name="message" rows={4} value={values.message} onChange={(e) => update('message', e.target.value)} className={`${inputClass} mt-2 resize-y`} />
                  </div>
                </div>

                <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="traffic-website">Website</label>
                  <input id="traffic-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <input type="hidden" name="xxTrustedFormCertUrl" />

                {submitState === 'error' && (
                  <p className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700" role="alert">
                    {submitMessage} Call <a href="tel:+19045128487" className="underline">(904) 512-8487</a> if you need us now.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitState === 'submitting'}
                  className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-secondary-600 px-7 py-4 font-bold text-white transition-colors hover:bg-secondary-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitState === 'submitting' ? (
                    <><span className="mr-3 h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />Submitting…</>
                  ) : (
                    <>Request My Traffic Test <FaArrowRight className="ml-3" /></>
                  )}
                </button>

                <p className="mt-4 text-center text-sm text-gray-500">
                  Or call <a href="tel:+19045128487" className="font-bold text-primary-800 hover:text-primary-950">(904) 512-8487</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrafficTestSection;
