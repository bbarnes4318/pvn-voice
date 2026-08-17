import React from 'react';
import LegalDoc, { DocSection, docH2, docList, docLi } from '../../components/LegalDoc';
import { PHONE_DISPLAY, PHONE_HREF } from '../../lib/pricing';
import { getPolicyMetaLine, relatedPolicies } from '../../lib/compliance-policies';

const HREF = '/compliance/do-not-originate';

const contents: DocSection[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'screening', title: 'Do-Not-Originate Screening' },
  { id: 'caller-id', title: 'Caller ID Integrity' },
  { id: 'traffic', title: 'Traffic Practices' },
  { id: 'recordkeeping', title: 'Recordkeeping' },
];

export default function DoNotOriginatePolicy() {
  return (
    <LegalDoc
      metaTitle="PVN Voice — Do-Not-Originate (DNO) Policy"
      metaDescription="PVN LLC's Do-Not-Originate policy: screening of invalid and inbound-only numbers, caller ID integrity, CNAM registration, and STIR/SHAKEN traffic practices under the Truth in Caller ID Act."
      eyebrow="Compliance"
      heading="Do-Not-Originate (DNO) Policy"
      metaLine={getPolicyMetaLine(HREF)}
      backHref="/compliance"
      backLabel="← All Compliance Policies"
      contents={contents}
      dncCallout
      activeNav="/compliance"
      relatedHeading="Related Policies"
      related={relatedPolicies(HREF)}
      reviewNote={
        <>
          This policy is reviewed at least annually and upon any material change in applicable law. A
          copy of this policy is available on request at{' '}
          <a href={PHONE_HREF} className="text-navy">
            {PHONE_DISPLAY}
          </a>
          .
        </>
      }
    >
      <h2 id="overview" className={`${docH2} border-t-0 mt-0 pt-0`}>
        Overview
      </h2>
      <p className="mt-3.5">
        This policy ensures that PVN LLC never originates calls to, or displays as caller ID,
        telephone numbers that should not appear in originating traffic, and that all outbound caller
        ID is accurate, authorized, and lawful under the Truth in Caller ID Act and FCC rules.
      </p>

      <h2 id="screening" className={docH2}>
        1. Do-Not-Originate Screening
      </h2>
      <ul className={docList}>
        <li className={docLi}>
          Prior to loading, all dial lists are screened to remove invalid, unallocated, and
          unassigned numbers, inbound-only numbers, and numbers appearing on industry
          Do-Not-Originate lists (including government, emergency, and financial-institution inbound
          lines).
        </li>
        <li className={docLi}>
          Any number identified as DNO is permanently suppressed from all campaigns.
        </li>
      </ul>

      <h2 id="caller-id" className={docH2}>
        2. Caller ID Integrity
      </h2>
      <ul className={docList}>
        <li className={docLi}>
          The Company only transmits caller ID numbers that it owns or is expressly authorized by the
          number&apos;s subscriber to use. Caller ID spoofing with intent to defraud, cause harm, or
          wrongfully obtain anything of value is prohibited and grounds for immediate termination.
        </li>
        <li className={docLi}>
          Every outbound caller ID is a valid, answerable number. Return calls to any outbound caller
          ID reach a live agent or a compliant voicemail identifying the Company/seller and providing
          a do-not-call mechanism.
        </li>
        <li className={docLi}>
          CNAM is registered for every outbound DID and accurately identifies the seller on whose
          behalf the call is placed, consistent with the identification agents provide on the call.
        </li>
        <li className={docLi}>
          Outbound DIDs are registered with the Free Caller Registry and monitored for erroneous spam
          labeling; mislabeled numbers are remediated or retired.
        </li>
      </ul>

      <h2 id="traffic" className={docH2}>
        3. Traffic Practices
      </h2>
      <ul className={docList}>
        <li className={docLi}>
          Outbound traffic is originated only through authorized carriers with STIR/SHAKEN
          attestation. The Company does not engage in number rotation practices designed to evade
          carrier analytics (&quot;snowshoeing&quot;).
        </li>
        <li className={docLi}>
          Caller ID assignments per campaign are documented, and the inventory of DIDs in use is
          reconciled monthly.
        </li>
      </ul>

      <h2 id="recordkeeping" className={docH2}>
        4. Recordkeeping
      </h2>
      <p className="mt-3.5">
        DNO suppression logs, DID ownership/authorization records, and CNAM registration records are
        retained for a minimum of five (5) years.
      </p>
    </LegalDoc>
  );
}
