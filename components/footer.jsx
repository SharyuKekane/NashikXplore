import { Heart } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Home", href: "#" },
  { label: "Vendors", href: "#vendors" },
  { label: "About", href: "#cta" },
  { label: "Contact", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">Nashik</span>
              <span className="text-xl font-bold text-accent">Xplore</span>
            </div>
            <p className="max-w-xs text-center text-sm leading-relaxed text-muted-foreground md:text-left">
              Empowering local businesses and connecting travelers with
              authentic Nashik experiences.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* SDG 8 & Copyright */}
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
