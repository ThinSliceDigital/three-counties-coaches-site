import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { ImageSlider } from "@/components/image-slider";
import { SectionHeading } from "@/components/section-heading";

export function TourPageShell({
  heroImage,
  title,
  subtitle,
  intro,
  sliderImages,
  highlights,
  children,
}: {
  heroImage: string;
  title: string;
  subtitle: string;
  intro: string;
  sliderImages: string[];
  highlights: string[];
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero imageSrc={heroImage}>
        <div className="max-w-4xl">
          <h1 className="text-4xl text-ivory sm:text-5xl">{title}</h1>
          <p className="mt-5 text-base leading-relaxed text-ivory/75">{subtitle}</p>
          <p className="mt-4 text-sm text-ivory/60">Euro 6 fleet • 16–51 seats • Group bookings only</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/quote" variant="primary">Request a Tour Quote</Button>
            <Button href="/tours" variant="outline" className="border-white/25 text-ivory hover:bg-white/10">Back to Tours</Button>
          </div>
        </div>
      </Hero>

      <section className="py-16 sm:py-20 bg-ivory">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading eyebrow="Overview" title="Tour Summary" subtitle={intro} align="left" />
              <div className="mt-10 rounded-xl bg-secondary p-6 shadow-soft ring-1 ring-charcoal/10">
                <div className="font-serif text-lg text-charcoal">Highlights</div>
                <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed text-slate">
                  {highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <ImageSlider images={sliderImages} alt="Tour imagery" />
              <p className="mt-3 text-xs text-slate">
                Images shown are illustrative. Routes and timings are tailored to your group.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {children}

      <section className="py-16 sm:py-20 bg-charcoal">
        <Container className="text-center">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-gold">Enquiries</div>
          <h2 className="mt-2 text-3xl text-ivory sm:text-4xl">Ready to Plan This Tour?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ivory/70">
            Share your dates, pickup area and group size — we’ll confirm the right vehicle and schedule.
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
