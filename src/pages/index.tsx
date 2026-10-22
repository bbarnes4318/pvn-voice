import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCallButton from '../components/StickyCallButton';
import { PORTAL_SIGNUP_URL } from '../lib/site-links';
import {
  FaArrowRight,
  FaBolt,
  FaChartBar,
  FaChartLine,
  FaCheckCircle,
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

const advantages = [
  {
    icon: FaLayerGroup,
    title: 'Multi-carrier waterfall',
    copy: 'One SIP connection from your dialer can reach multiple approved carrier routes in the order you choose.',
  },
  {
    icon: FaPlug,
    title: 'Bring your own carrier',
    copy: 'Keep the carrier relationship you already have and place it inside your PVN waterfall as another route.',
  },
  {
    icon: FaChartLine,
    title: 'Route-level performance',
    copy: 'See answer rate, average talk time, traffic share and recent route status instead of guessing which route is working.',
  },
  {
    icon: FaSlidersH,
    title: 'You control the order',
    copy: 'Move routes up or down, switch weak routes off and restore the recommended order from your customer portal.',
  },
  {
    icon: FaExchangeAlt,
    title: 'Intelligent failover',
    copy: 'Eligible carrier failures can move to the next route while end-user rejection responses are not blindly retried.',
  },
  {
    icon: FaShieldAlt,
    title: 'Authenticated outbound calling',
    copy: 'PVN supports STIR/SHAKEN signing in the outbound call path for eligible, authorized caller IDs.',
  },
];

const platformFacts = [
  'VICIdial-friendly SIP connectivity',
  'Per-customer CPS and channel controls',
  'Gateway health checks and route state',
  'Real SIP response visibility per carrier attempt',
  'NPA and overlay-aware DID selection for authorized number inventory',
  'Transparent per-route rates and billing increments',
];

const waterfallRoutes = [
  { name: 'PVN Route 1', detail: 'Primary route', badge: '1' },
  { name: 'PVN Route 2', detail: 'Eligible failover', badge: '2' },
  { name: 'PVN Route 3', detail: 'Eligible failover', badge: '3' },
  { name: 'Your Carrier', detail: 'Keep your existing provider in the stack', badge: '4' },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Head>
        <title>VoIP for VICIdial Call Centers | Multi-Carrier Waterfall | PVN Voice</title>
        <meta
          name="description"
          content="Connect VICIdial once and route outbound calls through a multi-carrier waterfall. Bring your own carrier, control route order, and see route-level performance with PVN Voice."
        />
        <meta property="og:title" content="More Answers. Same Dialer. | PVN Voice" />
        <meta
          property="og:description"
          content="One VICIdial connection. Multiple carrier routes. Bring your existing carrier and control the waterfall from your PVN Voice portal."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo2.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section className="relative overflow-hidden bg-primary-950 text-white">
          <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-primary-700 via-primary-950 to-black" />
          <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-secondary-500 opacity-10 blur-3xl" />
          <div className="container-custom relative py-16 md:py-24 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="inline-flex items-center rounded-full border border-primary-400/40 bg-white/5 px-4 py-2 text-sm font-semibold text-primary-100 mb-6">
                  VOIP BUILT FOR VICIDIAL CALL CENTERS
                </div>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-6">
                  More Answers.
                  <span className="block text-secondary-400">Same Dialer.</span>
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 leading-relaxed max-w-2xl mb-8">
                  Connect VICIdial to PVN once. We put a multi-carrier waterfall behind your traffic,
                  move eligible failed attempts to the next route, and let you keep your existing
                  carrier in the stack.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-lg bg-secondary-500 hover:bg-secondary-400 text-white px-7 py-4 text-lg font-bold shadow-cta transition-colors"
                  >
                    Run the Waterfall Challenge
                    <FaArrowRight className="ml-3" />
                  </a>
                  <a
                    href={PORTAL_SIGNUP_URL}
                    className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/5 hover:bg-white/10 px-7 py-4 text-lg font-semibold transition-colors"
                  >
                    Create an Account
                  </a>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm md:text-base text-primary-100">
                  <span className="flex items-center"><FaCheckCircle className="text-secondary-400 mr-2" />No dialer migration</span>
                  <span className="flex items-center"><FaCheckCircle className="text-secondary-400 mr-2" />Bring your own carrier</span>
                  <span className="flex items-center"><FaCheckCircle className="text-secondary-400 mr-2" />Route-level visibility</span>
                </div>
                <p className="mt-6 text-sm text-primary-300">
                  Built for high-volume call centers in Pakistan and worldwide.
                </p>
              </div>

              <div className="lg:pl-6">
                <div className="rounded-3xl border border-white/15 bg-white/[0.07] p-5 md:p-7 shadow-2xl backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-xs font-bold tracking-[0.18em] text-secondary-300 uppercase">PVN AnswerLift</p>
                      <h2 className="text-2xl font-bold mt-1">Your Carrier Waterfall</h2>
                    </div>
                    <span className="rounded-full bg-success-500/15 border border-success-400/30 px-3 py-1 text-xs font-bold text-success-200">
                      ROUTING ACTIVE
                    </span>
                  </div>

                  <div className="rounded-2xl border border-primary-400/20 bg-primary-950/60 p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-xl bg-primary-600 flex items-center justify-center mr-3">
                          <FaServer />
                        </div>
                        <div>
                          <p className="font-bold">Your VICIdial</p>
                          <p className="text-sm text-primary-300">One SIP connection to PVN</p>
                        </div>
                      </div>
                      <FaArrowRight className="text-secondary-300" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {waterfallRoutes.map((route) => (
                      <div key={route.name} className="relative flex items-center rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                        <div className="h-9 w-9 rounded-full bg-secondary-500 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          {route.badge}
                        </div>
                        <div className="flex-grow">
                          <p className="font-bold">{route.name}</p>
                          <p className="text-sm text-primary-300">{route.detail}</p>
                        </div>
                        <span className="text-xs font-semibold text-success-200 bg-success-500/10 border border-success-400/20 rounded-full px-2.5 py-1">
                          Available
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl bg-secondary-500/10 border border-secondary-400/20 p-4 text-center">
                    <p className="font-bold text-secondary-200">One trunk. Multiple chances to connect.</p>
                    <p className="text-sm text-primary-200 mt-1">Eligible failures continue down the waterfall.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="py-20 md:py-24 bg-white" id="how-it-works">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="text-secondary-700 font-bold tracking-wider uppercase text-sm mb-3">Stop betting the floor on one route</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-950 mb-5">
                A single carrier gets one chance. A waterfall gives the call another path.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Most centers wire a carrier directly into VICIdial. If that route cannot complete an eligible call,
                the attempt ends there. PVN inserts a routing layer between your dialer and the carriers.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 md:p-9">
                <div className="flex items-center mb-6">
                  <span className="rounded-full bg-gray-200 text-gray-700 px-3 py-1 text-xs font-bold mr-3">OLD WAY</span>
                  <h3 className="text-2xl font-bold text-gray-900">Direct-to-carrier dialplan</h3>
                </div>
                <div className="space-y-4">
                  {['VICIdial', 'Carrier A', 'Carrier cannot complete eligible attempt', 'Call stops'].map((label, index) => (
                    <React.Fragment key={label}>
                      <div className={`rounded-xl border p-4 font-semibold ${index >= 2 ? 'border-red-200 bg-red-50 text-red-800' : 'border-gray-200 bg-white text-gray-800'}`}>
                        {label}
                      </div>
                      {index < 3 && <div className="text-center text-gray-400">↓</div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border-2 border-secondary-200 bg-secondary-50 p-7 md:p-9 shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="rounded-full bg-secondary-600 text-white px-3 py-1 text-xs font-bold mr-3">PVN WAY</span>
                  <h3 className="text-2xl font-bold text-primary-950">One connection, multiple routes</h3>
                </div>
                <div className="space-y-4">
                  {['VICIdial → PVN', 'Route 1', 'Route 2', 'Route 3', 'Your existing carrier'].map((label, index) => (
                    <React.Fragment key={label}>
                      <div className="rounded-xl border border-secondary-200 bg-white p-4 font-semibold text-primary-900 flex items-center justify-between">
                        <span>{label}</span>
                        {index > 0 && <FaCheckCircle className="text-secondary-600" />}
                      </div>
                      {index < 4 && <div className="text-center text-secondary-500">↓</div>}
                    </React.Fragment>
                  ))}
                </div>
                <p className="mt-5 text-sm text-secondary-900 leading-relaxed">
                  PVN advances only on eligible failover conditions. End-user responses such as busy or decline are not treated like carrier failures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BYOC */}
        <section className="py-20 md:py-24 bg-primary-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-secondary-700 font-bold tracking-wider uppercase text-sm mb-3">Bring Your Own Carrier</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-950 mb-6">
                  You do not have to fire your current VoIP provider.
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-7">
                  Keep the carrier account you already trust. Add it to your PVN waterfall and use it as a backup,
                  move it higher, or switch it off. PVN gives you additional routing options without forcing a rip-and-replace migration.
                </p>
                <div className="space-y-4">
                  {[
                    'Add an approved carrier using IP or digest authentication',
                    'Choose number format, prefix and carrier CPS settings',
                    'Place your carrier anywhere in your waterfall',
                    'Your carrier bills its minutes directly; PVN applies the configured platform fee',
                  ].map((item) => (
                    <div key={item} className="flex items-start">
                      <FaCheckCircle className="text-secondary-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-white border border-primary-100 shadow-xl p-7 md:p-9">
                <div className="flex items-center justify-between mb-7">
                  <div>
                    <p className="text-sm font-bold text-secondary-700 uppercase tracking-wider">Your waterfall</p>
                    <h3 className="text-2xl font-bold text-primary-950 mt-1">Keep what works. Add more paths.</h3>
                  </div>
                  <FaSitemap className="text-4xl text-primary-500" />
                </div>
                <div className="space-y-3">
                  {[
                    ['Premium Route', 'PVN', '1st'],
                    ['Standard Route', 'PVN', '2nd'],
                    ['Value Route', 'PVN', '3rd'],
                    ['My Existing Carrier', 'YOUR CARRIER', '4th'],
                  ].map(([name, owner, rank]) => (
                    <div key={name} className="flex items-center rounded-xl border border-gray-200 p-4">
                      <span className="w-12 text-sm font-bold text-gray-400">{rank}</span>
                      <div className="flex-grow">
                        <p className="font-bold text-primary-950">{name}</p>
                        <p className="text-xs text-gray-500 font-semibold tracking-wide">{owner}</p>
                      </div>
                      <span className="h-3 w-3 rounded-full bg-success-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTROL / VISIBILITY */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="text-secondary-700 font-bold tracking-wider uppercase text-sm mb-3">See the routes. Control the routes.</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-950 mb-5">
                Your carrier waterfall should not live inside somebody else&apos;s secret dialplan.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                PVN puts routing controls and performance data in the customer portal so your team can make decisions from evidence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map(({ icon: Icon, title, copy }) => (
                <div key={title} className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center text-xl mb-5">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-bold text-primary-950 mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DATA / EXAMPLE DASHBOARD */}
        <section className="py-20 md:py-24 bg-primary-950 text-white overflow-hidden">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-secondary-300 font-bold tracking-wider uppercase text-sm mb-3">Measure the network, not the sales pitch</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  Know which routes are actually carrying your calls.
                </h2>
                <p className="text-xl text-primary-100 leading-relaxed mb-8">
                  The PVN portal exposes call attempts, answered calls, answer rate, average talk time, route health,
                  spend, failure reasons and route-level performance. Your team can see what changed instead of waiting for a carrier to explain it.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    ['7-day answer rate', FaChartLine],
                    ['Average talk time', FaChartBar],
                    ['Traffic share by route', FaRoute],
                    ['Route availability', FaBolt],
                  ].map(([label, Icon]) => {
                    const MetricIcon = Icon as React.ComponentType<{ className?: string }>;
                    return (
                      <div key={label as string} className="rounded-xl border border-white/10 bg-white/[0.06] p-4 flex items-center">
                        <MetricIcon className="text-secondary-300 mr-3" />
                        <span className="font-semibold">{label as string}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 md:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-5">
                  <div>
                    <p className="text-sm text-primary-300">Mission Control</p>
                    <h3 className="text-2xl font-bold">Calls flowing</h3>
                  </div>
                  <span className="rounded-full bg-success-500/15 text-success-200 border border-success-400/20 px-3 py-1 text-xs font-bold">LIVE ROUTING</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-5">
                  {[
                    ['Attempts', 'Live'],
                    ['Answered', 'Live'],
                    ['Answer rate', 'Tracked'],
                    ['Routing', 'Visible'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl bg-primary-950/50 border border-white/10 p-4">
                      <p className="text-xs uppercase tracking-wider text-primary-300">{label}</p>
                      <p className="text-xl font-bold mt-1">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-primary-950/50 border border-white/10 p-5">
                  <p className="text-sm font-bold mb-3">Route performance</p>
                  <div className="space-y-3">
                    {[72, 54, 36].map((width, index) => (
                      <div key={width} className="flex items-center">
                        <span className="w-20 text-sm text-primary-200">Route {index + 1}</span>
                        <div className="h-2 flex-grow rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full rounded-full bg-secondary-400" style={{ width: `${width}%` }} />
                        </div>
                        <span className="ml-3 text-xs text-primary-300">sample</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-primary-400 mt-4">Illustrative display only; performance varies by traffic and destination.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PLATFORM */}
        <section className="py-20 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-3xl border border-gray-200 bg-white p-7 md:p-9 shadow-lg order-2 lg:order-1">
                <div className="grid sm:grid-cols-2 gap-4">
                  {platformFacts.map((fact) => (
                    <div key={fact} className="rounded-xl bg-primary-50 border border-primary-100 p-4 flex items-start">
                      <FaCheckCircle className="text-secondary-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-primary-950 font-medium">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-secondary-700 font-bold tracking-wider uppercase text-sm mb-3">Built for outbound operations</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-950 mb-6">
                  More than a SIP trunk. A routing and control layer for the call center.
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  PVN&apos;s switch and portal are designed around the realities of high-volume dialing: route failures, CPS limits,
                  concurrent calls, DID selection, carrier health, billing and the need to understand exactly why calls did or did not connect.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Keep your campaigns, agents, lists and VICIdial workflow. Change the route architecture behind the dialer instead of rebuilding your operation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RESELLERS */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container-custom">
            <div className="rounded-3xl bg-gradient-to-br from-primary-700 to-primary-950 text-white p-8 md:p-12 lg:p-14">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-secondary-300 font-bold tracking-wider uppercase text-sm mb-3">VICIdial installers & VoIP resellers</p>
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">Want to sell the platform under your own brand?</h2>
                  <p className="text-xl text-primary-100 leading-relaxed">
                    PVN supports reseller-specific domains, branding and customer management so qualified partners can build recurring revenue around the same routing infrastructure.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {['Your brand & domain', 'Your customer accounts', 'Your support details', 'Customer usage visibility'].map((item) => (
                    <div key={item} className="rounded-xl border border-white/15 bg-white/[0.07] p-5 flex items-center">
                      <FaCheckCircle className="text-secondary-300 mr-3 flex-shrink-0" />
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WATERFALL CHALLENGE */}
        <section className="py-20 md:py-28 bg-secondary-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center rounded-full bg-secondary-100 text-secondary-800 px-4 py-2 text-sm font-bold mb-5">
                THE WATERFALL CHALLENGE
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-primary-950 mb-6">
                Keep your carrier. Put PVN in front of it. Measure what the waterfall recovers.
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-9">
                Send a controlled slice of traffic through PVN and keep your existing carrier in the waterfall.
                Compare what the first route connects with what the full waterfall connects. The value should be visible in the data.
              </p>

              <div className="grid md:grid-cols-3 gap-5 text-left mb-10">
                {[
                  ['1', 'Connect', 'Point a test campaign or traffic segment from VICIdial to PVN.'],
                  ['2', 'Keep your carrier', 'Add your existing provider into the waterfall instead of replacing it.'],
                  ['3', 'Compare', 'Measure route performance and the additional eligible calls completed through backup paths.'],
                ].map(([num, title, copy]) => (
                  <div key={num} className="rounded-2xl bg-white border border-secondary-100 p-6 shadow-sm">
                    <div className="h-10 w-10 rounded-full bg-secondary-600 text-white flex items-center justify-center font-bold mb-4">{num}</div>
                    <h3 className="text-xl font-bold text-primary-950 mb-2">{title}</h3>
                    <p className="text-gray-600 leading-relaxed">{copy}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-lg bg-primary-700 hover:bg-primary-800 text-white px-8 py-4 text-lg font-bold transition-colors"
                >
                  Start the Waterfall Challenge
                  <FaArrowRight className="ml-3" />
                </a>
                <a
                  href="tel:+19045128487"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-primary-200 bg-white hover:bg-primary-50 text-primary-800 px-8 py-4 text-lg font-bold transition-colors"
                >
                  <FaPhone className="mr-3" />
                  Call (904) 512-8487
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                Actual answer rates and waterfall lift vary by traffic profile, destination, carrier acceptance and calling conditions.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCallButton />
    </div>
  );
}
