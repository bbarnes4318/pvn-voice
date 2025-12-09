import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { FaArrowLeft, FaClock, FaUser } from 'react-icons/fa';

const BuyersGuideBlog = () => {
  const posts = [
    {
      title: "Choosing the Right VoIP Provider: Complete Guide",
      excerpt: "A comprehensive guide to help you select the perfect VoIP provider for your business needs.",
      readTime: "15 min read",
      author: "Brian Reynolds",
      date: "April 1, 2024",
      url: "/blog/choosing-voip-provider"
    },
    {
      title: "VoIP Features Comparison: What to Look For",
      excerpt: "Compare essential VoIP features and determine which ones matter most for your business.",
      readTime: "12 min read",
      author: "David Chen",
      date: "March 31, 2024",
      url: "/blog/voip-features-comparison"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-primary-100">
      <Head>
        <title>Buyer's Guide - PVN Voice Blog</title>
        <meta name="description" content="Comprehensive guides to help you choose the right VoIP solution for your business." />
      </Head>

      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-br from-white to-primary-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link href="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
                <FaArrowLeft className="mr-2" />
                Back to Blog
              </Link>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Buyer's Guide</h1>
              <p className="text-xl text-gray-600 mb-12">
                Comprehensive guides to help you choose the right VoIP solution for your business.
              </p>

              <div className="space-y-8">
                {posts.map((post, index) => (
                  <Link href={post.url} key={index} className="block">
                    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary-600">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="flex items-center mr-4">
                            <FaUser className="mr-2" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <FaClock className="mr-2" />
                            {post.readTime}
                          </div>
                          <span className="mx-2">•</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BuyersGuideBlog; 