import React, { useState } from 'react';
import { FaChevronDown, FaPhone, FaCheckCircle, FaShieldAlt, FaClock, FaHeadset } from 'react-icons/fa';

interface FAQItemProps {
  question: string;
  answer: string;
  icon?: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-primary-600 hover:text-secondary-600 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          {icon && <span className="mr-3 text-secondary-600">{icon}</span>}
          <span className="text-lg">{question}</span>
        </div>
        <FaChevronDown
          className={`text-secondary-600 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="pb-4">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How much can I save with PVN Dialer?",
      answer: "Most businesses save 50-70% on their monthly phone costs. This comes from eliminating hardware costs, maintenance fees, and long-distance charges. Plus, you only pay for what you need with our flexible pricing plans.",
      icon: <FaCheckCircle />
    },
    {
      question: "How long does it take to set up?",
      answer: "You can be up and running in minutes. Our cloud-based system requires no hardware installation or complex setup. Simply download our app, configure your settings, and start making calls.",
      icon: <FaClock />
    },
    {
      question: "Is the call quality reliable?",
      answer: "Yes, absolutely. We use enterprise-grade infrastructure with multiple redundancies to ensure 99.99% uptime. Our HD voice technology delivers crystal-clear calls, and we offer a quality guarantee.",
      icon: <FaShieldAlt />
    },
    {
      question: "What kind of support do you offer?",
      answer: "Our US-based support team is available 24/7 to help you with any questions or issues. We offer phone, email, and chat support, with an average response time of under 2 minutes.",
      icon: <FaHeadset />
    },
    {
      question: "Can I keep my existing phone numbers?",
      answer: "Yes, you can port your existing phone numbers to PVN Dialer. Our team handles the entire porting process, and you won't experience any service interruption during the transition.",
      icon: <FaCheckCircle />
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-600">
            Frequently Asked <span className="text-secondary-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our VoIP phone system and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl p-8 md:p-10 text-center max-w-3xl mx-auto shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-primary-100 mb-6 text-lg">
            Our VoIP experts are here to help you find the perfect solution for your business.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="tel:+19045128487" 
              className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg flex items-center justify-center space-x-3"
            >
              <FaPhone className="text-white" />
              <span>Call (904) 512-8487</span>
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

export default FAQ; 