import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useCart } from "@/lib/cart";

const links = [
  { to: "/", label: "Home" },
  { to: "/collection", label: "Our Collection" },
  { to: "/nigeria", label: "Nigeria, Uncorked" },
  { to: "/about", label: "About" },
  { to: "/guide", label: "Wine Guide" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const { count, setOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-80 transition-all duration-700 ease-out ${
        scrolled
          ? "border-b border-border/70 bg-background/85 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8">
        <button
          onClick={() => setMenu(true)}
          aria-label="Open menu"
          className="text-foreground lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link
          to="/"
          className="font-display text-[0.95rem] tracking-[0.34em] whitespace-nowrap text-foreground uppercase sm:text-base"
        >
          Melatonin Vintner
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-accent" }}
                  className="link-underline text-[0.7rem] tracking-[0.22em] text-muted-foreground uppercase transition-colors duration-500 hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <Link
            to="/collection"
            aria-label="Search the collection"
            className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            <Search className="h-[1.05rem] w-[1.05rem]" />
          </Link>
          <Link
            to="/contact"
            aria-label="Account"
            className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            <User className="h-[1.05rem] w-[1.05rem]" />
          </Link>
          <button
            onClick={() => setOpen(true)}
            aria-label={`Open selection, ${count} items`}
            className="relative text-muted-foreground transition-colors hover:text-foreground"
          >
            <ShoppingBag className="h-[1.05rem] w-[1.05rem]" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[0.6rem] text-accent-foreground">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-90 bg-background transition-opacity duration-500 lg:hidden ${
          menu ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <span className="font-display text-sm tracking-[0.3em] uppercase">
            Melatonin Vintner
          </span>
          <button onClick={() => setMenu(false)} aria-label="Close menu">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav aria-label="Mobile" className="px-5 pt-10">
          <ul className="space-y-7">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setMenu(false)}
                  className="font-display text-4xl text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-16 text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
            Please enjoy responsibly
          </p>
        </nav>
      </div>
    </header>
  );
}
