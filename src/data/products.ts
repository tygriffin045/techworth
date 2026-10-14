import type { Product } from "./types";

// Tiers come from internal per-category thresholds (scripts/tier-prices.json); prices are never stored or shown here.
export const products: Product[] = [
  {
    "slug": "xm5",
    "name": "Sony WH-1000XM5",
    "brand": "Sony",
    "category": "headphones",
    "tagline": "Over-ear noise cancelling for flights and open offices",
    "summary": "The Sony WH-1000XM5 is our Best Overall pick for headphones. It's an over-ear wireless pair with eight microphones driving the noise cancelling, which adjusts itself to fit and surroundings. Sony lists up to 30 hours of battery, a 3-minute quick charge for about 3 hours of play, multipoint pairing and a carry case.",
    "tier": "$$$",
    "pros": [
      "Noise cancelling that adapts to fit and surroundings, per Sony",
      "Up to 30 hours of battery, per the listing",
      "Multipoint pairing with two devices",
      "Carry case included"
    ],
    "cons": [
      "One of the pricier pairs here",
      "Doesn't fold flat as compactly as some rivals"
    ],
    "whoItsFor": "Frequent flyers and anyone working in a loud room who wants the quietest over-ear pair.",
    "amazonAsin": "B09XS7JWHH",
    "imageUrl": "/products/B09XS7JWHH.jpg"
  },
  {
    "slug": "bose-quietcomfort-headphones-wireless-bluetooth-headphones",
    "name": "Bose QuietComfort Headphones",
    "brand": "Bose",
    "category": "headphones",
    "tagline": "Bose's over-ear noise cancelling pair with Quiet and Aware modes",
    "summary": "The Bose QuietComfort Headphones are our Premium pick for headphones. They're an over-ear noise cancelling pair with plush cushions, Quiet and Aware modes, adjustable EQ, USB-C charging and a built-in mic. Bose lists up to 24 hours of playtime.",
    "tier": "$$$",
    "pros": [
      "Quiet and Aware modes for full cancelling or full awareness",
      "Plush cushions for long sessions",
      "Adjustable bass, mid and treble EQ",
      "Up to 24 hours of playtime, per the listing"
    ],
    "cons": [
      "The most expensive pair on this list",
      "Shorter listed battery life than the Sony XM5"
    ],
    "whoItsFor": "Buyers who want a premium over-ear pair and prefer Bose's fit.",
    "amazonAsin": "B0DZHR44J9",
    "imageUrl": "/products/B0DZHR44J9.jpg"
  },
  {
    "slug": "soundcore-by-anker-q20i-hybrid-active",
    "name": "Soundcore Q20i",
    "brand": "Soundcore",
    "category": "headphones",
    "tagline": "The lowest-cost hybrid noise cancelling pair here",
    "summary": "The Soundcore Q20i is our Value pick for headphones. It's an over-ear pair with hybrid noise cancelling from four mics, 40mm drivers with BassUp, and an app with EQ presets. Soundcore lists 40 hours with noise cancelling on and 60 hours in normal mode, plus connection to two devices at once.",
    "tier": "$",
    "pros": [
      "Hybrid noise cancelling for a low price",
      "Up to 40 hours with noise cancelling on, per the listing",
      "Connects to two devices at once",
      "App EQ with presets"
    ],
    "cons": [
      "Noise cancelling is a clear step below the premium pairs",
      "Older Bluetooth 5.0 radio"
    ],
    "whoItsFor": "Anyone who wants noise cancelling on the smallest budget.",
    "amazonAsin": "B0C3HCD34R",
    "imageUrl": "/products/B0C3HCD34R.jpg"
  },
  {
    "slug": "apple-airpods-pro-3-wireless-earbuds",
    "name": "Apple AirPods Pro 3",
    "brand": "Apple",
    "category": "headphones",
    "tagline": "Noise cancelling earbuds built around the iPhone",
    "summary": "The AirPods Pro 3 are Apple's noise cancelling earbuds. Apple lists up to 2x the noise cancelling of the AirPods Pro 2, heart rate sensing for workouts, Live Translation with Apple Intelligence, and up to 8 hours of listening with noise cancelling on.",
    "tier": "$$$",
    "pros": [
      "Active noise cancelling in a pocketable case",
      "Heart rate sensing for workouts with an iPhone",
      "Smoothest pairing with Apple devices"
    ],
    "cons": [
      "Many features need an iPhone",
      "Earbuds can tire some ears over very long sessions"
    ],
    "whoItsFor": "iPhone owners who want noise cancelling without carrying headphones.",
    "amazonAsin": "B0FQFB8FMG",
    "imageUrl": "/products/B0FQFB8FMG.jpg"
  },
  {
    "slug": "q30",
    "name": "Soundcore Life Q30",
    "brand": "Soundcore",
    "category": "headphones",
    "tagline": "Budget over-ear pair with three noise cancelling modes",
    "summary": "The Soundcore Life Q30 is a budget over-ear pair with hybrid noise cancelling and three modes for transport, outdoor and indoor noise. Soundcore lists up to 50 hours of play with noise cancelling on, 70 hours in standard mode, and memory-foam earcups.",
    "tier": "$$",
    "pros": [
      "Hybrid noise cancelling with transport, outdoor and indoor modes",
      "Up to 50 hours with noise cancelling on, per the listing",
      "Memory-foam earcups"
    ],
    "cons": [
      "A step down from Sony and Bose in cancelling and build",
      "Bulkier than earbuds"
    ],
    "whoItsFor": "Commuters and students who want real noise cancelling without flagship money.",
    "amazonAsin": "B08HMWZBXC",
    "imageUrl": "/products/B08HMWZBXC.jpg"
  },
  {
    "slug": "xm4",
    "name": "Sony WH-1000XM4",
    "brand": "Sony",
    "category": "headphones",
    "tagline": "The previous Sony flagship, worth it when it's cheaper than the XM5",
    "summary": "The Sony WH-1000XM4 is the previous Sony flagship. Sony lists Dual Noise Sensor noise cancelling, up to 30 hours of battery with a 10-minute charge for 5 hours, touch controls, Speak-to-Chat and five mics for calls.",
    "tier": "$$$",
    "pros": [
      "Strong noise cancelling from the previous Sony flagship, per Sony",
      "Up to 30 hours of battery, per the listing",
      "Speak-to-Chat lowers volume when you talk"
    ],
    "cons": [
      "Older generation than the XM5",
      "Only worth it when it costs clearly less than the XM5"
    ],
    "whoItsFor": "Buyers who find the XM4 well below the XM5's price.",
    "amazonAsin": "B0863TXGM3",
    "imageUrl": "/products/B0863TXGM3.jpg"
  },
  {
    "slug": "airpods",
    "name": "Apple AirPods Pro 2 (USB-C)",
    "brand": "Apple",
    "category": "headphones",
    "tagline": "The previous AirPods Pro, with a USB-C case",
    "summary": "The AirPods Pro 2 with a USB-C case are the previous generation of Apple's noise cancelling earbuds. Apple lists the H2 chip, up to 2x the noise cancelling of the first generation, Transparency and Adaptive Audio modes, and four sizes of silicone tips.",
    "tier": "$$$",
    "pros": [
      "Active noise cancelling and Transparency mode",
      "Four tip sizes, XS to L",
      "Same Apple-device pairing as the Pro 3"
    ],
    "cons": [
      "Older generation than the Pro 3",
      "Not always cheaper than the Pro 3"
    ],
    "whoItsFor": "iPhone owners who find a real discount on the older model.",
    "amazonAsin": "B0CHWRXH8B",
    "imageUrl": "/products/B0CHWRXH8B.jpg"
  },
  {
    "slug": "apple-earpods-headphones-with-lightning-connector",
    "name": "Apple EarPods (Lightning)",
    "brand": "Apple",
    "category": "headphones",
    "tagline": "Apple's wired earbuds with a Lightning plug",
    "summary": "Apple EarPods with Lightning Connector are wired earbuds with a built-in remote and mic. They plug into Lightning iPhones and iPads, need no charging, and handle calls, Siri and playback controls.",
    "tier": "$",
    "pros": [
      "Nothing to charge or pair",
      "Built-in remote and mic for calls",
      "Inexpensive spare pair"
    ],
    "cons": [
      "Lightning only, so no good for USB-C iPhones",
      "No noise cancelling or seal"
    ],
    "whoItsFor": "Owners of Lightning iPhones who want a cheap, reliable wired pair.",
    "amazonAsin": "B0D7FVQ1ZB",
    "imageUrl": "/products/B0D7FVQ1ZB.jpg"
  },
  {
    "slug": "beribes-bluetooth-headphones-over-ear-wireless",
    "name": "BERIBES Bluetooth Over-Ear Headphones",
    "brand": "BERIBES",
    "category": "headphones",
    "tagline": "Cheap wireless over-ear pair with a long battery",
    "summary": "The BERIBES headphones are a low-cost wireless over-ear pair with 40mm drivers, six EQ modes and a mic. BERIBES lists more than 65 hours of play, Bluetooth 6.0 and a 3.5mm cable for wired use.",
    "tier": "$",
    "pros": [
      "More than 65 hours of play, per the listing",
      "Six EQ modes",
      "Folds, and includes a 3.5mm cable"
    ],
    "cons": [
      "No noise cancelling",
      "Budget build and sound"
    ],
    "whoItsFor": "Kids, students or a spare pair where price matters most.",
    "amazonAsin": "B09LYF2ST7",
    "imageUrl": "/products/B09LYF2ST7.jpg"
  },
  {
    "slug": "kvidio-bluetooth-headphones-wireless-over-ear",
    "name": "KVIDIO Bluetooth Over-Ear Headphones",
    "brand": "KVIDIO",
    "category": "headphones",
    "tagline": "Budget wireless over-ear pair with memory-foam cups",
    "summary": "The KVIDIO headphones are a budget wireless over-ear pair with 40mm drivers, memory-protein foam cups and a mic. KVIDIO lists 65 hours of play, Bluetooth 6.0 with about 33 feet of range, and a backup 3.5mm cable.",
    "tier": "$",
    "pros": [
      "Long listed playtime of 65 hours",
      "Memory-protein foam cups",
      "Backup 3.5mm cable included"
    ],
    "cons": [
      "No noise cancelling",
      "Budget build and sound"
    ],
    "whoItsFor": "Anyone who wants a cheap wireless pair for casual listening.",
    "amazonAsin": "B09BF64J55",
    "imageUrl": "/products/B09BF64J55.jpg"
  },
  {
    "slug": "jbl-grip-portable-bluetooth-speaker",
    "name": "JBL Grip",
    "brand": "JBL",
    "category": "speakers",
    "tagline": "One-hand JBL speaker with an IP68 body and ambient light",
    "summary": "The JBL Grip is our Best Overall pick for speakers. It's a one-hand portable speaker with AI Sound Boost, an IP68 waterproof and dustproof body rated for 1-meter drops onto concrete, and a back-panel ambient light. JBL lists 12 hours of battery plus 2 more with Playtime Boost, and Auracast pairing with other JBL speakers.",
    "tier": "$$",
    "pros": [
      "IP68 waterproof and dustproof, per the listing",
      "Up to 14 hours with Playtime Boost, per the listing",
      "Auracast stereo pairing with a second Grip",
      "App-controlled ambient light"
    ],
    "cons": [
      "Smaller sound than the Charge 6",
      "No power bank output"
    ],
    "whoItsFor": "Most people who want a tough, good-sounding speaker that goes anywhere.",
    "amazonAsin": "B0FKVSH438",
    "imageUrl": "/products/B0FKVSH438.jpg"
  },
  {
    "slug": "jbl-charge-6-portable-bluetooth-speaker",
    "name": "JBL Charge 6",
    "brand": "JBL",
    "category": "speakers",
    "tagline": "Bigger JBL speaker with a long battery and a power bank",
    "summary": "The JBL Charge 6 is our Premium pick for speakers. It's a larger IP68 speaker built to survive 1-meter drops and submersion, per the listing, with AI Sound Boost and Auracast pairing. JBL lists 24 hours of battery plus 4 more with Playtime Boost, fast charging and a built-in power bank for a phone.",
    "tier": "$$$",
    "pros": [
      "Up to 28 hours with Playtime Boost, per the listing",
      "Built-in power bank for a phone",
      "IP68 waterproof and drop-proof, per the listing",
      "Auracast multi-speaker pairing"
    ],
    "cons": [
      "The most expensive speaker here",
      "Heavier than a one-hand speaker"
    ],
    "whoItsFor": "Beach days, camping and parties where battery and volume matter.",
    "amazonAsin": "B0DN2ZCZX6",
    "imageUrl": "/products/B0DN2ZCZX6.jpg"
  },
  {
    "slug": "soundcore-select-4-go-bluetooth-shower",
    "name": "Soundcore Select 4 Go",
    "brand": "Soundcore",
    "category": "speakers",
    "tagline": "Tiny IP67 speaker that floats",
    "summary": "The Soundcore Select 4 Go is our Value pick for speakers. It's a small strap-on speaker rated IP67 that floats, per the listing, and survives 30 minutes under 3.3 feet of water. Soundcore lists 20 hours of playback, 5W output and stereo pairing with a second unit.",
    "tier": "$",
    "pros": [
      "IP67 and floats, per the listing",
      "Up to 20 hours of playback, per the listing",
      "Strap for showers, bikes and bags",
      "Stereo pairing with a second unit"
    ],
    "cons": [
      "Small 5W output, so not a room-filler",
      "Light on bass"
    ],
    "whoItsFor": "Shower, desk or bike use on a small budget.",
    "amazonAsin": "B0DB1753RZ",
    "imageUrl": "/products/B0DB1753RZ.jpg"
  },
  {
    "slug": "anker-soundcore-2-portable-bluetooth-speaker",
    "name": "Anker Soundcore 2",
    "brand": "Soundcore",
    "category": "speakers",
    "tagline": "Long-running IPX7 speaker with BassUp",
    "summary": "The Anker Soundcore 2 is a classic budget speaker with 12W dual drivers, BassUp and an IPX7 waterproof rating. Anker lists a 5,200mAh battery good for about 24 hours and wireless stereo pairing.",
    "tier": "$$",
    "pros": [
      "About 24 hours of play, per the listing",
      "IPX7 waterproof, per the listing",
      "Stereo pairing with a second unit"
    ],
    "cons": [
      "Older design without an app",
      "Not dustproof like the JBL IP68 models"
    ],
    "whoItsFor": "Anyone who wants a dependable all-day speaker for the money.",
    "amazonAsin": "B01MTB55WH",
    "imageUrl": "/products/B01MTB55WH.jpg"
  },
  {
    "slug": "jbl-go-5-portable-bluetooth-speaker",
    "name": "JBL Go 5",
    "brand": "JBL",
    "category": "speakers",
    "tagline": "Palm-sized JBL speaker with an IP68 body",
    "summary": "The JBL Go 5 is JBL's palm-sized speaker with an IP68 waterproof, dustproof and drop-proof body and ambient edge lighting. JBL lists 8 hours of battery plus 2 more with Playtime Boost, and AirTouch stereo pairing with a second Go 5.",
    "tier": "$$",
    "pros": [
      "IP68 waterproof and drop-proof, per the listing",
      "Small enough for a pocket or bag",
      "Bump-to-pair stereo with a second Go 5"
    ],
    "cons": [
      "Short listed battery of 8 to 10 hours",
      "Small speaker, small bass"
    ],
    "whoItsFor": "Travelers who want a tiny speaker that shrugs off water and drops.",
    "amazonAsin": "B0GHYJ7BS9",
    "imageUrl": "/products/B0GHYJ7BS9.jpg"
  },
  {
    "slug": "ortizan-x10-portable-bluetooth-speaker-1st",
    "name": "Ortizan X10",
    "brand": "Ortizan",
    "category": "speakers",
    "tagline": "24W stereo speaker with an RGB light show",
    "summary": "The Ortizan X10 is a 24W stereo speaker with two passive radiators, an RGB light show and an IPX7 rating, per the listing. Ortizan lists up to 30 hours of play at moderate volume, a built-in mic for calls and Bluetooth 5.3.",
    "tier": "$$",
    "pros": [
      "24W stereo drivers, per the listing",
      "Up to 30 hours at moderate volume, per the listing",
      "IPX7 waterproof, per the listing"
    ],
    "cons": [
      "Lesser-known brand",
      "Light show isn't for everyone"
    ],
    "whoItsFor": "Parties and backyards where louder sound for less matters.",
    "amazonAsin": "B08FDPW8KR",
    "imageUrl": "/products/B08FDPW8KR.jpg"
  },
  {
    "slug": "bolabutty-bluetooth-speaker",
    "name": "BolaButty Bluetooth Speaker",
    "brand": "BolaButty",
    "category": "speakers",
    "tagline": "20W budget speaker with party lights",
    "summary": "The BolaButty speaker is a budget 20W unit with two drivers, an IPX5 splash rating and a multi-color light show, per the listing. It lists up to 24 hours at half volume with lights off, Bluetooth 5.3 and stereo pairing.",
    "tier": "$",
    "pros": [
      "20W output for the price, per the listing",
      "Up to 24 hours at half volume, per the listing",
      "Stereo pairing with a second unit"
    ],
    "cons": [
      "IPX5 is splash-resistant only",
      "Lesser-known brand"
    ],
    "whoItsFor": "Budget buyers who want a louder speaker with lights.",
    "amazonAsin": "B0BRKPVZB4",
    "imageUrl": "/products/B0BRKPVZB4.jpg"
  },
  {
    "slug": "chifenchy-portable-bluetooth-speaker-gift-ideas",
    "name": "CHIFENCHY Portable Bluetooth Speaker",
    "brand": "CHIFENCHY",
    "category": "speakers",
    "tagline": "Small 15W speaker with a lanyard and LED lights",
    "summary": "The CHIFENCHY speaker is a compact 15W speaker with a lanyard, LED lights and an IPX5 splash rating. It lists up to 15 hours of play and weighs about 0.58 lb.",
    "tier": "$",
    "pros": [
      "Compact and light with a lanyard",
      "Up to 15 hours of play, per the listing",
      "LED light effects"
    ],
    "cons": [
      "IPX5 is splash-resistant only",
      "Shorter battery than similar-priced picks"
    ],
    "whoItsFor": "A small, cheap speaker for a bag or a gift.",
    "amazonAsin": "B0CX1FRR27",
    "imageUrl": "/products/B0CX1FRR27.jpg"
  },
  {
    "slug": "dbsono-portable-bluetooth-speaker-line-in",
    "name": "DBSONO Portable Bluetooth Speaker",
    "brand": "DBSONO",
    "category": "speakers",
    "tagline": "Low-cost speaker with a line-in jack",
    "summary": "The DBSONO speaker is a low-cost portable with a line-in jack, stereo pairing, an IPX5 splash rating and a light show. It lists up to 24 hours at 30% volume with lights off and weighs about 0.69 lb.",
    "tier": "$",
    "pros": [
      "Line-in jack for wired sources",
      "Up to 24 hours at low volume, per the listing",
      "Stereo pairing with a second unit"
    ],
    "cons": [
      "Battery figure is at 30% volume",
      "IPX5 is splash-resistant only"
    ],
    "whoItsFor": "Anyone who wants a cheap speaker that also takes a wired input.",
    "amazonAsin": "B0F998HYS5",
    "imageUrl": "/products/B0F998HYS5.jpg"
  },
  {
    "slug": "dosmix-retro-bluetooth-speaker-vintage-decor",
    "name": "Dosmix Retro Bluetooth Speaker",
    "brand": "Dosmix",
    "category": "speakers",
    "tagline": "Retro-styled mini speaker for a shelf or desk",
    "summary": "The Dosmix Retro speaker is a small vintage-styled speaker about 3.9 by 2.2 by 2.8 inches. It plays over Bluetooth 5.0, AUX, TF card or USB, and is built more as decor for a desk or nightstand than for outdoors.",
    "tier": "$",
    "pros": [
      "Retro look that works as decor",
      "Bluetooth, AUX, TF card and USB playback",
      "Very small footprint"
    ],
    "cons": [
      "No water resistance listed",
      "Small sound"
    ],
    "whoItsFor": "A gift or a desk speaker where looks matter more than volume.",
    "amazonAsin": "B09LQJBCT7",
    "imageUrl": "/products/B09LQJBCT7.jpg"
  },
  {
    "slug": "iniu-10000mah-45w-fast-charging-portable",
    "name": "INIU 10000mAh 45W Power Bank",
    "brand": "INIU",
    "category": "power",
    "tagline": "Small fast-charging power bank for a phone",
    "summary": "The INIU 10000mAh 45W is our Best Overall pick for power. It's a compact power bank rated at 45W, per the listing, which INIU says is 40% smaller than a typical 10,000mAh pack. It comes with a swappable braided USB-C cable and is listed as TSA-compliant for carry-on.",
    "tier": "$$",
    "pros": [
      "45W fast charging, per the listing",
      "Small 10,000mAh travel size, per the listing",
      "Detachable cable you can replace",
      "Listed as airline carry-on compliant"
    ],
    "cons": [
      "Not enough for laptop charging",
      "Short 0.4 ft cable"
    ],
    "whoItsFor": "Most people who want a phone topped up by the end of the day.",
    "amazonAsin": "B0CB1FW5FC",
    "kind": "Power banks",
    "imageUrl": "/products/B0CB1FW5FC.jpg"
  },
  {
    "slug": "anker737",
    "name": "Anker 737 Power Bank",
    "brand": "Anker",
    "category": "power",
    "tagline": "Laptop-class power bank with a smart display",
    "summary": "The Anker 737 is our Premium pick for power. It's a 24,000mAh power bank rated at 140W, per the listing, with Power Delivery 3.1, three ports and a smart display showing input, output and recharge time. It's listed as airline carry-on compliant and weighs about 22 oz.",
    "tier": "$$$",
    "pros": [
      "Rated 140W, enough for many USB-C laptops, per the listing",
      "24,000mAh capacity, per the listing",
      "Smart display with live input and output",
      "Matching USB-C cable and travel pouch included"
    ],
    "cons": [
      "Heavy for a pocket at about 22 oz",
      "Overkill if you only charge a phone"
    ],
    "whoItsFor": "Travelers who need to charge a laptop, not just a phone.",
    "amazonAsin": "B09VPHVT2Z",
    "kind": "Power banks",
    "imageUrl": "/products/B09VPHVT2Z.jpg"
  },
  {
    "slug": "cxx-4-pack-20w-usb-c",
    "name": "CXX 20W USB-C Charger (4-pack)",
    "brand": "CXX",
    "category": "power",
    "tagline": "Four dual-port wall chargers for every room",
    "summary": "The CXX 4-pack is our Value pick for power: four small wall chargers, each with a USB-C port rated at 20W and a USB-A port rated at 18W, per the listing. They list TUV safety conformance with temperature, overvoltage and overcurrent protection.",
    "tier": "$",
    "pros": [
      "Four chargers for a low price",
      "20W USB-C plus 18W USB-A on each, per the listing",
      "Works with iPhone and Android"
    ],
    "cons": [
      "No cables included",
      "Not enough for a laptop"
    ],
    "whoItsFor": "Households that want a spare charger in every room and bag.",
    "amazonAsin": "B0B2WLSY9D",
    "kind": "Wall chargers",
    "imageUrl": "/products/B0B2WLSY9D.jpg"
  },
  {
    "slug": "nano",
    "name": "Anker 735 Nano II 65W Charger",
    "brand": "Anker",
    "category": "power",
    "tagline": "Compact three-port GaN wall charger for a laptop and phone",
    "summary": "The Anker 735 (Nano II 65W) is a three-port GaN wall charger about the size of an AirPods Pro case. Anker rates it at 65W from one port, per the listing, enough for a 13-inch MacBook Pro, and splits power when three devices are plugged in.",
    "tier": "$$",
    "pros": [
      "65W from one port, per the listing",
      "Charges three devices at once",
      "Small, foldable plug"
    ],
    "cons": [
      "Power drops per port with three devices connected",
      "No cable included"
    ],
    "whoItsFor": "Laptop owners who want one charger for a laptop, phone and earbuds.",
    "amazonAsin": "B09C5RG6KV",
    "kind": "Wall chargers",
    "imageUrl": "/products/B09C5RG6KV.jpg"
  },
  {
    "slug": "charmast-portable-charger-power-bank-with",
    "name": "charmast Power Bank with Built-in Cables",
    "brand": "charmast",
    "category": "power",
    "tagline": "Slim power bank that carries its own cables",
    "summary": "The charmast power bank is a slim 10,000mAh pack, per the listing, with built-in USB-C, Lightning and Micro-USB cables plus three extra ports, so it can charge up to six devices. It weighs about 9.2 oz.",
    "tier": "$$",
    "pros": [
      "Built-in cables for USB-C, Lightning and Micro-USB",
      "Charges up to six devices, per the listing",
      "Slim enough for a pocket"
    ],
    "cons": [
      "Built-in cables can wear out over time",
      "No fast-charging rating listed"
    ],
    "whoItsFor": "People who always forget cables, or share power with friends.",
    "amazonAsin": "B0H2YM86Z9",
    "kind": "Power banks",
    "imageUrl": "/products/B0H2YM86Z9.jpg"
  },
  {
    "slug": "miady-2-pack-portable-charger",
    "name": "Miady 10000mAh Power Bank (2-pack)",
    "brand": "Miady",
    "category": "power",
    "tagline": "Two slim power banks for the price of one",
    "summary": "The Miady 2-pack gets you two slim 10,000mAh power banks, per the listing, each with USB-C input and output and room for three devices at once. Each measures about 5.5 by 2.6 by 0.6 inches.",
    "tier": "$$",
    "pros": [
      "Two 10,000mAh banks in one purchase, per the listing",
      "USB-C in and out",
      "Charges three devices at once"
    ],
    "cons": [
      "No fast-charging wattage listed",
      "Basic build"
    ],
    "whoItsFor": "Couples, families or a spare for the car.",
    "amazonAsin": "B0GQH1QHDH",
    "kind": "Power banks",
    "imageUrl": "/products/B0GQH1QHDH.jpg"
  },
  {
    "slug": "podoru-for-magsafe-power-bank-5000mah",
    "name": "podoru MagSafe Power Bank 5000mAh",
    "brand": "podoru",
    "category": "power",
    "tagline": "Ultra-slim magnetic pack for MagSafe iPhones",
    "summary": "The podoru is an ultra-slim 5,000mAh magnetic power bank, per the listing, for MagSafe iPhones. It snaps to the back of the phone, charges wirelessly at up to 15W and has a 20W USB-C port.",
    "tier": "$$",
    "pros": [
      "Snaps onto MagSafe iPhones, no cable needed",
      "Up to 15W wireless, per the listing",
      "Pocket-sized"
    ],
    "cons": [
      "A top-up, not a full recharge for big phones",
      "Needs a MagSafe case or no case to hold"
    ],
    "whoItsFor": "MagSafe iPhone owners who want a quick boost without a cable.",
    "amazonAsin": "B0CSW947RH",
    "kind": "Power banks",
    "imageUrl": "/products/B0CSW947RH.jpg"
  },
  {
    "slug": "icseio-iphone-18-17-16-15",
    "name": "Icseio 20W USB-C iPhone Charger (2-pack)",
    "brand": "Icseio",
    "category": "power",
    "tagline": "Two USB-C chargers with 6 ft cables",
    "summary": "The Icseio 2-pack includes two 20W USB-C wall chargers and two 6 ft USB-C to USB-C cables, per the listing. It's aimed at USB-C iPhones and iPads, with overvoltage and overheat protection listed.",
    "tier": "$",
    "pros": [
      "Two chargers and two 6 ft cables",
      "20W USB-C fast charging, per the listing",
      "Works with USB-C iPhones and iPads"
    ],
    "cons": [
      "Single port per charger",
      "Not enough for a laptop"
    ],
    "whoItsFor": "USB-C iPhone owners who need chargers and long cables in one box.",
    "amazonAsin": "B0C69HB8PM",
    "kind": "Wall chargers",
    "imageUrl": "/products/B0C69HB8PM.jpg"
  },
  {
    "slug": "feel2nice-iphone-charger-fast-charging",
    "name": "FEEL2NICE Lightning iPhone Charger (2-pack)",
    "brand": "FEEL2NICE",
    "category": "power",
    "tagline": "Chargers with long Lightning cables for older iPhones",
    "summary": "The FEEL2NICE pack has two USB-C wall chargers with 6 ft and 10 ft USB-C to Lightning cables. The listing rates the chargers at 12W and says they're not compatible with iPhone 15 and 16 models, so they suit iPhone 14 and older.",
    "tier": "$",
    "pros": [
      "6 ft and 10 ft Lightning cables",
      "Two chargers in the pack",
      "Good for bedside use with older iPhones"
    ],
    "cons": [
      "Lightning only, no good for iPhone 15 or newer",
      "Slower 12W charging, per the listing"
    ],
    "whoItsFor": "Owners of Lightning iPhones who want long cables.",
    "amazonAsin": "B0B283QP2N",
    "kind": "Wall chargers",
    "imageUrl": "/products/B0B283QP2N.jpg"
  },
  {
    "slug": "dengwenqiang-2-pack-usb-c-charger",
    "name": "Dual-Port USB-C Charger Block (2-pack)",
    "brand": "Generic",
    "category": "power",
    "tagline": "Two cheap dual-port charging cubes",
    "summary": "This 2-pack of dual-port wall chargers gives each cube one USB-C and one USB-A port, so older and newer cables both work. The listing describes overheat and overvoltage protection but doesn't state a wattage.",
    "tier": "$",
    "pros": [
      "Lowest cost on the list",
      "USB-C and USB-A on each cube",
      "Two cubes for home and work"
    ],
    "cons": [
      "No wattage listed",
      "No cables included",
      "Unbranded"
    ],
    "whoItsFor": "Anyone who just needs spare charging cubes for phones.",
    "amazonAsin": "B0CPSBD68W",
    "kind": "Wall chargers",
    "imageUrl": "/products/B0CPSBD68W.jpg"
  },
  {
    "slug": "t7",
    "name": "Samsung T7 1TB",
    "brand": "Samsung",
    "category": "storage",
    "tagline": "Small metal portable SSD from a big brand",
    "summary": "The Samsung T7 1TB is our Best Overall pick for storage. It's a pocket-sized portable SSD rated up to 1,050MB/s read and 1,000MB/s write, per the listing, over USB 3.2 Gen 2. Samsung says it can record 4K 60fps video directly from compatible cameras and iPhones.",
    "tier": "$$$",
    "pros": [
      "Up to 1,050MB/s read, per the listing",
      "Small metal body",
      "Works with PCs, Macs, phones and cameras"
    ],
    "cons": [
      "No water resistance listed",
      "Slower than the T9"
    ],
    "whoItsFor": "Most people who want a fast, reliable drive for backups and files.",
    "amazonAsin": "B0874XN4D8",
    "imageUrl": "/products/B0874XN4D8.jpg"
  },
  {
    "slug": "samsung-t9-portable-ssd-1tb",
    "name": "Samsung T9 1TB",
    "brand": "Samsung",
    "category": "storage",
    "tagline": "Samsung's fastest portable SSD",
    "summary": "The Samsung T9 1TB is our Premium pick for storage. It's rated up to 2,000MB/s over USB 3.2 Gen 2x2, per the listing, with a thermal design meant to hold speed during long transfers. Samsung's Magician software handles firmware, encryption and drive health.",
    "tier": "$$$",
    "pros": [
      "Up to 2,000MB/s on a Gen 2x2 port, per the listing",
      "Holds speed during long transfers",
      "Magician software for health and encryption"
    ],
    "cons": [
      "Needs a USB 3.2 Gen 2x2 port to reach top speed",
      "Pricier than the T7"
    ],
    "whoItsFor": "Video editors and creators moving big files every day.",
    "amazonAsin": "B0CHFSWM2P",
    "imageUrl": "/products/B0CHFSWM2P.jpg"
  },
  {
    "slug": "lexar-d50e-128gb-solid-state-dual",
    "name": "Lexar D50E 128GB Dual Drive",
    "brand": "Lexar",
    "category": "storage",
    "tagline": "Pocket drive with both USB-A and USB-C plugs",
    "summary": "The Lexar D50E 128GB is our Value pick for storage. It's a cable-free solid state drive with USB-A and USB-C plugs, rated up to 400MB/s read and 360MB/s write, per the listing. A metal housing protects the connectors, and Lexar's app backs up photos from iOS and Android.",
    "tier": "$",
    "pros": [
      "USB-A and USB-C in one stick",
      "Up to 400MB/s read, per the listing",
      "Metal housing",
      "Phone photo backup app"
    ],
    "cons": [
      "128GB is small for video",
      "Slower than the full SSDs here"
    ],
    "whoItsFor": "Students and phone users who want quick transfers on a budget.",
    "amazonAsin": "B0GG4BTNXY",
    "imageUrl": "/products/B0GG4BTNXY.jpg"
  },
  {
    "slug": "extreme",
    "name": "SanDisk Extreme Portable SSD 1TB",
    "brand": "SanDisk",
    "category": "storage",
    "tagline": "The tougher SanDisk portable SSD",
    "summary": "The SanDisk Extreme 1TB is a compact USB-C portable SSD with a carabiner loop. SanDisk lists Time Machine support for Macs and file management from an iPhone or iPad through the Files app.",
    "tier": "$$$",
    "pros": [
      "Carabiner loop for a bag",
      "Works with iPhone and iPad through the Files app",
      "Time Machine compatible for Macs"
    ],
    "cons": [
      "This listing gives no speed rating",
      "1TB fills up fast with video"
    ],
    "whoItsFor": "Anyone who carries a drive in a bag and wants something tougher.",
    "amazonAsin": "B0H6CC2KRQ",
    "imageUrl": "/products/B0H6CC2KRQ.jpg"
  },
  {
    "slug": "crucial-x9-2tb-portable-ssd",
    "name": "Crucial X9 2TB",
    "brand": "Crucial",
    "category": "storage",
    "tagline": "2TB portable SSD with IP55 and drop protection",
    "summary": "The Crucial X9 2TB is a portable SSD rated up to 1,050MB/s, per the listing, with IP55 water and dust resistance and drop resistance up to 2 meters. It works with Windows, Mac, iPad Pro, Android and game consoles, and ships with trials of Mylio Photos+ and Acronis True Image.",
    "tier": "$$$",
    "pros": [
      "2TB capacity",
      "Up to 1,050MB/s, per the listing",
      "IP55 and drop resistance up to 2 meters, per the listing"
    ],
    "cons": [
      "Bundled software is trial-only",
      "Pricier per gigabyte than some 1TB drives"
    ],
    "whoItsFor": "People who want lots of space with some weather resistance.",
    "amazonAsin": "B0CGW18S6Y",
    "imageUrl": "/products/B0CGW18S6Y.jpg"
  },
  {
    "slug": "sandisk-2tb-extreme-portable-ssd",
    "name": "SanDisk Extreme Portable SSD 2TB",
    "brand": "SanDisk",
    "category": "storage",
    "tagline": "Rugged 2TB SSD with encryption",
    "summary": "The SanDisk Extreme 2TB is rated up to 1,050MB/s read and 1,000MB/s write, per the listing, with IP65 water and dust resistance and drop protection up to 3 meters. It includes 256-bit AES hardware encryption and a carabiner loop.",
    "tier": "$$$",
    "pros": [
      "IP65 and drop protection up to 3 meters, per the listing",
      "256-bit AES hardware encryption",
      "Up to 1,050MB/s read, per the listing"
    ],
    "cons": [
      "One of the priciest drives here",
      "Same speed class as cheaper 1TB drives"
    ],
    "whoItsFor": "Photographers and travelers who need a rugged, encrypted 2TB drive.",
    "amazonAsin": "B08HN37XC1",
    "imageUrl": "/products/B08HN37XC1.jpg"
  },
  {
    "slug": "lexar-es3-1tb-portable-ssd-silver",
    "name": "Lexar ES3 1TB",
    "brand": "Lexar",
    "category": "storage",
    "tagline": "Thin 1TB SSD that works with newer iPhones",
    "summary": "The Lexar ES3 1TB is a thin portable SSD about 10.5mm thick and 42g, rated up to 1,050MB/s read, per the listing. Lexar lists support for the iPhone 17 series, Android, laptops, cameras and consoles, plus DataShield 256-bit AES encryption software.",
    "tier": "$$",
    "pros": [
      "Very thin and light",
      "Up to 1,050MB/s read, per the listing",
      "Works with iPhone 17 series, per the listing"
    ],
    "cons": [
      "Not supported on iPhone 14 and older",
      "This version has no MagSafe"
    ],
    "whoItsFor": "iPhone 17 owners who shoot video straight to a drive.",
    "amazonAsin": "B0DYDHLN81",
    "imageUrl": "/products/B0DYDHLN81.jpg"
  },
  {
    "slug": "sandisk-1tb-portable-ssd",
    "name": "SanDisk Portable SSD 1TB",
    "brand": "SanDisk",
    "category": "storage",
    "tagline": "SanDisk's plain portable SSD",
    "summary": "The SanDisk Portable SSD 1TB is the plain, non-Extreme model. It's rated up to 1,000MB/s read, per the listing, with no moving parts, drop protection up to 2 meters and a USB-C plug-and-play setup.",
    "tier": "$$",
    "pros": [
      "Up to 1,000MB/s read, per the listing",
      "Drop protection up to 2 meters, per the listing",
      "Slim and light"
    ],
    "cons": [
      "No water resistance listed",
      "Often costs as much as better-specced drives"
    ],
    "whoItsFor": "Anyone who wants a simple SanDisk drive for backups.",
    "amazonAsin": "B0H4H1SNMY",
    "imageUrl": "/products/B0H4H1SNMY.jpg"
  },
  {
    "slug": "ssk-portable-ssd-500gb-external-solid",
    "name": "SSK Portable SSD 500GB",
    "brand": "SSK",
    "category": "storage",
    "tagline": "500GB SSD with both USB-C and USB-A cables",
    "summary": "The SSK Portable SSD 500GB is rated up to 1,050MB/s read and 1,000MB/s write, per the listing, with an activity LED, SMART health monitoring and TRIM support. It ships with USB-C and USB-A cables.",
    "tier": "$$",
    "pros": [
      "Up to 1,050MB/s read, per the listing",
      "Both USB-C and USB-A cables included",
      "Activity LED"
    ],
    "cons": [
      "Only 500GB",
      "Lesser-known brand"
    ],
    "whoItsFor": "Budget buyers who need a fast drive for a smaller library.",
    "amazonAsin": "B0BGKXX9TK",
    "imageUrl": "/products/B0BGKXX9TK.jpg"
  },
  {
    "slug": "amazon-basics-portable-external-ssd",
    "name": "Amazon Basics Portable SSD 2TB",
    "brand": "Amazon Basics",
    "category": "storage",
    "tagline": "2TB SSD with IP65 and two cables",
    "summary": "The Amazon Basics Portable SSD 2TB is rated up to 2,000MB/s read and write, per the listing, with a metal casing, IP65 water and dust resistance, and a thermal design that keeps it below 50°C. It includes USB-C to C and C to A cables and a case.",
    "tier": "$$$",
    "pros": [
      "Up to 2,000MB/s, per the listing",
      "IP65 water and dust resistance",
      "Two cables and a storage case"
    ],
    "cons": [
      "The most expensive drive on this list",
      "Top speed needs a fast USB port"
    ],
    "whoItsFor": "Users who want a fast 2TB drive with cables and a case included.",
    "amazonAsin": "B0DX68TWW4",
    "imageUrl": "/products/B0DX68TWW4.jpg"
  },
  {
    "slug": "mx3s",
    "name": "Logitech MX Master 3S",
    "brand": "Logitech",
    "category": "input",
    "tagline": "The desk mouse for long workdays",
    "summary": "The Logitech MX Master 3S is our Best Overall pick for desk input. It's a wireless performance mouse with a contoured shape for long sessions, precise tracking and a Bolt receiver. Logitech lists an average battery life of 18 months.",
    "tier": "$$$",
    "pros": [
      "Contoured shape for all-day use",
      "Precise tracking on most surfaces",
      "Bolt receiver included"
    ],
    "cons": [
      "Pricey for a mouse",
      "Large for small hands"
    ],
    "whoItsFor": "Anyone who spends the workday at a desk and wants one great mouse.",
    "amazonAsin": "B0B11LJ69K",
    "imageUrl": "/products/B0B11LJ69K.jpg"
  },
  {
    "slug": "logitech-mx-keys-s-wireless-keyboard",
    "name": "Logitech MX Keys S",
    "brand": "Logitech",
    "category": "input",
    "tagline": "Low-profile backlit keyboard for three devices",
    "summary": "The Logitech MX Keys S is our Premium pick for desk input. It's a low-profile wireless keyboard with dished keys, backlighting that turns on as your hands approach, and Smart Actions shortcuts in Logi Options+. It pairs with up to three devices on Windows, macOS and Linux.",
    "tier": "$$$",
    "pros": [
      "Quiet, laptop-like typing",
      "Backlight that senses your hands",
      "Pairs with three devices"
    ],
    "cons": [
      "Pricey",
      "Low-profile keys won't suit mechanical fans"
    ],
    "whoItsFor": "Office workers who switch between a laptop, desktop and tablet.",
    "amazonAsin": "B0BKW3LB2B",
    "imageUrl": "/products/B0BKW3LB2B.jpg"
  },
  {
    "slug": "logitech-m185-compact-ambidextrous-2-4",
    "name": "Logitech M185",
    "brand": "Logitech",
    "category": "input",
    "tagline": "Small, dependable wireless mouse",
    "summary": "The Logitech M185 is our Value pick for desk input. It's a compact ambidextrous wireless mouse with a nano USB receiver, line-by-line scroll wheel and sleep mode. Logitech lists up to a year of battery life and a range of about 33 feet.",
    "tier": "$",
    "pros": [
      "Works in either hand",
      "Plug-in nano receiver, no pairing",
      "Up to a year of battery, per the listing"
    ],
    "cons": [
      "Basic three-button design",
      "Needs a USB-A port"
    ],
    "whoItsFor": "Laptop users who want a cheap mouse that just works.",
    "amazonAsin": "B004YAVF8I",
    "imageUrl": "/products/B004YAVF8I.jpg"
  },
  {
    "slug": "k2",
    "name": "Keychron K2",
    "brand": "Keychron",
    "category": "input",
    "tagline": "Compact 75% mechanical keyboard for Mac and Windows",
    "summary": "The Keychron K2 is a 75% (84-key) Bluetooth mechanical keyboard that keeps arrow and function keys. It pairs with up to three devices, has Mac and Windows keycaps, and Keychron lists up to 72 hours of typing from a 4,000mAh battery.",
    "tier": "$$",
    "pros": [
      "Compact layout that keeps arrow keys",
      "Pairs with three devices",
      "Mac and Windows keycaps included"
    ],
    "cons": [
      "Tall profile, so a wrist rest helps",
      "Louder than a membrane keyboard"
    ],
    "whoItsFor": "Typists who want a mechanical keyboard in a small footprint.",
    "amazonAsin": "B07QBPDWLS",
    "imageUrl": "/products/B07QBPDWLS.jpg"
  },
  {
    "slug": "logitech-wave-keys-ergonomic-wireless-keyboard",
    "name": "Logitech Wave Keys",
    "brand": "Logitech",
    "category": "input",
    "tagline": "Ergonomic wave-shaped keyboard with a palm rest",
    "summary": "The Logitech Wave Keys is a compact ergonomic keyboard with a wave-shaped layout and a memory-foam palm rest, meant to keep hands, wrists and forearms in a more natural position. It connects over Bluetooth or the Logi Bolt receiver, switches between three devices, and Logitech lists up to 3 years of battery life.",
    "tier": "$$",
    "pros": [
      "Wave layout and cushioned palm rest",
      "Bluetooth or Logi Bolt receiver",
      "Easy-Switch between three devices",
      "Up to 3 years of battery, per the listing"
    ],
    "cons": [
      "The wave shape takes some getting used to",
      "Palm rest isn't removable"
    ],
    "whoItsFor": "Office workers who want a more comfortable keyboard without a split design.",
    "amazonAsin": "B0BTNY72VD"
  },
  {
    "slug": "logitech-mk120-full-size-wired-keyboard",
    "name": "Logitech MK120 Keyboard and Mouse",
    "brand": "Logitech",
    "category": "input",
    "tagline": "Wired full-size keyboard and mouse combo",
    "summary": "The Logitech MK120 is a wired full-size keyboard and mouse combo with a spill-resistant design, number pad and an optical mouse. Logitech rates the keys for 10 million keystrokes.",
    "tier": "$",
    "pros": [
      "Keyboard and mouse in one box",
      "Spill-resistant design",
      "Full number pad"
    ],
    "cons": [
      "Wired only",
      "Basic feel"
    ],
    "whoItsFor": "Home offices and shared PCs that need a cheap, reliable set.",
    "amazonAsin": "B003NREDC8",
    "imageUrl": "/products/B003NREDC8.jpg"
  },
  {
    "slug": "amazon-basics-wired-qwerty-keyboard",
    "name": "Amazon Basics Wired Keyboard",
    "brand": "Amazon Basics",
    "category": "input",
    "tagline": "Plain full-size USB keyboard",
    "summary": "The Amazon Basics Wired Keyboard is a full-size USB keyboard with media hot keys for mute, volume and calculator. It's plug-and-play on Windows.",
    "tier": "$",
    "pros": [
      "Plug-and-play USB",
      "Media hot keys",
      "Full-size layout"
    ],
    "cons": [
      "Wired only",
      "Made for Windows"
    ],
    "whoItsFor": "Anyone who needs a basic replacement keyboard.",
    "amazonAsin": "B07WJ5D3H4",
    "imageUrl": "/products/B07WJ5D3H4.jpg"
  },
  {
    "slug": "tecknet-wireless-mouse",
    "name": "TECKNET Wireless Mouse",
    "brand": "TECKNET",
    "category": "input",
    "tagline": "Compact mouse with adjustable DPI",
    "summary": "The TECKNET wireless mouse is a compact 2.4GHz mouse with five DPI steps up to 2600 and an on/off switch. TECKNET lists up to 24 months of battery life and about 49 feet of range.",
    "tier": "$",
    "pros": [
      "Five DPI levels",
      "Long listed battery life",
      "Compact for travel"
    ],
    "cons": [
      "Needs a USB-A port",
      "Budget build"
    ],
    "whoItsFor": "Students and travelers who want a cheap, adjustable mouse.",
    "amazonAsin": "B015NBTAOW",
    "imageUrl": "/products/B015NBTAOW.jpg"
  },
  {
    "slug": "wegear-usb-wireless-mouse-for-laptop",
    "name": "wegear Wireless Mouse",
    "brand": "wegear",
    "category": "input",
    "tagline": "Six-button budget mouse with back and forward keys",
    "summary": "The wegear wireless mouse is a 2.4GHz mouse with six buttons, including back and forward, and five DPI steps up to 4000. It runs on one AA battery, which isn't included, and wegear lists up to 24 months per battery.",
    "tier": "$",
    "pros": [
      "Back and forward side buttons",
      "Five DPI levels",
      "Plug-and-play receiver"
    ],
    "cons": [
      "AA battery not included",
      "Budget build"
    ],
    "whoItsFor": "Budget buyers who want side buttons for browsing.",
    "amazonAsin": "B0FC2GH8Z4",
    "imageUrl": "/products/B0FC2GH8Z4.jpg"
  },
  {
    "slug": "sablute-wireless-mouse-for-laptop",
    "name": "Sablute Quiet Wireless Mouse",
    "brand": "Sablute",
    "category": "input",
    "tagline": "Quiet-click mouse for small and medium hands",
    "summary": "The Sablute wireless mouse is a compact right-handed mouse with quiet clicks, a thumb rest, and three DPI steps. It includes a USB-A receiver and a USB-C adapter.",
    "tier": "$",
    "pros": [
      "Quiet clicks for shared spaces",
      "USB-C adapter included",
      "Small for travel"
    ],
    "cons": [
      "Right-handed only",
      "Sized for small to medium hands"
    ],
    "whoItsFor": "Library, office or late-night use where clicks need to be quiet.",
    "amazonAsin": "B0GF1VMNJP",
    "imageUrl": "/products/B0GF1VMNJP.jpg"
  },
  {
    "slug": "logitech-c920x-hd-pro-pc-webcam",
    "name": "Logitech C920x HD Pro",
    "brand": "Logitech",
    "category": "webcams",
    "tagline": "The standard 1080p call camera",
    "summary": "The Logitech C920x is our Best Overall pick for webcams. It's the current version of the C920: 1080p at 30fps with autofocus, automatic light correction and stereo mics. Logitech also lists support for the Nintendo Switch 2 GameChat mode.",
    "tier": "$$",
    "pros": [
      "Sharp 1080p with autofocus",
      "Automatic light correction",
      "Stereo mics"
    ],
    "cons": [
      "Not 4K",
      "No built-in privacy shutter"
    ],
    "whoItsFor": "Most people who want a clear upgrade from a laptop camera.",
    "amazonAsin": "B085TFF7M1",
    "imageUrl": "/products/B085TFF7M1.jpg"
  },
  {
    "slug": "logitech-mx-brio-ultra-hd-4k",
    "name": "Logitech MX Brio",
    "brand": "Logitech",
    "category": "webcams",
    "tagline": "Logitech's 4K webcam for all-day calls and streaming",
    "summary": "The Logitech MX Brio is our Premium pick for webcams. It records 4K at 30fps or 1080p at 60fps with Logitech's largest webcam sensor yet, per the listing, plus AI-enhanced exposure and white balance. Manual controls cover ISO, shutter speed and tint.",
    "tier": "$$$",
    "pros": [
      "4K at 30fps or 1080p at 60fps",
      "Better image in difficult light",
      "Manual image controls"
    ],
    "cons": [
      "The most expensive camera here",
      "4K is overkill for most calls"
    ],
    "whoItsFor": "People on camera all day, and streamers.",
    "amazonAsin": "B0BFJ4CRKD",
    "imageUrl": "/products/B0BFJ4CRKD.jpg"
  },
  {
    "slug": "emeet-c960-1080p-webcam-with-microphone",
    "name": "EMEET C960",
    "brand": "EMEET",
    "category": "webcams",
    "tagline": "Budget 1080p webcam with two mics and a cover",
    "summary": "The EMEET C960 is our Value pick for webcams. It's a 1080p camera with a 90° field of view, two omnidirectional mics, automatic exposure and a privacy cover. It plugs into USB-A, with a USB-C adapter included.",
    "tier": "$",
    "pros": [
      "Two built-in mics",
      "Privacy cover",
      "USB-C adapter included"
    ],
    "cons": [
      "Fixed focus",
      "Wide 90° view shows more of the room"
    ],
    "whoItsFor": "Budget buyers who want a big step up from a laptop camera.",
    "amazonAsin": "B0DSPJPRXD",
    "imageUrl": "/products/B0DSPJPRXD.jpg"
  },
  {
    "slug": "brio",
    "name": "Logitech Brio 100",
    "brand": "Logitech",
    "category": "webcams",
    "tagline": "1080p call camera with a privacy shutter",
    "summary": "The Logitech Brio 100 is a 1080p webcam with RightLight auto-light balance, which Logitech says brightens the image by up to 50% over its previous generation. It has a built-in privacy shutter and mic.",
    "tier": "$$",
    "pros": [
      "Built-in privacy shutter",
      "Auto-light balance",
      "Logitech build for little money"
    ],
    "cons": [
      "Fixed focus",
      "Single mic"
    ],
    "whoItsFor": "Anyone who wants a cheap Logitech camera with a shutter.",
    "amazonAsin": "B0BXGCRRLW",
    "imageUrl": "/products/B0BXGCRRLW.jpg"
  },
  {
    "slug": "emeet-s600-4k-webcam-for-streaming",
    "name": "EMEET S600 4K",
    "brand": "EMEET",
    "category": "webcams",
    "tagline": "Value 4K webcam with PDAF autofocus",
    "summary": "The EMEET S600 is a 4K webcam with a Sony 1/2.55-inch sensor and phase-detection autofocus, per the listing. It has noise-reducing mics, an adjustable field of view and a privacy cover built onto the lens.",
    "tier": "$$",
    "pros": [
      "4K with a Sony sensor, per the listing",
      "Phase-detection autofocus",
      "Privacy cover"
    ],
    "cons": [
      "Lesser-known brand",
      "4K needs a good USB connection"
    ],
    "whoItsFor": "Streamers who want 4K without paying for the MX Brio.",
    "amazonAsin": "B0CYQ5P6T7",
    "imageUrl": "/products/B0CYQ5P6T7.jpg"
  },
  {
    "slug": "logitech-c920e-hd-1080p-mic-enabled",
    "name": "Logitech C920e",
    "brand": "Logitech",
    "category": "webcams",
    "tagline": "Business version of the C920, built for Zoom and Teams",
    "summary": "The Logitech C920e is the business version of the C920. It's a 1080p camera with a 78° field of view, two mics that pick up voices from about a meter away, autofocus, and an attachable privacy screen. Logitech lists it as certified for Zoom and Microsoft Teams.",
    "tier": "$$",
    "pros": [
      "Listed as certified for Zoom and Microsoft Teams",
      "Two mics",
      "Attachable privacy screen"
    ],
    "cons": [
      "Image is similar to the consumer C920x",
      "Costs as much as the C920x"
    ],
    "whoItsFor": "Company setups that require Zoom- or Microsoft Teams-certified meeting hardware.",
    "amazonAsin": "B09DVGV7BH",
    "imageUrl": "/products/B09DVGV7BH.jpg"
  },
  {
    "slug": "acer-a610-1080p-webcam-for-pc",
    "name": "Acer A610",
    "brand": "Acer",
    "category": "webcams",
    "tagline": "1080p webcam with dual noise-reducing mics",
    "summary": "The Acer A610 is a 1080p plug-and-play webcam with dual noise-reducing mics and a built-in privacy cover. No drivers are needed.",
    "tier": "$$",
    "pros": [
      "Dual noise-reducing mics",
      "Built-in privacy cover",
      "Plug-and-play"
    ],
    "cons": [
      "Fixed focus",
      "Less proven than Logitech"
    ],
    "whoItsFor": "Home offices that want a simple 1080p camera with a cover.",
    "amazonAsin": "B0GJD6PHTZ",
    "imageUrl": "/products/B0GJD6PHTZ.jpg"
  },
  {
    "slug": "xweiryn-webcam-for-pc-hd-1080p",
    "name": "XWEIRYN 1080P Webcam",
    "brand": "XWEIRYN",
    "category": "webcams",
    "tagline": "The cheapest 1080p USB webcam here",
    "summary": "The XWEIRYN webcam is a basic 1080p USB plug-and-play camera for desktops and laptops. It needs no drivers and works with the major video call apps.",
    "tier": "$",
    "pros": [
      "Lowest price on the list",
      "Plug-and-play USB",
      "1080p video"
    ],
    "cons": [
      "No privacy cover listed",
      "Budget image quality"
    ],
    "whoItsFor": "A spare or a desktop with no camera at all.",
    "amazonAsin": "B0GG3JNQGF",
    "imageUrl": "/products/B0GG3JNQGF.jpg"
  },
  {
    "slug": "dell-24-monitor-se2426h-23-8",
    "name": "Dell 24 SE2426H",
    "brand": "Dell",
    "category": "monitors",
    "tagline": "24-inch 144Hz IPS monitor from Dell",
    "summary": "The Dell 24 SE2426H is our Best Overall pick for monitors. It's a 23.8-inch 1080p IPS panel with a 144Hz refresh rate, 1ms MPRT response and AMD FreeSync, per the listing. It's rated TÜV Rheinland 3-star for eye comfort with low blue light.",
    "tier": "$$",
    "pros": [
      "Smooth 144Hz refresh, per the listing",
      "IPS color and 178° viewing angles",
      "Low blue light for long days"
    ],
    "cons": [
      "1080p only",
      "Basic stand"
    ],
    "whoItsFor": "Most people who want a second screen that's smooth for work and casual games.",
    "amazonAsin": "B0GLQXKKVY",
    "imageUrl": "/products/B0GLQXKKVY.jpg"
  },
  {
    "slug": "dell-27-monitor-s2725qs",
    "name": "Dell 27 S2725QS 4K",
    "brand": "Dell",
    "category": "monitors",
    "tagline": "27-inch 4K IPS monitor with speakers",
    "summary": "The Dell 27 S2725QS is our Premium pick for monitors. It's a 27-inch 4K IPS panel at up to 120Hz with FreeSync Premium and 99% sRGB, per the listing. Dell lists ComfortView Plus low blue light and upgraded built-in speakers.",
    "tier": "$$$",
    "pros": [
      "4K on a 27-inch IPS panel",
      "Up to 120Hz, per the listing",
      "99% sRGB color, per the listing",
      "Built-in speakers"
    ],
    "cons": [
      "The priciest monitor here",
      "4K needs a capable computer"
    ],
    "whoItsFor": "Creators and anyone who wants sharp text on a bigger screen.",
    "amazonAsin": "B0F1GF1KFC",
    "imageUrl": "/products/B0F1GF1KFC.jpg"
  },
  {
    "slug": "philips-24-inch-computer-monitor-fhd",
    "name": "Philips 24 241V8LB",
    "brand": "Philips",
    "category": "monitors",
    "tagline": "Budget 24-inch VA monitor with deep blacks",
    "summary": "The Philips 241V8LB is our Value pick for monitors. It's a 23.8-inch 1080p VA panel at 100Hz, per the listing, with strong contrast, flicker-free backlighting, 178° viewing angles and VESA mounting.",
    "tier": "$",
    "pros": [
      "High-contrast VA panel",
      "100Hz refresh, per the listing",
      "VESA mount support"
    ],
    "cons": [
      "1080p only",
      "VA panels can smear in fast motion"
    ],
    "whoItsFor": "Budget buyers who want a clean second screen.",
    "amazonAsin": "B0C8ZKV5R9",
    "imageUrl": "/products/B0C8ZKV5R9.jpg"
  },
  {
    "slug": "dell-27-plus-qhd-monitor-s2725dsm",
    "name": "Dell 27 Plus S2725DSM",
    "brand": "Dell",
    "category": "monitors",
    "tagline": "27-inch QHD 144Hz monitor with speakers",
    "summary": "The Dell 27 Plus S2725DSM is a 27-inch QHD (2560x1440) panel at 144Hz with 1ms response and a 1500:1 contrast ratio, per the listing. It has dual 3W speakers, HDMI and DisplayPort 1.4, and a TÜV 4-star eye comfort rating.",
    "tier": "$$$",
    "pros": [
      "QHD resolution on 27 inches",
      "144Hz refresh, per the listing",
      "Dual built-in speakers"
    ],
    "cons": [
      "Pricier than 1080p options",
      "Speakers are basic"
    ],
    "whoItsFor": "Anyone who wants more screen space without paying for 4K.",
    "amazonAsin": "B0GD1LMWH3",
    "imageUrl": "/products/B0GD1LMWH3.jpg"
  },
  {
    "slug": "samsung-27-s30gd-essential-monitor-with",
    "name": "Samsung 27 S30GD Essential",
    "brand": "Samsung",
    "category": "monitors",
    "tagline": "27-inch IPS monitor at 100Hz",
    "summary": "The Samsung 27-inch S30GD is an IPS monitor at 100Hz, per the listing, with game settings for color and contrast and an eye-saver mode with reduced blue light.",
    "tier": "$$",
    "pros": [
      "27-inch IPS panel",
      "100Hz refresh, per the listing",
      "Eye-saver mode"
    ],
    "cons": [
      "1080p on 27 inches is less sharp",
      "No speakers listed"
    ],
    "whoItsFor": "Budget buyers who want a bigger IPS screen.",
    "amazonAsin": "B0DK44759Y",
    "imageUrl": "/products/B0DK44759Y.jpg"
  },
  {
    "slug": "samsung-32-odyssey",
    "name": "Samsung 32 Odyssey G55C",
    "brand": "Samsung",
    "category": "monitors",
    "tagline": "32-inch curved QHD gaming monitor",
    "summary": "The Samsung 32-inch Odyssey G55C is a curved 1000R QHD gaming monitor at 165Hz with AMD FreeSync, per the listing. Samsung says QHD gives 1.7x the pixel density of Full HD.",
    "tier": "$$$",
    "pros": [
      "QHD on a big 32-inch curve",
      "165Hz refresh, per the listing",
      "FreeSync for tear-free games"
    ],
    "cons": [
      "Strong 1000R curve isn't for everyone",
      "Big for small desks"
    ],
    "whoItsFor": "Gamers who want an immersive, sharp screen.",
    "amazonAsin": "B0CRGJC5ZD",
    "imageUrl": "/products/B0CRGJC5ZD.jpg"
  },
  {
    "slug": "sansui-34-inch-curved-gaming-monitor",
    "name": "SANSUI 34 Curved Ultrawide",
    "brand": "SANSUI",
    "category": "monitors",
    "tagline": "34-inch ultrawide at up to 200Hz",
    "summary": "The SANSUI 34-inch is a 1500R curved ultrawide (3440x1440) VA monitor at up to 200Hz, per the listing, with two HDMI 2.1 ports, DisplayPort 1.4, PIP/PBP and VESA mounting. It has no speakers.",
    "tier": "$$$",
    "pros": [
      "Ultrawide 3440x1440 resolution",
      "Up to 200Hz, per the listing",
      "PIP and PBP for two sources"
    ],
    "cons": [
      "No speakers",
      "Lesser-known brand"
    ],
    "whoItsFor": "Gamers and multitaskers who want an ultrawide for less.",
    "amazonAsin": "B0CWQMZPJC",
    "imageUrl": "/products/B0CWQMZPJC.jpg"
  },
  {
    "slug": "sceptre-27-inch-prime-gaming-monitor",
    "name": "Sceptre 27 Prime",
    "brand": "Sceptre",
    "category": "monitors",
    "tagline": "27-inch 100Hz monitor with speakers",
    "summary": "The Sceptre 27-inch Prime is a 100Hz monitor with 100% sRGB, per the listing, plus two HDMI ports, one DisplayPort, built-in speakers and Blue Light Shift.",
    "tier": "$$",
    "pros": [
      "100% sRGB color, per the listing",
      "Built-in speakers",
      "Two HDMI and one DisplayPort"
    ],
    "cons": [
      "1080p on 27 inches",
      "Speakers are basic"
    ],
    "whoItsFor": "Budget buyers who want a big screen with speakers.",
    "amazonAsin": "B0CHHSFMRL",
    "imageUrl": "/products/B0CHHSFMRL.jpg"
  },
  {
    "slug": "sansui-27-inch-curved-160hz-gaming",
    "name": "SANSUI 27 Curved 160Hz",
    "brand": "SANSUI",
    "category": "monitors",
    "tagline": "27-inch curved 1080p gaming monitor",
    "summary": "The SANSUI 27-inch is a 1500R curved 1080p monitor at up to 160Hz with 1ms MPRT and FreeSync, per the listing. It lists 300 nits, 110% sRGB and game-assist tools like a crosshair and timer.",
    "tier": "$$",
    "pros": [
      "Up to 160Hz, per the listing",
      "Curved 27-inch panel",
      "Game-assist tools"
    ],
    "cons": [
      "1080p on 27 inches",
      "Lesser-known brand"
    ],
    "whoItsFor": "Budget gamers who want a curved screen.",
    "amazonAsin": "B0F2T7WLFK",
    "imageUrl": "/products/B0F2T7WLFK.jpg"
  },
  {
    "slug": "sceptre-new-22-inch-gaming-monitor",
    "name": "Sceptre 22 E225W",
    "brand": "Sceptre",
    "category": "monitors",
    "tagline": "Small 22-inch 144Hz monitor with speakers",
    "summary": "The Sceptre 22-inch E225W is a 1080p monitor at up to 144Hz, per the listing, with HDMI, DisplayPort, built-in speakers and Blue Light Shift.",
    "tier": "$",
    "pros": [
      "Up to 144Hz, per the listing",
      "Built-in speakers",
      "Small footprint"
    ],
    "cons": [
      "Only 22 inches",
      "Basic stand"
    ],
    "whoItsFor": "Tight desks, kids' setups and a cheap second screen.",
    "amazonAsin": "B0FT21HKZ6",
    "imageUrl": "/products/B0FT21HKZ6.jpg"
  },
  {
    "slug": "dot",
    "name": "Echo Dot (5th gen)",
    "brand": "Amazon",
    "category": "amazon-devices",
    "tagline": "The bedroom and office Alexa speaker",
    "summary": "The Echo Dot is our Best Overall pick for Amazon devices. It's a compact Alexa speaker for music, timers and smart-home control, with motion and temperature sensors for routines. With eero Built-in it can also extend an eero mesh network by up to 1,000 sq. ft., per the listing.",
    "tier": "$$",
    "pros": [
      "Compact Alexa speaker for any room",
      "Motion and temperature sensors for routines",
      "Doubles as an eero mesh extender"
    ],
    "cons": [
      "Small speaker, small bass",
      "Has always-on mics; review the privacy and mic settings"
    ],
    "whoItsFor": "Most people who want an Alexa speaker for a bedroom or office.",
    "amazonAsin": "B09B94RL1R",
    "imageUrl": "/products/B09B94RL1R.jpg"
  },
  {
    "slug": "show5",
    "name": "Echo Show 5",
    "brand": "Amazon",
    "category": "amazon-devices",
    "tagline": "Small Alexa screen for a nightstand or counter",
    "summary": "The Echo Show 5 is our Premium pick for Amazon devices. It has a 5.5-inch display for news, weather, video calls and camera feeds, a built-in camera, and Amazon lists 2x the bass of the previous model. When idle it shows a photo slideshow.",
    "tier": "$$$",
    "pros": [
      "5.5-inch screen for clocks, calls and cameras",
      "Built-in camera for drop-ins",
      "Photo slideshow when idle"
    ],
    "cons": [
      "Small screen for video",
      "Has a camera and mics; review the privacy, camera and mic settings"
    ],
    "whoItsFor": "Kitchens and nightstands where a glanceable screen helps.",
    "amazonAsin": "B09B2SBHQK",
    "imageUrl": "/products/B09B2SBHQK.jpg"
  },
  {
    "slug": "amazon-fire-tv-stick-4k-select",
    "name": "Fire TV Stick 4K Select",
    "brand": "Amazon",
    "category": "amazon-devices",
    "tagline": "Low-cost Fire TV stick for Ultra HD TVs",
    "summary": "The Fire TV Stick 4K Select is our Value pick for Amazon devices. Per Amazon, it streams 4K with HDR10+ and runs the new Fire TV interface with Alexa+ search and the major streaming apps.",
    "tier": "$",
    "pros": [
      "4K with HDR10+, per Amazon",
      "Major streaming apps",
      "Alexa voice search"
    ],
    "cons": [
      "No Dolby Vision listed",
      "Less power than the 4K Max"
    ],
    "whoItsFor": "Anyone adding 4K streaming to a TV for the least money.",
    "amazonAsin": "B0C6W3D4RM",
    "imageUrl": "/products/B0C6W3D4RM.jpg"
  },
  {
    "slug": "firemax",
    "name": "Fire TV Stick 4K Max (2nd gen)",
    "brand": "Amazon",
    "category": "amazon-devices",
    "tagline": "The fastest Fire TV stick, with Wi-Fi 6E",
    "summary": "The Fire TV Stick 4K Max (2nd gen) is Amazon's top streaming stick. It supports Wi-Fi 6E, Dolby Vision, HDR10+ and Dolby Atmos, and Amazon lists faster app starts and cloud gaming without a console.",
    "tier": "$$",
    "pros": [
      "Dolby Vision, HDR10+ and Atmos",
      "Wi-Fi 6E support",
      "Cloud gaming"
    ],
    "cons": [
      "Costs more than the 4K Select",
      "Interface leans on Amazon content"
    ],
    "whoItsFor": "Home theaters and anyone with a Wi-Fi 6E router.",
    "amazonAsin": "B0BP9SNVH9",
    "imageUrl": "/products/B0BP9SNVH9.jpg"
  },
  {
    "slug": "dotmax",
    "name": "Echo Dot Max",
    "brand": "Amazon",
    "category": "amazon-devices",
    "tagline": "A louder Dot with a built-in smart-home hub",
    "summary": "The Echo Dot Max is a bigger Dot that Amazon says has nearly 3x the bass of the 2022 Echo Dot. It adapts sound to the room, has a built-in smart-home hub so lights and locks don't need a separate hub, and doubles as an eero mesh extender.",
    "tier": "$$$",
    "pros": [
      "Fuller sound than the Echo Dot",
      "Built-in smart-home hub",
      "eero mesh extender"
    ],
    "cons": [
      "Costs more than the Dot",
      "Has always-on mics; review the privacy and mic settings"
    ],
    "whoItsFor": "Living rooms and anyone building a smart home around Alexa.",
    "amazonAsin": "B0D6SZKGT4",
    "imageUrl": "/products/B0D6SZKGT4.jpg"
  },
  {
    "slug": "ring-battery-doorbell-2k-newest-model",
    "name": "Ring Battery Doorbell 2K",
    "brand": "Ring",
    "category": "amazon-devices",
    "tagline": "Battery video doorbell, no wiring needed",
    "summary": "The Ring Battery Doorbell 2K records Retinal 2K video with up to 6x Enhanced Zoom, per the listing, plus Live View, Two-Way Talk and motion alerts. Saving and reviewing recordings needs a Ring subscription plan. The built-in battery recharges over USB-C, though the cable isn't included.",
    "tier": "$$$",
    "pros": [
      "2K video with up to 6x zoom, per the listing",
      "Two-Way Talk and Live View",
      "No wiring needed"
    ],
    "cons": [
      "Recordings need a Ring plan",
      "Battery must come off the wall to charge",
      "Records video and audio at your door; review the privacy settings and local recording rules"
    ],
    "whoItsFor": "Renters and anyone who wants a doorbell camera without wiring.",
    "amazonAsin": "B0FHJ7TKZM",
    "imageUrl": "/products/B0FHJ7TKZM.jpg"
  },
  {
    "slug": "blink-mini-2k-newest-model-plug",
    "name": "Blink Mini 2K+",
    "brand": "Blink",
    "category": "amazon-devices",
    "tagline": "Small plug-in indoor camera",
    "summary": "The Blink Mini 2K+ is a compact plug-in indoor camera with 2K video and up to 4x zoom, per the listing, plus night vision and two-way talk with noise cancellation. Person and vehicle detection needs an optional Blink subscription.",
    "tier": "$",
    "pros": [
      "2K video and night vision, per the listing",
      "Two-way talk",
      "Small and easy to place"
    ],
    "cons": [
      "Smart detection needs a subscription",
      "Outdoor use needs a separate adapter"
    ],
    "whoItsFor": "Watching pets or a room while you're away.",
    "amazonAsin": "B0F3BJJ9DJ",
    "imageUrl": "/products/B0F3BJJ9DJ.jpg"
  },
  {
    "slug": "blink-outdoor-4-and-battery-doorbell",
    "name": "Blink Outdoor 4 + Battery Doorbell 2K+",
    "brand": "Blink",
    "category": "amazon-devices",
    "tagline": "Outdoor camera and video doorbell bundle",
    "summary": "Per the listing, this Blink bundle pairs the Outdoor 4 1080p camera with the Battery Doorbell 2K+ and a Sync Module Core. Both run on included AA lithium batteries, are weather resistant, and the doorbell can connect to existing chime wiring.",
    "tier": "$$$",
    "pros": [
      "Camera and doorbell in one bundle",
      "Runs on included AA batteries",
      "Weather resistant"
    ],
    "cons": [
      "Smart features need a Blink plan",
      "Camera is 1080p, not 2K"
    ],
    "whoItsFor": "First-time home security setups on a budget.",
    "amazonAsin": "B0H1J3WLBQ",
    "imageUrl": "/products/B0H1J3WLBQ.jpg"
  },
  {
    "slug": "amazon-fire-tv-stick-hd-newest",
    "name": "Fire TV Stick HD",
    "brand": "Amazon",
    "category": "amazon-devices",
    "tagline": "HD streaming stick powered by the TV",
    "summary": "The Fire TV Stick HD is Amazon's HD streaming stick. It gets the new Fire TV interface, Alexa voice remote and the major apps, and draws power from the TV over the included USB-C cable.",
    "tier": "$",
    "pros": [
      "Powered by the TV, no wall adapter",
      "Major streaming apps",
      "Thin and portable"
    ],
    "cons": [
      "HD only, no 4K",
      "Less power than the 4K sticks"
    ],
    "whoItsFor": "Older 1080p TVs, guest rooms and travel.",
    "amazonAsin": "B0DJGDC3BD",
    "imageUrl": "/products/B0DJGDC3BD.jpg"
  },
  {
    slug: "amazon-basics-1080p-webcam",
    name: "Amazon Basics 1080p Webcam",
    brand: "Amazon Basics",
    category: "webcams",
    tagline: "Basic 1080p webcam with a built-in mic",
    summary: "Amazon Basics' webcam records 1080p with automatic light correction and a built-in microphone, per the listing. It is a simple plug-in upgrade over a laptop camera; it doesn't list autofocus or a privacy shutter.",
    tier: "$",
    pros: ["1080p with auto light correction, per the listing", "Built-in mic", "Compact for travel"],
    cons: ["No autofocus or privacy shutter listed", "Basic mic quality"],
    whoItsFor: "Video calls on a desktop without a camera.",
    amazonAsin: "B0G2R13G1Q",
  },
  {
    slug: "obsbot-meet-2-4k-webcam",
    name: "OBSBOT Meet 2 4K Webcam",
    brand: "OBSBOT",
    category: "webcams",
    tagline: "Small 4K webcam with AI framing and gesture control",
    summary: "The OBSBOT Meet 2 records 4K with a 1/2-inch sensor and uses AI framing and autofocus to keep you centered, per the listing. Gesture control switches modes. Framing features may need OBSBOT's app.",
    tier: "$$",
    pros: ["4K with a 1/2-inch sensor, per the listing", "AI framing and autofocus", "Very small body"],
    cons: ["Some features need OBSBOT's app", "Costs more than 1080p cams"],
    whoItsFor: "Remote workers who move around or share a frame with others.",
    amazonAsin: "B0D9W7J9SK",
  },
  {
    slug: "echo-spot",
    name: "Echo Spot (newest model)",
    brand: "Amazon",
    category: "amazon-devices",
    tagline: "Alexa smart alarm clock with a small screen",
    summary: "Per Amazon, the Echo Spot is a smart alarm clock with a customizable clock face, Alexa routines for wake-up and wind-down, and smart-home control. With eero Built-in it can extend an eero mesh network, per the listing. It has always-on mics; review the privacy and mic settings.",
    tier: "$$",
    pros: ["Smart alarm clock with Alexa routines, per Amazon", "Customizable clock display", "Doubles as an eero extender, per the listing"],
    cons: ["Small screen, not for video", "Has always-on mics; review the privacy and mic settings"],
    whoItsFor: "Nightstands where a clock and Alexa are wanted in one device.",
    amazonAsin: "B0BFC7WQ6R",
  },
];
