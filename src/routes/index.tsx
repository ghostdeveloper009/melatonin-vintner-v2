import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { WineCard } from "@/components/site/WineCard";
import { categories, products } from "@/lib/wines";
import heroImage from "@/assets/hero-collection.jpg";
import lifestyle from "@/assets/lifestyle-gather.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Melatonin Vintner — Premium Drinks Collection" },
      {
        name: "description",
        content:
          "Pour better. Live better. Curated wines and liquor premium selections for every occasion.",
      },
      {
        property: "og:title",
        content: "Melatonin Vintner — Premium Drinks Collection",
      },
      {
        property: "og:description",
        content:
          "Curated wines and liquor premium selections for every occasion.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const featured = products.filter((p) => p.featured);

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden">
        <img
          src={heroImage}
          alt="Premium liquor collection display on dark marble with warm dramatic lighting"
          width={1600}
          height={1200}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="cinematic-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pt-32 pb-20 sm:px-8 sm:pb-28">
          <Reveal>
            <p className="eyebrow">Premium Drinks Collection</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-4xl font-display text-[3.25rem] leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
              Pour better.
              <span className="block italic text-accent">Live better.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
              Curated wines and liquor premium selections for every occasion.
              Quality selections. Classic taste. Exceptional moments.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-11 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/collection"
                className="inline-flex items-center justify-center bg-accent px-10 py-4 text-xs tracking-[0.26em] text-accent-foreground uppercase transition-all duration-500 hover:bg-accent/85"
              >
                Explore Collection
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border border-foreground/25 px-10 py-4 text-xs tracking-[0.26em] text-foreground uppercase transition-colors duration-500 hover:border-accent hover:text-accent"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIES */}
      <section aria-labelledby="categories-heading" className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">The Collection</p>
              <h2
                id="categories-heading"
                className="mt-4 max-w-xl font-display text-4xl leading-tight sm:text-5xl"
              >
                Eight ways to pour
              </h2>
            </div>
            <Link
              to="/collection"
              className="link-underline shrink-0 text-[0.7rem] tracking-[0.24em] text-accent uppercase"
            >
              View all products →
            </Link>
          </Reveal>

          <ul className="mt-16 grid grid-cols-2 gap-x-5 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
            {categories.map((c, i) => (
              <Reveal as="li" key={c.id} delay={i * 60}>
                <Link
                  to="/collection"
                  search={{ category: c.id }}
                  className="group block"
                >
                  <div className="overflow-hidden bg-secondary/40">
                    <img
                      src={c.image}
                      alt={`${c.label} bottle`}
                      loading="lazy"
                      width={912}
                      height={1200}
                      className="aspect-[3/4] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 text-[0.7rem] tracking-[0.16em] text-foreground uppercase">
                    {c.label}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {c.blurb}
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURED SELECTION */}
      <section
        aria-labelledby="selection-heading"
        className="border-t border-border bg-card/40"
      >
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal className="lg:sticky lg:top-32 lg:self-start">
              <p className="eyebrow">Featured</p>
              <h2
                id="selection-heading"
                className="mt-4 font-display text-5xl leading-[1.02] sm:text-6xl"
              >
                The Vintner&rsquo;s
                <span className="block italic text-accent">Selection</span>
              </h2>
              <div className="rule-line mt-8 w-40" />
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
                A short list, chosen with intention. These are the bottles we
                return to — selected for character, balance, and occasion.
              </p>
              <Link
                to="/collection"
                className="link-underline mt-10 inline-block text-[0.7rem] tracking-[0.24em] text-accent uppercase"
              >
                Explore the Selection →
              </Link>
            </Reveal>

            <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2">
              {featured.map((p, i) => (
                <Reveal key={p.slug} delay={i * 100}>
                  <WineCard wine={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FULL COLLECTION WITH CATEGORY FILTER */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 pt-20 sm:px-8 sm:pt-24">
          <Reveal>
            <p className="eyebrow">The Full Collection</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Every bottle, every spirit
            </h2>
          </Reveal>
        </div>

        <div className="sticky top-[3.75rem] z-40 border-b border-border bg-background/90 backdrop-blur-xl">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <ul className="flex gap-5 overflow-x-auto py-5">
              <li>
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`text-[0.7rem] whitespace-nowrap tracking-[0.22em] uppercase transition-colors duration-500 ${
                    activeCategory === "all"
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  All
                </button>
              </li>
              {categories.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => setActiveCategory(c.id)}
                    className={`text-[0.7rem] whitespace-nowrap tracking-[0.22em] uppercase transition-colors duration-500 ${
                      activeCategory === c.id
                        ? "text-accent"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {c.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24">
          <p className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </p>
          <div className="mt-12 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 80}>
                <WineCard wine={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE */}
      <section aria-labelledby="lifestyle-heading" className="relative">
        <img
          src={lifestyle}
          alt="Elegant gathering with premium drinks on a sophisticated dark table setting"
          loading="lazy"
          width={1408}
          height={1008}
          className="h-[70svh] w-full object-cover"
        />
        <div className="cinematic-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1400px] px-5 pb-16 sm:px-8 sm:pb-24">
            <Reveal>
              <p className="eyebrow">The Experience</p>
              <h2
                id="lifestyle-heading"
                className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] sm:text-6xl"
              >
                Gather. Pour. Remember.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                A bottle is rarely the point. It is the table, the hour, and the
                people who stayed late.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GUIDE TEASER */}
      <section aria-labelledby="guide-heading" className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Drink Guide</p>
              <h2
                id="guide-heading"
                className="mt-4 max-w-xl font-display text-4xl leading-tight sm:text-5xl"
              >
                Learn the language of the pour
              </h2>
            </div>
            <Link
              to="/guide"
              className="link-underline shrink-0 text-[0.7rem] tracking-[0.24em] text-accent uppercase"
            >
              Read the guide →
            </Link>
          </Reveal>

          <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Wine Types", "Red, white, rosé and sparkling — what separates them."],
              ["02", "Food & Drink", "Pairing without the ceremony."],
              ["03", "Serving", "Temperature, glass, timing."],
              ["04", "Spirits", "Whisky, cognac, gin — when and how."],
            ].map(([n, title, copy], i) => (
              <Reveal as="li" key={n} delay={i * 80} className="bg-background p-8">
                <span className="text-[0.65rem] tracking-[0.24em] text-accent">
                  {n}
                </span>
                <h3 className="mt-5 font-display text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {copy}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
