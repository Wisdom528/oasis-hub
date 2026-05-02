import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="pt-36 pb-14 md:pt-44 md:pb-20 bg-cream/60 border-b border-border">
      <div className="mx-auto max-w-4xl px-6 text-center animate-[fade-up_0.8s_ease-out]">
        {eyebrow && (
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-accent mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl md:text-6xl text-foreground text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
