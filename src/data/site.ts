export const MARK = "Tech";
export const SITE = "TechWorth";
export const DOMAIN = "https://tech.theworthguide.com";
export const TAG = "techworth20-20";
export const TITLE = "TechWorth — Honest picks for everyday tech";
export const DESC = "A Top 10 per category of everyday tech people already buy, with clear picks and no prices.";
export { products } from "./products";
export { categories } from "./categories";
import type { Product } from "./types";
import { affiliateUrl } from "@/lib/affiliate";
export type { Product };
export const compares = [
  { slug: "airpods-vs-xm5", title: "AirPods Pro 2 vs XM5", verdict: "AirPods if the phone is an iPhone. XM5 if you want the bigger cancel.", products: ["airpods", "xm5"], rows: [["Style", "Earbuds", "Over-ear"], ["Budget tier", "$$$", "$$$"], ["Best for", "iPhone", "Travel"]] },
  { slug: "xm5-vs-q30", title: "XM5 vs Life Q30", verdict: "XM5 if you can spend it. Q30 if you cannot.", products: ["xm5", "q30"], rows: [["Noise cancelling", "Better", "Good"], ["Budget tier", "$$$", "$$"]] },
  { slug: "xm5-vs-xm4", title: "XM5 vs XM4", verdict: "XM5 for the newer model. XM4 if the gap between them is large.", products: ["xm5", "xm4"], rows: [["Year", "2022", "2020"], ["Budget tier", "$$$", "$$$"]] },
  { slug: "dot-vs-max", title: "Echo Dot vs Dot Max", verdict: "Dot for a bedroom. Max for the main room.", products: ["dot", "dotmax"], rows: [["Year", "2022", "2025"], ["Job", "Small speaker", "Louder speaker and hub"], ["Budget tier", "$$", "$$$"]] },
  { slug: "t7-vs-extreme", title: "T7 vs SanDisk Extreme", verdict: "T7 if you want small. Extreme if it lives in a bag.", products: ["t7", "extreme"], rows: [["Carabiner loop", "No", "Yes"], ["Budget tier", "$$$", "$$$"]] },
  { slug: "c920-vs-brio", title: "C920x vs Brio 100", verdict: "Brio 100 if the shutter matters. C920x if you want autofocus and stereo mics.", products: ["logitech-c920x-hd-pro-pc-webcam", "brio"], rows: [["Autofocus", "Yes", "No"], ["Privacy shutter", "No", "Yes"], ["Budget tier", "$$", "$$"]] },
];
export function url(p: Product) { return affiliateUrl(p.amazonAsin); }
