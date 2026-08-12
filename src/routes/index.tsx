import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { WineCard } from "@/components/site/WineCard";
import {
  categories,
  profiles,
  wines,
  getNigerianWines,
  type TasteProfile,
} from "@/lib/wines";
import heroImage from "@/assets/hero-wine.jpg";
import vineyard from "@/assets/vineyard.jpg";
import lifestyle from "@/assets/lifestyle-gather.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Melatonin Vintner — A Taste Worth Remembering" },
      {
        name: "description",
        content:
          "Premium wine, carefully selected. Explore red, white, rosé, sparkling and dessert wines from the Melatonin Vintner collection.",
      },
      {
        property: "og:title",
        content: "Melatonin Vintner — A Taste Worth Remembering",
      },
      {
        property: "og:description",
        content:
          "A curated house of fine wines for people who appreciate exceptional taste and craftsmanship.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const [profile, setProfile] = useState<TasteProfile>("bold");
  const featured = wines.filter((w) => w.featured && !w.nigerianCollection);
  const nigerianFeatured = getNigerianWines().filter((w) => w.featured).slice(0, 4);
  const matches = wines.filter((w) => w.profiles.includes(profile)).slice(0, 3);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden">
        <img
          src={heroImage}
          alt="A bottle of red wine and a filled glass on dark stone under warm cinematic light"
          width={1600}
          height={1200}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="cinematic-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pt-32 pb-20 sm:px-8 sm:pb-28">
          <Reveal>
            <p className="eyebrow">Est. Placeholder — Fine Wine House</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-4xl font-display text-[3.25rem] leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
              A Taste Worth
              <span className="block italic text-accent">Remembering.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
              Melatonin Vintner curates wines for people who appreciate
              exceptional taste and craftsmanship — bottles chosen one at a
              time, for evenings that deserve them.
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
                to="/nigeria"
                className="inline-flex items-center justify-center border border-foreground/25 px-10 py-4 text-xs tracking-[0.26em] text-foreground uppercase transition-colors duration-500 hover:border-accent hover:text-accent"
              >
                Nigeria, Uncorked
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
              <p className="eyebrow">The House</p>
              <h2
                id="categories-heading"
                className="mt-4 max-w-xl font-display text-4xl leading-tight sm:text-5xl"
              >
                Five ways to spend an evening
              </h2>
            </div>
            <Link
              to="/collection"
              className="link-underline shrink-0 text-[0.7rem] tracking-[0.24em] text-accent uppercase"
            >
              View all wines →
            </Link>
          </Reveal>

          <ul className="mt-16 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-5">
            {categories.map((c, i) => (
              <Reveal as="li" key={c.id} delay={i * 90}>
                <Link
                  to="/collection"
                  search={{ category: c.id }}
                  className="group block"
                >
                  <div className="overflow-hidden bg-secondary/40">
                    <img
                      src={c.image}
                      alt={`${c.label} wine bottle`}
                      loading="lazy"
                      width={912}
                      height={1200}
                      className="aspect-[3/4] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-2xl">{c.label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {c.blurb}
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURED — THE VINTNER'S SELECTION */}
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
                A short list, revised often. These are the bottles we return to
                — for the way they are made, and for what they do to a room.
              </p>
              <Link
                to="/collection"
                className="link-underline mt-10 inline-block text-[0.7rem] tracking-[0.24em] text-accent uppercase"
              >
                Explore the Selection →
              </Link>
            </Reveal>

            <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2">
              {featured.map((w, i) => (
                <Reveal key={w.slug} delay={i * 100}>
                  <WineCard wine={w} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NIGERIAN COLLECTION — "Nigeria, Uncorked" */}
      <section
        aria-labelledby="nigeria-heading"
        className="border-t border-border"
      >
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">🇳🇬 Nigerian Collection</p>
            <h2
              id="nigeria-heading"
              className="mt-4 font-display text-5xl leading-[1.02] sm:text-6xl"
            >
              Nigeria,
              <span className="block italic text-accent">Uncorked.</span>
            </h2>
            <p className="mt-8 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Discover a curated selection of exceptional wines and wine brands
              available in Nigeria, thoughtfully selected for quality,
              character, and experience.
            </p>
            <p className="mt-5 max-w-lg text-[0.7rem] tracking-[0.2em] text-accent/80 uppercase">
              Selected with intention. A refined expression of Nigeria's
              evolving wine culture.
            </p>
            <Link
              to="/nigeria"
              className="link-underline mt-10 inline-block text-[0.7rem] tracking-[0.24em] text-accent uppercase"
            >
              Explore the Nigerian Collection →
            </Link>
          </Reveal>

          {nigerianFeatured.length > 0 && (
            <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {nigerianFeatured.map((w, i) => (
                <Reveal key={w.slug} delay={i * 80}>
                  <WineCard wine={w} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* BRAND STORY */}
      <section aria-labelledby="story-heading" className="border-t border-border">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="overflow-hidden">
              <img
                src={vineyard}
                alt="Vineyard rows on a hillside at dusk with warm golden light"
                loading="lazy"
                width={1600}
                height={1008}
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Our Story</p>
            <h2
              id="story-heading"
              className="mt-4 font-display text-4xl leading-tight sm:text-5xl"
            >
              More Than Wine.
              <span className="block italic text-accent">An Experience.</span>
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                [Placeholder copy — replace with your brand narrative.]
                Melatonin Vintner exists for the part of the evening that slows
                down. We work with growers and small houses whose wines reward
                attention, and we present them plainly: what it is, where it
                comes from, and how it drinks.
              </p>
              <p>
                Craftsmanship over volume. Discovery over familiarity. Taste as
                something learned, shared and remembered.
              </p>
            </div>
            <Link
              to="/about"
              className="link-underline mt-9 inline-block text-[0.7rem] tracking-[0.24em] text-accent uppercase"
            >
              Read our story →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FIND YOUR WINE */}
      <section
        aria-labelledby="discover-heading"
        className="border-t border-border bg-card/40"
      >
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Discovery</p>
            <h2
              id="discover-heading"
              className="mt-4 font-display text-4xl leading-tight sm:text-5xl"
            >
              Find Your Wine
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Tell us what the evening calls for. We&rsquo;ll narrow the cellar.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div
              role="radiogroup"
              aria-label="Choose a wine style"
              className="mt-10 flex flex-wrap gap-3"
            >
              {profiles.map((p) => (
                <button
                  key={p.id}
                  role="radio"
                  aria-checked={profile === p.id}
                  onClick={() => setProfile(p.id)}
                  className={`min-w-48 flex flex-col items-start border px-6 py-5 text-left transition-all duration-500 ${
                    profile === p.id
                      ? "border-accent bg-accent/10"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <span className="block text-[0.7rem] tracking-[0.2em] uppercase">
                    {p.label}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {p.hint}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {matches.map((w) => (
              <WineCard key={w.slug} wine={w} />
            ))}
            {matches.length === 0 && (
              <p className="text-sm text-muted-foreground">
                Nothing in this style right now — the cellar changes weekly.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* LIFESTYLE */}
      <section aria-labelledby="lifestyle-heading" className="relative">
        <img
          src={lifestyle}
          alt="Hands raising glasses of red wine over a candlelit dinner table"
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
                Gather. Taste. Remember.
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
              <p className="eyebrow">Wine Guide</p>
              <h2
                id="guide-heading"
                className="mt-4 max-w-xl font-display text-4xl leading-tight sm:text-5xl"
              >
                Learn the language of the glass
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
              ["01", "Red vs White", "What actually separates them."],
              ["02", "Food & Wine", "Pairing without the ceremony."],
              ["03", "Serving", "Temperature, glass, timing."],
              ["04", "Vintage", "When the year matters — and when it doesn't."],
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
