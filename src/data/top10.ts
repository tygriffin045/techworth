import { products } from "./products";
import type { Product } from "./types";

/** Ranked Top 10 per category. #1 is always the Best Overall pick. */
export const TOP10: Record<string, string[]> = {
  "headphones": [
    "xm5",
    "bose-quietcomfort-headphones-wireless-bluetooth-headphones",
    "soundcore-by-anker-q20i-hybrid-active",
    "apple-airpods-pro-3-wireless-earbuds",
    "q30",
    "xm4",
    "airpods",
    "apple-earpods-headphones-with-lightning-connector",
    "beribes-bluetooth-headphones-over-ear-wireless",
    "kvidio-bluetooth-headphones-wireless-over-ear"
  ],
  "speakers": [
    "jbl-grip-portable-bluetooth-speaker",
    "jbl-charge-6-portable-bluetooth-speaker",
    "soundcore-select-4-go-bluetooth-shower",
    "anker-soundcore-2-portable-bluetooth-speaker",
    "jbl-go-5-portable-bluetooth-speaker",
    "ortizan-x10-portable-bluetooth-speaker-1st",
    "bolabutty-bluetooth-speaker",
    "chifenchy-portable-bluetooth-speaker-gift-ideas",
    "dbsono-portable-bluetooth-speaker-line-in",
    "dosmix-retro-bluetooth-speaker-vintage-decor"
  ],
  "power": [
    "iniu-10000mah-45w-fast-charging-portable",
    "anker737",
    "cxx-4-pack-20w-usb-c",
    "nano",
    "charmast-portable-charger-power-bank-with",
    "miady-2-pack-portable-charger",
    "podoru-for-magsafe-power-bank-5000mah",
    "icseio-iphone-18-17-16-15",
    "feel2nice-iphone-charger-fast-charging",
    "dengwenqiang-2-pack-usb-c-charger"
  ],
  "storage": [
    "t7",
    "samsung-t9-portable-ssd-1tb",
    "lexar-d50e-128gb-solid-state-dual",
    "extreme",
    "crucial-x9-2tb-portable-ssd",
    "sandisk-2tb-extreme-portable-ssd",
    "lexar-es3-1tb-portable-ssd-silver",
    "sandisk-1tb-portable-ssd",
    "ssk-portable-ssd-500gb-external-solid",
    "amazon-basics-portable-external-ssd"
  ],
  "input": [
    "mx3s",
    "logitech-mx-keys-s-wireless-keyboard",
    "logitech-m185-compact-ambidextrous-2-4",
    "k2",
    "logitech-wave-keys-ergonomic-wireless-keyboard",
    "logitech-mk120-full-size-wired-keyboard",
    "amazon-basics-wired-qwerty-keyboard",
    "tecknet-wireless-mouse",
    "wegear-usb-wireless-mouse-for-laptop",
    "sablute-wireless-mouse-for-laptop"
  ],
  "webcams": [
    "logitech-c920x-hd-pro-pc-webcam",
    "logitech-mx-brio-ultra-hd-4k",
    "emeet-c960-1080p-webcam-with-microphone",
    "brio",
    "emeet-s600-4k-webcam-for-streaming",
    "logitech-c920e-hd-1080p-mic-enabled",
    "acer-a610-1080p-webcam-for-pc",
    "xweiryn-webcam-for-pc-hd-1080p"
  ],
  "monitors": [
    "dell-24-monitor-se2426h-23-8",
    "dell-27-monitor-s2725qs",
    "philips-24-inch-computer-monitor-fhd",
    "dell-27-plus-qhd-monitor-s2725dsm",
    "samsung-27-s30gd-essential-monitor-with",
    "samsung-32-odyssey",
    "sansui-34-inch-curved-gaming-monitor",
    "sceptre-27-inch-prime-gaming-monitor",
    "sansui-27-inch-curved-160hz-gaming",
    "sceptre-new-22-inch-gaming-monitor"
  ],
  "amazon-devices": [
    "dot",
    "show5",
    "amazon-fire-tv-stick-4k-select",
    "firemax",
    "dotmax",
    "ring-battery-doorbell-2k-newest-model",
    "blink-mini-2k-newest-model-plug",
    "blink-outdoor-4-and-battery-doorbell",
    "amazon-fire-tv-stick-hd-newest"
  ]
};

/** Short Top lists (7-9) allowed only with a recorded reason. Accepted by Maya (spec exception). */
export const TOP10_SHORT: Record<string, string> = {
  "webcams": "8 items: dropped the original Logitech C920 listing (no listing data on file; the C920x is its current version) and the Brio 101, a near-twin of the Brio 100; no other verified webcam listing on file",
  "amazon-devices": "9 items: dropped a second Echo Dot listing that is the same 5th-gen Dot in Charcoal; no other verified Amazon device listing on file"
};

export const PICKS: Record<string, { best: string; premium?: string; value: string }> = {
  "headphones": {
    "best": "xm5",
    "premium": "bose-quietcomfort-headphones-wireless-bluetooth-headphones",
    "value": "soundcore-by-anker-q20i-hybrid-active"
  },
  "speakers": {
    "best": "jbl-grip-portable-bluetooth-speaker",
    "premium": "jbl-charge-6-portable-bluetooth-speaker",
    "value": "soundcore-select-4-go-bluetooth-shower"
  },
  "power": {
    "best": "iniu-10000mah-45w-fast-charging-portable",
    "premium": "anker737",
    "value": "cxx-4-pack-20w-usb-c"
  },
  "storage": {
    "best": "t7",
    "premium": "samsung-t9-portable-ssd-1tb",
    "value": "lexar-d50e-128gb-solid-state-dual"
  },
  "input": {
    "best": "mx3s",
    "premium": "logitech-mx-keys-s-wireless-keyboard",
    "value": "logitech-m185-compact-ambidextrous-2-4"
  },
  "webcams": {
    "best": "logitech-c920x-hd-pro-pc-webcam",
    "premium": "logitech-mx-brio-ultra-hd-4k",
    "value": "emeet-c960-1080p-webcam-with-microphone"
  },
  "monitors": {
    "best": "dell-24-monitor-se2426h-23-8",
    "premium": "dell-27-monitor-s2725qs",
    "value": "philips-24-inch-computer-monitor-fhd"
  },
  "amazon-devices": {
    "best": "dot",
    "premium": "show5",
    "value": "amazon-fire-tv-stick-4k-select"
  }
};

const find = (s: string) => products.find((p) => p.slug === s);
export function getTopPicks(category: string): Product[] {
  return (TOP10[category] ?? []).map(find).filter((p): p is Product => Boolean(p));
}
export function getPicks(category: string) {
  const m = PICKS[category];
  if (!m) return null;
  const best = find(m.best), value = find(m.value), premium = m.premium ? find(m.premium) : undefined;
  if (!best || !value) return null;
  return { best, premium, value };
}

/** Homepage Top 10: each category's Best Overall (8), plus two deliberate extras: the headphone Premium pick
 * (the biggest-ticket buy people search for) and the laptop-class power bank. */
export const HOME_TOP10: { category: string; role: "best" | "premium" | "value" }[] = [
  { category: "headphones", role: "best" },
  { category: "speakers", role: "best" },
  { category: "power", role: "best" },
  { category: "storage", role: "best" },
  { category: "input", role: "best" },
  { category: "webcams", role: "best" },
  { category: "monitors", role: "best" },
  { category: "amazon-devices", role: "best" },
  { category: "headphones", role: "premium" },
  { category: "power", role: "premium" },
];
export function getHomeTop10() {
  return HOME_TOP10.map((h) => ({ ...h, p: find(PICKS[h.category][h.role] as string) })).filter((x): x is typeof x & { p: Product } => Boolean(x.p));
}
