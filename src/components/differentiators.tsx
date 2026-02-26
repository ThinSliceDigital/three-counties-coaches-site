import { Briefcase, Route, ShieldCheck } from "lucide-react";

export function Differentiators() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Quietly Premium",
      desc: "Executive presentation, calm service and clean vehicles — built for organisers and VIP expectations.",
    },
    {
      icon: Route,
      title: "Experienced, Flexible Logistics",
      desc: "Airport pickup → hotel → touring schedules, with sensible timings and contingency planning.",
    },
    {
      icon: Briefcase,
      title: "Built for Group Organisers",
      desc: "Quote‑based bookings, clear comms and a process designed to reduce your workload.",
    },
  ];

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {items.map((x) => (
        <div
          key={x.title}
          className="rounded-xl bg-white p-6 shadow-soft ring-1 ring-charcoal/10"
        >
          <x.icon className="h-6 w-6 text-gold" />
          <div className="mt-3 font-serif text-lg text-charcoal">{x.title}</div>
          <p className="mt-2 text-sm leading-relaxed text-slate">{x.desc}</p>
        </div>
      ))}
    </div>
  );
}
