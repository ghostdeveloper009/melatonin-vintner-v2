import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Instagram, Facebook, Phone, MapPin } from "lucide-react";

const nav = [
  { to: "/collection", label: "Collection" },
  { to: "/about", label: "About" },
  { to: "/guide", label: "Drink Guide" },
  { to: "/contact", label: "Contact" },
] as const;

const policies = ["Shipping", "Returns", "Privacy", "Terms"];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr_1fr_1.4fr]">
          <div>
            <p className="font-display text-lg tracking-[0.3em] uppercase">
              Melatonin Vintner
            </p>
            <p className="mt-3 text-[0.65rem] tracking-[0.22em] text-accent uppercase">
              Premium Drinks Collection
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Pour better. Live better. Curated wines and liquor premium
              selections for every occasion.
            </p>
            <div className="mt-7 space-y-3">
              <a
                href="tel:08070430838"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                08070430838
              </a>
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Ishieke
              </p>
              <a
                href="https://www.tiktok.com/@mellatonin_vintner"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="text-xs">🎵</span>
                TikTok: @mellatonin_vintner
              </a>
              <a
                href="https://www.instagram.com/mellatonin_vintner"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Instagram className="h-4 w-4" />
                Instagram: @mellatonin_vintner
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow">Explore</h2>
            <ul className="mt-6 space-y-3">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow">Service</h2>
            <ul className="mt-6 space-y-3">
              {policies.map((p) => (
                <li key={p}>
                  <Link
                    to="/contact"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl">Join the Vintner&rsquo;s Table</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Occasional letters on new arrivals, small allocations and the
              way we drink through the seasons.
            </p>
            <form
              className="mt-6 flex border-b border-border focus-within:border-accent"
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
                toast.success("Thank you — we'll be in touch.");
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 py-3 pl-4 text-[0.65rem] tracking-[0.2em] text-accent uppercase"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 text-[0.65rem] tracking-[0.16em] text-muted-foreground/80 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Melatonin Vintner — Premium Drinks Collection</p>
          <p>Quality selections. Classic taste. Exceptional moments.</p>
        </div>
      </div>
    </footer>
  );
}
