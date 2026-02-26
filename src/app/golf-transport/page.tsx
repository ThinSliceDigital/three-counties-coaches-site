import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { Trophy, Briefcase, Route, Clock, MapPin } from "lucide-react";

export const metadata = {
  title: "Golf Group Transport",
  description:
    "Equipment-friendly golf group transport by executive minibus or coach — luggage capacity and trailer capability.",
};

export default function GolfTransportPage() {
  return (
    <>
      <Hero imageSrc="/images/unsplash/hero-coach-countryside.jpg">
        <div className="max-w-3xl">
          <h1 className="text-4xl text-ivory sm:text-5xl">Golf Group Transport</h1>
          <p className="mt-5 text-base text-ivory/75">
            Equipment-friendly coach and minibus hire for golf societies, tournaments and weekend trips — with luggage capacity and optional trailer support.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/quote" variant="primary">Get a Golf Transport Quote</Button>
            <Button href="#destinations" variant="outline" className="border-white/25 text-ivory hover:bg-white/10">Popular Destinations</Button>
          </div>
          <p className="mt-4 text-sm text-ivory/60">Group bookings only • 16–51 seats • Luggage & clubs</p>
        </div>
      </Hero>

      <section className="py-16 sm:py-20 bg-ivory">
        <Container>
          <SectionHeading
            eyebrow="Benefits"
            title="Why It Works for Golf"
            subtitle="Built for equipment, timings and door‑to‑door group coordination."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { icon: Briefcase, title: "Clubs & luggage", desc: "Space for bags, cases and extra kit." },
              { icon: Clock, title: "Flexible schedules", desc: "Early tee times and multi‑day stays." },
              { icon: Route, title: "Door-to-door", desc: "Pickup across the three counties." },
              { icon: Trophy, title: "Societies & events", desc: "Tournament-friendly group coordination." },
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

      <section id="destinations" className="py-16 sm:py-20 bg-secondary">
        <Container>
          <SectionHeading
            eyebrow="Destinations"
            title="Popular Golf Destinations"
            subtitle="A few common requests — anywhere by arrangement."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {["The Belfry", "Celtic Manor", "St Andrews", "Cotswolds courses"].map((a) => (
              <div key={a} className="rounded-xl bg-white p-6 text-center shadow-soft ring-1 ring-charcoal/10">
                <div className="font-serif text-lg text-charcoal">{a}</div>
                <p className="mt-2 text-sm text-slate">Equipment-friendly transport.</p>
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
          <h2 className="mt-2 text-3xl text-ivory sm:text-4xl">Book Your Golf Transport</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ivory/70">
            Share dates, pickup area and group size — we’ll confirm vehicle and timings.
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
