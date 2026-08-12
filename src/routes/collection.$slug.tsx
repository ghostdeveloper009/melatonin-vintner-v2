import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { WineCard } from "@/components/site/WineCard";
import { useCart } from "@/lib/cart";
import { categoryLabel, formatPrice, formatNaira, badgeLabel, getWine, wines } from "@/lib/wines";

export const Route = createFileRoute("/collection/$slug")({
  loader: ({ params }) => {
    const wine = getWine(params.slug);
    if (!wine) throw notFound();
    return { wine };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Wine unavailable — Melatonin Vintner" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { wine } = loaderData;
    const title = `${wine.name} ${wine.vintage} — ${wine.varietal} | Melatonin Vintner`;
    return {
      meta: [
        { title },
        { name: "description", content: wine.tastingNote },
        { property: "og:title", content: title },
        { property: "og:description", content: wine.tastingNote },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/collection/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/collection/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${wine.name} ${wine.vintage}`,
            description: wine.tastingNote,
            brand: { "@type": "Brand", name: wine.winery },
            category: `${categoryLabel(wine.category)} Wine`,
            offers: {
              "@type": "Offer",
              price: wine.nigerianCollection && wine.nairaPrice
                ? wine.nairaPrice.toString()
                : (wine.priceCents / 100).toFixed(2),
              priceCurrency: wine.nigerianCollection ? "NGN" : "USD",
              availability: wine.inStock
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
            },
          }),
        },
      ],
    };
  },
  component: WineDetail,
});

function WineDetail() {
  const { wine } = Route.useLoaderData();
  const { add, setOpen } = useCart();
  const [qty, setQty] = useState(1);

  const related = wines
    .filter((w) => w.slug !== wine.slug && w.category === wine.category)
    .slice(0, 3);

  const isNigerian = wine.nigerianCollection === true;
  const priceDisplay = isNigerian && wine.nairaPrice
    ? formatNaira(wine.nairaPrice)
    : formatPrice(wine.priceCents);

  const specs = [
    ["Winery", wine.winery],
    ["Region", wine.region],
    ...(wine.originCountry ? [["Origin", wine.originCountry] as [string, string]] : []),
    ["Vintage", String(wine.vintage)],
    ["Type", `${categoryLabel(wine.category)} · ${wine.sweetness}`],
    ["Body", wine.body],
    ["ABV", wine.abv],
    ["Bottle", wine.bottleSize],
    ["Availability", wine.inStock ? "In stock" : "Allocated"],
  ];

  return (
    <SiteLayout>
      <div className="mx-auto max-w-[1400px] px-5 pt-32 sm:px-8 sm:pt-40">
        <nav aria-label="Breadcrumb" className="text-[0.65rem] tracking-[0.2em] uppercase">
          <ol className="flex gap-2 text-muted-foreground">
            {isNigerian && (
              <>
                <li>
                  <Link to="/nigeria" className="hover:text-foreground">
                    Nigeria, Uncorked
                  </Link>
                </li>
                <li aria-hidden>/</li>
              </>
            )}
            <li>
              <Link to={isNigerian ? "/nigeria" : "/collection"} className="hover:text-foreground">
                {isNigerian ? "Nigerian Collection" : "Collection"}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-foreground">{wine.name}</li>
          </ol>
        </nav>
      </div>

      <article className="mx-auto grid max-w-[1400px] gap-14 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <img
            src={wine.image}
            alt={wine.imageAlt}
            width={912}
            height={1200}
            className="w-full bg-secondary/40 object-cover"
          />
        </Reveal>

        <div>
          <Reveal>
            {wine.badge && (
              <p className="text-[0.65rem] tracking-[0.22em] text-accent uppercase">
                {badgeLabel(wine.badge)}
              </p>
            )}
            <p className="eyebrow">
              {categoryLabel(wine.category)} · {wine.vintage}
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] sm:text-6xl">
              {wine.name}
            </h1>
            <p className="mt-3 text-base text-muted-foreground">
              {wine.varietal} — {wine.winery}, {wine.region}
            </p>
            <p className="mt-8 font-display text-3xl text-accent">
              {priceDisplay}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center border border-border">
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-5 py-4 text-muted-foreground hover:text-foreground"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm" aria-live="polite">
                  {qty}
                </span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="px-5 py-4 text-muted-foreground hover:text-foreground"
                >
                  +
                </button>
              </div>
              <button
                disabled={!wine.inStock}
                onClick={() => {
                  add(wine.slug, qty);
                  setOpen(true);
                  toast.success(`${wine.name} added to your selection`);
                }}
                className="flex-1 bg-accent px-10 py-4 text-xs tracking-[0.26em] text-accent-foreground uppercase transition-colors duration-500 hover:bg-accent/85 disabled:cursor-not-allowed disabled:bg-secondary disabled:text-muted-foreground"
              >
                {wine.inStock ? "Add to Cart" : "Currently Allocated"}
              </button>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-14">
              <h2 className="eyebrow">Tasting Notes</h2>
              <dl className="mt-6 space-y-5 border-t border-border pt-6">
                {[
                  ["Aroma", wine.aroma],
                  ["Palate", wine.palate],
                  ["Finish", wine.finish],
                ].map(([k, v]) => (
                  <div key={k} className="grid gap-1 sm:grid-cols-[140px_1fr]">
                    <dt className="text-[0.65rem] tracking-[0.22em] text-accent uppercase">
                      {k}
                    </dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-14">
              <h2 className="eyebrow">The Bottle</h2>
              <dl className="mt-6 grid grid-cols-2 gap-px border border-border bg-border">
                {specs.map(([k, v]) => (
                  <div key={k} className="bg-background p-5">
                    <dt className="text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
                      {k}
                    </dt>
                    <dd className="mt-2 text-sm text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-14">
              <h2 className="font-display text-3xl">Perfect Pairings</h2>
              <ul className="mt-6 flex flex-wrap gap-3">
                {wine.pairings.map((p) => (
                  <li
                    key={p}
                    className="border border-border px-5 py-3 text-xs tracking-[0.14em] text-muted-foreground uppercase"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {isNigerian && wine.nigerianPairings && wine.nigerianPairings.length > 0 && (
            <Reveal delay={280}>
              <div className="mt-10">
                <h2 className="font-display text-3xl">Nigerian Table</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Paired with Nigerian cuisine to complement the wine's profile.
                </p>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {wine.nigerianPairings.map((p) => (
                    <li
                      key={p}
                      className="border border-accent/30 px-5 py-3 text-xs tracking-[0.14em] text-accent uppercase"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section
          aria-labelledby="related-heading"
          className="border-t border-border"
        >
          <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
            <h2 id="related-heading" className="font-display text-3xl sm:text-4xl">
              You may also pour
            </h2>
            <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((w) => (
                <WineCard key={w.slug} wine={w} />
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
