import Image from "next/image";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Trophy, Briefcase, Route, Clock } from "lucide-react";

export const metadata = {
  title: "Golf Group Transport",
  description:
    "Equipment-friendly golf group transport by executive minibus or coach — luggage capacity and trailer capability.",
};

export default function GolfTransportPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal">
        <div className="absolute inset-0 opacity-30">
          <Image src="/placeholders/hero.svg" alt="" fill className="object-cover" priority />
        </div>
        <Container className="relative py-16">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl text-ivory sm:text-5xl">Golf Group Transport</h1>
            <p className="mt-5 text-base text-ivory/75">
              Equipment-friendly coach and minibus hire for golf societies, tournaments and weekend trips — with luggage capacity and optional trailer support.
            </p>
            <div className="mt-8 flex gap-3">
              <Button href="/quote" variant="primary">Get a Golf Transport Quote</Button>
              <Button href="/tours" variant="outline" className="border-white/25 text-ivory hover:bg-white/10">Popular Destinations</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ivory">
        <Container className="py-16">
          <div className="text-center">
            <div className="font-serif text-3xl text-charcoal">Why It Works for Golf</div>
            <p className="mt-3 text-sm text-slate">Built for equipment and smooth timings.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { icon: Briefcase, title: "Clubs & luggage", desc: "Space for bags, cases and extra kit." },
              { icon: Clock, title: "Flexible schedules", desc: "Early tee times and multi-day stays." },
              { icon: Route, title: "Door-to-door", desc: "Pickup across the three counties." },
              { icon: Trophy, title: "Societies & events", desc: "Tournament-friendly group coordination." },
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
            <div className="font-serif text-3xl text-charcoal">Popular Golf Destinations</div>
            <p className="mt-3 text-sm text-slate">A few common requests — anywhere by arrangement.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {["The Belfry", "Celtic Manor", "St Andrews", "Cotswolds courses"].map((a) => (
              <div key={a} className="rounded-xl bg-white p-6 text-center shadow-soft ring-1 ring-charcoal/10">
                <div className="font-serif text-lg text-charcoal">{a}</div>
                <p className="mt-2 text-sm text-slate">Equipment-friendly transport.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-charcoal">
        <Container className="py-16 text-center">
          <div className="font-serif text-3xl text-ivory">Book Your Golf Transport</div>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-ivory/70">
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
