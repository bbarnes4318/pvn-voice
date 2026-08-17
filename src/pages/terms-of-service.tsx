import React from 'react';
import LegalDoc, { DocSection, docH2, docList, docLi } from '../components/LegalDoc';
import { PHONE_DISPLAY, PHONE_HREF } from '../lib/pricing';

const contents: DocSection[] = [
  { id: 's1', title: 'Acceptance of Terms' },
  { id: 's2', title: 'Description of Services' },
  { id: 's3', title: 'Eligibility' },
  { id: 's4', title: 'Account Registration' },
  { id: 's5', title: 'Fees and Payments' },
  { id: 's6', title: 'Service Expectations' },
  { id: 's7', title: 'Client Responsibilities' },
  { id: 's8', title: 'Termination of Services' },
  { id: 's9', title: 'Privacy and Communication' },
  { id: 's10', title: 'Limitation of Liability' },
  { id: 's11', title: 'Disclaimer of Warranties' },
  { id: 's12', title: 'Indemnification' },
  { id: 's13', title: 'Changes to Terms' },
  { id: 's14', title: 'Governing Law' },
  { id: 's15', title: 'Contact Information' },
];

export default function TermsOfService() {
  return (
    <LegalDoc
      metaTitle="PVN Voice — Terms of Service"
      metaDescription="PVN Voice Terms of Service: description of services, eligibility, fees and payments, service expectations, termination, liability, and governing law."
      eyebrow="Legal"
      heading="Terms of Service"
      metaLine="Last Updated: June 1, 2023"
      contents={contents}
      contentsColumns
      notice={
        <>
          <h3 className="font-display font-bold text-[15px] m-0 text-[#8A2E22]">Important Notice</h3>
          <p className="mt-2 text-[#8A2E22] text-[15px]">
            These Terms of Service constitute a legally binding agreement between you and PVN LLC
            (doing business as &quot;PVN Voice&quot;). By using our services, you acknowledge that you
            have read, understood, and agree to be bound by these terms. If you do not agree with any
            part of these terms, please do not use our services.
          </p>
        </>
      }
      callout={{
        heading: 'Have Questions?',
        body: 'Our legal team is available to explain any part of these terms or answer any questions you may have.',
      }}
      related={[
        { href: '/privacy-policy', label: 'Privacy Policy' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/compliance', label: 'Compliance Policies' },
      ]}
      reviewNote="Last Updated: June 1, 2023"
    >
      <h2 id="s1" className={`${docH2} border-t-0 mt-0 pt-0`}>
        1. Acceptance of Terms
      </h2>
      <p className="mt-3.5">
        By accessing or using PVN Voice&apos;s website, services, or applications (collectively, the
        &quot;Services&quot;), you agree to be bound by these Terms of Service. If you do not agree to
        these Terms, you may not access or use the Services. These Terms constitute a legally binding
        agreement between you and PVN Voice.
      </p>

      <h2 id="s2" className={docH2}>
        2. Description of Services
      </h2>
      <p className="mt-3.5">
        PVN Voice provides business VoIP telephone and unified communications services. Our Services
        include but are not limited to:
      </p>
      <ul className={docList}>
        <li className={docLi}>Cloud-based business phone systems</li>
        <li className={docLi}>Unified communications platforms</li>
        <li className={docLi}>Video conferencing solutions</li>
        <li className={docLi}>Team messaging and collaboration tools</li>
        <li className={docLi}>
          Customer support throughout the implementation and use of our services
        </li>
      </ul>
      <p className="mt-3.5">
        PVN Voice does not provide legal advice, tax advice, or IT consulting services beyond the
        scope of our communications products.
      </p>

      <h2 id="s3" className={docH2}>
        3. Eligibility
      </h2>
      <p className="mt-3.5">To use our Services, you must:</p>
      <ul className={docList}>
        <li className={docLi}>Be at least 18 years of age</li>
        <li className={docLi}>
          Be a legal resident of the United States or a legally registered business entity
        </li>
        <li className={docLi}>Have the authority to enter into a legally binding agreement</li>
        <li className={docLi}>Have a valid payment method for subscription fees</li>
        <li className={docLi}>Have sufficient internet connectivity to support VoIP services</li>
      </ul>
      <p className="mt-3.5">
        PVN Voice reserves the right to refuse service to anyone for any lawful reason.
      </p>

      <h2 id="s4" className={docH2}>
        4. Account Registration
      </h2>
      <p className="mt-3.5">
        To use certain features of our Services, you need to create an account. You agree to provide
        accurate, current, and complete information during the registration process and to update such
        information to keep it accurate, current, and complete. You are responsible for safeguarding
        your account credentials and for any activity that occurs under your account.
      </p>

      <h2 id="s5" className={docH2}>
        5. Fees and Payments
      </h2>
      <p className="mt-3.5">
        Our fees for VoIP and unified communications services are based on the subscription plan you
        select, the number of users, and any additional features or services you choose, as specified
        in your service agreement.
      </p>
      <p className="mt-3.5">You agree to:</p>
      <ul className={docList}>
        <li className={docLi}>Pay all subscription fees specified in your service agreement</li>
        <li className={docLi}>
          Pay for any additional services, international calls, or overages not included in your plan
        </li>
        <li className={docLi}>Maintain current and valid payment information</li>
      </ul>
      <p className="mt-3.5">
        All fees are clearly disclosed before you subscribe to our services. We may change our fees
        upon notice as specified in your service agreement.
      </p>
      <p className="mt-3.5">
        <strong className="font-semibold">Important:</strong> Failure to pay subscription fees may
        result in service interruption. Any applicable taxes will be added to your invoice.
      </p>

      <h2 id="s6" className={docH2}>
        6. Service Expectations
      </h2>
      <p className="mt-3.5">
        While we strive to provide reliable and high-quality services, the performance of VoIP and
        cloud communications depends on various factors including:
      </p>
      <ul className={docList}>
        <li className={docLi}>Your internet connection quality and bandwidth</li>
        <li className={docLi}>Your network configuration</li>
        <li className={docLi}>Hardware compatibility</li>
        <li className={docLi}>Third-party carrier services in certain regions</li>
      </ul>
      <p className="mt-3.5">We cannot guarantee:</p>
      <ul className={docList}>
        <li className={docLi}>Uninterrupted service without occasional technical issues</li>
        <li className={docLi}>Perfect call quality under all network conditions</li>
        <li className={docLi}>100% uptime, though we strive for maximum reliability</li>
        <li className={docLi}>Compatibility with all third-party software and hardware</li>
      </ul>

      <h2 id="s7" className={docH2}>
        7. Client Responsibilities
      </h2>
      <p className="mt-3.5">As a client of PVN Voice, you agree to:</p>
      <ul className={docList}>
        <li className={docLi}>Provide complete and accurate information about your business needs</li>
        <li className={docLi}>Maintain adequate internet connectivity suitable for VoIP services</li>
        <li className={docLi}>Promptly report any service issues to our support team</li>
        <li className={docLi}>Secure your account credentials and prevent unauthorized access</li>
        <li className={docLi}>Use our services in compliance with applicable laws and regulations</li>
        <li className={docLi}>
          Not use our services for any illegal, abusive, or fraudulent purposes
        </li>
      </ul>

      <h2 id="s8" className={docH2}>
        8. Termination of Services
      </h2>
      <p className="mt-3.5">
        Either party may terminate services as specified in the service agreement. Upon termination:
      </p>
      <ul className={docList}>
        <li className={docLi}>You will be responsible for paying any outstanding balances</li>
        <li className={docLi}>You may request to port your phone numbers to another provider</li>
        <li className={docLi}>PVN Voice will provide reasonable assistance during the transition</li>
      </ul>
      <p className="mt-3.5">
        PVN Voice reserves the right to terminate services if you breach these Terms, provide false
        information, or fail to pay subscription fees.
      </p>

      <h2 id="s9" className={docH2}>
        9. Privacy and Communication
      </h2>
      <p className="mt-3.5">
        Your privacy is important to us. Please review our{' '}
        <a href="/privacy-policy" className="text-navy">
          Privacy Policy
        </a>{' '}
        to understand how we collect, use, and share your information.
      </p>
      <p className="mt-3.5">
        By using our Services, you consent to receive communications from us, including emails, text
        messages, and phone calls related to your account and VoIP services. You can opt out of
        marketing communications, but we may still send you important service-related communications.
      </p>

      <h2 id="s10" className={docH2}>
        10. Limitation of Liability
      </h2>
      <p className="mt-3.5">
        To the maximum extent permitted by law, PVN Voice shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages, including without limitation, loss of
        profits, data, use, goodwill, or other intangible losses, resulting from:
      </p>
      <ul className={docList}>
        <li className={docLi}>Your use or inability to use our Services</li>
        <li className={docLi}>
          Any actions or inactions of third parties, including telecommunications carriers
        </li>
        <li className={docLi}>Unauthorized access to or alteration of your data</li>
        <li className={docLi}>Service interruptions or outages</li>
      </ul>
      <p className="mt-3.5">
        In no event shall our total liability to you exceed the amounts paid by you to PVN Voice for
        the Services in the six months prior to the claim.
      </p>

      <h2 id="s11" className={docH2}>
        11. Disclaimer of Warranties
      </h2>
      <p className="mt-3.5">
        The Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis, without
        warranties of any kind, either express or implied, including but not limited to warranties of
        merchantability, fitness for a particular purpose, or non-infringement.
      </p>

      <h2 id="s12" className={docH2}>
        12. Indemnification
      </h2>
      <p className="mt-3.5">
        You agree to indemnify, defend, and hold harmless PVN Voice and its officers, directors,
        employees, agents, and affiliates from and against any and all claims, damages, obligations,
        losses, liabilities, costs, or debt, and expenses arising from your use of the Services or
        your violation of these Terms.
      </p>

      <h2 id="s13" className={docH2}>
        13. Changes to Terms
      </h2>
      <p className="mt-3.5">
        We may update these Terms from time to time. We will notify you of any changes by posting the
        new Terms on our website and updating the &quot;Last Updated&quot; date. Changes will become
        effective immediately upon posting, and your continued use of the Services after such changes
        constitutes your acceptance of the revised Terms.
      </p>

      <h2 id="s14" className={docH2}>
        14. Governing Law
      </h2>
      <p className="mt-3.5">
        These Terms shall be governed by and construed in accordance with the laws of the State of
        Florida, without regard to its conflict of law provisions. Any disputes arising under or in
        connection with these Terms of Service shall be adjudicated in the courts of St. Johns County,
        Florida.
      </p>

      <h2 id="s15" className={docH2}>
        15. Contact Information
      </h2>
      <p className="mt-3.5">If you have any questions about these Terms, please contact us:</p>
      <p className="mt-3.5">
        <strong className="font-semibold">Email:</strong>{' '}
        <a href="mailto:support@pvndialer.com" className="text-navy">
          support@pvndialer.com
        </a>
        <br />
        <strong className="font-semibold">Phone:</strong>{' '}
        <a href={PHONE_HREF} className="text-navy">
          {PHONE_DISPLAY}
        </a>
        <br />
        <strong className="font-semibold">Mail:</strong> PVN LLC, 2800 N 6th Street #796, Saint
        Augustine, FL 32084
      </p>
    </LegalDoc>
  );
}
