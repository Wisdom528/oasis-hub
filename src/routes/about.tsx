import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { Heart, Leaf, Award } from "lucide-react";
import interior1 from "@/assets/interior-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cactus Restaurant Lagos" },
      { name: "description", content: "The story of Cactus Restaurant, a multi-cuisine waterfront dining institution in Victoria Island, Lagos." },
      { property: "og:title", content: "About — Cactus Restaurant" },
      { property: "og:description", content: "Our story, our philosophy, our people." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Our Story"
        title="Where Lagos comes to feel at home."
        subtitle="For over a decade, Cactus has been more than a restaurant — it's a place where birthdays begin, deals close and friendships find a table."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <img
            src={interior1}
            alt="The warm interior of Cactus Restaurant"
            loading="lazy"
            className="rounded-2xl shadow-elegant aspect-[4/5] object-cover"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">The Cactus Way</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
              A multi-cuisine kitchen led by curiosity and care.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We started with a simple idea: bring the world's favourite plates
              to one waterfront table in Lagos. Today, our chefs craft Italian
              classics, hearty continental mains, fresh local flavours and
              indulgent desserts — all under one warmly lit roof.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team is the heart of it. Courteous, attentive and quietly
              proud — they're the reason guests keep coming back, long after
              the plates are cleared.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream/50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">What We Stand For</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">Three things, every single day.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Warm Hospitality", text: "Every guest greeted like an old friend, every meal sent off with a smile." },
              { icon: Leaf, title: "Fresh Ingredients", text: "Locally sourced where possible, always handled with respect for flavour." },
              { icon: Award, title: "Consistency", text: "From your first visit to your fiftieth — the same care, the same craft." },
            ].map((v, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-7 hover:shadow-elegant transition-all"
                style={{ animation: `fade-up 0.6s ease-out ${i * 0.1}s both` }}>
                <div className="inline-flex p-3 rounded-full bg-accent/10 text-accent mb-4">
                  <v.icon size={22} />
                </div>
                <h3 className="font-serif text-xl text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">Come share a meal with us.</h2>
          <Link
            to="/reservations"
            className="mt-7 inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-gold text-foreground font-medium tracking-wide hover:shadow-glow hover:-translate-y-0.5 transition-all"
          >
            Reserve a Table
          </Link>
        </div>
      </section>
    </Layout>
  );
}
