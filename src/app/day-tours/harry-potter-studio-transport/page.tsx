import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { TourPageShell } from "@/components/tour-page-shell";
import { Itinerary, type DayStop } from "@/components/itinerary";

export const metadata = {
  title: "Harry Potter Studio Tour Transport",
  description:
    "Comfortable return coach transport to Warner Bros. Studio Tour London for private groups — sit back and let us handle the driving.",
};

const days: DayStop[] = [
  {
    day: "Example schedule",
    title: "Studio Tour Day",
    route: "Pickup → Studio Tour → Return",
    highlights: [
      "Pickup across the Three Counties (or other areas by request)",
      "Arrival planned around your timed entry slot",
      "Return pickup coordinated to avoid waiting",
      "Comfort stops if needed based on drive-time",
    ],
  },
];

export default function Page() {
  return (
    <TourPageShell
      heroImage="/images/unsplash/harry-potter.jpg"
      title="Harry Potter Studio Tour Transport"
      subtitle="Comfortable return coach transport to Warner Bros. Studio Tour London — ideal for schools, clubs and private groups."
      intro="Timed entry slots and busy roads can make planning stressful. We’ll coordinate the transport schedule around your booking, build in sensible buffers, and agree clear collection points so your day runs smoothly."
      sliderImages={[
        "/images/unsplash/harry-potter.jpg",
        "/images/unsplash/london-skyline.jpg",
        "/images/unsplash/hero-coach-countryside.jpg",
      ]}
      highlights={[
        "Built around timed entry slots",
        "Organiser-friendly pickup/return coordination",
        "Comfortable vehicles for longer days out",
        "Ideal for schools and group organisers",
      ]}
    >
      <section className="py-16 sm:py-20 bg-secondary">
        <Container>
          <SectionHeading
            eyebrow="Sample itinerary"
            title="How the Day Typically Runs (Example)"
            subtitle="We’ll confirm exact timings once you share your entry slot and group size."
            align="left"
          />
          <Itinerary days={days} />
        </Container>
      </section>
    </TourPageShell>
  );
}
