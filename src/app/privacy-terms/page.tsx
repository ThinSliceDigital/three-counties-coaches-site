import { Container } from "@/components/container";

export const metadata = {
  title: "Privacy & Terms",
  description: "Privacy policy and terms (placeholder).",
};

export default function PrivacyTermsPage() {
  return (
    <section className="bg-ivory">
      <Container className="py-16">
        <h1 className="font-serif text-4xl text-charcoal sm:text-5xl">Privacy & Terms</h1>
        <div className="mt-8 rounded-xl bg-white p-6 shadow-soft ring-1 ring-charcoal/10">
          <p className="text-sm text-slate">
            Placeholder legal page for preview. Replace with final privacy policy and terms.
          </p>
        </div>
      </Container>
    </section>
  );
}
