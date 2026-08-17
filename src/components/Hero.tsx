import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaPhone, FaCheckCircle, FaShieldAlt, FaClock, FaHeadset, FaChartLine, FaUsers, FaCloudUploadAlt, FaPhoneAlt, FaRocket, FaMicrophone, FaExchangeAlt } from 'react-icons/fa';

export const HeroTop: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white opacity-10"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-white opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white opacity-5"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="py-16 md:py-24 lg:py-28 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Next-Generation <span className="text-secondary-400">VoIP & Dialers</span> for Growth
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8">
            Drive efficiency, reduce communication expenses, and enable flexible work environments with our reliable cloud phone system.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center space-x-3">
              <FaCheckCircle className="text-secondary-400 text-xl flex-shrink-0" />
              <span>Cut Communication Costs by up to 70%</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaChartLine className="text-secondary-400 text-xl flex-shrink-0" />
              <span>Achieve up to 40% Higher Team Productivity</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaShieldAlt className="text-secondary-400 text-xl flex-shrink-0" />
              <span>Benefit from Enterprise-Grade Security</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaUsers className="text-secondary-400 text-xl flex-shrink-0" />
              <span>Empower Your Team to Work Anywhere</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaHeadset className="text-secondary-400 text-xl flex-shrink-0" />
              <span>Receive Dedicated 24/7 Expert Support</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaClock className="text-secondary-400 text-xl flex-shrink-0" />
              <span>Experience Flexibility with No Contracts</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:+19045128487" 
              className="btn-call flex items-center justify-center space-x-3 bg-secondary-600 hover:bg-secondary-700"
            >
              <FaPhone className="text-white" />
              <span>Call (904) 512-8487 for a Free Consultation</span>
            </a>
            <a 
              href="/contact-us" 
              className="btn-call flex items-center justify-center space-x-3 bg-white text-primary-600 hover:bg-primary-50"
            >
              <span>Schedule a Demo</span>
            </a>
          </div>
          <p className="mt-4 text-sm text-primary-200">
            No credit card required • No long-term contracts
          </p>
        </div>
      </div>
    </section>
  );
};

export const HeroBottom: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="bg-white bg-opacity-5 py-12">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-secondary-400">Solutions</span> That Drive Results
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-primary-100">
              Our suite of cloud communication tools helps businesses streamline operations and enhance customer engagement. From powerful predictive dialers to feature-rich cloud PBX systems, we offer comprehensive solutions tailored to your needs.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-5 p-6 rounded-lg mb-12">
            <div className="flex items-center justify-center mb-6">
              <FaShieldAlt className="text-secondary-400 text-2xl mr-3" />
              <h3 className="text-2xl font-bold">Enterprise-Grade Communication Platform</h3>
            </div>
            <p className="text-center text-primary-100 mb-8">
              Experience enterprise-grade reliability, crystal-clear call quality, and intuitive interfaces designed for today's fast-paced business environment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="bg-white bg-opacity-10 p-5 rounded-lg text-center hover:bg-opacity-15 transition-all">
                <FaRocket className="text-secondary-400 text-3xl mx-auto mb-3" />
                <h4 className="font-bold mb-2">Predictive Dialer</h4>
                <p className="text-sm text-primary-200">Intelligent call pacing that boosts agent productivity by up to 300%</p>
              </div>
              
              <div className="bg-white bg-opacity-10 p-5 rounded-lg text-center hover:bg-opacity-15 transition-all">
                <FaCloudUploadAlt className="text-secondary-400 text-3xl mx-auto mb-3" />
                <h4 className="font-bold mb-2">Cloud PBX</h4>
                <p className="text-sm text-primary-200">Complete business phone system with advanced call management features</p>
              </div>
              
              <div className="bg-white bg-opacity-10 p-5 rounded-lg text-center hover:bg-opacity-15 transition-all">
                <FaPhoneAlt className="text-secondary-400 text-3xl mx-auto mb-3" />
                <h4 className="font-bold mb-2">Auto Dialer</h4>
                <p className="text-sm text-primary-200">Automated outbound calling with customizable campaigns and analytics</p>
              </div>
              
              <div className="bg-white bg-opacity-10 p-5 rounded-lg text-center hover:bg-opacity-15 transition-all">
                <FaMicrophone className="text-secondary-400 text-3xl mx-auto mb-3" />
                <h4 className="font-bold mb-2">VoIP Phone Service</h4>
                <p className="text-sm text-primary-200">Crystal-clear voice quality with 99.99% uptime guarantee</p>
              </div>
              
              <div className="bg-white bg-opacity-10 p-5 rounded-lg text-center hover:bg-opacity-15 transition-all">
                <FaExchangeAlt className="text-secondary-400 text-3xl mx-auto mb-3" />
                <h4 className="font-bold mb-2">SIP Trunking</h4>
                <p className="text-sm text-primary-200">Cost-effective, flexible phone line replacement for existing systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust badges */}
      <div className="bg-white bg-opacity-10 py-6">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center justify-center">
              <FaShieldAlt className="mr-2 text-secondary-400" />
              <span className="text-sm">256-bit SSL Encrypted</span>
            </div>
            <div className="flex items-center justify-center">
              <FaClock className="mr-2 text-secondary-400" />
              <span className="text-sm">99.99% Uptime</span>
            </div>
            <div className="flex items-center justify-center">
              <FaHeadset className="mr-2 text-secondary-400" />
              <span className="text-sm">24/7 US Support</span>
            </div>
            <div className="flex items-center justify-center">
              <FaUsers className="mr-2 text-secondary-400" />
              <span className="text-sm">10,000+ Customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Default export for backward compatibility
const Hero: React.FC = () => {
  return <HeroTop />;
};

export default Hero; 