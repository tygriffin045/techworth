import Link from "next/link";
import { products, url } from "@/data/site";

export const metadata = { title: "Amazon devices" };

export default function Page() {
  const list = products.filter((p) => p.category === "amazon-devices");
  return (
    <div>
      <p className="note">Prime Big Deal Days is October 6–7, 2026. Deals start 12:01 a.m. PT on October 6.</p>
      <h1>Amazon devices, newest to oldest</h1>
      <p>Echo and Fire TV, with the difference that matters. A newer model is not automatically the one to buy.</p>
      <div className="grid">
        {list.map((p) => (
          <a key={p.slug} className="card" href={url(p)}>
            <span className="badge">{p.verdict}</span>
            <h3>{p.name}</h3>
            <p className="note">{p.tagline}</p>
            <strong>{p.price}</strong>
          </a>
        ))}
      </div>
      <h2>What changed</h2>
      <table>
        <tbody>
          <tr><th>2025</th><td>Echo Dot Max</td><td>Louder Dot with a built-in smart-home hub. Buy it for the main room.</td></tr>
          <tr><th>2022</th><td>Echo Dot, 5th gen</td><td>The bedroom speaker. Better sound than the 4th gen. This is the one most people should buy.</td></tr>
          <tr><th>2023</th><td>Fire TV Stick 4K Max, 2nd gen</td><td>16 GB and Wi-Fi 6E. The current stick.</td></tr>
          <tr><th>2021</th><td>Fire TV Stick 4K Max, 1st gen</td><td>8 GB and Wi-Fi 6. Fine only if it is cheaper.</td></tr>
        </tbody>
      </table>
      <h2>Kindle, without the sale noise</h2>
      <p>The basic Kindle is the reader. Paperwhite adds a warm light and waterproofing. Oasis is no longer the current flagship. Scribe is for notes, not a better novel.</p>
      <p><Link href="/compare/dot-vs-max">Echo Dot vs Echo Dot Max</Link></p>
    </div>
  );
}
