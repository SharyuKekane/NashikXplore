"use client";

import { useState } from "react";
import { Star, Zap, ZapOff, Pencil, ExternalLink, MessageCircle } from "lucide-react";

const mockVendor = {
  name: "Mama's Misal House",
  category: "Food",
  rating: 4.8,
  description:
    "Authentic Nashik-style misal pav made with a secret family recipe passed down three generations. A must-try for spice lovers.",
  image: "/images/vendor-food.jpg",
  whatsapp: "919876543210",
};

export default function DashboardListing() {
  const [boosted, setBoosted] = useState(true);

  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">My Listing</h2>
        <span className="text-sm text-muted-foreground">Last edited 2 days ago</span>
      </div>

      <div className="flex flex-col gap-6 rounded-xl border border-border bg-card p-6 lg:flex-row">
        {/* Preview card */}
        <div className="relative w-full shrink-0 overflow-hidden rounded-xl lg:w-72">
          <img
            src={mockVendor.image}
            alt={`${mockVendor.name} listing preview`}
            className="h-48 w-full object-cover lg:h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent" />
          <span className="absolute left-3 top-3 rounded-lg bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
            {mockVendor.category}
          </span>
          {boosted && (
            <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              <Zap size={12} />
              Boosted
            </span>
          )}
        </div>

        {/* Info & actions */}
        <div className="flex flex-1 flex-col justify-between gap-5">
          <div className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-bold text-foreground">{mockVendor.name}</h3>
              <span className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-muted px-2.5 py-1 text-xs font-semibold text-foreground">
                <Star size={12} className="fill-primary text-primary" />
                {mockVendor.rating}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {mockVendor.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MessageCircle size={14} />
              <span>WhatsApp: +91 98765 43210</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl border-2 border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground">
              <Pencil size={15} />
              Edit Listing
            </button>

            <button
              onClick={() => setBoosted(!boosted)}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                boosted
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border-2 border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {boosted ? <Zap size={15} /> : <ZapOff size={15} />}
              {boosted ? "Boost Active" : "Enable Boost"}
            </button>

            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-muted px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-border"
            >
              <ExternalLink size={15} />
              View Public Page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
