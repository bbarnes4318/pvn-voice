import React from 'react';
import { FaSave, FaClock, FaLayerGroup, FaLaptopHouse, FaPhone, FaChartLine, FaShieldAlt, FaHeadset, FaCheckCircle } from 'react-icons/fa';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats?: string[];
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description, stats }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-secondary-600 mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-primary-600">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {stats && (
        <div className="space-y-2">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center text-sm text-gray-700">
              <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
              <span>{stat}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <FaSave />,
      title: 'Substantial Cost Savings',
      description: 'Transform your communication costs with our cloud-based solution.',
      stats: [
        'Save up to 70% on monthly phone bills',
        'No hardware costs or maintenance fees',
        'Free internal calls between locations'
      ]
    },
    {
      icon: <FaChartLine />,
      title: 'Boost Productivity',
      description: 'Empower your team with tools that drive efficiency and growth.',
      stats: [
        '40% increase in team productivity',
        'Reduce meeting time by 65%',
        'Streamline communication workflows'
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: 'Enterprise Security',
      description: 'Protect your business with military-grade security features.',
      stats: [
        '256-bit SSL encryption',
        'HIPAA compliant',
        'Regular security audits'
      ]
    },
    {
      icon: <FaHeadset />,
      title: '24/7 Expert Support',
      description: 'Get help when you need it from our US-based support team.',
      stats: [
        'Average response time < 2 minutes',
        '99.9% uptime guarantee',
        'Dedicated account manager'
      ]
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-600">
            Why <span className="text-secondary-600">200+ Businesses</span> Choose PVN Dialer
          </h2>
          <p className="text-xl text-gray-600">
            Our cloud-based phone solutions deliver enterprise features at small business prices, helping companies communicate better while saving substantially on their telecom costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl p-8 md:p-10 text-center max-w-3xl mx-auto shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business Communications?
          </h3>
          <p className="text-primary-100 mb-6 text-lg">
            Join thousands of businesses who trust PVN Dialer for their critical communications needs.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="tel:+16073548959" 
              className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg flex items-center justify-center space-x-3"
            >
              <FaPhone className="text-white" />
              <span>Call 1-607-354-8959</span>
            </a>
            <a 
              href="/contact-us" 
              className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg transition-colors font-medium text-lg"
            >
              Get a Free Demo
            </a>
          </div>
          <p className="mt-4 text-sm text-primary-200">
            Free consultation • No obligation • 30-day trial available
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 