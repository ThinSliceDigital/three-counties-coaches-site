import Image from "next/image";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

export function Hero({
  imageSrc,
  children,
  className,
}: {
  imageSrc: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden bg-charcoal", className)}>
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal/80" />
      </div>
      <Container className="relative py-16 sm:py-20">{children}</Container>
    </section>
  );
}
