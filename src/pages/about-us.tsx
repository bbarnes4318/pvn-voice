import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaPhone, FaChartLine, FaShieldAlt, FaUserTie, FaHandshake, FaQuoteLeft, FaAward, FaUsers, FaRocket, FaLightbulb, FaHeart } from 'react-icons/fa';

const team = [
  {
    name: 'James Christopher',
    role: 'Founder & CEO',
    img: '/images/team-placeholder-1.jpg',
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-primary-100">
      <Head>
        <title>About Us - PVN Dialer</title>
        <meta name="description" content="Learn more about PVN Dialer, our mission, values, and dedicated team helping businesses communicate better." />
      </Head>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-900 to-primary-700 text-white py-24 overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[url('/images/about-hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight">Meet PVN Dialer</h1>
              <p className="text-2xl md:text-3xl text-primary-100 mb-8 font-medium drop-shadow">Empowering businesses to connect, innovate, and grow—one call at a time.</p>
              <a href="#team" className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-colors">Meet Our Team</a>
            </div>
          </div>
        </section>

        {/* Company Timeline / Our Story */}
        <section className="py-20 bg-gradient-to-br from-primary-100 to-primary-50">
          <div className="container-custom">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-primary-800 tracking-tight">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              <ol className="relative border-l-4 border-primary-200">
                <li className="mb-12 ml-6">
                  <div className="absolute w-6 h-6 bg-primary-600 rounded-full -left-3 flex items-center justify-center text-white"><FaRocket /></div>
                  <h3 className="text-xl font-bold text-primary-700 mb-2">2023: Founded</h3>
                  <p className="text-gray-700 mb-2">PVN Dialer is born in Florida by telecom experts who saw a need for flexible, affordable, and feature-rich phone systems for call centers and businesses worldwide.</p>
                </li>
                <li className="mb-12 ml-6">
                  <div className="absolute w-6 h-6 bg-primary-600 rounded-full -left-3 flex items-center justify-center text-white"><FaLightbulb /></div>
                  <h3 className="text-xl font-bold text-primary-700 mb-2">2024: First 100 Clients</h3>
                  <p className="text-gray-700 mb-2">Rapid growth as word spreads about our reliability, ease of use, and outstanding support.</p>
                </li>
                <li className="mb-12 ml-6">
                  <div className="absolute w-6 h-6 bg-primary-600 rounded-full -left-3 flex items-center justify-center text-white"><FaAward /></div>
                  <h3 className="text-xl font-bold text-primary-700 mb-2">2025: National Expansion</h3>
                  <p className="text-gray-700 mb-2">PVN Dialer becomes a trusted VoIP provider for businesses across the Globe, with a focus on innovation, data security, and customer success.</p>
                </li>
                <li className="ml-6">
                  <div className="absolute w-6 h-6 bg-primary-600 rounded-full -left-3 flex items-center justify-center text-white"><FaUsers /></div>
                  <h3 className="text-xl font-bold text-primary-700 mb-2">Today: 250+ Call Centers & Businesses Served</h3>
                  <p className="text-gray-700 mb-2">We continue to help companies of all sizes communicate more effectively while saving on telecom costs.</p>
                </li>
              </ol>
              <div className="mt-12 bg-gradient-to-r from-primary-200 to-primary-50 p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6">
                <FaQuoteLeft className="text-4xl text-primary-600 mb-4 md:mb-0 md:mr-6" />
                <blockquote className="text-xl text-primary-800 font-semibold italic">“We started PVN Dialer to give every business—big or small—the power to communicate like an enterprise, without the enterprise price tag.”</blockquote>
                <span className="block text-primary-600 font-bold mt-4 md:mt-0 md:ml-6">— Founder-James Christopher</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-gradient-to-br from-white to-primary-100">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">Our Mission & Values</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 p-8 rounded-2xl shadow-lg flex flex-col items-center">
                <FaRocket className="text-4xl text-secondary-600 mb-4" />
                <h3 className="text-xl font-bold text-primary-600 mb-2">Innovation</h3>
                <p className="text-gray-700 text-center">We continuously develop and improve our technology to stay ahead of evolving business needs and communication trends.</p>
              </div>
              <div className="bg-gradient-to-br from-secondary-100 to-secondary-50 p-8 rounded-2xl shadow-lg flex flex-col items-center">
                <FaShieldAlt className="text-4xl text-secondary-600 mb-4" />
                <h3 className="text-xl font-bold text-primary-600 mb-2">Reliability</h3>
                <p className="text-gray-700 text-center">We build and maintain our systems with multiple redundancies and rigorous testing to ensure your business never misses a call.</p>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 p-8 rounded-2xl shadow-lg flex flex-col items-center">
                <FaLightbulb className="text-4xl text-secondary-600 mb-4" />
                <h3 className="text-xl font-bold text-primary-600 mb-2">Simplicity</h3>
                <p className="text-gray-700 text-center">We believe powerful technology should be easy to use. Our solutions are designed to be intuitive for users at all technical levels.</p>
              </div>
              <div className="bg-gradient-to-br from-secondary-100 to-secondary-50 p-8 rounded-2xl shadow-lg flex flex-col items-center">
                <FaHeart className="text-4xl text-secondary-600 mb-4" />
                <h3 className="text-xl font-bold text-primary-600 mb-2">Customer Success</h3>
                <p className="text-gray-700 text-center">Your success is our success. We measure our achievements by how well our solutions help your business grow and thrive.</p>
              </div>
            </div>
            <div className="max-w-2xl mx-auto mt-12 bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-primary-600 mb-2">Our Mission</h3>
              <p className="text-gray-700 text-lg">To empower businesses with communication tools that are reliable, intuitive, and affordable, enabling them to connect better with their customers and teams.</p>
            </div>
          </div>
        </section>

        {/* Credentials & Affiliations */}
        <section className="py-20 bg-gradient-to-br from-primary-100 to-primary-50">
          <div className="container-custom">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-primary-800 tracking-tight">Credentials & Affiliations</h2>
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-white to-primary-50 p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-primary-600 mb-4">Our Credentials</h3>
              <p className="text-lg text-primary-700 mb-6">We're proud to be recognized by the industry's most trusted organizations.</p>
              <ul className="flex flex-col items-center space-y-4">
                <li className="flex items-center space-x-3">
                  <img src="/images/bbb-badge.png" alt="BBB A+" className="w-16 h-16 object-contain" />
                  <span className="text-lg text-gray-700">BBB Accredited, A+ Rating</span>
                </li>
                <li className="flex items-center space-x-3">
                  <img src="/images/google-partner.png" alt="Google Partner" className="w-16 h-16 object-contain" />
                  <span className="text-lg text-gray-700">Certified Google Partner</span>
                </li>
                <li className="flex items-center space-x-3">
                  <img src="/images/microsoft-teams.png" alt="Microsoft Teams Certified" className="w-16 h-16 object-contain" />
                  <span className="text-lg text-gray-700">Microsoft Teams Integration Partner</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-500 text-white text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">Ready to Experience Better Business Communication?</h2>
            <p className="text-2xl mb-8 text-primary-100 font-medium drop-shadow">
              Join thousands of businesses that trust PVN Dialer for their critical communications needs.
            </p>
            <a 
              href="tel:+19045128487" 
              className="inline-flex items-center space-x-3 bg-secondary-600 hover:bg-secondary-700 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-colors"
            >
              <FaPhone className="text-white text-2xl" />
              <span>Call (904) 512-8487 Now</span>
            </a>
            <p className="mt-4 text-lg text-primary-100">
              Free consultation • No obligation
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 