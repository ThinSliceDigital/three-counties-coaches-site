"use client";

import { useState } from "react";
import { Phone } from "lucide-react";

import { Hero } from "@/components/hero";
import { QuoteModal } from "@/components/quote-modal";

export function HomeHero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Hero imageSrc="/images/home/hero.jpg">
        <div className="max-w-4xl">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
            Multi‑Day UK & European Travel · Airport Transfers · School & Corporate Hire
          </div>

          <h1 className="mt-3 font-[var(--font-headings)] text-4xl font-semibold tracking-tight text-ivory sm:text-5xl">
            Executive Coach & Private Group Transport Across the Three Counties
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-ivory/80">
            Three Counties Coaches provides premium private coach and minibus hire across
            Gloucestershire, Worcestershire and Herefordshire. From multi-day UK and
            European group travel to executive airport transfers, golf transport and school
            contracts, we deliver dependable, professional group transport with a modern
            Euro 6 fleet. Our team can assist group organisers in coordinating bespoke
            itineraries tailored to your schedule and travel objectives.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-gold/90 focus:outline-none focus:ring-2 focus:ring-gold/40"
            >
              Request a Quote
            </button>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white/25 bg-transparent px-4 py-2 text-sm font-medium text-ivory transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold/40"
            >
              Contact
            </a>
            <div className="ml-1 flex items-center gap-2 text-sm text-ivory/70">
              <Phone className="h-4 w-4 text-gold" />
              <span>Call CTA (add number)</span>
            </div>
          </div>

          <p className="mt-6 text-sm text-ivory/70">
            Euro 6 compliant fleet • Executive black & white coaches •{" "}
            <span className="text-ivory">Group-only private hire</span> • UK & European travel
          </p>
        </div>
      </Hero>

      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
