import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://jigsumdev.github.io/test_website_gamble_1',
  base: '/test_website_gamble_1',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname;
        if (path === '/') {
          return { ...item, priority: 1.0, changefreq: 'daily' };
        }
        if (path.startsWith('/casinos') || path.startsWith('/reviews') || path.startsWith('/livecodes')) {
          return { ...item, priority: 0.9, changefreq: 'daily' };
        }
        if (path.startsWith('/analytics') || path.startsWith('/leaderboard') || path.startsWith('/blog')) {
          return { ...item, priority: 0.8, changefreq: 'weekly' };
        }
        if (path.startsWith('/contact') || path.startsWith('/support')) {
          return { ...item, priority: 0.5, changefreq: 'yearly' };
        }
        return { ...item, priority: 0.6, changefreq: 'monthly' };
      },
    }),
  ],
});
