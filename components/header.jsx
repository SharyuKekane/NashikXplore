"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MapPin, LogIn } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/#vendors" },
  { label: "Itinerary", href: "/itinerary" },
  { label: "Impact", href: "/impact" },
  { label: "Live", href: "/admin" },
  { label: "Vendors", href: "/vendor-dashboard" },
];
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function isActive(href) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]) && href.split("#")[0] !== "/";
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled
          ? "bg-card/98 shadow-md backdrop-blur-lg"
          : "bg-card/95 backdrop-blur-md"
      } border-b border-border`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 transition-opacity hover:opacity-80">
          <MapPin size={22} className="text-primary" />
          <span className="text-xl font-bold tracking-tight text-primary">
            Nashik
          </span>
          <span className="text-xl font-bold tracking-tight text-accent">
            Xplore
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`group relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${
                  isActive(link.href)
                    ? "w-5"
                    : "w-0 group-hover:w-5"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop action buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/list-business"
            className="rounded-xl border border-primary bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            List Business
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            <LogIn size={16} />
            Login
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center rounded-xl p-2 text-foreground transition-colors hover:bg-muted lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay + drawer */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed inset-x-0 top-[57px] z-50 border-t border-border bg-card px-6 pb-8 pt-4 shadow-xl lg:hidden">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile action buttons */}
            <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
              <Link
                href="/list-business"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center rounded-xl border border-primary bg-primary/5 px-4 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                List Your Business
              </Link>
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                <LogIn size={16} />
                Login
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
