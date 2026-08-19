import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { useCart } from "@/lib/cart";
import { badgeLabel, type Product } from "@/lib/wines";
import { siteConfig as config } from "@/lib/siteConfig";

export function WineCard({ wine: product }: { wine: Product }) {
  const { add, setOpen } = useCart();

  return (
    <article className="group flex flex-col">
      <Link
        to="/collection/$slug"
        params={{ slug: product.slug }}
        className="relative block overflow-hidden bg-secondary/40"
        aria-label={`View details for ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          width={912}
          height={1200}
          className="aspect-[3/4] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />
        {!product.inStock && (
          <span className="absolute top-4 left-4 border border-border bg-background/80 px-3 py-1 text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
            Allocated
          </span>
        )}
        {product.badge && (
          <span className="absolute top-4 right-4 border border-accent/40 bg-background/80 px-3 py-1 text-[0.55rem] tracking-[0.18em] text-accent uppercase">
            {badgeLabel(product.badge)}
          </span>
        )}
        {product.imageSource === "placeholder" && (
          <span className="absolute bottom-4 left-4 border border-border/60 bg-background/70 px-2.5 py-1 text-[0.55rem] tracking-[0.14em] text-muted-foreground/80 uppercase">
            Photo coming soon
          </span>
        )}
      </Link>

      <div className="mt-5 flex flex-1 flex-col">
        <p className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
          {product.traits}
        </p>
        <h3 className="mt-2 font-display text-2xl leading-tight">
          <Link
            to="/collection/$slug"
            params={{ slug: product.slug }}
            className="link-underline"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{product.brand}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <a
            href={config.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.65rem] tracking-[0.18em] text-accent uppercase link-underline"
          >
            Enquire for price
          </a>
          <div className="flex items-center gap-4">
            <Link
              to="/collection/$slug"
              params={{ slug: product.slug }}
              className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase link-underline"
            >
              Details
            </Link>
            <button
              disabled={!product.inStock}
              onClick={() => {
                add(product.slug);
                setOpen(true);
                toast.success(`${product.name} added to your selection`);
              }}
              className="text-[0.65rem] tracking-[0.2em] text-accent uppercase link-underline disabled:cursor-not-allowed disabled:text-muted-foreground/50"
            >
              {product.inStock ? "Add" : "Waitlist"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
