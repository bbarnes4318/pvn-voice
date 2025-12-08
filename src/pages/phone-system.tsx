import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaCheck, FaPhoneAlt, FaUsers, FaMobileAlt, FaGlobe, FaChartLine, FaCogs, FaCloud, FaHeadset, FaChartPie, FaBuilding, FaUserTie, FaQuoteLeft, FaDollarSign } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Setting up our PVN Dialer system was surprisingly easy. We were up and running in less than an hour, and the call quality has been exceptional.",
    name: "Michael Rodriguez",
    title: "IT Manager at Apex Solutions"
  },
  {
    quote: "The flexibility of PVN Dialer has been invaluable as we've grown. Adding new team members takes seconds, not days, and the mobile app ensures our sales team never misses an opportunity.",
    name: "Sarah Jenkins",
    title: "Sales Director at NovaTech Inc."
  },
  {
    quote: "The cost savings compared to our old system have been substantial—about 65% less per month—but the biggest benefit has been the reliability. In three years, we haven't experienced any downtime.",
    name: "David Chen",
    title: "CEO of Meridian Consulting"
  }
];

export default function BusinessPhoneSystem() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Cloud Business Phone System | Modern VoIP Solutions for Business</title>
        <meta name="description" content="Upgrade to a modern cloud business phone system with PVN Dialer. Enjoy advanced VoIP features, mobile integration, and cost savings for businesses of all sizes." />
      </Head>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-700 to-primary-400 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Modern Cloud Business Phone System</h1>
            <p className="text-2xl md:text-3xl mb-8 font-medium text-primary-100 drop-shadow">All the advanced features of an enterprise phone system—none of the hardware or hassle.</p>
            <a href="/pricing" className="inline-flex items-center space-x-3 bg-secondary-600 hover:bg-secondary-700 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-cta transition-colors">See Plans & Pricing</a>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">Everything You Need in a Modern Phone System</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center border border-primary-100">
                <FaCogs className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-primary-700 mb-4">Auto-Attendant & IVR</h3>
                <p className="text-gray-700 text-center">Custom greetings and menu options guide callers to the right department or person.</p>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center border border-primary-100">
                <FaMobileAlt className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-primary-700 mb-4">Mobile & Desktop Apps</h3>
                <p className="text-gray-700 text-center">Make and receive business calls from any device, anywhere.</p>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center border border-primary-100">
                <FaChartPie className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-primary-700 mb-4">Call Analytics & Reports</h3>
                <p className="text-gray-700 text-center">Gain insights into call volumes, peak times, and team performance.</p>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center border border-primary-100">
                <FaCloud className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-primary-700 mb-4">Cloud-Based Reliability</h3>
                <p className="text-gray-700 text-center">99.99% uptime, no hardware maintenance, and instant scalability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
          <div className="container-custom flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="flex-1">
              <img src="/images/phone-benefits.png" alt="Cloud Phone System Benefits" className="rounded-xl shadow-lg w-full max-w-md mx-auto md:mx-0" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-primary-700 mb-6">Why Choose PVN Dialer?</h2>
              <ul className="space-y-5 text-lg">
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Save up to 70% compared to traditional phone systems</span></li>
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Set up in minutes, not days or weeks</span></li>
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Work from anywhere on any device</span></li>
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Enterprise-grade reliability with 99.99% uptime</span></li>
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Scale easily as your business grows</span></li>
              </ul>
              <a href="/contact-us" className="mt-8 inline-flex items-center space-x-3 bg-secondary-600 hover:bg-secondary-700 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-cta transition-colors">Get a Custom Quote</a>
            </div>
          </div>
        </section>

        {/* Timeline/How It Works Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">How PVN Dialer Works: Simple, Reliable, Powerful</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center border border-primary-100">
                <span className="text-3xl font-bold text-primary-700 mb-2">1</span>
                <h3 className="text-lg font-bold text-primary-700 mb-2">Sign Up & Configure</h3>
                <p className="text-gray-700 text-center">Choose your plan, select numbers, and configure your system through our intuitive dashboard.</p>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center border border-primary-100">
                <span className="text-3xl font-bold text-primary-700 mb-2">2</span>
                <h3 className="text-lg font-bold text-primary-700 mb-2">Set Up Your Team</h3>
                <p className="text-gray-700 text-center">Add users, assign extensions, and set call routing preferences. Each team member gets access to the mobile and desktop apps.</p>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center border border-primary-100">
                <span className="text-3xl font-bold text-primary-700 mb-2">3</span>
                <h3 className="text-lg font-bold text-primary-700 mb-2">Connect Your Devices</h3>
                <p className="text-gray-700 text-center">Use our apps on existing devices, or connect IP phones if you prefer desk hardware. No special equipment required.</p>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center border border-primary-100">
                <span className="text-3xl font-bold text-primary-700 mb-2">4</span>
                <h3 className="text-lg font-bold text-primary-700 mb-2">Start Communicating</h3>
                <p className="text-gray-700 text-center">Make and receive calls from anywhere, manage settings from your dashboard, and enjoy crystal-clear communications.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">Perfect for the Way Modern Businesses Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center border border-primary-100">
                <FaBuilding className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-primary-700 mb-4">Remote & Hybrid Teams</h3>
                <p className="text-gray-700 text-center">Keep your team connected whether they're in the office, at home, or on the road.</p>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center border border-primary-100">
                <FaUsers className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-primary-700 mb-4">Multiple Locations</h3>
                <p className="text-gray-700 text-center">Connect multiple offices under one unified phone system. Transfer calls between locations seamlessly.</p>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center border border-primary-100">
                <FaHeadset className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-primary-700 mb-4">Customer Service Teams</h3>
                <p className="text-gray-700 text-center">Provide exceptional customer experiences with advanced routing, queuing, and reporting features.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center border border-primary-100">
                  <FaQuoteLeft className="text-3xl text-primary-600 mb-4" />
                  <p className="text-lg text-primary-800 italic mb-4">“{t.quote}”</p>
                  <span className="font-bold text-primary-700">{t.name}</span>
                  <span className="text-primary-600 text-sm">{t.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-400 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business Phone System?</h2>
            <p className="text-xl mb-8 text-primary-100">Join thousands of businesses that trust PVN Dialer for reliable, feature-rich communications.</p>
            <a 
              href="tel:+19045128487" 
              className="inline-flex items-center space-x-3 bg-secondary-600 hover:bg-secondary-700 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-cta transition-colors"
            >
              <FaPhoneAlt className="text-white text-2xl" />
              <span>Call (904) 512-8487 for a Free Consultation</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 