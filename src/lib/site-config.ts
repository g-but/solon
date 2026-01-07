export interface NavChildItem {
  title: string;
  href: string;
}

export interface NavSection {
  title: string;
  children?: NavChildItem[];
  href?: string;
}

export const NAV_ITEMS: NavSection[] = [
  {
    title: 'Platform',
    children: [
      { title: 'Overview', href: '/' },
      { title: 'Features', href: '/features' },
      { title: 'Security', href: '/security' },
      { title: 'Integration', href: '/integration' },
    ],
  },
  {
    title: 'Governance',
    children: [
      { title: 'Voting System', href: '/governance/voting' },
      { title: 'Decision Making', href: '/governance/decisions' },
      { title: 'Transparency', href: '/governance/transparency' },
      { title: 'Audit Trail', href: '/governance/audit' },
    ],
  },
  {
    title: 'Treasury',
    children: [
      { title: 'Bitcoin Treasury', href: '/treasury/bitcoin' },
      { title: 'Transaction History', href: '/treasury/transactions' },
      { title: 'Budget Tracking', href: '/treasury/budget' },
      { title: 'Financial Reports', href: '/treasury/reports' },
    ],
  },
  {
    title: 'Marketplace',
    children: [
      { title: 'Service Directory', href: '/marketplace/services' },
      { title: 'Procurement', href: '/marketplace/procurement' },
      { title: 'Vendor Management', href: '/marketplace/vendors' },
      { title: 'Contract Tracking', href: '/marketplace/contracts' },
    ],
  },
  {
    title: 'Resources',
    children: [
      { title: 'Documentation', href: '/docs' },
      { title: 'About', href: '/about' },
      { title: 'Support', href: '/support' },
      { title: 'Contact', href: '/contact' },
    ],
  },
];

export const THEME = {
  navy: 'var(--navy)',
  navyLight: 'var(--navy-light)',
  navyDark: 'var(--navy-dark)',
  accent: 'var(--accent)',
  accentDark: 'var(--accent-dark)'
};




