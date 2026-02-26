import { Container } from "@/components/container";
import { Button } from "@/components/button";

export function CTASection({
  eyebrow = "Enquiries",
  title,
  copy,
  primaryHref = "/quote",
  primaryLabel = "Request a Quote",
  secondaryHref = "/contact",
  secondaryLabel = "Contact",
  variant = "dark",
}: {
  eyebrow?: string;
  title: string;
  copy: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  variant?: "dark" | "light";
}) {
  const isDark = variant === "dark";

  return (
    <section className={isDark ? "bg-charcoal" : "bg-secondary"}>
      <Container className="py-16 sm:py-20 text-center">
        <div className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
          {eyebrow}
        </div>
        <h2
          className={
            "mt-2 text-3xl sm:text-4xl font-semibold tracking-tight " +
            (isDark ? "text-ivory" : "text-charcoal")
          }
        >
          {title}
        </h2>
        <p
          className={
            "mx-auto mt-4 max-w-2xl text-sm leading-relaxed " +
            (isDark ? "text-ivory/70" : "text-slate")
          }
        >
          {copy}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={primaryHref} variant="primary">
            {primaryLabel}
          </Button>
          <Button
            href={secondaryHref}
            variant="outline"
            className={
              isDark
                ? "border-white/25 text-ivory hover:bg-white/10"
                : "border-charcoal/25"
            }
          >
            {secondaryLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
