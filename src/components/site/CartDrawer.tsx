import { Link } from "@tanstack/react-router";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/lib/cart";
import { getProduct } from "@/lib/wines";
import { siteConfig } from "@/lib/siteConfig";

export function CartDrawer() {
  const { open, setOpen, lines, setQuantity, remove } = useCart();

  const items = lines
    .map((l) => ({ line: l, product: getProduct(l.slug) }))
    .filter((i) => i.product);

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
              {items.map(({ line, product }) => (
                <li key={line.slug} className="flex gap-4">
                  <img
                    src={product!.image}
                    alt={product!.imageAlt}
                    loading="lazy"
                    width={912}
                    height={1200}
                    className="h-28 w-20 object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-display text-xl leading-none">{product!.name}</p>
                    <p className="mt-1 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                      {product!.brand}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {product!.traits}
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center border border-border">
                        <button
                          aria-label={`Decrease quantity of ${product!.name}`}
                          onClick={() => setQuantity(line.slug, line.quantity - 1)}
                          className="px-2 py-1 text-muted-foreground hover:text-foreground"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 text-sm">{line.quantity}</span>
                        <button
                          aria-label={`Increase quantity of ${product!.name}`}
                          onClick={() => setQuantity(line.slug, line.quantity + 1)}
                          className="px-2 py-1 text-muted-foreground hover:text-foreground"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Enquire for price
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
          <p className="text-xs text-muted-foreground">
            Prices confirmed on enquiry. Call {siteConfig.phone} or message us on WhatsApp to place your order.
          </p>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center bg-accent px-8 py-4 text-xs tracking-[0.24em] text-accent-foreground uppercase transition-colors duration-500 hover:bg-accent/85"
          >
            Order on WhatsApp
          </a>
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
