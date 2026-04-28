import { SITE_URL } from '~/data/site';

export const prerender = true;

export function GET() {
  const isPreview =
    process.env.CF_PAGES === '1' && process.env.CF_PAGES_BRANCH !== 'main';

  const lines = isPreview
    ? ['User-agent: *', 'Disallow: /', '']
    : ['User-agent: *', 'Allow: /', '', `Sitemap: ${SITE_URL}/sitemap-index.xml`, ''];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
