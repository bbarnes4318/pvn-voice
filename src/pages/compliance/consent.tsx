import React from 'react';
import PolicyLayout, { PolicySection } from '../../components/PolicyLayout';
import { FaBullhorn, FaCheckCircle, FaClipboardList, FaFileSignature, FaTimesCircle, FaUserCheck } from 'react-icons/fa';

const sections: PolicySection[] = [
  { id: 'lead-intake', title: '1. Lead Intake Requirements' },
  { id: 'verification', title: '2. Verification and Suppression' },
  { id: 'revocation', title: '3. Revocation' },
  { id: 'disclosure', title: '4. Disclosure on Calls' },
  { id: 'recordkeeping', title: '5. Recordkeeping' },
];

export default function OptInConsentPolicy() {
  return (
    <PolicyLayout
      metaTitle="Opt-In & Consent Policy - PVN Voice"
      metaDescription="PVN LLC's Opt-In & Consent Policy: prior express written consent standards, lead intake and certification requirements, consent verification, revocation handling, and recordkeeping under the TCPA."
      heading="Opt-In & Consent Policy"
      currentHref="/compliance/consent"
      introId="consent-standard"
      introHeading="Consent Standard"
      introIcon={FaFileSignature}
      introContent={
        <p>
          PVN LLC places outbound calls only to consumers for whom the <strong>required level of consent exists for the dialing technology used</strong>. Calls placed to wireless numbers using an automatic telephone dialing system, an artificial or prerecorded voice, or where state "mini-TCPA" statutes apply, require <strong>prior express written consent (PEWC)</strong>: a signed written agreement (including E-SIGN compliant electronic signature) that clearly authorizes the seller, by name, to deliver telemarketing calls or texts to a specified number, and that is not a condition of purchase.
        </p>
      }
      sections={sections}
    >
      <h2 id="lead-intake" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaUserCheck className="text-primary-600 mr-2 flex-shrink-0" /> 1. Lead Intake Requirements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        No lead is loaded into any dialing campaign unless the record includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          The full consent disclosure language displayed to the consumer at the point of opt-in;
        </li>
        <li className="text-gray-700">
          Date and timestamp of the opt-in, consumer IP address, and the URL or source where consent was captured;
        </li>
        <li className="text-gray-700">
          A lead-certification token (TrustedForm certificate, Jornaya LeadiD, or equivalent) where the lead was generated online; and
        </li>
        <li className="text-gray-700">
          Identification of the seller(s) authorized by the consent.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Lead vendors and clients supplying data must contractually represent that consent meets these standards and must produce consent documentation for any record on demand.
      </p>

      <h2 id="verification" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaCheckCircle className="text-primary-600 mr-2 flex-shrink-0" /> 2. Verification and Suppression
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          Lead files are audited on intake: records missing consent documentation are rejected and are not dialed.
        </li>
        <li className="text-gray-700">
          All records are scrubbed per the Company's DNC, DNO, and RND policies before dialing.
        </li>
        <li className="text-gray-700">
          Consent applies only to the seller(s) named in the disclosure; data is not reused across sellers or offers outside the scope of the original consent.
        </li>
      </ul>

      <h2 id="revocation" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaTimesCircle className="text-primary-600 mr-2 flex-shrink-0" /> 3. Revocation
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-700">
          Consumers may revoke consent by <strong>any reasonable means</strong>, including verbally on a call, by reply text (e.g., STOP), email, or voicemail.
        </li>
        <li className="text-gray-700">
          Revocations are honored <strong>immediately where feasible and in all cases within ten (10) business days</strong>, are recorded on the internal DNC list, and are retained for a minimum of five (5) years.
        </li>
      </ul>

      <h2 id="disclosure" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaBullhorn className="text-primary-600 mr-2 flex-shrink-0" /> 4. Disclosure on Calls
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        At the outset of each call, agents identify themselves, the seller on whose behalf the call is placed, and the purpose of the call, and comply with call-recording disclosure requirements in two-party consent states.
      </p>

      <h2 id="recordkeeping" className="flex items-center text-xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        <FaClipboardList className="text-primary-600 mr-2 flex-shrink-0" /> 5. Recordkeeping
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consent records, certification tokens, revocations, and intake audit logs are retained for a minimum of five (5) years and are producible within five (5) business days of a lawful request.
      </p>
    </PolicyLayout>
  );
}
