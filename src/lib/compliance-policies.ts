export interface CompliancePolicy {
  href: string;
  name: string;
  shortName: string;
  description: string;
}

// Shared metadata for the PVN LLC telemarketing compliance policies.
export const POLICY_META_LINE = 'PVN LLC • Effective Date: August 12, 2026 • Version 1.0';

export const DNC_PHONE_DISPLAY = '(904) 512-8487';
export const DNC_PHONE_HREF = 'tel:+19045128487';

export const COMPLIANCE_POLICIES: CompliancePolicy[] = [
  {
    href: '/compliance/do-not-call',
    name: 'Do-Not-Call (DNC) Policy',
    shortName: 'DNC Policy',
    description:
      'National and state registry scrubbing, our internal do-not-call list, calling windows, agent training, and recordkeeping.',
  },
  {
    href: '/compliance/do-not-originate',
    name: 'Do-Not-Originate (DNO) Policy',
    shortName: 'DNO Policy',
    description:
      'Screening of invalid and inbound-only numbers, caller ID integrity, CNAM registration, and STIR/SHAKEN traffic practices.',
  },
  {
    href: '/compliance/reassigned-numbers',
    name: 'Reassigned Numbers Database (RND) Policy',
    shortName: 'RND Policy',
    description:
      'How we query the FCC Reassigned Numbers Database, suppress reassigned numbers, and preserve the FCC safe harbor.',
  },
  {
    href: '/compliance/consent',
    name: 'Opt-In & Consent Policy',
    shortName: 'Opt-In & Consent Policy',
    description:
      'Prior express written consent standards, lead intake requirements, consent verification, and revocation handling.',
  },
];
