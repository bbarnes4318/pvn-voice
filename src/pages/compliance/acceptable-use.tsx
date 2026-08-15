import React from 'react';
import PolicyLayout, { PolicySection } from '../../components/PolicyLayout';
import {
  FaBan,
  FaClipboardList,
  FaFileAlt,
  FaFileContract,
  FaFileSignature,
  FaFilter,
  FaIdBadge,
  FaNetworkWired,
  FaPowerOff,
} from 'react-icons/fa';

const sections: PolicySection[] = [
  { id: 'customer-warranties', title: '1. Customer Warranties' },
  { id: 'prohibited-traffic', title: '2. Prohibited Traffic' },
  { id: 'caller-id', title: '3. Caller ID Requirements' },
  { id: 'screening', title: '4. Screening and Suppression Obligations' },
  { id: 'evidence', title: '5. Evidence on Demand' },
  { id: 'network-controls', title: '6. Network Controls' },
  { id: 'suspension', title: '7. Suspension and Termination' },
  { id: 'recordkeeping', title: '8. Recordkeeping' },
];

export default function AcceptableUsePolicy() {
  return (
    <PolicyLayout
      metaTitle="Acceptable Use Policy - PVN Voice"
      metaDescription="PVN LLC's Acceptable Use Policy: customer warranties, prohibited traffic, caller ID requirements, screening and suppression obligations, evidence on demand, network controls, and suspension and termination for all originated traffic."
      heading="Acceptable Use Policy"
      currentHref="/compliance/acceptable-use"
      introId="overview"
      introHeading="Overview"
      introIcon={FaFileContract}
      introContent={
        <p>
          This policy governs all traffic originated through PVN LLC (&ldquo;the Company&rdquo;) by any customer, reseller, or downstream provider. Acceptance of service constitutes acceptance of this policy. It applies in addition to, and does not limit, the Company's Do-Not-Call, Do-Not-Originate, Reassigned Numbers Database, Opt-In &amp; Consent, and Traceback Response policies.
        </p>
      }
      sections={sections}
    >
      <h2 id="customer-warranties" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaFileSignature className="text-primary-600 mr-2 flex-shrink-0" /> 1. Customer Warranties
      </h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        Every customer warrants, on a continuing basis and with respect to every call originated:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          That it holds the level of consent required by law for the number dialed and the dialing technology used, including prior express written consent where required for wireless numbers;
        </li>
        <li className="text-gray-700">
          That the dialing list has been scrubbed against the National Do-Not-Call Registry and applicable state registries within the preceding 31 days;
        </li>
        <li className="text-gray-700">
          That the dialing list has been scrubbed against the customer's internal do-not-call list and against known TCPA litigator lists;
        </li>
        <li className="text-gray-700">
          That reassigned-number screening has been performed against the FCC Reassigned Numbers Database using the consent date as the query date;
        </li>
        <li className="text-gray-700">
          That every calling number presented is owned by the customer or used with the express authorization of the number's subscriber;
        </li>
        <li className="text-gray-700">
          That calls are placed only within permitted calling hours at the called party's location; and
        </li>
        <li className="text-gray-700">
          That the customer holds all licenses and registrations required for the traffic it originates.
        </li>
      </ul>

      <h2 id="prohibited-traffic" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaBan className="text-primary-600 mr-2 flex-shrink-0" /> 2. Prohibited Traffic
      </h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        The following are prohibited without exception and result in immediate termination:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">Calls placed without the consent required by law</li>
        <li className="text-gray-700">Caller ID spoofing with intent to defraud, cause harm, or wrongfully obtain anything of value</li>
        <li className="text-gray-700">Traffic pumping, access stimulation, or artificially inflated traffic</li>
        <li className="text-gray-700">Number rotation designed to evade carrier analytics (&ldquo;snowshoeing&rdquo;)</li>
        <li className="text-gray-700">Calls to emergency services, government inbound lines, or numbers appearing on industry Do-Not-Originate lists</li>
        <li className="text-gray-700">Impersonation of a government agency, financial institution, carrier, or any entity the customer is not authorized to represent</li>
        <li className="text-gray-700">Traffic originated on behalf of an undisclosed third party</li>
        <li className="text-gray-700">Calls to numbers on the National Do-Not-Call Registry absent a recognized exemption</li>
        <li className="text-gray-700">Any traffic prohibited by the TCPA, the Telemarketing Sales Rule, the Truth in Caller ID Act, or applicable state law</li>
      </ul>

      <h2 id="caller-id" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaIdBadge className="text-primary-600 mr-2 flex-shrink-0" /> 3. Caller ID Requirements
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          Every calling number presented must be a valid, allocated, answerable number.
        </li>
        <li className="text-gray-700">
          Return calls to any presented number must reach a live agent or a compliant voicemail identifying the seller and providing a do-not-call mechanism.
        </li>
        <li className="text-gray-700">
          Customers may not present a number they neither own nor are expressly authorized to use, and must produce that authorization on request.
        </li>
        <li className="text-gray-700">
          The Company rejects, at its session border controller, any call presenting a calling number outside the authorized inventory for that customer.
        </li>
      </ul>

      <h2 id="screening" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaFilter className="text-primary-600 mr-2 flex-shrink-0" /> 4. Screening and Suppression Obligations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Customers are responsible for screening their own dialing lists before traffic reaches the Company's network. Where the Company also operates a screening control at the network layer, that control is a second line of defense and does not relieve the customer of its own obligation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        Customers must:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          Honor any do-not-call request <strong>immediately, and in all cases within 24 hours</strong>;
        </li>
        <li className="text-gray-700">
          Maintain an internal do-not-call list and apply it as a suppression file on every campaign;
        </li>
        <li className="text-gray-700">
          Honor revocation of consent received by any reasonable means, including verbally on a call, by reply text, email, or voicemail;
        </li>
        <li className="text-gray-700">
          Suppress any number the Company notifies them of, immediately and across all campaigns; and
        </li>
        <li className="text-gray-700">
          Apply attempt limits and retry rules that prevent uncontrolled repeat dialing of any contact.
        </li>
      </ul>

      <h2 id="evidence" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaFileAlt className="text-primary-600 mr-2 flex-shrink-0" /> 5. Evidence on Demand
      </h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        Customers must produce, within 24 hours of a request by the Company:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          The consent record for any identified call, including the disclosure text presented, timestamp, consumer IP address, source URL or channel, and any lead-certification token;
        </li>
        <li className="text-gray-700">
          Evidence of Do-Not-Call, litigator, and reassigned-number scrubbing for the campaign; and
        </li>
        <li className="text-gray-700">
          Caller ID ownership or authorization documentation for any presented number.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Inability to produce these records within 24 hours is itself grounds for suspension, independent of whether the underlying call was lawful.
      </p>

      <h2 id="network-controls" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaNetworkWired className="text-primary-600 mr-2 flex-shrink-0" /> 6. Network Controls
      </h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        The Company operates the following controls on the call path, before traffic reaches any upstream carrier. These controls protect the Company's network and its carrier relationships; they do not substitute for the customer's own compliance obligations.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">Per-customer concurrency and calls-per-second limits</li>
        <li className="text-gray-700">Destination restriction to the North American Numbering Plan; N11, 976, 900 and designated high-risk NPAs are refused</li>
        <li className="text-gray-700">High-risk prefix blocking</li>
        <li className="text-gray-700">Calling number validation against authorized inventory</li>
        <li className="text-gray-700">Calling-hour enforcement based on the recipient's local time, derived from destination NPA-NXX</li>
        <li className="text-gray-700">Suppression and litigator screening, refusing matched calls before they leave the Company's network</li>
        <li className="text-gray-700">Per-number daily usage limits and area-code-matched number assignment</li>
        <li className="text-gray-700">Call-level logging of every attempt, including every refusal and its reason</li>
        <li className="text-gray-700">Emergency traffic suspension</li>
      </ul>

      <h2 id="suspension" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaPowerOff className="text-primary-600 mr-2 flex-shrink-0" /> 7. Suspension and Termination
      </h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        The Company may suspend or terminate service immediately, without prior notice, where it determines that:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">Traffic violates this policy or applicable law;</li>
        <li className="text-gray-700">A customer has failed to respond to a traceback or produce requested evidence within 24 hours;</li>
        <li className="text-gray-700">Traffic patterns indicate fraud, artificial inflation, or analytics evasion; or</li>
        <li className="text-gray-700">An upstream carrier or regulatory authority identifies the customer's traffic as non-compliant.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Suspension is a protective measure and is not a determination of liability. The Company preserves all records associated with suspended or terminated traffic.
      </p>

      <h2 id="recordkeeping" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaClipboardList className="text-primary-600 mr-2 flex-shrink-0" /> 8. Recordkeeping
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Call detail records, screening decisions, refusal reasons, customer warranties, evidence produced under Section 5, and suspension or termination actions are retained for a minimum of five (5) years.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Compliance decisions are written to a trigger-enforced append-only audit log; UPDATE, DELETE and TRUNCATE operations are blocked at the database level.
      </p>
    </PolicyLayout>
  );
}
