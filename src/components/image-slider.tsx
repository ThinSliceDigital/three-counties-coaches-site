"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ImageSlider({
  images,
  alt = "",
  className,
}: {
  images: string[];
  alt?: string;
  className?: string;
}) {
  const safe = useMemo(() => images.filter(Boolean), [images]);
  const [idx, setIdx] = useState(0);
  const hasMany = safe.length > 1;

  const prev = () => setIdx((i) => (i - 1 + safe.length) % safe.length);
  const next = () => setIdx((i) => (i + 1) % safe.length);

  if (!safe.length) return null;

  return (
    <div className={cn("relative overflow-hidden rounded-xl shadow-soft ring-1 ring-charcoal/10", className)}>
      <div className="relative h-64 sm:h-80">
        <Image src={safe[idx]} alt={alt} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
      </div>

      {hasMany ? (
        <>
          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-ivory/90 p-2 shadow-soft ring-1 ring-charcoal/10"
            onClick={prev}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 text-charcoal" />
          </button>
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-ivory/90 p-2 shadow-soft ring-1 ring-charcoal/10"
            onClick={next}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 text-charcoal" />
          </button>

          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {safe.map((_, i) => (
              <button
                key={i}
                className={cn(
                  "h-2 w-2 rounded-full transition",
                  i === idx ? "bg-gold" : "bg-ivory/60",
                )}
                onClick={() => setIdx(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
