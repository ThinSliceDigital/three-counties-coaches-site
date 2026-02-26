import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { TourPageShell } from "@/components/tour-page-shell";
import { Itinerary, type DayStop } from "@/components/itinerary";

export const metadata = {
  title: "London Day Trip by Coach",
  description:
    "Private group coach transport for a full day in London — sightseeing, shopping, shows and more, at your group’s pace.",
};

const days: DayStop[] = [
  {
    day: "Example schedule",
    title: "London Day Tour",
    route: "Pickup → London → Return",
    highlights: [
      "Early pickup across Gloucestershire/Worcestershire/Herefordshire (or other areas by request)",
      "Drop-off planned close to your key attraction(s) where access allows",
      "Flexible time in London for sightseeing, shopping, museums, shows or dining",
      "Pre-agreed meeting point and return journey with comfort stops",
    ],
  },
];

export default function Page() {
  return (
    <TourPageShell
      heroImage="/images/unsplash/london-skyline.jpg"
      title="London Day Trip by Coach"
      subtitle="A full day in the capital with door‑to‑door coach travel — planned around your itinerary, timings and group preferences."
      intro="This is a sample structure for a private group day trip to London. We’ll tailor pickup time, drop-off point(s) and return schedule around your chosen attractions and the pace you want for the day."
      sliderImages={[
        "/images/unsplash/london-skyline.jpg",
        "/images/unsplash/uk-landmarks.jpg",
        "/images/unsplash/hero-coach-countryside.jpg",
      ]}
      highlights={[
        "Door-to-door private group transport",
        "Flexible pickup time and stop planning",
        "Organiser-friendly meeting points",
        "Option to add multiple attraction stops",
      ]}
    >
      <section className="py-16 sm:py-20 bg-secondary">
        <Container>
          <SectionHeading
            eyebrow="Sample itinerary"
            title="A Typical London Day (Example)"
            subtitle="We’ll adjust timings and locations once you confirm your attractions and preferred schedule."
            align="left"
          />
          <Itinerary days={days} />
        </Container>
      </section>
    </TourPageShell>
  );
}
