export const SITE_URL = 'https://www.fairledger.io';
export const BRAND_NAME = 'FairLedger';
export const BRAND_LEGAL_NAME = 'FairLedger Insights Ltd.';
export const BRAND_TAGLINE = 'Crypto casino transparency and rewards';
export const CONTACT_EMAIL = 'hello@fairledger.io';
export const SUPPORT_EMAIL = 'support@fairledger.io';
export const ROBOTS_NOINDEX_VALUE = 'noindex, nofollow, noarchive, nosnippet';
export const LEGAL_LAST_UPDATED = '2026-04-15';

export const COLORS = {
  primary: '#7C3AED',
  primarySoft: '#A78BFA',
  secondary: '#14B8A6',
  background: '#0B0F1E',
  surface: '#11162A',
  surfaceHi: '#1A2140',
  border: '#262E4D',
  text: '#E5E7F0',
  textMuted: '#9CA3C2',
  success: '#34D399',
  warning: '#F59E0B',
  danger: '#F43F5E',
} as const;

export const socialLinks = {
  x: 'https://x.com/FairLedger',
  discord: 'https://discord.gg/fairledger',
  telegram: 'https://t.me/fairledger',
  youtube: 'https://www.youtube.com/@fairledger',
} as const;

export const businessInfo = {
  legalName: BRAND_LEGAL_NAME,
  contactEmail: CONTACT_EMAIL,
  supportEmail: SUPPORT_EMAIL,
  jurisdiction: 'United Kingdom',
  registeredAddress: '7 Old Park Lane, London, W1K 1QR, United Kingdom',
} as const;

export type RouteKey =
  | 'home'
  | 'casinos'
  | 'reviews'
  | 'analytics'
  | 'seedAnalyzer'
  | 'provablyFair'
  | 'bonusCalculator'
  | 'liveCodes'
  | 'leaderboard'
  | 'betFeed'
  | 'blog'
  | 'transparency'
  | 'contact'
  | 'about'
  | 'privacy'
  | 'cookies'
  | 'terms'
  | 'accessibility'
  | 'support'
  | 'sitemap'
  | 'disclaimer'
  | 'responsibleGambling'
  | 'ageVerification'
  | 'jurisdictionRestrictions';

export const routeSlugs: Record<RouteKey, string> = {
  home: '/',
  casinos: '/casinos/',
  reviews: '/reviews/',
  analytics: '/analytics/',
  seedAnalyzer: '/seed-analyzer/',
  provablyFair: '/provably-fair/',
  bonusCalculator: '/bonus-calculator/',
  liveCodes: '/livecodes/',
  leaderboard: '/leaderboard/',
  betFeed: '/bet-feed/',
  blog: '/blog/',
  transparency: '/transparency/',
  contact: '/contact/',
  about: '/about/',
  privacy: '/privacy/',
  cookies: '/cookies/',
  terms: '/terms/',
  accessibility: '/accessibility/',
  support: '/support/',
  sitemap: '/sitemap/',
  disclaimer: '/disclaimer/',
  responsibleGambling: '/responsible-gambling/',
  ageVerification: '/age-verification/',
  jurisdictionRestrictions: '/jurisdiction-restrictions/',
};

export interface PageMeta {
  title: string;
  description: string;
  llmsLabel: string;
  llmsDescription: string;
}

export const pageMeta: Record<RouteKey, PageMeta> = {
  home: {
    title: `${BRAND_NAME} - Crypto Casino Transparency & Rewards`,
    description:
      'Real-time on-chain analytics, honest reviews, provably fair verification tools and live bonus code drops for every major crypto casino. Track deposits, compare ratings and earn wager share - all in one place.',
    llmsLabel: 'Home',
    llmsDescription: 'Crypto casino analytics, reviews, bonus codes and wager share rewards.',
  },
  casinos: {
    title: `Top Crypto Casinos 2026 - Verified Operators | ${BRAND_NAME}`,
    description:
      'Browse every major crypto casino with verified deposit volume, RTP audits, license details and exclusive bonus codes. Updated every five minutes from on-chain data.',
    llmsLabel: 'Casinos',
    llmsDescription: 'Directory of verified crypto casinos with on-chain stats.',
  },
  reviews: {
    title: `Crypto Casino Reviews - Honest, Independent Ratings | ${BRAND_NAME}`,
    description:
      'In-depth reviews of every major crypto casino. We score on payout speed, fairness, support quality, license, game library and bonus value. No paid placements.',
    llmsLabel: 'Reviews',
    llmsDescription: 'Independent crypto casino reviews and ratings.',
  },
  analytics: {
    title: `Crypto Casino Analytics & Deposit Volume | ${BRAND_NAME}`,
    description:
      'Live deposit volume, market share, unique depositors and growth trends across the crypto casino industry. Updated continuously from public on-chain transactions.',
    llmsLabel: 'Analytics',
    llmsDescription: 'On-chain deposit analytics and market share for crypto casinos.',
  },
  seedAnalyzer: {
    title: `Provably Fair Seed Analyzer | ${BRAND_NAME}`,
    description:
      'Verify the fairness of any crypto casino round. Decode server seeds, client seeds and nonces to confirm the result was not tampered with after the fact.',
    llmsLabel: 'Seed Analyzer',
    llmsDescription: 'Tools to verify provably fair casino round outcomes.',
  },
  provablyFair: {
    title: `Provably Fair Verification Tools | ${BRAND_NAME}`,
    description:
      'Learn how provably fair gambling works and verify any round from supported casinos. SHA256, HMAC and chain-of-trust explained step by step.',
    llmsLabel: 'Provably Fair',
    llmsDescription: 'Education and tools for provably fair verification.',
  },
  bonusCalculator: {
    title: `Bonus Wagering Calculator | ${BRAND_NAME}`,
    description:
      'Calculate the real value of any deposit bonus. Plug in wagering requirements, max bet, RTP and game contribution to see your true expected return.',
    llmsLabel: 'Bonus Calculator',
    llmsDescription: 'Compute the expected value of casino bonuses.',
  },
  liveCodes: {
    title: `Live Bonus Codes - Updated Every Minute | ${BRAND_NAME}`,
    description:
      'Streaming feed of fresh bonus codes, no-deposit drops and daily reload offers from every major crypto casino. Filter by casino, value or expiry.',
    llmsLabel: 'Live Codes',
    llmsDescription: 'Real-time bonus code feed across crypto casinos.',
  },
  leaderboard: {
    title: `Wager Leaderboards & Race Standings | ${BRAND_NAME}`,
    description:
      'Live wager-race standings across every casino and our weekly community races. Climb the table and earn shared prize pools every Sunday at 23:59 UTC.',
    llmsLabel: 'Leaderboard',
    llmsDescription: 'Live wager race standings and weekly leaderboards.',
  },
  betFeed: {
    title: `Big Wins Bet Feed - Live | ${BRAND_NAME}`,
    description:
      'Live multiplier feed of every public big win across major crypto casinos. Filter by game, multiplier and stake.',
    llmsLabel: 'Bet Feed',
    llmsDescription: 'Live feed of public big-win bets across casinos.',
  },
  blog: {
    title: `${BRAND_NAME} Blog - Industry News & Guides`,
    description:
      'Long-form analysis, operator interviews and how-to guides covering the crypto gambling space. Written by independent researchers, never paid.',
    llmsLabel: 'Blog',
    llmsDescription: 'Long-form articles, news and guides about crypto gambling.',
  },
  transparency: {
    title: `Transparency Report - Methodology & Disclosures | ${BRAND_NAME}`,
    description:
      'Our methodology, on-chain data sources, affiliate disclosures, ranking algorithm and ownership structure. Everything we publish, you can audit.',
    llmsLabel: 'Transparency',
    llmsDescription: 'Methodology, data sources and full affiliate disclosure.',
  },
  contact: {
    title: `Contact Us | ${BRAND_NAME}`,
    description:
      'Get in touch with the FairLedger team. Press, partnerships, data corrections and reader questions all welcome.',
    llmsLabel: 'Contact',
    llmsDescription: 'Reach the FairLedger team for press, support or partnerships.',
  },
  about: {
    title: `About ${BRAND_NAME} - Who We Are`,
    description:
      'FairLedger is an independent, reader-funded crypto casino transparency project. Learn about our team, methodology and editorial standards.',
    llmsLabel: 'About',
    llmsDescription: 'About the FairLedger team and editorial standards.',
  },
  privacy: {
    title: `Privacy Policy | ${BRAND_NAME}`,
    description:
      'How FairLedger collects, uses and protects your personal data. Compliant with UK GDPR, EU GDPR and PIPEDA.',
    llmsLabel: 'Privacy',
    llmsDescription: 'Privacy policy and data protection statement.',
  },
  cookies: {
    title: `Cookie Policy | ${BRAND_NAME}`,
    description:
      'Which cookies and similar technologies we use, why we use them and how you can opt out.',
    llmsLabel: 'Cookies',
    llmsDescription: 'Cookie policy and tracker disclosure.',
  },
  terms: {
    title: `Terms of Service | ${BRAND_NAME}`,
    description:
      'Terms governing your use of FairLedger and our published data, tools and content.',
    llmsLabel: 'Terms',
    llmsDescription: 'Terms of service for using FairLedger.',
  },
  accessibility: {
    title: `Accessibility Statement | ${BRAND_NAME}`,
    description:
      'FairLedger targets WCAG 2.2 AA across every public route. Read our commitments and how to report a barrier.',
    llmsLabel: 'Accessibility',
    llmsDescription: 'WCAG 2.2 AA accessibility statement.',
  },
  support: {
    title: `Support | ${BRAND_NAME}`,
    description:
      'Get help, report a data issue or escalate a casino dispute. Response times and self-serve resources.',
    llmsLabel: 'Support',
    llmsDescription: 'Support contact and self-serve resources.',
  },
  sitemap: {
    title: `Sitemap | ${BRAND_NAME}`,
    description:
      'A human-readable index of every page on FairLedger.',
    llmsLabel: 'Sitemap',
    llmsDescription: 'Human-readable sitemap of every public page.',
  },
  disclaimer: {
    title: `Affiliate Disclaimer | ${BRAND_NAME}`,
    description:
      'How FairLedger is funded, our affiliate relationships, ranking conflicts and our editorial firewall.',
    llmsLabel: 'Disclaimer',
    llmsDescription: 'Affiliate disclosure and editorial independence policy.',
  },
  responsibleGambling: {
    title: `Responsible Gambling | ${BRAND_NAME}`,
    description:
      'Tools, hotlines and self-exclusion resources to keep gambling safe. Free, confidential help available 24/7.',
    llmsLabel: 'Responsible Gambling',
    llmsDescription: 'Responsible gambling tools and crisis hotlines.',
  },
  ageVerification: {
    title: `Age Verification | ${BRAND_NAME}`,
    description:
      'FairLedger is for adults aged 18 and over only (21+ in some jurisdictions). How operators verify age and our internal age-gating policy.',
    llmsLabel: 'Age Verification',
    llmsDescription: 'Age verification policy and operator KYC explained.',
  },
  jurisdictionRestrictions: {
    title: `Jurisdiction Restrictions | ${BRAND_NAME}`,
    description:
      'Where the casinos we cover do and do not accept players. Country-by-country availability and legal context.',
    llmsLabel: 'Jurisdiction Restrictions',
    llmsDescription: 'Country availability and licensing notes.',
  },
};

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const headerPrimary: NavItem[] = [
  { label: 'Casinos', href: routeSlugs.casinos },
  { label: 'Reviews', href: routeSlugs.reviews },
  { label: 'Analytics', href: routeSlugs.analytics, badge: 'Live' },
  { label: 'Codes', href: routeSlugs.liveCodes, badge: 'New' },
  { label: 'Leaderboard', href: routeSlugs.leaderboard },
];

export const headerToolsDropdown: NavGroup = {
  label: 'Tools',
  items: [
    {
      label: 'Seed Analyzer',
      href: routeSlugs.seedAnalyzer,
      description: 'Verify any provably fair round in seconds.',
    },
    {
      label: 'Provably Fair Guide',
      href: routeSlugs.provablyFair,
      description: 'Understand SHA256 verification, end to end.',
    },
    {
      label: 'Bonus Calculator',
      href: routeSlugs.bonusCalculator,
      description: 'See the true expected value of any bonus.',
    },
    {
      label: 'Bet Feed',
      href: routeSlugs.betFeed,
      description: 'Live multiplier feed across every casino.',
    },
  ],
};

export const headerCompanyDropdown: NavGroup = {
  label: 'Company',
  items: [
    { label: 'About', href: routeSlugs.about },
    { label: 'Transparency', href: routeSlugs.transparency },
    { label: 'Blog', href: routeSlugs.blog },
    { label: 'Contact', href: routeSlugs.contact },
    { label: 'Support', href: routeSlugs.support },
  ],
};

export interface FooterColumn {
  heading: string;
  links: NavItem[];
}

export const footerColumns: FooterColumn[] = [
  {
    heading: 'Casinos',
    links: [
      { label: 'All casinos', href: routeSlugs.casinos },
      { label: 'Reviews', href: routeSlugs.reviews },
      { label: 'Live bonus codes', href: routeSlugs.liveCodes },
      { label: 'Wager leaderboard', href: routeSlugs.leaderboard },
      { label: 'Big wins feed', href: routeSlugs.betFeed },
    ],
  },
  {
    heading: 'Tools',
    links: [
      { label: 'Deposit analytics', href: routeSlugs.analytics },
      { label: 'Seed analyzer', href: routeSlugs.seedAnalyzer },
      { label: 'Provably fair', href: routeSlugs.provablyFair },
      { label: 'Bonus calculator', href: routeSlugs.bonusCalculator },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: routeSlugs.about },
      { label: 'Transparency', href: routeSlugs.transparency },
      { label: 'Blog', href: routeSlugs.blog },
      { label: 'Contact', href: routeSlugs.contact },
      { label: 'Support', href: routeSlugs.support },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy', href: routeSlugs.privacy },
      { label: 'Cookies', href: routeSlugs.cookies },
      { label: 'Terms', href: routeSlugs.terms },
      { label: 'Accessibility', href: routeSlugs.accessibility },
      { label: 'Affiliate disclaimer', href: routeSlugs.disclaimer },
      { label: 'Responsible gambling', href: routeSlugs.responsibleGambling },
      { label: 'Age verification', href: routeSlugs.ageVerification },
      { label: 'Jurisdictions', href: routeSlugs.jurisdictionRestrictions },
      { label: 'HTML sitemap', href: routeSlugs.sitemap },
    ],
  },
];

export function getRoutePath(routeKey: RouteKey): string {
  return routeSlugs[routeKey];
}

export function getCanonicalUrl(routeKey: RouteKey): string {
  const path = getRoutePath(routeKey);
  return path === '/' ? SITE_URL + '/' : SITE_URL + path;
}
