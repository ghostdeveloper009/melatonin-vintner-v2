import catWine from "@/assets/cat-wine.jpg";
import catWhisky from "@/assets/cat-whisky.jpg";
import catVodka from "@/assets/cat-vodka.jpg";
import catGin from "@/assets/cat-gin.jpg";
import catCognac from "@/assets/cat-cognac.jpg";
import catRum from "@/assets/cat-rum.jpg";
import catBitters from "@/assets/cat-bitters.jpg";
import catOther from "@/assets/cat-other.jpg";

/* Per-product unlabeled bottle photos (20 distinct images).
 * All generated as honest placeholders — no fabricated labels or brand names.
 * Replace individually with real photography as it becomes available. */
import redWine1 from "@/assets/products/red-wine-1.jpg";
import redWine2 from "@/assets/products/red-wine-2.jpg";
import redWine3 from "@/assets/products/red-wine-3.jpg";
import whiteWine1 from "@/assets/products/white-wine-1.jpg";
import roseWine1 from "@/assets/products/rose-wine-1.jpg";
import sparkling1 from "@/assets/products/sparkling-1.jpg";
import whisky1 from "@/assets/products/whisky-1.jpg";
import whisky2 from "@/assets/products/whisky-2.jpg";
import vodka1 from "@/assets/products/vodka-1.jpg";
import vodka2 from "@/assets/products/vodka-2.jpg";
import gin1 from "@/assets/products/gin-1.jpg";
import gin2 from "@/assets/products/gin-2.jpg";
import cognac1 from "@/assets/products/cognac-1.jpg";
import cognac2 from "@/assets/products/cognac-2.jpg";
import cognac3 from "@/assets/products/cognac-3.jpg";
import rum1 from "@/assets/products/rum-1.jpg";
import bitters1 from "@/assets/products/bitters-1.jpg";
import bitters2 from "@/assets/products/bitters-2.jpg";
import agave1 from "@/assets/products/agave-1.jpg";
import flask1 from "@/assets/products/flask-1.jpg";

/**
 * MELATONIN VINTNER — Premium Drinks Collection
 *
 * Product catalog with 28 curated products across 8 categories.
 * Trait descriptions provided by the brand. Prices are not published —
 * customers enquire via phone or WhatsApp.
 *
 * IMAGES: Every product has its own `image` field pointing to an individual
 * asset file. All current images are unlabeled bottle placeholders
 * (imageSource: "placeholder") — no fabricated labels or brand names.
 * Swap individual files with real photography as it becomes available.
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

export type ImageSource = "photo" | "brand-asset" | "placeholder";

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
  wineSubType: WineSubType;
  traits: string;
  traitTags: string[];
  brand: string;
  /** Individual product image — never a shared category image */
  image: string;
  /** Descriptive alt text for accessibility/SEO — describes the image, not the marketing */
  imageAlt: string;
  description: string;
  /** Flags whether the image is real photography or a placeholder */
  imageSource: ImageSource;
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
  { id: "wine", label: "Wines", blurb: "Classic selections for every occasion.", image: catWine, emoji: "🍷" },
  { id: "whisky", label: "Whisky", blurb: "Bold, smooth and distinctive.", image: catWhisky, emoji: "🥃" },
  { id: "vodka", label: "Vodka", blurb: "Clean, crisp and versatile.", image: catVodka, emoji: "🍸" },
  { id: "gin", label: "Gin", blurb: "Classic, aromatic and refreshing.", image: catGin, emoji: "🍹" },
  { id: "cognac", label: "Cognac & Brandy", blurb: "Iconic, refined and sophisticated.", image: catCognac, emoji: "🥃" },
  { id: "rum", label: "Rum", blurb: "Rich, smooth and distinctive.", image: catRum, emoji: "🍹" },
  { id: "bitters", label: "Bitters & Specialty", blurb: "Bold, aromatic and distinctive.", image: catBitters, emoji: "🍾" },
  { id: "other", label: "Other Premium Spirits", blurb: "Smooth, distinctive and classic.", image: catOther, emoji: "🥃" },
];

export const curationBadges: { id: CurationBadge; label: string; hint: string }[] = [
  { id: "vintners-choice", label: "Vintner's Choice", hint: "Selected by our house for distinction" },
  { id: "premium-selection", label: "Premium Selection", hint: "Reserve-level quality and character" },
  { id: "editors-pick", label: "Editor's Pick", hint: "A discovery worth sharing" },
  { id: "best-celebrations", label: "Best for Celebrations", hint: "For the moments worth marking" },
  { id: "best-dinner", label: "Best for Dinner", hint: "Built for the table and the evening" },
];

export const products: Product[] = [
  /* ── WINES ── */
  {
    slug: "carlo-rossi",
    name: "Carlo Rossi",
    category: "wine",
    wineSubType: "red",
    traits: "Classic • Smooth • Elegant",
    traitTags: ["Classic", "Smooth", "Elegant"],
    brand: "Carlo Rossi",
    image: redWine1,
    imageAlt: "Unlabeled tall red wine bottle with dark glass on a dark surface, placeholder product photo",
    imageSource: "placeholder",
    description: "A classic choice known for its smooth, approachable character. Elegant enough for the table, easy enough for any evening.",
    inStock: true,
    featured: true,
    badge: "vintners-choice",
  },
  {
    slug: "four-cousins",
    name: "Four Cousins",
    category: "wine",
    wineSubType: "red",
    traits: "Fruity • Smooth • Refreshing",
    traitTags: ["Fruity", "Smooth", "Refreshing"],
    brand: "Van Loveren",
    image: redWine2,
    imageAlt: "Unlabeled rounder red wine bottle on a walnut surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Fruity and refreshing with a smooth finish. A popular favourite that's easy to enjoy and easy to share.",
    inStock: true,
    featured: true,
  },
  {
    slug: "andre-rose",
    name: "André Rosé",
    category: "wine",
    wineSubType: "rose",
    traits: "Delicate • Fruity • Rosé Wine",
    traitTags: ["Delicate", "Fruity", "Rosé"],
    brand: "André",
    image: roseWine1,
    imageAlt: "Unlabeled rosé wine bottle with pink-tinted glass on a dark surface, placeholder product photo",
    imageSource: "placeholder",
    description: "A delicate rosé with fruity character. Light, fresh and perfect for warm evenings and celebrations.",
    inStock: true,
  },
  {
    slug: "4th-street",
    name: "4th Street",
    category: "wine",
    wineSubType: "red",
    traits: "Smooth • Fruity • Easy-Drinking",
    traitTags: ["Smooth", "Fruity", "Easy-Drinking"],
    brand: "4th Street",
    image: redWine3,
    imageAlt: "Unlabeled Bordeaux-style red wine bottle on a walnut surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Smooth, fruity and easy-drinking. An accessible wine that doesn't demand attention but rewards it.",
    inStock: true,
  },
  {
    slug: "cape-more",
    name: "Cape More",
    category: "wine",
    wineSubType: "red",
    traits: "Rich • Smooth • Refined",
    traitTags: ["Rich", "Smooth", "Refined"],
    brand: "Cape More",
    image: redWine1,
    imageAlt: "Unlabeled tall red wine bottle with dark glass, placeholder product photo",
    imageSource: "placeholder",
    description: "Rich and refined with a smooth profile. A step up for those who appreciate depth without complexity.",
    inStock: true,
  },
  {
    slug: "mixed-southern-snow",
    name: "Mixed Southern Snow",
    category: "wine",
    wineSubType: "white",
    traits: "Fruity • Refreshing • Smooth",
    traitTags: ["Fruity", "Refreshing", "Smooth"],
    brand: "Mixed Southern",
    image: whiteWine1,
    imageAlt: "Unlabeled white wine bottle with clear pale green glass on a dark surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Fruity and refreshing with a smooth finish. A cool, easy white for casual premium moments.",
    inStock: true,
  },
  {
    slug: "toma",
    name: "Toma",
    category: "wine",
    wineSubType: "red",
    traits: "Elegant • Smooth • Enjoyable",
    traitTags: ["Elegant", "Smooth", "Enjoyable"],
    brand: "Toma",
    image: redWine2,
    imageAlt: "Unlabeled round red wine bottle on a walnut surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Elegant and smooth with broad appeal. A wine that's simply enjoyable — no ceremony required.",
    inStock: true,
  },
  {
    slug: "four-cousins-sparkling",
    name: "Four Cousins Sparkling",
    category: "wine",
    wineSubType: "sparkling",
    traits: "Celebratory • Crisp • Refreshing",
    traitTags: ["Celebratory", "Crisp", "Refreshing"],
    brand: "Van Loveren",
    image: sparkling1,
    imageAlt: "Unlabeled sparkling wine bottle with gold foil neck on a dark surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Crisp and refreshing with a celebratory spirit. For the moments worth marking with a pop.",
    inStock: true,
    featured: true,
    badge: "best-celebrations",
  },
  {
    slug: "dominio-rose",
    name: "Dominio Rosé",
    category: "wine",
    wineSubType: "rose",
    traits: "Delicate • Fruity • Rosé Wine",
    traitTags: ["Delicate", "Fruity", "Rosé"],
    brand: "Dominio",
    image: roseWine1,
    imageAlt: "Unlabeled rosé wine bottle with pink-tinted glass, placeholder product photo",
    imageSource: "placeholder",
    description: "A delicate rosé with a fruity, easy character. Light on the palate, generous in the glass.",
    inStock: true,
  },
  {
    slug: "cape-discovery",
    name: "Cape Discovery",
    category: "wine",
    wineSubType: "red",
    traits: "Smooth • Fruity • Approachable",
    traitTags: ["Smooth", "Fruity", "Approachable"],
    brand: "Cape Discovery",
    image: redWine3,
    imageAlt: "Unlabeled Bordeaux-style red wine bottle, placeholder product photo",
    imageSource: "placeholder",
    description: "Smooth and approachable with a fruity profile. A welcoming wine for any table.",
    inStock: true,
  },

  /* ── WHISKY ── */
  {
    slug: "8pm-whisky",
    name: "8 PM Whisky",
    category: "whisky",
    wineSubType: null,
    traits: "Bold • Smooth • Distinctive",
    traitTags: ["Bold", "Smooth", "Distinctive"],
    brand: "8 PM",
    image: whisky1,
    imageAlt: "Unlabeled square-shouldered whisky bottle with amber liquid on a walnut surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Bold and distinctive with a smooth finish. A whisky that makes its presence known without demanding experience.",
    inStock: true,
    featured: true,
    badge: "editors-pick",
  },
  {
    slug: "zenith-whisky-honey",
    name: "Zenith Whisky & Honey",
    category: "whisky",
    wineSubType: null,
    traits: "Rich • Smooth • Honeyed",
    traitTags: ["Rich", "Smooth", "Honeyed"],
    brand: "Zenith",
    image: whisky2,
    imageAlt: "Unlabeled round whisky bottle with amber liquid on a dark surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Rich and smooth with a honeyed warmth. A whisky that leans into comfort — rounded, sweet, generous.",
    inStock: true,
  },
  {
    slug: "black-velvet",
    name: "Black Velvet",
    category: "whisky",
    wineSubType: null,
    traits: "Smooth • Full-Bodied • Classic",
    traitTags: ["Smooth", "Full-Bodied", "Classic"],
    brand: "Black Velvet",
    image: whisky1,
    imageAlt: "Unlabeled square whisky bottle with amber liquid, placeholder product photo",
    imageSource: "placeholder",
    description: "A classic Canadian whisky — smooth and full-bodied with a timeless profile.",
    inStock: true,
  },

  /* ── VODKA ── */
  {
    slug: "smirnoff-premium",
    name: "Smirnoff Premium",
    category: "vodka",
    wineSubType: null,
    traits: "Clean • Crisp • Versatile",
    traitTags: ["Clean", "Crisp", "Versatile"],
    brand: "Smirnoff",
    image: vodka1,
    imageAlt: "Unlabeled clear glass vodka bottle on a dark surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Clean, crisp and endlessly versatile. The reliable choice for cocktails and mixed drinks.",
    inStock: true,
    featured: true,
  },
  {
    slug: "ciroc",
    name: "Cîroc",
    category: "vodka",
    wineSubType: null,
    traits: "Refined • Smooth • Premium",
    traitTags: ["Refined", "Smooth", "Premium"],
    brand: "Cîroc",
    image: vodka2,
    imageAlt: "Unlabeled frosted glass vodka bottle on a dark surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Refined and premium with a smooth, grape-derived character. A vodka that stands on its own.",
    inStock: true,
    featured: true,
    badge: "premium-selection",
  },

  /* ── GIN ── */
  {
    slug: "lords-gin",
    name: "Lords Gin",
    category: "gin",
    wineSubType: null,
    traits: "Classic • Aromatic • Smooth",
    traitTags: ["Classic", "Aromatic", "Smooth"],
    brand: "Lords",
    image: gin1,
    imageAlt: "Unlabeled gin bottle with clear glass and slight green tint on a dark surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Classic and aromatic with a smooth finish. A gin that plays well with tonic, or stands alone.",
    inStock: true,
  },
  {
    slug: "british-soldier",
    name: "British Soldier",
    category: "gin",
    wineSubType: null,
    traits: "Bold • Refreshing • Distinctive",
    traitTags: ["Bold", "Refreshing", "Distinctive"],
    brand: "British Soldier",
    image: gin2,
    imageAlt: "Unlabeled tall narrow gin bottle on a dark surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Bold and distinctive with a refreshing edge. A gin with personality — not for the cautious.",
    inStock: true,
  },
  {
    slug: "squadron-premium",
    name: "Squadron Premium Size",
    category: "gin",
    wineSubType: null,
    traits: "Smooth • Classic • Full-Bodied",
    traitTags: ["Smooth", "Classic", "Full-Bodied"],
    brand: "Squadron",
    image: gin1,
    imageAlt: "Unlabeled gin bottle with clear glass on a dark surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Smooth and full-bodied with a classic gin profile. Generous in size, generous in character.",
    inStock: true,
  },

  /* ── COGNAC & BRANDY ── */
  {
    slug: "monnet",
    name: "Monnet",
    category: "cognac",
    wineSubType: null,
    traits: "Refined • Smooth • Elegant",
    traitTags: ["Refined", "Smooth", "Elegant"],
    brand: "Monnet",
    image: cognac1,
    imageAlt: "Unlabeled tall elegant cognac bottle with amber liquid on a walnut surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Refined and elegant with a smooth delivery. A cognac for quiet appreciation.",
    inStock: true,
  },
  {
    slug: "martell",
    name: "Martell",
    category: "cognac",
    wineSubType: null,
    traits: "Rich • Sophisticated • Classic",
    traitTags: ["Rich", "Sophisticated", "Classic"],
    brand: "Martell",
    image: cognac2,
    imageAlt: "Unlabeled round cognac bottle with amber liquid on a dark surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Rich and sophisticated — one of the great cognac houses. Classic for a reason.",
    inStock: true,
    featured: true,
    badge: "premium-selection",
  },
  {
    slug: "hennessy",
    name: "Hennessy",
    category: "cognac",
    wineSubType: null,
    traits: "Iconic • Refined • Full-Bodied",
    traitTags: ["Iconic", "Refined", "Full-Bodied"],
    brand: "Hennessy",
    image: cognac3,
    imageAlt: "Unlabeled squat wide cognac bottle with amber liquid on a dark surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Iconic and refined with a full-bodied presence. The cognac that defines the category.",
    inStock: true,
    featured: true,
    badge: "vintners-choice",
  },
  {
    slug: "remy-martin",
    name: "Rémy Martin",
    category: "cognac",
    wineSubType: null,
    traits: "Elegant • Rich • Distinctive",
    traitTags: ["Elegant", "Rich", "Distinctive"],
    brand: "Rémy Martin",
    image: cognac1,
    imageAlt: "Unlabeled tall cognac bottle with amber liquid on a walnut surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Elegant and rich with a distinctive character. A cognac of standing and tradition.",
    inStock: true,
  },
  {
    slug: "garret",
    name: "Garret",
    category: "cognac",
    wineSubType: null,
    traits: "Smooth • Classic • Enjoyable",
    traitTags: ["Smooth", "Classic", "Enjoyable"],
    brand: "Garret",
    image: cognac2,
    imageAlt: "Unlabeled round cognac bottle with amber liquid, placeholder product photo",
    imageSource: "placeholder",
    description: "Smooth and classic with an enjoyable, approachable profile. A brandy for everyday refinement.",
    inStock: true,
  },

  /* ── RUM ── */
  {
    slug: "old-captain",
    name: "Old Captain",
    category: "rum",
    wineSubType: null,
    traits: "Rich • Smooth • Distinctive",
    traitTags: ["Rich", "Smooth", "Distinctive"],
    brand: "Old Captain",
    image: rum1,
    imageAlt: "Unlabeled dark rum bottle with rich amber liquid on a dark surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Rich and smooth with a distinctive character. A rum with depth and warmth.",
    inStock: true,
  },

  /* ── BITTERS & SPECIALTY ── */
  {
    slug: "origin-premium",
    name: "Origin Premium Size",
    category: "bitters",
    wineSubType: null,
    traits: "Bold • Distinctive • Full-Bodied",
    traitTags: ["Bold", "Distinctive", "Full-Bodied"],
    brand: "Origin",
    image: bitters1,
    imageAlt: "Unlabeled bitters bottle with dark herbal liquid on a dark surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Bold and full-bodied with a distinctive profile. A specialty spirit for those who know.",
    inStock: true,
  },
  {
    slug: "action-bitters",
    name: "Action Bitters",
    category: "bitters",
    wineSubType: null,
    traits: "Aromatic • Bold • Refreshing",
    traitTags: ["Aromatic", "Bold", "Refreshing"],
    brand: "Action",
    image: bitters2,
    imageAlt: "Unlabeled small round bitters bottle with dark liquid on a walnut surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Aromatic and bold with a refreshing edge. A bitters that brings character to any mix.",
    inStock: true,
  },

  /* ── OTHER PREMIUM SPIRITS ── */
  {
    slug: "good-fathers",
    name: "Good Fathers",
    category: "other",
    wineSubType: null,
    traits: "Smooth • Distinctive • Classic",
    traitTags: ["Smooth", "Distinctive", "Classic"],
    brand: "Good Fathers",
    image: flask1,
    imageAlt: "Unlabeled classic flask-shaped spirits bottle on a walnut surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Smooth and distinctive with a classic profile. A premium spirit that earns its place.",
    inStock: true,
  },
  {
    slug: "buen-amigo",
    name: "Buen Amigo",
    category: "other",
    wineSubType: null,
    traits: "Bold • Vibrant • Agave Spirit",
    traitTags: ["Bold", "Vibrant", "Agave Spirit"],
    brand: "Buen Amigo",
    image: agave1,
    imageAlt: "Unlabeled agave spirit bottle with clear golden liquid on a dark surface, placeholder product photo",
    imageSource: "placeholder",
    description: "Bold and vibrant — an agave spirit with energy. For the moments that call for something different.",
    inStock: true,
    badge: "editors-pick",
  },
];

/* ── Helpers ── */

export const categoryLabel = (id: ProductCategory) =>
  categories.find((c) => c.id === id)?.label ?? id;

export const badgeLabel = (id: CurationBadge) =>
  curationBadges.find((c) => c.id === id)?.label ?? id;

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

/* ── Backward compatibility ── */
export type Wine = Product;
export const wines = products;
export const getWine = getProduct;
