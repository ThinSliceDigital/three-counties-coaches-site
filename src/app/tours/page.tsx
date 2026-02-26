import Image from "next/image";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Carousel } from "@/components/carousel";
import { PlaneTakeoff, SlidersHorizontal, Users } from "lucide-react";

export const metadata = {
  title: "Tours for Groups — Day Trips & Multi-Day Experiences",
  description:
    "Premium coach and minibus transport for group organisers. Primary pickup across Gloucestershire, Worcestershire & Herefordshire — UK-wide by request.",
};

const multiDayTours = [
  {
    title: "5-Day Scotland Coach Tour",
    image: "/placeholders/scotland.svg",
    desc:
      "Five days through the dramatic Highlands — Glencoe, Loch Ness, Edinburgh and the Cairngorms, with overnight stops tailored to your group.",
  },
  {
    title: "7-Day Scotland & Lake District Tour",
    image: "/placeholders/lake-district.svg",
    desc:
      "A week-long journey combining the rugged beauty of the Scottish Highlands with the tranquil lakes and fells of England’s Lake District.",
  },
  {
    title: "10-Day UK Highlights Tour",
    image: "/placeholders/uk-landmarks.svg",
    desc:
      "The ultimate British road trip — Scotland, the Lake District, Yorkshire, the Cotswolds and more, at a pace that suits your group.",
  },
  {
    title: "10-Day European Group Tour",
    image: "/placeholders/europe.svg",
    desc:
      "Ten days across Europe by executive coach — France, Switzerland and Italy, with airport transfers and cross‑Channel logistics handled for you.",
  },
];

const dayTours = [
  {
    title: "London Day Trip by Coach",
    image: "/placeholders/uk-landmarks.svg",
    desc:
      "A full day in the capital with door-to-door coach travel — sightseeing, shopping, shows and more, all at your group’s pace.",
  },
  {
    title: "Harry Potter Studio Tour Transport",
    image: "/placeholders/hero.svg",
    desc:
      "Comfortable return coach transport to Warner Bros. Studio Tour London — sit back and let us handle the driving while your group enjoys the magic.",
  },
  {
    title: "Seaside & Coastal Day Trips",
    image: "/placeholders/hero.svg",
    desc:
      "Classic British seaside fun for your group — golden sands, fish and chips and fresh sea air, with pick‑up and drop‑off included.",
  },
];

function TourCard({ title, image, desc }: { title: string; image: string; desc: string }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-charcoal/10">
      <div className="relative h-44">
        <Image src={image} alt="" fill className="object-cover" />
      </div>
      <div className="p-5">
        <div className="font-serif text-lg text-charcoal">{title}</div>
        <p className="mt-2 text-sm text-slate">{desc}</p>
        <div className="mt-4 text-sm font-medium text-gold">Request quote →</div>
      </div>
    </div>
  );
}

export default function ToursPage() {
  return (
    <>
      <section className="bg-charcoal">
        <Container className="py-16 text-center">
          <h1 className="font-serif text-4xl text-ivory sm:text-5xl">
            Tours for Groups — Day Trips & Multi‑Day Experiences
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base text-ivory/75">
            Premium coach and minibus transport for group organisers, tour coordinators,
            schools and golf parties — with primary pickup across Gloucestershire,
            Worcestershire & Herefordshire.
          </p>
          <p className="mt-4 text-sm text-ivory/60">
            Euro 6 fleet • 16–51 seats • <span className="text-ivory">Group bookings only</span>
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button href="/quote" variant="primary">
              Request a Tour Quote
            </Button>
            <Button
              href="#multi-day-tours"
              variant="outline"
              className="border-white/25 text-ivory hover:bg-white/10"
            >
              View Multi‑Day Tours
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-secondary">
        <Container className="py-14">
          <div className="mx-auto max-w-4xl text-center">
            <div className="font-serif text-2xl text-charcoal">Tailored Group Transport</div>
            <p className="mt-3 text-sm text-slate">
              Three Counties Coaches provides the vehicle, driver and logistics for your group.
              Every tour is tailored to your schedule, group size and preferences.
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <Users className="mx-auto mb-3 h-8 w-8 text-gold" />
                <h3 className="font-serif text-base font-semibold text-charcoal">
                  Private Group Transport
                </h3>
                <p className="mt-2 text-sm text-slate">
                  Transport for private groups, clubs, schools and corporate parties.
                </p>
              </div>
              <div className="text-center">
                <SlidersHorizontal className="mx-auto mb-3 h-8 w-8 text-gold" />
                <h3 className="font-serif text-base font-semibold text-charcoal">
                  Fully Customised Itineraries
                </h3>
                <p className="mt-2 text-sm text-slate">
                  Itineraries are examples — every trip is customised to your requirements.
                </p>
              </div>
              <div className="text-center">
                <PlaneTakeoff className="mx-auto mb-3 h-8 w-8 text-gold" />
                <h3 className="font-serif text-base font-semibold text-charcoal">
                  Airport & Hotel Coordination
                </h3>
                <p className="mt-2 text-sm text-slate">
                  We can coordinate airport pickup, hotel transfers and full touring schedules.
                </p>
              </div>
            </div>

            <p className="mt-8 text-xs text-slate">
              Three Counties Coaches operates as a trading name of Welland Wheels.
            </p>
          </div>
        </Container>
      </section>

      <section id="day-tours" className="bg-ivory">
        <Container className="py-14">
          <div className="text-center">
            <div className="font-serif text-3xl text-charcoal">Day Tours & Group Excursions</div>
            <p className="mt-3 text-sm text-slate">
              Premium day trips for groups, schools and corporates — quote‑based with primary
              pickup across the three counties.
            </p>
          </div>
        </Container>
        <Carousel className="pb-14" itemClassName="lg:min-w-[31%]">
          {dayTours.map((t) => (
            <TourCard key={t.title} {...t} />
          ))}
        </Carousel>
      </section>

      <section id="multi-day-tours" className="bg-secondary">
        <Container className="py-14">
          <div className="text-center">
            <div className="font-serif text-3xl text-charcoal">Multi‑Day Tours</div>
            <p className="mt-3 text-sm text-slate">
              Calm, dependable logistics with Scotland and Lake District experience — UK‑wide
              and Europe by request.
            </p>
          </div>
        </Container>
        <Carousel className="pb-6" itemClassName="lg:min-w-[31%]">
          {multiDayTours.map((t) => (
            <TourCard key={t.title} {...t} />
          ))}
        </Carousel>
        <Container className="pb-14">
          <p className="text-center text-xs text-slate">
            All itineraries are examples — every tour is tailored to your group, timings and accommodation.
          </p>
        </Container>
      </section>

      <section className="bg-charcoal">
        <Container className="py-16 text-center">
          <div className="font-serif text-3xl text-ivory">Plan Your Group Tour</div>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-ivory/70">
            Share your dates and group details — we’ll confirm the right vehicle and schedule.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button href="/quote" variant="primary">Request a Tour Quote</Button>
            <Button href="/contact" variant="outline" className="border-white/25 text-ivory hover:bg-white/10">Call Us</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
