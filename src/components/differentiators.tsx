import {
  ShieldCheck,
  IdCard,
  Bus,
  MapPinned,
  BadgeCheck,
  Wallet,
} from "lucide-react";

export function Differentiators() {
  const items = [
    { icon: ShieldCheck, title: "Euro 6 Compliant Fleet" },
    { icon: IdCard, title: "DBS-Checked Drivers" },
    { icon: Bus, title: "Luxury Black & White Coaches" },
    { icon: MapPinned, title: "Experienced in UK & European Group Travel" },
    { icon: BadgeCheck, title: "Licensed UK Operator" },
    { icon: Wallet, title: "Flexible Booking Structure" },
  ];

  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((x) => (
        <div
          key={x.title}
          className="rounded-xl bg-white p-6 shadow-soft ring-1 ring-charcoal/10"
        >
          <x.icon className="h-6 w-6 text-gold" />
          <div className="mt-3 text-base font-semibold tracking-tight text-charcoal">
            {x.title}
          </div>
        </div>
      ))}
    </div>
  );
}
