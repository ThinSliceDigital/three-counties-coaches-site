"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Carousel({
  children,
  className,
  itemClassName,
}: {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const update = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < max - 4);
  };

  useEffect(() => {
    update();
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => update();
    el.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(() => update());
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, []);

  const scrollByCards = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9) * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  const showArrows = useMemo(() => canLeft || canRight, [canLeft, canRight]);

  return (
    <div className={cn("relative", className)}>
      {showArrows ? (
        <>
          <button
            className={cn(
              "absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-ivory/90 p-2 shadow-soft ring-1 ring-charcoal/10",
              !canLeft && "invisible",
            )}
            onClick={() => scrollByCards(-1)}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-charcoal" />
          </button>
          <button
            className={cn(
              "absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-ivory/90 p-2 shadow-soft ring-1 ring-charcoal/10",
              !canRight && "invisible",
            )}
            onClick={() => scrollByCards(1)}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-charcoal" />
          </button>
        </>
      ) : null}

      <div
        ref={scrollerRef}
        className={cn(
          "flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 sm:px-8 lg:px-0",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
      >
        {Array.isArray(children)
          ? children.map((child, idx) => (
              <div
                key={idx}
                className={cn(
                  "min-w-[85%] snap-start sm:min-w-[45%] lg:min-w-[31%]",
                  itemClassName,
                )}
              >
                {child}
              </div>
            ))
          : children}
      </div>
    </div>
  );
}
