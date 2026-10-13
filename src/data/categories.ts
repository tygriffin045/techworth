import type { Category } from "./types";
export const categories: Category[] = [
  {
    "slug": "headphones",
    "name": "Headphones and earbuds",
    "desc": "ANC headphones and earbuds worth the money."
  },
  {
    "slug": "speakers",
    "name": "Speakers",
    "desc": "A speaker for the room, not a phone speaker."
  },
  {
    "slug": "power",
    "name": "Power",
    "desc": "Chargers and power banks."
  },
  {
    "slug": "storage",
    "name": "Storage",
    "desc": "Portable drives."
  },
  {
    "slug": "input",
    "name": "Desk input",
    "desc": "Keyboards, mice, and the mic."
  },
  {
    "slug": "webcams",
    "name": "Webcams",
    "desc": "Calls and streaming, without a separate camera."
  },
  {
    "slug": "monitors",
    "name": "Monitors",
    "desc": "A second screen that is worth the desk space."
  },
  {
    "slug": "amazon-devices",
    "name": "Amazon devices",
    "desc": "Echo, Fire TV, and Kindle, newest to older."
  }
];
export function getCategory(slug: string) { return categories.find((c) => c.slug === slug); }
