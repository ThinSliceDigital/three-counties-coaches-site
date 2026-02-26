import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { ShieldCheck, FileText, Users } from "lucide-react";

export const metadata = {
  title: "School & Educational Transport",
  description:
    "School and educational group transport across Gloucestershire, Worcestershire & Herefordshire. Tender-ready documentation available on request.",
};

export default function SchoolsPage() {
  return (
    <>
      <section className="bg-secondary">
        <Container className="py-16">
          <h1 className="font-serif text-4xl text-charcoal sm:text-5xl">School & Educational Transport</h1>
          <p className="mt-5 max-w-3xl text-base text-slate">
            Professional coach and minibus hire for schools, colleges and education providers — supporting trips, fixtures and contract work.
          </p>
          <div className="mt-8 flex gap-3">
            <Button href="/quote" variant="primary">School Enquiries</Button>
            <Button href="/contact" variant="outline">Contact</Button>
          </div>
        </Container>
      </section>

      <section className="bg-ivory">
        <Container className="py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Safety-first operations",
                desc: "We prioritise clear planning, dependable vehicles and calm supervision for groups.",
              },
              {
                icon: Users,
                title: "DBS-compliant drivers",
                desc: "DBS-compliant drivers available where required (confirm requirements during enquiry).",
              },
              {
                icon: FileText,
                title: "Tender-ready documentation",
                desc: "Documentation can be provided for tenders on request.",
              },
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

      <section className="bg-charcoal">
        <Container className="py-16 text-center">
          <div className="font-serif text-3xl text-ivory">Request School Transport</div>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-ivory/70">
            Share dates, pickup area and passenger numbers — we’ll confirm vehicle and quote.
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
