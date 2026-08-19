import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { WineCard } from "@/components/site/WineCard";
import { useCart } from "@/lib/cart";
import { categoryLabel, badgeLabel, getProduct, products } from "@/lib/wines";
import { siteConfig } from "@/lib/siteConfig";

export const Route = createFileRoute("/collection/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product unavailable — Melatonin Vintner" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — ${product.traits} | Melatonin Vintner`;
    return {
      meta: [
        { title },
        { name: "description", content: product.description },
        { property: "og:title", content: title },
        { property: "og:description", content: product.description },
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
            name: product.name,
            description: product.description,
            brand: { "@type": "Brand", name: product.brand },
            category: categoryLabel(product.category),
          }),
        },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const { add, setOpen } = useCart();
  const [qty, setQty] = useState(1);

  const related = products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3);

  const specs: [string, string][] = [
    ["Brand", product.brand],
    ["Category", categoryLabel(product.category)],
    ["Profile", product.traits],
    ["Availability", product.inStock ? "In stock" : "Allocated"],
  ];

  return (
    <SiteLayout>
      <div className="mx-auto max-w-[1400px] px-5 pt-32 sm:px-8 sm:pt-40">
        <nav aria-label="Breadcrumb" className="text-[0.65rem] tracking-[0.2em] uppercase">
          <ol className="flex gap-2 text-muted-foreground">
            <li>
              <Link to="/collection" className="hover:text-foreground">
                Collection
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                to="/collection"
                search={{ category: product.category }}
                className="hover:text-foreground"
              >
                {categoryLabel(product.category)}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-foreground">{product.name}</li>
          </ol>
        </nav>
      </div>

      <article className="mx-auto grid max-w-[1400px] gap-14 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <div className="relative">
            <img
              src={product.image}
              alt={product.imageAlt}
              width={912}
              height={1200}
              className="w-full bg-secondary/40 object-cover"
            />
            {product.imageSource === "placeholder" && (
              <span className="absolute bottom-4 left-4 border border-border/60 bg-background/70 px-3 py-1.5 text-[0.6rem] tracking-[0.16em] text-muted-foreground/80 uppercase">
                Photo coming soon
              </span>
            )}
          </div>
        </Reveal>

        <div>
          <Reveal>
            {product.badge && (
              <p className="text-[0.65rem] tracking-[0.22em] text-accent uppercase">
                {badgeLabel(product.badge)}
              </p>
            )}
            <p className="eyebrow">
              {categoryLabel(product.category)}
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] sm:text-6xl">
              {product.name}
            </h1>
            <p className="mt-3 text-base text-muted-foreground">
              {product.brand}
            </p>
            <div className="mt-8">
              <p className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
                Price
              </p>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-display text-3xl text-accent transition-colors hover:text-accent/80"
              >
                Enquire for price →
              </a>
            </div>
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
                disabled={!product.inStock}
                onClick={() => {
                  add(product.slug, qty);
                  setOpen(true);
                  toast.success(`${product.name} added to your selection`);
                }}
                className="flex-1 bg-accent px-10 py-4 text-xs tracking-[0.26em] text-accent-foreground uppercase transition-colors duration-500 hover:bg-accent/85 disabled:cursor-not-allowed disabled:bg-secondary disabled:text-muted-foreground"
              >
                {product.inStock ? "Add to Selection" : "Currently Allocated"}
              </button>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-14">
              <h2 className="eyebrow">Profile</h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {product.traitTags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-accent/30 px-5 py-3 text-xs tracking-[0.14em] text-accent uppercase"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
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
              {related.map((p) => (
                <WineCard key={p.slug} wine={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
