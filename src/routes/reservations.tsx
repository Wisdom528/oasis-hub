import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHeader } from "@/components/site/Layout";
import { z } from "zod";
import { Calendar, Clock, Users, User, Mail, Phone, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — Cactus Restaurant Lagos" },
      { name: "description", content: "Reserve your table at Cactus Restaurant on the Lagos waterfront. Choose your date, time and party size." },
      { property: "og:title", content: "Reservations — Cactus Restaurant" },
      { property: "og:description", content: "Book a candlelit table by the lagoon." },
    ],
  }),
  component: ReservationsPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(160),
  phone: z.string().trim().min(7, "Please enter a phone number").max(30),
  date: z.string().min(1, "Pick a date"),
  time: z.string().min(1, "Pick a time"),
  guests: z.string().min(1),
  notes: z.string().max(400).optional(),
});

const timeSlots = [
  "12:00", "12:30", "13:00", "13:30", "14:00",
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00",
];

function ReservationsPage() {
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    date: today, time: "19:00", guests: "2", notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <Layout>
      <PageHeader
        eyebrow="Reservations"
        title="Reserve Your Table"
        subtitle="We hold tables for up to 15 minutes after your reservation. For parties of 8 or more, please call us directly."
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          {submitted ? (
            <div className="bg-card border border-border rounded-2xl p-10 text-center shadow-elegant animate-[scale-in_0.5s_ease-out]">
              <CheckCircle2 className="mx-auto text-accent" size={56} />
              <h2 className="mt-5 font-serif text-3xl text-foreground">Reservation received</h2>
              <p className="mt-3 text-muted-foreground">
                Thank you, {form.name}. We've sent a confirmation to <strong>{form.email}</strong>.
              </p>
              <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-4 bg-cream/60 rounded-xl text-foreground">
                <span className="flex items-center gap-2"><Calendar size={16} className="text-accent" /> {form.date}</span>
                <span className="hidden sm:block text-border">·</span>
                <span className="flex items-center gap-2"><Clock size={16} className="text-accent" /> {form.time}</span>
                <span className="hidden sm:block text-border">·</span>
                <span className="flex items-center gap-2"><Users size={16} className="text-accent" /> {form.guests} guests</span>
              </div>
              <button
                onClick={() => { setSubmitted(false); }}
                className="mt-8 text-sm text-accent hover:underline"
              >
                Make another reservation
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-elegant animate-[fade-up_0.6s_ease-out]"
            >
              <div className="grid md:grid-cols-3 gap-5">
                <Field label="Date" icon={Calendar} error={errors.date}>
                  <input
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    className="input"
                  />
                </Field>
                <Field label="Time" icon={Clock} error={errors.time}>
                  <select value={form.time} onChange={(e) => update("time", e.target.value)} className="input">
                    {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
                <Field label="Guests" icon={Users} error={errors.guests}>
                  <select value={form.guests} onChange={(e) => update("guests", e.target.value)} className="input">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <option key={i} value={String(i + 1)}>{i + 1} {i === 0 ? "guest" : "guests"}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-5 grid md:grid-cols-2 gap-5">
                <Field label="Full name" icon={User} error={errors.name}>
                  <input value={form.name} onChange={(e) => update("name", e.target.value)} className="input" placeholder="Adaeze Okafor" maxLength={80} />
                </Field>
                <Field label="Phone" icon={Phone} error={errors.phone}>
                  <input value={form.phone} onChange={(e) => update("phone", e.target.value)} className="input" placeholder="0802 000 0000" maxLength={30} />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Email" icon={Mail} error={errors.email}>
                  <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="input" placeholder="you@email.com" maxLength={160} />
                </Field>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-medium text-foreground mb-2">Special requests <span className="text-muted-foreground font-normal">(optional)</span></label>
                <textarea
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  rows={3}
                  maxLength={400}
                  className="input resize-none"
                  placeholder="Birthday celebration, dietary needs, seating preferences…"
                />
              </div>

              <button
                type="submit"
                className="mt-8 w-full inline-flex items-center justify-center px-7 py-4 rounded-full bg-gradient-gold text-foreground font-medium tracking-wide hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                Confirm Reservation
              </button>

              <p className="mt-4 text-xs text-center text-muted-foreground">
                Or call us directly at <a href="tel:08027777666" className="text-accent hover:underline">0802 777 7666</a>
              </p>
            </form>
          )}
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: var(--color-background);
          border: 1px solid var(--color-border);
          border-radius: 0.625rem;
          color: var(--color-foreground);
          font-size: 0.95rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-accent) 20%, transparent);
        }
      `}</style>
    </Layout>
  );
}

function Field({
  label, icon: Icon, error, children,
}: {
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={cn("flex items-center gap-2 text-sm font-medium mb-2", error ? "text-destructive" : "text-foreground")}>
        <Icon size={14} className="text-accent" />
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
