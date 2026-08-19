/**
 * Shared site configuration — single source of truth for contact info,
 * brand identity, and other site-wide constants. Change once, propagates
 * everywhere (footer, contact page, cart drawer, about page).
 */

export const siteConfig = {
  brand: "Melatonin Vintner",
  tagline: "Pour better. Live better.",
  subtitle: "Premium Drinks Collection",
  description:
    "Curated wines and liquor premium selections for every occasion.",
  closingLine: "Quality selections. Classic taste. Exceptional moments.",

  phone: "08070430838",
  phoneHref: "tel:08070430838",
  whatsappHref: "https://wa.me/2348070430838",
  location: "Ishieke",

  tiktok: "@mellatonin_vintner",
  tiktokHref: "https://www.tiktok.com/@mellatonin_vintner",
  instagram: "@mellatonin_vintner",
  instagramHref: "https://www.instagram.com/mellatonin_vintner",
} as const;
