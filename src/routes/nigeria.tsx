import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { WineCard } from "@/components/site/WineCard";
import {
  getNigerianWines,
  categories,
  curationBadges,
  formatNaira,
  badgeLabel,
  type WineCategory,
  type CurationBadge,
} from "@/lib/wines";

const searchSchema = z.object({
  category: z
    .enum(["all", "red", "white", "rose", "dessert"])
    .default("all")
    .catch("all"),
  badge: z
    .enum(["all", "vintners-choice", "premium-selection", "editors-pick", "best-dinner"])
    .default("all")
    .catch("all"),
});

export const Route = createFileRoute("/nigeria")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Nigeria, Uncorked — Premium Wine Collection | Melatonin Vintner" },
      {
        name: "description",
        content:
          "Discover a curated selection of exceptional wines available in Nigeria, thoughtfully selected for quality, character, and experience.",
      },
      { property: "og:title", content: "Nigeria, Uncorked — Melatonin Vintner" },
      {
        property: "og:description",
        content:
          "A curated selection of exceptional wines available in Nigeria — selected with intention.",
      },
      { property: "og:url", content: "/nigeria" },
    ],
    links: [{ rel: "canonical", href: "/nigeria" }],
  }),
  component: NigeriaPage,
});

function NigeriaPage() {
  const { category, badge } = Route.useSearch();
  const allNigerian = getNigerianWines();
  const featured = allNigerian.filter((w) => w.featured);

  const filtered = allNigerian.filter((w) => {
    if (category !== "all" && w.category !== category) return false;
    if (badge !== "all" && w.badge !== badge) return false;
    return true;
  });

  const categoryFilters: { id: "all" | WineCategory; label: string }[] = [
    { id: "all", label: "All" },
    ...categories.map((c) => ({ id: c.id, label: c.label })),
  ];

  const badgeFilters: { id: "all" | CurationBadge; label: string }[] = [
    { id: "all", label: "All Badges" },
    ...curationBadges
      .filter((c) => c.id !== "best-celebrations")
      .map((c) => ({ id: c.id, label: c.label })),
  ];

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative flex min-h-[70svh] items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f0a] via-[#151110] to-background" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 40%, oklch(0.36 0.115 18 / 0.4), transparent 60%), radial-gradient(ellipse at 70% 60%, oklch(0.82 0.062 82 / 0.15), transparent 50%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pt-32 pb-20 sm:px-8 sm:pb-24">
          <Reveal>
            <p className="eyebrow">🇳🇬 Nigerian Collection</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-4xl font-display text-[3.25rem] leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
              Nigeria,
              <span className="block italic text-accent">Uncorked.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
              Discover a curated selection of exceptional wines and wine brands
              available in Nigeria, thoughtfully selected for quality,
              character, and experience.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <p className="mt-6 max-w-md text-[0.7rem] tracking-[0.2em] text-accent/80 uppercase">
              Selected with intention. A refined expression of Nigeria's
              evolving wine culture.
            </p>
          </Reveal>
        </div>
      </section>

      {/* EDITORIAL — THE NIGERIAN SELECTION */}
      {featured.length > 0 && (
        <section
          aria-labelledby="nigerian-selection-heading"
          className="border-t border-border bg-card/40"
        >
          <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
            <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <Reveal className="lg:sticky lg:top-32 lg:self-start">
                <p className="eyebrow">The Nigerian Selection</p>
                <h2
                  id="nigerian-selection-heading"
                  className="mt-4 font-display text-5xl leading-[1.02] sm:text-6xl"
                >
                  The Nigerian
                  <span className="block italic text-accent">Selection</span>
                </h2>
                <div className="rule-line mt-8 w-40" />
                <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  A short list, chosen with intention. These are the bottles
                  we believe deserve a place at the Nigerian table — for fine
                  dining, celebrations, and the quiet evenings in between.
                </p>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Each wine is available in the Nigerian market, with pricing
                  verified from local retailers. Tasting notes are sourced
                  from producers and wine publications.
                </p>
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
      )}

      {/* FULL COLLECTION WITH FILTERS */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 pt-20 sm:px-8 sm:pt-24">
          <Reveal>
            <p className="eyebrow">The Full Collection</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Explore Every Bottle
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Filter by type or curation badge to find the wine for your next
              occasion.
            </p>
          </Reveal>
        </div>

        {/* CATEGORY filter bar */}
        <div className="sticky top-[3.75rem] z-40 border-b border-border bg-background/90 backdrop-blur-xl">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <div className="flex flex-wrap gap-x-7 gap-y-3 py-5">
              <ul className="flex gap-7 overflow-x-auto">
                {categoryFilters.map((f) => (
                  <li key={f.id}>
                    <Link
                      to="/nigeria"
                      search={{ category: f.id, badge }}
                      className={`text-[0.7rem] whitespace-nowrap tracking-[0.22em] uppercase transition-colors duration-500 ${
                        category === f.id
                          ? "text-accent"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {f.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="ml-auto hidden sm:block">
                <ul className="flex gap-5">
                  {badgeFilters.map((f) => (
                    <li key={f.id}>
                      <Link
                        to="/nigeria"
                        search={{ category, badge: f.id }}
                        className={`text-[0.65rem] whitespace-nowrap tracking-[0.2em] uppercase transition-colors duration-500 ${
                          badge === f.id
                            ? "text-accent"
                            : "text-muted-foreground/70 hover:text-muted-foreground"
                        }`}
                      >
                        {f.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24">
          <p className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
            {filtered.length} {filtered.length === 1 ? "wine" : "wines"}
          </p>
          <div className="mt-12 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((w, i) => (
              <Reveal key={w.slug} delay={(i % 4) * 80}>
                <WineCard wine={w} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURAL NARRATIVE */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-[900px] px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <p className="eyebrow">The Philosophy</p>
            <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
              Nigeria has a place at the
              <span className="block italic text-accent">premium wine table.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
              <p>
                Melatonin Vintner is not simply selling imported wine. The
                Nigerian Collection is part of a broader philosophy —
                exceptional wines, thoughtfully selected for the Nigerian
                palate and lifestyle.
              </p>
              <p>
                From fine dining to celebrations, weddings to corporate
                events, date nights to dinner parties — each wine in this
                collection was chosen for how it drinks, what it pairs with,
                and the moments it belongs to.
              </p>
              <p>
                Discover wines chosen for character, balance, and occasion.
                Selected with intention. Not for the sake of volume — for the
                sake of the glass.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
