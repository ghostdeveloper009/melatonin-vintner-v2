import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { WineCard } from "@/components/site/WineCard";
import { categories, products, type ProductCategory } from "@/lib/wines";

const searchSchema = z.object({
  category: z
    .enum(["all", "wine", "whisky", "vodka", "gin", "cognac", "rum", "bitters", "other"])
    .default("all")
    .catch("all"),
});

export const Route = createFileRoute("/collection/")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Our Collection — Premium Drinks | Melatonin Vintner" },
      {
        name: "description",
        content:
          "Browse the Melatonin Vintner collection: wines, whisky, vodka, gin, cognac, rum, bitters and premium spirits.",
      },
      { property: "og:title", content: "Our Collection — Melatonin Vintner" },
      {
        property: "og:description",
        content:
          "Curated wines and liquor premium selections for every occasion.",
      },
      { property: "og:url", content: "/collection" },
    ],
    links: [{ rel: "canonical", href: "/collection" }],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  const { category } = Route.useSearch();

  const list =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  const filters: { id: "all" | ProductCategory; label: string }[] = [
    { id: "all", label: "All" },
    ...categories.map((c) => ({ id: c.id, label: c.label })),
  ];

  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 pt-40 pb-16 sm:px-8 sm:pt-48">
          <Reveal>
            <p className="eyebrow">Premium Drinks Collection</p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] sm:text-7xl">
              Our Collection
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Curated wines and liquor premium selections for every occasion.
              Quality selections. Classic taste. Exceptional moments.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sticky top-[3.75rem] z-40 border-b border-border bg-background/90 backdrop-blur-xl">
        <nav aria-label="Filter by category" className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <ul className="flex gap-5 overflow-x-auto py-5">
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
          {list.length} {list.length === 1 ? "product" : "products"}
        </p>
        <div className="mt-12 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 80}>
              <WineCard wine={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
