import Image from "next/image";
import { Container } from "@/components/container";
import { Button } from "@/components/button";

export const metadata = {
  title: "Our Fleet (16–51 seats)",
  description:
    "A modern Euro 6 fleet of executive minibuses and touring coaches, sized from 16 to 51 seats.",
};

const vehicles = [
  { seats: "16 seats", bestFor: "Executive small groups" },
  { seats: "22 seats", bestFor: "Day tours + airport" },
  { seats: "25 seats", bestFor: "Mid-size touring" },
  { seats: "35 seats", bestFor: "Schools + touring" },
  { seats: "51 seats", bestFor: "Large groups" },
];

export default function FleetPage() {
  return (
    <>
      <section className="bg-secondary">
        <Container className="py-16">
          <h1 className="font-serif text-4xl text-charcoal sm:text-5xl">Our Fleet</h1>
          <p className="mt-5 max-w-3xl text-base text-slate">
            Choose the right capacity for your trip — with a modern Euro 6 fleet and an executive finish.
          </p>
          <div className="mt-8 flex gap-3">
            <Button href="/quote" variant="primary">Request a Quote</Button>
            <Button href="/contact" variant="outline">Ask a Question</Button>
          </div>
        </Container>
      </section>

      <section className="bg-ivory">
        <Container className="py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v) => (
              <div key={v.seats} className="overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-charcoal/10">
                <div className="relative h-40 bg-secondary">
                  <Image src="/placeholders/hero.svg" alt="" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="font-serif text-xl text-charcoal">{v.seats}</div>
                  <p className="mt-2 text-sm text-slate">Best for: {v.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate">
            Note: fleet imagery will be upgraded once final assets are confirmed.
          </p>
        </Container>
      </section>
    </>
  );
}
