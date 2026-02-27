"use client";

import { useState } from "react";
import { Users, RefreshCw, MapPin, TrendingUp, TrendingDown } from "lucide-react";

const initialCrowdData = [
  {
    id: 1,
    location: "Trimbakeshwar Temple",
    crowd: "High",
    lastUpdated: "10 min ago",
    visitors: 342,
    trend: "up",
  },
  {
    id: 2,
    location: "Ramkund Ghat",
    crowd: "Medium",
    lastUpdated: "25 min ago",
    visitors: 156,
    trend: "down",
  },
  {
    id: 3,
    location: "Sula Vineyards",
    crowd: "Low",
    lastUpdated: "5 min ago",
    visitors: 48,
    trend: "up",
  },
  {
    id: 4,
    location: "Pandavleni Caves",
    crowd: "Low",
    lastUpdated: "15 min ago",
    visitors: 32,
    trend: "down",
  },
];

const crowdColorMap = {
  High: "bg-destructive/10 text-destructive",
  Medium: "bg-primary/10 text-primary",
  Low: "bg-[#25D366]/10 text-[#25D366]",
};

export default function AdminCrowdData() {
  const [data, setData] = useState(initialCrowdData);
  const [updating, setUpdating] = useState(false);

  function handleUpdate() {
    setUpdating(true);
    setTimeout(() => {
      setData((prev) =>
        prev.map((item) => ({
          ...item,
          visitors: item.visitors + Math.floor(Math.random() * 20 - 10),
          lastUpdated: "Just now",
        }))
      );
      setUpdating(false);
    }, 800);
  }

  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Crowd Data</h2>
        <button
          onClick={handleUpdate}
          disabled={updating}
          className="inline-flex items-center gap-2 rounded-xl border-2 border-primary px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground disabled:opacity-60"
        >
          <RefreshCw size={15} className={updating ? "animate-spin" : ""} />
          {updating ? "Updating..." : "Update Crowd Data"}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  {item.location}
                </span>
              </div>
              <span
                className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${crowdColorMap[item.crowd]}`}
              >
                {item.crowd}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users size={14} className="text-muted-foreground" />
                <span className="text-lg font-bold text-foreground">
                  {item.visitors}
                </span>
                <span className="text-xs text-muted-foreground">visitors</span>
              </div>
              <div className="flex items-center gap-1">
                {item.trend === "up" ? (
                  <TrendingUp size={14} className="text-[#25D366]" />
                ) : (
                  <TrendingDown size={14} className="text-destructive" />
                )}
              </div>
            </div>

            <span className="text-xs text-muted-foreground">
              Last updated: {item.lastUpdated}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
