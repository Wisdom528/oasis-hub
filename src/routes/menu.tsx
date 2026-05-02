import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHeader } from "@/components/site/Layout";
import { menuItems, categories, type MenuCategory } from "@/data/menu";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Cactus Restaurant Lagos" },
      { name: "description", content: "Explore Cactus Restaurant's multi-cuisine menu: starters, mains, desserts and drinks. Featuring Fish & Chips, Spaghetti Bolognese, Street Burger and more." },
      { property: "og:title", content: "Menu — Cactus Restaurant Lagos" },
      { property: "og:description", content: "Multi-cuisine menu by the Lagos lagoon." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<MenuCategory>("Main Course");
  const items = menuItems.filter((m) => m.category === active);

  return (
    <Layout>
      <PageHeader
        eyebrow="Our Kitchen"
        title="The Menu"
        subtitle="From wood-fired pizzas to slow-cooked ragùs — a journey through cuisines, plated with care."
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all border",
                  active === c
                    ? "bg-forest text-cream border-forest shadow-elegant"
                    : "bg-transparent text-foreground border-border hover:border-accent hover:text-accent"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {items.map((dish, i) => (
              <article
                key={dish.id}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-500"
                style={{ animation: `fade-up 0.5s ease-out ${i * 0.06}s both` }}
              >
                {dish.popular && (
                  <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-gold text-xs font-medium text-foreground">
                    <Sparkles size={12} /> Popular
                  </span>
                )}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="w-full h-full object-cover hover-zoom"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-serif text-2xl text-foreground">{dish.name}</h3>
                    <span className="text-accent font-medium whitespace-nowrap">{dish.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{dish.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
