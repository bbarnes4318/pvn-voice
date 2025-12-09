import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaPhone, FaCogs, FaChartLine, FaShieldAlt, FaUsers, FaGlobe, FaHeadset, FaCheckCircle, FaArrowRight, FaRocket, FaClock, FaChartBar, FaUserFriends, FaBuilding, FaMobileAlt } from 'react-icons/fa';

export default function VOIPServices() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Business VoIP Services | Professional VoIP Provider - PVN Voice</title>
        <meta name="description" content="Transform your business communications with our professional VoIP phone service. Get reliable, scalable, and feature-rich VoIP solutions from a trusted provider." />
      </Head>

      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
          <div className="container-custom relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                <FaRocket className="mr-2" />
                <span>Enterprise-Grade VoIP Solutions</span>
              </div>
              <h1 className="text-6xl font-bold mb-8 leading-tight">
                Transform Your Business Communications with Professional VoIP Services
              </h1>
              <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Experience crystal-clear voice quality, advanced features, and seamless integration with our reliable VoIP phone service. Join thousands of businesses that trust our solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started Free
                  <FaArrowRight className="ml-2" />
                </Link>
                <Link href="#features" className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Explore Features
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">50%</div>
                <div className="text-gray-600">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Our VoIP Phone Service?
                </h2>
                <p className="text-xl text-gray-600">
                  Experience the future of business communications with our comprehensive VoIP solution
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-8">
                    <div className="bg-primary-50 p-4 rounded-xl mr-6">
                      <FaPhone className="text-primary-600 text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Advanced Call Features</h3>
                  </div>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-primary-600 mt-1 mr-4 flex-shrink-0 text-xl" />
                      <div>
                        <span className="text-lg font-semibold block mb-1">Call forwarding and routing</span>
                        <span className="text-gray-600">Intelligent call routing to the right team member</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-primary-600 mt-1 mr-4 flex-shrink-0 text-xl" />
                      <div>
                        <span className="text-lg font-semibold block mb-1">Voicemail and transcription</span>
                        <span className="text-gray-600">Never miss a message with automatic transcription</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-primary-600 mt-1 mr-4 flex-shrink-0 text-xl" />
                      <div>
                        <span className="text-lg font-semibold block mb-1">Conference calling</span>
                        <span className="text-gray-600">HD quality conference calls with up to 100 participants</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-8">
                    <div className="bg-primary-50 p-4 rounded-xl mr-6">
                      <FaCogs className="text-primary-600 text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Easy Integration</h3>
                  </div>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-primary-600 mt-1 mr-4 flex-shrink-0 text-xl" />
                      <div>
                        <span className="text-lg font-semibold block mb-1">CRM integration</span>
                        <span className="text-gray-600">Seamless integration with popular CRM platforms</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-primary-600 mt-1 mr-4 flex-shrink-0 text-xl" />
                      <div>
                        <span className="text-lg font-semibold block mb-1">Team collaboration tools</span>
                        <span className="text-gray-600">Built-in collaboration features for better teamwork</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-primary-600 mt-1 mr-4 flex-shrink-0 text-xl" />
                      <div>
                        <span className="text-lg font-semibold block mb-1">Mobile app support</span>
                        <span className="text-gray-600">Stay connected on the go with our mobile app</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Benefits of Our Business VoIP Solution
                </h2>
                <p className="text-xl text-gray-600">
                  Discover how our VoIP service can transform your business communications
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-10 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                  <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaChartLine className="text-primary-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Savings</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Reduce your communication costs by up to 50% with our competitive VoIP rates and flexible pricing plans.
                  </p>
                </div>
                <div className="bg-white p-10 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                  <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaGlobe className="text-primary-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Global Reach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Connect with customers worldwide with our international calling features and local phone numbers.
                  </p>
                </div>
                <div className="bg-white p-10 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                  <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaShieldAlt className="text-primary-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Bank-grade encryption and security protocols to protect your communications and sensitive data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  VoIP Service Plans
                </h2>
                <p className="text-xl text-gray-600">
                  Choose the perfect plan for your business needs
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                    <div className="text-4xl font-bold text-primary-600 mb-2">$29.99<span className="text-lg text-gray-600">/month</span></div>
                    <p className="text-gray-600">Perfect for small businesses</p>
                  </div>
                  <ul className="space-y-6 mb-10">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-primary-600 mr-4 text-xl" />
                      <span className="text-lg">Up to 5 users</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-primary-600 mr-4 text-xl" />
                      <span className="text-lg">Basic call features</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-primary-600 mr-4 text-xl" />
                      <span className="text-lg">Mobile app access</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-primary-600 mr-4 text-xl" />
                      <span className="text-lg">Email support</span>
                    </li>
                  </ul>
                  <Link href="/contact" className="block text-center bg-primary-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors">
                    Get Started
                  </Link>
                </div>
                <div className="bg-white p-10 rounded-2xl shadow-lg border-2 border-primary-600 transform scale-105 relative">
                  <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl">
                    Popular
                  </div>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                    <div className="text-4xl font-bold text-primary-600 mb-2">$49.99<span className="text-lg text-gray-600">/month</span></div>
                    <p className="text-gray-600">Ideal for growing businesses</p>
                  </div>
                  <ul className="space-y-6 mb-10">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-primary-600 mr-4 text-xl" />
                      <span className="text-lg">Up to 20 users</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-primary-600 mr-4 text-xl" />
                      <span className="text-lg">Advanced features</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-primary-600 mr-4 text-xl" />
                      <span className="text-lg">Priority support</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-primary-600 mr-4 text-xl" />
                      <span className="text-lg">Analytics dashboard</span>
                    </li>
                  </ul>
                  <Link href="/contact" className="block text-center bg-primary-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors">
                    Get Started
                  </Link>
                </div>
                <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                    <div className="text-4xl font-bold text-primary-600 mb-2">Custom<span className="text-lg text-gray-600">/month</span></div>
                    <p className="text-gray-600">For large organizations</p>
                  </div>
                  <ul className="space-y-6 mb-10">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-primary-600 mr-4 text-xl" />
                      <span className="text-lg">Unlimited users</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-primary-600 mr-4 text-xl" />
                      <span className="text-lg">Custom features</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-primary-600 mr-4 text-xl" />
                      <span className="text-lg">24/7 support</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-primary-600 mr-4 text-xl" />
                      <span className="text-lg">Dedicated account manager</span>
                    </li>
                  </ul>
                  <Link href="/contact" className="block text-center bg-primary-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
          <div className="container-custom relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">
                Ready to Transform Your Business Communications?
              </h2>
              <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Join thousands of businesses that trust our VoIP phone service for their communication needs. Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  Get Started Free
                  <FaArrowRight className="ml-2" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 