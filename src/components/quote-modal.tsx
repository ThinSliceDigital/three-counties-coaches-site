"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export function QuoteModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // focus first input
    setTimeout(() => {
      const el = panelRef.current?.querySelector<HTMLInputElement>("input, select, textarea, button");
      el?.focus();
    }, 0);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/70 p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={panelRef}
        className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl bg-ivory shadow-soft ring-1 ring-charcoal/10"
      >
        <div className="flex items-start justify-between gap-4 border-b border-charcoal/10 p-6">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-gold">Request a quote</div>
            <div className="mt-2 font-[var(--font-headings)] text-2xl font-semibold tracking-tight text-charcoal">
              Tell us about your trip
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              This form is for private group bookings (no per‑seat tickets). We’ll confirm availability and respond with a clear quote.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-2 text-charcoal/70 hover:bg-charcoal/5"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form
          className="grid gap-4 p-6 sm:grid-cols-2"
          action="/quote"
          method="get"
        >
          <div className="sm:col-span-2">
            <label className="text-xs font-medium uppercase tracking-[0.18em] text-slate">Service type</label>
            <select
              name="service"
              className="mt-2 w-full rounded-md border border-charcoal/15 bg-white px-3 py-2 text-sm"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              <option>Coach Hire</option>
              <option>Airport Transfers</option>
              <option>Golf</option>
              <option>Schools</option>
              <option>Day Trips</option>
              <option>Multi-day Tours</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-medium uppercase tracking-[0.18em] text-slate">Date</label>
            <input
              name="date"
              type="date"
              className="mt-2 w-full rounded-md border border-charcoal/15 bg-white px-3 py-2 text-sm"
              required
            />
          </div>

          <div>
            <label className="text-xs font-medium uppercase tracking-[0.18em] text-slate">Passengers</label>
            <input
              name="passengers"
              type="number"
              min={1}
              placeholder="e.g. 35"
              className="mt-2 w-full rounded-md border border-charcoal/15 bg-white px-3 py-2 text-sm"
              required
            />
          </div>

          <div>
            <label className="text-xs font-medium uppercase tracking-[0.18em] text-slate">Pickup location</label>
            <input
              name="pickup"
              placeholder="Town / postcode / airport"
              className="mt-2 w-full rounded-md border border-charcoal/15 bg-white px-3 py-2 text-sm"
              required
            />
          </div>

          <div>
            <label className="text-xs font-medium uppercase tracking-[0.18em] text-slate">Dropoff / destination</label>
            <input
              name="destination"
              placeholder="Destination / venue"
              className="mt-2 w-full rounded-md border border-charcoal/15 bg-white px-3 py-2 text-sm"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label className="text-xs font-medium uppercase tracking-[0.18em] text-slate">Notes</label>
            <textarea
              name="notes"
              rows={4}
              placeholder="Itinerary, timings, luggage, multiple stops, accessibility needs…"
              className="mt-2 w-full rounded-md border border-charcoal/15 bg-white px-3 py-2 text-sm"
            />
          </div>

          <div className="sm:col-span-2">
            <div className="mt-2 grid gap-4 sm:grid-cols-3">
              <div>
                <label className="text-xs font-medium uppercase tracking-[0.18em] text-slate">Name</label>
                <input
                  name="name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-md border border-charcoal/15 bg-white px-3 py-2 text-sm"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-medium uppercase tracking-[0.18em] text-slate">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-md border border-charcoal/15 bg-white px-3 py-2 text-sm"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-medium uppercase tracking-[0.18em] text-slate">Phone</label>
                <input
                  name="phone"
                  placeholder="Mobile / landline"
                  className="mt-2 w-full rounded-md border border-charcoal/15 bg-white px-3 py-2 text-sm"
                  required
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="text-xs text-slate">
              Submitting will take you to the full quote page (preview behaviour).
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-md border border-charcoal/25 bg-transparent px-4 py-2 text-sm font-medium text-charcoal hover:bg-charcoal/5"
              >
                Close
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-medium text-charcoal hover:bg-gold/90"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
