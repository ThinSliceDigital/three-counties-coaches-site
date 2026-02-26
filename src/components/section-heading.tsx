import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const alignClass = align === "left" ? "text-left" : "text-center";
  return (
    <div className={cn(alignClass, className)}>
      {eyebrow ? (
        <div className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-2 font-serif text-3xl text-charcoal sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-sm leading-relaxed text-slate",
            align === "left" ? "max-w-2xl" : "mx-auto max-w-2xl",
          )}
        >
          {subtitle}
        </p>
      ) : null}
      <div className={cn("mt-6", align === "left" ? "" : "flex justify-center")}>
        <div className="h-px w-24 bg-gold/80" />
      </div>
    </div>
  );
}
