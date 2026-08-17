import React from 'react';
import LegalDoc, { DocSection, docH2, docList, docLi } from '../../components/LegalDoc';
import { PHONE_DISPLAY, PHONE_HREF, RMD_CERTIFICATION } from '../../lib/pricing';
import { getPolicyMetaLine, relatedPolicies } from '../../lib/compliance-policies';

const HREF = '/compliance/traceback';

const contents: DocSection[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'designated-contact', title: 'Designated Contact' },
  { id: 'response-timeline', title: 'Response Timeline' },
  { id: 'records-produced', title: 'Records Produced' },
  { id: 'customer-obligations', title: 'Customer Obligations' },
  { id: 'suspension', title: 'Suspension and Escalation' },
  { id: 'recordkeeping', title: 'Recordkeeping' },
];

export default function TracebackResponsePolicy() {
  return (
    <LegalDoc
      metaTitle="PVN Voice — Traceback Response Policy"
      metaDescription="PVN LLC's Traceback Response Policy: our designated traceback contact under Robocall Mitigation Database certification RMD0027386, 24-hour response timelines, the call records produced, customer obligations, and suspension and escalation triggers."
      eyebrow="Compliance"
      heading="Traceback Response Policy"
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
        PVN LLC (&quot;the Company&quot;) participates fully and promptly in industry traceback
        efforts, including those conducted by the Industry Traceback Group (ITG) under the TRACED Act,
        and responds to traceback and call-origination inquiries from upstream carriers, downstream
        providers, and regulatory authorities.
      </p>
      <p className="mt-3.5">
        The Company&apos;s network is engineered so that a complete record exists for every call
        attempt &mdash; including attempts the Company&apos;s own controls refused. This policy sets
        out how the Company responds when a traceback or origination inquiry is received.
      </p>

      <h2 id="designated-contact" className={docH2}>
        1. Designated Contact
      </h2>
      <p className="mt-3.5">
        The Company maintains a designated point of contact for traceback and call-origination
        inquiries, published in the Robocall Mitigation Database under certification{' '}
        <code className="font-data text-[14.5px] bg-card border border-rule rounded-sm px-1.5 py-px">
          {RMD_CERTIFICATION}
        </code>
        .
      </p>
      <div className="bg-ink text-white rounded-md px-[22px] py-5 mt-[18px]">
        <p className="text-[15px] text-[#CFE0EA]">
          <b className="text-white">Compliance Officer:</b> Joel Vasquez &mdash;{' '}
          <a href="mailto:joel@getlifeassurance.com" className="text-attest">
            joel@getlifeassurance.com
          </a>
        </p>
        <p className="text-[15px] text-[#CFE0EA] mt-2">
          <b className="text-white">Escalation:</b> James Kelly &mdash;{' '}
          <a href="mailto:jimmy@getlifeassurance.com" className="text-attest">
            jimmy@getlifeassurance.com
          </a>{' '}
          &mdash;{' '}
          <a href={PHONE_HREF} className="text-attest">
            {PHONE_DISPLAY}
          </a>
        </p>
      </div>
      <p className="mt-3.5">
        Contact details are reviewed at least annually and updated in the Robocall Mitigation Database
        upon any change.
      </p>

      <h2 id="response-timeline" className={docH2}>
        2. Response Timeline
      </h2>
      <ul className={docList}>
        <li className={docLi}>
          Traceback requests are acknowledged{' '}
          <strong className="font-semibold">within 24 hours of receipt</strong>, including weekends
          and holidays.
        </li>
        <li className={docLi}>
          A substantive response identifying the immediate upstream source of the identified call is
          provided within 24 hours of receipt, or within any shorter period specified by the
          requesting party or by law.
        </li>
        <li className={docLi}>
          Where the Company is the originating provider, the response identifies the originating
          customer and the basis on which the traffic was accepted.
        </li>
        <li className={docLi}>
          Where the Company is an intermediate provider, the response identifies the provider from
          which the call was received.
        </li>
      </ul>
      <p className="mt-3.5">
        The Company does not require a subpoena, legal process, or contractual formality as a
        precondition to responding to a lawful traceback request.
      </p>

      <h2 id="records-produced" className={docH2}>
        3. Records Produced
      </h2>
      <p className="mt-3.5">
        For any call identified by SIP Call-ID and timestamp, the Company produces from call-level
        records:
      </p>
      <ul className={docList}>
        <li className={docLi}>Source IP address of the originating session</li>
        <li className={docLi}>SIP Call-ID</li>
        <li className={docLi}>Call start, answer, and end timestamps</li>
        <li className={docLi}>Originating customer and campaign attribution</li>
        <li className={docLi}>Calling number (caller ID) presented and the DID from which it was drawn</li>
        <li className={docLi}>Called number</li>
        <li className={docLi}>Call disposition, duration, and hangup cause</li>
        <li className={docLi}>Routing path, including the carrier or gateway used</li>
        <li className={docLi}>
          Where the call was refused by the Company&apos;s own controls, the rejection reason
        </li>
      </ul>
      <p className="mt-3.5">
        Source IP and SIP Call-ID are captured before any compliance or routing check can reject the
        call, so a complete record exists even for call attempts the Company blocked. Compliance
        decisions are written to a trigger-enforced append-only audit log; UPDATE, DELETE and TRUNCATE
        operations are blocked at the database level, so records cannot be altered after the fact.
      </p>

      <h2 id="customer-obligations" className={docH2}>
        4. Customer Obligations
      </h2>
      <p className="mt-3.5">
        Every customer originating traffic through the Company is contractually required to:
      </p>
      <ul className={docList}>
        <li className={docLi}>
          Respond to a traceback inquiry forwarded by the Company within 24 hours;
        </li>
        <li className={docLi}>
          Identify the source of the called number and the campaign under which it was dialed;
        </li>
        <li className={docLi}>
          Produce the consent record supporting the call, including the consent disclosure text,
          timestamp, source URL or channel, and any lead-certification token; and
        </li>
        <li className={docLi}>
          Identify their own upstream source where the customer is itself an intermediate provider.
        </li>
      </ul>
      <p className="mt-3.5">
        These obligations are conditions of service and are set out in the Company&apos;s Acceptable
        Use Policy.
      </p>

      <h2 id="suspension" className={docH2}>
        5. Suspension and Escalation
      </h2>
      <ul className={docList}>
        <li className={docLi}>
          Failure by a customer to respond to a traceback within 24 hours results in{' '}
          <strong className="font-semibold">
            immediate suspension of that customer&apos;s trunk
          </strong>{' '}
          pending response.
        </li>
        <li className={docLi}>
          Failure to produce a consent record for an identified call results in suspension and review
          of all traffic from that customer.
        </li>
        <li className={docLi}>
          Evidence of unlawful traffic results in immediate and permanent termination of service and
          preservation of all associated records.
        </li>
        <li className={docLi}>
          Where a traceback identifies a pattern rather than a single call, the Company suspends the
          affected campaign or customer pending investigation rather than awaiting a second inquiry.
        </li>
      </ul>
      <p className="mt-3.5">
        The Company will notify the requesting party of any suspension or termination action taken as
        a result of a traceback.
      </p>

      <h2 id="recordkeeping" className={docH2}>
        6. Recordkeeping
      </h2>
      <p className="mt-3.5">
        Traceback inquiries, the Company&apos;s responses, supporting call records, customer
        responses, and any suspension or termination action taken are retained for a minimum of five
        (5) years.
      </p>
      <p className="mt-3.5">
        Call-level records are retained in a synchronous, append-only system of record written before
        the call proceeds, so the record of a call exists independently of the call&apos;s outcome.
      </p>
    </LegalDoc>
  );
}
