import { MapPin, ShieldCheck, Users } from "lucide-react";

export function TrustBar() {
  const items = [
    {
      icon: MapPin,
      title: "Three Counties Coverage",
      desc: "Primary pickup across Gloucestershire, Worcestershire & Herefordshire.",
    },
    {
      icon: ShieldCheck,
      title: "Modern, Compliant Fleet",
      desc: "Euro 6 vehicles sized 16–51 seats, maintained for dependable group travel.",
    },
    {
      icon: Users,
      title: "Private Group Transport",
      desc: "Quote‑based bookings for organisers — no per‑seat ticketing.",
    },
  ];

  return (
    <div className="bg-ivory">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 border-b border-charcoal/10 py-5 md:grid-cols-3">
          {items.map((x) => (
            <div key={x.title} className="flex items-start gap-3">
              <div className="mt-0.5 rounded-lg bg-secondary p-2 ring-1 ring-charcoal/10">
                <x.icon className="h-5 w-5 text-gold" />
              </div>
              <div>
                <div className="text-sm font-semibold text-charcoal">{x.title}</div>
                <div className="mt-1 text-sm leading-relaxed text-slate">{x.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
