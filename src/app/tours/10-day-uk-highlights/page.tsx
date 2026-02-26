import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { TourPageShell } from "@/components/tour-page-shell";
import { Itinerary, type DayStop } from "@/components/itinerary";

export const metadata = {
  title: "10-Day UK Highlights Tour",
  description:
    "A ten-day executive coach itinerary showcasing the UK — Scotland, the Lake District, Yorkshire, the Cotswolds and more, tailored to your group.",
};

const days: DayStop[] = [
  {
    day: "Days 1–2",
    title: "Travel North + First Highlands Stops",
    route: "Pickup → Scotland",
    highlights: [
      "Long-distance travel planned with comfort stops",
      "Flexible first scenic stops depending on arrival time",
      "Overnight locations aligned with your accommodation preferences",
    ],
    overnight: "Scotland (region varies)",
  },
  {
    day: "Days 3–4",
    title: "Highlands Touring + Edinburgh",
    route: "Highlands → Edinburgh",
    highlights: [
      "Highlands viewpoints and optional attractions",
      "Edinburgh day with drop-off/collection planning",
      "Schedule built for your group’s pace",
    ],
    overnight: "Edinburgh / Central Scotland",
  },
  {
    day: "Days 5–6",
    title: "Lake District",
    route: "Scotland → Lake District",
    highlights: [
      "Scenic transition route",
      "Boat trips and viewpoints by arrangement",
      "Optional walking/light activity stops",
    ],
    overnight: "Lake District",
  },
  {
    day: "Days 7–8",
    title: "Yorkshire & Northern England",
    route: "Lake District → Yorkshire",
    highlights: [
      "Choose heritage, scenery or city-focused stops",
      "Organiser-friendly timing and meeting points",
      "Evenings built around dinner plans",
    ],
    overnight: "Yorkshire area",
  },
  {
    day: "Days 9–10",
    title: "The Cotswolds + Return",
    route: "Yorkshire → Cotswolds → Drop-offs",
    highlights: [
      "Cotswolds towns and scenic lanes (route dependent)",
      "Return travel day planned for comfort",
      "Final drop-offs with clear ETA updates",
    ],
  },
];

export default function Page() {
  return (
    <TourPageShell
      heroImage="/placeholders/uk-landmarks.svg"
      title="10-Day UK Highlights Tour"
      subtitle="The ultimate British road trip — Scotland, the Lake District, Yorkshire, the Cotswolds and more, at a pace that suits your group."
      intro="This sample itinerary demonstrates how a ten-day UK highlights tour can be structured for comfort and flow. We’ll tailor the exact route, accommodation and activity mix around your group — from scenic touring to heritage-focused itineraries."
      sliderImages={["/placeholders/uk-landmarks.svg", "/placeholders/scotland.svg", "/placeholders/lake-district.svg"]}
      highlights={[
        "A balanced itinerary across multiple UK regions",
        "Flexible pacing for sightseeing and rest",
        "Executive vehicle options for long-distance comfort",
        "Clear organiser comms and logistics support",
      ]}
    >
      <section className="py-16 sm:py-20 bg-secondary">
        <Container>
          <SectionHeading
            eyebrow="Sample route"
            title="Route Structure (Example)"
            subtitle="A ten-day tour is best planned around accommodation and daily drive-times — we’ll optimise this with you."
            align="left"
          />
          <Itinerary days={days} />
        </Container>
      </section>
    </TourPageShell>
  );
}
