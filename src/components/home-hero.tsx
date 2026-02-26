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
          <h1 className="text-4xl font-semibold tracking-tight text-ivory sm:text-5xl">
            Executive Coach &amp; Private Group Transport Across the Three Counties
          </h1>

          <p className="mt-3 text-sm font-medium text-ivory/80">
            Multi‑Day UK &amp; European Travel · Airport Transfers · School &amp; Corporate Hire
          </p>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-ivory/80">
            Premium private coach and minibus hire across Gloucestershire, Worcestershire and
            Herefordshire — from multi-day UK &amp; European touring to airport transfers, golf
            transport and school contracts.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
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

          <p className="mt-5 text-sm text-ivory/70">
            Primary pickup across <span className="text-ivory">Gloucestershire, Worcestershire &amp; Herefordshire</span> •
            Euro 6 fleet • Group bookings only
          </p>
        </div>
      </Hero>

      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
