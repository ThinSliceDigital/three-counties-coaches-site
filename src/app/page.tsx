import Image from "next/image";
import { Manrope } from "next/font/google";

import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Carousel } from "@/components/carousel";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { CTASection } from "@/components/cta-section";
import { Differentiators } from "@/components/differentiators";
import { TestimonialsStrip } from "@/components/testimonials";
import {
  PlaneTakeoff,
  GraduationCap,
  Map,
  Trophy,
  Briefcase,
  ShieldCheck,
  Phone,
} from "lucide-react";

const headings = Manrope({
  subsets: ["latin"],
  variable: "--font-headings",
  display: "swap",
});

export const metadata = {
  title: "Executive Coach & Private Group Transport Across the Three Counties",
  description:
    "Three Counties Coaches provides premium private coach and minibus hire across Gloucestershire, Worcestershire and Herefordshire. Tours, airport transfers, golf transport and school contracts with a modern Euro 6 fleet.",
};

const signatureTours = [
  {
    title: "5-Day Scotland Coach Tour",
    image: "/images/unsplash/scotland-highlands.jpg",
    blurb:
      "Five days through the dramatic Highlands — Glencoe, Loch Ness, Edinburgh and the Cairngorms, with overnight stops tailored to your group.",
    href: "/tours/5-day-scotland",
  },
  {
    title: "7-Day Scotland & Lake District Tour",
    image: "/images/unsplash/lake-district.jpg",
    blurb:
      "A week-long journey combining the rugged beauty of the Scottish Highlands with the tranquil lakes and fells of England’s Lake District.",
    href: "/tours/7-day-scotland-lake-district",
  },
  {
    title: "10-Day UK Highlights Tour",
    image: "/images/unsplash/uk-landmarks.jpg",
    blurb:
      "The ultimate British road trip — Scotland, the Lake District, Yorkshire, the Cotswolds and more, at a pace that suits your group.",
    href: "/tours/10-day-uk-highlights",
  },
  {
    title: "10-Day European Group Tour",
    image: "/images/unsplash/paris-europe.jpg",
    blurb:
      "Ten days across Europe by executive coach — France, Switzerland and Italy, with airport transfers and cross-Channel logistics handled for you.",
    href: "/tours/10-day-european-group-tour",
  },
];

const services = [
  {
    title: "Airport Transfers for Groups",
    icon: PlaneTakeoff,
    desc: "Comfortable group transfers to Heathrow, Birmingham, Bristol and regional airports with flexible pickup coordination.",
    href: "/airport-transfers",
  },
  {
    title: "Golf Group Transport",
    icon: Trophy,
    desc: "Equipment-friendly transport with generous luggage capacity and trailer availability for golf societies and tournaments.",
    href: "/golf-transport",
  },
  {
    title: "School & Educational Contracts",
    icon: GraduationCap,
    desc: "Professional, contract-ready school transport solutions across the Three Counties, delivered with reliability and care.",
    href: "/schools",
  },
  {
    title: "Corporate & Chauffeur Services",
    icon: Briefcase,
    desc: "Executive transport for corporate events, conferences and team travel — punctual, professional and discreet.",
    href: "/quote",
  },
  {
    title: "Multi‑Day UK & European Travel",
    icon: Map,
    desc: "Private group touring with itinerary coordination — Scotland & Lake District focus.",
    href: "/tours",
  },
];

function HomeSectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <div className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
        {eyebrow}
      </div>
      <h2 className="mt-2 font-[var(--font-headings)] text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate">
          {subtitle}
        </p>
      ) : null}
      <div className="mt-6 flex justify-center">
        <div className="h-px w-24 bg-gold/80" />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className={headings.variable}>
      {/* HERO */}
      <Hero imageSrc="/images/unsplash/hero-coach-countryside.jpg">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
              Multi‑Day UK & European Travel · Airport Transfers · School & Corporate Hire
            </div>
            <h1 className="mt-3 font-[var(--font-headings)] text-4xl font-semibold tracking-tight text-ivory sm:text-5xl">
              Executive Coach & Private Group Transport Across the Three Counties
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/80">
              Three Counties Coaches provides premium private coach and minibus hire across
              Gloucestershire, Worcestershire and Herefordshire. From multi-day UK and
              European group travel to executive airport transfers, golf transport and
              school contracts, we deliver dependable, professional group transport with a
              modern Euro 6 fleet. Our team can assist group organisers in coordinating
              bespoke itineraries tailored to your schedule and travel objectives.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href="/quote" variant="primary">
                Request a Quote
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="border-white/25 text-ivory hover:bg-white/10"
              >
                Contact
              </Button>
              <div className="flex items-center gap-2 text-sm text-ivory/70">
                <Phone className="h-4 w-4 text-gold" />
                <span>Call CTA (add number)</span>
              </div>
            </div>

            <p className="mt-5 text-sm text-ivory/70">
              Euro 6 compliant fleet • Executive black & white coaches •{" "}
              <span className="text-ivory">Group-only private hire</span> • UK & European travel
            </p>
          </div>

          {/* Quick quote mini-form (stub, but premium) */}
          <div className="rounded-xl bg-ivory/95 p-6 shadow-soft ring-1 ring-white/10">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
              Quick Quote
            </div>
            <div className="mt-2 font-[var(--font-headings)] text-xl font-semibold tracking-tight text-charcoal">
              Tell us the essentials
            </div>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
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

      {/* TRUST BAR */}
      <TrustBar />

      {/* SERVICES */}
      <section id="services" className="py-16 sm:py-20 bg-ivory">
        <Container>
          <HomeSectionHeading
            eyebrow="Services"
            title="Core Services"
            subtitle="Specialist group transport tailored to your requirements."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <a
                key={s.title}
                href={s.href}
                className="rounded-xl bg-white p-6 shadow-soft ring-1 ring-charcoal/10 transition hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-secondary p-2 ring-1 ring-charcoal/10">
                    <s.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-base font-semibold tracking-tight text-charcoal">
                      {s.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{s.desc}</p>
                    <div className="mt-3 text-sm font-medium text-gold">Learn more →</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* MID-PAGE CTA */}
      <CTASection
        variant="light"
        eyebrow="Quote"
        title="Planning Group Travel?"
        copy="Tell us your group size, itinerary and dates — we’ll provide a clear, professional quotation."
        primaryLabel="Request a Quote"
        secondaryLabel="Contact"
      />

      {/* SIGNATURE TOURS */}
      <section className="py-16 sm:py-20 bg-secondary">
        <Container>
          <HomeSectionHeading
            eyebrow="Tours"
            title="Multi‑Day UK & European Group Travel"
            subtitle="Example multi-day itineraries for private groups travelling by executive coach. Each journey can be tailored to your schedule, accommodation preferences and sightseeing priorities."
          />
        </Container>

        <Carousel className="mt-12 pb-2">
          {signatureTours.map((t) => (
            <a
              key={t.title}
              href={t.href}
              className="block overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-charcoal/10"
            >
              <div className="relative h-44">
                <Image src={t.image} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="text-base font-semibold tracking-tight text-charcoal">
                  {t.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate">{t.blurb}</p>
                <div className="mt-4 text-sm font-medium text-gold">View itinerary →</div>
              </div>
            </a>
          ))}
        </Carousel>

        <Container className="pt-6">
          <p className="text-center text-xs text-slate">
            We provide private group transport and assist with itinerary coordination — not packaged holidays.
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
              <h2 className="mt-2 font-[var(--font-headings)] text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
                A Modern Executive Fleet
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                Our fleet includes 16 to 51 seat vehicles, designed for comfort, reliability and professional group travel.
              </p>
              <ul className="mt-7 grid grid-cols-2 gap-3 text-sm text-charcoal/80">
                {[
                  "16–51 seat options",
                  "Euro 6 compliant",
                  "Executive finish",
                  "UK & European travel",
                ].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-gold" /> {x}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-3">
                <Button href="/fleet" variant="outline">
                  View Our Fleet
                </Button>
                <Button href="/quote" variant="primary">
                  Request a Quote
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-charcoal/10">
              <div className="relative h-56 bg-secondary">
                <Image
                  src="/images/unsplash/hero-coach-countryside.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
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
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE + TESTIMONIALS */}
      <section className="py-16 sm:py-20 bg-secondary">
        <Container>
          <HomeSectionHeading
            eyebrow="Why choose"
            title="Why Choose Three Counties Coaches"
            subtitle="Professional, reliable and premium — here's what sets us apart."
          />
          <Differentiators />
          <div className="mt-16">
            <HomeSectionHeading eyebrow="Testimonials" title="What Our Clients Say" />
            <TestimonialsStrip />
          </div>
        </Container>
      </section>

      {/* LOCATIONS */}
      <section className="py-16 sm:py-20 bg-ivory">
        <Container>
          <HomeSectionHeading
            eyebrow="Areas"
            title="Locations Served"
            subtitle="Based near the borders of Gloucestershire, Worcestershire and Herefordshire, we provide reliable group transport across the region and nationwide."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: "Coach Hire Gloucestershire", href: "/locations/gloucestershire", desc: "Private group transport across Gloucestershire" },
              { name: "Coach Hire Worcestershire", href: "/locations/worcestershire", desc: "Private group transport across Worcestershire" },
              { name: "Coach Hire Herefordshire", href: "/locations/herefordshire", desc: "Private group transport across Herefordshire" },
            ].map((c) => (
              <a key={c.name} href={c.href} className="rounded-xl bg-white p-6 shadow-soft ring-1 ring-charcoal/10 transition hover:-translate-y-0.5">
                <div className="text-base font-semibold tracking-tight text-charcoal">{c.name}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate">{c.desc}</div>
                <div className="mt-3 text-sm font-medium text-gold">Explore →</div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* BOTTOM CTA */}
      <CTASection
        variant="dark"
        title="Plan Your Group Journey"
        copy="Tell us your group size, itinerary and dates — we’ll provide a clear, professional quotation."
        primaryLabel="Request a Quote"
        secondaryLabel="Contact"
      />
    </div>
  );
}
