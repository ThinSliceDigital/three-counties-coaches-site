import { Container } from "@/components/container";
import { Button } from "@/components/button";

export const metadata = {
  title: "Coach Hire Herefordshire",
  description:
    "Premium coach and minibus hire for private groups in Herefordshire. Euro 6 fleet (16–51 seats).",
};

export default function CountyPage() {
  return (
    <section className="bg-secondary">
      <Container className="py-16">
        <h1 className="font-serif text-4xl text-charcoal sm:text-5xl">Coach Hire Herefordshire</h1>
        <p className="mt-5 max-w-3xl text-base text-slate">
          Executive coach and minibus hire for private groups, tours, schools and events — with primary pickup across Herefordshire.
        </p>
        <div className="mt-8 flex gap-3">
          <Button href="/quote" variant="primary">Request a Quote</Button>
          <Button href="/tours" variant="outline">View Tours</Button>
        </div>
        <div className="mt-10 rounded-xl bg-white p-6 shadow-soft ring-1 ring-charcoal/10">
          <div className="font-serif text-xl text-charcoal">Popular requests</div>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate">
            <li>Airport transfers for groups</li>
            <li>Multi-day UK tours (Scotland & Lake District)</li>
            <li>School and educational transport</li>
            <li>Golf group transport</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
