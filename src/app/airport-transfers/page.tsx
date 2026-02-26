import Image from "next/image";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Briefcase, Clock, ShieldCheck, PlaneTakeoff } from "lucide-react";

export const metadata = {
  title: "Airport Transfers for Groups",
  description:
    "Executive group airport transfers by coach or minibus — serving Gloucestershire, Worcestershire & Herefordshire with UK-wide travel by request.",
};

export default function AirportTransfersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal">
        <div className="absolute inset-0 opacity-30">
          <Image src="/placeholders/hero.svg" alt="" fill className="object-cover" priority />
        </div>
        <Container className="relative py-16">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl text-ivory sm:text-5xl">Airport Transfers for Groups</h1>
            <p className="mt-5 text-base text-ivory/75">
              Comfortable, reliable group transport to and from major UK airports — designed for organisers, tour coordinators and schools.
            </p>
            <div className="mt-8 flex gap-3">
              <Button href="/quote" variant="primary">Get a Transfer Quote</Button>
              <Button href="/tours" variant="outline" className="border-white/25 text-ivory hover:bg-white/10">Explore Tours</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ivory">
        <Container className="py-16">
          <div className="text-center">
            <div className="font-serif text-3xl text-charcoal">Why Groups Choose Coach Transfers</div>
            <p className="mt-3 text-sm text-slate">Simple, organised and built around your itinerary.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { icon: Clock, title: "On-time planning", desc: "Schedules built around flight times and check-in windows." },
              { icon: Briefcase, title: "Luggage-friendly", desc: "Space for cases, clubs and equipment." },
              { icon: ShieldCheck, title: "Professional service", desc: "Dependable drivers and calm logistics." },
              { icon: PlaneTakeoff, title: "Inbound-ready", desc: "Airport pickup → hotel → touring support." },
            ].map((x) => (
              <div key={x.title} className="rounded-xl bg-white p-6 shadow-soft ring-1 ring-charcoal/10">
                <x.icon className="h-6 w-6 text-gold" />
                <div className="mt-3 font-serif text-lg text-charcoal">{x.title}</div>
                <p className="mt-2 text-sm text-slate">{x.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary">
        <Container className="py-16">
          <div className="text-center">
            <div className="font-serif text-3xl text-charcoal">Airports We Cover</div>
            <p className="mt-3 text-sm text-slate">Common routes for group travel. Others by request.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {["Heathrow", "Birmingham", "Bristol", "Gatwick"].map((a) => (
              <div key={a} className="rounded-xl bg-white p-6 text-center shadow-soft ring-1 ring-charcoal/10">
                <div className="font-serif text-lg text-charcoal">{a}</div>
                <p className="mt-2 text-sm text-slate">Group pickup and drop-off.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-charcoal">
        <Container className="py-16 text-center">
          <div className="font-serif text-3xl text-ivory">Book Your Group Transfer</div>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-ivory/70">
            Share your flight details and group size — we’ll confirm vehicle, timings and pricing.
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
