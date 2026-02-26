import { Container } from "@/components/container";

export const metadata = {
  title: "Contact",
  description:
    "Contact Three Counties Coaches for quotes and enquiries.",
};

export default function ContactPage() {
  return (
    <section className="bg-secondary">
      <Container className="py-16">
        <h1 className="font-serif text-4xl text-charcoal sm:text-5xl">Contact</h1>
        <p className="mt-5 max-w-3xl text-base text-slate">
          Phone and email will be added. For now, use the quote form and we’ll respond promptly.
        </p>
        <div className="mt-10 rounded-xl bg-white p-6 shadow-soft ring-1 ring-charcoal/10">
          <p className="text-sm text-slate"><strong>Phone:</strong> (to be added)</p>
          <p className="mt-2 text-sm text-slate"><strong>Email:</strong> (to be added)</p>
          <p className="mt-2 text-sm text-slate"><strong>Primary pickup:</strong> Gloucestershire • Worcestershire • Herefordshire</p>
        </div>
      </Container>
    </section>
  );
}
