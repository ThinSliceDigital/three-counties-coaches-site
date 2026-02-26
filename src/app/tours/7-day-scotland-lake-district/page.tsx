import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { TourPageShell } from "@/components/tour-page-shell";
import { Itinerary, type DayStop } from "@/components/itinerary";

export const metadata = {
  title: "7-Day Scotland & Lake District Tour",
  description:
    "A week-long private group tour combining the Scottish Highlands with England’s Lake District — tailored to your group and pace.",
};

const days: DayStop[] = [
  {
    day: "Day 1",
    title: "Travel North",
    route: "Pickup → Scotland",
    highlights: [
      "Morning pickup across the Three Counties (or airport by request)",
      "Comfort stops and lunch tailored to your group",
      "Evening arrival and hotel transfer",
    ],
    overnight: "Central Scotland",
  },
  {
    day: "Day 2",
    title: "Highlands Highlights",
    route: "Scenic touring",
    highlights: [
      "Flexible Highland route selection (weather-friendly options)",
      "Photo stops and attractions by arrangement",
      "Evening return and relaxed schedule",
    ],
    overnight: "Highlands gateway",
  },
  {
    day: "Day 3",
    title: "Lochs, Glens & Local Stops",
    route: "Highlands loop",
    highlights: [
      "Optional boat/cruise experiences",
      "Short walks and viewpoints",
      "Dinner-time hotel transfer",
    ],
    overnight: "Highlands gateway",
  },
  {
    day: "Day 4",
    title: "Cross to the Lake District",
    route: "Scotland → Lake District",
    highlights: [
      "Comfortable travel day with breaks",
      "Arrival via a scenic approach route",
      "Evening free time for lakeside dining",
    ],
    overnight: "Lake District",
  },
  {
    day: "Day 5",
    title: "Lake District Touring",
    route: "Windermere / Ambleside (example)",
    highlights: [
      "Choose relaxed or active day options",
      "Boat trips and viewpoints by arrangement",
      "Timing built around your group’s pace",
    ],
    overnight: "Lake District",
  },
  {
    day: "Day 6",
    title: "Optional Yorkshire / Cotswolds Stop (Route-Dependent)",
    route: "Lake District → South",
    highlights: [
      "Optional stop en route depending on final schedule",
      "Comfort breaks and clear ETA updates",
      "Evening arrival near home region",
    ],
    overnight: "Midlands / Homeward route",
  },
  {
    day: "Day 7",
    title: "Return",
    route: "Final leg → Drop-offs",
    highlights: [
      "Flexible morning departure",
      "Drop-offs and final transfer planning",
      "End-of-tour wrap-up with organiser check-in",
    ],
  },
];

export default function Page() {
  return (
    <TourPageShell
      heroImage="/placeholders/lake-district.svg"
      title="7-Day Scotland & Lake District Tour"
      subtitle="A week-long journey combining the rugged beauty of the Scottish Highlands with the tranquil lakes and fells of England’s Lake District."
      intro="This is a sample week itinerary designed for private groups. We’ll tailor the route, stops and hotel schedule around your objectives — from sightseeing-focused tours to slower-paced scenic breaks."
      sliderImages={["/placeholders/lake-district.svg", "/placeholders/scotland.svg", "/placeholders/uk-landmarks.svg"]}
      highlights={[
        "Highlands + Lake District combination itinerary",
        "Flexible attraction planning and pacing",
        "Comfort breaks and practical long-distance scheduling",
        "Optional route additions based on your group interests",
      ]}
    >
      <section className="py-16 sm:py-20 bg-secondary">
        <Container>
          <SectionHeading
            eyebrow="Sample route"
            title="Day-by-Day Itinerary (Example)"
            subtitle="We’ll refine this with your preferred accommodation and sightseeing priorities."
            align="left"
          />
          <Itinerary days={days} />
        </Container>
      </section>
    </TourPageShell>
  );
}
