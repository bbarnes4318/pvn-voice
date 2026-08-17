import React from 'react';
import LegalDoc, { DocSection, docH2, docList, docLi } from '../../components/LegalDoc';
import { PHONE_DISPLAY, PHONE_HREF } from '../../lib/pricing';
import { getPolicyMetaLine, relatedPolicies } from '../../lib/compliance-policies';

const HREF = '/compliance/do-not-call';

const contents: DocSection[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'national-registry', title: 'National Do-Not-Call Registry' },
  { id: 'internal-list', title: 'Internal Do-Not-Call List' },
  { id: 'additional-suppression', title: 'Additional Suppression' },
  { id: 'training', title: 'Agent Training and Enforcement' },
  { id: 'recordkeeping', title: 'Recordkeeping' },
];

export default function DoNotCallPolicy() {
  return (
    <LegalDoc
      metaTitle="PVN Voice — Do-Not-Call (DNC) Policy"
      metaDescription="PVN LLC's written Do-Not-Call policy: National and state DNC registry scrubbing, internal do-not-call list, calling windows, agent training, and recordkeeping under the TCPA and FTC Telemarketing Sales Rule."
      eyebrow="Compliance"
      heading="Do-Not-Call (DNC) Policy"
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
        PVN LLC (&quot;the Company&quot;) conducts and supports outbound calling in compliance with
        the Telephone Consumer Protection Act (TCPA), 47 U.S.C. § 227, the FCC&apos;s implementing
        rules at 47 C.F.R. § 64.1200, the FTC&apos;s Telemarketing Sales Rule (TSR), 16 C.F.R. Part
        310, and applicable state telemarketing laws. This policy applies to all outbound calls
        placed by the Company, its agents, and its representatives, on its own behalf or on behalf of
        any seller.
      </p>

      <h2 id="national-registry" className={docH2}>
        1. National Do-Not-Call Registry
      </h2>
      <ul className={docList}>
        <li className={docLi}>
          The Company subscribes to the National Do-Not-Call Registry through its Subscription
          Account Number (SAN) for all area codes it dials.
        </li>
        <li className={docLi}>
          All calling lists are scrubbed against the National DNC Registry{' '}
          <strong className="font-semibold">no less frequently than every 31 days</strong> before
          dialing. No number appearing on the Registry is dialed unless a recognized exemption
          applies (prior express written consent or an established business relationship as defined
          by law).
        </li>
        <li className={docLi}>
          Applicable state Do-Not-Call registries are scrubbed on the same cadence for all states
          dialed.
        </li>
      </ul>

      <h2 id="internal-list" className={docH2}>
        2. Internal Do-Not-Call List
      </h2>
      <ul className={docList}>
        <li className={docLi}>
          Any consumer who requests not to be called is added to the Company&apos;s internal DNC list{' '}
          <strong className="font-semibold">immediately, and in all cases within 24 hours</strong> of
          the request.
        </li>
        <li className={docLi}>
          Internal DNC requests are honored regardless of any consent or business relationship, are
          entity-specific and campaign-wide, and are retained for a{' '}
          <strong className="font-semibold">minimum of five (5) years</strong>.
        </li>
        <li className={docLi}>
          The internal DNC list is applied as a suppression file on every campaign prior to dialing,
          without exception.
        </li>
      </ul>

      <h2 id="additional-suppression" className={docH2}>
        3. Additional Suppression
      </h2>
      <ul className={docList}>
        <li className={docLi}>
          Calling lists are scrubbed against known TCPA litigator databases via a third-party
          suppression API prior to every dialing session.
        </li>
        <li className={docLi}>
          Wireless numbers are identified and dialed only where the required level of consent exists
          for the dialing technology used.
        </li>
        <li className={docLi}>
          Calls are placed only between 8:00 a.m. and 9:00 p.m. local time at the called party&apos;s
          location, or within narrower windows where state law requires.
        </li>
      </ul>

      <h2 id="training" className={docH2}>
        4. Agent Training and Enforcement
      </h2>
      <ul className={docList}>
        <li className={docLi}>
          All agents are trained on this policy before placing any calls and at least annually
          thereafter. Training records are maintained.
        </li>
        <li className={docLi}>
          Agents must honor any do-not-call request on the call in which it is made, confirm it to
          the consumer, and record it in the dialer disposition immediately.
        </li>
        <li className={docLi}>
          Violations of this policy by any agent or vendor result in corrective action up to and
          including termination of the relationship.
        </li>
      </ul>

      <h2 id="recordkeeping" className={docH2}>
        5. Recordkeeping
      </h2>
      <p className="mt-3.5">
        The Company retains DNC scrub logs, suppression files, SAN documentation, consent records,
        and internal DNC entries for a minimum of five (5) years.
      </p>
    </LegalDoc>
  );
}
