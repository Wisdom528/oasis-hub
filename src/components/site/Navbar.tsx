import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span
            className={cn(
              "font-serif text-2xl md:text-3xl tracking-tight transition-colors",
              scrolled ? "text-foreground" : "text-cream"
            )}
          >
            Cactus
          </span>
          <span className="text-gold text-2xl leading-none">·</span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className={cn(
                "gold-underline text-sm uppercase tracking-[0.18em] font-medium transition-colors",
                scrolled ? "text-foreground/85 hover:text-foreground" : "text-cream/90 hover:text-cream"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/reservations"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-gold text-foreground text-sm font-medium tracking-wide hover:shadow-glow transition-all hover:-translate-y-0.5"
          >
            Reserve a Table
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className={cn(
            "md:hidden p-2 rounded-md transition-colors",
            scrolled ? "text-foreground" : "text-cream"
          )}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border animate-[slide-down_0.3s_ease-out]">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                className="text-base font-medium text-foreground/90 py-2 border-b border-border/60"
                activeProps={{ className: "text-accent" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/reservations"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center px-5 py-3 rounded-full bg-gradient-gold text-foreground font-medium"
            >
              Reserve a Table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
