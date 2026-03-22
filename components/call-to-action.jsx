import { Store, ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-accent py-20 md:py-28"
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F4EDE4' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20">
            <Store size={32} className="text-primary-foreground" />
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-accent-foreground md:text-4xl">
            Are You a Local Vendor?
          </h2>

          <p className="text-pretty text-lg leading-relaxed text-accent-foreground/80">
            Join NashikXplore and connect with travelers looking for authentic
            experiences. Get discovered, grow your business, and be part of a
            movement that puts local culture first.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            List Your Business
            <ArrowRight size={18} />
          </a>

          <p className="text-sm text-accent-foreground/60">
            Free to join. No hidden fees. Start getting customers today.
          </p>
        </div>
      </div>
    </section>
  );
}
