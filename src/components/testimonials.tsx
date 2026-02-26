export function TestimonialsStrip() {
  const items = [
    {
      quote: "Professional, punctual and spotless vehicles — exactly what our group needed.",
      by: "Group organiser (placeholder)",
    },
    {
      quote: "Handled our airport pickup and multi‑day schedule flawlessly.",
      by: "Tour coordinator (placeholder)",
    },
    {
      quote: "Reliable school transport partner — clear comms and calm drivers.",
      by: "School admin (placeholder)",
    },
  ];

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      {items.map((t) => (
        <div
          key={t.quote}
          className="rounded-xl bg-white p-6 shadow-soft ring-1 ring-charcoal/10"
        >
          <p className="text-sm leading-relaxed text-charcoal/80">“{t.quote}”</p>
          <div className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-slate">
            {t.by}
          </div>
        </div>
      ))}
    </div>
  );
}
