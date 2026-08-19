import catWine from "@/assets/cat-wine.jpg";
import catWhisky from "@/assets/cat-whisky.jpg";
import catVodka from "@/assets/cat-vodka.jpg";
import catGin from "@/assets/cat-gin.jpg";
import catCognac from "@/assets/cat-cognac.jpg";
import catRum from "@/assets/cat-rum.jpg";
import catBitters from "@/assets/cat-bitters.jpg";
import catOther from "@/assets/cat-other.jpg";
import catRose from "@/assets/cat-rose.jpg";
import catSparkling from "@/assets/cat-sparkling.jpg";

/**
 * MELATONIN VINTNER — Premium Drinks Collection
 *
 * Product catalog with 28 curated products across 8 categories.
 * Trait descriptions provided by the brand. Prices, ABV, and detailed
 * tasting notes are not available — left as "unknown" rather than fabricated.
 */

export type ProductCategory =
  | "wine"
  | "whisky"
  | "vodka"
  | "gin"
  | "cognac"
  | "rum"
  | "bitters"
  | "other";

export type WineSubType = "red" | "white" | "rose" | "sparkling" | "dessert" | null;

export type CurationBadge =
  | "vintners-choice"
  | "premium-selection"
  | "editors-pick"
  | "best-celebrations"
  | "best-dinner";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  /** For wines: red, white, rosé, sparkling. Null for spirits. */
  wineSubType: WineSubType;
  /** Short trait line, e.g. "Classic • Smooth • Elegant" */
  traits: string;
  /** Three individual trait keywords for display as tags */
  traitTags: string[];
  /** Brand/producer */
  brand: string;
  /** Category-level bottle image */
  image: string;
  imageAlt: string;
  /** Brief description based on the brand's provided traits */
  description: string;
  /** Price in Naira, if known */
  nairaPrice?: number;
  inStock: boolean;
  featured?: boolean;
  badge?: CurationBadge;
}

export interface CategoryInfo {
  id: ProductCategory;
  label: string;
  blurb: string;
  image: string;
  emoji: string;
}

export const categories: CategoryInfo[] = [
  {
    id: "wine",
    label: "Wines",
    blurb: "Classic selections for every occasion.",
    image: catWine,
    emoji: "🍷",
  },
  {
    id: "whisky",
    label: "Whisky",
    blurb: "Bold, smooth and distinctive.",
    image: catWhisky,
    emoji: "🥃",
  },
  {
    id: "vodka",
    label: "Vodka",
    blurb: "Clean, crisp and versatile.",
    image: catVodka,
    emoji: "🍸",
  },
  {
    id: "gin",
    label: "Gin",
    blurb: "Classic, aromatic and refreshing.",
    image: catGin,
    emoji: "🍹",
  },
  {
    id: "cognac",
    label: "Cognac & Brandy",
    blurb: "Iconic, refined and sophisticated.",
    image: catCognac,
    emoji: "🥃",
  },
  {
    id: "rum",
    label: "Rum",
    blurb: "Rich, smooth and distinctive.",
    image: catRum,
    emoji: "🍹",
  },
  {
    id: "bitters",
    label: "Bitters & Specialty",
    blurb: "Bold, aromatic and distinctive.",
    image: catBitters,
    emoji: "🍾",
  },
  {
    id: "other",
    label: "Other Premium Spirits",
    blurb: "Smooth, distinctive and classic.",
    image: catOther,
    emoji: "🥃",
  },
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

const imageForCategory: Record<ProductCategory, string> = {
  wine: catWine,
  whisky: catWhisky,
  vodka: catVodka,
  gin: catGin,
  cognac: catCognac,
  rum: catRum,
  bitters: catBitters,
  other: catOther,
};

function product(p: Omit<Product, "image" | "imageAlt">): Product {
  const image = p.wineSubType === "rose" ? catRose
    : p.wineSubType === "sparkling" ? catSparkling
    : imageForCategory[p.category];
  return {
    ...p,
    image,
    imageAlt: `${p.name} — ${p.traits}`,
  };
}

export const products: Product[] = [
  /* ── WINES ── */
  product({
    slug: "carlo-rossi",
    name: "Carlo Rossi",
    category: "wine",
    wineSubType: "red",
    traits: "Classic • Smooth • Elegant",
    traitTags: ["Classic", "Smooth", "Elegant"],
    brand: "Carlo Rossi",
    description: "A classic choice known for its smooth, approachable character. Elegant enough for the table, easy enough for any evening.",
    inStock: true,
    featured: true,
    badge: "vintners-choice",
  }),
  product({
    slug: "four-cousins",
    name: "Four Cousins",
    category: "wine",
    wineSubType: "red",
    traits: "Fruity • Smooth • Refreshing",
    traitTags: ["Fruity", "Smooth", "Refreshing"],
    brand: "Van Loveren",
    description: "Fruity and refreshing with a smooth finish. A popular favourite that's easy to enjoy and easy to share.",
    inStock: true,
    featured: true,
  }),
  product({
    slug: "andre-rose",
    name: "André Rosé",
    category: "wine",
    wineSubType: "rose",
    traits: "Delicate • Fruity • Rosé Wine",
    traitTags: ["Delicate", "Fruity", "Rosé"],
    brand: "André",
    description: "A delicate rosé with fruity character. Light, fresh and perfect for warm evenings and celebrations.",
    inStock: true,
  }),
  product({
    slug: "4th-street",
    name: "4th Street",
    category: "wine",
    wineSubType: "red",
    traits: "Smooth • Fruity • Easy-Drinking",
    traitTags: ["Smooth", "Fruity", "Easy-Drinking"],
    brand: "4th Street",
    description: "Smooth, fruity and easy-drinking. An accessible wine that doesn't demand attention but rewards it.",
    inStock: true,
  }),
  product({
    slug: "cape-more",
    name: "Cape More",
    category: "wine",
    wineSubType: "red",
    traits: "Rich • Smooth • Refined",
    traitTags: ["Rich", "Smooth", "Refined"],
    brand: "Cape More",
    description: "Rich and refined with a smooth profile. A step up for those who appreciate depth without complexity.",
    inStock: true,
  }),
  product({
    slug: "mixed-southern-snow",
    name: "Mixed Southern Snow",
    category: "wine",
    wineSubType: "white",
    traits: "Fruity • Refreshing • Smooth",
    traitTags: ["Fruity", "Refreshing", "Smooth"],
    brand: "Mixed Southern",
    description: "Fruity and refreshing with a smooth finish. A cool, easy white for casual premium moments.",
    inStock: true,
  }),
  product({
    slug: "toma",
    name: "Toma",
    category: "wine",
    wineSubType: "red",
    traits: "Elegant • Smooth • Enjoyable",
    traitTags: ["Elegant", "Smooth", "Enjoyable"],
    brand: "Toma",
    description: "Elegant and smooth with broad appeal. A wine that's simply enjoyable — no ceremony required.",
    inStock: true,
  }),
  product({
    slug: "four-cousins-sparkling",
    name: "Four Cousins Sparkling",
    category: "wine",
    wineSubType: "sparkling",
    traits: "Celebratory • Crisp • Refreshing",
    traitTags: ["Celebratory", "Crisp", "Refreshing"],
    brand: "Van Loveren",
    description: "Crisp and refreshing with a celebratory spirit. For the moments worth marking with a pop.",
    inStock: true,
    featured: true,
    badge: "best-celebrations",
  }),
  product({
    slug: "dominio-rose",
    name: "Dominio Rosé",
    category: "wine",
    wineSubType: "rose",
    traits: "Delicate • Fruity • Rosé Wine",
    traitTags: ["Delicate", "Fruity", "Rosé"],
    brand: "Dominio",
    description: "A delicate rosé with a fruity, easy character. Light on the palate, generous in the glass.",
    inStock: true,
  }),
  product({
    slug: "cape-discovery",
    name: "Cape Discovery",
    category: "wine",
    wineSubType: "red",
    traits: "Smooth • Fruity • Approachable",
    traitTags: ["Smooth", "Fruity", "Approachable"],
    brand: "Cape Discovery",
    description: "Smooth and approachable with a fruity profile. A welcoming wine for any table.",
    inStock: true,
  }),

  /* ── WHISKY ── */
  product({
    slug: "8pm-whisky",
    name: "8 PM Whisky",
    category: "whisky",
    wineSubType: null,
    traits: "Bold • Smooth • Distinctive",
    traitTags: ["Bold", "Smooth", "Distinctive"],
    brand: "8 PM",
    description: "Bold and distinctive with a smooth finish. A whisky that makes its presence known without demanding experience.",
    inStock: true,
    featured: true,
    badge: "editors-pick",
  }),
  product({
    slug: "zenith-whisky-honey",
    name: "Zenith Whisky & Honey",
    category: "whisky",
    wineSubType: null,
    traits: "Rich • Smooth • Honeyed",
    traitTags: ["Rich", "Smooth", "Honeyed"],
    brand: "Zenith",
    description: "Rich and smooth with a honeyed warmth. A whisky that leans into comfort — rounded, sweet, generous.",
    inStock: true,
  }),
  product({
    slug: "black-velvet",
    name: "Black Velvet",
    category: "whisky",
    wineSubType: null,
    traits: "Smooth • Full-Bodied • Classic",
    traitTags: ["Smooth", "Full-Bodied", "Classic"],
    brand: "Black Velvet",
    description: "A classic Canadian whisky — smooth and full-bodied with a timeless profile.",
    inStock: true,
  }),

  /* ── VODKA ── */
  product({
    slug: "smirnoff-premium",
    name: "Smirnoff Premium",
    category: "vodka",
    wineSubType: null,
    traits: "Clean • Crisp • Versatile",
    traitTags: ["Clean", "Crisp", "Versatile"],
    brand: "Smirnoff",
    description: "Clean, crisp and endlessly versatile. The reliable choice for cocktails and mixed drinks.",
    inStock: true,
    featured: true,
  }),
  product({
    slug: "ciroc",
    name: "Cîroc",
    category: "vodka",
    wineSubType: null,
    traits: "Refined • Smooth • Premium",
    traitTags: ["Refined", "Smooth", "Premium"],
    brand: "Cîroc",
    description: "Refined and premium with a smooth, grape-derived character. A vodka that stands on its own.",
    inStock: true,
    featured: true,
    badge: "premium-selection",
  }),

  /* ── GIN ── */
  product({
    slug: "lords-gin",
    name: "Lords Gin",
    category: "gin",
    wineSubType: null,
    traits: "Classic • Aromatic • Smooth",
    traitTags: ["Classic", "Aromatic", "Smooth"],
    brand: "Lords",
    description: "Classic and aromatic with a smooth finish. A gin that plays well with tonic, or stands alone.",
    inStock: true,
  }),
  product({
    slug: "british-soldier",
    name: "British Soldier",
    category: "gin",
    wineSubType: null,
    traits: "Bold • Refreshing • Distinctive",
    traitTags: ["Bold", "Refreshing", "Distinctive"],
    brand: "British Soldier",
    description: "Bold and distinctive with a refreshing edge. A gin with personality — not for the cautious.",
    inStock: true,
  }),
  product({
    slug: "squadron-premium",
    name: "Squadron Premium Size",
    category: "gin",
    wineSubType: null,
    traits: "Smooth • Classic • Full-Bodied",
    traitTags: ["Smooth", "Classic", "Full-Bodied"],
    brand: "Squadron",
    description: "Smooth and full-bodied with a classic gin profile. Generous in size, generous in character.",
    inStock: true,
  }),

  /* ── COGNAC & BRANDY ── */
  product({
    slug: "monnet",
    name: "Monnet",
    category: "cognac",
    wineSubType: null,
    traits: "Refined • Smooth • Elegant",
    traitTags: ["Refined", "Smooth", "Elegant"],
    brand: "Monnet",
    description: "Refined and elegant with a smooth delivery. A cognac for quiet appreciation.",
    inStock: true,
  }),
  product({
    slug: "martell",
    name: "Martell",
    category: "cognac",
    wineSubType: null,
    traits: "Rich • Sophisticated • Classic",
    traitTags: ["Rich", "Sophisticated", "Classic"],
    brand: "Martell",
    description: "Rich and sophisticated — one of the great cognac houses. Classic for a reason.",
    inStock: true,
    featured: true,
    badge: "premium-selection",
  }),
  product({
    slug: "hennessy",
    name: "Hennessy",
    category: "cognac",
    wineSubType: null,
    traits: "Iconic • Refined • Full-Bodied",
    traitTags: ["Iconic", "Refined", "Full-Bodied"],
    brand: "Hennessy",
    description: "Iconic and refined with a full-bodied presence. The cognac that defines the category.",
    inStock: true,
    featured: true,
    badge: "vintners-choice",
  }),
  product({
    slug: "remy-martin",
    name: "Rémy Martin",
    category: "cognac",
    wineSubType: null,
    traits: "Elegant • Rich • Distinctive",
    traitTags: ["Elegant", "Rich", "Distinctive"],
    brand: "Rémy Martin",
    description: "Elegant and rich with a distinctive character. A cognac of standing and tradition.",
    inStock: true,
  }),
  product({
    slug: "garret",
    name: "Garret",
    category: "cognac",
    wineSubType: null,
    traits: "Smooth • Classic • Enjoyable",
    traitTags: ["Smooth", "Classic", "Enjoyable"],
    brand: "Garret",
    description: "Smooth and classic with an enjoyable, approachable profile. A brandy for everyday refinement.",
    inStock: true,
  }),

  /* ── RUM ── */
  product({
    slug: "old-captain",
    name: "Old Captain",
    category: "rum",
    wineSubType: null,
    traits: "Rich • Smooth • Distinctive",
    traitTags: ["Rich", "Smooth", "Distinctive"],
    brand: "Old Captain",
    description: "Rich and smooth with a distinctive character. A rum with depth and warmth.",
    inStock: true,
  }),

  /* ── BITTERS & SPECIALTY ── */
  product({
    slug: "origin-premium",
    name: "Origin Premium Size",
    category: "bitters",
    wineSubType: null,
    traits: "Bold • Distinctive • Full-Bodied",
    traitTags: ["Bold", "Distinctive", "Full-Bodied"],
    brand: "Origin",
    description: "Bold and full-bodied with a distinctive profile. A specialty spirit for those who know.",
    inStock: true,
  }),
  product({
    slug: "action-bitters",
    name: "Action Bitters",
    category: "bitters",
    wineSubType: null,
    traits: "Aromatic • Bold • Refreshing",
    traitTags: ["Aromatic", "Bold", "Refreshing"],
    brand: "Action",
    description: "Aromatic and bold with a refreshing edge. A bitters that brings character to any mix.",
    inStock: true,
  }),

  /* ── OTHER PREMIUM SPIRITS ── */
  product({
    slug: "good-fathers",
    name: "Good Fathers",
    category: "other",
    wineSubType: null,
    traits: "Smooth • Distinctive • Classic",
    traitTags: ["Smooth", "Distinctive", "Classic"],
    brand: "Good Fathers",
    description: "Smooth and distinctive with a classic profile. A premium spirit that earns its place.",
    inStock: true,
  }),
  product({
    slug: "buen-amigo",
    name: "Buen Amigo",
    category: "other",
    wineSubType: null,
    traits: "Bold • Vibrant • Agave Spirit",
    traitTags: ["Bold", "Vibrant", "Agave Spirit"],
    brand: "Buen Amigo",
    description: "Bold and vibrant — an agave spirit with energy. For the moments that call for something different.",
    inStock: true,
    badge: "editors-pick",
  }),
];

/* ── Helpers ── */

export const categoryLabel = (id: ProductCategory) =>
  categories.find((c) => c.id === id)?.label ?? id;

export const badgeLabel = (id: CurationBadge) =>
  curationBadges.find((c) => c.id === id)?.label ?? id;

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const formatNaira = (naira: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(naira);

/* Keep these for backward compatibility with cart */
export const formatPrice = (cents: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(cents / 100);

export type Wine = Product;
export const wines = products;
export const getWine = getProduct;
