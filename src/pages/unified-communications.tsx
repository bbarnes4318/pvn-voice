import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaCheck, FaPhoneAlt, FaVideo, FaComments, FaUsers, FaDesktop, FaCloud, FaShieldAlt, FaChartLine, FaRobot, FaGlobe, FaHeadset, FaEnvelope, FaStar, FaDollarSign } from 'react-icons/fa';

export default function UnifiedCommunications() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-primary-100">
      <Head>
        <title>Unified Communications Platform | PVN Dialer</title>
        <meta name="description" content="Unify your business communications with PVN Dialer: voice, video, chat, and collaboration in one secure, cloud-based platform. Boost productivity, save costs, and empower your team from anywhere." />
        <meta name="keywords" content="Unified Communications, Business Phone, Video Conferencing, Team Messaging, Cloud PBX, Collaboration, PVN Dialer" />
      </Head>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-blue-500 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/unified-hero.jpg')] bg-cover bg-center opacity-20" aria-hidden="true"></div>
          <div className="relative z-10 container-custom text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">Unified Communications for Modern Business</h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 font-medium">All your business communications—voice, video, chat, and collaboration—in one secure, cloud-based platform.</p>
            <a 
              href="tel:+19045128487" 
              className="inline-flex items-center px-8 py-4 rounded-xl bg-secondary-600 hover:bg-secondary-700 text-lg font-semibold shadow-lg transition space-x-3"
            >
              <FaPhoneAlt className="text-white" />
              <span>Call (904) 512-8487 for a Free Consultation</span>
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-white to-primary-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-700">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaVideo className="text-4xl text-primary-600 mb-4" aria-label="HD Video Conferencing" />
                <h3 className="text-xl font-semibold mb-2">HD Video Conferencing</h3>
                <p className="text-gray-700 mb-3">Crystal-clear video meetings with screen sharing, recording, and virtual backgrounds.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaComments className="text-4xl text-primary-600 mb-4" aria-label="Team Messaging" />
                <h3 className="text-xl font-semibold mb-2">Team Messaging</h3>
                <p className="text-gray-700 mb-3">Real-time chat, file sharing, and threaded conversations for seamless collaboration.</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaUsers className="text-4xl text-primary-600 mb-4" aria-label="Presence Management" />
                <h3 className="text-xl font-semibold mb-2">Presence Management</h3>
                <p className="text-gray-700 mb-3">See team availability and connect instantly via preferred channels.</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaDesktop className="text-4xl text-primary-600 mb-4" aria-label="Desktop & Mobile Apps" />
                <h3 className="text-xl font-semibold mb-2">Desktop & Mobile Apps</h3>
                <p className="text-gray-700 mb-3">Work from anywhere with seamless device switching and notifications.</p>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaRobot className="text-4xl text-primary-600 mb-4" aria-label="AI Productivity Tools" />
                <h3 className="text-xl font-semibold mb-2">AI Productivity Tools</h3>
                <p className="text-gray-700 mb-3">Automated meeting notes, smart scheduling, and content suggestions.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaShieldAlt className="text-4xl text-primary-600 mb-4" aria-label="Enterprise Security" />
                <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Security</h3>
                <p className="text-gray-700 mb-3">End-to-end encryption, access controls, and compliance tools.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Split Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-100">
          <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-700">Why Choose PVN Dialer?</h2>
              <ul className="space-y-5 text-lg">
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Boost productivity—save up to 40 minutes per employee daily</span></li>
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Reduce costs with cloud-based infrastructure</span></li>
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>Work securely from anywhere, on any device</span></li>
                <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3" /><span>24/7 US-based support</span></li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img src="/images/unified-benefits.png" alt="Unified Communications Benefits" className="rounded-2xl shadow-xl w-full max-w-md" />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-br from-white to-primary-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-700">Perfect for Every Work Environment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-blue-50 p-8 rounded-2xl shadow">
                <FaGlobe className="text-3xl text-primary-600 mb-4" aria-label="Remote Teams" />
                <h3 className="text-xl font-semibold mb-2">Remote & Distributed Teams</h3>
                <p className="text-gray-700">Keep remote workers connected and engaged with virtual collaboration tools.</p>
              </div>
              <div className="bg-green-50 p-8 rounded-2xl shadow">
                <FaDesktop className="text-3xl text-primary-600 mb-4" aria-label="Hybrid Workforces" />
                <h3 className="text-xl font-semibold mb-2">Hybrid Workforces</h3>
                <p className="text-gray-700">Support flexible work with seamless transitions between office and remote.</p>
              </div>
              <div className="bg-purple-50 p-8 rounded-2xl shadow">
                <FaUsers className="text-3xl text-primary-600 mb-4" aria-label="Customer Service Teams" />
                <h3 className="text-xl font-semibold mb-2">Customer Service Teams</h3>
                <p className="text-gray-700">Deliver exceptional service with integrated voice, chat, and ticketing.</p>
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
                <FaStar className="text-yellow-300 text-2xl mb-2" />
                <p className="mb-4 italic">"PVN Dialer unified our communications and made remote work effortless. Our team is more productive than ever!"</p>
                <span className="font-semibold">— Sarah L., Operations Manager</span>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl shadow flex flex-col items-center text-center">
                <FaStar className="text-yellow-300 text-2xl mb-2" />
                <p className="mb-4 italic">"The video meetings are crystal clear and the support team is always there when we need them."</p>
                <span className="font-semibold">— Mike D., IT Director</span>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl shadow flex flex-col items-center text-center">
                <FaStar className="text-yellow-300 text-2xl mb-2" />
                <p className="mb-4 italic">"We cut our phone costs in half and our team loves the new messaging features."</p>
                <span className="font-semibold">— Priya S., Customer Success Lead</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Preview / CTA Section */}
        <section className="py-20 bg-gradient-to-br from-white to-primary-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary-700">Simple, Transparent Pricing</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              <div className="bg-gradient-to-br from-primary-100 to-blue-50 p-8 rounded-2xl shadow w-full max-w-xs mx-auto flex flex-col items-center">
                <FaDollarSign className="text-3xl text-primary-600 mb-2" />
                <div className="text-4xl font-bold mb-2">Custom Quote</div>
                <div className="text-gray-700 mb-4">Get a tailored solution for your business. Only pay for what you need.</div>
                <a href="tel:+19045128487" className="inline-flex items-center px-6 py-3 rounded-full bg-secondary-600 hover:bg-secondary-700 text-white font-semibold shadow transition space-x-2">
                  <FaPhoneAlt />
                  <span>Call (904) 512-8487</span>
                </a>
              </div>
            </div>
            <div className="text-lg text-primary-700 mb-2">Or contact us for a free, no-obligation consultation.</div>
            <a href="mailto:info@pvndialer.com" className="inline-flex items-center px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow transition space-x-2">
              <FaEnvelope />
              <span>Email Us</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 