"use client";

import { useState } from "react";
import { Hero } from "@/components/hero";
import { QuoteModal } from "@/components/quote-modal";

export function HomeHero({ heroImage }: { heroImage: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Hero imageSrc={heroImage}>
        <div className="max-w-4xl">
          <h1 className="font-[var(--font-headings)] text-4xl font-semibold tracking-tight text-ivory sm:text-5xl">
            Executive Coach &amp; Private Group Transport Across the Three Counties
          </h1>

          <p className="mt-4 text-sm font-medium text-ivory/80">
            Multi‑Day UK &amp; European Travel · Airport Transfers · School &amp; Corporate Hire
          </p>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ivory/80">
            Three Counties Coaches provides premium private coach and minibus hire across
            Gloucestershire, Worcestershire and Herefordshire. From multi-day UK and
            European group travel to executive airport transfers, golf transport and school
            contracts, we deliver dependable, professional group transport with a modern
            Euro 6 fleet.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ivory/80">
            Our team can assist group organisers in coordinating bespoke itineraries tailored
            to your schedule and travel objectives.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-md bg-gold px-5 py-2.5 text-sm font-medium text-charcoal transition-colors hover:bg-gold/90 focus:outline-none focus:ring-2 focus:ring-gold/40"
            >
              Request a Quote
            </button>
            <a
              href="/tours"
              className="inline-flex items-center justify-center rounded-md border border-white/25 bg-transparent px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold/40"
            >
              Plan Your Tour
            </a>
          </div>

          <p className="mt-6 text-sm text-ivory/70">
            Euro 6 compliant fleet • Executive black &amp; white coaches •{" "}
            <span className="text-ivory">Group-only private hire</span> • UK &amp; European travel
          </p>
        </div>
      </Hero>

      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
