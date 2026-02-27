"use client";

import { useState } from "react";
import { Route, Download, MessageCircle } from "lucide-react";
import { MOCK_ITINERARY } from "@/lib/itinerary-data";
import ItineraryStopCard from "./itinerary-stop-card";

export default function ItineraryResults({ visible }) {
  const [stops] = useState(MOCK_ITINERARY);

  if (!visible) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      {/* Section heading */}
      <div className="mb-10 flex flex-col items-center gap-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <Route size={14} />
          Your Curated Itinerary
        </span>
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          A Day in Nashik, Crafted for You
        </h2>
        <p className="max-w-lg text-pretty text-muted-foreground">
          6 handpicked stops across your selected interests. Follow the route or
          mix it up — the city is yours to explore.
        </p>
      </div>

      {/* Timeline connector + cards */}
      <div className="relative">
        {/* Vertical timeline line (desktop only) */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stops.map((stop, i) => (
            <ItineraryStopCard key={stop.id} stop={stop} index={i} />
          ))}
        </div>
      </div>

      {/* Pattern divider */}
      <div className="my-12 flex items-center gap-4">
        <div className="h-px flex-1 bg-border" />
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-primary/40" />
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="h-2 w-2 rounded-full bg-primary/40" />
        </div>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Bottom CTAs */}
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <button className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]">
          <Download size={18} />
          Download as PDF
        </button>
        <a
          href="https://wa.me/?text=Check%20out%20my%20NashikXplore%20itinerary!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-8 py-3.5 text-sm font-semibold text-[#FFFFFF] transition-all hover:bg-[#1EBE5D] hover:shadow-lg active:scale-[0.98]"
        >
          <MessageCircle size={18} />
          Share on WhatsApp
        </a>
      </div>
    </section>
  );
}
