import React from 'react';
import KYCForm from '../../components/KYCForm';
import Head from 'next/head';

export default function KYCPage() {
  return (
    <>
      <Head>
        <title>KYC Verification - PVN Dialer</title>
        <meta name="description" content="Complete your KYC verification to start using PVN Dialer services" />
      </Head>

      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              KYC Verification
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Please complete the verification process to start using our services
            </p>
          </div>

          <KYCForm />
        </div>
      </main>
    </>
  );
} 