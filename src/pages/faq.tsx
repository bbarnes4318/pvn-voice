import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { FaPhoneAlt, FaEnvelope, FaHeadset, FaClock } from 'react-icons/fa';

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-primary-100">
      <Head>
        <title>Frequently Asked Questions - PVN Dialer</title>
        <meta name="description" content="Get answers to common questions about our VoIP phone system, contact center solutions, and business communication services." />
      </Head>

      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-600 text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-primary-100 mb-8">
                Find answers to common questions about our VoIP phone system, contact center solutions, and business communication services.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Component */}
        <FAQ />

        {/* Contact Support Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Need More Help?</h2>
              <p className="text-xl text-gray-600 mb-12">
                Our support team is here to help you with any questions or concerns. Contact us through any of the following channels:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <FaPhoneAlt className="text-3xl text-primary-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                  <p className="text-gray-600 mb-4">24/7 phone support for immediate assistance</p>
                  <a 
                    href="tel:+19045128487" 
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Call (904) 512-8487
                  </a>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <FaEnvelope className="text-3xl text-primary-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-4">Get detailed responses within 24 hours</p>
                  <a 
                    href="mailto:support@pvndialer.com" 
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    support@pvndialer.com
                  </a>
                </div>
              </div>
              <div className="mt-12 flex items-center justify-center space-x-4 text-gray-600">
                <FaHeadset className="text-xl" />
                <span>24/7 Support Available</span>
                <span className="mx-2">•</span>
                <FaClock className="text-xl" />
                <span>Average Response Time: 2 Minutes</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 