import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { WineCard } from "@/components/site/WineCard";
import { categories, wines } from "@/lib/wines";

const searchSchema = z.object({
  category: z
    .enum(["all", "red", "white", "rose", "sparkling", "dessert", "nigeria"])
    .default("all")
    .catch("all"),
});

export const Route = createFileRoute("/collection/")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Our Collection — Fine Wine | Melatonin Vintner" },
      {
        name: "description",
        content:
          "Browse the Melatonin Vintner collection: red, white, rosé, sparkling and dessert wines, each with tasting notes, region and vintage.",
      },
      { property: "og:title", content: "Our Collection — Melatonin Vintner" },
      {
        property: "og:description",
        content:
          "Red, white, rosé, sparkling and dessert wines, chosen one bottle at a time.",
      },
      { property: "og:url", content: "/collection" },
    ],
    links: [{ rel: "canonical", href: "/collection" }],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  const { category } = Route.useSearch();

  const list = category === "all"
    ? wines
    : category === "nigeria"
      ? wines.filter((w) => w.nigerianCollection)
      : wines.filter((w) => w.category === category);

  const filters = [
    { id: "all" as const, label: "All Wines" },
    ...categories,
    { id: "nigeria" as const, label: "🇳🇬 Nigerian" },
  ];

  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 pt-40 pb-16 sm:px-8 sm:pt-48">
          <Reveal>
            <p className="eyebrow">The Cellar</p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] sm:text-7xl">
              Our Collection
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Every bottle here was tasted before it was listed. Prices,
              regions and producers shown are placeholder data pending real
              inventory.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sticky top-[3.75rem] z-40 border-b border-border bg-background/90 backdrop-blur-xl">
        <nav aria-label="Filter by wine type" className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <ul className="flex gap-7 overflow-x-auto py-5">
            {filters.map((f) => (
              <li key={f.id}>
                <Link
                  to="/collection"
                  search={{ category: f.id }}
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
        </nav>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24">
        <p className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
          {list.length} {list.length === 1 ? "wine" : "wines"}
        </p>
        <div className="mt-12 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((w, i) => (
            <Reveal key={w.slug} delay={(i % 4) * 80}>
              <WineCard wine={w} />
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
