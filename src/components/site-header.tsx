"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button";

const tours = [
  { label: "Day Tours", href: "/tours#day-tours" },
  { label: "Multi-Day Tours", href: "/tours#multi-day-tours" },
];

const services = [
  { label: "Airport Transfers", href: "/airport-transfers" },
  { label: "Golf Group Transport", href: "/golf-transport" },
];

const topNav = [
  { label: "Services", href: "/#services", dropdown: services },
  { label: "Tours", href: "/tours", dropdown: tours },
  { label: "Schools", href: "/schools" },
  { label: "Fleet", href: "/fleet" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isHome = pathname === "/";

  const headerClass = useMemo(
    () =>
      cn(
        "sticky top-0 z-50 border-b",
        isHome
          ? "border-white/10 bg-charcoal/80 backdrop-blur"
          : "border-charcoal/10 bg-ivory/90 backdrop-blur",
      ),
    [isHome],
  );

  const linkBase =
    "text-sm transition-colors hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold/30 rounded";

  return (
    <header className={headerClass}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          {/* Desktop: wide logo. Mobile: crest if needed. */}
          <div className="hidden sm:block">
            <Image
              src="/brand/logo-wide.jpg"
              alt="Three Counties Coaches"
              width={240}
              height={60}
              priority
            />
          </div>
          <div className="sm:hidden">
            <Image
              src="/brand/logo-stacked.jpg"
              alt="Three Counties Coaches"
              width={48}
              height={48}
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {topNav.map((item) => {
            const active = pathname === item.href;
            const hasDropdown = !!item.dropdown;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasDropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    linkBase,
                    isHome ? "text-ivory/90" : "text-charcoal/90",
                    active && "text-gold",
                    "inline-flex items-center gap-1",
                  )}
                >
                  {item.label}
                  {hasDropdown ? <ChevronDown className="h-4 w-4" /> : null}
                </Link>

                {hasDropdown && openDropdown === item.label ? (
                  <div className="absolute left-0 mt-2 w-56 overflow-hidden rounded-md border border-charcoal/10 bg-ivory shadow-soft">
                    <div className="p-2">
                      {item.dropdown!.map((d) => (
                        <Link
                          key={d.href}
                          href={d.href}
                          className="block rounded px-3 py-2 text-sm text-charcoal/90 hover:bg-charcoal/5"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Mobile persistent CTA */}
          <div className="lg:hidden">
            <Button href="/quote" variant={isHome ? "primary" : "outline"} className="px-3 py-2">
              Quote
            </Button>
          </div>
          <div className="hidden lg:block">
            <Button href="/quote" variant="primary">
              Request a Quote
            </Button>
          </div>

          <button
            className={cn(
              "lg:hidden inline-flex items-center justify-center rounded-md p-2",
              isHome ? "text-ivory" : "text-charcoal",
            )}
            onClick={() => setOpenMobile((v) => !v)}
            aria-label="Toggle menu"
          >
            {openMobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {openMobile ? (
        <div className={cn("lg:hidden border-t", isHome ? "border-white/10" : "border-charcoal/10")}>
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <div className="space-y-2">
              {topNav.map((item) => (
                <MobileNavItem
                  key={item.label}
                  item={item}
                  isHome={isHome}
                  onNavigate={() => setOpenMobile(false)}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function MobileNavItem({
  item,
  isHome,
  onNavigate,
}: {
  item: {
    label: string;
    href: string;
    dropdown?: { label: string; href: string }[];
  };
  isHome: boolean;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const hasDropdown = !!item.dropdown;
  const text = isHome ? "text-ivory/90" : "text-charcoal/90";

  if (!hasDropdown) {
    return (
      <Link
        href={item.href}
        className={cn("block rounded px-3 py-2 text-sm", text, "hover:bg-charcoal/10")}
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="rounded border border-charcoal/10 bg-white/5">
      <button
        className={cn(
          "flex w-full items-center justify-between rounded px-3 py-2 text-left text-sm",
          text,
        )}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{item.label}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      {open ? (
        <div className="pb-2">
          {item.dropdown!.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className={cn("block px-6 py-2 text-sm", text, "hover:bg-charcoal/10")}
              onClick={onNavigate}
            >
              {d.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
