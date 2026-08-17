import React from 'react';
import LegalDoc, { DocSection, docH2, docList, docLi } from '../../components/LegalDoc';
import { PHONE_DISPLAY, PHONE_HREF } from '../../lib/pricing';
import { getPolicyMetaLine, relatedPolicies } from '../../lib/compliance-policies';

const HREF = '/compliance/consent';

const contents: DocSection[] = [
  { id: 'consent-standard', title: 'Consent Standard' },
  { id: 'lead-intake', title: 'Lead Intake Requirements' },
  { id: 'verification', title: 'Verification and Suppression' },
  { id: 'revocation', title: 'Revocation' },
  { id: 'disclosure', title: 'Disclosure on Calls' },
  { id: 'recordkeeping', title: 'Recordkeeping' },
];

export default function OptInConsentPolicy() {
  return (
    <LegalDoc
      metaTitle="PVN Voice — Opt-In & Consent Policy"
      metaDescription="PVN LLC's Opt-In & Consent policy: prior express written consent standards, lead intake requirements, consent verification, and revocation handling."
      eyebrow="Compliance"
      heading="Opt-In & Consent Policy"
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
      <h2 id="consent-standard" className={`${docH2} border-t-0 mt-0 pt-0`}>
        Consent Standard
      </h2>
      <p className="mt-3.5">
        PVN LLC places outbound calls only to consumers for whom the required level of consent exists
        for the dialing technology used. Calls placed to wireless numbers using an automatic
        telephone dialing system, an artificial or prerecorded voice, or where state
        &quot;mini-TCPA&quot; statutes apply, require prior express written consent (PEWC): a signed
        written agreement (including E-SIGN compliant electronic signature) that clearly authorizes
        the seller, by name, to deliver telemarketing calls or texts to a specified number, and that
        is not a condition of purchase.
      </p>

      <h2 id="lead-intake" className={docH2}>
        1. Lead Intake Requirements
      </h2>
      <p className="mt-3.5">No lead is loaded into any dialing campaign unless the record includes:</p>
      <ul className={docList}>
        <li className={docLi}>
          The full consent disclosure language displayed to the consumer at the point of opt-in;
        </li>
        <li className={docLi}>
          Date and timestamp of the opt-in, consumer IP address, and the URL or source where consent
          was captured;
        </li>
        <li className={docLi}>
          A lead-certification token (TrustedForm certificate, Jornaya LeadiD, or equivalent) where
          the lead was generated online; and
        </li>
        <li className={docLi}>Identification of the seller(s) authorized by the consent.</li>
      </ul>
      <p className="mt-3.5">
        Lead vendors and clients supplying data must contractually represent that consent meets these
        standards and must produce consent documentation for any record on demand.
      </p>

      <h2 id="verification" className={docH2}>
        2. Verification and Suppression
      </h2>
      <ul className={docList}>
        <li className={docLi}>
          Lead files are audited on intake: records missing consent documentation are rejected and are
          not dialed.
        </li>
        <li className={docLi}>
          All records are scrubbed per the Company&apos;s DNC, DNO, and RND policies before dialing.
        </li>
        <li className={docLi}>
          Consent applies only to the seller(s) named in the disclosure; data is not reused across
          sellers or offers outside the scope of the original consent.
        </li>
      </ul>

      <h2 id="revocation" className={docH2}>
        3. Revocation
      </h2>
      <ul className={docList}>
        <li className={docLi}>
          Consumers may revoke consent by any reasonable means, including verbally on a call, by
          reply text (e.g., STOP), email, or voicemail.
        </li>
        <li className={docLi}>
          Revocations are honored immediately where feasible and in all cases within ten (10)
          business days, are recorded on the internal DNC list, and are retained for a minimum of
          five (5) years.
        </li>
      </ul>

      <h2 id="disclosure" className={docH2}>
        4. Disclosure on Calls
      </h2>
      <p className="mt-3.5">
        At the outset of each call, agents identify themselves, the seller on whose behalf the call is
        placed, and the purpose of the call, and comply with call-recording disclosure requirements in
        two-party consent states.
      </p>

      <h2 id="recordkeeping" className={docH2}>
        5. Recordkeeping
      </h2>
      <p className="mt-3.5">
        Consent records, certification tokens, revocations, and intake audit logs are retained for a
        minimum of five (5) years and are producible within five (5) business days of a lawful
        request.
      </p>
    </LegalDoc>
  );
}
