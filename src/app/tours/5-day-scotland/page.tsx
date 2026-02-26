import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { TourPageShell } from "@/components/tour-page-shell";
import { Itinerary, type DayStop } from "@/components/itinerary";

export const metadata = {
  title: "5-Day Scotland Coach Tour",
  description:
    "Five days through the Scottish Highlands with a tailored itinerary for private groups — Glencoe, Loch Ness, Edinburgh and the Cairngorms.",
};

const days: DayStop[] = [
  {
    day: "Day 1",
    title: "Arrival & Highlands Gateway",
    route: "Pickup (Three Counties) → Highlands gateway",
    highlights: [
      "Morning pickup across Gloucestershire/Worcestershire/Herefordshire (or airport by request)",
      "Comfort breaks and flexible lunch stop",
      "Scenic drive into the Highlands — timing tailored to your group",
    ],
    overnight: "Fort William / Inverness area",
  },
  {
    day: "Day 2",
    title: "Glencoe & Lochs",
    route: "Highlands touring loop",
    highlights: [
      "Glencoe viewpoints and short photo stops",
      "Optional light walk / visitor centre stop",
      "Evening arrival with time for dinner and rest",
    ],
    overnight: "Fort William / Inverness area",
  },
  {
    day: "Day 3",
    title: "Loch Ness & Cairngorms",
    route: "Inverness → Loch Ness → Cairngorms",
    highlights: [
      "Loch Ness cruise option (by arrangement)",
      "Cairngorm scenery and flexible attractions",
      "Coach timings built around your preferred pace",
    ],
    overnight: "Aviemore / Perthshire area",
  },
  {
    day: "Day 4",
    title: "Edinburgh Day",
    route: "Perthshire → Edinburgh",
    highlights: [
      "Drop-off close to key areas (subject to access)",
      "Free time for the Royal Mile, museums, shopping or guided tours",
      "Evening collection and hotel transfer",
    ],
    overnight: "Edinburgh / Stirling area",
  },
  {
    day: "Day 5",
    title: "Return Journey",
    route: "Edinburgh → Return",
    highlights: [
      "Flexible departure time",
      "Comfort stops planned for group needs",
      "Return to pickup point(s) with clear ETA updates",
    ],
  },
];

export default function Page() {
  return (
    <TourPageShell
      heroImage="/placeholders/scotland.svg"
      title="5-Day Scotland Coach Tour"
      subtitle="A premium, private group tour through the dramatic Highlands — with a calm schedule, comfortable transport and logistics handled end-to-end."
      intro="This sample itinerary is designed to showcase what a five-day Scotland tour can look like with an executive coach and professional driver. Every tour is tailored to your dates, accommodation preferences and sightseeing priorities."
      sliderImages={["/placeholders/scotland.svg", "/placeholders/lake-district.svg", "/placeholders/hero.svg"]}
      highlights={[
        "Highlands scenery with flexible photo stops",
        "Optional Loch Ness cruise and attraction planning",
        "Edinburgh day built around your group’s interests",
        "Comfort breaks and pacing designed for long-distance travel",
      ]}
    >
      <section className="py-16 sm:py-20 bg-secondary">
        <Container>
          <SectionHeading
            eyebrow="Sample route"
            title="Day-by-Day Itinerary (Example)"
            subtitle="Use this as a starting point — we’ll adapt timings and stops to suit your group."
            align="left"
          />
          <Itinerary days={days} />
        </Container>
      </section>
    </TourPageShell>
  );
}
