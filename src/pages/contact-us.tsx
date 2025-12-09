import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheck } from 'react-icons/fa';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companySize: '',
    message: '',
    agreeToTerms: false,
    smsConsent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          companySize: '',
          message: '',
          agreeToTerms: false,
          smsConsent: false
        });
        
        // You could also add a setTimeout to reset the success message after a few seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        console.error('Submission failed:', data.message);
        alert('Failed to submit form: ' + data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-primary-100">
      <Head>
        <title>Contact Us - PVN Voice</title>
        <meta name="description" content="Contact PVN Voice for information about our business VoIP phone systems, unified communications, and cloud contact center solutions." />
      </Head>

      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-600 text-white py-12 md:py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl md:text-2xl text-primary-100">
                Our business communication specialists are ready to help
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div id="contact-form" className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold text-primary-600 mb-6">Get in Touch</h2>
                
                {isSubmitted && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Thank you for contacting us! We'll get back to you shortly.</span>
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="companySize" className="block text-gray-700 font-medium mb-2">Company Size</label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    >
                      <option value="">Select your company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501+">501+ employees</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">How can we help?</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="mb-6 space-y-4">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleCheckboxChange}
                        className="mr-2 mt-1"
                        required
                      />
                      <span className="text-sm text-gray-700">
                        I agree to the <a href="/privacy-policy" className="text-primary-600 hover:underline">Privacy Policy</a> and <a href="/terms-of-service" className="text-primary-600 hover:underline">Terms of Service</a>
                      </span>
                    </label>

                    <div className="flex flex-col gap-2">
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="smsConsent"
                          checked={formData.smsConsent}
                          onChange={handleCheckboxChange}
                          className="mr-2 mt-1"
                        />
                        <span className="text-sm text-gray-700">
                          By checking this box I agree to receive occasional marketing messages from PVN Voice and Cross Country Offer.
                        </span>
                      </label>
                      <p className="text-xs text-gray-500 pl-6 border-l-2 border-gray-200">
                        I consent to Receive SMS Notifications and Alerts from PVN Voice and Cross Country Offer. Message & data rates may apply. Text HELP to (424) 213-6641 for assistance. You can reply STOP to unsubscribe at any time.
                      </p>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 transition duration-300 font-medium"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-primary-600 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full text-primary-600 mr-4">
                      <FaPhone />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Phone Support</h3>
                      <p className="text-gray-600 mb-1">Sales & General Inquiries</p>
                      <a href="tel:+19045128487" className="text-primary-600 font-medium hover:underline">
                        (904) 512-8487
                      </a>
                      <p className="text-gray-600 mt-2 mb-1">Technical Support</p>
                      <a href="tel:+19045128487" className="text-primary-600 font-medium hover:underline">
                        (904) 512-8487
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full text-primary-600 mr-4">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600 mb-1">Sales & Inquiries</p>
                      <a href="mailto:sales@pvnvoice.com" className="text-primary-600 font-medium hover:underline">
                        sales@pvnvoice.com
                      </a>
                      <p className="text-gray-600 mt-2 mb-1">Customer Support</p>
                      <a href="mailto:support@pvnvoice.com" className="text-primary-600 font-medium hover:underline">
                        support@pvnvoice.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full text-primary-600 mr-4">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Headquarters</h3>
                      <p className="text-gray-600">
                        2800 N 6th Street #796<br />
                        Saint Augustine, FL 32084<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full text-primary-600 mr-4">
                      <FaClock />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Business Hours</h3>
                      <p className="text-gray-600">
                        <span className="font-medium">Sales:</span> Monday - Friday: 8am - 8pm EST
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Technical Support:</span> 24/7/365
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 bg-primary-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-primary-600 mb-3">Schedule a Demo</h3>
                  <p className="text-gray-700 mb-4">
                    Want to see PVN Voice in action? Schedule a personalized demo with one of our product specialists.
                  </p>
                  <a 
                    href="#contact-form" 
                    className="inline-block bg-secondary-600 text-white py-2 px-6 rounded-md hover:bg-secondary-700 transition duration-300 font-medium"
                  >
                    Request a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-primary-600 mb-6 text-center">Visit Our Office</h2>
              <div className="rounded-xl overflow-hidden shadow-md h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.837485047843!2d-81.31108472492815!3d29.897378979999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6b7c2c0c0c0c0%3A0x0!2zMjgwMCBOIDZ0aCBTdHJlZXQgIzc5NiwgU2FpbnQgQXVndXN0aW5lLCBGTCAzMjA4NA!5e0!3m2!1sen!2sus!4v1647881234567!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PVN Voice Office Location"
                ></iframe>
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
                Contact us today and experience the PVN Voice difference.
              </p>
              <a 
                href="tel:+19045128487" 
                className="btn-call mx-auto flex items-center justify-center space-x-3 bg-secondary-600 hover:bg-secondary-700"
              >
                <FaPhone className="text-white" />
                <span>Call (904) 512-8487 Now</span>
              </a>
              <p className="mt-4 text-sm text-primary-200">
                No credit card required. No long-term contracts.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 