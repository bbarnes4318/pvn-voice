import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaPhoneAlt, FaRobot, FaChartLine, FaUsers, FaCloud, FaCheck, FaRocket, FaCogs, FaHeadset } from 'react-icons/fa';

export default function DialerSystems() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Dialer Systems | Automated Dialing Solutions for Business - PVN Dialer</title>
        <meta name="description" content="Revolutionize your outbound calling with PVN Dialer's advanced dialer systems. Boost productivity, connect with more leads, and automate your sales and support outreach." />
        <meta name="keywords" content="Dialer Systems, Auto Dialer, Predictive Dialer, Power Dialer, Progressive Dialer, Sales Dialer, Automated Calling, Outbound Dialer, Call Center Dialer, PVN Dialer" />
      </Head>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/dialer-hero.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Dialer Systems</h1>
              <p className="text-2xl md:text-3xl text-primary-100 mb-8 font-medium drop-shadow">Automate, accelerate, and optimize your outbound calling with next-generation dialer technology.</p>
              <a href="tel:+19045128487" className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-colors">
                <FaPhoneAlt className="mr-2" /> Call (904) 512-8487 for a Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">Advanced Dialer Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaRobot className="text-4xl text-primary-600 mb-4" aria-label="Auto Dialer" />
                <h3 className="text-xl font-semibold mb-2">Auto Dialer</h3>
                <p className="text-gray-700 mb-3">Automatically dial lists of contacts, leaving agents free to focus on live conversations and closing deals.</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaRocket className="text-4xl text-primary-600 mb-4" aria-label="Predictive Dialer" />
                <h3 className="text-xl font-semibold mb-2">Predictive Dialer</h3>
                <p className="text-gray-700 mb-3">Maximize agent talk time by dialing multiple numbers and connecting only answered calls to available agents.</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaCogs className="text-4xl text-primary-600 mb-4" aria-label="Power & Progressive Dialer" />
                <h3 className="text-xl font-semibold mb-2">Power & Progressive Dialer</h3>
                <p className="text-gray-700 mb-3">Control the pace of outbound calls with flexible dialing modes for compliance and efficiency.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaCloud className="text-4xl text-primary-600 mb-4" aria-label="Cloud-Based Platform" />
                <h3 className="text-xl font-semibold mb-2">Cloud-Based Platform</h3>
                <p className="text-gray-700 mb-3">Access your dialer from anywhere, scale instantly, and support remote or distributed teams.</p>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaChartLine className="text-4xl text-primary-600 mb-4" aria-label="Real-Time Analytics" />
                <h3 className="text-xl font-semibold mb-2">Real-Time Analytics</h3>
                <p className="text-gray-700 mb-3">Track campaign performance, agent productivity, and call outcomes with live dashboards and reports.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaCheck className="text-4xl text-primary-600 mb-4" aria-label="Compliance Tools" />
                <h3 className="text-xl font-semibold mb-2">Compliance Tools</h3>
                <p className="text-gray-700 mb-3">Stay compliant with TCPA, DNC, and industry regulations using built-in safeguards and call recording.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-100">
          <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose PVN Dialer Systems?</h2>
              <ul className="space-y-5 text-lg">
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Boost outbound call volume and connect with more prospects</span></li>
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Automate repetitive tasks and eliminate manual dialing</span></li>
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Improve agent efficiency and conversion rates</span></li>
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Integrate seamlessly with your CRM and sales tools</span></li>
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>24/7 US-based support and onboarding</span></li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img src="/images/dialer-benefits.png" alt="Dialer System Benefits" className="rounded-2xl shadow-xl w-full max-w-md" />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Dialer Systems for Every Business Need</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-blue-50 p-8 rounded-2xl shadow">
                <FaRobot className="text-3xl text-primary-600 mb-4" aria-label="Sales Teams" />
                <h3 className="text-xl font-semibold mb-2">Sales Teams</h3>
                <p className="text-gray-700">Accelerate lead follow-up, increase call connects, and close more deals with automated dialing.</p>
              </div>
              <div className="bg-green-50 p-8 rounded-2xl shadow">
                <FaHeadset className="text-3xl text-primary-600 mb-4" aria-label="Support & Service" />
                <h3 className="text-xl font-semibold mb-2">Support & Service</h3>
                <p className="text-gray-700">Deliver proactive customer service and appointment reminders with scheduled outbound calls.</p>
              </div>
              <div className="bg-purple-50 p-8 rounded-2xl shadow">
                <FaUsers className="text-3xl text-primary-600 mb-4" aria-label="Collections & Billing" />
                <h3 className="text-xl font-semibold mb-2">Collections & Billing</h3>
                <p className="text-gray-700">Automate payment reminders, collections, and notifications to improve cash flow and reduce delinquencies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-500 text-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-8 rounded-2xl shadow flex flex-col items-center text-center">
                <p className="mb-4 italic">"PVN Dialer's predictive dialer doubled our team's call volume and helped us hit record sales numbers."</p>
                <span className="font-semibold">— Mark T., Sales Manager</span>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl shadow flex flex-col items-center text-center">
                <p className="mb-4 italic">"The compliance tools give us peace of mind and the analytics make it easy to coach our agents."</p>
                <span className="font-semibold">— Angela W., Operations Director</span>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl shadow flex flex-col items-center text-center">
                <p className="mb-4 italic">"We love the flexibility to run campaigns for sales, service, and collections all from one platform."</p>
                <span className="font-semibold">— Priya S., Customer Success Lead</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Supercharge Your Outbound Calling?</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              <a href="tel:+19045128487" className="inline-flex items-center px-8 py-4 rounded-full bg-secondary-600 hover:bg-secondary-700 text-lg font-semibold shadow-lg transition space-x-3">
                <FaPhoneAlt className="text-white" />
                <span>Call (904) 512-8487 for a Free Consultation</span>
              </a>
            </div>
            <div className="text-lg text-gray-700 mb-2">Or contact us for a free, no-obligation consultation.</div>
            <a href="mailto:info@pvndialer.com" className="inline-flex items-center px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow transition space-x-2">
              <FaPhoneAlt />
              <span>Email Us</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 