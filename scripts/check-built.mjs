// Post-build gate: one affiliate disclosure per page, no Product JSON-LD, internal price file never shipped.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";
const root = process.argv[2] ?? ".next/server/app";
const errors = [];
let pages = 0;
function walk(d) {
  for (const n of readdirSync(d)) {
    const p = join(d, n);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    const raw = readFileSync(p, "utf8");
    if (raw.includes("INTERNAL ONLY: approximate prices")) errors.push(`${p}: internal price reference shipped`);
    if (extname(n) !== ".html") continue;
    pages++;
    const html = raw.replace(/<script[\s\S]*?<\/script>/g, (m) => (m.includes("application/ld+json") ? m : ""));
    const disc = (html.match(/As an Amazon Associate I earn from qualifying purchases/g) || []).length;
    if (disc !== 1) errors.push(`${p}: ${disc} Amazon Associate disclosures (need exactly 1)`);
    for (const m of raw.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      if (/"@type"\s*:\s*"Product"/.test(m[1])) errors.push(`${p}: Product JSON-LD`);
    }
  }
}
walk(root);
for (const f of ["src"]) {
  const s = JSON.stringify(readdirSync(f, { recursive: true }).filter((x) => /\.(ts|tsx)$/.test(x)).map((x) => readFileSync(join(f, x), "utf8")));
  if (/(from\s*\\?["'][^"']*tier-prices|require\([^)]*tier-prices|import\([^)]*tier-prices)/.test(s)) errors.push("src/ imports scripts/tier-prices.json");
}
if (errors.length) { console.error(`check-built: ${errors.length} error(s)\n` + errors.join("\n")); process.exit(1); }
console.log(`check-built: OK — ${pages} pages, 1 disclosure each, no Product JSON-LD, price reference not shipped`);
