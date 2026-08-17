import React from 'react';
import LegalDoc, { DocSection, docH2, docList, docLi } from '../components/LegalDoc';
import { PHONE_DISPLAY, PHONE_HREF } from '../lib/pricing';

const contents: DocSection[] = [
  { id: 'e911', title: '911 and Emergency Calling' },
  { id: 'dependency', title: 'Service Dependency' },
  { id: 'advice', title: 'No Professional Advice' },
  { id: 'trademark', title: 'Trademark' },
  { id: 'regulatory', title: 'Regulatory Status' },
];

export default function Disclosures() {
  return (
    <LegalDoc
      metaTitle="PVN Voice — Disclosures"
      metaDescription="PVN LLC disclosures: 911 and emergency calling limitations, service dependency on internet connectivity, trademark notice, and regulatory status."
      eyebrow="Legal"
      heading="Disclosures"
      metaLine="PVN LLC · Effective Date: August 15, 2026"
      contents={contents}
      related={[
        { href: '/terms-of-service', label: 'Terms of Service' },
        { href: '/privacy-policy', label: 'Privacy Policy' },
        { href: '/compliance', label: 'Compliance Policies' },
      ]}
      reviewNote={
        <>
          This page is reviewed at least annually and upon any material change in applicable law. A
          copy is available on request at{' '}
          <a href={PHONE_HREF} className="text-navy">
            {PHONE_DISPLAY}
          </a>
          .
        </>
      }
    >
      <h2 id="e911" className={`${docH2} border-t-0 mt-0 pt-0`}>
        1. 911 and Emergency Calling
      </h2>
      <p className="mt-3.5">
        PVN LLC provides interconnected VoIP service. Emergency calling over VoIP works differently
        than calling 911 from a traditional landline, in ways that are important for every customer to
        understand before relying on it in an emergency:
      </p>
      <ul className={docList}>
        <li className={docLi}>
          911 service may not function, or may function differently, during a power outage or loss of
          internet connectivity at your location.
        </li>
        <li className={docLi}>
          The location information transmitted with a 911 call is based on the physical address you
          have registered with us. If you move your equipment or primarily use the service from a
          location other than your registered address, emergency responders may be dispatched to the
          wrong location unless you update your registered address first.
        </li>
        <li className={docLi}>
          911 calls placed over VoIP may not connect as quickly as calls placed over traditional
          landline service, and in some circumstances may not connect at all.
        </li>
        <li className={docLi}>
          You are responsible for keeping your registered service address current. Contact us
          immediately at{' '}
          <a href={PHONE_HREF} className="text-navy">
            {PHONE_DISPLAY}
          </a>{' '}
          if your service location changes.
        </li>
      </ul>
      <p className="mt-3.5">
        This section describes limitations that are inherent to interconnected VoIP service generally,
        consistent with FCC rules applicable to VoIP providers. It is not a substitute for reviewing
        your specific service agreement, and PVN LLC is available at the number above to answer
        questions about how 911 works on your account.
      </p>

      <h2 id="dependency" className={docH2}>
        2. Service Dependency on Internet Connectivity
      </h2>
      <p className="mt-3.5">
        Our Services depend on your internet connection. Call quality, reliability, and availability
        &mdash; including the ability to place emergency calls as described above &mdash; depend on
        your internet connection quality and bandwidth, your network configuration, your hardware,
        and, in some regions, third-party carrier services. We cannot guarantee uninterrupted service,
        perfect call quality under all network conditions, or 100% uptime.
      </p>

      <h2 id="advice" className={docH2}>
        3. No Professional Advice
      </h2>
      <p className="mt-3.5">
        PVN LLC provides telecommunications infrastructure and related services. We do not provide
        legal advice, tax advice, or compliance advice. Where our website or materials reference the
        TCPA, FCC rules, or other legal or regulatory requirements, that content is provided for
        general informational purposes and does not substitute for advice from your own counsel about
        your specific circumstances.
      </p>

      <h2 id="trademark" className={docH2}>
        4. Trademark
      </h2>
      <p className="mt-3.5">
        PVN Voice is a registered trademark of PVN LLC. Our cloud phone systems operate over your
        existing internet connection. Call quality may vary depending on your internet connection
        speed and quality. A stable internet connection is recommended for optimal performance.
      </p>

      <h2 id="regulatory" className={docH2}>
        5. Regulatory Status
      </h2>
      <p className="mt-3.5">
        PVN LLC is a licensed US carrier operating under its own operating company number (OCN). Our
        robocall mitigation program is certified in the FCC Robocall Mitigation Database. Our
        telemarketing compliance policies &mdash; including our Do-Not-Call, Do-Not-Originate,
        Reassigned Numbers Database, Opt-In &amp; Consent, Traceback Response, and Acceptable Use
        policies &mdash; are published in full on our{' '}
        <a href="/compliance" className="text-navy">
          Compliance
        </a>{' '}
        page.
      </p>
    </LegalDoc>
  );
}
