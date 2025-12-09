import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaSearch, FaBook, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Glossary terms
const glossaryTerms = [
  {
    term: 'ATA (Analog Telephone Adapter)',
    definition: 'A device that converts analog voice signals from a traditional telephone into digital data that can be transmitted over the internet, allowing conventional phones to be used with VoIP services.',
    category: 'Equipment'
  },
  {
    term: 'Bandwidth',
    definition: 'The capacity of a network connection, measured in bits per second (bps). Higher bandwidth allows for more data to be transmitted, which is important for VoIP call quality.',
    category: 'Network'
  },
  {
    term: 'Codec',
    definition: 'Short for "coder-decoder," a codec is software or hardware that compresses and decompresses digital audio signals. Different codecs offer varying levels of audio quality and bandwidth usage for VoIP calls.',
    category: 'Technical'
  },
  {
    term: 'Cloud PBX',
    definition: 'A private branch exchange telephone system that is delivered as a service from the cloud. It eliminates the need for traditional on-premises PBX hardware and provides phone services over the internet.',
    category: 'Services'
  },
  {
    term: 'DID (Direct Inward Dialing)',
    definition: 'A service that provides a block of telephone numbers for calling into a PBX system. With DID, companies can assign unique phone numbers to individual users without requiring a physical line for each.',
    category: 'Features'
  },
  {
    term: 'E911 (Enhanced 911)',
    definition: 'An enhanced emergency service that automatically provides the caller\'s address and information to emergency services. VoIP providers are required to offer E911 services, though they function differently than traditional landline 911.',
    category: 'Regulatory'
  },
  {
    term: 'Jitter',
    definition: 'The variation in the delay of received packets in a data transmission. In VoIP, high jitter can cause calls to sound choppy or broken.',
    category: 'Network'
  },
  {
    term: 'Latency',
    definition: 'The time it takes for data to travel from its source to its destination. In VoIP, high latency can cause delays in conversation, similar to a satellite phone call.',
    category: 'Network'
  },
  {
    term: 'IVR (Interactive Voice Response)',
    definition: 'A technology that allows a computer to interact with humans through voice and DTMF tones input via keypad. IVR systems are commonly used in call centers to route calls to the appropriate department.',
    category: 'Features'
  },
  {
    term: 'IP Phone',
    definition: 'A telephone that uses Internet Protocol to transmit voice data. IP phones connect directly to IP networks and don\'t require a separate analog telephone adapter.',
    category: 'Equipment'
  },
  {
    term: 'QoS (Quality of Service)',
    definition: 'A set of technologies that work on a network to guarantee its ability to dependably run high-priority applications and traffic under limited network capacity. For VoIP, QoS ensures call quality by prioritizing voice data.',
    category: 'Network'
  },
  {
    term: 'SIP (Session Initiation Protocol)',
    definition: 'A signaling protocol used for initiating, maintaining, and terminating real-time sessions that include voice, video, and messaging applications. SIP is one of the primary protocols used in VoIP.',
    category: 'Technical'
  },
  {
    term: 'Softphone',
    definition: 'A software application that allows users to make telephone calls over the internet from devices such as computers, tablets, or smartphones, eliminating the need for physical telephone hardware.',
    category: 'Software'
  },
  {
    term: 'Unified Communications',
    definition: 'An integrated system of communication tools that combines different methods such as voice, video, chat, email, and presence information into a single platform to enhance business communication and collaboration.',
    category: 'Services'
  },
  {
    term: 'VoIP (Voice over Internet Protocol)',
    definition: 'A technology that allows voice calls to be made using Internet Protocol rather than traditional telephone lines. VoIP converts analog voice signals into digital data that can be transmitted over the internet.',
    category: 'Technical'
  },
  {
    term: 'PBX (Private Branch Exchange)',
    definition: 'A private telephone network used within a company or organization. Users of the PBX phone system can communicate internally and externally using different communication channels.',
    category: 'Equipment'
  },
  {
    term: 'Packet Loss',
    definition: 'The failure of data packets to reach their destination when traveling across a network. In VoIP, packet loss can result in degraded call quality, missing words, or choppy audio.',
    category: 'Network'
  },
  {
    term: 'UCaaS (Unified Communications as a Service)',
    definition: 'A cloud-delivered unified communications model that supports enterprise telephony, meetings, messaging, presence, and more in a single platform offered by a third-party provider.',
    category: 'Services'
  },
  {
    term: 'SLA (Service Level Agreement)',
    definition: 'A contract between a service provider and the customer that defines the level of service expected, including metrics by which service is measured, remedies or penalties for violations, and specific responsibilities.',
    category: 'Business'
  },
  {
    term: 'VPN (Virtual Private Network)',
    definition: 'A technology that creates a safe and encrypted connection over a less secure network, such as the internet. In VoIP, VPNs can help secure voice communications and ensure Quality of Service across public networks.',
    category: 'Security'
  }
];

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredTerms, setFilteredTerms] = useState(glossaryTerms);
  const [expandedTerms, setExpandedTerms] = useState<Record<string, boolean>>({});
  
  const categories = ['All', ...Array.from(new Set(glossaryTerms.map(term => term.category)))];
  
  // Filter terms based on search and category
  useEffect(() => {
    let filtered = glossaryTerms;
    
    if (searchTerm) {
      filtered = filtered.filter(term => 
        term.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
        term.definition.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(term => term.category === selectedCategory);
    }
    
    setFilteredTerms(filtered);
  }, [searchTerm, selectedCategory]);
  
  // Toggle expanded term
  const toggleTerm = (term: string) => {
    setExpandedTerms(prev => ({
      ...prev,
      [term]: !prev[term]
    }));
  };

  // Generate alphabet links
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Group terms by first letter
  const groupedTerms: Record<string, typeof glossaryTerms> = {};
  
  filteredTerms.forEach(term => {
    const firstLetter = term.term[0].toUpperCase();
    if (!groupedTerms[firstLetter]) {
      groupedTerms[firstLetter] = [];
    }
    groupedTerms[firstLetter].push(term);
  });
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-primary-100">
      <Head>
        <title>VoIP Glossary - PVN Voice</title>
        <meta name="description" content="A comprehensive glossary of VoIP and business communication terminology to help you better understand cloud telephony solutions." />
      </Head>

      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-600 text-white py-12 md:py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">VoIP Glossary</h1>
              <p className="text-xl md:text-2xl text-primary-100">
                Understanding telecommunications terminology is the first step toward making informed decisions about your business phone system.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-10 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search glossary terms..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                    <FaSearch className="absolute left-3 top-3.5 text-gray-400" />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-secondary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alphabet Navigation */}
        <section className="py-4 bg-white border-b">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-1 md:gap-2">
                {alphabet.map(letter => {
                  const hasTerms = groupedTerms[letter] && groupedTerms[letter].length > 0;
                  return (
                    <button
                      key={letter}
                      onClick={() => hasTerms && scrollToLetter(letter)}
                      className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${
                        hasTerms
                          ? 'bg-primary-50 text-primary-600 hover:bg-primary-100 cursor-pointer'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                      disabled={!hasTerms}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Glossary Terms */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {searchTerm && filteredTerms.length === 0 && (
                <div className="text-center py-12">
                  <FaBook className="mx-auto text-5xl text-gray-300 mb-4" />
                  <h2 className="text-2xl font-bold text-gray-700 mb-2">No terms found</h2>
                  <p className="text-gray-500">
                    Try adjusting your search or category filter to find what you're looking for.
                  </p>
                </div>
              )}
              
              {Object.keys(groupedTerms).sort().map(letter => (
                <div key={letter} id={`letter-${letter}`} className="mb-10">
                  <h2 className="text-3xl font-bold text-primary-600 mb-6 border-b-2 border-primary-100 pb-2">
                    {letter}
                  </h2>
                  <div className="space-y-4">
                    {groupedTerms[letter].sort((a, b) => a.term.localeCompare(b.term)).map(term => (
                      <div key={term.term} className="bg-gray-50 rounded-lg overflow-hidden">
                        <div 
                          className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
                          onClick={() => toggleTerm(term.term)}
                        >
                          <h3 className="text-lg font-semibold text-gray-800">{term.term}</h3>
                          <div className="flex items-center">
                            <span className="text-xs px-2 py-1 rounded bg-primary-100 text-primary-700 mr-3">
                              {term.category}
                            </span>
                            {expandedTerms[term.term] ? (
                              <FaChevronUp className="text-gray-500" />
                            ) : (
                              <FaChevronDown className="text-gray-500" />
                            )}
                          </div>
                        </div>
                        {expandedTerms[term.term] && (
                          <div className="p-4 pt-0 border-t border-gray-200">
                            <p className="text-gray-600">{term.definition}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Related Resources */}
            <div className="max-w-4xl mx-auto mt-16">
              <div className="bg-primary-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-primary-600 mb-6">Related Resources</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/debt-calculator" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Pricing Calculator</h3>
                    <p className="text-gray-600">
                      Use our free calculator to see how much you can save by switching to our VoIP business phone system.
                    </p>
                  </Link>
                  <Link href="/blog" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Communications Blog</h3>
                    <p className="text-gray-600">
                      Learn more about business communication strategies, VoIP technology, and remote work best practices.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 