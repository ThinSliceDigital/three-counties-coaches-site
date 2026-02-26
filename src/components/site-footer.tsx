import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-ivory">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/brand/logo-wide.jpg"
              alt="Three Counties Coaches"
              width={240}
              height={60}
            />
            <p className="mt-4 text-sm text-ivory/70">
              Premium private coach and minibus hire across the Three Counties.
            </p>
            <p className="mt-4 text-xs text-ivory/60">
              Three Counties Coaches operates as a trading name of Welland Wheels.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:col-span-2">
            <div>
              <div className="text-sm font-semibold text-ivory">Links</div>
              <ul className="mt-3 space-y-2 text-sm text-ivory/70">
                <li><Link className="hover:text-gold" href="/">Home</Link></li>
                <li><Link className="hover:text-gold" href="/tours">Tours</Link></li>
                <li><Link className="hover:text-gold" href="/airport-transfers">Airport Transfers</Link></li>
                <li><Link className="hover:text-gold" href="/golf-transport">Golf Transport</Link></li>
                <li><Link className="hover:text-gold" href="/tours#day-tours">Day Trips</Link></li>
                <li><Link className="hover:text-gold" href="/schools">Schools</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-ivory">Company</div>
              <ul className="mt-3 space-y-2 text-sm text-ivory/70">
                <li><Link className="hover:text-gold" href="/fleet">Fleet</Link></li>
                <li><Link className="hover:text-gold" href="/locations">Locations</Link></li>
                <li><Link className="hover:text-gold" href="/quote">Request a Quote</Link></li>
                <li><Link className="hover:text-gold" href="/contact">Contact</Link></li>
                <li><Link className="hover:text-gold" href="/privacy-terms">Privacy & Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-ivory/60">
          © {new Date().getFullYear()} Three Counties Coaches. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
