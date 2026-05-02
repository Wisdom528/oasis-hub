import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Layout, PageHeader } from "@/components/site/Layout";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import burger from "@/assets/dish-burger.jpg";
import pasta from "@/assets/dish-pasta.jpg";
import fish from "@/assets/dish-fish.jpg";
import pizza from "@/assets/dish-pizza.jpg";
import brownie from "@/assets/dish-brownie.jpg";
import sorbet from "@/assets/dish-sorbet.jpg";
import mojito from "@/assets/dish-mojito.jpg";
import salad from "@/assets/dish-salad.jpg";
import juice from "@/assets/dish-juice.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Cactus Restaurant Lagos" },
      { name: "description", content: "Photos of Cactus Restaurant: lagoon-side terrace, warm interiors and signature dishes." },
      { property: "og:title", content: "Gallery — Cactus Restaurant" },
      { property: "og:description", content: "A visual tour of Cactus by the Lagos lagoon." },
    ],
  }),
  component: GalleryPage,
});

const photos = [
  { src: hero, alt: "Waterfront terrace at dusk", caption: "Waterfront Terrace" },
  { src: interior2, alt: "Outdoor lagoon-side seating at sunset", caption: "Lagoon Sunset" },
  { src: burger, alt: "Street style burger", caption: "Street Style Burger" },
  { src: pasta, alt: "Spaghetti bolognese", caption: "Spaghetti Bolognese" },
  { src: interior1, alt: "Warm dining room", caption: "Dining Room" },
  { src: fish, alt: "Fish and chips", caption: "Fish & Chips" },
  { src: pizza, alt: "Wood-fired pizza", caption: "Wood-Fired Pizza" },
  { src: mojito, alt: "Classic mojito", caption: "Classic Mojito" },
  { src: brownie, alt: "Chocolate brownie", caption: "Chocolate Brownie" },
  { src: sorbet, alt: "Strawberry sorbet", caption: "Strawberry Sorbet" },
  { src: salad, alt: "Festival salad", caption: "Festival Salad" },
  { src: juice, alt: "Tropical juice", caption: "Tropical Juice" },
];

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? 0 : (i + 1) % photos.length));
      if (e.key === "ArrowLeft") setActive((i) => (i === null ? 0 : (i - 1 + photos.length) % photos.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <Layout>
      <PageHeader
        eyebrow="Gallery"
        title="A Visual Tour"
        subtitle="From the lagoon at dusk to plates that arrive smiling — the Cactus story in pictures."
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {photos.map((p, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="group relative overflow-hidden rounded-xl aspect-square bg-muted focus:outline-none focus:ring-2 focus:ring-accent"
                style={{ animation: `fade-up 0.5s ease-out ${i * 0.04}s both` }}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-cream font-serif text-lg translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    {p.caption}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-forest/95 backdrop-blur-sm flex items-center justify-center p-4 animate-[fade-in_0.3s_ease-out]"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setActive((i) => (i === null ? 0 : (i - 1 + photos.length) % photos.length)); }}
            className="absolute left-3 md:left-8 p-3 rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setActive((i) => (i === null ? 0 : (i + 1) % photos.length)); }}
            className="absolute right-3 md:right-8 p-3 rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
          <figure
            className="max-w-5xl max-h-[85vh] animate-[scale-in_0.4s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[active].src}
              alt={photos[active].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-elegant"
            />
            <figcaption className="mt-4 text-center text-cream/85 font-serif text-lg">
              {photos[active].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </Layout>
  );
}
