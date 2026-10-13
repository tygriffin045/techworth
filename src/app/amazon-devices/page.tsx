import Link from "next/link";
import { getTopPicks, PICKS } from "@/data/top10";
import { Picks } from "@/components/Picks";
import { ProductBlock } from "@/components/ProductBlock";

export const metadata = { title: "Amazon devices", alternates: { canonical: "/amazon-devices" } };

export default function Page() {
  const list = getTopPicks("amazon-devices");
  const pk = PICKS["amazon-devices"];
  const label = (s: string) => (s === pk?.best ? "Best Overall" : s === pk?.premium ? "Premium Pick" : s === pk?.value ? "Value Pick" : undefined);
  return (
    <div>
      <h1>Amazon devices, newest to oldest</h1>
      <p>Echo, Fire TV, Ring and Blink, with the difference that matters. A newer model is not automatically the one to buy.</p>
      <Picks category="amazon-devices" />
      <h2>What changed</h2>
      <table>
        <tbody>
          <tr><th>2025</th><td>Echo Dot Max</td><td>Louder Dot with a built-in smart-home hub. Buy it for the main room.</td></tr>
          <tr><th>2022</th><td>Echo Dot, 5th gen</td><td>The bedroom speaker. This is the one most people should buy.</td></tr>
          <tr><th>2023</th><td>Fire TV Stick 4K Max, 2nd gen</td><td>16 GB and Wi-Fi 6E. The current top stick.</td></tr>
        </tbody>
      </table>
      <h2>Top {list.length}: Amazon devices</h2>
      <div className="list">{list.map((p) => <ProductBlock key={p.slug} p={p} label={label(p.slug)} />)}</div>
      <p><Link href="/compare/dot-vs-max">Echo Dot vs Echo Dot Max</Link> · <Link href="/categories/amazon-devices">Amazon devices category</Link></p>
    </div>
  );
}
