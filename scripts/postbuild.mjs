import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '..', 'dist');

async function walk(dir, predicate, results = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full, predicate, results);
    } else if (predicate(full)) {
      results.push(full);
    }
  }
  return results;
}

async function injectModulePreloads() {
  const htmlFiles = await walk(distDir, (p) => p.endsWith('.html'));
  let totalInjected = 0;
  for (const file of htmlFiles) {
    const original = await fs.readFile(file, 'utf8');
    const moduleScripts = [...original.matchAll(/<script\s+type="module"\s+src="([^"]+)"[^>]*><\/script>/g)];
    if (moduleScripts.length === 0) continue;
    const seen = new Set();
    const preloadTags = [];
    for (const m of moduleScripts) {
      const src = m[1];
      if (seen.has(src)) continue;
      seen.add(src);
      preloadTags.push(`<link rel="modulepreload" href="${src}">`);
    }
    if (preloadTags.length === 0) continue;
    const updated = original.replace('</head>', `${preloadTags.join('')}</head>`);
    if (updated !== original) {
      await fs.writeFile(file, updated, 'utf8');
      totalInjected += preloadTags.length;
    }
  }
  console.log(`postbuild: injected ${totalInjected} modulepreload links across ${htmlFiles.length} HTML files`);
}

async function appendPreviewHeaders() {
  const isPreview =
    process.env.CF_PAGES === '1' && process.env.CF_PAGES_BRANCH !== 'main';
  if (!isPreview) return;
  const headersPath = path.join(distDir, '_headers');
  let existing = '';
  try {
    existing = await fs.readFile(headersPath, 'utf8');
  } catch {
    // ignore
  }
  const append = `\n/robots.txt\n  X-Robots-Tag: noindex, nofollow, noarchive, nosnippet\n\n/llms.txt\n  X-Robots-Tag: noindex, nofollow, noarchive, nosnippet\n`;
  await fs.writeFile(headersPath, existing + append, 'utf8');
  console.log('postbuild: appended noindex X-Robots-Tag headers for preview build');
}

await injectModulePreloads();
await appendPreviewHeaders();
console.log('postbuild: done');
