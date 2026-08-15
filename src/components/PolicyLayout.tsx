import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaPhoneAlt, FaPrint } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import {
  COMPLIANCE_POLICIES,
  DNC_PHONE_DISPLAY,
  DNC_PHONE_HREF,
  POLICY_META_LINE,
} from '../lib/compliance-policies';

export interface PolicySection {
  id: string;
  title: string;
}

interface PolicyLayoutProps {
  /** Contents of the <title> tag */
  metaTitle: string;
  metaDescription: string;
  /** Policy name shown in the hero band */
  heading: string;
  /** Path of this policy, used to build the "Related policies" row */
  currentHref: string;
  introId: string;
  introHeading: string;
  introIcon: IconType;
  introContent: React.ReactNode;
  /** Body sections, in document order, excluding the intro */
  sections: PolicySection[];
  children: React.ReactNode;
}

const handlePrint = () => {
  if (typeof window !== 'undefined') {
    window.print();
  }
};

const PolicyLayout: React.FC<PolicyLayoutProps> = ({
  metaTitle,
  metaDescription,
  heading,
  currentHref,
  introId,
  introHeading,
  introIcon,
  introContent,
  sections,
  children,
}) => {
  const IntroIcon = introIcon;
  const contents: PolicySection[] = [{ id: introId, title: introHeading }, ...sections];
  const relatedPolicies = COMPLIANCE_POLICIES.filter((policy) => policy.href !== currentHref);

  return (
    <div className="policy-page min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-primary-100">
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="policy-hero bg-primary-600 text-white py-10">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <Link href="/" className="text-primary-100 hover:text-white transition-colors text-sm">
                  &larr; Back to Home
                </Link>
                <button
                  onClick={handlePrint}
                  className="no-print text-primary-100 hover:text-white transition-colors text-sm flex items-center"
                >
                  <FaPrint className="mr-1" /> Print
                </button>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{heading}</h1>
              <p className="text-primary-100 mt-3">
                {POLICY_META_LINE}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-10 bg-white">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Table of Contents - Sidebar */}
              <div className="no-print lg:w-1/4">
                <div className="sticky top-8">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h2 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Contents</h2>
                    <ul className="space-y-2 text-sm">
                      {contents.map((section) => (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            className="text-primary-600 hover:text-primary-800 transition-colors"
                          >
                            {section.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 bg-primary-50 p-5 rounded-lg border border-primary-100">
                    <div className="flex items-center mb-3">
                      <FaPhoneAlt className="text-primary-600 mr-2" />
                      <h3 className="font-bold text-primary-700">Do-Not-Call Requests</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      To be added to our internal Do-Not-Call list, or to request a copy of this policy, call us. Do-not-call requests are honored immediately, and in all cases within 24 hours.
                    </p>
                    <a
                      href={DNC_PHONE_HREF}
                      className="block w-full bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-3 rounded text-sm font-medium"
                    >
                      Call {DNC_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="policy-body lg:w-3/4">
                <div
                  id={introId}
                  className="scroll-mt-24 bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 mb-8"
                >
                  <div className="flex items-start">
                    <IntroIcon className="text-primary-600 text-2xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 mb-2">{introHeading}</h2>
                      <div className="text-gray-700 text-sm leading-relaxed">{introContent}</div>
                    </div>
                  </div>
                </div>

                <div className="prose prose-sm max-w-none">
                  {children}

                  <p className="text-gray-600 text-sm italic mt-8 pt-6 border-t border-gray-200">
                    This policy is reviewed at least annually and upon any material change in applicable law. A copy of this policy is available on request at <a href={DNC_PHONE_HREF} className="text-primary-600 hover:text-primary-700">{DNC_PHONE_DISPLAY}</a>.
                  </p>
                </div>

                {/* Related policies */}
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Related Policies</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {relatedPolicies.map((policy) => (
                      <Link
                        key={policy.href}
                        href={policy.href}
                        className="bg-white border border-gray-200 rounded-md p-3 shadow-sm hover:shadow transition-shadow text-sm font-medium text-primary-600 hover:text-primary-700"
                      >
                        {policy.name}
                      </Link>
                    ))}
                    <Link
                      href="/compliance"
                      className="bg-white border border-gray-200 rounded-md p-3 shadow-sm hover:shadow transition-shadow text-sm font-medium text-primary-600 hover:text-primary-700"
                    >
                      &larr; All Compliance Policies
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PolicyLayout;
