import Image from "next/image";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Carousel } from "@/components/carousel";
import {
  PlaneTakeoff,
  GraduationCap,
  Map,
  Trophy,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Executive Coach & Minibus Hire Across the Three Counties",
  description:
    "Premium coach and minibus hire for private groups across Gloucestershire, Worcestershire & Herefordshire. Euro 6 fleet (16–51 seats). Tours, airport transfers, schools and golf group transport.",
};

const signatureTours = [
  {
    title: "5-Day Scotland Coach Tour",
    image: "/placeholders/scotland.svg",
    blurb:
      "Five days through the dramatic Highlands — Glencoe, Loch Ness, Edinburgh and the Cairngorms — tailored to your group.",
    href: "/tours#multi-day-tours",
  },
  {
    title: "7-Day Scotland & Lake District",
    image: "/placeholders/lake-district.svg",
    blurb:
      "A week combining Highland drama with the tranquil lakes and fells of England’s Lake District.",
    href: "/tours#multi-day-tours",
  },
  {
    title: "10-Day UK Highlights",
    image: "/placeholders/uk-landmarks.svg",
    blurb:
      "The ultimate UK road trip — Scotland, the Lakes, Yorkshire, the Cotswolds and more, at your pace.",
    href: "/tours#multi-day-tours",
  },
  {
    title: "10-Day European Group Tour",
    image: "/placeholders/europe.svg",
    blurb:
      "Ten days across Europe by executive coach — airport transfers and cross‑Channel logistics handled for you.",
    href: "/tours#multi-day-tours",
  },
];

const services = [
  {
    title: "Multi‑Day UK & European Tours",
    icon: Map,
    desc: "Scotland & Lake District focused touring with calm, dependable logistics.",
    href: "/tours#multi-day-tours",
  },
  {
    title: "Airport Transfers for Groups",
    icon: PlaneTakeoff,
    desc: "Inbound pickup, hotel coordination and smooth schedules for tour organisers.",
    href: "/airport-transfers",
  },
  {
    title: "Golf Group Transport",
    icon: Trophy,
    desc: "Equipment‑friendly vehicles with luggage capacity and trailer capability.",
    href: "/golf-transport",
  },
  {
    title: "School & Educational Transport",
    icon: GraduationCap,
    desc: "Professional service with tender-ready documentation available on request.",
    href: "/schools",
  },
  {
    title: "Day Trips & Group Excursions",
    icon: CalendarDays,
    desc: "London, coastal days out and attraction travel — quote-based, private groups.",
    href: "/tours#day-tours",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-charcoal">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/placeholders/hero.svg"
            alt="Executive coach in countryside"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative">
          <Container className="py-16 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h1 className="font-serif text-4xl leading-tight text-ivory sm:text-5xl">
                  Executive Coach & Private Group Transport Across the Three Counties
                </h1>
                <p className="mt-5 max-w-xl text-base text-ivory/80">
                  Premium group transport for tours, airports, schools and golf — serving
                  Gloucestershire, Worcestershire & Herefordshire.
                </p>
                <p className="mt-4 text-sm text-ivory/70">
                  Euro 6 fleet • 16–51 seats • <span className="text-ivory">Group bookings only</span>
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/quote" variant="primary">
                    Request a Quote
                  </Button>
                  <Button href="/tours" variant="outline" className="border-white/25 text-ivory hover:bg-white/10">
                    Explore Tours
                  </Button>
                </div>
              </div>

              {/* Quick quote mini-form (stub) */}
              <div className="rounded-xl bg-ivory/95 p-6 shadow-soft ring-1 ring-white/10">
                <div className="font-serif text-xl text-charcoal">Quick Quote</div>
                <p className="mt-2 text-sm text-charcoal/70">
                  Share the basics — we’ll come back with the right vehicle and schedule.
                </p>
                <form className="mt-5 grid gap-3">
                  <select className="w-full rounded-md border border-charcoal/15 bg-white px-3 py-2 text-sm">
                    <option>Pickup area</option>
                    <option>Gloucestershire</option>
                    <option>Worcestershire</option>
                    <option>Herefordshire</option>
                    <option>Other</option>
                  </select>
                  <select className="w-full rounded-md border border-charcoal/15 bg-white px-3 py-2 text-sm">
                    <option>Journey type</option>
                    <option>Multi-day tour</option>
                    <option>Day trip</option>
                    <option>Airport transfer</option>
                    <option>School</option>
                    <option>Golf</option>
                    <option>Other</option>
                  </select>
                  <input
                    className="w-full rounded-md border border-charcoal/15 bg-white px-3 py-2 text-sm"
                    placeholder="Travel dates"
                  />
                  <Button href="/quote" variant="primary" className="w-full">
                    Get a Quote
                  </Button>
                  <p className="text-xs text-charcoal/60">
                    (Form will be connected to your enquiry workflow. For now this links to the full quote page.)
                  </p>
                </form>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-ivory">
        <Container className="py-16">
          <div className="text-center">
            <div className="font-serif text-3xl text-charcoal">Core Services</div>
            <p className="mt-3 text-sm text-slate">
              Premium transport, planned properly — designed for organisers and groups.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <a
                key={s.title}
                href={s.href}
                className="group rounded-xl bg-white p-6 shadow-soft ring-1 ring-charcoal/10 transition hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-secondary p-2 ring-1 ring-charcoal/10">
                    <s.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-serif text-lg text-charcoal group-hover:text-charcoal">
                      {s.title}
                    </div>
                    <p className="mt-2 text-sm text-slate">{s.desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* SIGNATURE TOURS */}
      <section className="bg-secondary">
        <Container className="py-16">
          <div className="text-center">
            <div className="font-serif text-3xl text-charcoal">Multi‑Day UK & European Group Travel</div>
            <p className="mt-3 text-sm text-slate">
              Sample itineraries (no pricing). Every tour is tailored to your group.
            </p>
          </div>
        </Container>
        <Carousel className="pb-16">
          {signatureTours.map((t) => (
            <a
              key={t.title}
              href={t.href}
              className="block overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-charcoal/10"
            >
              <div className="relative h-44">
                <Image
                  src={t.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="font-serif text-lg text-charcoal">{t.title}</div>
                <p className="mt-2 text-sm text-slate">{t.blurb}</p>
                <div className="mt-4 text-sm font-medium text-gold">View sample itinerary →</div>
              </div>
            </a>
          ))}
        </Carousel>
      </section>

      {/* FLEET SNAPSHOT */}
      <section className="bg-ivory">
        <Container className="py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="font-serif text-3xl text-charcoal">A Modern Executive Fleet</div>
              <p className="mt-3 text-sm text-slate">
                Right vehicle, right standard, right experience — from executive minibuses to full-size touring coaches.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-charcoal/80">
                {["16 seats", "22 seats", "25 seats", "35 seats", "51 seats", "Euro 6"].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-gold" /> {x}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-3">
                <Button href="/fleet" variant="outline">View Fleet</Button>
                <Button href="/quote" variant="primary">Request a Quote</Button>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-soft ring-1 ring-charcoal/10">
              <div className="grid grid-cols-5 gap-3">
                {["16", "22", "25", "35", "51"].map((n) => (
                  <div key={n} className="text-center">
                    <div className="mx-auto h-10 w-10 rounded-full bg-secondary ring-1 ring-charcoal/10" />
                    <div className="mt-2 text-xs text-slate">{n} seats</div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-slate">
                Fleet imagery will be upgraded (photoreal) once final assets are confirmed.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* LOCATIONS */}
      <section className="bg-secondary">
        <Container className="py-16">
          <div className="text-center">
            <div className="font-serif text-3xl text-charcoal">Locations Served</div>
            <p className="mt-3 text-sm text-slate">
              Primary pickup across the three counties — travel nationwide by request.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { name: "Gloucestershire", href: "/locations/gloucestershire" },
              { name: "Worcestershire", href: "/locations/worcestershire" },
              { name: "Herefordshire", href: "/locations/herefordshire" },
            ].map((c) => (
              <a
                key={c.name}
                href={c.href}
                className="rounded-xl bg-white p-6 text-center shadow-soft ring-1 ring-charcoal/10"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-secondary ring-1 ring-charcoal/10">
                  <Map className="h-5 w-5 text-gold" />
                </div>
                <div className="mt-3 font-serif text-lg text-charcoal">{c.name}</div>
                <div className="mt-2 text-sm text-slate">Coach & minibus hire for private groups</div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-charcoal">
        <Container className="py-16 text-center">
          <div className="font-serif text-3xl text-ivory">Planning Group Travel?</div>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-ivory/70">
            Tell us where you’re going — we’ll handle the transport.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button href="/quote" variant="primary">Request a Quote</Button>
            <Button href="/contact" variant="outline" className="border-white/25 text-ivory hover:bg-white/10">
              Call Us
            </Button>
          </div>
          <p className="mt-6 text-xs text-ivory/50">Phone number to be added.</p>
        </Container>
      </section>
    </>
  );
}
