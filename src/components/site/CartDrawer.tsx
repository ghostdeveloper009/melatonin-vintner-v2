import { Link } from "@tanstack/react-router";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatPrice, formatNaira, getWine } from "@/lib/wines";

function itemPrice(wine: ReturnType<typeof getWine>): string {
  if (!wine) return formatPrice(0);
  if (wine.nigerianCollection && wine.nairaPrice) {
    return formatNaira(wine.nairaPrice);
  }
  return formatPrice(wine.priceCents);
}

export function CartDrawer() {
  const { open, setOpen, lines, setQuantity, remove } = useCart();

  const items = lines
    .map((l) => ({ line: l, wine: getWine(l.slug) }))
    .filter((i) => i.wine);

  const usdSubtotal = items
    .filter((i) => !i.wine?.nigerianCollection)
    .reduce((sum, i) => sum + (i.wine?.priceCents ?? 0) * i.line.quantity, 0);

  const ngnSubtotal = items
    .filter((i) => i.wine?.nigerianCollection && i.wine?.nairaPrice)
    .reduce((sum, i) => sum + (i.wine!.nairaPrice!) * i.line.quantity, 0);

  return (
    <div
      className={`fixed inset-0 z-90 ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-700 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-label="Your selection"
        className={`absolute top-0 right-0 flex h-full w-full max-w-md flex-col border-l border-border bg-card transition-transform duration-700 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="font-display text-2xl">Your Selection</h2>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close cart"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Your selection is empty. Begin with the Vintner&rsquo;s Selection.
            </p>
          ) : (
            <ul className="space-y-6">
              {items.map(({ line, wine }) => (
                <li key={line.slug} className="flex gap-4">
                  <img
                    src={wine!.image}
                    alt={wine!.imageAlt}
                    loading="lazy"
                    width={912}
                    height={1200}
                    className="h-28 w-20 object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-display text-xl leading-none">{wine!.name}</p>
                    <p className="mt-1 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                      {wine!.varietal} · {wine!.vintage}
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center border border-border">
                        <button
                          aria-label={`Decrease quantity of ${wine!.name}`}
                          onClick={() => setQuantity(line.slug, line.quantity - 1)}
                          className="px-2 py-1 text-muted-foreground hover:text-foreground"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 text-sm">{line.quantity}</span>
                        <button
                          aria-label={`Increase quantity of ${wine!.name}`}
                          onClick={() => setQuantity(line.slug, line.quantity + 1)}
                          className="px-2 py-1 text-muted-foreground hover:text-foreground"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {itemPrice(wine)}
                      </span>
                    </div>
                    <button
                      onClick={() => remove(line.slug)}
                      className="mt-2 text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase link-underline"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className="border-t border-border px-6 py-6">
          {usdSubtotal > 0 && (
            <div className="flex items-baseline justify-between">
              <span className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
                Subtotal (USD)
              </span>
              <span className="font-display text-2xl">{formatPrice(usdSubtotal)}</span>
            </div>
          )}
          {ngnSubtotal > 0 && (
            <div className={`flex items-baseline justify-between ${usdSubtotal > 0 ? "mt-2" : ""}`}>
              <span className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
                Subtotal (NGN)
              </span>
              <span className="font-display text-2xl">{formatNaira(ngnSubtotal)}</span>
            </div>
          )}
          <p className="mt-2 text-xs text-muted-foreground">
            Shipping and duties calculated at checkout.
          </p>
          <button
            disabled
            className="mt-5 w-full cursor-not-allowed border border-border px-8 py-4 text-xs tracking-[0.24em] text-muted-foreground uppercase"
          >
            Checkout — coming soon
          </button>
          <Link
            to="/collection"
            onClick={() => setOpen(false)}
            className="mt-3 block text-center text-xs tracking-[0.2em] text-accent uppercase"
          >
            Continue browsing
          </Link>
        </footer>
      </aside>
    </div>
  );
}
