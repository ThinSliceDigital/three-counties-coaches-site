import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { TourPageShell } from "@/components/tour-page-shell";
import { Itinerary, type DayStop } from "@/components/itinerary";

export const metadata = {
  title: "Seaside & Coastal Day Trips",
  description:
    "Classic British seaside days out with private group transport — pick-up and drop-off included.",
};

const days: DayStop[] = [
  {
    day: "Example schedule",
    title: "Coastal Day Trip",
    route: "Pickup → Seaside → Return",
    highlights: [
      "Pickup across Gloucestershire/Worcestershire/Herefordshire",
      "Flexible arrival time to suit your plans",
      "Return pickup time agreed in advance",
      "Optional stop(s) for viewpoints or dining en route",
    ],
  },
];

export default function Page() {
  return (
    <TourPageShell
      heroImage="/images/unsplash/british-seaside.jpg"
      title="Seaside & Coastal Day Trips"
      subtitle="Classic British seaside fun for your group — golden sands, fish and chips and fresh sea air, with pick‑up and drop‑off included."
      intro="From family groups to schools and clubs, a coastal day out is one of the easiest wins for group travel. We’ll plan pickup points, timings and return logistics so you can focus on the day itself."
      sliderImages={[
        "/images/unsplash/british-seaside.jpg",
        "/images/unsplash/hero-coach-countryside.jpg",
        "/images/unsplash/uk-landmarks.jpg",
      ]}
      highlights={[
        "Flexible coastal destination choices",
        "Organiser-friendly pickup/return times",
        "Comfort stops planned around your group",
        "Private hire — no per-seat ticketing",
      ]}
    >
      <section className="py-16 sm:py-20 bg-secondary">
        <Container>
          <SectionHeading
            eyebrow="Sample itinerary"
            title="A Typical Coastal Day (Example)"
            subtitle="We’ll propose drive-times and the best departure time once you confirm your chosen destination."
            align="left"
          />
          <Itinerary days={days} />
        </Container>
      </section>
    </TourPageShell>
  );
}
