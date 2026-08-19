import catWine from "@/assets/cat-wine.jpg";
import catWhisky from "@/assets/cat-whisky.jpg";
import catVodka from "@/assets/cat-vodka.jpg";
import catGin from "@/assets/cat-gin.jpg";
import catCognac from "@/assets/cat-cognac.jpg";
import catRum from "@/assets/cat-rum.jpg";
import catBitters from "@/assets/cat-bitters.jpg";
import catOther from "@/assets/cat-other.jpg";

/* ── Real product photography (from Ishieke stock) ── */
import mixedSouthernSnow1 from "@/assets/products/mixed-southern-snow-1.jpg";
import mixedSouthernSnow2 from "@/assets/products/mixed-southern-snow-2.png";
import tomaCab1 from "@/assets/products/toma-cab-1.jpg";
import tomaSaperavi1 from "@/assets/products/toma-saperavi-1.jpg";
import fourCousinsSparkling1 from "@/assets/products/four-cousins-sparkling-1.jpg";
import fourCousinsRose1 from "@/assets/products/four-cousins-rose-1.jpg";
import capeDiscovery1 from "@/assets/products/cape-discovery-1.jpg";
import eightPmWhisky1 from "@/assets/products/8pm-whisky-1.jpg";
import zenithWhiskyHoney1 from "@/assets/products/zenith-whisky-honey-1.jpg";
import blackVelvet1 from "@/assets/products/black-velvet-1.jpg";

/* ── Real product images from retail sources ── */
import fourCousinsRed1 from "@/assets/products/four-cousins-red-1.png";
import lordsGin1 from "@/assets/products/lords-gin-1.png";
import monnet1 from "@/assets/products/monnet-1.png";
import originBitters1 from "@/assets/products/origin-bitters-1.png";

/* ── AI-generated brand-specific product images ── */
import carloRossiImg from "@/assets/products/carlo-rossi.jpg";
import azulBuenAmigo from "@/assets/products/azul-buen-amigo.png";
import hennessy1 from "@/assets/products/hennessy-1.jpg";
import martell1 from "@/assets/products/martell-1.jpg";
import remyMartin1 from "@/assets/products/remy-martin-1.jpg";
import smirnoff1 from "@/assets/products/smirnoff-1.jpg";
import ciroc1 from "@/assets/products/ciroc-1.jpg";

export type ProductCategory =
  | "wine" | "whisky" | "vodka" | "gin" | "cognac" | "rum" | "bitters" | "other";

export type WineSubType = "red" | "white" | "rose" | "sparkling" | "dessert" | null;

export type ImageSource = "photo" | "brand-asset" | "placeholder";

export type CurationBadge =
  | "vintners-choice" | "premium-selection" | "editors-pick" | "best-celebrations" | "best-dinner";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  wineSubType: WineSubType;
  traits: string;
  traitTags: string[];
  brand: string;
  image: string;
  imageAlt: string;
  imageSource: ImageSource;
  gallery?: string[];
  description: string;
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
    category: "wine", wineSubType: "red",
    traits: "Classic • Smooth • Elegant",
    traitTags: ["Classic", "Smooth", "Elegant"],
    brand: "Carlo Rossi",
    image: carloRossiImg,
    imageAlt: "Carlo Rossi red wine bottle with classic label on a dark surface",
    imageSource: "brand-asset",
    description: "A classic choice known for its smooth, approachable character. Elegant enough for the table, easy enough for any evening.",
    inStock: true, featured: true, badge: "vintners-choice",
  },
  {
    slug: "four-cousins",
    name: "Four Cousins",
    category: "wine", wineSubType: "red",
    traits: "Fruity • Smooth • Refreshing",
    traitTags: ["Fruity", "Smooth", "Refreshing"],
    brand: "Van Loveren",
    image: fourCousinsRed1,
    imageAlt: "Four Cousins Natural Sweet Red wine bottle, South Africa",
    imageSource: "photo",
    description: "Fruity and refreshing with a smooth finish. A popular favourite that's easy to enjoy and easy to share.",
    inStock: true, featured: true,
  },
  {
    slug: "andre-rose",
    name: "André Rosé",
    category: "wine", wineSubType: "rose",
    traits: "Delicate • Fruity • Rosé Wine",
    traitTags: ["Delicate", "Fruity", "Rosé"],
    brand: "André",
    image: "https://ik.imagekit.io/wetfnu6pg/andre-rose-1.png",
    imageAlt: "André Brut Rosé champagne bottle with pink label",
    imageSource: "photo",
    description: "A delicate rosé with fruity character. Light, fresh and perfect for warm evenings and celebrations.",
    inStock: true,
  },
  {
    slug: "4th-street",
    name: "4th Street",
    category: "wine", wineSubType: "red",
    traits: "Smooth • Fruity • Easy-Drinking",
    traitTags: ["Smooth", "Fruity", "Easy-Drinking"],
    brand: "4th Street",
    image: "https://ik.imagekit.io/wetfnu6pg/4th-street-1.png",
    imageAlt: "4th Street Sweet Red wine bottle with red and gold label, South Africa",
    imageSource: "photo",
    description: "Smooth, fruity and easy-drinking. An accessible wine that doesn't demand attention but rewards it.",
    inStock: true,
  },
  {
    slug: "cape-more",
    name: "Cape More",
    category: "wine", wineSubType: "red",
    traits: "Rich • Smooth • Refined",
    traitTags: ["Rich", "Smooth", "Refined"],
    brand: "Cape More",
    image: "https://ik.imagekit.io/wetfnu6pg/cape-more-1.jpg",
    imageAlt: "Cape More Semi-Sweet Red wine bottle, Spanish red wine",
    imageSource: "photo",
    description: "Rich and refined with a smooth profile. A step up for those who appreciate depth without complexity.",
    inStock: true,
  },
  {
    slug: "mixed-southern-snow",
    name: "Mixed Southern Snow",
    category: "wine", wineSubType: "red",
    traits: "Fruity • Refreshing • Smooth",
    traitTags: ["Fruity", "Refreshing", "Smooth"],
    brand: "Mixed Southern",
    image: mixedSouthernSnow1,
    imageAlt: "Mixed Southern Snow premium sweet red wine bottle with mountain landscape label, Western Cape, South Africa",
    imageSource: "photo",
    gallery: [mixedSouthernSnow2],
    description: "Fruity and refreshing with a smooth finish. A cool, easy red for casual premium moments.",
    inStock: true,
  },
  {
    slug: "toma",
    name: "Toma",
    category: "wine", wineSubType: "red",
    traits: "Elegant • Smooth • Enjoyable",
    traitTags: ["Elegant", "Smooth", "Enjoyable"],
    brand: "Toma",
    image: tomaCab1,
    imageAlt: "Toma Cabernet Sauvignon 2021 wine bottle with gold crest label, oak aged, Nigeria",
    imageSource: "photo",
    gallery: [tomaSaperavi1],
    description: "Elegant and smooth with broad appeal. A wine that's simply enjoyable — no ceremony required.",
    inStock: true,
  },
  {
    slug: "four-cousins-sparkling",
    name: "Four Cousins Sparkling",
    category: "wine", wineSubType: "sparkling",
    traits: "Celebratory • Crisp • Refreshing",
    traitTags: ["Celebratory", "Crisp", "Refreshing"],
    brand: "Van Loveren",
    image: fourCousinsSparkling1,
    imageAlt: "Four Cousins Sparkling Natural Sweet wine bottle with gold foil neck, South Africa",
    imageSource: "photo",
    gallery: [fourCousinsRose1],
    description: "Crisp and refreshing with a celebratory spirit. For the moments worth marking with a pop.",
    inStock: true, featured: true, badge: "best-celebrations",
  },
  {
    slug: "dominio-rose",
    name: "Dominio Rosé",
    category: "wine", wineSubType: "rose",
    traits: "Delicate • Fruity • Rosé Wine",
    traitTags: ["Delicate", "Fruity", "Rosé"],
    brand: "Dominio",
    image: "https://ik.imagekit.io/wetfnu6pg/dominio-rose-1.jpg",
    imageAlt: "Dominio Del Rey Sparkling Rosé wine bottle, Spanish sparkling wine",
    imageSource: "photo",
    description: "A delicate rosé with a fruity, easy character. Light on the palate, generous in the glass.",
    inStock: true,
  },
  {
    slug: "cape-discovery",
    name: "Cape Discovery",
    category: "wine", wineSubType: "red",
    traits: "Smooth • Fruity • Approachable",
    traitTags: ["Smooth", "Fruity", "Approachable"],
    brand: "Cape Discovery",
    image: capeDiscovery1,
    imageAlt: "Cape Discovery Cape Red wine bottle with compass rose label, Western Cape, South Africa",
    imageSource: "photo",
    description: "Smooth and approachable with a fruity profile. A welcoming wine for any table.",
    inStock: true,
  },

  /* ── WHISKY ── */
  {
    slug: "8pm-whisky",
    name: "8 PM Whisky",
    category: "whisky", wineSubType: null,
    traits: "Bold • Smooth • Distinctive",
    traitTags: ["Bold", "Smooth", "Distinctive"],
    brand: "8 PM",
    image: eightPmWhisky1,
    imageAlt: "8 PM Premium Black Whisky bottle with gold 8 PM logo and red crest label",
    imageSource: "photo",
    description: "Bold and distinctive with a smooth finish. A whisky that makes its presence known without demanding experience.",
    inStock: true, featured: true, badge: "editors-pick",
  },
  {
    slug: "zenith-whisky-honey",
    name: "Zenith Whisky & Honey",
    category: "whisky", wineSubType: null,
    traits: "Rich • Smooth • Honeyed",
    traitTags: ["Rich", "Smooth", "Honeyed"],
    brand: "Zenith",
    image: zenithWhiskyHoney1,
    imageAlt: "Zenith Whisky & Honey bottle with black label, gold Z crest, Nigerian made",
    imageSource: "photo",
    description: "Rich and smooth with a honeyed warmth. A whisky that leans into comfort — rounded, sweet, generous.",
    inStock: true,
  },
  {
    slug: "black-velvet",
    name: "Black Velvet",
    category: "whisky", wineSubType: null,
    traits: "Smooth • Full-Bodied • Classic",
    traitTags: ["Smooth", "Full-Bodied", "Classic"],
    brand: "Black Velvet",
    image: blackVelvet1,
    imageAlt: "Black Velvet blended Canadian whisky bottle with black label and gold brand name",
    imageSource: "photo",
    description: "A classic Canadian whisky — smooth and full-bodied with a timeless profile.",
    inStock: true,
  },

  /* ── VODKA ── */
  {
    slug: "smirnoff-premium",
    name: "Smirnoff Premium",
    category: "vodka", wineSubType: null,
    traits: "Clean • Crisp • Versatile",
    traitTags: ["Clean", "Crisp", "Versatile"],
    brand: "Smirnoff",
    image: smirnoff1,
    imageAlt: "Smirnoff No.21 vodka bottle with iconic red label",
    imageSource: "brand-asset",
    description: "Clean, crisp and endlessly versatile. The reliable choice for cocktails and mixed drinks.",
    inStock: true, featured: true,
  },
  {
    slug: "ciroc",
    name: "Cîroc",
    category: "vodka", wineSubType: null,
    traits: "Refined • Smooth • Premium",
    traitTags: ["Refined", "Smooth", "Premium"],
    brand: "Cîroc",
    image: ciroc1,
    imageAlt: "Cîroc premium vodka bottle with frosted glass and blue and white label",
    imageSource: "brand-asset",
    description: "Refined and premium with a smooth, grape-derived character. A vodka that stands on its own.",
    inStock: true, featured: true, badge: "premium-selection",
  },

  /* ── GIN ── */
  {
    slug: "lords-gin",
    name: "Lords Gin",
    category: "gin", wineSubType: null,
    traits: "Classic • Aromatic • Smooth",
    traitTags: ["Classic", "Aromatic", "Smooth"],
    brand: "Lords",
    image: lordsGin1,
    imageAlt: "Lords Dry Gin bottle, Nigerian London Dry Gin brand since 1982",
    imageSource: "photo",
    description: "Classic and aromatic with a smooth finish. A gin that plays well with tonic, or stands alone.",
    inStock: true,
  },

  /* ── COGNAC & BRANDY ── */
  {
    slug: "monnet",
    name: "Monnet",
    category: "cognac", wineSubType: null,
    traits: "Refined • Smooth • Elegant",
    traitTags: ["Refined", "Smooth", "Elegant"],
    brand: "Monnet",
    image: monnet1,
    imageAlt: "Monnet Cognac bottle with elegant amber liquid and historic French cognac branding",
    imageSource: "photo",
    description: "Refined and elegant with a smooth delivery. A cognac for quiet appreciation.",
    inStock: true,
  },
  {
    slug: "martell",
    name: "Martell",
    category: "cognac", wineSubType: null,
    traits: "Rich • Sophisticated • Classic",
    traitTags: ["Rich", "Sophisticated", "Classic"],
    brand: "Martell",
    image: martell1,
    imageAlt: "Martell cognac bottle with swift bird medallion logo, amber liquid",
    imageSource: "brand-asset",
    description: "Rich and sophisticated — one of the great cognac houses. Classic for a reason.",
    inStock: true, featured: true, badge: "premium-selection",
  },
  {
    slug: "hennessy",
    name: "Hennessy",
    category: "cognac", wineSubType: null,
    traits: "Iconic • Refined • Full-Bodied",
    traitTags: ["Iconic", "Refined", "Full-Bodied"],
    brand: "Hennessy",
    image: hennessy1,
    imageAlt: "Hennessy VS cognac bottle with iconic Jasmin arm and halberd crest label",
    imageSource: "brand-asset",
    description: "Iconic and refined with a full-bodied presence. The cognac that defines the category.",
    inStock: true, featured: true, badge: "vintners-choice",
  },
  {
    slug: "remy-martin",
    name: "Rémy Martin",
    category: "cognac", wineSubType: null,
    traits: "Elegant • Rich • Distinctive",
    traitTags: ["Elegant", "Rich", "Distinctive"],
    brand: "Rémy Martin",
    image: remyMartin1,
    imageAlt: "Rémy Martin VSOP cognac bottle with centaur logo, amber liquid",
    imageSource: "brand-asset",
    description: "Elegant and rich with a distinctive character. A cognac of standing and tradition.",
    inStock: true,
  },

  /* ── BITTERS & SPECIALTY ── */
  {
    slug: "origin-premium",
    name: "Origin Premium Size",
    category: "bitters", wineSubType: null,
    traits: "Bold • Distinctive • Full-Bodied",
    traitTags: ["Bold", "Distinctive", "Full-Bodied"],
    brand: "Origin",
    image: originBitters1,
    imageAlt: "Orijin Bitters bottle with bold herbal branding, Nigerian herbal alcoholic bitters",
    imageSource: "photo",
    description: "Bold and full-bodied with a distinctive profile. A specialty spirit for those who know.",
    inStock: true,
  },
  {
    slug: "action-bitters",
    name: "Action Bitters",
    category: "bitters", wineSubType: null,
    traits: "Aromatic • Bold • Refreshing",
    traitTags: ["Aromatic", "Bold", "Refreshing"],
    brand: "Action",
    image: "https://ik.imagekit.io/wetfnu6pg/action-bitters-1.png",
    imageAlt: "Action Bitters bottle with herbal branding, Nigerian alcoholic herbal bitters",
    imageSource: "photo",
    description: "Aromatic and bold with a refreshing edge. A bitters that brings character to any mix.",
    inStock: true,
  },

  /* ── OTHER PREMIUM SPIRITS ── */
  {
    slug: "buen-amigo",
    name: "Buen Amigo",
    category: "other", wineSubType: null,
    traits: "Bold • Vibrant • Agave Spirit",
    traitTags: ["Bold", "Vibrant", "Agave Spirit"],
    brand: "Buen Amigo",
    image: azulBuenAmigo,
    imageAlt: "Clase Azul Reposado tequila bottle, cream ceramic with blue painted details and gold agave symbol",
    imageSource: "brand-asset",
    description: "Bold and vibrant — an agave spirit with energy. For the moments that call for something different.",
    inStock: true, badge: "editors-pick",
  },
];

/* ── Helpers ── */
export const categoryLabel = (id: ProductCategory) => categories.find((c) => c.id === id)?.label ?? id;
export const badgeLabel = (id: CurationBadge) => curationBadges.find((c) => c.id === id)?.label ?? id;
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

/* ── Backward compatibility ── */
export type Wine = Product;
export const wines = products;
export const getWine = getProduct;
