import { Container } from "@/components/container";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about group coach hire.",
};

const faqs = [
  {
    q: "Do you sell individual tickets?",
    a: "No — we provide transport for private groups and organisers on a quote basis.",
  },
  { q: "What size vehicles do you have?", a: "16–51 seats (Euro 6 fleet)." },
  {
    q: "Where do you operate?",
    a: "Primary pickup across Gloucestershire, Worcestershire & Herefordshire. UK-wide travel by request.",
  },
];

export default function FAQPage() {
  return (
    <section className="bg-secondary">
      <Container className="py-16">
        <h1 className="font-serif text-4xl text-charcoal sm:text-5xl">FAQ</h1>
        <div className="mt-10 grid gap-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl bg-white p-6 shadow-soft ring-1 ring-charcoal/10">
              <div className="font-serif text-lg text-charcoal">{f.q}</div>
              <p className="mt-2 text-sm text-slate">{f.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
