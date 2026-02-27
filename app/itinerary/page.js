"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ItineraryHero from "@/components/itinerary-hero";
import ItineraryForm from "@/components/itinerary-form";
import ItineraryResults from "@/components/itinerary-results";

export default function ItineraryPage() {
  const [showResults, setShowResults] = useState(false);

  function handleGenerate() {
    setShowResults(true);

    // Scroll to results after a short delay
    setTimeout(() => {
      const el = document.getElementById("itinerary-results");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ItineraryHero />
        <ItineraryForm onGenerate={handleGenerate} />

        <div id="itinerary-results">
          <ItineraryResults visible={showResults} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
