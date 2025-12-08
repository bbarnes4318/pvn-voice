import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaPhone, FaCogs, FaChartLine, FaShieldAlt, FaUsers, FaGlobe, FaHeadset, FaCheckCircle, FaArrowRight, FaRocket, FaClock, FaChartBar, FaUserFriends, FaBuilding, FaMobileAlt, FaCloud, FaServer, FaNetworkWired } from 'react-icons/fa';

export default function CloudPBXServices() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Cloud PBX Services | Hosted PBX Features - PVN Dialer</title>
        <meta name="description" content="Transform your business with our Cloud PBX and virtual phone system. Get enterprise-grade hosted PBX features with advanced call management and seamless integration." />
      </Head>

      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
          <div className="container-custom relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                <FaCloud className="mr-2" />
                <span>Next-Generation Cloud PBX</span>
              </div>
              <h1 className="text-6xl font-bold mb-8 leading-tight">
                Modern Cloud PBX with Advanced Hosted PBX Features
              </h1>
              <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Experience the power of a virtual phone system with enterprise-grade features, seamless integration, and unmatched reliability. Transform your business communications today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  Get Started Free
                  <FaArrowRight className="ml-2" />
                </Link>
                <Link href="#features" className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
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
                <div className="text-4xl font-bold text-primary-600 mb-2">99.99%</div>
                <div className="text-gray-600">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">60%</div>
                <div className="text-gray-600">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-600">Technical Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">15K+</div>
                <div className="text-gray-600">Active Users</div>
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
                  Hosted PBX Features That Transform Your Business
                </h2>
                <p className="text-xl text-gray-600">
                  Experience the full power of our virtual phone system with advanced cloud PBX capabilities
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-8">
                    <div className="bg-primary-50 p-4 rounded-xl mr-6">
                      <FaServer className="text-primary-600 text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Advanced Call Management</h3>
                  </div>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-primary-600 mt-1 mr-4 flex-shrink-0 text-xl" />
                      <div>
                        <span className="text-lg font-semibold block mb-1">Auto-attendant</span>
                        <span className="text-gray-600">Professional call routing and greeting system</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-primary-600 mt-1 mr-4 flex-shrink-0 text-xl" />
                      <div>
                        <span className="text-lg font-semibold block mb-1">Call queuing</span>
                        <span className="text-gray-600">Efficient call distribution and management</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-primary-600 mt-1 mr-4 flex-shrink-0 text-xl" />
                      <div>
                        <span className="text-lg font-semibold block mb-1">Call recording</span>
                        <span className="text-gray-600">Quality assurance and compliance features</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-8">
                    <div className="bg-primary-50 p-4 rounded-xl mr-6">
                      <FaNetworkWired className="text-primary-600 text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Virtual Phone System</h3>
                  </div>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-primary-600 mt-1 mr-4 flex-shrink-0 text-xl" />
                      <div>
                        <span className="text-lg font-semibold block mb-1">Virtual extensions</span>
                        <span className="text-gray-600">Flexible extension management and routing</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-primary-600 mt-1 mr-4 flex-shrink-0 text-xl" />
                      <div>
                        <span className="text-lg font-semibold block mb-1">Mobile integration</span>
                        <span className="text-gray-600">Seamless mobile app and softphone support</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-primary-600 mt-1 mr-4 flex-shrink-0 text-xl" />
                      <div>
                        <span className="text-lg font-semibold block mb-1">Multi-site support</span>
                        <span className="text-gray-600">Connect multiple locations seamlessly</span>
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
                  Why Choose Our Cloud PBX Solution?
                </h2>
                <p className="text-xl text-gray-600">
                  Discover the advantages of our hosted PBX system
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-10 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                  <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaChartLine className="text-primary-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Efficiency</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Reduce infrastructure costs with our cloud-based hosted PBX system. No hardware investment required.
                  </p>
                </div>
                <div className="bg-white p-10 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                  <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaGlobe className="text-primary-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Global Accessibility</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Access your virtual phone system from anywhere with an internet connection.
                  </p>
                </div>
                <div className="bg-white p-10 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                  <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaShieldAlt className="text-primary-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Bank-grade security with encrypted communications and regular security updates.
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
                  Cloud PBX Service Plans
                </h2>
                <p className="text-xl text-gray-600">
                  Choose the perfect hosted PBX plan for your business
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                    <div className="text-4xl font-bold text-primary-600 mb-2">$24.99<span className="text-lg text-gray-600">/month</span></div>
                    <p className="text-gray-600">Perfect for small teams</p>
                  </div>
                  <ul className="space-y-6 mb-10">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-primary-600 mr-4 text-xl" />
                      <span className="text-lg">Up to 5 extensions</span>
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
                      <span className="text-lg">Up to 20 extensions</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-primary-600 mr-4 text-xl" />
                      <span className="text-lg">Advanced PBX features</span>
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
                      <span className="text-lg">Unlimited extensions</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-primary-600 mr-4 text-xl" />
                      <span className="text-lg">Custom PBX features</span>
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
                Ready to Upgrade Your Phone System?
              </h2>
              <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Join thousands of businesses that trust our Cloud PBX and virtual phone system. Get started with a free consultation today.
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