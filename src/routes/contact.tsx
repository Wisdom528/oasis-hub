import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cactus Restaurant Lagos" },
      { name: "description", content: "Visit Cactus Restaurant at 20/24 Ozumba Mbadiwe Ave, Victoria Island, Lagos. Open daily until 10:30pm." },
      { property: "og:title", content: "Contact — Cactus Restaurant" },
      { property: "og:description", content: "Find us, call us, come dine with us." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const info = [
    { icon: MapPin, title: "Address", body: "20/24 Ozumba Mbadiwe Ave\nVictoria Island, Lagos 106104" },
    { icon: Phone, title: "Phone", body: "0802 777 7666", href: "tel:08027777666" },
    { icon: Mail, title: "Email", body: "hello@cactuslagos.com", href: "mailto:hello@cactuslagos.com" },
    { icon: Clock, title: "Hours", body: "Open daily\nCloses 10:30 pm" },
  ];

  return (
    <Layout>
      <PageHeader
        eyebrow="Find Us"
        title="Visit Cactus"
        subtitle="On the waterfront in Victoria Island. Open every day for lunch and dinner."
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {info.map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-elegant transition-all"
                style={{ animation: `fade-up 0.5s ease-out ${i * 0.08}s both` }}
              >
                <div className="flex gap-4">
                  <div className="p-3 rounded-full bg-accent/10 text-accent shrink-0 h-fit">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="mt-1 block text-muted-foreground hover:text-accent transition-colors whitespace-pre-line">
                        {item.body}
                      </a>
                    ) : (
                      <p className="mt-1 text-muted-foreground whitespace-pre-line">{item.body}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-elegant border border-border min-h-[420px]">
            <iframe
              title="Cactus Restaurant location"
              src="https://www.google.com/maps?q=20%2F24+Ozumba+Mbadiwe+Ave%2C+Victoria+Island%2C+Lagos&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[420px] border-0"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
