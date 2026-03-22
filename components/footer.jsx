import Link from "next/link";
import { Heart, MapPin } from "lucide-react";

const FOOTER_NAV = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/#vendors" },
  { label: "Itinerary", href: "/itinerary" },
  { label: "Vendors", href: "/vendor-dashboard" },
  { label: "List Business", href: "/list-business" },
];

const FOOTER_LEGAL = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-1.5">
              <MapPin size={20} className="text-primary" />
              <span className="text-xl font-bold text-primary">Nashik</span>
              <span className="text-xl font-bold text-accent">Xplore</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Empowering local businesses and connecting travelers with
              authentic Nashik experiences.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-16">
            {/* Navigation */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Navigate
              </h4>
              <nav className="flex flex-col gap-2">
                {FOOTER_NAV.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Legal
              </h4>
              <nav className="flex flex-col gap-2">
                {FOOTER_LEGAL.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-border pt-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 rounded-xl bg-muted px-4 py-2">
            <Heart size={14} className="text-primary" />
            <span className="text-xs font-medium text-foreground">
              SDG 8 — Decent Work & Economic Growth
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} NashikXplore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
