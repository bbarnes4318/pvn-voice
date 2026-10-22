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

const heroProof = [
  'Keep VICIdial',
  'Keep your carrier',
  'Add multiple routes',
  'See what each route does',
];

const floorCapabilities = [
  {
    title: 'Keep VICIdial exactly where it is',
    copy: 'Connect PVN as the routing layer without rebuilding campaigns, lists, agents or your existing dialer workflow.',
    icon: FaServer,
  },
  {
    title: 'Give eligible failures another route',
    copy: 'When a configured carrier path cannot complete an eligible attempt, PVN can continue to the next route instead of ending the opportunity there.',
    icon: FaExchangeAlt,
  },
  {
    title: 'Control traffic before it becomes a problem',
    copy: 'Set customer CPS and channel limits so campaigns stay inside the capacity you actually want to run.',
    icon: FaSlidersH,
  },
  {
    title: 'Know why the call stopped',
    copy: 'See carrier attempts and SIP responses so your team can trace failures instead of asking a carrier to explain them later.',
    icon: FaBolt,
  },
  {
    title: 'Manage authorized number strategy',
    copy: 'Use approved DID inventory with NPA and overlay-aware selection for the destinations your campaigns are calling.',
    icon: FaPhone,
  },
  {
    title: 'See performance and cost together',
    copy: 'Compare route behavior, rates and billing increments so you can make routing decisions with both connect performance and cost in view.',
    icon: FaDollarSign,
  },
];

const controlPoints = [
  ['Move route order', FaRoute],
  ['Disable weak paths', FaSlidersH],
  ['See SIP responses', FaBolt],
  ['Compare route performance', FaChartLine],
  ['Bring your own carrier', FaPlug],
  ['See route-level rates', FaDollarSign],
];

const resellerPoints = [
  'Your brand and custom domain',
  'Your downstream customer accounts',
  'Your support details and customer relationship',
  'Routing and usage visibility for each customer',
];

const challengeSteps = [
  ['01', 'Send a controlled slice', 'Route one campaign or a defined share of traffic from VICIdial through PVN.'],
  ['02', 'Keep your current carrier', 'Put the provider you already use inside the waterfall instead of replacing it.'],
  ['03', 'Compare what completed', 'Measure what the first route completed versus what the full configured waterfall completed.'],
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Head>
        <title>Call Center VoIP Routing for VICIdial | PVN Voice</title>
        <meta
          name="description"
          content="PVN Voice gives VICIdial call centers a multi-carrier routing layer with intelligent failover, BYOC, route controls and route-level visibility."
        />
        <meta property="og:title" content="How Many Calls Are You Losing? | PVN Voice" />
        <meta
          property="og:description"
          content="Keep VICIdial. Keep your current carrier. Give eligible calls more than one carrier path and prove the difference with your own traffic."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo2.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section className="relative overflow-hidden bg-primary-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(52,173,121,0.13),transparent_28%),linear-gradient(135deg,#14233d_0%,#0f1d34_55%,#0a1426_100%)]" />
          <div className="container-custom relative py-12 md:py-16 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 xl:gap-20 items-start">
              <div className="max-w-[760px]">
                <div className="inline-flex items-center gap-2 rounded-full border border-secondary-400/25 bg-secondary-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-secondary-200">
                  <span className="h-2 w-2 rounded-full bg-secondary-400" />
                  Carrier routing built for VICIdial call centers
                </div>

                <h1 className="mt-7 font-display text-[46px] leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-[64px] xl:text-[68px]">
                  How Many Calls Are You Losing?
                </h1>

                <p className="mt-7 max-w-2xl text-xl leading-[1.6] text-primary-100 md:text-[22px]">
                  VICIdial sends the call once. PVN gives that call more than one carrier path. If an eligible route fails, the next route gets a shot — without changing your dialer or giving up the carrier you already use.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-xl bg-secondary-500 px-7 py-4 text-base font-bold text-white shadow-[0_14px_32px_rgba(40,156,106,0.28)] transition-all hover:-translate-y-0.5 hover:bg-secondary-400"
                  >
                    Test My Traffic
                    <FaArrowRight className="ml-3" />
                  </a>
                  <a
                    href="#waterfall"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] px-7 py-4 text-base font-bold text-white transition-colors hover:bg-white/[0.09]"
                  >
                    See How the Waterfall Works
                  </a>
                </div>

                <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-white/10 pt-6 sm:flex sm:flex-wrap">
                  {heroProof.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-semibold text-primary-200">
                      <FaCheckCircle className="flex-shrink-0 text-secondary-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:pt-1">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#13243f] shadow-[0_24px_70px_rgba(0,0,0,0.32)]">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-6">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-300">Live Route Trace</p>
                      <h2 className="mt-1 text-xl font-bold md:text-2xl">One call. More than one chance.</h2>
                    </div>
                    <span className="rounded-full border border-success-400/20 bg-success-500/10 px-3 py-1 text-[11px] font-bold text-success-200">ACTIVE</span>
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex items-center justify-between rounded-xl border border-primary-400/20 bg-primary-950/70 px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                          <FaServer />
                        </div>
                        <div>
                          <p className="font-bold">VICIdial → PVN</p>
                          <p className="mt-0.5 text-sm text-primary-300">One SIP handoff</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-success-200">ACCEPTED</span>
                    </div>

                    <div className="ml-5 border-l border-white/10 py-4 pl-5">
                      <div className="space-y-3">
                        {[
                          ['01', 'Primary Route', 'Eligible carrier failure', 'CONTINUE', 'amber'],
                          ['02', 'Backup Route', 'Eligible carrier failure', 'CONTINUE', 'amber'],
                          ['03', 'Next Available Route', 'Call completes', 'ANSWERED', 'green'],
                        ].map(([num, route, detail, status, tone]) => (
                          <div
                            key={num}
                            className={`relative rounded-xl border p-4 ${tone === 'green' ? 'border-success-400/25 bg-success-500/[0.08]' : 'border-amber-300/20 bg-amber-300/[0.04]'}`}
                          >
                            <span className={`absolute -left-[26px] top-5 h-2.5 w-2.5 rounded-full ${tone === 'green' ? 'bg-success-400' : 'bg-amber-300'}`} />
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary-300">Attempt {num}</p>
                                <p className="mt-1 font-bold text-white">{route}</p>
                                <p className={`mt-1 text-sm ${tone === 'green' ? 'text-success-100' : 'text-primary-300'}`}>{detail}</p>
                              </div>
                              <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${tone === 'green' ? 'bg-success-500/15 text-success-100' : 'bg-amber-300/10 text-amber-200'}`}>{status}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 divide-x divide-white/10 rounded-xl border border-white/10 bg-white/[0.035]">
                      {[
                        ['Dialer handoffs', '1'],
                        ['Carrier attempts', '3'],
                        ['Completed', 'Yes'],
                      ].map(([label, value]) => (
                        <div key={label} className="px-3 py-3 md:px-4">
                          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary-400">{label}</p>
                          <p className="mt-1 text-sm font-bold text-white">{value}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-primary-400">Illustrative route trace. Actual outcomes vary by traffic, destination and carrier conditions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROOF STRIP */}
        <section className="border-b border-gray-200 bg-white">
          <div className="container-custom grid md:grid-cols-4">
            {[
              ['ONE CONNECTION', 'VICIdial points to PVN once.'],
              ['MULTIPLE PATHS', 'Configured routes sit behind that connection.'],
              ['YOUR CARRIER STAYS', 'Place your existing provider anywhere in the stack.'],
              ['YOU SEE THE ROUTE', 'Track attempts, responses and route performance.'],
            ].map(([label, copy], index) => (
              <div key={label} className={`py-6 md:px-6 ${index !== 0 ? 'md:border-l md:border-gray-200' : ''}`}>
                <p className="text-xs font-bold tracking-[0.15em] text-secondary-700">{label}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY WATERFALL */}
        <section id="why-waterfall" className="bg-[#f7f9fc] py-20 md:py-24">
          <div className="container-custom">
            <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20 items-end">
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-700">The problem most centers never test</p>
                <h2 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.025em] text-primary-950 md:text-[52px]">
                  One carrier can end a good call before your agent ever gets the chance.
                </h2>
              </div>
              <div className="max-w-2xl lg:pb-1">
                <p className="text-xl leading-[1.65] text-gray-700">
                  You already paid for the data. The campaign is loaded. The floor is staffed. If one route cannot complete an eligible attempt and there is nowhere else for the call to go, that opportunity is gone before anyone on your team can do anything about it.
                </p>
              </div>
            </div>

            <div id="waterfall" className="mt-12 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="rounded-2xl border border-gray-200 bg-white p-7 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">Typical setup</p>
                    <h3 className="mt-2 text-2xl font-bold text-primary-950">One route owns the outcome.</h3>
                  </div>
                  <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">SINGLE PATH</span>
                </div>

                <div className="mt-7 border-l-2 border-gray-200 pl-6">
                  {[
                    ['VICIdial sends the call', 'Carrier A receives it'],
                    ['Carrier A cannot complete the attempt', 'No second carrier path'],
                    ['The attempt stops', 'The floor never gets the conversation'],
                  ].map(([title, copy], index) => (
                    <div key={title} className={`relative pb-7 ${index === 2 ? 'pb-0' : ''}`}>
                      <span className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full ${index === 2 ? 'bg-red-500' : 'bg-gray-400'}`} />
                      <p className="font-bold text-primary-950">{title}</p>
                      <p className="mt-1 text-sm text-gray-600">{copy}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-secondary-200 bg-white p-7 shadow-[0_18px_50px_rgba(20,35,61,0.08)] md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary-700">PVN waterfall</p>
                    <h3 className="mt-2 text-2xl font-bold text-primary-950">Give the call another eligible path.</h3>
                  </div>
                  <span className="rounded-full bg-secondary-50 px-3 py-1 text-xs font-bold text-secondary-800">MULTI-ROUTE</span>
                </div>

                <div className="mt-7 border-l-2 border-secondary-200 pl-6">
                  {[
                    ['VICIdial sends the call to PVN once', 'No dialer migration or campaign rebuild'],
                    ['PVN attempts your configured route order', 'Primary route, failover routes and BYOC'],
                    ['Eligible carrier failure? Keep going', 'The next configured path gets a shot'],
                    ['A later route completes the call', 'The opportunity survives long enough to reach the floor'],
                  ].map(([title, copy], index) => (
                    <div key={title} className={`relative pb-7 ${index === 3 ? 'pb-0' : ''}`}>
                      <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-secondary-600" />
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-bold text-primary-950">{title}</p>
                          <p className="mt-1 text-sm text-gray-600">{copy}</p>
                        </div>
                        <FaCheckCircle className="mt-1 flex-shrink-0 text-secondary-600" />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-7 border-t border-gray-100 pt-5 text-sm leading-relaxed text-gray-500">PVN advances only on configured eligible failover conditions. End-user responses such as busy or decline are not blindly treated as carrier failures.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WATERFALL CHALLENGE */}
        <section className="relative overflow-hidden bg-primary-950 py-20 text-white md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(52,173,121,0.10),transparent_25%)]" />
          <div className="container-custom relative">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 items-start">
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-300">The Waterfall Challenge</p>
                <h2 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.025em] md:text-[52px]">
                  Put your current route to the test.
                </h2>
                <p className="mt-6 text-xl leading-[1.65] text-primary-100">
                  Keep the carrier you already use. Put PVN in front of a controlled slice of traffic. Then compare what your first route completed with what the full configured waterfall completed.
                </p>
                <p className="mt-5 text-base leading-relaxed text-primary-300">
                  No sales-deck math. No promises based on somebody else&apos;s traffic. The answer should come from your own call data.
                </p>
                <a
                  href="/contact-us"
                  className="mt-8 inline-flex items-center rounded-xl bg-secondary-500 px-7 py-4 font-bold text-white shadow-[0_14px_32px_rgba(40,156,106,0.25)] transition-all hover:-translate-y-0.5 hover:bg-secondary-400"
                >
                  Run My Traffic Test
                  <FaArrowRight className="ml-3" />
                </a>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                {challengeSteps.map(([num, title, copy], index) => (
                  <div key={num} className={`grid gap-4 p-6 md:grid-cols-[56px_1fr] md:p-7 ${index !== challengeSteps.length - 1 ? 'border-b border-white/10' : ''}`}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-500 text-base font-bold text-white">{num}</div>
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

        {/* BYOC */}
        <section id="byoc" className="bg-white py-20 md:py-24">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 items-center">
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-700">Bring your own carrier</p>
                <h2 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.025em] text-primary-950 md:text-[50px]">
                  Keep the route you trust. Stop making it your only option.
                </h2>
                <p className="mt-6 text-xl leading-[1.65] text-gray-700">
                  Your existing carrier can stay exactly where you want it — first, middle or last in the waterfall. PVN adds routing options around what already works instead of forcing you to rip it out.
                </p>
                <div className="mt-7 space-y-3">
                  {[
                    'IP or digest-authenticated carrier connections',
                    'Carrier-specific prefixes, number format and CPS controls',
                    'Drag the route higher, lower or out of service',
                    'Keep the campaigns, agents and VICIdial workflow you already run',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-base font-semibold text-gray-700">
                      <FaCheckCircle className="mt-1 flex-shrink-0 text-secondary-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-[#f8fafc] p-5 md:p-7">
                <div className="flex items-center justify-between border-b border-gray-200 pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">Your configured stack</p>
                    <h3 className="mt-1 text-xl font-bold text-primary-950">You decide where every route belongs.</h3>
                  </div>
                  <FaSitemap className="text-3xl text-primary-500" />
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    ['01', 'PVN Premium Route', 'PRIMARY', 'PVN'],
                    ['02', 'Your Existing Carrier', 'BYOC', 'YOUR CARRIER'],
                    ['03', 'PVN Standard Route', 'FAILOVER', 'PVN'],
                    ['04', 'PVN Value Route', 'FAILOVER', 'PVN'],
                  ].map(([rank, name, role, source]) => (
                    <div key={rank} className="grid grid-cols-[48px_1fr_auto] items-center gap-4 rounded-xl border border-gray-200 bg-white p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-950 text-sm font-bold text-white">{rank}</div>
                      <div>
                        <p className="font-bold text-primary-950">{name}</p>
                        <p className="mt-0.5 text-xs font-bold uppercase tracking-[0.12em] text-gray-400">{source}</p>
                      </div>
                      <span className="rounded-full bg-primary-50 px-3 py-1 text-[10px] font-bold text-primary-700">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION CONTROL */}
        <section id="platform" className="bg-[#f7f9fc] py-20 md:py-24">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 items-start">
              <div className="overflow-hidden rounded-2xl border border-primary-900/10 bg-primary-950 text-white shadow-[0_18px_55px_rgba(20,35,61,0.14)]">
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-300">Mission Control</p>
                    <h3 className="mt-1 text-xl font-bold">See the call path after VICIdial.</h3>
                  </div>
                  <span className="rounded-full border border-success-400/20 bg-success-500/10 px-3 py-1 text-[10px] font-bold text-success-200">LIVE ROUTING</span>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      ['Attempts', 'Live'],
                      ['Answered', 'Tracked'],
                      ['Answer Rate', 'By route'],
                      ['Avg. Talk', 'By route'],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary-400">{label}</p>
                        <p className="mt-2 font-bold">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
                    <div className="grid grid-cols-[1fr_95px_95px] bg-white/[0.04] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-primary-400">
                      <span>Route</span><span>Status</span><span>Role</span>
                    </div>
                    {[
                      ['PVN Premium', 'Available', 'Primary'],
                      ['Your Carrier', 'Available', 'BYOC'],
                      ['PVN Standard', 'Available', 'Failover'],
                    ].map(([route, status, role], index) => (
                      <div key={route} className={`grid grid-cols-[1fr_95px_95px] items-center px-4 py-4 text-sm ${index !== 2 ? 'border-b border-white/10' : ''}`}>
                        <span className="flex items-center gap-3 font-bold"><span className="h-2.5 w-2.5 rounded-full bg-success-400" />{route}</span>
                        <span className="text-primary-200">{status}</span>
                        <span className="text-primary-300">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="max-w-xl lg:pt-2">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-700">Full route visibility</p>
                <h2 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.025em] text-primary-950 md:text-[50px]">
                  See which routes are earning their place.
                </h2>
                <p className="mt-6 text-xl leading-[1.65] text-gray-700">
                  The moment VICIdial hands us a call, PVN gives your team visibility into the route path — which carrier received it, where the attempt stopped, which path answered and how each route is performing over time.
                </p>
                <div className="mt-7 border-l-4 border-secondary-500 pl-5">
                  <p className="text-lg font-bold leading-relaxed text-primary-950">No tickets. No guessing. No waiting on a carrier to explain your own traffic.</p>
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

        {/* BUILT FOR THE FLOOR */}
        <section className="bg-white py-20 md:py-24">
          <div className="container-custom">
            <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:gap-20 items-start">
              <div className="max-w-lg lg:sticky lg:top-28">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-700">Built around the floor</p>
                <h2 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.025em] text-primary-950 md:text-[50px]">
                  Built for call centers that live and die by connect rate.
                </h2>
                <p className="mt-6 text-lg leading-[1.7] text-gray-700">
                  Every control below maps to something your floor deals with every day: getting traffic out of VICIdial, keeping routes healthy, understanding failures, managing volume and knowing what each path is costing you.
                </p>
                <p className="mt-5 text-lg font-bold leading-relaxed text-primary-950">The goal is simple: keep more viable calls alive long enough to reach an agent.</p>
              </div>

              <div className="divide-y divide-gray-200 border-y border-gray-200">
                {floorCapabilities.map(({ title, copy, icon: Icon }, index) => (
                  <div key={title} className="grid gap-4 py-6 sm:grid-cols-[52px_1fr] sm:gap-5 md:py-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                      <Icon />
                    </div>
                    <div>
                      <div className="flex items-start gap-3">
                        <span className="mt-1 text-xs font-bold text-gray-400">0{index + 1}</span>
                        <h3 className="text-xl font-bold text-primary-950">{title}</h3>
                      </div>
                      <p className="mt-2 pl-8 leading-relaxed text-gray-600">{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RESELLERS */}
        <section id="resellers" className="bg-[#f7f9fc] py-20 md:py-24">
          <div className="container-custom">
            <div className="overflow-hidden rounded-2xl border border-primary-900/10 bg-primary-950 text-white shadow-[0_20px_60px_rgba(20,35,61,0.16)]">
              <div className="grid gap-10 p-8 md:p-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:p-12 xl:p-14">
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-300">For VICIdial installers & VoIP resellers</p>
                  <h2 className="mt-4 font-display text-4xl leading-[1.04] tracking-[-0.025em] md:text-[50px]">
                    Give your clients a routing advantage they can actually see.
                  </h2>
                  <p className="mt-6 text-xl leading-[1.65] text-primary-100">
                    Put your brand on the portal, keep control of the customer relationship, and sell a multi-carrier routing layer instead of another commodity SIP trunk.
                  </p>
                  <a href="/contact-us" className="mt-8 inline-flex items-center font-bold text-secondary-300 hover:text-secondary-200">
                    Talk to PVN about reseller access <FaArrowRight className="ml-2" />
                  </a>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {resellerPoints.map((item) => (
                    <div key={item} className="flex min-h-[92px] items-start gap-3 rounded-xl border border-white/10 bg-white/[0.045] p-5">
                      <FaCheckCircle className="mt-1 flex-shrink-0 text-secondary-300" />
                      <span className="font-semibold leading-relaxed text-primary-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-white py-20 md:py-24">
          <div className="container-custom">
            <div className="grid gap-10 border-t border-gray-200 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 items-end">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-700">The question worth answering</p>
                <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-[-0.03em] text-primary-950 md:text-[54px] lg:text-[58px]">
                  How many good calls are dying on one route?
                </h2>
                <p className="mt-6 max-w-2xl text-xl leading-[1.65] text-gray-700">
                  Keep your carrier. Keep VICIdial. Send a controlled slice through PVN and compare what the first route completed with what the full waterfall completed.
                </p>
              </div>

              <div className="lg:justify-self-end lg:w-full lg:max-w-md">
                <div className="rounded-2xl border border-gray-200 bg-[#f8fafc] p-6 md:p-7">
                  <p className="text-sm font-bold text-primary-950">See the answer in your own traffic.</p>
                  <div className="mt-5 flex flex-col gap-3">
                    <a href="/contact-us" className="inline-flex items-center justify-center rounded-xl bg-primary-950 px-7 py-4 font-bold text-white transition-colors hover:bg-primary-900">
                      Test My Traffic <FaArrowRight className="ml-3" />
                    </a>
                    <a href="tel:+19045128487" className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-4 font-bold text-primary-800 transition-colors hover:border-primary-300">
                      <FaPhone className="mr-3" /> (904) 512-8487
                    </a>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-gray-500">Actual answer rates and waterfall lift vary by traffic profile, destination, carrier acceptance and calling conditions.</p>
                </div>
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
