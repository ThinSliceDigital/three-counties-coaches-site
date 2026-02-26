import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { Briefcase, Clock, ShieldCheck, PlaneTakeoff, MapPin } from "lucide-react";

export const metadata = {
  title: "Airport Transfers for Groups",
  description:
    "Executive group airport transfers by coach or minibus — serving Gloucestershire, Worcestershire & Herefordshire with UK-wide travel by request.",
};

export default function AirportTransfersPage() {
  return (
    <>
      <Hero imageSrc="/placeholders/hero.svg">
        <div className="max-w-3xl">
          <h1 className="text-4xl text-ivory sm:text-5xl">Airport Transfers for Groups</h1>
          <p className="mt-5 text-base text-ivory/75">
            Comfortable, reliable group transport to and from major UK airports — designed for organisers, tour coordinators and schools.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/quote" variant="primary">Get a Transfer Quote</Button>
            <Button href="/tours" variant="outline" className="border-white/25 text-ivory hover:bg-white/10">Explore Tours</Button>
          </div>
          <p className="mt-4 text-sm text-ivory/60">Group bookings only • 16–51 seats • Euro 6 fleet</p>
        </div>
      </Hero>

      <section className="py-16 sm:py-20 bg-ivory">
        <Container>
          <SectionHeading
            eyebrow="Benefits"
            title="Why Groups Choose Coach Transfers"
            subtitle="Simple, organised and built around your itinerary — from inbound arrivals to full touring schedules."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { icon: Clock, title: "On-time planning", desc: "Schedules built around flight times and check‑in windows." },
              { icon: Briefcase, title: "Luggage-friendly", desc: "Space for cases, clubs and equipment." },
              { icon: ShieldCheck, title: "Professional service", desc: "Dependable drivers and calm logistics." },
              { icon: PlaneTakeoff, title: "Inbound-ready", desc: "Airport pickup → hotel → touring support." },
            ].map((x) => (
              <div key={x.title} className="rounded-xl bg-white p-6 shadow-soft ring-1 ring-charcoal/10">
                <x.icon className="h-6 w-6 text-gold" />
                <div className="mt-3 font-serif text-lg text-charcoal">{x.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate">{x.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-secondary">
        <Container>
          <SectionHeading
            eyebrow="Coverage"
            title="Airports We Cover"
            subtitle="Common routes for group travel. Others by request."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {["Heathrow", "Birmingham", "Bristol", "Gatwick"].map((a) => (
              <div key={a} className="rounded-xl bg-white p-6 text-center shadow-soft ring-1 ring-charcoal/10">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-secondary ring-1 ring-charcoal/10">
                  <PlaneTakeoff className="h-5 w-5 text-gold" />
                </div>
                <div className="mt-4 font-serif text-lg text-charcoal">{a}</div>
                <p className="mt-2 text-sm text-slate">Group pickup and drop‑off.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-ivory">
        <Container>
          <SectionHeading
            eyebrow="Pickup"
            title="Primary Pickup Areas"
            subtitle="Primary pickup across the three counties — UK‑wide by request."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["Gloucestershire", "Worcestershire", "Herefordshire"].map((c) => (
              <div key={c} className="rounded-xl bg-white p-6 text-center shadow-soft ring-1 ring-charcoal/10">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-secondary ring-1 ring-charcoal/10">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div className="mt-4 font-serif text-lg text-charcoal">{c}</div>
                <p className="mt-2 text-sm text-slate">Group pickup by arrangement</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-charcoal">
        <Container className="text-center">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-gold">Enquiries</div>
          <h2 className="mt-2 text-3xl text-ivory sm:text-4xl">Book Your Group Transfer</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ivory/70">
            Share flight details and group size — we’ll confirm vehicle, timings and quote.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button href="/quote" variant="primary">Request a Quote</Button>
            <Button href="/contact" variant="outline" className="border-white/25 text-ivory hover:bg-white/10">Call Us</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
