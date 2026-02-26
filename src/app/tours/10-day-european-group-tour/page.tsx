import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { TourPageShell } from "@/components/tour-page-shell";
import { Itinerary, type DayStop } from "@/components/itinerary";

export const metadata = {
  title: "10-Day European Group Tour",
  description:
    "Ten days across Europe by executive coach — France, Switzerland and Italy, with cross‑Channel logistics and airport transfers handled for your group.",
};

const days: DayStop[] = [
  {
    day: "Days 1–2",
    title: "UK Departure + Northern France",
    route: "Pickup → Channel crossing → France",
    highlights: [
      "Cross‑Channel logistics planned around your schedule",
      "Comfort breaks and meeting points coordinated",
      "Evening arrival and hotel transfer",
    ],
    overnight: "France (region varies)",
  },
  {
    day: "Days 3–4",
    title: "Switzerland Scenic Touring",
    route: "France → Switzerland",
    highlights: [
      "Alpine routes selected for comfort and reliability",
      "Stops planned around weather and group preferences",
      "Optional rail/boat excursions by arrangement",
    ],
    overnight: "Switzerland",
  },
  {
    day: "Days 5–7",
    title: "Northern Italy",
    route: "Switzerland → Italy",
    highlights: [
      "City/heritage or lakes-focused options",
      "Coach access/parking planned in advance",
      "Hotel transfers and daily timings coordinated",
    ],
    overnight: "Italy",
  },
  {
    day: "Days 8–9",
    title: "Return via France",
    route: "Italy → France",
    highlights: [
      "Comfortable return routing with breaks",
      "Optional stopover based on itinerary priorities",
      "Final hotel and evening logistics handled",
    ],
    overnight: "France (region varies)",
  },
  {
    day: "Day 10",
    title: "Channel Crossing + Drop-offs",
    route: "France → UK → Drop-offs",
    highlights: [
      "Cross‑Channel timing and contingency planning",
      "Clear ETAs for organisers",
      "Final drop-offs across the Three Counties (or onward UK travel)",
    ],
  },
];

export default function Page() {
  return (
    <TourPageShell
      heroImage="/images/unsplash/paris-europe.jpg"
      title="10-Day European Group Tour"
      subtitle="Ten days across Europe by executive coach — France, Switzerland and Italy, with airport transfers and cross‑Channel logistics handled for you."
      intro="European touring is logistics-heavy — this sample structure shows how we plan drive-times, hotel transfers and crossing schedules for smooth group travel. Exact destinations and pacing depend on your group’s objectives and accommodation plan."
      sliderImages={["/images/unsplash/paris-europe.jpg", "/images/unsplash/uk-landmarks.jpg", "/images/unsplash/hero-coach-countryside.jpg"]}
      highlights={[
        "Cross‑Channel logistics planning",
        "Hotel transfers and daily timing coordination",
        "Route choices optimised for drive-times and comfort",
        "Executive vehicles suitable for long-distance touring",
      ]}
    >
      <section className="py-16 sm:py-20 bg-secondary">
        <Container>
          <SectionHeading
            eyebrow="Sample route"
            title="Tour Structure (Example)"
            subtitle="We’ll confirm realistic drive-times and key stops once your destinations and hotels are agreed."
            align="left"
          />
          <Itinerary days={days} />
        </Container>
      </section>
    </TourPageShell>
  );
}
