"use client";

import { useState } from "react";
import ItineraryForm from "../../components/itinerary-form";
import ItineraryResults from "../../components/itinerary-results";
import ItineraryHero from '../../components/itinerary-hero';

export default function ItineraryPage() {
  const [showResults, setShowResults] = useState(false);

  function handleGenerate() {
    setShowResults(true);

    setTimeout(() => {
      const el = document.getElementById("itinerary-results");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }

  return (
    <>
      <ItineraryHero />
      <ItineraryForm onGenerate={handleGenerate} />
      <div id="itinerary-results">
        <ItineraryResults visible={showResults} />
      </div>
    </>
  );
}
