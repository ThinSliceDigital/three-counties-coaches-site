import { Container } from "@/components/container";

export const metadata = {
  title: "Locations",
  description:
    "Primary pickup across Gloucestershire, Worcestershire & Herefordshire — travel nationwide by request.",
};

const counties = [
  { name: "Gloucestershire", href: "/locations/gloucestershire" },
  { name: "Worcestershire", href: "/locations/worcestershire" },
  { name: "Herefordshire", href: "/locations/herefordshire" },
];

export default function LocationsPage() {
  return (
    <section className="bg-ivory">
      <Container className="py-16">
        <h1 className="font-serif text-4xl text-charcoal sm:text-5xl">Locations Served</h1>
        <p className="mt-5 max-w-3xl text-base text-slate">
          Primary pickup across the three counties — UK-wide travel available by request.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {counties.map((c) => (
            <a key={c.name} href={c.href} className="rounded-xl bg-secondary p-6 shadow-soft ring-1 ring-charcoal/10">
              <div className="font-serif text-xl text-charcoal">{c.name}</div>
              <p className="mt-2 text-sm text-slate">Coach & minibus hire for private groups</p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
