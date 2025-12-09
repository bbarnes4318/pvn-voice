import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaExclamationTriangle, FaBalanceScale, FaNetworkWired, FaShieldAlt, FaLock, FaPrint, FaFileAlt } from 'react-icons/fa';

export default function Disclosures() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-primary-100">
      <Head>
        <title>Disclosures - PVN Voice</title>
        <meta name="description" content="Important disclosures about PVN Voice's VoIP services, potential limitations, and relevant business telecommunication information." />
        <meta name="robots" content="noindex" />
      </Head>

      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-600 text-white py-10">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <Link href="/" className="text-primary-100 hover:text-white transition-colors text-sm">
                  &larr; Back to Home
                </Link>
                <button 
                  onClick={() => window.print()} 
                  className="text-primary-100 hover:text-white transition-colors text-sm flex items-center"
                >
                  <FaPrint className="mr-1" /> Print
                </button>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Important Disclosures</h1>
              <p className="text-primary-100 mt-3">
                Information you should know about our VoIP and business communication services
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-10 bg-white">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Table of Contents - Sidebar */}
              <div className="lg:w-1/4">
                <div className="sticky top-8">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h2 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Contents</h2>
                    <ul className="space-y-2 text-sm">
                      <li><a href="#service" className="text-primary-600 hover:text-primary-800 transition-colors">Service Disclosures</a></li>
                      <li><a href="#limitations" className="text-primary-600 hover:text-primary-800 transition-colors">Service Limitations</a></li>
                      <li><a href="#e911" className="text-primary-600 hover:text-primary-800 transition-colors">E911 Services</a></li>
                      <li><a href="#connectivity" className="text-primary-600 hover:text-primary-800 transition-colors">Internet Connectivity</a></li>
                      <li><a href="#quality" className="text-primary-600 hover:text-primary-800 transition-colors">Service Quality</a></li>
                      <li><a href="#rights" className="text-primary-600 hover:text-primary-800 transition-colors">Customer Rights</a></li>
                      <li><a href="#alternatives" className="text-primary-600 hover:text-primary-800 transition-colors">Alternative Options</a></li>
                      <li><a href="#regulatory" className="text-primary-600 hover:text-primary-800 transition-colors">Regulatory Information</a></li>
                      <li><a href="#updates" className="text-primary-600 hover:text-primary-800 transition-colors">Updates to Disclosures</a></li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 bg-primary-50 p-5 rounded-lg border border-primary-100">
                    <div className="flex items-center mb-3">
                      <FaShieldAlt className="text-primary-600 mr-2" />
                      <h3 className="font-bold text-primary-700">Have Questions?</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Our team is available to explain these disclosures and answer any questions you may have.
                    </p>
                    <a 
                      href="tel:+18001234567" 
                      className="block w-full bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-3 rounded text-sm font-medium"
                    >
                      Call 1-800-123-4567
                    </a>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:w-3/4">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                  <div className="flex items-start">
                    <FaExclamationTriangle className="text-amber-500 text-2xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 mb-2">Service Notice</h2>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        VoIP services rely on internet connectivity and power supply. Service quality may vary based on your internet connection, network configuration, and hardware. Emergency service limitations apply.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="prose prose-sm max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    At PVN Voice, we are committed to transparency. Please review these important disclosures about our VoIP and business communication services to ensure you have all the information needed to make informed decisions about your telecommunications needs.
                  </p>

                  <h2 id="service" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 flex items-center">
                    <FaNetworkWired className="mr-3 text-primary-600" />
                    VoIP Service Disclosures
                  </h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
                      <h3 className="font-bold text-gray-800 text-sm mb-2">Internet-Based Service</h3>
                      <p className="text-gray-700 text-sm leading-relaxed mb-0">
                        PVN Voice provides Voice over Internet Protocol (VoIP) services that require a broadband internet connection to function. Our services are not traditional landline telephone services.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
                      <h3 className="font-bold text-gray-800 text-sm mb-2">Service Activation</h3>
                      <p className="text-gray-700 text-sm leading-relaxed mb-0">
                        Service activation typically occurs within 24-48 hours after account setup. Number porting from other providers may take 2-4 weeks depending on your current carrier.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
                      <h3 className="font-bold text-gray-800 text-sm mb-2">Equipment Requirements</h3>
                      <p className="text-gray-700 text-sm leading-relaxed mb-0">
                        Our services require compatible VoIP phones, softphones, or our mobile application. Equipment compatibility information is available upon request.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
                      <h3 className="font-bold text-gray-800 text-sm mb-2">Service Reliability</h3>
                      <p className="text-gray-700 text-sm leading-relaxed mb-0">
                        While we strive for maximum uptime, our services depend on your internet connection and power supply. Service may be unavailable during internet outages or power failures.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
                      <h3 className="font-bold text-gray-800 text-sm mb-2">Call Quality</h3>
                      <p className="text-gray-700 text-sm leading-relaxed mb-0">
                        Call quality can be affected by your internet connection, network traffic, and hardware. We recommend a minimum bandwidth of 100 Kbps per concurrent call.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
                      <h3 className="font-bold text-gray-800 text-sm mb-2">Service Fees</h3>
                      <p className="text-gray-700 text-sm leading-relaxed mb-0">
                        Our pricing is based on your selected plan, features, and number of users. Certain international calls, premium features, or overages may incur additional charges as detailed in your service agreement.
                      </p>
                    </div>
                  </div>

                  <h2 id="limitations" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 flex items-center">
                    <FaNetworkWired className="mr-3 text-primary-600" />
                    Service Limitations
                  </h2>
                  
                  <h3 id="e911" className="text-lg font-bold text-gray-800 mt-6 mb-3">E911 Service Limitations</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    VoIP-based 911 service (E911) differs from traditional 911 services in several important ways:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-6">
                    <li className="text-gray-700">E911 service will not function during power outages or internet service disruptions</li>
                    <li className="text-gray-700">You must register your physical location for each device or number</li>
                    <li className="text-gray-700">If you use the service from a location different from your registered address, emergency services may be dispatched to the wrong location</li>
                    <li className="text-gray-700">There may be a slight delay in the transmission of 911 calls compared to traditional phone services</li>
                  </ul>

                  <h3 id="connectivity" className="text-lg font-bold text-gray-800 mt-6 mb-3">Internet Connectivity Requirements</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our VoIP services require reliable broadband internet service. Call quality and reliability may be affected by bandwidth limitations, network congestion, latency, jitter, or packet loss. We recommend business-grade internet service with Quality of Service (QoS) capabilities for optimal performance.
                  </p>

                  <h3 id="quality" className="text-lg font-bold text-gray-800 mt-6 mb-3">Service Quality Factors</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Several factors can affect your VoIP service quality, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li className="text-gray-700">Internet connection speed and stability</li>
                    <li className="text-gray-700">Network equipment (routers, switches, firewalls)</li>
                    <li className="text-gray-700">Network configuration</li>
                    <li className="text-gray-700">The number of concurrent calls</li>
                    <li className="text-gray-700">Other applications or services using your internet connection</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our technical support team can provide guidance on optimizing your network for VoIP services, but ultimately, service quality depends on your specific network environment.
                  </p>

                  <div className="bg-yellow-50 p-4 rounded-md my-6 border-l-4 border-yellow-400">
                    <p className="text-yellow-800 text-sm leading-relaxed m-0">
                      <strong>Important:</strong> VoIP services are not suitable for all business needs. If your business requires guaranteed uptime or handles emergency communications, we recommend maintaining a backup communication method.
                    </p>
                  </div>

                  <h2 id="rights" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 flex items-center">
                    <FaShieldAlt className="mr-3 text-primary-600" />
                    Customer Rights
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    As a customer of our VoIP services, you have the following rights:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-6">
                    <li className="text-gray-700">The right to receive clear disclosures about the services offered, limitations, and all associated fees</li>
                    <li className="text-gray-700">The right to terminate services as specified in your service agreement</li>
                    <li className="text-gray-700">The right to port your phone numbers to another provider, subject to eligibility</li>
                    <li className="text-gray-700">The right to have your personal and business information protected and kept confidential</li>
                    <li className="text-gray-700">The right to receive technical support for service-related issues</li>
                  </ul>

                  <h2 id="alternatives" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 flex items-center">
                    <FaLock className="mr-3 text-primary-600" />
                    Alternative Communication Options
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    If VoIP services don't fully meet your business needs, you may consider these alternatives:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
                      <h3 className="font-bold text-primary-600 mb-2 text-sm">Traditional Landline Services</h3>
                      <p className="text-gray-700 text-sm leading-relaxed mb-0">
                        Traditional copper-line phone services provided by local telephone companies. More reliable during power outages but typically more expensive.
                      </p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
                      <h3 className="font-bold text-primary-600 mb-2 text-sm">PBX Systems</h3>
                      <p className="text-gray-700 text-sm leading-relaxed mb-0">
                        On-premises private branch exchange systems that provide call control within your organization. Higher upfront costs but may offer more control.
                      </p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
                      <h3 className="font-bold text-primary-600 mb-2 text-sm">Mobile Phone Services</h3>
                      <p className="text-gray-700 text-sm leading-relaxed mb-0">
                        Cellular-based communication services that may offer more mobility but potentially higher per-minute costs.
                      </p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
                      <h3 className="font-bold text-primary-600 mb-2 text-sm">Hybrid Solutions</h3>
                      <p className="text-gray-700 text-sm leading-relaxed mb-0">
                        Combining different communication technologies to achieve redundancy and specific business requirements.
                      </p>
                    </div>
                  </div>

                  <h2 id="regulatory" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">Regulatory Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    VoIP services are subject to different regulations than traditional telecommunications services. Our services comply with applicable Federal Communications Commission (FCC) regulations for interconnected VoIP providers, including E911 requirements, CPNI protections, and universal service contributions. Additional information regarding regulatory compliance is available upon request.
                  </p>

                  <h2 id="updates" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">Updates to Disclosures</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    PVN Voice may update these disclosures from time to time to reflect changes in regulations, industry practices, or our services. The most current version will always be available on our website.
                  </p>

                  <div className="bg-primary-50 p-6 rounded-lg shadow-sm border border-primary-100 my-8">
                    <h3 className="font-bold text-primary-700 mb-3 flex items-center">
                      <FaFileAlt className="mr-2" /> Questions About These Disclosures?
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      If you have any questions about these disclosures or our VoIP services, please contact us:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="tel:+18001234567" 
                        className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-3 rounded text-sm font-medium inline-flex items-center justify-center"
                      >
                        Call 1-800-123-4567
                      </a>
                      <a 
                        href="mailto:support@pvndialer.com" 
                        className="flex-1 bg-white hover:bg-gray-50 text-primary-600 border border-primary-600 text-center py-2 px-3 rounded text-sm font-medium inline-flex items-center justify-center"
                      >
                        Email Us
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-500 text-xs">
                        Last Updated: June 10, 2023
                      </p>
                      <a 
                        href="#top" 
                        className="flex items-center text-primary-600 hover:text-primary-700 transition-colors text-xs font-medium"
                      >
                        Back to Top
                        <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-8 bg-gray-50 border-t border-gray-200">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">Related Documents</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/privacy-policy" className="bg-white rounded-md p-4 shadow-sm text-center hover:shadow transition-shadow border border-gray-100">
                  <FaShieldAlt className="text-primary-600 text-xl mx-auto mb-2" />
                  <h3 className="font-bold text-gray-800 text-sm mb-1">Privacy Policy</h3>
                  <p className="text-gray-600 text-xs">How we protect and use your information</p>
                </Link>
                <Link href="/terms-of-service" className="bg-white rounded-md p-4 shadow-sm text-center hover:shadow transition-shadow border border-gray-100">
                  <FaFileAlt className="text-primary-600 text-xl mx-auto mb-2" />
                  <h3 className="font-bold text-gray-800 text-sm mb-1">Terms of Service</h3>
                  <p className="text-gray-600 text-xs">Rules governing the use of our services</p>
                </Link>
                <Link href="/contact-us" className="bg-white rounded-md p-4 shadow-sm text-center hover:shadow transition-shadow border border-gray-100">
                  <FaBalanceScale className="text-primary-600 text-xl mx-auto mb-2" />
                  <h3 className="font-bold text-gray-800 text-sm mb-1">Contact Us</h3>
                  <p className="text-gray-600 text-xs">Get help or ask questions about our services</p>
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