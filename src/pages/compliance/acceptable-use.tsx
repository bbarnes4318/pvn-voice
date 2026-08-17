import React from 'react';
import LegalDoc, { DocSection, docH2, docList, docLi } from '../../components/LegalDoc';
import { PHONE_DISPLAY, PHONE_HREF } from '../../lib/pricing';
import { getPolicyMetaLine, relatedPolicies } from '../../lib/compliance-policies';

const HREF = '/compliance/acceptable-use';

const contents: DocSection[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'warranties', title: 'Customer Warranties' },
  { id: 'prohibited', title: 'Prohibited Traffic' },
  { id: 'caller-id', title: 'Caller ID Requirements' },
  { id: 'screening-obligations', title: 'Screening & Suppression Obligations' },
  { id: 'evidence', title: 'Evidence on Demand' },
  { id: 'network-controls', title: 'Network Controls' },
  { id: 'suspension', title: 'Suspension and Termination' },
  { id: 'recordkeeping', title: 'Recordkeeping' },
];

const PROHIBITED: string[] = [
  'Calls placed without the consent required by law',
  'Caller ID spoofing with intent to defraud, cause harm, or wrongfully obtain anything of value',
  'Traffic pumping, access stimulation, or artificially inflated traffic',
  'Number rotation designed to evade carrier analytics ("snowshoeing")',
  'Calls to emergency services, government inbound lines, or numbers appearing on industry Do-Not-Originate lists',
  'Impersonation of a government agency, financial institution, carrier, or any entity the customer is not authorized to represent',
  'Traffic originated on behalf of an undisclosed third party',
  'Calls to numbers on the National Do-Not-Call Registry absent a recognized exemption',
  'Any traffic prohibited by the TCPA, the Telemarketing Sales Rule, the Truth in Caller ID Act, or applicable state law',
];

const NETWORK_CONTROLS: string[] = [
  'Per-customer concurrency and calls-per-second limits',
  'Destination restriction to the North American Numbering Plan; N11, 976, 900 and designated high-risk NPAs are refused',
  'High-risk prefix blocking',
  'Calling number validation against authorized inventory',
  "Calling-hour enforcement based on the recipient's local time, derived from destination NPA-NXX",
  "Suppression and litigator screening, refusing matched calls before they leave the Company's network",
  'Per-number daily usage limits and area-code-matched number assignment',
  'Call-level logging of every attempt, including every refusal and its reason',
  'Emergency traffic suspension',
];

export default function AcceptableUsePolicy() {
  return (
    <LegalDoc
      metaTitle="PVN Voice — Acceptable Use Policy"
      metaDescription="PVN LLC's Acceptable Use Policy: customer warranties, prohibited traffic, caller ID requirements, evidence-on-demand obligations, and the network controls applied to all originated traffic."
      eyebrow="Compliance"
      heading="Acceptable Use Policy"
      metaLine={getPolicyMetaLine(HREF)}
      backHref="/compliance"
      backLabel="← All Compliance Policies"
      contents={contents}
      contentsColumns
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
        This policy governs all traffic originated through PVN LLC (&quot;the Company&quot;) by any
        customer, reseller, or downstream provider. Acceptance of service constitutes acceptance of
        this policy. It applies in addition to, and does not limit, the Company&apos;s Do-Not-Call,
        Do-Not-Originate, Reassigned Numbers Database, Opt-In &amp; Consent, and Traceback Response
        policies.
      </p>

      <h2 id="warranties" className={docH2}>
        1. Customer Warranties
      </h2>
      <p className="mt-3.5">
        Every customer warrants, on a continuing basis and with respect to every call originated:
      </p>
      <ul className={docList}>
        <li className={docLi}>
          That it holds the level of consent required by law for the number dialed and the dialing
          technology used, including prior express written consent where required for wireless
          numbers;
        </li>
        <li className={docLi}>
          That the dialing list has been scrubbed against the National Do-Not-Call Registry and
          applicable state registries within the preceding 31 days;
        </li>
        <li className={docLi}>
          That the dialing list has been scrubbed against the customer&apos;s internal do-not-call
          list and against known TCPA litigator lists;
        </li>
        <li className={docLi}>
          That reassigned-number screening has been performed against the FCC Reassigned Numbers
          Database using the consent date as the query date;
        </li>
        <li className={docLi}>
          That every calling number presented is owned by the customer or used with the express
          authorization of the number&apos;s subscriber;
        </li>
        <li className={docLi}>
          That calls are placed only within permitted calling hours at the called party&apos;s
          location; and
        </li>
        <li className={docLi}>
          That the customer holds all licenses and registrations required for the traffic it
          originates.
        </li>
      </ul>

      <h2 id="prohibited" className={docH2}>
        2. Prohibited Traffic
      </h2>
      <p className="mt-3.5">
        The following are prohibited without exception and result in immediate termination:
      </p>
      <div className="bg-[#FBEDEA] border border-flag/30 rounded px-5 py-[18px] mt-4">
        {PROHIBITED.map((item) => (
          <p key={item} className="text-[15px] text-[#8A2E22] first:mt-0 mt-1.5">
            {item}
          </p>
        ))}
      </div>

      <h2 id="caller-id" className={docH2}>
        3. Caller ID Requirements
      </h2>
      <ul className={docList}>
        <li className={docLi}>
          Every calling number presented must be a valid, allocated, answerable number.
        </li>
        <li className={docLi}>
          Return calls to any presented number must reach a live agent or a compliant voicemail
          identifying the seller and providing a do-not-call mechanism.
        </li>
        <li className={docLi}>
          Customers may not present a number they neither own nor are expressly authorized to use, and
          must produce that authorization on request.
        </li>
        <li className={docLi}>
          The Company rejects, at its session border controller, any call presenting a calling number
          outside the authorized inventory for that customer.
        </li>
      </ul>

      <h2 id="screening-obligations" className={docH2}>
        4. Screening and Suppression Obligations
      </h2>
      <p className="mt-3.5">
        Customers are responsible for screening their own dialing lists before traffic reaches the
        Company&apos;s network. Where the Company also operates a screening control at the network
        layer, that control is a second line of defense and does not relieve the customer of its own
        obligation.
      </p>
      <p className="mt-3.5">Customers must:</p>
      <ul className={docList}>
        <li className={docLi}>
          Honor any do-not-call request immediately, and in all cases within 24 hours;
        </li>
        <li className={docLi}>
          Maintain an internal do-not-call list and apply it as a suppression file on every campaign;
        </li>
        <li className={docLi}>
          Honor revocation of consent received by any reasonable means, including verbally on a call,
          by reply text, email, or voicemail;
        </li>
        <li className={docLi}>
          Suppress any number the Company notifies them of, immediately and across all campaigns; and
        </li>
        <li className={docLi}>
          Apply attempt limits and retry rules that prevent uncontrolled repeat dialing of any
          contact.
        </li>
      </ul>

      <h2 id="evidence" className={docH2}>
        5. Evidence on Demand
      </h2>
      <p className="mt-3.5">Customers must produce, within 24 hours of a request by the Company:</p>
      <ul className={docList}>
        <li className={docLi}>
          The consent record for any identified call, including the disclosure text presented,
          timestamp, consumer IP address, source URL or channel, and any lead-certification token;
        </li>
        <li className={docLi}>
          Evidence of Do-Not-Call, litigator, and reassigned-number scrubbing for the campaign; and
        </li>
        <li className={docLi}>
          Caller ID ownership or authorization documentation for any presented number.
        </li>
      </ul>
      <p className="mt-3.5">
        Inability to produce these records within 24 hours is itself grounds for suspension,
        independent of whether the underlying call was lawful.
      </p>

      <h2 id="network-controls" className={docH2}>
        6. Network Controls
      </h2>
      <p className="mt-3.5">
        The Company operates the following controls on the call path, before traffic reaches any
        upstream carrier. These controls protect the Company&apos;s network and its carrier
        relationships; they do not substitute for the customer&apos;s own compliance obligations.
      </p>
      <ul className={docList}>
        {NETWORK_CONTROLS.map((control) => (
          <li key={control} className={docLi}>
            {control}
          </li>
        ))}
      </ul>

      <h2 id="suspension" className={docH2}>
        7. Suspension and Termination
      </h2>
      <p className="mt-3.5">
        The Company may suspend or terminate service immediately, without prior notice, where it
        determines that:
      </p>
      <ul className={docList}>
        <li className={docLi}>Traffic violates this policy or applicable law;</li>
        <li className={docLi}>
          A customer has failed to respond to a traceback or produce requested evidence within 24
          hours;
        </li>
        <li className={docLi}>
          Traffic patterns indicate fraud, artificial inflation, or analytics evasion; or
        </li>
        <li className={docLi}>
          An upstream carrier or regulatory authority identifies the customer&apos;s traffic as
          non-compliant.
        </li>
      </ul>
      <p className="mt-3.5">
        Suspension is a protective measure and is not a determination of liability. The Company
        preserves all records associated with suspended or terminated traffic.
      </p>

      <h2 id="recordkeeping" className={docH2}>
        8. Recordkeeping
      </h2>
      <p className="mt-3.5">
        Call detail records, screening decisions, refusal reasons, customer warranties, evidence
        produced under Section 5, and suspension or termination actions are retained for a minimum of
        five (5) years.
      </p>
      <p className="mt-3.5">
        Compliance decisions are written to a trigger-enforced append-only audit log; UPDATE, DELETE
        and TRUNCATE operations are blocked at the database level.
      </p>
    </LegalDoc>
  );
}
