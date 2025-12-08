import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { HeroTop, HeroBottom } from '../components/Hero';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import StickyCallButton from '../components/StickyCallButton';
import { FaCheckCircle, FaDollarSign, FaUserClock, FaLock, FaHeadphones } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>PVN Dialer - Business VoIP & Cloud Phone Systems</title>
        <meta property="og:title" content="PVN Dialer - Business VoIP & Cloud Phone Systems" />
        <meta property="og:description" content="Transform your business communication with PVN Dialer. Our cloud-based phone solutions offer enterprise features at small business prices. Contact us today." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="description" content="PVN Dialer provides cloud-based business phone systems with enterprise-grade features at affordable prices. Easy setup, 24/7 support, and no contract required." />
      </Head>

      <Header />
      <main className="flex-grow bg-gradient-to-br from-primary-50 to-primary-100">
        {/* Hero Section */}
        <HeroTop />
        
        {/* Why Choose PVN Dialer Section */}
        <section className="py-24 bg-gradient-to-br from-white to-primary-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-700 mb-4">
                Why <span className="text-secondary-600">200+ Businesses</span> Choose PVN Dialer
              </h2>
              <p className="text-xl text-primary-700 leading-relaxed max-w-3xl mx-auto mb-12">
                Our cloud-based phone solutions deliver enterprise features at small business prices, helping companies communicate better while saving substantially on their telecom costs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 p-8 rounded-2xl shadow-lg text-center border border-primary-100">
                <FaDollarSign className="text-primary-600 text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-700 mb-3">Substantial Cost Savings</h3>
                <p className="text-primary-700 mb-4">Transform your communication costs with our cloud-based solution.</p>
                <ul className="text-left space-y-3">
                  <li className="flex items-start"><FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>Save up to 70% on monthly phone bills</span></li>
                  <li className="flex items-start"><FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>No hardware costs or maintenance fees</span></li>
                  <li className="flex items-start"><FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>Free internal calls between locations</span></li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-secondary-100 to-secondary-50 p-8 rounded-2xl shadow-lg text-center border border-secondary-100">
                <FaUserClock className="text-secondary-600 text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-secondary-700 mb-3">Boost Productivity</h3>
                <p className="text-secondary-700 mb-4">Empower your team with tools that drive efficiency and growth.</p>
                <ul className="text-left space-y-3">
                  <li className="flex items-start"><FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>40% increase in team productivity</span></li>
                  <li className="flex items-start"><FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>Reduce meeting time by 65%</span></li>
                  <li className="flex items-start"><FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>Streamline communication workflows</span></li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 p-8 rounded-2xl shadow-lg text-center border border-primary-100">
                <FaLock className="text-primary-600 text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-700 mb-3">Enterprise Security</h3>
                <p className="text-primary-700 mb-4">Protect your business with military-grade security features.</p>
                <ul className="text-left space-y-3">
                  <li className="flex items-start"><FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>256-bit SSL encryption</span></li>
                  <li className="flex items-start"><FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>HIPAA compliant</span></li>
                  <li className="flex items-start"><FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>Regular security audits</span></li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-secondary-100 to-secondary-50 p-8 rounded-2xl shadow-lg text-center border border-secondary-100">
                <FaHeadphones className="text-secondary-600 text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-secondary-700 mb-3">24/7 Expert Support</h3>
                <p className="text-secondary-700 mb-4">Get help when you need it from our US-based support team.</p>
                <ul className="text-left space-y-3">
                  <li className="flex items-start"><FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>Average response time &lt; 2 minutes</span></li>
                  <li className="flex items-start"><FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>99.9% uptime guarantee</span></li>
                  <li className="flex items-start"><FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" /><span>Dedicated account manager</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <HeroBottom />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
} 