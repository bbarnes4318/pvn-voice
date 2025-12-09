import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaLock, FaShieldAlt, FaUserShield, FaFileAlt, FaPrint } from 'react-icons/fa';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-primary-100">
      <Head>
        <title>Privacy Policy - PVN Voice</title>
        <meta name="description" content="PVN Voice's privacy policy details how we collect, use, and protect your personal information. Learn about our commitment to your privacy." />
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
              <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
              <p className="text-primary-100 mt-3">
                Last Updated: May 16, 2023
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
                      <li><a href="#information-collected" className="text-primary-600 hover:text-primary-800 transition-colors">Information We Collect</a></li>
                      <li><a href="#how-we-use" className="text-primary-600 hover:text-primary-800 transition-colors">How We Use Your Information</a></li>
                      <li><a href="#information-sharing" className="text-primary-600 hover:text-primary-800 transition-colors">How We Share Your Information</a></li>
                      <li><a href="#security" className="text-primary-600 hover:text-primary-800 transition-colors">How We Protect Your Information</a></li>
                      <li><a href="#cookies" className="text-primary-600 hover:text-primary-800 transition-colors">Cookies and Tracking Technologies</a></li>
                      <li><a href="#third-party" className="text-primary-600 hover:text-primary-800 transition-colors">Third-Party Websites</a></li>
                      <li><a href="#choices" className="text-primary-600 hover:text-primary-800 transition-colors">Your Privacy Choices</a></li>
                      <li><a href="#california" className="text-primary-600 hover:text-primary-800 transition-colors">California Privacy Rights</a></li>
                      <li><a href="#changes" className="text-primary-600 hover:text-primary-800 transition-colors">Changes to This Privacy Policy</a></li>
                      <li><a href="#contact" className="text-primary-600 hover:text-primary-800 transition-colors">Contact Us</a></li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 bg-primary-50 p-5 rounded-lg border border-primary-100">
                    <div className="flex items-center mb-3">
                      <FaShieldAlt className="text-primary-600 mr-2" />
                      <h3 className="font-bold text-primary-700">Need Help?</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      If you have questions about our privacy practices or need to make a request regarding your information:
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
                    <FaShieldAlt className="text-primary-600 text-2xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 mb-2">Our Commitment to Your Privacy</h2>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        At PVN Voice, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our business VoIP and communications services. Please read this policy carefully. If you disagree with its terms, please discontinue use of our website and services immediately.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="prose prose-sm max-w-none">
                  <h2 id="information-collected" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">1. Information We Collect</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We collect information that you voluntarily provide to us when you register on our website, express interest in obtaining information about our services, or otherwise contact us.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4 mb-2">
                    <strong>Personal Information</strong> may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li className="text-gray-700">Name, email address, phone number, and mailing address</li>
                    <li className="text-gray-700">Business information (such as company name, size, and industry)</li>
                    <li className="text-gray-700">Payment information (such as credit card numbers and billing details)</li>
                    <li className="text-gray-700">Employment information</li>
                    <li className="text-gray-700">Any other information you choose to provide</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed mt-4 mb-2">
                    <strong>Automatically Collected Information</strong> may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li className="text-gray-700">IP address and browser type</li>
                    <li className="text-gray-700">Operating system and device information</li>
                    <li className="text-gray-700">Browsing actions and patterns</li>
                    <li className="text-gray-700">Referring website addresses</li>
                    <li className="text-gray-700">Details of your visits to our website (including traffic data, location data, logs, and other communication data)</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed">
                    This information is collected through cookies, web beacons, and other tracking technologies, as well as third-party analytics tools.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-md my-6 border-l-4 border-blue-400">
                    <p className="text-blue-800 text-sm leading-relaxed m-0">
                      <strong>Note:</strong> PVN Voice does not knowingly collect or solicit information from anyone under the age of 18. If you are a parent or guardian and believe we might have any information from or about a child under the age of 18, please contact us immediately at <a href="mailto:support@pvndialer.com" className="text-blue-700 hover:underline">support@pvndialer.com</a>.
                    </p>
                  </div>

                  <h2 id="how-we-use" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">2. How We Use Your Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The information we collect may be used in the following ways:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
                      <h3 className="font-bold text-primary-600 mb-2 text-sm">Primary Uses</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li className="text-gray-700">To provide, operate, and maintain our services</li>
                        <li className="text-gray-700">To provision VoIP and communication systems</li>
                        <li className="text-gray-700">To process payments and transactions</li>
                        <li className="text-gray-700">To verify your identity and eligibility for our services</li>
                        <li className="text-gray-700">To communicate with you about your account or services</li>
                        <li className="text-gray-700">To respond to your inquiries and provide customer support</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
                      <h3 className="font-bold text-primary-600 mb-2 text-sm">Additional Uses</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li className="text-gray-700">To improve our website and services</li>
                        <li className="text-gray-700">To personalize your experience</li>
                        <li className="text-gray-700">To understand how our services are used</li>
                        <li className="text-gray-700">To develop new products and services</li>
                        <li className="text-gray-700">To send periodic emails regarding your account or services</li>
                        <li className="text-gray-700">To comply with legal obligations</li>
                      </ul>
                    </div>
                  </div>

                  <h2 id="information-sharing" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">3. How We Share Your Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may share your personal information in the following situations:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 mb-4">
                    <li className="text-gray-700">
                      <strong>With Telecommunications Providers:</strong> To provision and support your VoIP and communication services, we may share relevant information with telecommunication carriers and providers.
                    </li>
                    <li className="text-gray-700">
                      <strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf.
                    </li>
                    <li className="text-gray-700">
                      <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
                    </li>
                    <li className="text-gray-700">
                      <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
                    </li>
                    <li className="text-gray-700">
                      <strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.
                    </li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed font-medium">
                    We do <strong>not</strong> sell, rent, or lease customer lists to third parties.
                  </p>

                  <h2 id="security" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">4. How We Protect Your Information</h2>
                  
                  <div className="flex items-start my-4 bg-white p-4 rounded-md border border-gray-200 shadow-sm">
                    <div className="mr-4 flex-shrink-0">
                      <FaLock className="text-primary-600 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        We implement a variety of security measures to maintain the safety of your personal information:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm mb-3">
                        <li className="text-gray-700">All sensitive information is transmitted via Secure Socket Layer (SSL) technology</li>
                        <li className="text-gray-700">We adhere to PCI DSS compliance when handling credit card information</li>
                        <li className="text-gray-700">Personal information is stored in secure databases accessible only to authorized personnel</li>
                        <li className="text-gray-700">Regular security assessments and penetration testing</li>
                        <li className="text-gray-700">Employee training on privacy and security practices</li>
                        <li className="text-gray-700">Physical, electronic, and procedural safeguards</li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed text-sm italic">
                        However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                      </p>
                    </div>
                  </div>

                  <h2 id="cookies" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">5. Cookies and Tracking Technologies</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We use cookies, web beacons, tracking pixels, and other tracking technologies to help customize our website and improve your experience. When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website. Our cookie types include:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li className="text-gray-700"><strong>Essential cookies:</strong> Necessary for the website to function properly</li>
                    <li className="text-gray-700"><strong>Preference cookies:</strong> Enable the website to remember your preferences</li>
                    <li className="text-gray-700"><strong>Statistics cookies:</strong> Help us understand how visitors interact with our website</li>
                    <li className="text-gray-700"><strong>Marketing cookies:</strong> Used to track visitors across websites to display relevant advertisements</li>
                  </ul>

                  <h2 id="third-party" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">6. Third-Party Websites</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Our website may contain links to third-party websites that are not operated by us. If you click a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                  </p>

                  <h2 id="choices" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">7. Your Privacy Choices</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You have certain rights regarding your personal information:
                  </p>
                  
                  <div className="overflow-hidden bg-white border border-gray-200 rounded-md shadow-sm my-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Right</th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">How to Exercise</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Access</td>
                          <td className="px-4 py-3 text-sm text-gray-500">Request copies of your personal information we have collected</td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            <a href="mailto:support@pvndialer.com" className="text-primary-600 hover:text-primary-700">Contact Us</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Correction</td>
                          <td className="px-4 py-3 text-sm text-gray-500">Request correction of inaccurate personal information</td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            <a href="mailto:support@pvndialer.com" className="text-primary-600 hover:text-primary-700">Contact Us</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Deletion</td>
                          <td className="px-4 py-3 text-sm text-gray-500">Request deletion of your personal information</td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            <a href="mailto:support@pvndialer.com" className="text-primary-600 hover:text-primary-700">Contact Us</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Marketing Opt-Out</td>
                          <td className="px-4 py-3 text-sm text-gray-500">Opt out of marketing communications</td>
                          <td className="px-4 py-3 text-sm text-gray-500">Click "unsubscribe" in emails or <a href="mailto:support@pvndialer.com" className="text-primary-600 hover:text-primary-700">Contact Us</a></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Do Not Sell/Share</td>
                          <td className="px-4 py-3 text-sm text-gray-500">Opt out of the sale or sharing of personal information</td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            <a href="mailto:support@pvndialer.com" className="text-primary-600 hover:text-primary-700">Contact Us</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    We will respond to your request within 45 days. We may need to verify your identity before processing your request.
                  </p>

                  <h2 id="california" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">8. California Privacy Rights</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    If you are a California resident, you have specific privacy rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA). In addition to the rights described above, California residents have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li className="text-gray-700">Know what personal information is being collected about them</li>
                    <li className="text-gray-700">Know whether their personal information is sold or disclosed and to whom</li>
                    <li className="text-gray-700">Opt out of the sale of their personal information</li>
                    <li className="text-gray-700">Access their personal information</li>
                    <li className="text-gray-700">Request deletion of their personal information</li>
                    <li className="text-gray-700">Not be discriminated against for exercising their privacy rights</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed">
                    To make a request under the CCPA/CPRA, please contact us at <a href="mailto:support@pvndialer.com" className="text-primary-600 hover:text-primary-700">support@pvndialer.com</a> or call us at <a href="tel:+19045128487" className="text-primary-600 hover:text-primary-700">(904) 512-8487</a>.
                  </p>

                  <h2 id="changes" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">9. Changes to This Privacy Policy</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If we make material changes to this policy, we will notify you either through the email address you have provided us or by placing a prominent notice on our website.
                  </p>

                  <h2 id="contact" className="text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200">10. Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    If you have any questions or concerns about this Privacy Policy, please contact us at:
                  </p>
                  <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm my-4">
                    <p className="text-gray-700 mb-1">
                      <strong>PVN Voice, Inc.</strong>
                    </p>
                    <p className="text-gray-600 mb-4">
                      PVN Voice<br />
                      2800 N 6th Street #796<br />
                      Saint Augustine, FL 32084<br />
                      United States
                    </p>
                    <p className="text-gray-700 mb-1">
                      <a href="mailto:support@pvndialer.com" className="text-primary-600 hover:text-primary-700">support@pvndialer.com</a>
                    </p>
                    <p className="text-gray-700 mb-0">
                      <a href="tel:+19045128487" className="text-primary-600 hover:text-primary-700">(904) 512-8487</a>
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-500 text-xs">
                        Last Updated: May 16, 2023
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
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">Other Legal Documents</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/terms-of-service" className="bg-white rounded-md p-4 shadow-sm text-center hover:shadow transition-shadow border border-gray-100">
                  <FaFileAlt className="text-primary-600 text-xl mx-auto mb-2" />
                  <h3 className="font-bold text-gray-800 text-sm mb-1">Terms of Service</h3>
                  <p className="text-gray-600 text-xs">Rules governing the use of our website and services</p>
                </Link>
                <Link href="/disclosures" className="bg-white rounded-md p-4 shadow-sm text-center hover:shadow transition-shadow border border-gray-100">
                  <FaUserShield className="text-primary-600 text-xl mx-auto mb-2" />
                  <h3 className="font-bold text-gray-800 text-sm mb-1">Disclosures</h3>
                  <p className="text-gray-600 text-xs">Important information about our VoIP services</p>
                </Link>
                <Link href="/contact-us" className="bg-white rounded-md p-4 shadow-sm text-center hover:shadow transition-shadow border border-gray-100">
                  <FaShieldAlt className="text-primary-600 text-xl mx-auto mb-2" />
                  <h3 className="font-bold text-gray-800 text-sm mb-1">Contact Us</h3>
                  <p className="text-gray-600 text-xs">Reach out with questions about our privacy practices</p>
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