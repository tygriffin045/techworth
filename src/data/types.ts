export type CategorySlug = "headphones" | "speakers" | "power" | "storage" | "input" | "webcams" | "monitors" | "amazon-devices";
export type BudgetTier = "$" | "$$" | "$$$";
export interface Product {
  slug: string;
  name: string;
  brand: string;
  category: CategorySlug;
  tagline: string;
  summary: string;
  /** Budget tier from internal per-category thresholds. Never show prices. */
  tier: BudgetTier;
  pros: string[];
  cons: string[];
  whoItsFor: string;
  amazonAsin: string;
  imageUrl?: string;
}
export interface Category { slug: CategorySlug; name: string; desc: string }
