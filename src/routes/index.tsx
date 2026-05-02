import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Star, Utensils, Wine, Waves, ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import { menuItems } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cactus Restaurant — Waterfront Dining, Victoria Island Lagos" },
      { name: "description", content: "A taste of the world by the Lagos lagoon. Multi-cuisine waterfront dining, reservations and online orders." },
      { property: "og:title", content: "Cactus Restaurant — Waterfront Dining, Lagos" },
      { property: "og:description", content: "Multi-cuisine waterfront dining with warm hospitality and a view that lingers." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = menuItems.filter((m) => m.popular).slice(0, 4);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={hero}
          alt="Cactus Restaurant waterfront terrace at dusk overlooking the Lagos lagoon"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-[scale-in_1.4s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-gold text-xs md:text-sm uppercase tracking-[0.4em] animate-[fade-up_0.8s_ease-out_0.2s_both]">
            Victoria Island · Lagos
          </p>
          <h1 className="mt-6 font-serif text-cream text-5xl sm:text-6xl md:text-8xl leading-[1.05] text-balance animate-[fade-up_0.9s_ease-out_0.4s_both]">
            A taste of the world,
            <br />
            <span className="italic text-gold">by the lagoon.</span>
          </h1>
          <p className="mt-6 max-w-xl text-cream/85 text-base md:text-lg leading-relaxed animate-[fade-up_0.9s_ease-out_0.6s_both]">
            Multi-cuisine plates, candlelit tables and a waterfront view that
            has welcomed Lagos for over a decade.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 animate-[fade-up_0.9s_ease-out_0.8s_both]">
            <Link
              to="/reservations"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-gold text-foreground font-medium tracking-wide hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              Reserve a Table
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-cream/40 text-cream backdrop-blur-sm hover:bg-cream/10 transition-all"
            >
              Explore the Menu
            </Link>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-cream/70 text-xs uppercase tracking-[0.3em] animate-[fade-in_1s_ease-out_1.4s_both]">
            <span className="h-px w-8 bg-cream/40" />
            Open Now · Closes 10:30 pm
            <span className="h-px w-8 bg-cream/40" />
          </div>
        </div>
      </section>

      {/* INTRO STATS */}
      <section className="py-20 md:py-28 bg-cream/40">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            { icon: Star, label: "4.4 ★ Google", sub: "6,603+ reviews" },
            { icon: Waves, label: "Lagoon View", sub: "Indoor & outdoor seating" },
            { icon: Utensils, label: "Multi-Cuisine", sub: "Continental · Italian · Local" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="p-4 rounded-full bg-background border border-border group-hover:border-gold transition-colors">
                <s.icon className="text-accent" size={24} />
              </div>
              <p className="mt-4 font-serif text-2xl text-foreground">{s.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Signature</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance max-w-xl">
                Dishes our guests come back for.
              </h2>
            </div>
            <Link
              to="/menu"
              className="group inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors self-start md:self-auto"
            >
              View full menu
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featured.map((dish, i) => (
              <article
                key={dish.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-500"
                style={{ animation: `fade-up 0.7s ease-out ${i * 0.08}s both` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="w-full h-full object-cover hover-zoom"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-foreground">{dish.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{dish.description}</p>
                  <p className="mt-3 text-accent font-medium">{dish.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AMBIENCE */}
      <section className="py-20 md:py-28 bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={interior1} alt="Cactus restaurant warm interior with pendant lighting" loading="lazy" className="rounded-2xl aspect-[3/4] object-cover hover-zoom" />
            <img src={interior2} alt="Outdoor lagoon-side terrace at sunset" loading="lazy" className="rounded-2xl aspect-[3/4] object-cover mt-10 hover-zoom" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">The Setting</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream text-balance">
              Where Lagos slows down to enjoy a good meal.
            </h2>
            <p className="mt-6 text-cream/80 leading-relaxed">
              Tucked along Ozumba Mbadiwe Avenue, Cactus is a haven of warm
              lights, lush greenery and lagoon breeze. Whether you're here
              for brunch on the terrace or a quiet dinner indoors, every
              corner is designed to make you stay longer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Dine-in", "Takeaway", "No-contact Delivery", "Private Events"].map((t) => (
                <span key={t} className="px-4 py-1.5 rounded-full border border-cream/25 text-sm text-cream/85">
                  {t}
                </span>
              ))}
            </div>
            <Link
              to="/reservations"
              className="mt-10 inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-gold text-foreground font-medium tracking-wide hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              Book Your Table
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Guests Say</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
              Loved by Lagos · 4.4 ★ on Google
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: "Adetola Ogbebor", text: "The street style burger was sumptuous. Every bite gave maximum satisfaction. The customer service is top notch." },
              { name: "Dolon Zahir", text: "Multi-cuisine restaurant with a cozy ambience. Outdoor dining is awesome — nicely maintained and the service is excellent." },
              { name: "Six The Plug", text: "Stunning waterfront views with lots of space indoors and outdoors. Lovely dessert options and refined design." },
            ].map((r, i) => (
              <blockquote
                key={i}
                className="bg-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-elegant transition-all"
              >
                <div className="flex gap-0.5 text-gold mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-foreground/85 leading-relaxed italic">"{r.text}"</p>
                <footer className="mt-5 text-sm text-muted-foreground">— {r.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-cream/60">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Wine className="mx-auto text-accent" size={32} />
          <h2 className="mt-5 font-serif text-4xl md:text-5xl text-foreground text-balance">
            Reserve your table tonight.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Whether for two or twenty — we'll set the candles, you bring the
            stories.
          </p>
          <Link
            to="/reservations"
            className="mt-8 inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-gold text-foreground font-medium tracking-wide hover:shadow-glow hover:-translate-y-0.5 transition-all"
          >
            Book Now
          </Link>
        </div>
      </section>
    </Layout>
  );
}
