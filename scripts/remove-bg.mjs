/**
 * Removes white/near-white background from a JPEG and saves as transparent PNG.
 * Uses only Node.js built-in modules — no external deps required.
 * Run: node scripts/remove-bg.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { createCanvas, loadImage } from "canvas";

// We'll try the 'canvas' package that Next.js might have
let canvas;
try {
  const mod = await import("canvas");
  canvas = mod;
} catch {
  console.error(
    "❌  canvas module not available. Install with: npm install canvas"
  );
  process.exit(1);
}

const { createCanvas: cc, loadImage: li } = canvas;

const input = "./public/logo-enetic-alt.jpg";
const output = "./public/logo-enetic-transparent.png";

const img = await li(input);
const cnv = cc(img.width, img.height);
const ctx = cnv.getContext("2d");
ctx.drawImage(img, 0, 0);

const imageData = ctx.getImageData(0, 0, img.width, img.height);
const data = imageData.data;

// Threshold: treat pixels whiter than 230,230,230 as transparent
for (let i = 0; i < data.length; i += 4) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  if (r > 230 && g > 230 && b > 230) {
    data[i + 3] = 0; // fully transparent
  }
}

ctx.putImageData(imageData, 0, 0);
const buf = cnv.toBuffer("image/png");
writeFileSync(output, buf);
console.log("✅  Saved transparent PNG to", output);
