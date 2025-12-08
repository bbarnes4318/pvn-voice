import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaPhoneAlt, FaRobot, FaChartLine, FaUsers, FaCloud, FaCheck, FaMicrochip, FaHeadset, FaVolumeUp } from 'react-icons/fa';

const voiceSamples = [
  {
    label: 'Appointment Reminder',
    src: '/audio/ai-voice-appointment.mp3',
  },
  {
    label: 'Customer Survey',
    src: '/audio/ai-voice-survey.mp3',
  },
  {
    label: 'Payment Collection',
    src: '/audio/ai-voice-collection.mp3',
  },
];

export default function AIVoiceAgents() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>AI Voice Agents & Virtual Agents | Conversational AI for Business - PVN Dialer</title>
        <meta name="description" content="Experience the future of customer engagement with PVN Dialer's AI Voice Agents. Deploy virtual agents for calls, surveys, reminders, and more. Listen to real AI voicebot samples!" />
        <meta name="keywords" content="AI Voice Agents, Virtual Agents, Conversational AI, Voicebots, AI Call Center, AI Phone Agents, Automated Voice, PVN Dialer" />
      </Head>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/ai-voice-hero.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">AI Voice Agents & Virtual Agents</h1>
              <p className="text-2xl md:text-3xl text-primary-100 mb-8 font-medium drop-shadow">Conversational AI that sounds human, works 24/7, and scales with your business.</p>
              <a href="tel:+19045128487" className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-colors">
                <FaPhoneAlt className="mr-2" /> Call (904) 512-8487 for a Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">AI Voicebot Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaRobot className="text-4xl text-primary-600 mb-4" aria-label="Natural Language Understanding" />
                <h3 className="text-xl font-semibold mb-2">Natural Language Understanding</h3>
                <p className="text-gray-700 mb-3">AI voice agents understand and respond to customers in real, conversational language—no more robotic scripts.</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaMicrochip className="text-4xl text-primary-600 mb-4" aria-label="Real-Time Speech Synthesis" />
                <h3 className="text-xl font-semibold mb-2">Real-Time Speech Synthesis</h3>
                <p className="text-gray-700 mb-3">Advanced AI generates lifelike voices, adapting tone and pace for every conversation.</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaHeadset className="text-4xl text-primary-600 mb-4" aria-label="24/7 Availability" />
                <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                <p className="text-gray-700 mb-3">Virtual agents never sleep—handle calls, reminders, and support around the clock.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaCloud className="text-4xl text-primary-600 mb-4" aria-label="Cloud Scalability" />
                <h3 className="text-xl font-semibold mb-2">Cloud Scalability</h3>
                <p className="text-gray-700 mb-3">Instantly scale up or down to handle any call volume—no hardware required.</p>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaChartLine className="text-4xl text-primary-600 mb-4" aria-label="Analytics & Insights" />
                <h3 className="text-xl font-semibold mb-2">Analytics & Insights</h3>
                <p className="text-gray-700 mb-3">Track every interaction, measure sentiment, and optimize scripts with AI-powered analytics.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                <FaCheck className="text-4xl text-primary-600 mb-4" aria-label="Seamless Integration" />
                <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                <p className="text-gray-700 mb-3">Connect AI voice agents to your CRM, help desk, and business tools for a unified workflow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Listen to AI Voicebots Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-100">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-10">Hear Our AI Voicebots in Action</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {voiceSamples.map((sample, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow flex flex-col items-center">
                  <FaVolumeUp className="text-3xl text-primary-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{sample.label}</h3>
                  <audio controls className="w-full">
                    <source src={sample.src} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">AI Voice Agents for Every Business</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-blue-50 p-8 rounded-2xl shadow">
                <FaRobot className="text-3xl text-primary-600 mb-4" aria-label="Sales & Lead Gen" />
                <h3 className="text-xl font-semibold mb-2">Sales & Lead Gen</h3>
                <p className="text-gray-700">Qualify leads, schedule appointments, and follow up automatically with AI voice agents.</p>
              </div>
              <div className="bg-green-50 p-8 rounded-2xl shadow">
                <FaHeadset className="text-3xl text-primary-600 mb-4" aria-label="Customer Support" />
                <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                <p className="text-gray-700">Answer FAQs, resolve issues, and provide 24/7 support with virtual agents.</p>
              </div>
              <div className="bg-purple-50 p-8 rounded-2xl shadow">
                <FaUsers className="text-3xl text-primary-600 mb-4" aria-label="Reminders & Notifications" />
                <h3 className="text-xl font-semibold mb-2">Reminders & Notifications</h3>
                <p className="text-gray-700">Send appointment reminders, payment notifications, and surveys with a human touch.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-500 text-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-8 rounded-2xl shadow flex flex-col items-center text-center">
                <p className="mb-4 italic">"The AI voice agents sound so real—our customers are amazed and our team is more productive than ever."</p>
                <span className="font-semibold">— Jordan F., Operations Manager</span>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl shadow flex flex-col items-center text-center">
                <p className="mb-4 italic">"We use PVN's virtual agents for appointment reminders and collections. The results are incredible."</p>
                <span className="font-semibold">— Priya S., Collections Lead</span>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl shadow flex flex-col items-center text-center">
                <p className="mb-4 italic">"The analytics and integration with our CRM make it easy to track every call and outcome."</p>
                <span className="font-semibold">— Mike L., Sales Director</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Deploy AI Voice Agents?</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              <a href="tel:+19045128487" className="inline-flex items-center px-8 py-4 rounded-full bg-secondary-600 hover:bg-secondary-700 text-lg font-semibold shadow-lg transition space-x-3">
                <FaPhoneAlt className="text-white" />
                <span>Call (904) 512-8487 for a Free Consultation</span>
              </a>
            </div>
            <div className="text-lg text-gray-700 mb-2">Or contact us for a free, no-obligation consultation.</div>
            <a href="mailto:info@pvndialer.com" className="inline-flex items-center px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow transition space-x-2">
              <FaPhoneAlt />
              <span>Email Us</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 