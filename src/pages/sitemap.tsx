import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaHome, FaInfoCircle, FaQuestionCircle, FaEnvelope, FaPhoneAlt, FaBook, FaLightbulb, FaSitemap, FaFileAlt, FaShieldAlt } from 'react-icons/fa';

export default function Sitemap() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Sitemap - PVN Dialer</title>
        <meta name="description" content="View all pages available on PVN Dialer to help you navigate our VoIP business phone systems and communication resources." />
      </Head>

      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-600 text-white py-12">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Sitemap</h1>
              <p className="text-xl text-primary-100">
                A complete guide to all the pages on PVN Dialer
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* Main Pages */}
                <div>
                  <h2 className="text-2xl font-bold text-primary-600 mb-6 flex items-center">
                    <FaHome className="mr-2" /> Main Pages
                  </h2>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></span>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/how-it-works" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></span>
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></span>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></span>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h2 className="text-2xl font-bold text-primary-600 mb-6 flex items-center">
                    <FaBook className="mr-2" /> Resources
                  </h2>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/blog" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></span>
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/debt-calculator" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></span>
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link href="/glossary" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></span>
                        VoIP Glossary
                      </Link>
                    </li>
                    <li>
                      <Link href="/tips" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></span>
                        Business Communication Tips
                      </Link>
                    </li>
                    <li>
                      <Link href="/#faq" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></span>
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href="/#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></span>
                        Testimonials
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Legal Pages */}
                <div>
                  <h2 className="text-2xl font-bold text-primary-600 mb-6 flex items-center">
                    <FaFileAlt className="mr-2" /> Legal Information
                  </h2>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/terms-of-service" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></span>
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></span>
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/disclosures" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></span>
                        Disclosures
                      </Link>
                    </li>
                    <li>
                      <Link href="/sitemap" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></span>
                        Sitemap
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Blog Categories */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-primary-600 mb-6 flex items-center">
                  <FaLightbulb className="mr-2" /> Blog Categories
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <Link href="/blog?category=voip" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors text-center">
                    VoIP Systems
                  </Link>
                  <Link href="/blog?category=unified-communications" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors text-center">
                    Unified Communications
                  </Link>
                  <Link href="/blog?category=remote-work" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors text-center">
                    Remote Work
                  </Link>
                  <Link href="/blog?category=call-quality" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors text-center">
                    Call Quality
                  </Link>
                  <Link href="/blog?category=cost-savings" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors text-center">
                    Cost Savings
                  </Link>
                  <Link href="/blog?category=business-communications" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors text-center">
                    Business Communications
                  </Link>
                  <Link href="/blog?category=voip-security" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors text-center">
                    VoIP Security
                  </Link>
                  <Link href="/blog?category=cloud-telephony" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors text-center">
                    Cloud Telephony
                  </Link>
                </div>
              </div>

              {/* XML Sitemap */}
              <div className="mt-16 bg-gray-50 p-8 rounded-xl">
                <div className="flex items-start">
                  <FaSitemap className="text-2xl text-primary-600 mt-1 mr-4" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">XML Sitemap</h2>
                    <p className="text-gray-600 mb-4">
                      Looking for our XML sitemap for search engines? You can find it at:
                    </p>
                    <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                      https://www.pvndialer.com/sitemap.xml
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Can't Find What You're Looking For?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  If you need assistance finding specific information or have questions about our business phone services, please don't hesitate to contact our customer support team.
                </p>
                <Link 
                  href="/contact-us" 
                  className="inline-flex items-center bg-secondary-600 hover:bg-secondary-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  <FaEnvelope className="mr-2" />
                  Contact Us
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