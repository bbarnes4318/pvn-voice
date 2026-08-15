export interface CompliancePolicy {
  href: string;
  name: string;
  shortName: string;
  description: string;
  effectiveDate: string;
  version: string;
}

// Shared metadata for the PVN LLC telemarketing compliance policies.
export const POLICY_META_LINE = 'PVN LLC • Telemarketing Compliance Policies • Updated August 14, 2026';

export const DNC_PHONE_DISPLAY = '(904) 512-8487';
export const DNC_PHONE_HREF = 'tel:+19045128487';

export const COMPLIANCE_POLICIES: CompliancePolicy[] = [
  {
    href: '/compliance/do-not-call',
    name: 'Do-Not-Call (DNC) Policy',
    shortName: 'DNC Policy',
    description:
      'National and state registry scrubbing, our internal do-not-call list, calling windows, agent training, and recordkeeping.',
    effectiveDate: 'August 12, 2026',
    version: '1.0',
  },
  {
    href: '/compliance/do-not-originate',
    name: 'Do-Not-Originate (DNO) Policy',
    shortName: 'DNO Policy',
    description:
      'Screening of invalid and inbound-only numbers, caller ID integrity, CNAM registration, and STIR/SHAKEN traffic practices.',
    effectiveDate: 'August 12, 2026',
    version: '1.0',
  },
  {
    href: '/compliance/reassigned-numbers',
    name: 'Reassigned Numbers Database (RND) Policy',
    shortName: 'RND Policy',
    description:
      'How RND querying is allocated between the Company and its customers, the query standard applied, and the network-layer screening that backs it.',
    effectiveDate: 'August 14, 2026',
    version: '1.1',
  },
  {
    href: '/compliance/consent',
    name: 'Opt-In & Consent Policy',
    shortName: 'Opt-In & Consent Policy',
    description:
      'Prior express written consent standards, lead intake requirements, consent verification, and revocation handling.',
    effectiveDate: 'August 12, 2026',
    version: '1.0',
  },
  {
    href: '/compliance/traceback',
    name: 'Traceback Response Policy',
    shortName: 'Traceback Response Policy',
    description:
      'Our designated traceback contact, response timelines, the call records we produce, and the customer obligations and suspension triggers behind them.',
    effectiveDate: 'August 14, 2026',
    version: '1.0',
  },
  {
    href: '/compliance/acceptable-use',
    name: 'Acceptable Use Policy',
    shortName: 'Acceptable Use Policy',
    description:
      'Customer warranties, prohibited traffic, caller ID requirements, evidence-on-demand obligations, and the network controls applied to all originated traffic.',
    effectiveDate: 'August 14, 2026',
    version: '1.0',
  },
];

export const formatPolicyMetaLine = (effectiveDate: string, version: string): string =>
  `PVN LLC • Effective Date: ${effectiveDate} • Version ${version}`;

export const getPolicyMetaLine = (href: string): string => {
  const policy = COMPLIANCE_POLICIES.find((candidate) => candidate.href === href);
  return policy ? formatPolicyMetaLine(policy.effectiveDate, policy.version) : POLICY_META_LINE;
};
