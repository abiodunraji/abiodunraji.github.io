// Renders the print CV (/cv) to public/cv.pdf via Playwright.
// Usage: build + `astro preview --port 4399`, then `node scripts/render-cv.mjs`,
// then rebuild so dist/ picks up the new PDF.
// Playwright isn't a dep of this repo — resolve it from a sibling project.
import { createRequire } from 'node:module';

const candidates = [
  'C:/Users/rajio/Documents/GitHub/marcplaats/package.json',
  'C:/Users/rajio/Documents/GitHub/healthbrew/e2e/package.json',
];
let chromium;
for (const c of candidates) {
  try {
    ({ chromium } = createRequire(c)('playwright'));
    break;
  } catch {}
}
if (!chromium) {
  console.error('playwright not found in sibling projects');
  process.exit(1);
}

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('http://localhost:4399/cv', { waitUntil: 'networkidle' });
await page.pdf({
  path: 'public/cv.pdf',
  format: 'A4',
  printBackground: true,
});
await browser.close();
console.log('public/cv.pdf written');
