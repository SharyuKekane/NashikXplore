"use client";

import { useState } from "react";
import {
  ChevronDown,
  Sparkles,
  Utensils,
  Flame,
  Landmark,
  Paintbrush,
  TreePine,
} from "lucide-react";
import { INTERESTS, TIME_OPTIONS, VISIT_TIMES } from "@/lib/itinerary-data";

const ICON_MAP = {
  Utensils,
  Flame,
  Landmark,
  Paintbrush,
  TreePine,
};

export default function ItineraryForm({ onGenerate }) {
  const [duration, setDuration] = useState("");
  const [visitTime, setVisitTime] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);

  function toggleInterest(id) {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    onGenerate({ duration, visitTime, selectedInterests });
  }

  return (
    <section className="mx-auto max-w-3xl px-6 -mt-12 relative z-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 rounded-xl border border-border bg-card p-6 shadow-lg md:p-8"
      >
        <h2 className="text-lg font-bold text-foreground">
          Tell us your preferences
        </h2>

        {/* Dropdowns row */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          {/* Duration */}
          <div className="flex flex-1 flex-col gap-2">
            <label
              htmlFor="duration"
              className="text-sm font-medium text-foreground"
            >
              Time Available
            </label>
            <div className="relative">
              <select
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full appearance-none rounded-xl border border-input bg-background px-4 py-3 pr-10 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
              >
                <option value="" disabled>
                  Select duration
                </option>
                {TIME_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
            </div>
          </div>

          {/* Visit Time */}
          <div className="flex flex-1 flex-col gap-2">
            <label
              htmlFor="visitTime"
              className="text-sm font-medium text-foreground"
            >
              Visit Time
            </label>
            <div className="relative">
              <select
                id="visitTime"
                value={visitTime}
                onChange={(e) => setVisitTime(e.target.value)}
                className="w-full appearance-none rounded-xl border border-input bg-background px-4 py-3 pr-10 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
              >
                <option value="" disabled>
                  Select time of day
                </option>
                {VISIT_TIMES.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
            </div>
          </div>
        </div>

        {/* Interests multi-select */}
        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium text-foreground">
            Your Interests
          </span>
          <div className="flex flex-wrap gap-3">
            {INTERESTS.map((interest) => {
              const Icon = ICON_MAP[interest.icon];
              const isActive = selectedInterests.includes(interest.id);
              return (
                <button
                  key={interest.id}
                  type="button"
                  onClick={() => toggleInterest(interest.id)}
                  className={`inline-flex items-center gap-2 rounded-xl border-2 px-4 py-2.5 text-sm font-medium transition-all ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-muted"
                  }`}
                >
                  <Icon size={16} />
                  {interest.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Generate button */}
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]"
        >
          <Sparkles size={18} />
          Generate My Itinerary
        </button>
      </form>
    </section>
  );
}
