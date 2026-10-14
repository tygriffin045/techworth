import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { getTopPicks, PICKS } from "@/data/top10";
import { Picks } from "@/components/Picks";
import { ProductBlock } from "@/components/ProductBlock";
import type { Product } from "@/data/types";
/** Lowercase a category name for headings, keeping proper nouns (Amazon). */
const lc = (n: string) => (/^Amazon/.test(n) ? n : n.toLowerCase());

function groups(list: Product[]) {
  const m = new Map<string, { p: Product; rank: number }[]>();
  list.forEach((p, i) => { const k = p.kind ?? "Other"; if (!m.has(k)) m.set(k, []); m.get(k)!.push({ p, rank: i + 1 }); });
  return [...m.entries()];
}
export function generateStaticParams() { return categories.map((c) => ({ slug: c.slug })); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();
  const list = getTopPicks(slug);
  const pk = PICKS[slug];
  const label = (s: string) => (s === pk?.best ? "Best Overall" : s === pk?.premium ? "Premium Pick" : s === pk?.value ? "Value Pick" : undefined);
  return <div>
    <h1>{cat.name}</h1>
    <p className="note">{cat.desc}</p>
    <p className="giftlink">Holiday gift guide: <Link href="/guides/gifts-for-tech-lovers">Gifts for tech lovers →</Link></p>
    <Picks category={slug} />
    <h2>Top {list.length}: {lc(cat.name)}</h2>
    {list.some((p) => p.kind) ? groups(list).map(([k, items]) => <section key={k}>
      <h3>{k}</h3>
      <div className="list">{items.map(({ p, rank }) => <ProductBlock key={p.slug} p={p} rank={rank} label={label(p.slug)} />)}</div>
    </section>) : <div className="list">{list.map((p) => <ProductBlock key={p.slug} p={p} label={label(p.slug)} />)}</div>}
  </div>;
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  return { title: cat ? `Best ${lc(cat.name)}` : undefined, description: cat?.desc, alternates: { canonical: `/categories/${slug}` } };
}
