import { Compass } from "lucide-react";

export default function ItineraryHero() {
  return (
    <section className="relative overflow-hidden bg-accent py-20 md:py-28">
      {/* Cultural pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F4EDE4' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            <Compass size={14} />
            AI-Powered Itinerary
          </span>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-accent-foreground md:text-6xl">
            Craft Your Perfect Nashik Journey
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-accent-foreground/80 md:text-xl">
            AI-curated local experiences based on your time and interests.
          </p>
        </div>
      </div>
    </section>
  );
}
