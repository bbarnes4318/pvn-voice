import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaCheck, FaPhoneAlt, FaHeadset, FaChartBar, FaRobot, FaUsers, FaShieldAlt, FaMicrophone, FaClock, FaEnvelope, FaComments, FaMobileAlt, FaDesktop, FaCloud, FaChartLine, FaUserTie, FaHandshake, FaPlug, FaCode, FaSync, FaGlobe, FaCog, FaLaptop, FaServer, FaDatabase, FaNetworkWired, FaLock, FaBell, FaVideo, FaFileAlt, FaShareAlt } from 'react-icons/fa';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>VOIP & Dialer Services for Call Centers | PVN Dialer</title>
        <meta name="description" content="Transform your call center with advanced VOIP and dialer solutions. Discover features, benefits, and AI-powered enhancements for modern call centers." />
      </Head>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-700 to-primary-400 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Elevate Your Call Center Operations</h1>
            <p className="text-2xl md:text-3xl mb-8 font-medium text-primary-100 drop-shadow">Comprehensive VOIP and Dialer Services</p>
            <p className="text-lg mb-8 text-primary-50">Cutting-edge VOIP systems and intelligent Dialer solutions engineered to empower your agents, streamline global operations, and drive unparalleled efficiency and customer satisfaction.</p>
            <a href="tel:+19045128487" className="inline-flex items-center space-x-3 bg-secondary-600 hover:bg-secondary-700 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-cta transition-colors">
              <FaPhoneAlt className="text-white text-2xl" />
              <span>Call (904) 512-8487 for a Free Consultation</span>
            </a>
          </div>
        </section>

        {/* Advanced VOIP Solutions */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-primary-700">Advanced VOIP Solutions</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center border border-primary-100">
                <FaGlobe className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-primary-700 mb-4">Crystal-Clear Global Communication</h3>
                <ul className="space-y-3 text-lg text-gray-700 mb-4 text-left max-w-md mx-auto">
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Global, local, and toll-free numbers</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> HD voice quality for every call</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> 99.999% uptime reliability</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Instantly scalable platform</li>
                </ul>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center border border-primary-100">
                <FaUsers className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-primary-700 mb-4">Intelligent Call Management</h3>
                <ul className="space-y-3 text-lg text-gray-700 mb-4 text-left max-w-md mx-auto">
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Automatic call distribution (ACD)</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Multi-level IVR & self-service</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Skill-based routing</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Advanced queuing & callback</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Voicemail-to-email & transcription</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Insights & Integration */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary-700">Actionable Insights & Seamless Workflow Integration</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
                <FaChartBar className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-primary-700 mb-4">Turn Data Into Strategy</h3>
                <ul className="space-y-3 text-lg text-gray-700 mb-4 text-left max-w-md mx-auto">
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Transform call data into actionable insights</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Integrate with your favorite business tools</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Drive continuous improvement and customer satisfaction</li>
                </ul>
                <p className="text-gray-700">Leverage analytics and seamless integrations to deliver exceptional customer experiences.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow flex flex-col justify-center text-center border border-primary-100">
                <ul className="space-y-4 text-gray-700 mb-4">
                  <li className="flex items-start"><FaFileAlt className="text-primary-600 mt-1 mr-3" /><span><b>Comprehensive Call Recording:</b> Capture all calls for quality assurance, training, compliance, and dispute resolution.</span></li>
                  <li className="flex items-start"><FaChartBar className="text-primary-600 mt-1 mr-3" /><span><b>Real-Time Analytics & Reporting:</b> Dashboards and reports on key metrics like AHT, FCR, call volume, and agent performance.</span></li>
                  <li className="flex items-start"><FaPlug className="text-primary-600 mt-1 mr-3" /><span><b>CRM & Business Tool Integration:</b> Integrate with Salesforce, HubSpot, Zendesk, and more for streamlined workflows.</span></li>
                  <li className="flex items-start"><FaRobot className="text-primary-600 mt-1 mr-3" /><span><b>AI-Powered Insights:</b> AI call summaries, sentiment analysis, and conversation intelligence for coaching and optimization.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dialer Systems */}
        <section className="py-20 bg-gradient-to-br from-secondary-50 to-secondary-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-secondary-700">High-Performance Dialer Systems</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center border border-secondary-100">
                <FaSync className="text-4xl text-secondary-600 mb-4" />
                <h3 className="text-2xl font-bold text-secondary-700 mb-4">Smart Dialing Modes</h3>
                <ul className="space-y-3 text-lg text-gray-700 mb-4 text-left max-w-md mx-auto">
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Predictive, progressive, and power dialers</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> AI-powered call connection</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Consistent call flow for agents</li>
                </ul>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center border border-secondary-100">
                <FaUserTie className="text-4xl text-secondary-600 mb-4" />
                <h3 className="text-2xl font-bold text-secondary-700 mb-4">Personalized Outreach</h3>
                <ul className="space-y-3 text-lg text-gray-700 mb-4 text-left max-w-md mx-auto">
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Preview dialer for high-value calls</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Dynamic scripting for compliance</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> CRM data pop-ups for context</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Efficiency */}
        <section className="py-16 bg-gradient-to-br from-primary-50 to-primary-100">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary-700">Ensuring Compliance & Operational Efficiency</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-8 border-primary-600 bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
                <FaShieldAlt className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-primary-700 mb-4">Compliance & Efficiency</h3>
                <ul className="space-y-3 text-lg text-gray-700 mb-4 text-left max-w-md mx-auto">
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Stay compliant with industry regulations</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Maximize agent efficiency and campaign results</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Automated tools for DNC, consent, and reporting</li>
                </ul>
                <p className="text-gray-700">Our dialer solutions are built for compliance and performance—so you can focus on results, not risk.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow flex flex-col justify-center text-center border border-primary-100">
                <ul className="space-y-4 text-gray-700 mb-4">
                  <li className="flex items-start"><FaMicrophone className="text-primary-600 mt-1 mr-3" /><span><b>Answering Machine Detection (AMD):</b> Intelligently identifies answering machines and voicemails, saving agent time.</span></li>
                  <li className="flex items-start"><FaEnvelope className="text-primary-600 mt-1 mr-3" /><span><b>Automated Voicemail Drop:</b> Agents leave a pre-recorded voicemail with a single click.</span></li>
                  <li className="flex items-start"><FaLock className="text-primary-600 mt-1 mr-3" /><span><b>DNC List Management & TCPA Compliance:</b> Automatically scrub against Do Not Call lists and manage consent for compliance.</span></li>
                  <li className="flex items-start"><FaShieldAlt className="text-primary-600 mt-1 mr-3" /><span><b>Caller ID Reputation Management:</b> Protect your outbound caller IDs from being flagged as spam.</span></li>
                  <li className="flex items-start"><FaChartBar className="text-primary-600 mt-1 mr-3" /><span><b>Campaign Management & Real-Time Analytics:</b> Set up, manage, and monitor campaigns with real-time metrics.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Powered Enhancements */}
        <section className="py-20 bg-gradient-to-br from-primary-100 to-primary-200">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-primary-700">AI-Powered Enhancements</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center border border-primary-200">
                <FaRobot className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-primary-700 mb-4">Smarter Conversations</h3>
                <ul className="space-y-3 text-lg text-gray-700 mb-4 text-left max-w-md mx-auto">
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> AI call summaries & transcription</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Sentiment analysis in real time</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Real-time agent coaching</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Intelligent virtual agents (IVAs)</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-200 to-primary-100 p-10 rounded-2xl shadow-lg flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-primary-700 mb-4">AI in Every Interaction</h3>
                <p className="text-lg text-gray-700 mb-4">Artificial Intelligence is woven into both our VOIP and Dialer services to provide deeper insights, automate routine tasks, and elevate both agent and customer experiences.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration & Customization */}
        <section className="py-16 bg-gradient-to-br from-secondary-50 to-secondary-100">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-secondary-700">Seamless Integration & Tailored Customization</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-secondary-100 to-secondary-50 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
                <FaPlug className="text-4xl text-secondary-600 mb-4" />
                <h3 className="text-2xl font-bold text-secondary-700 mb-4">Flexible Integration & Customization</h3>
                <ul className="space-y-3 text-lg text-gray-700 mb-4 text-left max-w-md mx-auto">
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Seamless integration with your tech stack</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Custom solutions for any business size</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Tailored packages for your needs and budget</li>
                </ul>
                <p className="text-gray-700">We work with you to build the perfect solution for your unique requirements.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow flex flex-col justify-center text-center border border-secondary-100">
                <ul className="space-y-4 text-gray-700 mb-4">
                  <li className="flex items-start"><FaPlug className="text-secondary-600 mt-1 mr-3" /><span><b>Integration Capabilities:</b> Robust APIs and pre-built integrations with leading CRM, helpdesk, and third-party applications.</span></li>
                  <li className="flex items-start"><FaCog className="text-secondary-600 mt-1 mr-3" /><span><b>Customizable Solutions:</b> Tailored packages for small, growing call centers or large, multi-site enterprises.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-primary-700">Why Partner With Us?</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center border border-primary-100">
                <FaHandshake className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-primary-700 mb-4">Your Strategic Ally</h3>
                <ul className="space-y-3 text-lg text-gray-700 mb-4 text-left max-w-md mx-auto">
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Decades of call center expertise</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Relentless focus on client success</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Enterprise-grade security & reliability</li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-2" /> Measurable ROI for every client</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 p-10 rounded-2xl shadow-lg flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-primary-700 mb-4">More Than a Vendor</h3>
                <p className="text-lg text-gray-700 mb-4">We are committed to being more than just a vendor; we are your strategic ally in achieving call center excellence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-400 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Call Center?</h2>
            <p className="text-xl mb-8 text-primary-100">Discover how our intelligent VOIP and Dialer services can revolutionize your call center's performance, enhance customer engagement, and drive sustainable growth.</p>
            <a href="tel:+19045128487" className="inline-flex items-center space-x-3 bg-secondary-600 hover:bg-secondary-700 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-cta transition-colors">
              <FaPhoneAlt className="text-white text-2xl" />
              <span>Call (904) 512-8487 Now</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 