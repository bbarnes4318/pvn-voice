import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { FaCheck, FaPhoneAlt, FaCogs, FaDatabase, FaChartLine, FaUsers, FaRobot, FaShieldAlt, FaSync, FaCloud, FaMobileAlt, FaDesktop, FaPlug, FaArrowRight, FaLock, FaQuestionCircle } from 'react-icons/fa';

// Testimonials (real, from components/Testimonials.tsx)
const testimonials = [
  {
    quote: "The integration with our existing CRM and the advanced call analytics have helped us optimize our sales processes and improve customer engagement significantly.",
    author: "David Wilson",
    title: "Sales Operations Manager",
    company: "SalesPro Systems",
    industry: "Sales",
    image: "/images/wilson.png",
    metrics: [
      { label: "Sales Efficiency", value: "+35%" },
      { label: "Customer Satisfaction", value: "+50%" },
      { label: "Call Quality", value: "98%" }
    ]
  },
  {
    quote: "The integration capabilities and API have allowed us to build a custom solution that perfectly fits our unique business needs and workflows.",
    author: "Carlos Garcia",
    title: "Technical Director",
    company: "Innovation Labs",
    industry: "Technology",
    image: "/images/garcia.png",
    metrics: [
      { label: "Integration Success", value: "100%" },
      { label: "Custom Features", value: "20+" },
      { label: "API Reliability", value: "99.99%" }
    ]
  }
];

const faqs = [
  {
    q: "What business tools can I integrate with PVN Dialer?",
    a: "PVN Dialer integrates with leading CRMs (Salesforce, HubSpot, Zoho), helpdesk platforms (Zendesk, Freshdesk, ServiceNow), analytics tools (Google Analytics, Tableau, Power BI), collaboration suites (Microsoft Teams, Slack, Asana), and more."
  },
  {
    q: "How secure are your integrations?",
    a: "All integrations are protected with enterprise-grade security, including 256-bit SSL encryption and compliance with industry standards."
  },
  {
    q: "Can you build a custom integration for my business?",
    a: "Yes! Our development team offers flexible API access and custom development to meet your unique needs."
  },
  {
    q: "How do integrations improve agent productivity?",
    a: "Integrations automate data entry, provide instant access to customer information, and streamline workflows—allowing agents to focus on high-value interactions."
  },
  {
    q: "Is there support for API-based integrations?",
    a: "Absolutely. We provide comprehensive API documentation and dedicated developer support."
  }
];

export default function Integrations() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>VoIP Integrations for Business | PVN Dialer</title>
        <meta name="description" content="Seamlessly integrate PVN Dialer with Salesforce, HubSpot, Zendesk, Microsoft Teams, and more. Unify your business communications, automate workflows, and drive measurable ROI with secure, scalable integrations." />
      </Head>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-700 to-primary-400 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Seamless VoIP Integrations for Modern Businesses</h1>
            <p className="text-2xl md:text-3xl mb-8 font-medium text-primary-100 drop-shadow">Connect PVN Dialer with the tools you rely on—CRM, helpdesk, analytics, and more—for unified workflows and measurable results.</p>
            <a href="tel:+19045128487" className="inline-flex items-center space-x-3 bg-secondary-600 hover:bg-secondary-700 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-cta transition-colors">
              <FaPhoneAlt className="text-white text-2xl" />
              <span>Call (904) 512-8487 for a Free Consultation</span>
            </a>
          </div>
        </section>

        {/* SEO Intro */}
        <section className="py-12 bg-gradient-to-br from-primary-50 to-primary-100">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <p className="text-2xl text-primary-700 font-semibold">PVN Dialer's integration capabilities empower your business to unify communications, automate workflows, and maximize productivity. Our robust APIs and pre-built integrations connect you with industry-leading CRMs, helpdesk platforms, analytics tools, and collaboration suites—eliminating data silos and driving measurable ROI.</p>
          </div>
        </section>

        {/* Featured Integrations */}
        <section className="py-16 bg-gradient-to-br from-primary-100 to-primary-50">
          <div className="container-custom">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-primary-800 tracking-tight">Featured Integrations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center max-w-5xl mx-auto">
              <div className="flex flex-col items-center">
                <Image src="/images/salesforce.png" alt="Salesforce" width={64} height={64} className="mb-2" />
                <span className="font-semibold text-gray-700">Salesforce</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/hubspot.jpeg" alt="HubSpot" width={64} height={64} className="mb-2" />
                <span className="font-semibold text-gray-700">HubSpot</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/zoho.jpeg" alt="Zoho CRM" width={64} height={64} className="mb-2" />
                <span className="font-semibold text-gray-700">Zoho CRM</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/zendesk.jpeg" alt="Zendesk" width={64} height={64} className="mb-2" />
                <span className="font-semibold text-gray-700">Zendesk</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/freshdesk.jpeg" alt="Freshdesk" width={64} height={64} className="mb-2" />
                <span className="font-semibold text-gray-700">Freshdesk</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/servicenow.png" alt="ServiceNow" width={64} height={64} className="mb-2" />
                <span className="font-semibold text-gray-700">ServiceNow</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/google-analytics.jpeg" alt="Google Analytics" width={64} height={64} className="mb-2" />
                <span className="font-semibold text-gray-700">Google Analytics</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/tableau.png" alt="Tableau" width={64} height={64} className="mb-2" />
                <span className="font-semibold text-gray-700">Tableau</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/powerbi.jpeg" alt="Power BI" width={64} height={64} className="mb-2" />
                <span className="font-semibold text-gray-700">Power BI</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/microsoft-teams.png" alt="Microsoft Teams" width={64} height={64} className="mb-2" />
                <span className="font-semibold text-gray-700">Microsoft Teams</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/slack.jpeg" alt="Slack" width={64} height={64} className="mb-2" />
                <span className="font-semibold text-gray-700">Slack</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/asana.png" alt="Asana" width={64} height={64} className="mb-2" />
                <span className="font-semibold text-gray-700">Asana</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/openai.jpeg" alt="OpenAI" width={64} height={64} className="mb-2" />
                <span className="font-semibold text-gray-700">OpenAI</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/zapier.png" alt="Zapier" width={64} height={64} className="mb-2" />
                <span className="font-semibold text-gray-700">Zapier</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/okta.png" alt="Okta" width={64} height={64} className="mb-2" />
                <span className="font-semibold text-gray-700">Okta</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/duo.png" alt="Duo Security" width={64} height={64} className="mb-2" />
                <span className="font-semibold text-gray-700">Duo Security</span>
              </div>
            </div>
            <p className="text-center text-primary-500 mt-8 text-lg font-medium">Integrate with Salesforce, HubSpot, Zoho CRM, Zendesk, Freshdesk, ServiceNow, Google Analytics, Tableau, Power BI, Microsoft Teams, Slack, Asana, OpenAI, Zapier, Okta, Duo Security, and more.</p>
          </div>
        </section>

        {/* Integration Categories */}
        <section className="py-16 bg-gradient-to-br from-primary-50 to-primary-100">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-700">Popular Integration Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <FaCogs className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">CRM Systems</h3>
                <p className="text-gray-600 mb-4">Seamlessly integrate with Salesforce, HubSpot, and Zoho CRM to streamline customer interactions and improve sales efficiency.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <FaDatabase className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Help Desk Software</h3>
                <p className="text-gray-600 mb-4">Connect with Zendesk, Freshdesk, and ServiceNow to provide better customer support and track issues efficiently.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <FaChartLine className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Analytics Tools</h3>
                <p className="text-gray-600 mb-4">Integrate with Google Analytics, Tableau, and Power BI for comprehensive insights into your communication data.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <FaUsers className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
                <p className="text-gray-600 mb-4">Connect with Microsoft Teams, Slack, and Asana to enhance team communication and project management.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <FaRobot className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">AI & Automation</h3>
                <p className="text-gray-600 mb-4">Leverage OpenAI, Zapier, and custom AI solutions to automate tasks and enhance customer interactions.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <FaShieldAlt className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
                <p className="text-gray-600 mb-4">Integrate with Okta, Duo Security, and compliance tools to ensure data protection and regulatory compliance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gradient-to-br from-primary-50 to-primary-100">
          <div className="container-custom max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-700">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center">
                <FaPlug className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">1. Connect</h3>
                <p className="text-gray-600 text-center">Choose your business tools and connect them to PVN Dialer in minutes.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center">
                <FaSync className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">2. Automate</h3>
                <p className="text-gray-600 text-center">Automate workflows, data sync, and customer journeys for maximum efficiency.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center">
                <FaChartLine className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">3. Grow</h3>
                <p className="text-gray-600 text-center">Unlock new insights, boost productivity, and scale your business with confidence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-primary-50 to-primary-100">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-700">Benefits of VoIP Integrations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-primary-50 p-8 rounded-xl shadow-sm">
                <FaSync className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Improved Workflow</h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Automated data synchronization</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Reduced manual data entry</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Streamlined communication</span></li>
                </ul>
              </div>
              <div className="bg-primary-50 p-8 rounded-xl shadow-sm">
                <FaCloud className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Enhanced Productivity</h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Access to customer data during calls</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Automated task creation</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Real-time collaboration</span></li>
                </ul>
              </div>
              <div className="bg-primary-50 p-8 rounded-xl shadow-sm">
                <FaMobileAlt className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Better Mobility</h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Access from any device</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Seamless device switching</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Remote work capabilities</span></li>
                </ul>
              </div>
              <div className="bg-primary-50 p-8 rounded-xl shadow-sm">
                <FaLock className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Data Security</h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>256-bit SSL encryption</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Enterprise-grade compliance</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Role-based access controls</span></li>
                </ul>
              </div>
              <div className="bg-primary-50 p-8 rounded-xl shadow-sm">
                <FaShieldAlt className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>HIPAA, GDPR, and TCPA support</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Audit trails and reporting</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Continuous monitoring</span></li>
                </ul>
              </div>
              <div className="bg-primary-50 p-8 rounded-xl shadow-sm">
                <FaDesktop className="text-3xl text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Customization</h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Flexible APIs</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Custom development available</span></li>
                  <li className="flex items-start"><FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" /><span>Dedicated support</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-br from-primary-50 to-primary-100">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-700">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
                  <Image src={t.image} alt={t.author} width={64} height={64} className="rounded-full mb-4" />
                  <p className="italic text-gray-700 mb-4">"{t.quote}"</p>
                  <div className="text-gray-900 font-semibold">{t.author}</div>
                  <div className="text-gray-500 text-sm">{t.title}, {t.company}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {t.metrics.map((m, j) => (
                      <span key={j} className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium">{m.value} {m.label}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-primary-50 to-primary-100">
          <div className="container-custom max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-primary-700">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b pb-6">
                  <div className="flex items-center mb-2">
                    <FaQuestionCircle className="text-primary-600 mr-2" />
                    <span className="font-semibold text-lg text-gray-800">{faq.q}</span>
                  </div>
                  <p className="text-gray-600 ml-7">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-400 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Connect Your Systems?</h2>
            <p className="text-xl mb-8 text-primary-100 font-medium">Contact us today to learn how our VoIP integrations can streamline your business operations and boost productivity.</p>
            <a 
              href="tel:+19045128487" 
              className="inline-flex items-center space-x-3 bg-secondary-600 hover:bg-secondary-700 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-cta transition-colors"
            >
              <FaPhoneAlt className="text-white text-2xl" />
              <span>Call (904) 512-8487 for a Free Consultation</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 