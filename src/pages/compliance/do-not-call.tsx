import React from 'react';
import PolicyLayout, { PolicySection } from '../../components/PolicyLayout';
import { FaBan, FaClipboardList, FaFilter, FaListAlt, FaPhoneSlash, FaUserGraduate } from 'react-icons/fa';

const sections: PolicySection[] = [
  { id: 'national-registry', title: '1. National Do-Not-Call Registry' },
  { id: 'internal-list', title: '2. Internal Do-Not-Call List' },
  { id: 'additional-suppression', title: '3. Additional Suppression' },
  { id: 'training', title: '4. Agent Training and Enforcement' },
  { id: 'recordkeeping', title: '5. Recordkeeping' },
];

export default function DoNotCallPolicy() {
  return (
    <PolicyLayout
      metaTitle="Do-Not-Call (DNC) Policy - PVN Voice"
      metaDescription="PVN LLC's written Do-Not-Call policy: National and state DNC registry scrubbing, internal do-not-call list, calling windows, agent training, and recordkeeping under the TCPA and FTC Telemarketing Sales Rule."
      heading="Do-Not-Call (DNC) Policy"
      currentHref="/compliance/do-not-call"
      introId="overview"
      introHeading="Overview"
      introIcon={FaPhoneSlash}
      introContent={
        <p>
          PVN LLC ("the Company") conducts and supports outbound calling in compliance with the Telephone Consumer Protection Act (TCPA), 47 U.S.C. § 227, the FCC's implementing rules at 47 C.F.R. § 64.1200, the FTC's Telemarketing Sales Rule (TSR), 16 C.F.R. Part 310, and applicable state telemarketing laws. This policy applies to all outbound calls placed by the Company, its agents, and its representatives, on its own behalf or on behalf of any seller.
        </p>
      }
      sections={sections}
    >
      <h2 id="national-registry" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaBan className="text-navy-500 mr-2 flex-shrink-0" /> 1. National Do-Not-Call Registry
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          The Company subscribes to the National Do-Not-Call Registry through its Subscription Account Number (SAN) for all area codes it dials.
        </li>
        <li className="text-gray-700">
          All calling lists are scrubbed against the National DNC Registry <strong>no less frequently than every 31 days</strong> before dialing. No number appearing on the Registry is dialed unless a recognized exemption applies (prior express written consent or an established business relationship as defined by law).
        </li>
        <li className="text-gray-700">
          Applicable state Do-Not-Call registries are scrubbed on the same cadence for all states dialed.
        </li>
      </ul>

      <h2 id="internal-list" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaListAlt className="text-navy-500 mr-2 flex-shrink-0" /> 2. Internal Do-Not-Call List
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          Any consumer who requests not to be called is added to the Company's internal DNC list <strong>immediately, and in all cases within 24 hours</strong> of the request.
        </li>
        <li className="text-gray-700">
          Internal DNC requests are honored regardless of any consent or business relationship, are entity-specific and campaign-wide, and are retained for a <strong>minimum of five (5) years</strong>.
        </li>
        <li className="text-gray-700">
          The internal DNC list is applied as a suppression file on every campaign prior to dialing, without exception.
        </li>
      </ul>

      <h2 id="additional-suppression" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaFilter className="text-navy-500 mr-2 flex-shrink-0" /> 3. Additional Suppression
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          Calling lists are scrubbed against known TCPA litigator databases via a third-party suppression API prior to every dialing session.
        </li>
        <li className="text-gray-700">
          Wireless numbers are identified and dialed only where the required level of consent exists for the dialing technology used.
        </li>
        <li className="text-gray-700">
          Calls are placed only between 8:00 a.m. and 9:00 p.m. local time at the called party's location, or within narrower windows where state law requires.
        </li>
      </ul>

      <h2 id="training" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaUserGraduate className="text-navy-500 mr-2 flex-shrink-0" /> 4. Agent Training and Enforcement
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          All agents are trained on this policy before placing any calls and at least annually thereafter. Training records are maintained.
        </li>
        <li className="text-gray-700">
          Agents must honor any do-not-call request on the call in which it is made, confirm it to the consumer, and record it in the dialer disposition immediately.
        </li>
        <li className="text-gray-700">
          Violations of this policy by any agent or vendor result in corrective action up to and including termination of the relationship.
        </li>
      </ul>

      <h2 id="recordkeeping" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaClipboardList className="text-navy-500 mr-2 flex-shrink-0" /> 5. Recordkeeping
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Company retains DNC scrub logs, suppression files, SAN documentation, consent records, and internal DNC entries for a minimum of five (5) years.
      </p>
    </PolicyLayout>
  );
}
