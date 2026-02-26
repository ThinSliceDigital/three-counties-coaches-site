import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline";

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gold/40";

  const styles: Record<Variant, string> = {
    primary: "bg-gold text-charcoal hover:bg-gold/90",
    secondary: "bg-charcoal text-ivory hover:bg-charcoal/90",
    outline:
      "border border-charcoal/30 bg-transparent text-charcoal hover:bg-charcoal/5",
  };

  return (
    <Link href={href} className={cn(base, styles[variant], className)}>
      {children}
    </Link>
  );
}
