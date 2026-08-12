import bottleRed from "@/assets/bottle-red.jpg";
import bottleWhite from "@/assets/bottle-white.jpg";
import bottleRose from "@/assets/bottle-rose.jpg";
import bottleSparkling from "@/assets/bottle-sparkling.jpg";
import bottleDessert from "@/assets/bottle-dessert.jpg";

/**
 * PLACEHOLDER CATALOGUE.
 * Every field below is sample content for layout purposes only and should be
 * replaced with real inventory (a CMS or database) before launch. The shapes
 * here mirror a typical commerce product record so the swap is mechanical.
 *
 * NIGERIAN COLLECTION wines (suffixed `_ng`) are based on verified research
 * from Nigerian retailers (Wyn City Abuja, MyLiquorHub Lagos, NaijaLiquor,
 * Wine-Searcher Nigeria). Prices are in Nigerian Naira (₦). Tasting notes are
 * sourced from producer websites and wine publications. Fields that could
 * not be verified are left as "unknown" — never fabricated.
 */

export type WineCategory = "red" | "white" | "rose" | "sparkling" | "dessert";

export type TasteProfile =
  | "bold"
  | "elegant"
  | "celebratory"
  | "smooth"
  | "dinner";

export type CurationBadge =
  | "vintners-choice"
  | "premium-selection"
  | "editors-pick"
  | "best-celebrations"
  | "best-dinner";

export interface Wine {
  slug: string;
  name: string;
  varietal: string;
  winery: string;
  region: string;
  vintage: number;
  category: WineCategory;
  /** Placeholder pricing, in USD cents. */
  priceCents: number;
  image: string;
  imageAlt: string;
  tastingNote: string;
  aroma: string;
  palate: string;
  finish: string;
  abv: string;
  bottleSize: string;
  body: "Light" | "Medium" | "Full";
  sweetness: "Dry" | "Off-dry" | "Sweet";
  pairings: string[];
  profiles: TasteProfile[];
  inStock: boolean;
  featured?: boolean;

  /** ── Nigerian Collection fields ── */
  /** Marks this wine as part of the Nigerian Collection. */
  nigerianCollection?: boolean;
  /** Price in Nigerian Naira (₦), for wines sold in the Nigerian market. */
  nairaPrice?: number;
  /** Curated badge for the "Best of Nigeria" experience. */
  badge?: CurationBadge;
  /** Nigerian cuisine pairings, matched to the wine's actual profile. */
  nigerianPairings?: string[];
  /** Country of origin, for display on product pages. */
  originCountry?: string;
}

export const categories: {
  id: WineCategory;
  label: string;
  blurb: string;
  image: string;
}[] = [
  {
    id: "red",
    label: "Red",
    blurb: "Structure, depth and slow evenings.",
    image: bottleRed,
  },
  {
    id: "white",
    label: "White",
    blurb: "Precision, minerality and light.",
    image: bottleWhite,
  },
  {
    id: "rose",
    label: "Rosé",
    blurb: "Delicate colour, quiet confidence.",
    image: bottleRose,
  },
  {
    id: "sparkling",
    label: "Sparkling",
    blurb: "For the moments worth marking.",
    image: bottleSparkling,
  },
  {
    id: "dessert",
    label: "Dessert",
    blurb: "The last glass of the night.",
    image: bottleDessert,
  },
];

export const profiles: { id: TasteProfile; label: string; hint: string }[] = [
  { id: "bold", label: "Bold & Full-Bodied", hint: "Deep tannin, long finish" },
  { id: "elegant", label: "Light & Elegant", hint: "Fine, lifted, precise" },
  { id: "celebratory", label: "Celebratory", hint: "Bubbles and occasion" },
  { id: "smooth", label: "Smooth & Relaxing", hint: "Soft, rounded, easy" },
  { id: "dinner", label: "Perfect With Dinner", hint: "Built for the table" },
];

export const curationBadges: {
  id: CurationBadge;
  label: string;
  hint: string;
}[] = [
  {
    id: "vintners-choice",
    label: "Vintner's Choice",
    hint: "Selected by our house for distinction",
  },
  {
    id: "premium-selection",
    label: "Premium Selection",
    hint: "Reserve-level quality and character",
  },
  {
    id: "editors-pick",
    label: "Editor's Pick",
    hint: "A discovery worth sharing",
  },
  {
    id: "best-celebrations",
    label: "Best for Celebrations",
    hint: "For the moments worth marking",
  },
  {
    id: "best-dinner",
    label: "Best for Dinner",
    hint: "Built for the table and the evening",
  },
];

const imageFor: Record<WineCategory, string> = {
  red: bottleRed,
  white: bottleWhite,
  rose: bottleRose,
  sparkling: bottleSparkling,
  dessert: bottleDessert,
};

function wine(w: Omit<Wine, "image" | "imageAlt">): Wine {
  return {
    ...w,
    image: imageFor[w.category],
    imageAlt: `${w.name}, a ${w.vintage} ${w.varietal} bottle photographed against a dark background`,
  };
}

/* ──────────────────────────────────────────────────────────────────────────
 * NIGERIAN COLLECTION
 *
 * Wines verified as available in the Nigerian market via:
 *   - Wyn City (Abuja) — wyncity.ng
 *   - MyLiquorHub (Lagos) — myliquorhub.com
 *   - NaijaLiquor — naijaliquor.com
 *   - DrinksHarbour — drinksharbour.com
 *   - LiquorEtc — liquoretc.com
 *   - Wine-Searcher Nigeria listings
 *
 * Prices in Nigerian Naira (₦) as of research date (Aug 2026).
 * Tasting notes sourced from producer websites and wine publications
 * (WineMag SA, Decanter, Vinovoss, producer pages).
 * Unverifiable fields are marked "unknown" — never fabricated.
 * ────────────────────────────────────────────────────────────────────────── */

export const nigerianWines: Wine[] = [
  /* ── REDS ── */
  wine({
    slug: "nederburg-winemasters-shiraz-ng",
    name: "Nederburg The Winemasters Shiraz",
    varietal: "Shiraz / Syrah",
    winery: "Nederburg",
    region: "Stellenbosch, Western Cape",
    vintage: 2022,
    category: "red",
    priceCents: 0,
    nairaPrice: 22100,
    tastingNote:
      "Fragrant red berries, fynbos and white pepper on the nose; medium-bodied with pure fruit and unobtrusive oak.",
    aroma: "Red berries, fynbos, white pepper, a trace of dark chocolate.",
    palate: "Medium-bodied, pure fruit, fine-grained tannin, supple oak.",
    finish: "Balanced, savoury, gently persistent.",
    abv: "14.0%",
    bottleSize: "750 ml",
    body: "Full",
    sweetness: "Dry",
    pairings: ["Grilled lamb", "Pepper steak", "Aged hard cheese"],
    nigerianPairings: ["Suya (spiced grilled beef)", "Pepper soup", "Jollof rice with grilled chicken"],
    profiles: ["bold", "dinner"],
    inStock: true,
    featured: true,
    nigerianCollection: true,
    badge: "vintners-choice",
    originCountry: "South Africa",
  }),
  wine({
    slug: "nederburg-pinotage-ng",
    name: "Nederburg Pinotage",
    varietal: "Pinotage",
    winery: "Nederburg",
    region: "Western Cape",
    vintage: 2022,
    category: "red",
    priceCents: 0,
    nairaPrice: 22000,
    tastingNote:
      "Bold and elegant, showcasing South Africa's signature grape with ripe plum, dark fruit and a mocha undertone.",
    aroma: "Ripe plum, blackberry, mocha, red cherry.",
    palate: "Full-bodied, rounded tannin, dark fruit with a smoky edge.",
    finish: "Warm, fruit-forward, moderate length.",
    abv: "14.0%",
    bottleSize: "750 ml",
    body: "Full",
    sweetness: "Dry",
    pairings: ["Grilled meats", "Barbecue", "Stewed beef"],
    nigerianPairings: ["Suya", "Asaro (yam porridge)", "Grilled goat meat"],
    profiles: ["bold", "dinner"],
    inStock: true,
    nigerianCollection: true,
    badge: "best-dinner",
    originCountry: "South Africa",
  }),
  wine({
    slug: "kanonkop-kadette-pinotage-ng",
    name: "Kanonkop Kadette Pinotage",
    varietal: "Pinotage",
    winery: "Kanonkop Wine Estate",
    region: "Stellenbosch, Western Cape",
    vintage: 2023,
    category: "red",
    priceCents: 0,
    nairaPrice: 14700,
    tastingNote:
      "Classic Pinotage character with ripe plum, cherry, and hints of mocha — bold yet silky.",
    aroma: "Ripe plum, cherry, cinnamon, nutmeg, mocha.",
    palate: "Juicy dark fruit, savoury depth, graceful tannins, nuanced oak.",
    finish: "Smooth, fruit-led, balanced.",
    abv: "13.5%",
    bottleSize: "750 ml",
    body: "Medium",
    sweetness: "Dry",
    pairings: ["Beef burger", "Braised dishes", "Charcuterie"],
    nigerianPairings: ["Suya", "Grilled chicken", "Beef stew"],
    profiles: ["bold", "smooth"],
    inStock: true,
    nigerianCollection: true,
    badge: "editors-pick",
    originCountry: "South Africa",
  }),
  wine({
    slug: "cederberg-shiraz-ng",
    name: "Cederberg Shiraz",
    varietal: "Shiraz / Syrah",
    winery: "Cederberg Private Cellar",
    region: "Cederberg, Western Cape",
    vintage: 2020,
    category: "red",
    priceCents: 0,
    nairaPrice: 45900,
    tastingNote:
      "Complex and intense — red fruit, mulberry and cherry with 15 months in oak, sweet spice and vanilla.",
    aroma: "Red fruit, mulberry, cherry, cracked black pepper, smoked meat.",
    palate: "Rich and full, layered dark fruit, elegant oak integration.",
    finish: "Smooth, lingering, well-balanced.",
    abv: "14.5%",
    bottleSize: "750 ml",
    body: "Full",
    sweetness: "Dry",
    pairings: ["Aged steak", "Game meats", "Slow-roasted lamb"],
    nigerianPairings: ["Peppered goat meat", "Grilled beef", "Spicy jollof"],
    profiles: ["bold", "dinner"],
    inStock: true,
    featured: true,
    nigerianCollection: true,
    badge: "premium-selection",
    originCountry: "South Africa",
  }),
  wine({
    slug: "the-chocolate-block-ng",
    name: "The Chocolate Block",
    varietal: "Syrah-led Rhône-style Blend",
    winery: "Boekenhoutskloof",
    region: "Swartland, Western Cape",
    vintage: 2022,
    category: "red",
    priceCents: 0,
    nairaPrice: 39800,
    tastingNote:
      "Intense and fragrant — chocolate, mocha, ripe black and blueberry fruit with black olive and perfume.",
    aroma: "Blackberry, blueberry, black olive, dark chocolate, mocha.",
    palate: "Full-bodied, concentrated, fine-grained tannin, layered fruit.",
    finish: "Long, rich, structured.",
    abv: "14.5%",
    bottleSize: "750 ml",
    body: "Full",
    sweetness: "Dry",
    pairings: ["Dry-aged beef", "Venison", "Dark chocolate"],
    nigerianPairings: ["Spicy grilled meats", "Pepper soup with goat meat", "Jollof rice"],
    profiles: ["bold", "dinner"],
    inStock: true,
    featured: true,
    nigerianCollection: true,
    badge: "premium-selection",
    originCountry: "South Africa",
  }),
  wine({
    slug: "swartland-merlot-ng",
    name: "Swartland Merlot",
    varietal: "Merlot",
    winery: "Swartland Winery",
    region: "Swartland, Western Cape",
    vintage: 2021,
    category: "red",
    priceCents: 0,
    nairaPrice: 15800,
    tastingNote:
      "Soft plum and red berry fruit with a gentle, rounded palate — approachable and generous.",
    aroma: "Plum, red cherry, subtle herb.",
    palate: "Soft and rounded, plush fruit, gentle tannin.",
    finish: "Smooth, easy, moderate.",
    abv: "13.5%",
    bottleSize: "750 ml",
    body: "Medium",
    sweetness: "Dry",
    pairings: ["Roast chicken", "Pasta", "Charcuterie"],
    nigerianPairings: ["Jollof rice", "Fried plantain", "Grilled chicken"],
    profiles: ["smooth"],
    inStock: true,
    nigerianCollection: true,
    originCountry: "South Africa",
  }),

  /* ── WHITES ── */
  wine({
    slug: "cederberg-sauvignon-blanc-ng",
    name: "Cederberg Sauvignon Blanc",
    varietal: "Sauvignon Blanc",
    winery: "Cederberg Private Cellar",
    region: "Cederberg, Western Cape",
    vintage: 2021,
    category: "white",
    priceCents: 0,
    nairaPrice: 34000,
    tastingNote:
      "Crisp and concentrated — gooseberry, citrus and a fine mineral edge from high-altitude vineyards.",
    aroma: "Gooseberry, lime, green fig, flint.",
    palate: "Taut and vivid, bright acidity, mineral core.",
    finish: "Clean, precise, persistent.",
    abv: "13.5%",
    bottleSize: "750 ml",
    body: "Medium",
    sweetness: "Dry",
    pairings: ["Oysters", "Goat cheese", "Grilled fish"],
    nigerianPairings: ["Grilled tilapia", "Pepper soup (fish)", "Fresh salad"],
    profiles: ["elegant", "dinner"],
    inStock: true,
    featured: true,
    nigerianCollection: true,
    badge: "premium-selection",
    originCountry: "South Africa",
  }),
  wine({
    slug: "cederberg-chenin-blanc-5gen-ng",
    name: "Cederberg 5 Generations Chenin Blanc",
    varietal: "Chenin Blanc",
    winery: "Cederberg Private Cellar",
    region: "Cederberg, Western Cape",
    vintage: 2021,
    category: "white",
    priceCents: 0,
    nairaPrice: 56300,
    tastingNote:
      "Reserve-level Chenin Blanc — rich texture, baked apple, honey and a long, structured finish.",
    aroma: "Baked apple, honey, almond, white blossom.",
    palate: "Full and textured, layered fruit, fine acidity holding weight.",
    finish: "Long, complex, refined.",
    abv: "13.5%",
    bottleSize: "750 ml",
    body: "Full",
    sweetness: "Dry",
    pairings: ["Scallops", "Roast pork", "Aged comté"],
    nigerianPairings: ["Grilled prawns", "Coconut rice", "Fisherman's okra"],
    profiles: ["elegant", "dinner"],
    inStock: true,
    nigerianCollection: true,
    badge: "premium-selection",
    originCountry: "South Africa",
  }),
  wine({
    slug: "swartland-sauvignon-blanc-ng",
    name: "Swartland Sauvignon Blanc",
    varietal: "Sauvignon Blanc",
    winery: "Swartland Winery",
    region: "Swartland, Western Cape",
    vintage: 2022,
    category: "white",
    priceCents: 0,
    nairaPrice: 15800,
    tastingNote:
      "Fresh and zesty — tropical fruit and cut grass with a clean, refreshing finish.",
    aroma: "Tropical fruit, gooseberry, fresh-cut grass.",
    palate: "Crisp, lively, well-defined fruit.",
    finish: "Clean and refreshing.",
    abv: "12.5%",
    bottleSize: "750 ml",
    body: "Light",
    sweetness: "Dry",
    pairings: ["Salad", "Seafood", "Goat cheese"],
    nigerianPairings: ["Pepper soup (fish)", "Grilled tilapia", "Fresh salad"],
    profiles: ["elegant"],
    inStock: true,
    nigerianCollection: true,
    originCountry: "South Africa",
  }),
  wine({
    slug: "swartland-chardonnay-ng",
    name: "Swartland Chardonnay",
    varietal: "Chardonnay",
    winery: "Swartland Winery",
    region: "Swartland, Western Cape",
    vintage: 2022,
    category: "white",
    priceCents: 0,
    nairaPrice: 15800,
    tastingNote:
      "Orchard fruit and gentle oak — a soft, approachable Chardonnay with balanced acidity.",
    aroma: "White peach, citrus, subtle oak.",
    palate: "Soft and rounded, gentle fruit, light oak touch.",
    finish: "Smooth, clean.",
    abv: "13.0%",
    bottleSize: "750 ml",
    body: "Medium",
    sweetness: "Dry",
    pairings: ["Roast chicken", "Scallops", "Soft cheese"],
    nigerianPairings: ["Grilled chicken", "Jollof rice (white)", "Coconut rice"],
    profiles: ["smooth", "dinner"],
    inStock: true,
    nigerianCollection: true,
    originCountry: "South Africa",
  }),
  wine({
    slug: "ghost-corner-semillon-ng",
    name: "Ghost Corner Semillon",
    varietal: "Sémillon",
    winery: "Lomond Wine Estate",
    region: "Cape South Coast, Western Cape",
    vintage: 2020,
    category: "white",
    priceCents: 0,
    nairaPrice: 26300,
    tastingNote:
      "Textured and layered — waxy citrus, dried herbs and a rich, generous palate.",
    aroma: "Lemon wax, dried herbs, white peach.",
    palate: "Full and waxy, textured, fine acid balance.",
    finish: "Long, complex, generous.",
    abv: "13.5%",
    bottleSize: "750 ml",
    body: "Full",
    sweetness: "Dry",
    pairings: ["White fish in butter", "Roast pork", "Soft cheese"],
    nigerianPairings: ["Grilled prawns", "Fisherman's okra", "Coconut rice"],
    profiles: ["elegant", "dinner"],
    inStock: true,
    nigerianCollection: true,
    badge: "editors-pick",
    originCountry: "South Africa",
  }),

  /* ── ROSÉ ── */
  wine({
    slug: "four-cousins-sweet-rose-ng",
    name: "Four Cousins Sweet Rosé",
    varietal: "Natural Sweet Rosé",
    winery: "Van Loveren",
    region: "Robertson, Western Cape",
    vintage: 2023,
    category: "rose",
    priceCents: 0,
    nairaPrice: 8300,
    tastingNote:
      "Fresh and easy — strawberry and candy fruit with a soft, off-dry finish.",
    aroma: "Strawberry, raspberry, candy fruit.",
    palate: "Soft, light, gently sweet, approachable.",
    finish: "Clean, easy, off-dry.",
    abv: "9.0%",
    bottleSize: "750 ml",
    body: "Light",
    sweetness: "Off-dry",
    pairings: ["Summer salads", "Light picnics", "Fresh fruit"],
    nigerianPairings: ["Small chops", "Fried plantain", "Fruit platters"],
    profiles: ["smooth"],
    inStock: true,
    nigerianCollection: true,
    originCountry: "South Africa",
  }),
  wine({
    slug: "sweet-kiss-rose-ng",
    name: "Sweet Kiss Natural Sweet Rosé",
    varietal: "Natural Sweet Rosé",
    winery: "Sweet Kiss",
    region: "Western Cape",
    vintage: 2023,
    category: "rose",
    priceCents: 0,
    nairaPrice: 6800,
    tastingNote:
      "Delicate and bright — soft red berry fruit with a light, easy-drinking character.",
    aroma: "Red berry, watermelon, floral hint.",
    palate: "Light, soft, gently sweet, refreshing.",
    finish: "Short, clean, easy.",
    abv: "8.5%",
    bottleSize: "750 ml",
    body: "Light",
    sweetness: "Off-dry",
    pairings: ["Light snacks", "Salads", "Desserts"],
    nigerianPairings: ["Small chops", "Puff puff", "Fruit platters"],
    profiles: ["smooth"],
    inStock: true,
    nigerianCollection: true,
    originCountry: "South Africa",
  }),

  /* ── DESSERT ── */
  wine({
    slug: "nederburg-noble-late-harvest-ng",
    name: "Nederburg Noble Late Harvest",
    varietal: "Noble Late Harvest",
    winery: "Nederburg",
    region: "Western Cape",
    vintage: 2019,
    category: "dessert",
    priceCents: 0,
    nairaPrice: 10700,
    tastingNote:
      "Luscious and golden — apricot, honey and orange blossom with bright acidity cutting the sweetness.",
    aroma: "Dried apricot, honey, orange blossom, marmalade.",
    palate: "Unctuous but lifted, sweet fruit balanced by fine acidity.",
    finish: "Long, luminous, never cloying.",
    abv: "10.5%",
    bottleSize: "375 ml",
    body: "Full",
    sweetness: "Sweet",
    pairings: ["Blue cheese", "Tarte tatin", "Crème brûlée"],
    nigerianPairings: ["Puff puff", "Coconut cake", "Plantain fritters"],
    profiles: ["smooth"],
    inStock: true,
    nigerianCollection: true,
    badge: "editors-pick",
    originCountry: "South Africa",
  }),
];

/* ── EXISTING PLACEHOLDER CATALOGUE ── */

export const wines: Wine[] = [
  wine({
    slug: "nocturne-cabernet-sauvignon",
    name: "Nocturne",
    varietal: "Cabernet Sauvignon",
    winery: "Placeholder Estate I",
    region: "Placeholder Region, Country",
    vintage: 2019,
    category: "red",
    priceCents: 14500,
    tastingNote: "Cassis, graphite and cedar over a long, quiet finish.",
    aroma: "Blackcurrant, violet, pencil shaving, a trace of cigar box.",
    palate: "Dense and composed, with fine-grained tannin and dark fruit.",
    finish: "Long, savoury, slowly resolving.",
    abv: "14.5%",
    bottleSize: "750 ml",
    body: "Full",
    sweetness: "Dry",
    pairings: ["Dry-aged beef", "Aged hard cheese", "Wild mushroom"],
    profiles: ["bold", "dinner"],
    inStock: true,
    featured: true,
  }),
  wine({
    slug: "veil-pinot-noir",
    name: "Veil",
    varietal: "Pinot Noir",
    winery: "Placeholder Estate II",
    region: "Placeholder Region, Country",
    vintage: 2021,
    category: "red",
    priceCents: 11800,
    tastingNote: "Red cherry and forest floor, silk-textured and restrained.",
    aroma: "Sour cherry, rose petal, damp earth.",
    palate: "Translucent and fine, with bright acidity carrying the fruit.",
    finish: "Clean, perfumed, gently persistent.",
    abv: "13.0%",
    bottleSize: "750 ml",
    body: "Light",
    sweetness: "Dry",
    pairings: ["Duck breast", "Salmon", "Truffle risotto"],
    profiles: ["elegant", "smooth", "dinner"],
    inStock: true,
    featured: true,
  }),
  wine({
    slug: "ember-malbec",
    name: "Ember",
    varietal: "Malbec",
    winery: "Placeholder Estate III",
    region: "Placeholder Region, Country",
    vintage: 2020,
    category: "red",
    priceCents: 8900,
    tastingNote: "Plum, cocoa and warm spice with a velvet centre.",
    aroma: "Black plum, mocha, sweet baking spice.",
    palate: "Generous and rounded, plush without weight.",
    finish: "Warm and lingering.",
    abv: "14.0%",
    bottleSize: "750 ml",
    body: "Full",
    sweetness: "Dry",
    pairings: ["Grilled lamb", "Charcuterie", "Dark chocolate"],
    profiles: ["bold", "smooth"],
    inStock: true,
  }),
  wine({
    slug: "obsidian-syrah",
    name: "Obsidian",
    varietal: "Shiraz / Syrah",
    winery: "Placeholder Estate IV",
    region: "Placeholder Region, Country",
    vintage: 2018,
    category: "red",
    priceCents: 16200,
    tastingNote: "Black pepper, olive and blackberry — brooding and complete.",
    aroma: "Blackberry, cracked pepper, smoked herb.",
    palate: "Muscular and dark, framed by firm tannin.",
    finish: "Smoky and long.",
    abv: "14.8%",
    bottleSize: "750 ml",
    body: "Full",
    sweetness: "Dry",
    pairings: ["Peppered steak", "Braised short rib", "Blue cheese"],
    profiles: ["bold", "dinner"],
    inStock: false,
  }),
  wine({
    slug: "lumen-chardonnay",
    name: "Lumen",
    varietal: "Chardonnay",
    winery: "Placeholder Estate V",
    region: "Placeholder Region, Country",
    vintage: 2022,
    category: "white",
    priceCents: 10400,
    tastingNote: "Orchard fruit and struck flint, held in a fine line of acid.",
    aroma: "White peach, hazelnut, citrus blossom.",
    palate: "Textured and taut, with a saline undertow.",
    finish: "Mineral and precise.",
    abv: "13.0%",
    bottleSize: "750 ml",
    body: "Medium",
    sweetness: "Dry",
    pairings: ["Roast chicken", "Scallops", "Soft cheese"],
    profiles: ["elegant", "dinner"],
    inStock: true,
    featured: true,
  }),
  wine({
    slug: "meridian-sauvignon-blanc",
    name: "Meridian",
    varietal: "Sauvignon Blanc",
    winery: "Placeholder Estate VI",
    region: "Placeholder Region, Country",
    vintage: 2023,
    category: "white",
    priceCents: 7600,
    tastingNote: "Grapefruit, cut grass and a cool stone edge.",
    aroma: "Lime zest, elderflower, gooseberry.",
    palate: "Crisp and vivid, tightly drawn.",
    finish: "Sharp, refreshing, short and clean.",
    abv: "12.5%",
    bottleSize: "750 ml",
    body: "Light",
    sweetness: "Dry",
    pairings: ["Oysters", "Goat cheese", "Green salad"],
    profiles: ["elegant"],
    inStock: true,
  }),
  wine({
    slug: "still-hour-riesling",
    name: "Still Hour",
    varietal: "Riesling",
    winery: "Placeholder Estate VII",
    region: "Placeholder Region, Country",
    vintage: 2021,
    category: "white",
    priceCents: 9200,
    tastingNote: "Lime, jasmine and wet slate with a whisper of sweetness.",
    aroma: "Lime leaf, white flower, petrol note.",
    palate: "Off-dry and weightless, acid holding everything upright.",
    finish: "Long and cooling.",
    abv: "11.5%",
    bottleSize: "750 ml",
    body: "Light",
    sweetness: "Off-dry",
    pairings: ["Spiced dishes", "Pork belly", "Shellfish"],
    profiles: ["elegant", "smooth"],
    inStock: true,
  }),
  wine({
    slug: "dusk-rose",
    name: "Dusk",
    varietal: "Provence-style Rosé",
    winery: "Placeholder Estate VIII",
    region: "Placeholder Region, Country",
    vintage: 2023,
    category: "rose",
    priceCents: 8200,
    tastingNote: "Wild strawberry and citrus pith, pale as early evening.",
    aroma: "Strawberry, pink grapefruit, herb garden.",
    palate: "Dry and quiet, with a fine chalky texture.",
    finish: "Delicate and clean.",
    abv: "12.5%",
    bottleSize: "750 ml",
    body: "Light",
    sweetness: "Dry",
    pairings: ["Summer vegetables", "Grilled prawns", "Soft herbs"],
    profiles: ["elegant", "smooth"],
    inStock: true,
  }),
  wine({
    slug: "aurora-champagne",
    name: "Aurora",
    varietal: "Champagne, Brut",
    winery: "Placeholder Maison I",
    region: "Placeholder Region, Country",
    vintage: 2017,
    category: "sparkling",
    priceCents: 21500,
    tastingNote: "Brioche, green apple and a fine, insistent bead.",
    aroma: "Toasted bread, orchard fruit, almond.",
    palate: "Creamy mousse over a taut, chalky core.",
    finish: "Bright, saline, extended.",
    abv: "12.0%",
    bottleSize: "750 ml",
    body: "Medium",
    sweetness: "Dry",
    pairings: ["Caviar", "Fried chicken", "Aged comté"],
    profiles: ["celebratory", "elegant"],
    inStock: true,
    featured: true,
  }),
  wine({
    slug: "cadence-prosecco",
    name: "Cadence",
    varietal: "Prosecco Superiore",
    winery: "Placeholder Maison II",
    region: "Placeholder Region, Country",
    vintage: 2023,
    category: "sparkling",
    priceCents: 5400,
    tastingNote: "Pear, white blossom and an easy, bright lift.",
    aroma: "Pear, acacia, green apple.",
    palate: "Light and frothy, gently fruited.",
    finish: "Crisp and short.",
    abv: "11.0%",
    bottleSize: "750 ml",
    body: "Light",
    sweetness: "Off-dry",
    pairings: ["Aperitivo", "Prosciutto", "Fresh fruit"],
    profiles: ["celebratory", "smooth"],
    inStock: true,
  }),
  wine({
    slug: "sable-cava",
    name: "Sable",
    varietal: "Cava Reserva",
    winery: "Placeholder Maison III",
    region: "Placeholder Region, Country",
    vintage: 2020,
    category: "sparkling",
    priceCents: 6800,
    tastingNote: "Lemon curd and toasted nut, dry and confident.",
    aroma: "Lemon, hazelnut, sea air.",
    palate: "Firm bubbles, savoury depth.",
    finish: "Dry and nutty.",
    abv: "11.5%",
    bottleSize: "750 ml",
    body: "Medium",
    sweetness: "Dry",
    pairings: ["Tapas", "Almonds", "Cured fish"],
    profiles: ["celebratory", "dinner"],
    inStock: true,
  }),
  wine({
    slug: "late-light-dessert",
    name: "Late Light",
    varietal: "Late Harvest Sémillon",
    winery: "Placeholder Estate IX",
    region: "Placeholder Region, Country",
    vintage: 2016,
    category: "dessert",
    priceCents: 12900,
    tastingNote: "Apricot, honey and candied peel, cut by bright acidity.",
    aroma: "Dried apricot, orange marmalade, beeswax.",
    palate: "Unctuous but lifted, never cloying.",
    finish: "Sweet, luminous, very long.",
    abv: "13.5%",
    bottleSize: "375 ml",
    body: "Full",
    sweetness: "Sweet",
    pairings: ["Blue cheese", "Tarte tatin", "Foie gras"],
    profiles: ["smooth"],
    inStock: true,
  }),
  /* ── Nigerian Collection wines appended ── */
  ...nigerianWines,
];

export const formatPrice = (cents: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(cents / 100);

export const formatNaira = (naira: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(naira);

export const getWine = (slug: string) => wines.find((w) => w.slug === slug);

export const categoryLabel = (id: WineCategory) =>
  categories.find((c) => c.id === id)?.label ?? id;

export const badgeLabel = (id: CurationBadge) =>
  curationBadges.find((c) => c.id === id)?.label ?? id;

export const getNigerianWines = () => wines.filter((w) => w.nigerianCollection);
