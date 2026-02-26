import { MapPin, Clock, Hotel } from "lucide-react";

export type DayStop = {
  day: string;
  title: string;
  route?: string;
  highlights: string[];
  overnight?: string;
};

export function Itinerary({ days }: { days: DayStop[] }) {
  return (
    <div className="mt-10 grid gap-4">
      {days.map((d) => (
        <div key={d.day} className="rounded-xl bg-white p-6 shadow-soft ring-1 ring-charcoal/10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-gold">{d.day}</div>
              <div className="mt-1 font-serif text-xl text-charcoal">{d.title}</div>
            </div>
            {d.route ? (
              <div className="flex items-center gap-2 text-sm text-slate">
                <MapPin className="h-4 w-4 text-gold" />
                <span>{d.route}</span>
              </div>
            ) : null}
          </div>

          <ul className="mt-4 grid gap-2 text-sm text-slate">
            {d.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 text-gold" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {d.overnight ? (
            <div className="mt-4 flex items-center gap-2 text-sm text-slate">
              <Hotel className="h-4 w-4 text-gold" />
              <span>Overnight: {d.overnight}</span>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
