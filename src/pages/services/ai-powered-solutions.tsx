import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaPhoneAlt, FaRobot, FaChartLine, FaUsers, FaCloud, FaCheck, FaMicrochip, FaLightbulb } from 'react-icons/fa';

export default function AIPoweredSolutions() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>AI-Powered Solutions | Advanced Call Center AI & AMD - PVN Voice</title>
        <meta name="description" content="Unlock the power of AI for your business with PVN Voice's AI-powered solutions. Experience industry-leading AI Answering Machine Detection (AI AMD), smart call routing, analytics, and automation." />
        <meta name="keywords" content="AI-Powered Solutions, AI AMD, Answering Machine Detection, Call Center AI, VoIP AI, Automated Dialer, Smart Call Routing, AI Analytics, PVN Voice" />
      </Head>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/ai-hero.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">AI-Powered Solutions</h1>
              <p className="text-2xl md:text-3xl text-primary-100 mb-8 font-medium drop-shadow">Supercharge your communications with artificial intelligence—smarter, faster, and more accurate than ever.</p>
              <a href="tel:+19045128487" className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-colors">
                <FaPhoneAlt className="mr-2" /> Call (904) 512-8487 for a Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">AI-Driven Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaMicrochip className="text-4xl text-primary-600 mb-4" aria-label="AI Answering Machine Detection" />
                <h3 className="text-xl font-semibold mb-2">AI Answering Machine Detection (AI AMD)</h3>
                <p className="text-gray-700 mb-3">Leverage advanced AI to detect answering machines with industry-leading accuracy—minimize agent time wasted and maximize live connections.</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaRobot className="text-4xl text-primary-600 mb-4" aria-label="Smart Call Routing" />
                <h3 className="text-xl font-semibold mb-2">Smart Call Routing</h3>
                <p className="text-gray-700 mb-3">AI routes calls to the best available agent based on intent, skills, and real-time analytics for higher first-call resolution.</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaChartLine className="text-4xl text-primary-600 mb-4" aria-label="AI Analytics & Insights" />
                <h3 className="text-xl font-semibold mb-2">AI Analytics & Insights</h3>
                <p className="text-gray-700 mb-3">Unlock actionable insights from every call—track sentiment, call outcomes, and agent performance with AI-powered analytics.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaCloud className="text-4xl text-primary-600 mb-4" aria-label="Cloud Automation" />
                <h3 className="text-xl font-semibold mb-2">Cloud Automation</h3>
                <p className="text-gray-700 mb-3">Automate repetitive tasks, follow-ups, and workflows with AI-driven triggers and integrations.</p>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaLightbulb className="text-4xl text-primary-600 mb-4" aria-label="Conversational AI" />
                <h3 className="text-xl font-semibold mb-2">Conversational AI</h3>
                <p className="text-gray-700 mb-3">Engage customers with natural, human-like voice bots for surveys, appointment reminders, and more.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaCheck className="text-4xl text-primary-600 mb-4" aria-label="Compliance & Security" />
                <h3 className="text-xl font-semibold mb-2">Compliance & Security</h3>
                <p className="text-gray-700 mb-3">AI ensures your communications are secure and compliant with industry regulations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-100">
          <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose PVN AI-Powered Solutions?</h2>
              <ul className="space-y-5 text-lg">
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Industry-best AI AMD for accurate answering machine detection</span></li>
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Boost agent productivity and live connect rates</span></li>
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Automate and optimize every step of your call process</span></li>
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Gain actionable insights with AI analytics</span></li>
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>24/7 US-based support and onboarding</span></li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img src="/images/ai-benefits.png" alt="AI-Powered Solution Benefits" className="rounded-2xl shadow-xl w-full max-w-md" />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">AI Solutions for Every Business</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-blue-50 p-8 rounded-2xl shadow">
                <FaMicrochip className="text-3xl text-primary-600 mb-4" aria-label="Outbound Campaigns" />
                <h3 className="text-xl font-semibold mb-2">Outbound Campaigns</h3>
                <p className="text-gray-700">Maximize live connects and minimize wasted dials with AI AMD and smart call pacing.</p>
              </div>
              <div className="bg-green-50 p-8 rounded-2xl shadow">
                <FaRobot className="text-3xl text-primary-600 mb-4" aria-label="Customer Service" />
                <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
                <p className="text-gray-700">Route calls, answer FAQs, and automate follow-ups with conversational AI and smart routing.</p>
              </div>
              <div className="bg-purple-50 p-8 rounded-2xl shadow">
                <FaChartLine className="text-3xl text-primary-600 mb-4" aria-label="Compliance & Quality" />
                <h3 className="text-xl font-semibold mb-2">Compliance & Quality</h3>
                <p className="text-gray-700">Ensure every call meets compliance standards and monitor quality with AI-driven analytics.</p>
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
                <p className="mb-4 italic">"The AI AMD is a game changer—our agents spend more time talking to real people and less time on voicemails."</p>
                <span className="font-semibold">— Rachel K., Call Center Director</span>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl shadow flex flex-col items-center text-center">
                <p className="mb-4 italic">"PVN's AI analytics helped us spot trends and improve our scripts for better results."</p>
                <span className="font-semibold">— Mike L., Sales Operations</span>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl shadow flex flex-col items-center text-center">
                <p className="mb-4 italic">"The automation features save us hours every week and our compliance scores have never been higher."</p>
                <span className="font-semibold">— Priya S., Compliance Manager</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the Power of AI?</h2>
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