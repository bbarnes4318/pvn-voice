import React from 'react';
import PolicyLayout, { PolicySection } from '../../components/PolicyLayout';
import { FaClipboardList, FaDatabase, FaSearch, FaSyncAlt } from 'react-icons/fa';

const sections: PolicySection[] = [
  { id: 'query-process', title: '1. RND Query Process' },
  { id: 'cadence', title: '2. Cadence' },
  { id: 'remediation', title: '3. Remediation and Recordkeeping' },
];

export default function ReassignedNumbersPolicy() {
  return (
    <PolicyLayout
      metaTitle="Reassigned Numbers Database (RND) Policy - PVN Voice"
      metaDescription="PVN LLC's Reassigned Numbers Database policy: how we query the FCC RND before dialing, suppress reassigned numbers, re-query aged data, and preserve the FCC safe harbor under 47 C.F.R. § 64.1200(m)."
      heading="Reassigned Numbers Database (RND) Policy"
      currentHref="/compliance/reassigned-numbers"
      introId="overview"
      introHeading="Overview"
      introIcon={FaDatabase}
      introContent={
        <p>
          Telephone numbers are frequently disconnected and reassigned to new subscribers. Consent obtained from a prior subscriber does not extend to the new holder of a reassigned number. PVN LLC uses the FCC's Reassigned Numbers Database (RND) to avoid calling reassigned numbers and to preserve the FCC's safe harbor under 47 C.F.R. § 64.1200(m).
        </p>
      }
      sections={sections}
    >
      <h2 id="query-process" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaSearch className="text-primary-600 mr-2 flex-shrink-0" /> 1. RND Query Process
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          The Company maintains an active subscription to the FCC Reassigned Numbers Database (reassigned.us).
        </li>
        <li className="text-gray-700">
          Before any number is dialed in reliance on consumer consent, the number is queried against the RND using the <strong>date consent was obtained (or the date of last verified contact)</strong> as the query date.
        </li>
        <li className="text-gray-700">
          Numbers returning <strong>"Yes" (permanently disconnected on or after the consent date)</strong> are suppressed from all campaigns and flagged for consent re-verification.
        </li>
        <li className="text-gray-700">
          Numbers returning "No" are eligible to dial; the query result is logged to preserve the safe harbor. Numbers returning "No Data" are treated conservatively and routed for review.
        </li>
      </ul>

      <h2 id="cadence" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaSyncAlt className="text-primary-600 mr-2 flex-shrink-0" /> 2. Cadence
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          New lead files are queried against the RND before first dial.
        </li>
        <li className="text-gray-700">
          Aged data (numbers where consent or last contact is more than 90 days old) is re-queried before being re-loaded into any campaign.
        </li>
      </ul>

      <h2 id="remediation" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaClipboardList className="text-primary-600 mr-2 flex-shrink-0" /> 3. Remediation and Recordkeeping
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the Company learns through any channel (RND, carrier response, or the called party) that a number has been reassigned, the number is suppressed immediately and the associated consent record is retired. RND query submissions, response files, timestamps, and suppression actions are retained for a minimum of five (5) years to document safe-harbor compliance.
      </p>
    </PolicyLayout>
  );
}
