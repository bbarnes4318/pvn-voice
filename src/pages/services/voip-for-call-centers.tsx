import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaPhoneAlt, FaHeadset, FaChartLine, FaUsers, FaCloud, FaCheck, FaRocket, FaShieldAlt } from 'react-icons/fa';

export default function VoipForCallCenters() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>VoIP for Call Centers | Cloud Call Center Solutions - PVN Voice</title>
        <meta name="description" content="Transform your call center with PVN Voice's cloud-based VoIP solutions. Boost agent productivity, improve customer experience, and reduce costs with advanced call center features." />
        <meta name="keywords" content="VoIP for Call Centers, Cloud Call Center, Call Center Software, VoIP Solutions, Business VoIP, Contact Center, Inbound Call Center, Outbound Call Center, Call Routing, PVN Voice" />
      </Head>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/call-center-hero.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">VoIP for Call Centers</h1>
              <p className="text-2xl md:text-3xl text-primary-100 mb-8 font-medium drop-shadow">Empower your call center with cloud-based VoIP solutions for superior customer service and agent performance.</p>
              <a href="tel:+19045128487" className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-colors">
                <FaPhoneAlt className="mr-2" /> Call (904) 512-8487 for a Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">Cloud Call Center Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaHeadset className="text-4xl text-primary-600 mb-4" aria-label="Omnichannel Support" />
                <h3 className="text-xl font-semibold mb-2">Omnichannel Support</h3>
                <p className="text-gray-700 mb-3">Voice, SMS, chat, and email in one unified platform for seamless customer interactions.</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaChartLine className="text-4xl text-primary-600 mb-4" aria-label="Real-Time Analytics" />
                <h3 className="text-xl font-semibold mb-2">Real-Time Analytics</h3>
                <p className="text-gray-700 mb-3">Monitor call center performance, agent activity, and customer satisfaction with live dashboards.</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaUsers className="text-4xl text-primary-600 mb-4" aria-label="Intelligent Call Routing" />
                <h3 className="text-xl font-semibold mb-2">Intelligent Call Routing</h3>
                <p className="text-gray-700 mb-3">Automatically direct calls to the best available agent based on skills, availability, and customer needs.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaCloud className="text-4xl text-primary-600 mb-4" aria-label="100% Cloud-Based" />
                <h3 className="text-xl font-semibold mb-2">100% Cloud-Based</h3>
                <p className="text-gray-700 mb-3">No hardware required. Scale instantly and support remote or hybrid teams with ease.</p>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaRocket className="text-4xl text-primary-600 mb-4" aria-label="Auto Dialer & Power Dialer" />
                <h3 className="text-xl font-semibold mb-2">Auto Dialer & Power Dialer</h3>
                <p className="text-gray-700 mb-3">Boost outbound productivity with predictive, progressive, and preview dialing modes.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaShieldAlt className="text-4xl text-primary-600 mb-4" aria-label="Enterprise Security" />
                <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Security</h3>
                <p className="text-gray-700 mb-3">Keep customer data safe with end-to-end encryption, compliance tools, and access controls.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-100">
          <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why PVN Voice for Call Centers?</h2>
              <ul className="space-y-5 text-lg">
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Increase agent productivity and reduce wait times</span></li>
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Enhance customer experience with fast, personalized service</span></li>
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Lower operational costs with cloud-based infrastructure</span></li>
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Integrate with leading CRMs and help desk platforms</span></li>
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>24/7 US-based support and onboarding assistance</span></li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img src="/images/call-center-benefits.png" alt="VoIP Call Center Benefits" className="rounded-2xl shadow-xl w-full max-w-md" />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Perfect for Every Call Center Environment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-blue-50 p-8 rounded-2xl shadow">
                <FaHeadset className="text-3xl text-primary-600 mb-4" aria-label="Inbound Call Centers" />
                <h3 className="text-xl font-semibold mb-2">Inbound Call Centers</h3>
                <p className="text-gray-700">Deliver exceptional support and resolve customer issues quickly with intelligent call routing and real-time analytics.</p>
              </div>
              <div className="bg-green-50 p-8 rounded-2xl shadow">
                <FaRocket className="text-3xl text-primary-600 mb-4" aria-label="Outbound Call Centers" />
                <h3 className="text-xl font-semibold mb-2">Outbound Call Centers</h3>
                <p className="text-gray-700">Maximize agent efficiency and connect with more leads using auto dialers and CRM integrations.</p>
              </div>
              <div className="bg-purple-50 p-8 rounded-2xl shadow">
                <FaUsers className="text-3xl text-primary-600 mb-4" aria-label="Blended Call Centers" />
                <h3 className="text-xl font-semibold mb-2">Blended Call Centers</h3>
                <p className="text-gray-700">Handle inbound and outbound calls seamlessly with a unified, flexible platform.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-500 text-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Call Center Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-8 rounded-2xl shadow flex flex-col items-center text-center">
                <p className="mb-4 italic">"PVN Voice helped us cut our average handle time by 30% and our customer satisfaction scores have never been higher."</p>
                <span className="font-semibold">— Lisa M., Call Center Manager</span>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl shadow flex flex-col items-center text-center">
                <p className="mb-4 italic">"The real-time analytics and reporting are game changers for our team leaders. We can spot issues and coach agents instantly."</p>
                <span className="font-semibold">— Tom S., Operations Director</span>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl shadow flex flex-col items-center text-center">
                <p className="mb-4 italic">"We switched to PVN Voice and saved over 40% on our phone costs while getting more features than ever before."</p>
                <span className="font-semibold">— Priya R., Customer Experience Lead</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Call Center?</h2>
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