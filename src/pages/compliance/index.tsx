import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaDatabase, FaFileSignature, FaPhoneAlt, FaPhoneSlash, FaShieldAlt } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  COMPLIANCE_POLICIES,
  DNC_PHONE_DISPLAY,
  DNC_PHONE_HREF,
  POLICY_META_LINE,
} from '../../lib/compliance-policies';

const policyIcons: Record<string, IconType> = {
  '/compliance/do-not-call': FaPhoneSlash,
  '/compliance/do-not-originate': FaShieldAlt,
  '/compliance/reassigned-numbers': FaDatabase,
  '/compliance/consent': FaFileSignature,
};

export default function Compliance() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-primary-100">
      <Head>
        <title>Compliance Policies - PVN Voice</title>
        <meta name="description" content="PVN LLC's telemarketing compliance policies: Do-Not-Call, Do-Not-Originate, Reassigned Numbers Database, and Opt-In & Consent. Each policy is published in full for carriers, clients, and consumers." />
      </Head>

      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-600 text-white py-10">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <Link href="/" className="text-primary-100 hover:text-white transition-colors text-sm">
                  &larr; Back to Home
                </Link>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Compliance Policies</h1>
              <p className="text-primary-100 mt-3">
                {POLICY_META_LINE}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-10 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                <div className="flex items-start">
                  <FaShieldAlt className="text-primary-600 text-2xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Our Compliance Commitment</h2>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      PVN LLC conducts and supports outbound calling in compliance with the Telephone Consumer Protection Act (TCPA), the FCC's implementing rules, the FTC's Telemarketing Sales Rule, and applicable state telemarketing laws. The policies below govern every campaign we place or support, and each one is published in full so that consumers, clients, carriers, and auditors can review it directly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {COMPLIANCE_POLICIES.map((policy) => {
                  const PolicyIcon = policyIcons[policy.href] ?? FaShieldAlt;
                  return (
                    <Link
                      key={policy.href}
                      href={policy.href}
                      className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow transition-shadow flex flex-col"
                    >
                      <div className="flex items-center mb-3">
                        <PolicyIcon className="text-primary-600 text-xl mr-3 flex-shrink-0" />
                        <h2 className="text-lg font-bold text-gray-800">{policy.name}</h2>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                        {policy.description}
                      </p>
                      <span className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-4">
                        Read the {policy.shortName} &rarr;
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-10 bg-primary-50 p-6 rounded-lg border border-primary-100">
                <div className="flex items-start">
                  <FaPhoneAlt className="text-primary-600 text-xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-lg font-bold text-primary-700 mb-2">Do-Not-Call Requests and Policy Copies</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      To be added to our internal Do-Not-Call list, or to request a written copy of any policy on this page, call us. Do-not-call requests are honored immediately, and in all cases within 24 hours.
                    </p>
                    <a
                      href={DNC_PHONE_HREF}
                      className="inline-block bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-6 rounded text-sm font-medium"
                    >
                      Call {DNC_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm italic mt-8 pt-6 border-t border-gray-200">
                These policies are reviewed at least annually and upon any material change in applicable law. Copies are available on request at <a href={DNC_PHONE_HREF} className="text-primary-600 hover:text-primary-700">{DNC_PHONE_DISPLAY}</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
