import {
  SITE_URL,
  BRAND_NAME,
  BRAND_TAGLINE,
  pageMeta,
  routeSlugs,
  type RouteKey,
} from '~/data/site';

export const prerender = true;

export function GET() {
  const order: RouteKey[] = [
    'home',
    'casinos',
    'reviews',
    'analytics',
    'liveCodes',
    'leaderboard',
    'betFeed',
    'seedAnalyzer',
    'provablyFair',
    'bonusCalculator',
    'blog',
    'transparency',
    'about',
    'contact',
    'support',
    'responsibleGambling',
    'ageVerification',
    'jurisdictionRestrictions',
    'disclaimer',
    'privacy',
    'cookies',
    'terms',
    'accessibility',
    'sitemap',
  ];

  const lines: string[] = [];
  lines.push(`# ${BRAND_NAME}`);
  lines.push('');
  lines.push(`> ${BRAND_TAGLINE}.`);
  lines.push('');
  lines.push(
    `${BRAND_NAME} is an independent transparency project for crypto casinos. We track on-chain deposit volume, audit Original game fairness, verify bonus codes and pay back wager-share rewards.`,
  );
  lines.push('');
  lines.push('## Pages');
  lines.push('');
  for (const key of order) {
    const meta = pageMeta[key];
    const href = SITE_URL + routeSlugs[key];
    lines.push(`- [${meta.llmsLabel}](${href}): ${meta.llmsDescription}`);
  }
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
