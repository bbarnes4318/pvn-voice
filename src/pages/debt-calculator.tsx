import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaCheck, FaInfoCircle, FaPhone } from 'react-icons/fa';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [employeeCount, setEmployeeCount] = useState<number>(10);
  
  // Calculate pricing based on employee count
  const getBasicPrice = () => {
    return billingCycle === 'monthly' ? 19.99 : 16.99;
  };
  
  const getBusinessPrice = () => {
    return billingCycle === 'monthly' ? 29.99 : 24.99;
  };
  
  const getEnterprisePrice = () => {
    return billingCycle === 'monthly' ? 39.99 : 32.99;
  };
  
  const calculateTotalPrice = (pricePerUser: number) => {
    return (pricePerUser * employeeCount).toFixed(2);
  };
  
  const annualSavings = (monthlyPrice: number) => {
    const monthlyCost = monthlyPrice * 12;
    const annualCost = (monthlyPrice * 0.85) * 12; // 15% discount
    return (monthlyCost - annualCost).toFixed(2);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-primary-100">
      <Head>
        <title>Pricing - PVN Voice</title>
        <meta name="description" content="Clear, transparent pricing for PVN Voice's cloud phone system, unified communications, and contact center solutions. No hidden fees or long-term contracts." />
      </Head>

      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-600 text-white py-12 md:py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
              <p className="text-xl md:text-2xl text-primary-100">
                Enterprise features at small business prices. No hidden fees or long-term contracts.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Calculator Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              {/* Billing Cycle Toggle */}
              <div className="flex justify-center mb-10">
                <div className="bg-gray-100 p-1 rounded-full inline-flex">
                  <button
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      billingCycle === 'monthly' ? 'bg-primary-600 text-white' : 'text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setBillingCycle('monthly')}
                  >
                    Monthly
                  </button>
                  <button
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      billingCycle === 'annual' ? 'bg-primary-600 text-white' : 'text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setBillingCycle('annual')}
                  >
                    Annual (Save 15%)
                  </button>
                </div>
              </div>

              {/* Employee Counter */}
              <div className="bg-gray-50 p-6 rounded-xl mb-12 max-w-md mx-auto">
                <label htmlFor="employeeCount" className="block text-center text-lg font-medium text-gray-700 mb-4">
                  How many employees need phone service?
                </label>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => setEmployeeCount(Math.max(1, employeeCount - 1))}
                    className="bg-primary-100 text-primary-600 hover:bg-primary-200 px-3 py-1 rounded-md"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="employeeCount"
                    min="1"
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(Math.max(1, parseInt(e.target.value) || 1))}
                    className="mx-4 w-16 px-2 py-1 text-center border border-gray-300 rounded-md"
                  />
                  <button
                    onClick={() => setEmployeeCount(employeeCount + 1)}
                    className="bg-primary-100 text-primary-600 hover:bg-primary-200 px-3 py-1 rounded-md"
                  >
                    +
                  </button>
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">
                  Pricing shown reflects per-user rate for {employeeCount} {employeeCount === 1 ? 'employee' : 'employees'}
                </p>
              </div>

              {/* Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basic Plan */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-1">Basic</h2>
                    <p className="text-gray-600 mb-4">Perfect for small teams and startups</p>
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold text-gray-900">${getBasicPrice()}</span>
                      <span className="text-gray-500 ml-1">/user/month</span>
                    </div>
                    <div className="bg-primary-50 p-4 rounded-lg mb-6">
                      <p className="text-primary-700 font-medium">
                        Total: ${calculateTotalPrice(getBasicPrice())}/month
                      </p>
                      {billingCycle === 'annual' && (
                        <p className="text-sm text-primary-600 mt-1">
                          You save ${annualSavings(19.99)} per year
                        </p>
                      )}
                    </div>
                    <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                      Contact Us
                    </button>
                  </div>
                  <div className="bg-gray-50 px-6 py-4">
                    <h3 className="text-sm font-semibold text-gray-800 mb-3">Features Include:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Unlimited calling in US & Canada</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Mobile and desktop apps</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Voicemail-to-email</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Auto-attendant</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Call forwarding & routing</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Basic analytics</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Business Plan */}
                <div className="bg-white border-2 border-primary-400 rounded-xl shadow-md overflow-hidden relative">
                  <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1">
                    MOST POPULAR
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-1">Business</h2>
                    <p className="text-gray-600 mb-4">Ideal for growing businesses</p>
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold text-gray-900">${getBusinessPrice()}</span>
                      <span className="text-gray-500 ml-1">/user/month</span>
                    </div>
                    <div className="bg-primary-50 p-4 rounded-lg mb-6">
                      <p className="text-primary-700 font-medium">
                        Total: ${calculateTotalPrice(getBusinessPrice())}/month
                      </p>
                      {billingCycle === 'annual' && (
                        <p className="text-sm text-primary-600 mt-1">
                          You save ${annualSavings(29.99)} per year
                        </p>
                      )}
                    </div>
                    <button className="w-full bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                      Contact Us
                    </button>
                  </div>
                  <div className="bg-gray-50 px-6 py-4">
                    <h3 className="text-sm font-semibold text-gray-800 mb-3">Everything in Basic, plus:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Team messaging & file sharing</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Video conferencing (up to 100 participants)</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Advanced call analytics</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">CRM integrations</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Call recording</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Multi-level auto attendant</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-1">Enterprise</h2>
                    <p className="text-gray-600 mb-4">Complete solution for larger organizations</p>
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold text-gray-900">${getEnterprisePrice()}</span>
                      <span className="text-gray-500 ml-1">/user/month</span>
                    </div>
                    <div className="bg-primary-50 p-4 rounded-lg mb-6">
                      <p className="text-primary-700 font-medium">
                        Total: ${calculateTotalPrice(getEnterprisePrice())}/month
                      </p>
                      {billingCycle === 'annual' && (
                        <p className="text-sm text-primary-600 mt-1">
                          You save ${annualSavings(39.99)} per year
                        </p>
                      )}
                    </div>
                    <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                      Contact Us
                    </button>
                  </div>
                  <div className="bg-gray-50 px-6 py-4">
                    <h3 className="text-sm font-semibold text-gray-800 mb-3">Everything in Business, plus:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Dedicated account manager</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Contact center capabilities</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Advanced security features</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Custom integrations</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Service level agreements (SLA)</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Priority support 24/7/365</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary-600">Feature Comparison</h2>
              
              <div className="bg-white rounded-xl shadow-sm overflow-auto">
                <table className="w-full min-w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="py-4 px-6 text-left text-gray-500 font-medium">Feature</th>
                      <th className="py-4 px-6 text-center text-gray-500 font-medium">Basic</th>
                      <th className="py-4 px-6 text-center text-gray-500 font-medium">Business</th>
                      <th className="py-4 px-6 text-center text-gray-500 font-medium">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 text-gray-800 font-medium">Unlimited Calling</td>
                      <td className="py-4 px-6 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                      <td className="py-4 px-6 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                      <td className="py-4 px-6 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 text-gray-800 font-medium">Mobile & Desktop Apps</td>
                      <td className="py-4 px-6 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                      <td className="py-4 px-6 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                      <td className="py-4 px-6 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 text-gray-800 font-medium">Auto-Attendant</td>
                      <td className="py-4 px-6 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                      <td className="py-4 px-6 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                      <td className="py-4 px-6 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 text-gray-800 font-medium">Team Messaging</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                      <td className="py-4 px-6 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 text-gray-800 font-medium">Video Conferencing</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                      <td className="py-4 px-6 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 text-gray-800 font-medium">CRM Integrations</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                      <td className="py-4 px-6 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 text-gray-800 font-medium">Call Recording</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                      <td className="py-4 px-6 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 text-gray-800 font-medium">Contact Center Features</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 text-gray-800 font-medium">Custom Integrations</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-gray-800 font-medium">Dedicated Account Manager</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center">—</td>
                      <td className="py-4 px-6 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary-600">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-primary-600 mb-2">Are there any setup fees?</h3>
                  <p className="text-gray-700">
                    No, there are no setup fees with PVN Voice. All plans include free configuration and onboarding assistance to help you get started quickly.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-primary-600 mb-2">Do I need to sign a long-term contract?</h3>
                  <p className="text-gray-700">
                    No. All our plans are available on a month-to-month basis with no long-term commitment required. Annual plans are available at a discount but are completely optional.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-primary-600 mb-2">Can I keep my existing phone numbers?</h3>
                  <p className="text-gray-700">
                    Yes, you can port your existing phone numbers to PVN Voice. The porting process typically takes 2-4 weeks and we'll guide you through the entire process.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-primary-600 mb-2">What kind of internet connection do I need?</h3>
                  <p className="text-gray-700">
                    For optimal call quality, we recommend a minimum of 100 Kbps of bandwidth per concurrent call. Most modern business internet connections are more than sufficient for VoIP calls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business Communication?</h2>
              <p className="text-xl mb-8">
                Try PVN Voice risk-free with our 30-day money-back guarantee. No credit card required to start.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact-us"
                  className="bg-white text-primary-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-md transition-colors"
                >
                  Request Custom Quote
                </a>
                <a 
                  href="tel:+18001234567" 
                  className="btn-call flex items-center justify-center space-x-3 bg-secondary-600 hover:bg-secondary-700"
                >
                  <FaPhone className="text-white" />
                  <span>Call 1-800-123-4567</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 