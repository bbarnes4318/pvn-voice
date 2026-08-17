import React from 'react';
import PolicyLayout, { PolicySection } from '../../components/PolicyLayout';
import {
  FaAddressCard,
  FaClipboardList,
  FaExclamationTriangle,
  FaFileAlt,
  FaSearchLocation,
  FaStopwatch,
  FaUserShield,
} from 'react-icons/fa';

const sections: PolicySection[] = [
  { id: 'designated-contact', title: '1. Designated Contact' },
  { id: 'response-timeline', title: '2. Response Timeline' },
  { id: 'records-produced', title: '3. Records Produced' },
  { id: 'customer-obligations', title: '4. Customer Obligations' },
  { id: 'suspension', title: '5. Suspension and Escalation' },
  { id: 'recordkeeping', title: '6. Recordkeeping' },
];

export default function TracebackResponsePolicy() {
  return (
    <PolicyLayout
      metaTitle="Traceback Response Policy - PVN Voice"
      metaDescription="PVN LLC's Traceback Response Policy: our designated traceback contact under Robocall Mitigation Database certification RMD0027386, 24-hour response timelines, the call records produced, customer obligations, and suspension and escalation triggers."
      heading="Traceback Response Policy"
      currentHref="/compliance/traceback"
      introId="overview"
      introHeading="Overview"
      introIcon={FaSearchLocation}
      introContent={
        <>
          <p className="mb-3">
            PVN LLC (&ldquo;the Company&rdquo;) participates fully and promptly in industry traceback efforts, including those conducted by the Industry Traceback Group (ITG) under the TRACED Act, and responds to traceback and call-origination inquiries from upstream carriers, downstream providers, and regulatory authorities.
          </p>
          <p>
            The Company's network is engineered so that a complete record exists for every call attempt &mdash; including attempts the Company's own controls refused. This policy sets out how the Company responds when a traceback or origination inquiry is received.
          </p>
        </>
      }
      sections={sections}
    >
      <h2 id="designated-contact" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaAddressCard className="text-primary-600 mr-2 flex-shrink-0" /> 1. Designated Contact
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Company maintains a designated point of contact for traceback and call-origination inquiries, published in the Robocall Mitigation Database under certification RMD0027386.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          <strong>Compliance Officer:</strong> Joel Vasquez &mdash; joel@getlifeassurance.com
        </li>
        <li className="text-gray-700">
          <strong>Escalation:</strong> James Kelly &mdash; jimmy@getlifeassurance.com &mdash; (904) 512-8487
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Contact details are reviewed at least annually and updated in the Robocall Mitigation Database upon any change.
      </p>

      <h2 id="response-timeline" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaStopwatch className="text-primary-600 mr-2 flex-shrink-0" /> 2. Response Timeline
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          Traceback requests are acknowledged <strong>within 24 hours of receipt</strong>, including weekends and holidays.
        </li>
        <li className="text-gray-700">
          A substantive response identifying the immediate upstream source of the identified call is provided within 24 hours of receipt, or within any shorter period specified by the requesting party or by law.
        </li>
        <li className="text-gray-700">
          Where the Company is the originating provider, the response identifies the originating customer and the basis on which the traffic was accepted.
        </li>
        <li className="text-gray-700">
          Where the Company is an intermediate provider, the response identifies the provider from which the call was received.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Company does not require a subpoena, legal process, or contractual formality as a precondition to responding to a lawful traceback request.
      </p>

      <h2 id="records-produced" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaFileAlt className="text-primary-600 mr-2 flex-shrink-0" /> 3. Records Produced
      </h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        For any call identified by SIP Call-ID and timestamp, the Company produces from call-level records:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">Source IP address of the originating session</li>
        <li className="text-gray-700">SIP Call-ID</li>
        <li className="text-gray-700">Call start, answer, and end timestamps</li>
        <li className="text-gray-700">Originating customer and campaign attribution</li>
        <li className="text-gray-700">Calling number (caller ID) presented and the DID from which it was drawn</li>
        <li className="text-gray-700">Called number</li>
        <li className="text-gray-700">Call disposition, duration, and hangup cause</li>
        <li className="text-gray-700">Routing path, including the carrier or gateway used</li>
        <li className="text-gray-700">Where the call was refused by the Company's own controls, the rejection reason</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Source IP and SIP Call-ID are captured before any compliance or routing check can reject the call, so a complete record exists even for call attempts the Company blocked. Compliance decisions are written to a trigger-enforced append-only audit log; UPDATE, DELETE and TRUNCATE operations are blocked at the database level, so records cannot be altered after the fact.
      </p>

      <h2 id="customer-obligations" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaUserShield className="text-primary-600 mr-2 flex-shrink-0" /> 4. Customer Obligations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        Every customer originating traffic through the Company is contractually required to:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          Respond to a traceback inquiry forwarded by the Company within 24 hours;
        </li>
        <li className="text-gray-700">
          Identify the source of the called number and the campaign under which it was dialed;
        </li>
        <li className="text-gray-700">
          Produce the consent record supporting the call, including the consent disclosure text, timestamp, source URL or channel, and any lead-certification token; and
        </li>
        <li className="text-gray-700">
          Identify their own upstream source where the customer is itself an intermediate provider.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These obligations are conditions of service and are set out in the Company's Acceptable Use Policy.
      </p>

      <h2 id="suspension" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaExclamationTriangle className="text-primary-600 mr-2 flex-shrink-0" /> 5. Suspension and Escalation
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          Failure by a customer to respond to a traceback within 24 hours results in <strong>immediate suspension of that customer's trunk</strong> pending response.
        </li>
        <li className="text-gray-700">
          Failure to produce a consent record for an identified call results in suspension and review of all traffic from that customer.
        </li>
        <li className="text-gray-700">
          Evidence of unlawful traffic results in immediate and permanent termination of service and preservation of all associated records.
        </li>
        <li className="text-gray-700">
          Where a traceback identifies a pattern rather than a single call, the Company suspends the affected campaign or customer pending investigation rather than awaiting a second inquiry.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Company will notify the requesting party of any suspension or termination action taken as a result of a traceback.
      </p>

      <h2 id="recordkeeping" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaClipboardList className="text-primary-600 mr-2 flex-shrink-0" /> 6. Recordkeeping
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Traceback inquiries, the Company's responses, supporting call records, customer responses, and any suspension or termination action taken are retained for a minimum of five (5) years.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Call-level records are retained in a synchronous, append-only system of record written before the call proceeds, so the record of a call exists independently of the call's outcome.
      </p>
    </PolicyLayout>
  );
}
