/**
 * Generates raster icons + the Open Graph social image from the SVG logo and
 * the hero photo. Run once after changing the logo or hero image:
 *
 *   node scripts/gen-assets.mjs
 *
 * Outputs (committed to the repo, served from /public):
 *   favicon-96.png, apple-touch-icon.png, icon-192.png, icon-512.png, og-image.jpg
 */
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');
const faviconSvg = readFileSync(join(pub, 'favicon.svg')); // navy bg + brass emblem
const logoSvg = readFileSync(join(pub, 'logo.svg')); // transparent brass emblem
const heroPng = join(root, 'src', 'assets', 'hero-guard.png');

// --- Square icons (favicon.svg already has the navy background) ---
const icons = [
  ['favicon-96.png', 96],
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
];
for (const [name, size] of icons) {
  await sharp(faviconSvg, { density: 512 })
    .resize(size, size)
    .png()
    .toFile(join(pub, name));
  console.log('icon  ->', name, `${size}x${size}`);
}

// --- Open Graph image (1200x630) ---
const W = 1200;
const H = 630;

const base = await sharp(heroPng)
  .resize(W, H, { fit: 'cover', position: 'right' })
  .toBuffer();

const gradient = Buffer.from(
  `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#081220" stop-opacity="0.96"/>
        <stop offset="0.55" stop-color="#081220" stop-opacity="0.6"/>
        <stop offset="1" stop-color="#081220" stop-opacity="0.18"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
  </svg>`
);

const text = Buffer.from(
  `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .h { font-family: Arial, Helvetica, sans-serif; font-weight: 800; fill: #ffffff; letter-spacing: 1px; }
      .s { font-family: Arial, Helvetica, sans-serif; font-weight: 700; fill: #b6883f; letter-spacing: 2px; }
      .p { font-family: Arial, Helvetica, sans-serif; font-weight: 400; fill: #cdd7e6; }
    </style>
    <text x="74" y="318" class="h" font-size="62">APM SECURITY</text>
    <text x="74" y="388" class="h" font-size="62">SERVICES</text>
    <rect x="76" y="420" width="58" height="5" fill="#b6883f"/>
    <text x="76" y="470" class="s" font-size="27">LICENSED &amp; INSURED · FLORIDA</text>
    <text x="76" y="520" class="p" font-size="25">Security Guard · Vehicle Patrol · Custom Protection Officers</text>
    <text x="76" y="565" class="p" font-size="23">West Palm Beach · Broward · Miami · Orlando</text>
  </svg>`
);

const logoPng = await sharp(logoSvg, { density: 400 })
  .resize(104, 110)
  .png()
  .toBuffer();

await sharp(base)
  .composite([
    { input: gradient },
    { input: logoPng, left: 74, top: 70 },
    { input: text },
  ])
  .jpeg({ quality: 84 })
  .toFile(join(pub, 'og-image.jpg'));
console.log('og    -> og-image.jpg 1200x630');
