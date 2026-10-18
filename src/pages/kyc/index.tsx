import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { PORTAL_LOGIN_URL, PORTAL_SIGNUP_URL } from '../../lib/site-links';

// Verification used to start here. It now happens inside the customer portal,
// after you create your account there, so this page only points the way. The
// old /auth/* and /kyc/* URLs redirect here (next.config.js).
export default function KYCPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Account verification - PVN Voice</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Header />
      <main className="flex-grow bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Verification happens in your PVN Voice account</h1>
            <p className="mt-4 text-gray-600">
              Create your account in the PVN Voice customer portal, then verify your business there.
              Our team reviews every application before an account is activated.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={PORTAL_SIGNUP_URL}
                className="bg-primary-600 text-white px-6 py-3 rounded font-medium hover:bg-primary-700 transition-colors"
              >
                Get Started
              </a>
              <a
                href={PORTAL_LOGIN_URL}
                className="border border-primary-600 text-primary-600 px-6 py-3 rounded font-medium hover:bg-primary-600 hover:text-white transition-colors"
              >
                Customer Login
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Already started? Sign in to see where your application stands.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
