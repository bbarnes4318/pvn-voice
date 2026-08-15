import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaPhone, FaUserFriends, FaClock, FaComments, FaFileContract, FaMoneyBillWave, FaHandshake, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-primary-100">
      <Head>
        <title>How It Works - DebtHalf.com</title>
        <meta name="description" content="Learn how DebtHalf.com's debt settlement process works to help you reduce your debt and regain financial freedom." />
      </Head>

      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-600 text-white py-12 md:py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">How Debt Settlement Works</h1>
              <p className="text-xl md:text-2xl text-primary-100">
                Our simple 4-step process to help you become debt-free faster
              </p>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-center mb-16">
                DebtHalf.com offers a proven debt settlement program that has helped thousands of Americans reduce their debt burden and regain financial freedom. Our process is straightforward, transparent, and designed with your success in mind.
              </p>

              <div className="space-y-16">
                {/* Step 1 */}
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="bg-primary-50 p-8 rounded-xl relative">
                      <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                        1
                      </div>
                      <FaUserFriends className="text-5xl text-primary-600 mb-4" />
                      <h2 className="text-2xl font-bold text-primary-800 mb-3">Free Consultation</h2>
                      <p className="text-gray-700">
                        Our debt relief specialists evaluate your situation and determine if you qualify for our program.
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">What happens in this step:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-secondary-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Contact us for a no-obligation financial consultation</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-secondary-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Share information about your unsecured debts (credit cards, medical bills, personal loans)</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-secondary-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Our specialists analyze your situation and debt-to-income ratio</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-secondary-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Receive a personalized debt relief plan with potential savings estimates</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="italic text-gray-700">
                        "From the first call, I felt like someone was finally listening to my financial concerns. The consultant explained everything clearly without any pressure." — Michael S.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-2 md:order-2">
                    <div className="bg-primary-50 p-8 rounded-xl relative">
                      <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                        2
                      </div>
                      <FaClock className="text-5xl text-primary-600 mb-4" />
                      <h2 className="text-2xl font-bold text-primary-800 mb-3">Enrollment & Savings</h2>
                      <p className="text-gray-700">
                        You begin building your settlement fund while we prepare to negotiate with your creditors.
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-3 md:order-1">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">What happens in this step:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-secondary-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Enroll in our program with simple electronic documentation</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-secondary-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Set up a dedicated FDIC-insured account that you control</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-secondary-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Make affordable monthly deposits into your settlement fund</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-secondary-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Receive guidance on communicating with creditors during this phase</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="italic text-gray-700">
                        "The monthly payment was much less than what I was paying toward my minimum payments, and watching my settlement fund grow gave me hope for the first time in years." — Jennifer L.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="bg-primary-50 p-8 rounded-xl relative">
                      <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                        3
                      </div>
                      <FaComments className="text-5xl text-primary-600 mb-4" />
                      <h2 className="text-2xl font-bold text-primary-800 mb-3">Debt Negotiation</h2>
                      <p className="text-gray-700">
                        Our expert negotiators work with your creditors to reduce your debt balances.
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">What happens in this step:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-secondary-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Once sufficient funds are available, we begin negotiating with your creditors</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-secondary-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Our experienced team leverages relationships and industry knowledge to secure the best settlements</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-secondary-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Each settlement offer is presented to you for approval before any payment is made</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-secondary-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Settlements typically range from 30-50% of the original debt amount</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="italic text-gray-700">
                        "When they settled my first credit card for 40% of what I owed, I was amazed. They negotiated even better deals on my other accounts." — Robert T.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-2 md:order-2">
                    <div className="bg-primary-50 p-8 rounded-xl relative">
                      <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                        4
                      </div>
                      <FaHandshake className="text-5xl text-primary-600 mb-4" />
                      <h2 className="text-2xl font-bold text-primary-800 mb-3">Freedom from Debt</h2>
                      <p className="text-gray-700">
                        Debts are resolved one by one until you complete the program debt-free.
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-3 md:order-1">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">What happens in this step:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-secondary-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Settlements are paid from your dedicated account after your approval</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-secondary-600 mt-1 mr-2 flex-shrink-0" />
                        <span>You receive a settlement letter for each resolved debt for your records</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-secondary-600 mt-1 mr-2 flex-shrink-0" />
                        <span>We continue the process with each enrolled debt until all are settled</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-secondary-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Upon program completion, you're free from enrolled debts and can begin rebuilding your financial life</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="italic text-gray-700">
                        "Completing the program was one of the proudest moments of my life. I'm now completely debt-free and saving for my future." — Sarah K.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary-600">What to Expect: Program Timeline</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 transform -translate-x-1/2 z-0"></div>
                
                <div className="space-y-12">
                  {/* Month 1 */}
                  <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                    <div className="hidden md:flex absolute left-1/2 top-6 w-6 h-6 rounded-full bg-primary-600 transform -translate-x-1/2 z-10"></div>
                    <div className="md:w-5/12 mb-4 md:mb-0 md:pr-8">
                      <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-bold text-primary-600 mb-2">Months 1-3</h3>
                        <p className="text-gray-700">Program enrollment and setup. You'll begin making deposits into your settlement fund and we'll provide guidance on managing creditor communications.</p>
                      </div>
                    </div>
                    <div className="md:hidden w-6 h-6 rounded-full bg-primary-600 my-2"></div>
                    <div className="md:w-5/12 md:pl-8">
                      <div className="bg-white p-4 rounded-lg border border-gray-200 text-sm text-gray-600">
                        <strong>Tip:</strong> Forward all creditor communications to your dedicated account manager during this phase.
                      </div>
                    </div>
                  </div>
                  
                  {/* Months 4-6 */}
                  <div className="relative flex flex-col md:flex-row-reverse items-center md:justify-between">
                    <div className="hidden md:flex absolute left-1/2 top-6 w-6 h-6 rounded-full bg-primary-600 transform -translate-x-1/2 z-10"></div>
                    <div className="md:w-5/12 mb-4 md:mb-0 md:pl-8">
                      <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-bold text-primary-600 mb-2">Months 4-6</h3>
                        <p className="text-gray-700">As your settlement fund grows, we prepare negotiation strategies for each of your accounts. We may begin negotiations with smaller accounts if sufficient funds are available.</p>
                      </div>
                    </div>
                    <div className="md:hidden w-6 h-6 rounded-full bg-primary-600 my-2"></div>
                    <div className="md:w-5/12 md:pr-8">
                      <div className="bg-white p-4 rounded-lg border border-gray-200 text-sm text-gray-600">
                        <strong>What to expect:</strong> Creditors may increase collection efforts during this time. Our team will help you manage this phase.
                      </div>
                    </div>
                  </div>
                  
                  {/* Months 6-12 */}
                  <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                    <div className="hidden md:flex absolute left-1/2 top-6 w-6 h-6 rounded-full bg-primary-600 transform -translate-x-1/2 z-10"></div>
                    <div className="md:w-5/12 mb-4 md:mb-0 md:pr-8">
                      <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-bold text-primary-600 mb-2">Months 6-12</h3>
                        <p className="text-gray-700">Active negotiation phase begins. We'll typically settle your first accounts during this period. Each settlement offer will be presented to you for approval.</p>
                      </div>
                    </div>
                    <div className="md:hidden w-6 h-6 rounded-full bg-primary-600 my-2"></div>
                    <div className="md:w-5/12 md:pl-8">
                      <div className="bg-white p-4 rounded-lg border border-gray-200 text-sm text-gray-600">
                        <strong>Milestone:</strong> Your first debt settlement! This is a significant step toward financial freedom.
                      </div>
                    </div>
                  </div>
                  
                  {/* Months 12-24 */}
                  <div className="relative flex flex-col md:flex-row-reverse items-center md:justify-between">
                    <div className="hidden md:flex absolute left-1/2 top-6 w-6 h-6 rounded-full bg-primary-600 transform -translate-x-1/2 z-10"></div>
                    <div className="md:w-5/12 mb-4 md:mb-0 md:pl-8">
                      <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-bold text-primary-600 mb-2">Months 12-24</h3>
                        <p className="text-gray-700">Continued negotiations and settlements. As your fund grows, we'll tackle more of your accounts. Many clients see multiple settlements during this period.</p>
                      </div>
                    </div>
                    <div className="md:hidden w-6 h-6 rounded-full bg-primary-600 my-2"></div>
                    <div className="md:w-5/12 md:pr-8">
                      <div className="bg-white p-4 rounded-lg border border-gray-200 text-sm text-gray-600">
                        <strong>Progress tracking:</strong> You'll have 24/7 access to your online dashboard to track settlements and savings.
                      </div>
                    </div>
                  </div>
                  
                  {/* Months 24-36 */}
                  <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                    <div className="hidden md:flex absolute left-1/2 top-6 w-6 h-6 rounded-full bg-primary-600 transform -translate-x-1/2 z-10"></div>
                    <div className="md:w-5/12 mb-4 md:mb-0 md:pr-8">
                      <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-bold text-primary-600 mb-2">Months 24-36</h3>
                        <p className="text-gray-700">Final settlements and program completion. We negotiate your remaining debts and most clients complete the program during this period.</p>
                      </div>
                    </div>
                    <div className="md:hidden w-6 h-6 rounded-full bg-primary-600 my-2"></div>
                    <div className="md:w-5/12 md:pl-8">
                      <div className="bg-white p-4 rounded-lg border border-gray-200 text-sm text-gray-600">
                        <strong>Looking ahead:</strong> We'll provide resources for rebuilding your credit and maintaining financial health.
                      </div>
                    </div>
                  </div>
                  
                  {/* Program Completion */}
                  <div className="relative flex flex-col md:flex-row-reverse items-center md:justify-between">
                    <div className="hidden md:flex absolute left-1/2 top-6 w-8 h-8 rounded-full bg-secondary-600 transform -translate-x-1/2 z-10 flex items-center justify-center">
                      <FaCheckCircle className="text-white" />
                    </div>
                    <div className="md:w-5/12 mb-4 md:mb-0 md:pl-8">
                      <div className="bg-secondary-50 p-6 rounded-xl shadow-md border-2 border-secondary-500">
                        <h3 className="text-xl font-bold text-secondary-700 mb-2">Program Completion</h3>
                        <p className="text-gray-700">Congratulations! You've successfully completed the program and resolved your enrolled debts. You're now on the path to financial freedom.</p>
                      </div>
                    </div>
                    <div className="md:hidden w-8 h-8 rounded-full bg-secondary-600 my-2 flex items-center justify-center">
                      <FaCheckCircle className="text-white" />
                    </div>
                    <div className="md:w-5/12 md:pr-8">
                      <div className="bg-white p-4 rounded-lg border border-gray-200 text-sm text-gray-600">
                        <strong>Success:</strong> Our clients typically save 50% or more on their enrolled debt balance (before fees).
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 text-center mt-12">
                <em>Note: Timeline is approximate and may vary based on individual circumstances, creditor policies, and your ability to fund your settlement account.</em>
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary-600">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-primary-600 mb-2">Who qualifies for debt settlement?</h3>
                  <p className="text-gray-700">
                    Our program is best suited for individuals with $10,000 or more in unsecured debt who are experiencing financial hardship. Common qualifying debts include credit cards, medical bills, personal loans, and private student loans. Secured debts like mortgages and auto loans do not qualify.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-primary-600 mb-2">How much does debt settlement cost?</h3>
                  <p className="text-gray-700">
                    DebtHalf.com only charges a fee when we successfully negotiate a settlement on your behalf. Our fee structure is based on a percentage of either the debt enrolled or the amount saved. We never charge upfront fees. During your free consultation, we'll provide a clear breakdown of all costs associated with our program.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-primary-600 mb-2">Will debt settlement affect my credit score?</h3>
                  <p className="text-gray-700">
                    Debt settlement may have a negative impact on your credit score initially. When you stop making payments to creditors as part of the settlement strategy, accounts may be reported as delinquent. However, many clients find that resolving their debt problems creates a foundation for rebuilding their credit in the long term.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-primary-600 mb-2">Can creditors sue me during debt settlement?</h3>
                  <p className="text-gray-700">
                    Yes, creditors retain the right to pursue legal action for unpaid debts. However, our experienced team works to negotiate settlements before legal action occurs. If a lawsuit is filed, we can often expedite settlement negotiations with that creditor. We recommend consulting with an attorney if you receive any legal notices.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-primary-600 mb-2">Are there tax consequences to debt settlement?</h3>
                  <p className="text-gray-700">
                    The IRS generally considers forgiven debt as taxable income. If a creditor forgives more than $600 of your debt, they may issue a 1099-C form, and you may need to report this as income. However, exceptions exist for those who are "insolvent" at the time of settlement. We recommend consulting with a tax professional regarding potential tax implications.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Link href="/faq" className="text-secondary-600 font-semibold hover:text-secondary-700 flex items-center justify-center">
                  View all frequently asked questions <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Debt-Free Journey?</h2>
              <p className="text-xl mb-8">
                Contact us today for a free, no-obligation consultation to see how we can help you reduce your debt and regain financial freedom.
              </p>
              <a 
                href="tel:18001234567" 
                className="btn-call mx-auto flex items-center justify-center space-x-3 bg-secondary-600 hover:bg-secondary-700"
              >
                <FaPhone className="text-white" />
                <span>Call (800) 123-4567 Now</span>
              </a>
              <p className="mt-4 text-sm text-primary-200">
                Free consultation • No obligation • 100% confidential
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 