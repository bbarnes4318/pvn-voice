import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { FaArrowLeft, FaClock, FaUser } from 'react-icons/fa';

const TechnicalBlog = () => {
  const posts = [
    {
      title: "Optimizing VoIP Call Quality: Technical Guide",
      excerpt: "Learn technical best practices for ensuring crystal-clear VoIP call quality in your network.",
      readTime: "11 min read",
      author: "David Chen",
      date: "March 30, 2024",
      url: "/blog/optimizing-voip-call-quality"
    },
    {
      title: "VoIP Network Requirements and Setup Guide",
      excerpt: "A comprehensive technical guide to VoIP network requirements and proper setup procedures.",
      readTime: "13 min read",
      author: "Jessica Johnson",
      date: "March 29, 2024",
      url: "/blog/voip-network-requirements"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-primary-100">
      <Head>
        <title>Technical - PVN Voice Blog</title>
        <meta name="description" content="Deep dive into technical aspects of VoIP implementation and optimization." />
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
              
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Technical</h1>
              <p className="text-xl text-gray-600 mb-12">
                Deep dive into technical aspects of VoIP implementation and optimization.
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

export default TechnicalBlog; 