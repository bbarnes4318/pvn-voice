import React from 'react';
import PolicyLayout, { PolicySection } from '../../components/PolicyLayout';
import { FaBalanceScale, FaClipboardList, FaDatabase, FaFilter, FaSearch, FaSyncAlt } from 'react-icons/fa';

const sections: PolicySection[] = [
  { id: 'allocation', title: '1. Allocation of Responsibility' },
  { id: 'query-requirements', title: '2. Query Requirements' },
  { id: 'cadence', title: '3. Cadence' },
  { id: 'company-screening', title: '4. Company Screening' },
  { id: 'remediation', title: '5. Remediation and Recordkeeping' },
];

export default function ReassignedNumbersPolicy() {
  return (
    <PolicyLayout
      metaTitle="Reassigned Numbers Database (RND) Policy - PVN Voice"
      metaDescription="PVN LLC's Reassigned Numbers Database policy: how RND querying responsibility is allocated between the Company and its customers, the query standard applied, network-layer screening, and the FCC safe harbor under 47 C.F.R. § 64.1200(m)."
      heading="Reassigned Numbers Database (RND) Policy"
      currentHref="/compliance/reassigned-numbers"
      introId="overview"
      introHeading="Overview"
      introIcon={FaDatabase}
      introContent={
        <>
          <p className="mb-3">
            Telephone numbers are frequently disconnected and reassigned to new subscribers. Consent obtained from a prior subscriber does not extend to the new holder of a reassigned number. The FCC's Reassigned Numbers Database (RND) exists to prevent calls to reassigned numbers and to provide a safe harbor under 47 C.F.R. § 64.1200(m).
          </p>
          <p>
            An RND query is performed using the date consent was obtained as the query date. The party holding the consent record is therefore the only party able to query the database meaningfully. This policy allocates the obligation accordingly.
          </p>
        </>
      }
      sections={sections}
    >
      <h2 id="allocation" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaBalanceScale className="text-primary-600 mr-2 flex-shrink-0" /> 1. Allocation of Responsibility
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Where PVN LLC holds the consent record &mdash; for campaigns operated by the Company on its own behalf &mdash; the Company performs RND querying directly in accordance with Sections 2 and 3.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Where a customer or lead source holds the consent record &mdash; for wholesale traffic and customer-originated campaigns &mdash; the customer is contractually required to perform RND querying before dialing, using the consent date as the query date, and to produce query submissions and response files on demand within 24 hours.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Company does not represent that it independently queries the RND for numbers whose consent records it does not hold, because a query performed without the correct consent date does not produce the safe harbor and would misstate the protection in place.
      </p>

      <h2 id="query-requirements" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaSearch className="text-primary-600 mr-2 flex-shrink-0" /> 2. Query Requirements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        Whether performed by the Company or by a customer, RND querying must meet the following standard:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          The query is submitted to the FCC Reassigned Numbers Database at reassigned.us before the number is dialed in reliance on consent.
        </li>
        <li className="text-gray-700">
          The query date is the date consent was obtained, or the date of last verified contact with the consenting party.
        </li>
        <li className="text-gray-700">
          A <strong>&ldquo;Yes&rdquo; response &mdash; permanently disconnected on or after the consent date</strong> &mdash; requires the number to be suppressed from all campaigns and flagged for consent re-verification.
        </li>
        <li className="text-gray-700">
          A &ldquo;No&rdquo; response permits dialing; the query result is logged to preserve the safe harbor.
        </li>
        <li className="text-gray-700">
          A &ldquo;No Data&rdquo; response is treated conservatively and routed for manual review rather than dialed on the assumption of eligibility.
        </li>
      </ul>

      <h2 id="cadence" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaSyncAlt className="text-primary-600 mr-2 flex-shrink-0" /> 3. Cadence
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          New lead files are queried before first dial.
        </li>
        <li className="text-gray-700">
          Records where consent or last verified contact is more than 90 days old are re-queried before being reloaded into any campaign.
        </li>
      </ul>

      <h2 id="company-screening" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaFilter className="text-primary-600 mr-2 flex-shrink-0" /> 4. Company Screening
      </h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        Independent of RND querying, the Company applies the following at the network layer to reduce reassignment and invalid-number exposure:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          Invalid, unallocated and unassigned destinations are refused at the session border controller before the call leaves the Company's network.
        </li>
        <li className="text-gray-700">
          Numbers identified as disconnected through carrier response codes are recorded and reported to the responsible customer for suppression.
        </li>
        <li className="text-gray-700">
          Any number the Company learns has been reassigned &mdash; through carrier response, a called party, or any other channel &mdash; is suppressed at the Company's layer immediately and passed to the responsible customer for suppression at source.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These controls reduce real-world exposure. They do not create the § 64.1200(m) safe harbor, which arises only from a correctly dated RND query.
      </p>

      <h2 id="remediation" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaClipboardList className="text-primary-600 mr-2 flex-shrink-0" /> 5. Remediation and Recordkeeping
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Where the Company learns that a number has been reassigned, the number is suppressed immediately and the associated consent record is retired.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        RND query submissions, response files, timestamps, and suppression actions &mdash; whether performed by the Company or produced by a customer on demand &mdash; are retained for a minimum of five (5) years to document safe-harbor compliance.
      </p>
    </PolicyLayout>
  );
}
