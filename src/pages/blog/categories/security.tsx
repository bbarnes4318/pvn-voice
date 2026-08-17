import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { FaArrowLeft, FaClock, FaUser } from 'react-icons/fa';

const SecurityBlog = () => {
  const posts = [
    {
      title: "10 Essential VoIP Security Practices for 2024",
      excerpt: "Learn the latest security best practices to protect your VoIP system from emerging threats.",
      readTime: "8 min read",
      author: "David Chen",
      date: "March 25, 2024",
      image: "/images/security.png",
      url: "/blog/voip-security-practices"
    },
    {
      title: "VoIP Security Threats and How to Prevent Them",
      excerpt: "Understanding common VoIP security threats and implementing effective prevention strategies.",
      readTime: "9 min read",
      author: "Jessica Johnson",
      date: "March 22, 2024",
      url: "/blog/voip-security-threats"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Security - PVN Voice Blog</title>
        <meta name="description" content="Learn about VoIP security best practices and how to protect your business communications." />
      </Head>

      <Header />
      <main className="flex-grow">
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link href="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
                <FaArrowLeft className="mr-2" />
                Back to Blog
              </Link>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Security</h1>
              <p className="text-xl text-gray-600 mb-12">
                Learn about VoIP security best practices and how to protect your business communications.
              </p>

              <div className="space-y-8">
                {posts.map((post, index) => (
                  <Link href={post.url} key={index} className="block">
                    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="p-6">
                        {post.image && (
                          <div className="mb-4">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                          </div>
                        )}
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

export default SecurityBlog; 