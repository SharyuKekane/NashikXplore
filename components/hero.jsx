import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-accent py-20 md:py-32"
    >
      {/* Subtle cultural pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F4EDE4' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero image overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-nashik.jpg"
          alt="Beautiful landscape of Nashik"
          className="h-full w-full object-cover opacity-20"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            <MapPin size={14} />
            Nashik, Maharashtra
          </span>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-accent-foreground md:text-6xl">
            Discover Hidden Gems of Nashik
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-accent-foreground/80 md:text-xl">
            Support local artisans, taste authentic flavors, and explore
            spiritual wonders. Your journey into the heart of Nashik starts
            here.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#vendors"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              Explore Vendors
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-accent-foreground/30 px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:border-accent-foreground/60 hover:bg-accent-foreground/10"
            >
              List Your Business
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
