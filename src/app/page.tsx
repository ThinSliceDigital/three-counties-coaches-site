import Image from "next/image";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Carousel } from "@/components/carousel";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { Differentiators } from "@/components/differentiators";
import { TestimonialsStrip } from "@/components/testimonials";
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
    desc: "DBS-compliant service (where required) with tender-ready documentation available.",
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
      <Hero imageSrc="/placeholders/hero.svg">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl leading-tight text-ivory sm:text-5xl">
              Executive Coach & Private Group Transport Across the Three Counties
            </h1>
            <p className="mt-5 max-w-xl text-base text-ivory/80">
              Premium group transport for tours, airports, schools and golf — serving
              Gloucestershire, Worcestershire & Herefordshire.
            </p>
            <p className="mt-4 text-sm text-ivory/70">
              Euro 6 fleet • 16–51 seats •{" "}
              <span className="text-ivory">Group bookings only</span>
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/quote" variant="primary">
                Request a Quote
              </Button>
              <Button
                href="/tours"
                variant="outline"
                className="border-white/25 text-ivory hover:bg-white/10"
              >
                Explore Tours
              </Button>
            </div>
          </div>

          {/* Quick quote mini-form (stub) */}
          <div className="rounded-xl bg-white shadow-soft ring-1 ring-charcoal/10 bg-ivory/95 p-6">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
              Quick Quote
            </div>
            <div className="mt-2 font-serif text-xl text-charcoal">
              Tell us the essentials
            </div>
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
                (Preview stub — will connect to your enquiry workflow.)
              </p>
            </form>
          </div>
        </div>
      </Hero>

      {/* SERVICES */}
      <section id="services" className="py-16 sm:py-20 bg-ivory">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Core Services"
            subtitle="Premium transport, planned properly — designed for organisers and private groups."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <a
                key={s.title}
                href={s.href}
                className="rounded-xl bg-white shadow-soft ring-1 ring-charcoal/10 group p-6 transition hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-secondary p-2 ring-1 ring-charcoal/10">
                    <s.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-lg text-charcoal">{s.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{s.desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* SIGNATURE TOURS */}
      <section className="py-16 sm:py-20 bg-secondary">
        <Container>
          <SectionHeading
            eyebrow="Tours"
            title="Multi‑Day UK & European Group Travel"
            subtitle="Sample itineraries (no pricing). All routes, timings and accommodation are tailored to your group."
          />
        </Container>

        <Carousel className="mt-12 pb-2">
          {signatureTours.map((t) => (
            <a key={t.title} href={t.href} className="rounded-xl bg-white shadow-soft ring-1 ring-charcoal/10 block overflow-hidden">
              <div className="relative h-44">
                <Image src={t.image} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="text-lg text-charcoal">{t.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate">{t.blurb}</p>
                <div className="mt-4 text-sm font-medium text-gold">View sample itinerary →</div>
              </div>
            </a>
          ))}
        </Carousel>

        <Container className="pt-6">
          <p className="text-center text-xs text-slate">
            All itineraries are examples — every tour is tailored to your group.
          </p>
        </Container>
      </section>

      {/* FLEET SNAPSHOT */}
      <section className="py-16 sm:py-20 bg-ivory">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                Fleet
              </div>
              <h2 className="mt-2 text-3xl text-charcoal sm:text-4xl">A Modern Executive Fleet</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                Right vehicle, right standard, right experience — from executive minibuses to full-size touring coaches.
              </p>
              <ul className="mt-7 grid grid-cols-2 gap-3 text-sm text-charcoal/80">
                {["16–51 seats", "Euro 6 fleet", "Executive finish", "Group-only bookings", "UK-wide travel", "Tour-ready logistics"].map(
                  (x) => (
                    <li key={x} className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-gold" /> {x}
                    </li>
                  ),
                )}
              </ul>
              <div className="mt-8 flex gap-3">
                <Button href="/fleet" variant="outline">
                  View Fleet
                </Button>
                <Button href="/quote" variant="primary">
                  Request a Quote
                </Button>
              </div>
            </div>

            <div className="rounded-xl bg-white shadow-soft ring-1 ring-charcoal/10 overflow-hidden">
              <div className="relative h-52 bg-secondary">
                <Image src="/placeholders/hero.svg" alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="grid grid-cols-5 gap-3">
                  {["16", "22", "25", "35", "51"].map((n) => (
                    <div key={n} className="text-center">
                      <div className="mx-auto h-10 w-10 rounded-full bg-secondary ring-1 ring-charcoal/10" />
                      <div className="mt-2 text-xs text-slate">{n} seats</div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs text-slate">
                  Fleet imagery will be upgraded once final assets are confirmed.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TRUST */}
      <section className="py-16 sm:py-20 bg-secondary">
        <Container>
          <SectionHeading
            eyebrow="Why us"
            title="Quietly Premium. Logistically Solid. Built for Organisers."
            subtitle="We don’t compete on fleet size — we compete on planning, presentation and reliability."
          />
          <Differentiators />
          <TestimonialsStrip />
        </Container>
      </section>

      {/* LOCATIONS */}
      <section className="py-16 sm:py-20 bg-ivory">
        <Container>
          <SectionHeading
            eyebrow="Locations"
            title="Primary Pickup Across the Three Counties"
            subtitle="Gloucestershire, Worcestershire & Herefordshire — with UK-wide travel by request."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: "Gloucestershire", href: "/locations/gloucestershire" },
              { name: "Worcestershire", href: "/locations/worcestershire" },
              { name: "Herefordshire", href: "/locations/herefordshire" },
            ].map((c) => (
              <a key={c.name} href={c.href} className="rounded-xl bg-white shadow-soft ring-1 ring-charcoal/10 p-6 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-secondary ring-1 ring-charcoal/10">
                  <Map className="h-5 w-5 text-gold" />
                </div>
                <div className="mt-4 text-lg text-charcoal">{c.name}</div>
                <div className="mt-2 text-sm text-slate">Coach & minibus hire for private groups</div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <Container className="text-center">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
            Enquiries
          </div>
          <h2 className="mt-2 text-3xl text-ivory sm:text-4xl">Plan Your Group Journey</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ivory/70">
            Tell us where you’re going — we’ll handle the transport.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button href="/quote" variant="primary">
              Request a Quote
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-white/25 text-ivory hover:bg-white/10"
            >
              Call Us
            </Button>
          </div>
          <p className="mt-6 text-xs text-ivory/50">Phone number to be added.</p>
        </Container>
      </section>
    </>
  );
}
