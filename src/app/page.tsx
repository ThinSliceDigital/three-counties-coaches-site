import Image from "next/image";
import { Manrope } from "next/font/google";

import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Carousel } from "@/components/carousel";
import { HomeHero } from "@/components/home-hero";
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

// Lovable-curated homepage imagery (exact URLs)
const LOVABLE = {
  hero: "https://three-counties-coaches.lovable.app/assets/hero-countryside-DpN9tFLd.jpg",
  services: {
    airport: "https://three-counties-coaches.lovable.app/assets/airport-transfer-_cLvz1Ud.jpg",
    golf: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&h=400&fit=crop",
    schools: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
    corporate:
      "https://three-counties-coaches.lovable.app/assets/corporate-chauffeur-CCsw31Ju.jpg",
  },
  tours: {
    scotland: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    scotlandLakes:
      "https://images.unsplash.com/photo-1600337751733-12c9e0e47908?w=600&h=400&fit=crop",
    ukHighlights:
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=600&h=400&fit=crop",
    europe:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&h=400&fit=crop",
  },
  dayTours: {
    london:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
    harry:
      "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=600&h=400&fit=crop",
    seaside:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
  },
  fleet: {
    minibus16:
      "https://three-counties-coaches.lovable.app/assets/minibus-16-DTq5mV4k.png",
    midi22: "https://three-counties-coaches.lovable.app/assets/midi-22-0y0YUjvy.png",
    midi25: "https://three-counties-coaches.lovable.app/assets/midi-25-DLslKdpd.png",
    exec35:
      "https://three-counties-coaches.lovable.app/assets/executive-35-Djp9Qq4f.png",
    full51:
      "https://three-counties-coaches.lovable.app/assets/fullsize-51-BsJ-d5I1.png",
  },
};

const signatureTours = [
  {
    title: "5-Day Scotland Coach Tour",
    image: LOVABLE.tours.scotland,
    blurb:
      "Five days through the dramatic Highlands — Glencoe, Loch Ness, Edinburgh and the Cairngorms, with overnight stops tailored to your group.",
    href: "/tours/5-day-scotland",
  },
  {
    title: "7-Day Scotland & Lake District Tour",
    image: LOVABLE.tours.scotlandLakes,
    blurb:
      "A week-long journey combining the rugged beauty of the Scottish Highlands with the tranquil lakes and fells of England’s Lake District.",
    href: "/tours/7-day-scotland-lake-district",
  },
  {
    title: "10-Day UK Highlights Tour",
    image: LOVABLE.tours.ukHighlights,
    blurb:
      "The ultimate British road trip — Scotland, the Lake District, Yorkshire, the Cotswolds and more, at a pace that suits your group.",
    href: "/tours/10-day-uk-highlights",
  },
  {
    title: "10-Day European Group Tour",
    image: LOVABLE.tours.europe,
    blurb:
      "Ten days across Europe by executive coach — France, Switzerland and Italy, with airport transfers and cross-Channel logistics handled for you.",
    href: "/tours/10-day-european-group-tour",
  },
];

const services = [
  {
    title: "Airport Transfers for Groups",
    icon: PlaneTakeoff,
    image: LOVABLE.services.airport,
    desc: "Comfortable group transfers to Heathrow, Birmingham, Bristol and regional airports with flexible pickup coordination.",
    href: "/airport-transfers",
  },
  {
    title: "Golf Group Transport",
    icon: Trophy,
    image: LOVABLE.services.golf,
    desc: "Equipment-friendly transport with generous luggage capacity and trailer availability for golf societies and tournaments.",
    href: "/golf-transport",
  },
  {
    title: "School & Educational Contracts",
    icon: GraduationCap,
    image: LOVABLE.services.schools,
    desc: "Professional, contract-ready school transport solutions across the Three Counties, delivered with reliability and care.",
    href: "/schools",
  },
  {
    title: "Corporate & Chauffeur Services",
    icon: Briefcase,
    image: LOVABLE.services.corporate,
    desc: "Executive transport for corporate events, conferences and team travel — punctual, professional and discreet.",
    href: "/quote",
  },
  {
    title: "Multi‑Day UK & European Travel",
    icon: Map,
    image: LOVABLE.tours.scotland,
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
      <HomeHero heroImage={LOVABLE.hero} />

      {/* TRUST BAR */}
      <TrustBar />

      {/* SERVICES */}
      <section id="services" className="bg-ivory py-16 sm:py-20">
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
                className="overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-charcoal/10 transition hover:-translate-y-0.5"
              >
                <div className="relative h-40">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent" />
                </div>
                <div className="p-6">
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
      <section className="bg-secondary py-16 sm:py-20">
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
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 33vw"
                />
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
      <section className="bg-ivory py-16 sm:py-20">
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

            <div className="overflow-hidden rounded-xl bg-white p-6 shadow-soft ring-1 ring-charcoal/10">
              <div className="grid grid-cols-5 gap-3">
                {[
                  { label: "16-seat Minibus", img: LOVABLE.fleet.minibus16, seats: "16" },
                  { label: "22-seat Midi Coach", img: LOVABLE.fleet.midi22, seats: "22" },
                  { label: "25-seat Midi Coach", img: LOVABLE.fleet.midi25, seats: "25" },
                  { label: "35-seat Executive Coach", img: LOVABLE.fleet.exec35, seats: "35" },
                  { label: "51-seat Full-Size Coach", img: LOVABLE.fleet.full51, seats: "51" },
                ].map((v) => (
                  <div key={v.seats} className="text-center">
                    <div className="relative mx-auto h-10 w-10">
                      <Image
                        src={v.img}
                        alt={v.label}
                        fill
                        className="object-contain"
                        sizes="40px"
                      />
                    </div>
                    <div className="mt-2 text-xs text-slate">{v.seats} seats</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE + TESTIMONIALS */}
      <section className="bg-secondary py-16 sm:py-20">
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
      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <HomeSectionHeading
            eyebrow="Areas"
            title="Locations Served"
            subtitle="Based near the borders of Gloucestershire, Worcestershire and Herefordshire, we provide reliable group transport across the region and nationwide."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Coach Hire Gloucestershire",
                href: "/locations/gloucestershire",
                desc: "Private group transport across Gloucestershire",
              },
              {
                name: "Coach Hire Worcestershire",
                href: "/locations/worcestershire",
                desc: "Private group transport across Worcestershire",
              },
              {
                name: "Coach Hire Herefordshire",
                href: "/locations/herefordshire",
                desc: "Private group transport across Herefordshire",
              },
            ].map((c) => (
              <a
                key={c.name}
                href={c.href}
                className="rounded-xl bg-white p-6 shadow-soft ring-1 ring-charcoal/10 transition hover:-translate-y-0.5"
              >
                <div className="text-base font-semibold tracking-tight text-charcoal">
                  {c.name}
                </div>
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
