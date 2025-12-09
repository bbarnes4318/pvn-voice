import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaCheck, FaPhoneAlt, FaHeadset, FaChartBar, FaRobot, FaUsers, FaShieldAlt, FaMicrophone, FaClock, FaEnvelope, FaComments, FaMobileAlt, FaDesktop, FaCloud, FaChartLine, FaUserTie, FaHandshake } from 'react-icons/fa';

export default function ContactCenter() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-primary-100">
      <Head>
        <title>Cloud Contact Center - PVN Voice</title>
        <meta name="description" content="Provide exceptional customer experiences with our powerful yet easy-to-use contact center solution. Scale agents up or down as needed without hardware limitations." />
      </Head>

      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/remote.png')] bg-cover bg-center opacity-20"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Cloud Contact Center</h1>
              <p className="text-2xl md:text-3xl text-primary-100 mb-8 font-medium drop-shadow">Effortless customer experiences. Empowered agents. Limitless scalability.</p>
              <a 
                href="tel:+19045128487" 
                className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-colors">
                <FaPhoneAlt className="mr-2" /> Call (904) 512-8487 for a Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16 bg-gradient-to-br from-white to-primary-50">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">Core Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
                <FaHeadset className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Omnichannel Support</h3>
                <p className="text-gray-700 mb-3">Handle customer interactions across voice, email, and chat from a single unified interface.</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
                <FaChartBar className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
                <p className="text-gray-700 mb-3">Real-time insights and reporting to optimize your contact center performance.</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
                <FaRobot className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI-Powered Features</h3>
                <p className="text-gray-700 mb-3">Leverage AI for intelligent routing, sentiment analysis, and automated responses.</p>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
                <FaUsers className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Remote Agent Support</h3>
                <p className="text-gray-700 mb-3">Enable your agents to work from anywhere with secure, cloud-based access.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
                <FaShieldAlt className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                <p className="text-gray-700 mb-3">Protect sensitive customer data with advanced security and compliance tools.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
                <FaMicrophone className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Management</h3>
                <p className="text-gray-700 mb-3">Monitor and improve agent performance with call recording and coaching tools.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-primary-50 to-primary-100">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">Business Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-2xl shadow flex flex-col items-center text-center border border-primary-100">
                <FaChartLine className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Improved Efficiency</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Reduce average handle time</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Optimize agent productivity</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Streamline workflows</span></li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow flex flex-col items-center text-center border border-primary-100">
                <FaUserTie className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Enhanced Customer Experience</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Faster response times</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Personalized interactions</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Improved satisfaction</span></li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow flex flex-col items-center text-center border border-primary-100">
                <FaHandshake className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Better Customer Retention</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Proactive support</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Personalized service</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Improved loyalty</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gradient-to-br from-white to-primary-50">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">Perfect for Your Industry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                <p className="text-gray-700 mb-4">Deliver exceptional customer service with our comprehensive support tools and features.</p>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>24/7 support availability</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Multi-channel support</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Knowledge base integration</span></li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-2">Sales & Marketing</h3>
                <p className="text-gray-700 mb-4">Boost sales and marketing effectiveness with integrated contact center capabilities.</p>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Lead qualification</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Campaign management</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Sales analytics</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-500 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 drop-shadow">Ready to Transform Your Contact Center?</h2>
              <p className="text-2xl text-primary-100 mb-8 font-medium drop-shadow">Contact us today to learn how our cloud contact center solution can help you deliver exceptional customer experiences.</p>
              <a 
                href="tel:+19045128487" 
                className="inline-flex items-center px-8 py-4 rounded-xl bg-secondary-600 hover:bg-secondary-700 text-lg font-semibold shadow-lg transition space-x-3">
                <FaPhoneAlt className="text-white" />
                <span>Call (904) 512-8487 for a Free Consultation</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 