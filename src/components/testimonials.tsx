export function TestimonialsStrip() {
  const items = [
    {
      quote:
        "Three Counties Coaches made our five-day Scottish tour absolutely seamless. The coach was immaculate, the driver was brilliant, and the whole group had a wonderful time.",
      by: "Margaret H. — Group Organiser, Cheltenham",
    },
    {
      quote:
        "We've used Three Counties for our school transport contract for three years now. Reliable, professional and the children love the coaches. Highly recommended.",
      by: "David T. — Headteacher, Worcestershire",
    },
    {
      quote:
        "Outstanding service for our corporate away day. The executive coach was comfortable and stylish, and arrival was perfectly on time. Will definitely book again.",
      by: "Sarah K. — Events Manager, Hereford",
    },
  ];

  return (
    <div className="mt-10">
      <p className="text-sm leading-relaxed text-slate">
        Trusted by group organisers, schools and corporate clients across the Three Counties.
        Client testimonials shown below are representative examples. Verified customer reviews
        will be published shortly.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {items.map((t) => (
          <div
            key={t.by}
            className="rounded-xl bg-white p-6 shadow-soft ring-1 ring-charcoal/10"
          >
            <p className="text-sm leading-relaxed text-charcoal/80">“{t.quote}”</p>
            <div className="mt-4 text-sm font-semibold tracking-tight text-charcoal">
              {t.by}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
