import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCallButton from '../components/StickyCallButton';
import HeroSection from '../components/home/HeroSection';
import ProofStrip from '../components/home/ProofStrip';
import HowItWorksSection from '../components/home/HowItWorksSection';
import FailoverRulesSection from '../components/home/FailoverRulesSection';
import TrafficCalculator from '../components/home/TrafficCalculator';
import ByocSection from '../components/home/ByocSection';
import MissionControlSection from '../components/home/MissionControlSection';
import FloorSection from '../components/home/FloorSection';
import TrafficTestSection from '../components/home/TrafficTestSection';
import ResellerSection from '../components/home/ResellerSection';
import FaqSection, { faqItems } from '../components/home/FaqSection';

const description = 'PVN gives VICIdial call centers automatic carrier failover: when one carrier fails a call, the next one tries it. Keep your dialer and your carrier. Every attempt logged.';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PVN Voice',
  legalName: 'PVN LLC',
  url: 'https://pvnvoice.com',
  telephone: '+1-904-512-8487',
  logo: 'https://pvnvoice.com/images/logo2.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2800 N 6th Street, STE 796',
    addressLocality: 'Saint Augustine',
    addressRegion: 'FL',
    postalCode: '32084',
    addressCountry: 'US',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Carrier Failover for VICIdial Call Centers | PVN Voice</title>
        <meta name="description" content={description} />
        <meta property="og:title" content="How Many Calls Are You Losing? | PVN Voice" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://pvnvoice.com/images/logo2.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://pvnvoice.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Head>

      <Header />
      <main>
        <HeroSection />
        <ProofStrip />
        <HowItWorksSection />
        <FailoverRulesSection />
        <TrafficCalculator />
        <ByocSection />
        <MissionControlSection />
        <FloorSection />
        <TrafficTestSection />
        <ResellerSection />
        <FaqSection />
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
}
