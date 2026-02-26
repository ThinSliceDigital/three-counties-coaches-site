import { Container } from "@/components/container";

export const metadata = {
  title: "Request a Quote",
  description:
    "Request a quote for coach or minibus hire. Group bookings only. Serving Gloucestershire, Worcestershire & Herefordshire.",
};

export default function QuotePage() {
  return (
    <section className="bg-ivory">
      <Container className="py-16">
        <h1 className="font-serif text-4xl text-charcoal sm:text-5xl">Request a Quote</h1>
        <p className="mt-5 max-w-3xl text-base text-slate">
          This form is currently a stub for preview. Next step is wiring submissions into your n8n workflow.
        </p>

        <div className="mt-10 rounded-xl bg-white p-6 shadow-soft ring-1 ring-charcoal/10">
          <form className="grid gap-4 md:grid-cols-2">
            <input className="rounded-md border border-charcoal/15 px-3 py-2 text-sm" placeholder="Name" />
            <input className="rounded-md border border-charcoal/15 px-3 py-2 text-sm" placeholder="Email" />
            <input className="rounded-md border border-charcoal/15 px-3 py-2 text-sm" placeholder="Phone" />
            <select className="rounded-md border border-charcoal/15 px-3 py-2 text-sm">
              <option>Journey type</option>
              <option>Multi-day tour</option>
              <option>Day trip</option>
              <option>Airport transfer</option>
              <option>School</option>
              <option>Golf</option>
              <option>Other</option>
            </select>
            <input className="rounded-md border border-charcoal/15 px-3 py-2 text-sm md:col-span-2" placeholder="Pickup area" />
            <textarea className="rounded-md border border-charcoal/15 px-3 py-2 text-sm md:col-span-2" rows={6} placeholder="Tell us about your trip (dates, group size, destinations, timings)" />
            <button
              type="button"
              className="rounded-md bg-gold px-4 py-2 text-sm font-medium text-charcoal md:col-span-2"
            >
              Submit (stub)
            </button>
          </form>
          <p className="mt-3 text-xs text-slate">
            Group bookings only. No per-seat tickets.
          </p>
        </div>
      </Container>
    </section>
  );
}
