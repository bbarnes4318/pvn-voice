import React from 'react';
import LegalDoc, { DocSection, docH2, docList, docLi } from '../../components/LegalDoc';
import { PHONE_DISPLAY, PHONE_HREF } from '../../lib/pricing';
import { getPolicyMetaLine, relatedPolicies } from '../../lib/compliance-policies';

const HREF = '/compliance/reassigned-numbers';

const contents: DocSection[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'allocation', title: 'Allocation of Responsibility' },
  { id: 'query-requirements', title: 'Query Requirements' },
  { id: 'cadence', title: 'Cadence' },
  { id: 'screening', title: 'Company Screening' },
  { id: 'remediation', title: 'Remediation and Recordkeeping' },
];

export default function ReassignedNumbersPolicy() {
  return (
    <LegalDoc
      metaTitle="PVN Voice — Reassigned Numbers Database (RND) Policy"
      metaDescription="PVN LLC's Reassigned Numbers Database policy: how RND querying is allocated between the Company and its customers, the query standard applied, and the network-layer screening that backs it."
      eyebrow="Compliance"
      heading="Reassigned Numbers Database (RND) Policy"
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
        Telephone numbers are frequently disconnected and reassigned to new subscribers. Consent
        obtained from a prior subscriber does not extend to the new holder of a reassigned number. The
        FCC&apos;s Reassigned Numbers Database (RND) exists to prevent calls to reassigned numbers and
        to provide a safe harbor under 47 C.F.R. § 64.1200(m).
      </p>
      <p className="mt-3.5">
        An RND query is performed using the date consent was obtained as the query date. The party
        holding the consent record is therefore the only party able to query the database
        meaningfully. This policy allocates the obligation accordingly.
      </p>

      <h2 id="allocation" className={docH2}>
        1. Allocation of Responsibility
      </h2>
      <p className="mt-3.5">
        Where PVN LLC holds the consent record &mdash; for campaigns operated by the Company on its
        own behalf &mdash; the Company performs RND querying directly in accordance with Sections 2
        and 3.
      </p>
      <p className="mt-3.5">
        Where a customer or lead source holds the consent record &mdash; for wholesale traffic and
        customer-originated campaigns &mdash; the customer is contractually required to perform RND
        querying before dialing, using the consent date as the query date, and to produce query
        submissions and response files on demand within 24 hours.
      </p>
      <p className="mt-3.5">
        The Company does not represent that it independently queries the RND for numbers whose consent
        records it does not hold, because a query performed without the correct consent date does not
        produce the safe harbor and would misstate the protection in place.
      </p>

      <h2 id="query-requirements" className={docH2}>
        2. Query Requirements
      </h2>
      <p className="mt-3.5">
        Whether performed by the Company or by a customer, RND querying must meet the following
        standard:
      </p>
      <ul className={docList}>
        <li className={docLi}>
          The query is submitted to the FCC Reassigned Numbers Database at{' '}
          <a
            href="https://reassigned.us"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy"
          >
            <code className="font-data text-[14.5px] bg-card border border-rule rounded-sm px-1.5 py-px">
              reassigned.us
            </code>
          </a>{' '}
          before the number is dialed in reliance on consent.
        </li>
        <li className={docLi}>
          The query date is the date consent was obtained, or the date of last verified contact with
          the consenting party.
        </li>
        <li className={docLi}>
          A &quot;Yes&quot; response &mdash; permanently disconnected on or after the consent date
          &mdash; requires the number to be suppressed from all campaigns and flagged for consent
          re-verification.
        </li>
        <li className={docLi}>
          A &quot;No&quot; response permits dialing; the query result is logged to preserve the safe
          harbor.
        </li>
        <li className={docLi}>
          A &quot;No Data&quot; response is treated conservatively and routed for manual review rather
          than dialed on the assumption of eligibility.
        </li>
      </ul>

      <h2 id="cadence" className={docH2}>
        3. Cadence
      </h2>
      <ul className={docList}>
        <li className={docLi}>New lead files are queried before first dial.</li>
        <li className={docLi}>
          Records where consent or last verified contact is more than 90 days old are re-queried
          before being reloaded into any campaign.
        </li>
      </ul>

      <h2 id="screening" className={docH2}>
        4. Company Screening
      </h2>
      <p className="mt-3.5">
        Independent of RND querying, the Company applies the following at the network layer to reduce
        reassignment and invalid-number exposure:
      </p>
      <ul className={docList}>
        <li className={docLi}>
          Invalid, unallocated and unassigned destinations are refused at the session border
          controller before the call leaves the Company&apos;s network.
        </li>
        <li className={docLi}>
          Numbers identified as disconnected through carrier response codes are recorded and reported
          to the responsible customer for suppression.
        </li>
        <li className={docLi}>
          Any number the Company learns has been reassigned &mdash; through carrier response, a called
          party, or any other channel &mdash; is suppressed at the Company&apos;s layer immediately
          and passed to the responsible customer for suppression at source.
        </li>
      </ul>
      <p className="mt-3.5">
        These controls reduce real-world exposure. They do not create the § 64.1200(m) safe harbor,
        which arises only from a correctly dated RND query.
      </p>

      <h2 id="remediation" className={docH2}>
        5. Remediation and Recordkeeping
      </h2>
      <p className="mt-3.5">
        Where the Company learns that a number has been reassigned, the number is suppressed
        immediately and the associated consent record is retired.
      </p>
      <p className="mt-3.5">
        RND query submissions, response files, timestamps, and suppression actions &mdash; whether
        performed by the Company or produced by a customer on demand &mdash; are retained for a
        minimum of five (5) years to document safe-harbor compliance.
      </p>
    </LegalDoc>
  );
}
