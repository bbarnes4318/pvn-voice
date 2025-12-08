import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaFileAlt, FaShieldAlt, FaPrint, FaUserShield } from 'react-icons/fa';

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-primary-100">
      <Head>
        <title>Terms of Service - PVN Dialer</title>
        <meta name="description" content="Read PVN Dialer's Terms of Service and understand the terms that govern your use of our VoIP and business communication services." />
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
              <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
              <p className="text-primary-100 mt-3">
                Last Updated: June 1, 2023
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
                      <li><a href="#acceptance" className="text-primary-600 hover:text-primary-800 transition-colors">1. Acceptance of Terms</a></li>
                      <li><a href="#description" className="text-primary-600 hover:text-primary-800 transition-colors">2. Description of Services</a></li>
                      <li><a href="#eligibility" className="text-primary-600 hover:text-primary-800 transition-colors">3. Eligibility</a></li>
                      <li><a href="#registration" className="text-primary-600 hover:text-primary-800 transition-colors">4. Account Registration</a></li>
                      <li><a href="#fees" className="text-primary-600 hover:text-primary-800 transition-colors">5. Fees and Payments</a></li>
                      <li><a href="#expectations" className="text-primary-600 hover:text-primary-800 transition-colors">6. Service Expectations</a></li>
                      <li><a href="#responsibilities" className="text-primary-600 hover:text-primary-800 transition-colors">7. Client Responsibilities</a></li>
                      <li><a href="#termination" className="text-primary-600 hover:text-primary-800 transition-colors">8. Termination of Services</a></li>
                      <li><a href="#privacy" className="text-primary-600 hover:text-primary-800 transition-colors">9. Privacy and Communication</a></li>
                      <li><a href="#liability" className="text-primary-600 hover:text-primary-800 transition-colors">10. Limitation of Liability</a></li>
                      <li><a href="#disclaimer" className="text-primary-600 hover:text-primary-800 transition-colors">11. Disclaimer of Warranties</a></li>
                      <li><a href="#indemnification" className="text-primary-600 hover:text-primary-800 transition-colors">12. Indemnification</a></li>
                      <li><a href="#changes" className="text-primary-600 hover:text-primary-800 transition-colors">13. Changes to Terms</a></li>
                      <li><a href="#governing" className="text-primary-600 hover:text-primary-800 transition-colors">14. Governing Law</a></li>
                      <li><a href="#contact" className="text-primary-600 hover:text-primary-800 transition-colors">15. Contact Information</a></li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 bg-primary-50 p-5 rounded-lg border border-primary-100">
                    <div className="flex items-center mb-3">
                      <FaShieldAlt className="text-primary-600 mr-2" />
                      <h3 className="font-bold text-primary-700">Have Questions?</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Our legal team is available to explain any part of these terms or answer any questions you may have.
                    </p>
                    <a 
                      href="tel:+19045128487" 
                      className="block w-full bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-3 rounded text-sm font-medium"
                    >
                      Call (904) 512-8487
                    </a>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:w-3/4">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                  <div className="flex items-start">
                    <FaFileAlt className="text-primary-600 text-2xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 mb-2">Important Notice</h2>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        These Terms of Service constitute a legally binding agreement between you and PVN Dialer. By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our services.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="prose prose-sm max-w-none">
                  <h2 id="acceptance" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    By accessing or using PVN Dialer's website, services, or applications (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree to these Terms, you may not access or use the Services. These Terms constitute a legally binding agreement between you and PVN Dialer.
                  </p>

                  <h2 id="description" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">2. Description of Services</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    PVN Dialer provides business VoIP telephone and unified communications services. Our Services include but are not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li className="text-gray-700">Cloud-based business phone systems</li>
                    <li className="text-gray-700">Unified communications platforms</li>
                    <li className="text-gray-700">Video conferencing solutions</li>
                    <li className="text-gray-700">Team messaging and collaboration tools</li>
                    <li className="text-gray-700">Customer support throughout the implementation and use of our services</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    PVN Dialer does not provide legal advice, tax advice, or IT consulting services beyond the scope of our communications products.
                  </p>

                  <h2 id="eligibility" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">3. Eligibility</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    To use our Services, you must:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li className="text-gray-700">Be at least 18 years of age</li>
                    <li className="text-gray-700">Be a legal resident of the United States or a legally registered business entity</li>
                    <li className="text-gray-700">Have the authority to enter into a legally binding agreement</li>
                    <li className="text-gray-700">Have a valid payment method for subscription fees</li>
                    <li className="text-gray-700">Have sufficient internet connectivity to support VoIP services</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    PVN Dialer reserves the right to refuse service to anyone for any lawful reason.
                  </p>

                  <h2 id="registration" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">4. Account Registration</h2>
                  <p className="text-gray-700 leading-relaxed">
                    To use certain features of our Services, you need to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your account credentials and for any activity that occurs under your account.
                  </p>

                  <h2 id="fees" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">5. Fees and Payments</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Our fees for VoIP and unified communications services are based on the subscription plan you select, the number of users, and any additional features or services you choose, as specified in your service agreement.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    You agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li className="text-gray-700">Pay all subscription fees specified in your service agreement</li>
                    <li className="text-gray-700">Pay for any additional services, international calls, or overages not included in your plan</li>
                    <li className="text-gray-700">Maintain current and valid payment information</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    All fees are clearly disclosed before you subscribe to our services. We may change our fees upon notice as specified in your service agreement.
                  </p>

                  <div className="bg-yellow-50 p-4 rounded-md my-6 border-l-4 border-yellow-400">
                    <p className="text-yellow-800 text-sm leading-relaxed m-0">
                      <strong>Important:</strong> Failure to pay subscription fees may result in service interruption. Any applicable taxes will be added to your invoice.
                    </p>
                  </div>

                  <h2 id="expectations" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">6. Service Expectations</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    While we strive to provide reliable and high-quality services, the performance of VoIP and cloud communications depends on various factors including:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li className="text-gray-700">Your internet connection quality and bandwidth</li>
                    <li className="text-gray-700">Your network configuration</li>
                    <li className="text-gray-700">Hardware compatibility</li>
                    <li className="text-gray-700">Third-party carrier services in certain regions</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We cannot guarantee:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li className="text-gray-700">Uninterrupted service without occasional technical issues</li>
                    <li className="text-gray-700">Perfect call quality under all network conditions</li>
                    <li className="text-gray-700">100% uptime, though we strive for maximum reliability</li>
                    <li className="text-gray-700">Compatibility with all third-party software and hardware</li>
                  </ul>

                  <h2 id="responsibilities" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">7. Client Responsibilities</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    As a client of PVN Dialer, you agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li className="text-gray-700">Provide complete and accurate information about your business needs</li>
                    <li className="text-gray-700">Maintain adequate internet connectivity suitable for VoIP services</li>
                    <li className="text-gray-700">Promptly report any service issues to our support team</li>
                    <li className="text-gray-700">Secure your account credentials and prevent unauthorized access</li>
                    <li className="text-gray-700">Use our services in compliance with applicable laws and regulations</li>
                    <li className="text-gray-700">Not use our services for any illegal, abusive, or fraudulent purposes</li>
                  </ul>

                  <h2 id="termination" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">8. Termination of Services</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Either party may terminate services as specified in the service agreement. Upon termination:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li className="text-gray-700">You will be responsible for paying any outstanding balances</li>
                    <li className="text-gray-700">You may request to port your phone numbers to another provider</li>
                    <li className="text-gray-700">PVN Dialer will provide reasonable assistance during the transition</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    PVN Dialer reserves the right to terminate services if you breach these Terms, provide false information, or fail to pay subscription fees.
                  </p>

                  <h2 id="privacy" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">9. Privacy and Communication</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Your privacy is important to us. Please review our <Link href="/privacy-policy" className="text-primary-600 hover:text-primary-800 transition-colors">Privacy Policy</Link> to understand how we collect, use, and share your information.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    By using our Services, you consent to receive communications from us, including emails, text messages, and phone calls related to your account and VoIP services. You can opt out of marketing communications, but we may still send you important service-related communications.
                  </p>

                  <h2 id="liability" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">10. Limitation of Liability</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    To the maximum extent permitted by law, PVN Dialer shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li className="text-gray-700">Your use or inability to use our Services</li>
                    <li className="text-gray-700">Any actions or inactions of third parties, including telecommunications carriers</li>
                    <li className="text-gray-700">Unauthorized access to or alteration of your data</li>
                    <li className="text-gray-700">Service interruptions or outages</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    In no event shall our total liability to you exceed the amounts paid by you to PVN Dialer for the Services in the six months prior to the claim.
                  </p>

                  <h2 id="disclaimer" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">11. Disclaimer of Warranties</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The Services are provided on an "as is" and "as available" basis, without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                  </p>

                  <h2 id="indemnification" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">12. Indemnification</h2>
                  <p className="text-gray-700 leading-relaxed">
                    You agree to indemnify, defend, and hold harmless PVN Dialer and its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses arising from your use of the Services or your violation of these Terms.
                  </p>

                  <h2 id="changes" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">13. Changes to Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on our website and updating the "Last Updated" date. Changes will become effective immediately upon posting, and your continued use of the Services after such changes constitutes your acceptance of the revised Terms.
                  </p>

                  <h2 id="governing" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">14. Governing Law</h2>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms of Service shall be adjudicated in the courts of St. Johns County, Florida.
                  </p>

                  <h2 id="contact" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">15. Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    If you have any questions about these Terms, please contact us:
                  </p>
                  <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm my-4">
                    <ul className="space-y-2">
                      <li className="text-gray-700 flex items-center">
                        <span className="w-20 inline-block font-medium">Email:</span> 
                        <a href="mailto:support@pvndialer.com" className="text-primary-600 hover:text-primary-700">support@pvndialer.com</a>
                      </li>
                      <li className="text-gray-700 flex items-center">
                        <span className="w-20 inline-block font-medium">Phone:</span> 
                        <a href="tel:+19045128487" className="text-primary-600 hover:text-primary-700">(904) 512-8487</a>
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="w-20 inline-block font-medium">Mail:</span> 
                        <span>PVN Dialer<br />2800 N 6th Street #796<br />Saint Augustine, FL 32084</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-500 text-xs">
                        Last Updated: June 1, 2023
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
                <Link href="/disclosures" className="bg-white rounded-md p-4 shadow-sm text-center hover:shadow transition-shadow border border-gray-100">
                  <FaUserShield className="text-primary-600 text-xl mx-auto mb-2" />
                  <h3 className="font-bold text-gray-800 text-sm mb-1">Disclosures</h3>
                  <p className="text-gray-600 text-xs">Important information about our VoIP services</p>
                </Link>
                <Link href="/contact-us" className="bg-white rounded-md p-4 shadow-sm text-center hover:shadow transition-shadow border border-gray-100">
                  <FaFileAlt className="text-primary-600 text-xl mx-auto mb-2" />
                  <h3 className="font-bold text-gray-800 text-sm mb-1">Contact Us</h3>
                  <p className="text-gray-600 text-xs">Get help or ask questions about these terms</p>
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