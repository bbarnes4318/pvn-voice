import React from 'react';
import LegalDoc, { DocSection, docH2, docList, docLi } from '../components/LegalDoc';
import { PHONE_DISPLAY, PHONE_HREF } from '../lib/pricing';

const contents: DocSection[] = [
  { id: 's1', title: 'Information We Collect' },
  { id: 's2', title: 'How We Use Your Information' },
  { id: 's3', title: 'How We Share Your Information' },
  { id: 's4', title: 'How We Protect Your Information' },
  { id: 's5', title: 'Cookies and Tracking Technologies' },
  { id: 's6', title: 'Third-Party Websites' },
  { id: 's7', title: 'Your Privacy Choices' },
  { id: 's8', title: 'California Privacy Rights' },
  { id: 's9', title: 'Changes to This Privacy Policy' },
  { id: 's10', title: 'Contact Us' },
];

const rights: { right: string; description: string; how: React.ReactNode }[] = [
  {
    right: 'Access',
    description: 'Request copies of your personal information we have collected',
    how: (
      <a href="/contact-us" className="text-navy">
        Contact Us
      </a>
    ),
  },
  {
    right: 'Correction',
    description: 'Request correction of inaccurate personal information',
    how: (
      <a href="/contact-us" className="text-navy">
        Contact Us
      </a>
    ),
  },
  {
    right: 'Deletion',
    description: 'Request deletion of your personal information',
    how: (
      <a href="/contact-us" className="text-navy">
        Contact Us
      </a>
    ),
  },
  {
    right: 'Marketing Opt-Out',
    description: 'Opt out of marketing communications',
    how: (
      <>
        Click &quot;unsubscribe&quot; in emails or{' '}
        <a href="/contact-us" className="text-navy">
          Contact Us
        </a>
      </>
    ),
  },
  {
    right: 'Do Not Sell/Share',
    description: 'Opt out of the sale or sharing of personal information',
    how: (
      <a href="/contact-us" className="text-navy">
        Contact Us
      </a>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalDoc
      metaTitle="PVN Voice — Privacy Policy"
      metaDescription="PVN Voice Privacy Policy: what information we collect, how we use and share it, how we protect it, and your privacy rights including California (CCPA/CPRA) rights."
      eyebrow="Legal"
      heading="Privacy Policy"
      metaLine="Last Updated: May 16, 2023"
      contents={contents}
      contentsColumns
      callout={{
        heading: 'Need Help?',
        body: 'If you have questions about our privacy practices or need to make a request regarding your information:',
      }}
      relatedHeading="Other Legal Documents"
      related={[
        { href: '/terms-of-service', label: 'Terms of Service' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/compliance', label: 'Compliance Policies' },
      ]}
      reviewNote="Last Updated: May 16, 2023"
    >
      <p className="mt-0">
        At PVN LLC (doing business as &quot;PVN Voice&quot;), we take your privacy seriously. This
        Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
        visit our website or use our business VoIP and communications services. Please read this
        policy carefully. If you disagree with its terms, please discontinue use of our website and
        services immediately.
      </p>

      <h2 id="s1" className={docH2}>
        1. Information We Collect
      </h2>
      <p className="mt-3.5">
        We collect information that you voluntarily provide to us when you register on our website,
        express interest in obtaining information about our services, or otherwise contact us.
      </p>
      <p className="mt-3.5">
        <strong className="font-semibold">Personal Information may include:</strong>
      </p>
      <ul className={docList}>
        <li className={docLi}>Name, email address, phone number, and mailing address</li>
        <li className={docLi}>Business information (such as company name, size, and industry)</li>
        <li className={docLi}>Payment information (such as credit card numbers and billing details)</li>
        <li className={docLi}>Employment information</li>
        <li className={docLi}>Any other information you choose to provide</li>
      </ul>
      <p className="mt-3.5">
        <strong className="font-semibold">Automatically Collected Information may include:</strong>
      </p>
      <ul className={docList}>
        <li className={docLi}>IP address and browser type</li>
        <li className={docLi}>Operating system and device information</li>
        <li className={docLi}>Browsing actions and patterns</li>
        <li className={docLi}>Referring website addresses</li>
        <li className={docLi}>
          Details of your visits to our website (including traffic data, location data, logs, and
          other communication data)
        </li>
      </ul>
      <p className="mt-3.5">
        This information is collected through cookies, web beacons, and other tracking technologies,
        as well as third-party analytics tools.
      </p>
      <p className="mt-3.5">
        Where you provide a telephone number and consent to be contacted, the standards we apply to
        collecting, documenting, honoring, and revoking that consent are described in our{' '}
        <a href="/compliance/consent" className="text-navy">
          Opt-In &amp; Consent Policy
        </a>
        . Our full set of telemarketing compliance policies, including our{' '}
        <a href="/compliance/do-not-call" className="text-navy">
          Do-Not-Call Policy
        </a>
        , is available on our{' '}
        <a href="/compliance" className="text-navy">
          Compliance
        </a>{' '}
        page.
      </p>
      <div className="bg-card border border-rule rounded px-[18px] py-4 mt-4 text-[14.5px] text-slate">
        <strong className="font-semibold">Note:</strong> PVN Voice does not knowingly collect or
        solicit information from anyone under the age of 18. If you are a parent or guardian and
        believe we might have any information from or about a child under the age of 18, please
        contact us immediately at{' '}
        <a href="mailto:support@pvndialer.com" className="text-navy">
          support@pvndialer.com
        </a>
        .
      </div>

      <h2 id="s2" className={docH2}>
        2. How We Use Your Information
      </h2>
      <p className="mt-3.5">The information we collect may be used in the following ways:</p>
      <p className="mt-3.5">
        <strong className="font-semibold">Primary Uses</strong>
      </p>
      <ul className={docList}>
        <li className={docLi}>To provide, operate, and maintain our services</li>
        <li className={docLi}>To provision VoIP and communication systems</li>
        <li className={docLi}>To process payments and transactions</li>
        <li className={docLi}>To verify your identity and eligibility for our services</li>
        <li className={docLi}>To communicate with you about your account or services</li>
        <li className={docLi}>To respond to your inquiries and provide customer support</li>
      </ul>
      <p className="mt-3.5">
        <strong className="font-semibold">Additional Uses</strong>
      </p>
      <ul className={docList}>
        <li className={docLi}>To improve our website and services</li>
        <li className={docLi}>To personalize your experience</li>
        <li className={docLi}>To understand how our services are used</li>
        <li className={docLi}>To develop new products and services</li>
        <li className={docLi}>To send periodic emails regarding your account or services</li>
        <li className={docLi}>To comply with legal obligations</li>
      </ul>

      <h2 id="s3" className={docH2}>
        3. How We Share Your Information
      </h2>
      <p className="mt-3.5">We may share your personal information in the following situations:</p>
      <ul className={docList}>
        <li className={docLi}>
          <strong className="font-semibold">With Telecommunications Providers:</strong> To provision
          and support your VoIP and communication services, we may share relevant information with
          telecommunication carriers and providers.
        </li>
        <li className={docLi}>
          <strong className="font-semibold">Service Providers:</strong> We may share your information
          with third-party vendors, service providers, contractors, or agents who perform services for
          us or on our behalf.
        </li>
        <li className={docLi}>
          <strong className="font-semibold">Business Transfers:</strong> If we are involved in a
          merger, acquisition, or sale of all or a portion of our assets, your information may be
          transferred as part of that transaction.
        </li>
        <li className={docLi}>
          <strong className="font-semibold">Legal Requirements:</strong> We may disclose your
          information if required to do so by law or in response to valid requests by public
          authorities (e.g., a court or government agency).
        </li>
        <li className={docLi}>
          <strong className="font-semibold">With Your Consent:</strong> We may disclose your personal
          information for any other purpose with your consent.
        </li>
      </ul>
      <p className="mt-3.5">We do not sell, rent, or lease customer lists to third parties.</p>

      <h2 id="s4" className={docH2}>
        4. How We Protect Your Information
      </h2>
      <p className="mt-3.5">
        We implement a variety of security measures to maintain the safety of your personal
        information:
      </p>
      <ul className={docList}>
        <li className={docLi}>
          All sensitive information is transmitted via Secure Socket Layer (SSL) technology
        </li>
        <li className={docLi}>We adhere to PCI DSS compliance when handling credit card information</li>
        <li className={docLi}>
          Personal information is stored in secure databases accessible only to authorized personnel
        </li>
        <li className={docLi}>Regular security assessments and penetration testing</li>
        <li className={docLi}>Employee training on privacy and security practices</li>
        <li className={docLi}>Physical, electronic, and procedural safeguards</li>
      </ul>
      <p className="mt-3.5">
        However, no method of transmission over the Internet or electronic storage is 100% secure.
        While we strive to use commercially acceptable means to protect your personal information, we
        cannot guarantee its absolute security.
      </p>

      <h2 id="s5" className={docH2}>
        5. Cookies and Tracking Technologies
      </h2>
      <p className="mt-3.5">
        We use cookies, web beacons, tracking pixels, and other tracking technologies to help
        customize our website and improve your experience. When you visit our website, we may
        automatically collect certain information about your device, including information about your
        web browser, IP address, time zone, and some of the cookies installed on your device.
      </p>
      <p className="mt-3.5">
        You can instruct your browser to refuse all cookies or to indicate when a cookie is being
        sent. However, if you do not accept cookies, you may not be able to use some portions of our
        website. Our cookie types include:
      </p>
      <ul className={docList}>
        <li className={docLi}>
          <strong className="font-semibold">Essential cookies:</strong> Necessary for the website to
          function properly
        </li>
        <li className={docLi}>
          <strong className="font-semibold">Preference cookies:</strong> Enable the website to
          remember your preferences
        </li>
        <li className={docLi}>
          <strong className="font-semibold">Statistics cookies:</strong> Help us understand how
          visitors interact with our website
        </li>
        <li className={docLi}>
          <strong className="font-semibold">Marketing cookies:</strong> Used to track visitors across
          websites to display relevant advertisements
        </li>
      </ul>

      <h2 id="s6" className={docH2}>
        6. Third-Party Websites
      </h2>
      <p className="mt-3.5">
        Our website may contain links to third-party websites that are not operated by us. If you
        click a third-party link, you will be directed to that third party&apos;s site. We strongly
        advise you to review the Privacy Policy of every site you visit.
      </p>
      <p className="mt-3.5">
        We have no control over and assume no responsibility for the content, privacy policies, or
        practices of any third-party sites or services.
      </p>

      <h2 id="s7" className={docH2}>
        7. Your Privacy Choices
      </h2>
      <p className="mt-3.5">You have certain rights regarding your personal information:</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse mt-4 text-[14.5px]">
          <thead>
            <tr>
              {['Right', 'Description', 'How to Exercise'].map((heading) => (
                <th
                  key={heading}
                  className="text-left font-data text-[10.5px] uppercase tracking-[.1em] text-slate px-3 py-2.5 border-b border-rule bg-card"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rights.map((row) => (
              <tr key={row.right}>
                <td className="p-3 border-b border-rule align-top">{row.right}</td>
                <td className="p-3 border-b border-rule align-top">{row.description}</td>
                <td className="p-3 border-b border-rule align-top">{row.how}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3.5">
        We will respond to your request within 45 days. We may need to verify your identity before
        processing your request.
      </p>

      <h2 id="s8" className={docH2}>
        8. California Privacy Rights
      </h2>
      <p className="mt-3.5">
        If you are a California resident, you have specific privacy rights under the California
        Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA). In addition to the
        rights described above, California residents have the right to:
      </p>
      <ul className={docList}>
        <li className={docLi}>Know what personal information is being collected about them</li>
        <li className={docLi}>
          Know whether their personal information is sold or disclosed and to whom
        </li>
        <li className={docLi}>Opt out of the sale of their personal information</li>
        <li className={docLi}>Access their personal information</li>
        <li className={docLi}>Request deletion of their personal information</li>
        <li className={docLi}>Not be discriminated against for exercising their privacy rights</li>
      </ul>
      <p className="mt-3.5">
        To make a request under the CCPA/CPRA, please contact us at{' '}
        <a href="mailto:support@pvndialer.com" className="text-navy">
          support@pvndialer.com
        </a>{' '}
        or call us at{' '}
        <a href={PHONE_HREF} className="text-navy">
          {PHONE_DISPLAY}
        </a>
        .
      </p>

      <h2 id="s9" className={docH2}>
        9. Changes to This Privacy Policy
      </h2>
      <p className="mt-3.5">
        We may update our Privacy Policy from time to time. We will notify you of any changes by
        posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
        You are advised to review this Privacy Policy periodically for any changes. Changes to this
        Privacy Policy are effective when they are posted on this page.
      </p>
      <p className="mt-3.5">
        If we make material changes to this policy, we will notify you either through the email
        address you have provided us or by placing a prominent notice on our website.
      </p>

      <h2 id="s10" className={docH2}>
        10. Contact Us
      </h2>
      <p className="mt-3.5">
        If you have any questions or concerns about this Privacy Policy, please contact us at:
      </p>
      <p className="mt-3.5">
        <strong className="font-semibold">PVN LLC</strong>
        <br />
        2800 N 6th Street #796
        <br />
        Saint Augustine, FL 32084
        <br />
        United States
      </p>
      <p className="mt-3.5">
        <a href="mailto:support@pvndialer.com" className="text-navy">
          support@pvndialer.com
        </a>
        <br />
        <a href={PHONE_HREF} className="text-navy">
          {PHONE_DISPLAY}
        </a>
      </p>
    </LegalDoc>
  );
}
