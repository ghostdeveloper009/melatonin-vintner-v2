import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { useCart } from "@/lib/cart";
import { formatPrice, formatNaira, badgeLabel, type Wine } from "@/lib/wines";

export function WineCard({ wine }: { wine: Wine }) {
  const { add, setOpen } = useCart();

  const isNigerian = wine.nigerianCollection === true;
  const priceDisplay = isNigerian && wine.nairaPrice
    ? formatNaira(wine.nairaPrice)
    : formatPrice(wine.priceCents);

  return (
    <article className="group flex flex-col">
      <Link
        to="/collection/$slug"
        params={{ slug: wine.slug }}
        className="relative block overflow-hidden bg-secondary/40"
        aria-label={`View details for ${wine.name}`}
      >
        <img
          src={wine.image}
          alt={wine.imageAlt}
          loading="lazy"
          width={912}
          height={1200}
          className="aspect-[3/4] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />
        {!wine.inStock && (
          <span className="absolute top-4 left-4 border border-border bg-background/80 px-3 py-1 text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
            Allocated
          </span>
        )}
        {wine.badge && (
          <span className="absolute top-4 right-4 border border-accent/40 bg-background/80 px-3 py-1 text-[0.55rem] tracking-[0.18em] text-accent uppercase">
            {badgeLabel(wine.badge)}
          </span>
        )}
      </Link>

      <div className="mt-5 flex flex-1 flex-col">
        <p className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
          {wine.region} · {wine.vintage}
        </p>
        <h3 className="mt-2 font-display text-2xl leading-tight">
          <Link
            to="/collection/$slug"
            params={{ slug: wine.slug }}
            className="link-underline"
          >
            {wine.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{wine.varietal}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90">
          {wine.tastingNote}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className="font-display text-xl">{priceDisplay}</span>
          <div className="flex items-center gap-4">
            <Link
              to="/collection/$slug"
              params={{ slug: wine.slug }}
              className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase link-underline"
            >
              Details
            </Link>
            <button
              disabled={!wine.inStock}
              onClick={() => {
                add(wine.slug);
                setOpen(true);
                toast.success(`${wine.name} added to your selection`);
              }}
              className="text-[0.65rem] tracking-[0.2em] text-accent uppercase link-underline disabled:cursor-not-allowed disabled:text-muted-foreground/50"
            >
              {wine.inStock ? "Add" : "Waitlist"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
