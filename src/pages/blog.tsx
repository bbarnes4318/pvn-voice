import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaCalendarAlt, FaUser, FaArrowRight, FaArrowLeft, FaSearch } from 'react-icons/fa';

const blogPosts = [
  {
    id: 'voip-security-practices',
    title: '10 Essential VoIP Security Practices for 2024',
    excerpt: 'Protect your business communications with these crucial security practices designed for cloud-based phone systems.',
    category: 'Security',
    author: 'David Chen',
    date: 'March 15, 2024',
    image: '/images/security.png',
    url: '/blog/voip-security-practices'
  },
  {
    id: 'remote-work-voip',
    title: 'Managing Remote Teams with VoIP: Best Practices',
    excerpt: 'Learn how to effectively manage remote teams using VoIP technology and maintain productivity across distributed locations.',
    category: 'Remote Work',
    author: 'Michael Reynolds',
    date: 'February 28, 2024',
    image: '/images/remote.png',
    url: '/blog/remote-work-voip'
  },
  {
    id: 'voip-cost-savings',
    title: 'VoIP Cost Savings: How Businesses Save Money with Modern Phone Systems',
    excerpt: 'A comprehensive comparison to help you make the right choice for your business communications.',
    category: 'Cost Savings',
    author: 'Michael Reynolds',
    date: 'January 12, 2024',
    image: '/images/voipvstrad.png',
    url: '/blog/voip-cost-savings'
  },
  {
    id: 'unified-communications',
    title: 'Unified Communications Explained: A Complete Guide',
    excerpt: 'Discover how unified communications platforms are revolutionizing business collaboration with advanced features and seamless integration.',
    category: 'Unified Communications',
    author: 'Sarah Johnson',
    date: 'December 5, 2023',
    image: '/images/unified-comms.png',
    url: '/blog/unified-communications-explained'
  },
  {
    id: 'voip-selection',
    title: 'Choosing the Right VoIP Provider: Complete Guide',
    excerpt: 'Master the art of selecting the perfect VoIP solution with our comprehensive evaluation framework and provider comparison.',
    category: 'Buyer\'s Guide',
    author: 'Thomas Wilson',
    date: 'November 18, 2023',
    image: '/images/voip-selection.png',
    url: '/blog/choosing-voip-provider'
  },
  {
    id: 'call-quality',
    title: 'Optimizing VoIP Call Quality: Technical Guide',
    excerpt: 'Expert techniques for achieving crystal-clear VoIP calls: from network optimization to advanced troubleshooting.',
    category: 'Technical',
    author: 'Robert Garcia',
    date: 'October 2, 2023',
    image: '/images/call-quality.png',
    url: '/blog/optimizing-voip-call-quality'
  },
  {
    id: 'future-business-communication',
    title: 'The Future of Business Communication: AI, 5G, and Beyond',
    excerpt: 'Explore how artificial intelligence, 5G networks, and emerging technologies are revolutionizing business communications. Learn about predictive analytics, real-time translation, and immersive collaboration tools.',
    category: 'Unified Communications',
    author: 'David Chen',
    date: 'September 15, 2023',
    image: '/images/future-comms.png',
    url: '/blog/future-business-communication'
  },
  {
    id: 'voip-network-requirements',
    title: 'VoIP Network Requirements: A Complete Technical Guide',
    excerpt: 'Master your VoIP network setup with detailed requirements for bandwidth, QoS, and security. Includes network diagrams, configuration templates, and performance optimization tips.',
    category: 'Technical',
    author: 'Jessica Johnson',
    date: 'August 28, 2023',
    image: '/images/network-setup.png',
    url: '/blog/voip-network-requirements'
  },
  {
    id: 'voip-features-comparison',
    title: 'VoIP Features: The Ultimate Comparison Guide for 2023',
    excerpt: 'Compare 50+ essential VoIP features across leading providers. Includes detailed feature matrices, pricing comparisons, and real-world use cases for different business sizes.',
    category: 'Buyer\'s Guide',
    author: 'David Chen',
    date: 'July 12, 2023',
    image: '/images/features-comparison.png',
    url: '/blog/voip-features-comparison'
  },
  {
    id: 'cost-reduction-strategies',
    title: '15 Proven Strategies to Slash Your Business Communication Costs',
    excerpt: 'Learn how businesses are saving 40-60% on communication costs through VoIP optimization, contract negotiation, and smart feature selection. Includes ROI calculators and case studies.',
    category: 'Cost Savings',
    author: 'David Chen',
    date: 'June 25, 2023',
    image: '/images/cost-reduction.png',
    url: '/blog/cost-reduction-strategies'
  },
  {
    id: 'remote-work-tools',
    title: 'The Ultimate Guide to VoIP Tools for Remote Work Success',
    excerpt: 'Discover 20+ essential VoIP tools and features that enable seamless remote collaboration. Includes setup guides, best practices, and real-world success stories from distributed teams.',
    category: 'Remote Work',
    author: 'David Chen',
    date: 'May 8, 2023',
    image: '/images/remote-tools.png',
    url: '/blog/remote-work-tools'
  },
  {
    id: 'voip-security-threats',
    title: 'VoIP Security Threats: A Comprehensive Guide to Protection',
    excerpt: 'Stay ahead of emerging VoIP security threats with detailed prevention strategies, security frameworks, and compliance guidelines. Includes real-world attack scenarios and solutions.',
    category: 'Security',
    author: 'Jessica Johnson',
    date: 'April 21, 2023',
    image: '/images/security-threats.png',
    url: '/blog/voip-security-threats'
  }
];

const categories = [
  'All Categories',
  'Cost Savings',
  'Remote Work',
  'Security',
  'Unified Communications',
  'Technical',
  'Buyer\'s Guide'
];

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const postsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const getCurrentPagePosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return blogPosts.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to determine if a post should show an image
  const shouldShowImage = (postIndex: number) => {
    return postIndex < 3;
  };

  // Function to determine the post style based on page and position
  const getPostStyle = (postIndex: number, currentPage: number) => {
    // First page posts (with images)
    if (currentPage === 1 && postIndex < 3) {
      return 'image-style';
    }
    
    // Second page posts (special styling)
    if (currentPage === 2) {
      return 'premium-style';
    }
    
    // All other posts
    return 'standard-style';
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-primary-100">
      <Head>
        <title>Business VoIP Blog - PVN Voice</title>
        <meta name="description" content="Get the latest insights, tips, and strategies for business VoIP, cloud communications, and remote work from PVN Voice experts." />
      </Head>

      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-700 to-primary-500 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">Business Communications Blog</h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8">
                Get the latest insights, tips, and strategies for business VoIP, cloud communications, and remote work from PVN Voice experts.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="bg-white border-b border-gray-200 py-8 sticky top-0 z-20 shadow-sm">
          <div className="container-custom">
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/blog" className="px-5 py-2.5 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors font-medium shadow-md hover:shadow-lg">
                All Categories
              </Link>
              <Link href="/blog/categories/cost-savings" className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors font-medium">
                Cost Savings
              </Link>
              <Link href="/blog/categories/remote-work" className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors font-medium">
                Remote Work
              </Link>
              <Link href="/blog/categories/security" className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors font-medium">
                Security
              </Link>
              <Link href="/blog/categories/unified-communications" className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors font-medium">
                Unified Communications
              </Link>
              <Link href="/blog/categories/technical" className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors font-medium">
                Technical
              </Link>
              <Link href="/blog/categories/buyers-guide" className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors font-medium">
                Buyer's Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container-custom">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">No results found</h3>
                <p className="text-gray-600">Try adjusting your search terms</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getCurrentPagePosts().map((post, index) => {
                  const postStyle = getPostStyle(index, currentPage);
                  
                  return (
                    <Link key={post.id} href={post.url} className="group">
                      {postStyle === 'image-style' ? (
                        // First page with images
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                          <div className="relative h-56 overflow-hidden">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute top-4 left-4">
                              <span className="text-xs font-semibold px-3 py-1.5 bg-white/90 backdrop-blur-sm text-primary-600 rounded-full shadow-sm">
                                {post.category}
                              </span>
                            </div>
                          </div>
                          <div className="p-6 flex-grow flex flex-col">
                            <div className="flex items-center mb-3 text-xs text-gray-500">
                              <FaCalendarAlt className="mr-1.5" />
                              {post.date}
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                              {post.title}
                            </h2>
                            <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-sm font-medium mr-3">
                                  {post.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <span className="font-medium text-gray-700">{post.author}</span>
                              </div>
                              <span className="text-primary-600 text-sm font-medium group-hover:text-primary-700 flex items-center">
                                Read More <FaArrowRight className="ml-1 text-xs" />
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : postStyle === 'premium-style' ? (
                        // Second page premium style
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                          <div className="relative h-48 overflow-hidden bg-gradient-to-r from-primary-600 to-secondary-600">
                            <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl font-bold">
                                {post.category.charAt(0)}
                              </div>
                            </div>
                            <div className="absolute top-4 left-4">
                              <span className="text-xs font-semibold px-3 py-1.5 bg-white/90 backdrop-blur-sm text-primary-600 rounded-full shadow-sm">
                                {post.category}
                              </span>
                            </div>
                          </div>
                          <div className="p-6 flex-grow flex flex-col">
                            <div className="flex items-center mb-3 text-xs text-gray-500">
                              <FaCalendarAlt className="mr-1.5" />
                              {post.date}
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                              {post.title}
                            </h2>
                            <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-sm font-medium mr-3">
                                  {post.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <span className="font-medium text-gray-700">{post.author}</span>
                              </div>
                              <span className="text-primary-600 text-sm font-medium group-hover:text-primary-700 flex items-center">
                                Read More <FaArrowRight className="ml-1 text-xs" />
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Standard style for other pages
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                          <div className="p-4 bg-gradient-to-r from-primary-50 to-secondary-50 border-b border-gray-100">
                            <span className="text-xs font-semibold px-3 py-1.5 bg-white text-primary-600 rounded-full shadow-sm">
                              {post.category}
                            </span>
                          </div>
                          <div className="p-6 flex-grow flex flex-col">
                            <div className="flex items-center mb-3 text-xs text-gray-500">
                              <FaCalendarAlt className="mr-1.5" />
                              {post.date}
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                              {post.title}
                            </h2>
                            <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-sm font-medium mr-3">
                                  {post.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <span className="font-medium text-gray-700">{post.author}</span>
                              </div>
                              <span className="text-primary-600 text-sm font-medium group-hover:text-primary-700 flex items-center">
                                Read More <FaArrowRight className="ml-1 text-xs" />
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Pagination */}
            {filteredPosts.length > 0 && (
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-5 py-2.5 rounded-md flex items-center ${
                      currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                    }`}
                  >
                    <FaArrowLeft className="mr-1.5 text-xs" />
                    Previous
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => handlePageChange(index + 1)}
                      className={`px-5 py-2.5 rounded-md ${
                        currentPage === index + 1
                          ? 'bg-primary-600 text-white shadow-md'
                          : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-5 py-2.5 rounded-md flex items-center ${
                      currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                    }`}
                  >
                    Next
                    <FaArrowRight className="ml-1.5 text-xs" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with VoIP Trends</h2>
              <p className="text-xl mb-8 text-primary-100">
                Subscribe to our newsletter for the latest business communications insights and tips
              </p>
              <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-5 py-3.5 rounded-md flex-grow text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary-400 shadow-md"
                  required
                />
                <button
                  type="submit"
                  className="bg-secondary-600 hover:bg-secondary-700 transition-colors text-white font-medium px-8 py-3.5 rounded-md shadow-md"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-sm text-primary-200">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 