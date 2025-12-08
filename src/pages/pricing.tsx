import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaPhoneAlt, FaHandshake, FaChartLine, FaShieldAlt, FaHeadset } from 'react-icons/fa';

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-primary-100">
      <Head>
        <title>Custom VoIP Solutions - PVN Dialer</title>
        <meta name="description" content="Get a tailored VoIP solution that perfectly matches your business needs and budget. Schedule a free consultation today." />
      </Head>

      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-600 text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Business Deserves a Custom Solution</h1>
              <p className="text-xl text-primary-100 mb-8">
                No one-size-fits-all pricing here. Get a tailored solution that matches your exact needs and budget.
              </p>
              <a 
                href="tel:+19045128487" 
                className="btn-call inline-flex items-center space-x-3 bg-secondary-600 hover:bg-secondary-700"
              >
                <FaPhoneAlt className="text-white" />
                <span>Call (904) 512-8487 for a Free Consultation</span>
              </a>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Why Choose a Custom Solution?</h2>
                <p className="text-xl text-gray-600">
                  Every business has unique communication needs. We work with you to create the perfect solution.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <FaHandshake className="text-4xl text-secondary-400 mr-4" />
                    <h3 className="text-xl font-bold">Personalized Approach</h3>
                  </div>
                  <p className="text-gray-600">
                    We take the time to understand your business goals, team structure, and workflow before recommending a solution.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <FaChartLine className="text-4xl text-secondary-400 mr-4" />
                    <h3 className="text-xl font-bold">Scalable Solutions</h3>
                  </div>
                  <p className="text-gray-600">
                    Your solution grows with your business. Only pay for what you need, when you need it.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <FaShieldAlt className="text-4xl text-secondary-400 mr-4" />
                    <h3 className="text-xl font-bold">Transparent Pricing</h3>
                  </div>
                  <p className="text-gray-600">
                    No hidden fees or surprise charges. Get a clear understanding of your investment before making a decision.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <FaHeadset className="text-4xl text-secondary-400 mr-4" />
                    <h3 className="text-xl font-bold">Dedicated Support</h3>
                  </div>
                  <p className="text-gray-600">
                    Work with a dedicated team that understands your business and is committed to your success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How We Create Your Perfect Solution</h2>
              <div className="space-y-12">
                <div className="flex items-start">
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">1</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
                    <p className="text-gray-600">
                      We start with a detailed discussion about your business needs, challenges, and goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">2</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Custom Solution Design</h3>
                    <p className="text-gray-600">
                      Our experts design a tailored solution that perfectly matches your requirements and budget.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">3</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Seamless Implementation</h3>
                    <p className="text-gray-600">
                      We handle the entire setup process and train your team to ensure a smooth transition.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">4</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">
                      Get continuous support and regular check-ins to ensure your solution keeps delivering value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-600 text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business Communication?</h2>
              <p className="text-xl text-primary-100 mb-8">
                Schedule your free consultation today and discover how we can help you save up to 50% on your communication costs.
              </p>
              <a 
                href="tel:+19045128487" 
                className="btn-call inline-flex items-center space-x-3 bg-secondary-600 hover:bg-secondary-700"
              >
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