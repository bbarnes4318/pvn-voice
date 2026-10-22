import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCallButton from '../components/StickyCallButton';
import {
  FaArrowRight,
  FaBolt,
  FaChartLine,
  FaCheckCircle,
  FaDollarSign,
  FaExchangeAlt,
  FaLayerGroup,
  FaPhone,
  FaPlug,
  FaRoute,
  FaServer,
  FaShieldAlt,
  FaSlidersH,
  FaSitemap,
} from 'react-icons/fa';

const proofPoints = [
  'Keep your current carrier in the stack',
  'No VICIdial migration',
  'See route-by-route performance',
];

const platformCards = [
  {
    icon: FaLayerGroup,
    title: 'Multi-carrier waterfall',
    copy: 'One connection from VICIdial can reach multiple approved routes in the order you control.',
  },
  {
    icon: FaExchangeAlt,
    title: 'Intelligent failover',
    copy: 'Eligible carrier failures can continue to the next route instead of ending the opportunity immediately.',
  },
  {
    icon: FaPlug,
    title: 'Bring your own carrier',
    copy: 'Keep the carrier relationship you already have and place it anywhere inside your PVN route stack.',
  },
  {
    icon: FaSlidersH,
    title: 'Control the route order',
    copy: 'Move routes, disable weak paths and decide where your own carrier belongs without rewriting a dialplan.',
  },
  {
    icon: FaChartLine,
    title: 'See what is winning traffic',
    copy: 'Track answer rate, talk time, traffic share and route availability instead of relying on guesswork.',
  },
  {
    icon: FaShieldAlt,
    title: 'Authenticated outbound calling',
    copy: 'PVN supports STIR/SHAKEN signing in the outbound path for eligible, authorized caller IDs.',
  },
];

const callCenterFacts = [
  'VICIdial-friendly SIP connectivity',
  'Per-customer CPS and channel controls',
  'Gateway health checks and route availability',
  'Carrier-attempt SIP response visibility',
  'NPA and overlay-aware DID selection for authorized inventory',
  'Transparent route-level rates and billing increments',
];

const challengeSteps = [
  ['01', 'Send a controlled slice', 'Point one campaign or a defined portion of traffic from VICIdial to PVN.'],
  ['02', 'Keep your carrier', 'Put your current provider into the waterfall instead of replacing it.'],
  ['03', 'Compare the outcome', 'See what the first route completed versus what the full waterfall completed.'],
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Head>
        <title>VoIP Routing for VICIdial Call Centers | PVN Voice</title>
        <meta
          name="description"
          content="Give eligible outbound calls more than one carrier path. PVN Voice adds a multi-carrier routing layer behind VICIdial while letting you keep your current carrier."
        />
        <meta property="og:title" content="Before You Blame the Leads, Test the Route | PVN Voice" />
        <meta
          property="og:description"
          content="One VICIdial connection. Multiple carrier routes. Keep your existing provider and prove the difference with your own traffic."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo2.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <main className="flex-grow">
        <section className="relative overflow-hidden bg-primary-950 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-950 to-black" />
          <div className="absolute -top-40 -right-24 h-[520px] w-[520px] rounded-full bg-secondary-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary-500/10 blur-3xl" />

          <div className="container-custom relative py-16 md:py-24 lg:py-28">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-secondary-400/30 bg-secondary-400/10 px-4 py-2 text-xs md:text-sm font-bold tracking-[0.12em] text-secondary-200 uppercase mb-6">
                  <span className="h-2 w-2 rounded-full bg-secondary-400 animate-pulse" />
                  Built for high-volume VICIdial call centers
                </div>

                <h1 className="font-display text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.02] tracking-tight max-w-4xl">
                  How many potential conversations are dying at your
                  <span className="text-secondary-400"> first carrier?</span>
                </h1>

                <p className="mt-7 text-xl md:text-2xl leading-relaxed text-primary-100 max-w-3xl">
                  PVN sits between VICIdial and the carrier stack. One SIP connection goes in. Multiple routes sit behind it.
                  When an eligible route cannot complete the call, the next route gets a shot — while your current carrier can stay in the waterfall.
                </p>

                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-xl bg-secondary-500 px-7 py-4 text-lg font-bold text-white shadow-cta hover:bg-secondary-400 transition-colors"
                  >
                    Test My Traffic
                    <FaArrowRight className="ml-3" />
                  </a>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] px-7 py-4 text-lg font-semibold text-white hover:bg-white/[0.10] transition-colors"
                  >
                    See the Waterfall
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm md:text-base text-primary-200">
                  {proofPoints.map((item) => (
                    <span key={item} className="inline-flex items-center">
                      <FaCheckCircle className="mr-2 text-secondary-400" />
                      {item}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-sm text-primary-400">
                  Built for high-volume call centers in Pakistan and worldwide.
                </p>
              </div>

              <div className="lg:pl-2">
                <div className="overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.06] shadow-2xl backdrop-blur-sm">
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5">
                    <div>
                      <p className="text-xs font-bold tracking-[0.18em] text-primary-300 uppercase">Live routing example</p>
                      <h2 className="mt-1 text-2xl font-bold">One call. More than one chance.</h2>
                    </div>
                    <span className="rounded-full border border-success-400/20 bg-success-500/10 px-3 py-1 text-xs font-bold text-success-200">
                      ACTIVE
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="rounded-2xl border border-primary-400/20 bg-primary-950/70 p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center">
                          <div className="mr-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-600">
                            <FaServer />
                          </div>
                          <div>
                            <p className="font-bold">VICIdial → PVN</p>
                            <p className="text-sm text-primary-300">Call enters one PVN SIP connection</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-success-200">ACCEPTED</span>
                      </div>
                    </div>

                    <div className="ml-5 border-l border-white/15 pl-5 py-5 space-y-4">
                      <div className="relative rounded-2xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                        <span className="absolute -left-[27px] top-6 h-3 w-3 rounded-full bg-amber-300" />
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-bold text-primary-300">ATTEMPT 1</p>
                            <p className="mt-1 font-bold">Primary Route</p>
                            <p className="mt-1 text-sm text-primary-300">Eligible carrier failure</p>
                          </div>
                          <span className="rounded-full bg-amber-300/10 px-3 py-1 text-xs font-bold text-amber-200">CONTINUE</span>
                        </div>
                      </div>

                      <div className="relative rounded-2xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                        <span className="absolute -left-[27px] top-6 h-3 w-3 rounded-full bg-amber-300" />
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-bold text-primary-300">ATTEMPT 2</p>
                            <p className="mt-1 font-bold">Backup Route</p>
                            <p className="mt-1 text-sm text-primary-300">Eligible carrier failure</p>
                          </div>
                          <span className="rounded-full bg-amber-300/10 px-3 py-1 text-xs font-bold text-amber-200">CONTINUE</span>
                        </div>
                      </div>

                      <div className="relative rounded-2xl border border-success-400/30 bg-success-500/10 p-4 shadow-lg">
                        <span className="absolute -left-[27px] top-6 h-3 w-3 rounded-full bg-success-400" />
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-bold text-success-200">ATTEMPT 3</p>
                            <p className="mt-1 font-bold">Next Available Route</p>
                            <p className="mt-1 text-sm text-success-100">Call completes</p>
                          </div>
                          <span className="rounded-full bg-success-500/20 px-3 py-1 text-xs font-bold text-success-100">ANSWERED</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-secondary-400/20 bg-secondary-400/10 p-5">
                      <p className="text-xs font-bold tracking-[0.16em] text-secondary-200 uppercase">The point</p>
                      <p className="mt-2 text-xl font-bold text-white">The call was not over when the first route failed.</p>
                      <p className="mt-2 text-sm leading-relaxed text-primary-200">Illustrative routing example. Actual results vary by traffic, destination and carrier conditions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-waterfall" className="py-20 md:py-28 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-end">
              <div>
                <p className="text-sm font-bold tracking-[0.16em] text-secondary-700 uppercase">Before you blame the leads</p>
                <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-950">
                  Not every failed dial is a bad lead.
                </h2>
              </div>
              <div>
                <p className="text-2xl font-semibold leading-relaxed text-primary-900">
                  Sometimes your route simply ran out of chances.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-600 max-w-3xl">
                  You already paid for the data. You loaded the campaign. Your agents are ready to talk. If VICIdial points to one carrier and that route cannot complete an eligible attempt, the opportunity can die before an agent ever hears a hello.
                </p>
              </div>
            </div>

            <div id="how-it-works" className="mt-14 grid lg:grid-cols-2 gap-7">
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 md:p-9">
                <div className="flex items-start gap-4">
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-bold text-gray-700">ONE CARRIER</span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">One route owns the outcome.</h3>
                    <p className="mt-2 text-gray-600">This is how most VICIdial centers are configured today.</p>
                  </div>
                </div>

                <div className="mt-8 border-l-2 border-gray-300 pl-6 space-y-7">
                  {[
                    'VICIdial sends the call to Carrier A',
                    'Carrier A cannot complete an eligible attempt',
                    'There is no second carrier path',
                    'The attempt stops',
                  ].map((item, index) => (
                    <div key={item} className="relative">
                      <span className={`absolute -left-[31px] top-1 h-3 w-3 rounded-full ${index === 3 ? 'bg-red-500' : 'bg-gray-400'}`} />
                      <p className={`font-semibold ${index === 3 ? 'text-red-700' : 'text-gray-800'}`}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border-2 border-secondary-200 bg-secondary-50 p-7 md:p-9 shadow-lg">
                <div className="flex items-start gap-4">
                  <span className="rounded-full bg-secondary-600 px-3 py-1 text-xs font-bold text-white">PVN WATERFALL</span>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-950">The call gets another eligible path.</h3>
                    <p className="mt-2 text-secondary-900">Your dialer stays familiar. The routing layer changes.</p>
                  </div>
                </div>

                <div className="mt-8 border-l-2 border-secondary-300 pl-6 space-y-7">
                  {[
                    'VICIdial sends the call to PVN once',
                    'PVN attempts the first configured route',
                    'Eligible carrier failure? Move to the next route',
                    'Continue through the configured waterfall',
                    'Your existing carrier can stay in the stack',
                  ].map((item) => (
                    <div key={item} className="relative flex items-start justify-between gap-4">
                      <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-secondary-600" />
                      <p className="font-semibold text-primary-900">{item}</p>
                      <FaCheckCircle className="mt-1 flex-shrink-0 text-secondary-600" />
                    </div>
                  ))}
                </div>

                <p className="mt-7 text-sm leading-relaxed text-secondary-900">
                  PVN advances only on eligible failover conditions. End-user responses such as busy or decline are not blindly treated as carrier failures.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-primary-100 bg-primary-50 p-6 md:p-7">
              <p className="text-xl md:text-2xl font-bold text-primary-950">Same campaign. Same agents. Same VICIdial. More routing opportunities before an eligible call is abandoned.</p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-primary-950 py-20 md:py-28 text-white">
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-secondary-500/10 blur-3xl" />
          <div className="container-custom relative">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-sm font-bold tracking-[0.16em] text-secondary-300 uppercase">Prove it with your own traffic</p>
                <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Don&apos;t switch carriers. Challenge them.
                </h2>
                <p className="mt-6 text-xl leading-relaxed text-primary-100">
                  Put PVN in front of a controlled slice of traffic and keep your existing carrier in the waterfall. Then compare what your first route completed with what the full route stack completed.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-primary-300">
                  If the waterfall creates value, you should be able to see it in your own call data — not in a sales deck.
                </p>

                <a
                  href="/contact-us"
                  className="mt-8 inline-flex items-center rounded-xl bg-secondary-500 px-7 py-4 text-lg font-bold text-white shadow-cta hover:bg-secondary-400 transition-colors"
                >
                  Run the Waterfall Challenge
                  <FaArrowRight className="ml-3" />
                </a>
              </div>

              <div className="space-y-4">
                {challengeSteps.map(([num, title, copy]) => (
                  <div key={num} className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.06] p-5 md:p-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-secondary-500 text-lg font-bold">{num}</div>
                    <div>
                      <h3 className="text-xl font-bold">{title}</h3>
                      <p className="mt-2 leading-relaxed text-primary-200">{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="byoc" className="py-20 md:py-28 bg-primary-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-sm font-bold tracking-[0.16em] text-secondary-700 uppercase">Bring your own carrier</p>
                <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight text-primary-950">
                  Your current carrier is not the problem. Having only one path can be.
                </h2>
                <p className="mt-6 text-xl leading-relaxed text-gray-700">
                  Keep the carrier account you already trust. Add it to your PVN waterfall as a backup, move it higher, or keep it at the bottom as your safety net. You are adding routing options — not blowing up your current operation.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    'Add approved carriers with IP or digest authentication',
                    'Set number format, prefix and carrier CPS controls',
                    'Move your carrier anywhere in the route stack',
                    'Keep your campaigns, lists, agents and VICIdial workflow',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 flex-shrink-0 text-secondary-600" />
                      <span className="text-lg text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-primary-100 bg-white p-6 md:p-8 shadow-xl">
                <div className="flex items-start justify-between gap-5 border-b border-gray-100 pb-6">
                  <div>
                    <p className="text-xs font-bold tracking-[0.16em] text-secondary-700 uppercase">Your route stack</p>
                    <h3 className="mt-2 text-2xl font-bold text-primary-950">Keep what works. Add what you are missing.</h3>
                  </div>
                  <FaSitemap className="text-4xl text-primary-500" />
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    ['1', 'PVN Premium Route', 'PRIMARY'],
                    ['2', 'PVN Standard Route', 'FAILOVER'],
                    ['3', 'PVN Value Route', 'FAILOVER'],
                    ['4', 'My Existing Carrier', 'MY CARRIER'],
                  ].map(([rank, name, tag]) => (
                    <div key={name} className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-950 font-bold text-white">{rank}</div>
                      <div className="flex-grow">
                        <p className="font-bold text-primary-950">{name}</p>
                        <p className="mt-1 text-xs font-bold tracking-[0.12em] text-gray-500">{tag}</p>
                      </div>
                      <div className="h-3 w-3 rounded-full bg-success-500" />
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-secondary-50 p-5">
                  <p className="font-bold text-secondary-900">You control the order.</p>
                  <p className="mt-1 text-sm leading-relaxed text-secondary-800">Move routes up or down, disable paths and decide where your existing carrier belongs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="py-20 md:py-28 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
              <div className="rounded-[28px] border border-gray-200 bg-primary-950 p-6 md:p-8 text-white shadow-xl">
                <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-6">
                  <div>
                    <p className="text-xs font-bold tracking-[0.16em] text-primary-300 uppercase">Mission Control</p>
                    <h3 className="mt-2 text-2xl font-bold">See what happened after VICIdial handed off the call.</h3>
                  </div>
                  <span className="rounded-full border border-success-400/20 bg-success-500/10 px-3 py-1 text-xs font-bold text-success-200">LIVE ROUTING</span>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {[
                    ['Attempts', 'Live traffic'],
                    ['Answered', 'Tracked'],
                    ['Answer rate', 'By route'],
                    ['Avg. talk time', 'By route'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                      <p className="text-xs font-bold tracking-[0.12em] text-primary-300 uppercase">{label}</p>
                      <p className="mt-2 text-lg font-bold">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
                  {[
                    ['Route 1', 'Available', 'Primary'],
                    ['Route 2', 'Available', 'Failover'],
                    ['Your Carrier', 'Available', 'BYOC'],
                  ].map(([route, status, type], index) => (
                    <div key={route} className={`flex items-center gap-4 p-4 ${index !== 2 ? 'border-b border-white/10' : ''}`}>
                      <div className="h-2.5 w-2.5 rounded-full bg-success-400" />
                      <div className="flex-grow">
                        <p className="font-bold">{route}</p>
                        <p className="mt-1 text-xs text-primary-300">{type}</p>
                      </div>
                      <span className="text-sm font-semibold text-primary-200">{status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-bold tracking-[0.16em] text-secondary-700 uppercase">No more carrier black box</p>
                <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight text-primary-950">
                  You should not have to message a carrier to ask what happened to your calls.
                </h2>
                <p className="mt-6 text-xl leading-relaxed text-gray-700">
                  PVN puts routing controls and route-level performance in the portal so your team can see which paths are available, which are carrying traffic and where failures are happening.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    ['Route order', FaRoute],
                    ['Answer-rate trends', FaChartLine],
                    ['Failure visibility', FaBolt],
                    ['Rate visibility', FaDollarSign],
                  ].map(([label, Icon]) => {
                    const MetricIcon = Icon as React.ComponentType<{ className?: string }>;
                    return (
                      <div key={label as string} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
                        <MetricIcon className="text-secondary-600" />
                        <span className="font-semibold text-primary-950">{label as string}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
              <div>
                <p className="text-sm font-bold tracking-[0.16em] text-secondary-700 uppercase">Built around the floor</p>
                <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight text-primary-950">
                  This is not another office phone system.
                </h2>
                <p className="mt-6 text-xl leading-relaxed text-gray-700">
                  PVN is designed around the realities of outbound call centers: route failures, CPS limits, concurrent calls, carrier health, DID logic, SIP response codes and billing transparency.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {callCenterFacts.map((fact, index) => (
                  <div key={fact} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 font-bold text-primary-700">{index + 1}</div>
                      <p className="font-semibold leading-relaxed text-primary-950">{fact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {platformCards.map(({ icon: Icon, title, copy }) => (
                <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 md:p-7 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-xl text-primary-700 group-hover:bg-secondary-100 group-hover:text-secondary-700 transition-colors">
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-primary-950">{title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-600">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="resellers" className="py-20 md:py-24 bg-white">
          <div className="container-custom">
            <div className="overflow-hidden rounded-[30px] bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950 text-white shadow-xl">
              <div className="grid lg:grid-cols-2 gap-10 items-center p-8 md:p-12 lg:p-14">
                <div>
                  <p className="text-sm font-bold tracking-[0.16em] text-secondary-300 uppercase">VICIdial installers & VoIP resellers</p>
                  <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">Turn the routing layer into your own recurring product.</h2>
                  <p className="mt-6 text-xl leading-relaxed text-primary-100">
                    PVN supports reseller branding, custom domains and downstream customer management for qualified partners who want to sell the platform under their own name.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {['Your brand & domain', 'Your customer accounts', 'Your support details', 'Customer usage visibility'].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.07] p-5">
                      <FaCheckCircle className="flex-shrink-0 text-secondary-300" />
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-secondary-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-sm font-bold tracking-[0.16em] text-secondary-700 uppercase">The question worth testing</p>
                <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-950">
                  Before you blame the list, test the route.
                </h2>
                <p className="mt-6 text-xl leading-relaxed text-gray-700 max-w-3xl">
                  Run a controlled traffic test. Keep your current carrier. See whether the waterfall completes eligible calls your first route did not. The answer should come from your own traffic.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-xl bg-primary-800 px-8 py-4 text-lg font-bold text-white hover:bg-primary-900 transition-colors"
                  >
                    Test My Traffic
                    <FaArrowRight className="ml-3" />
                  </a>
                  <a
                    href="tel:+19045128487"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-primary-200 bg-white px-8 py-4 text-lg font-bold text-primary-800 hover:bg-primary-50 transition-colors"
                  >
                    <FaPhone className="mr-3" />
                    (904) 512-8487
                  </a>
                </div>

                <p className="mt-6 text-sm text-gray-500">Actual answer rates and waterfall lift vary by traffic profile, destination, carrier acceptance and calling conditions.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  ['1 dialer connection', 'Keep VICIdial exactly where it is.'],
                  ['Multiple carrier paths', 'Give eligible failures another configured route.'],
                  ['Your carrier stays', 'Use your existing provider inside the waterfall.'],
                  ['Proof in your data', 'Judge the routing layer by your own traffic.'],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-2xl border border-secondary-100 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-primary-950">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-600">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCallButton />
    </div>
  );
}
