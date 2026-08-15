import React from 'react';
import PolicyLayout, { PolicySection } from '../../components/PolicyLayout';
import { FaClipboardList, FaFingerprint, FaIdBadge, FaRandom, FaShieldAlt } from 'react-icons/fa';

const sections: PolicySection[] = [
  { id: 'screening', title: '1. Do-Not-Originate Screening' },
  { id: 'caller-id', title: '2. Caller ID Integrity' },
  { id: 'traffic-practices', title: '3. Traffic Practices' },
  { id: 'recordkeeping', title: '4. Recordkeeping' },
];

export default function DoNotOriginatePolicy() {
  return (
    <PolicyLayout
      metaTitle="Do-Not-Originate (DNO) Policy - PVN Voice"
      metaDescription="PVN LLC's Do-Not-Originate policy: screening of invalid, unallocated, and inbound-only numbers, caller ID integrity under the Truth in Caller ID Act, CNAM registration, and STIR/SHAKEN traffic practices."
      heading="Do-Not-Originate (DNO) Policy"
      currentHref="/compliance/do-not-originate"
      introId="overview"
      introHeading="Overview"
      introIcon={FaShieldAlt}
      introContent={
        <p>
          This policy ensures that PVN LLC never originates calls to, or displays as caller ID, telephone numbers that should not appear in originating traffic, and that all outbound caller ID is accurate, authorized, and lawful under the Truth in Caller ID Act and FCC rules.
        </p>
      }
      sections={sections}
    >
      <h2 id="screening" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaFingerprint className="text-navy-500 mr-2 flex-shrink-0" /> 1. Do-Not-Originate Screening
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          Prior to loading, all dial lists are screened to remove <strong>invalid, unallocated, and unassigned numbers</strong>, inbound-only numbers, and numbers appearing on industry Do-Not-Originate lists (including government, emergency, and financial-institution inbound lines).
        </li>
        <li className="text-gray-700">
          Any number identified as DNO is permanently suppressed from all campaigns.
        </li>
      </ul>

      <h2 id="caller-id" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaIdBadge className="text-navy-500 mr-2 flex-shrink-0" /> 2. Caller ID Integrity
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          <strong>The Company only transmits caller ID numbers that it owns or is expressly authorized by the number's subscriber to use.</strong> Caller ID spoofing with intent to defraud, cause harm, or wrongfully obtain anything of value is prohibited and grounds for immediate termination.
        </li>
        <li className="text-gray-700">
          Every outbound caller ID is a valid, answerable number. Return calls to any outbound caller ID reach a live agent or a compliant voicemail identifying the Company/seller and providing a do-not-call mechanism.
        </li>
        <li className="text-gray-700">
          CNAM is registered for every outbound DID and accurately identifies the seller on whose behalf the call is placed, consistent with the identification agents provide on the call.
        </li>
        <li className="text-gray-700">
          Outbound DIDs are registered with the Free Caller Registry and monitored for erroneous spam labeling; mislabeled numbers are remediated or retired.
        </li>
      </ul>

      <h2 id="traffic-practices" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaRandom className="text-navy-500 mr-2 flex-shrink-0" /> 3. Traffic Practices
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          Outbound traffic is originated only through authorized carriers with STIR/SHAKEN attestation. The Company does not engage in number rotation practices designed to evade carrier analytics ("snowshoeing").
        </li>
        <li className="text-gray-700">
          Caller ID assignments per campaign are documented, and the inventory of DIDs in use is reconciled monthly.
        </li>
      </ul>

      <h2 id="recordkeeping" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaClipboardList className="text-navy-500 mr-2 flex-shrink-0" /> 4. Recordkeeping
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        DNO suppression logs, DID ownership/authorization records, and CNAM registration records are retained for a minimum of five (5) years.
      </p>
    </PolicyLayout>
  );
}
