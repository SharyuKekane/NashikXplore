"use client";

import { Eye, MessageCircle, Star, Zap } from "lucide-react";

const stats = [
  {
    label: "Total Views",
    value: "1,248",
    change: "+12.5%",
    positive: true,
    icon: Eye,
  },
  {
    label: "WhatsApp Clicks",
    value: "364",
    change: "+8.2%",
    positive: true,
    icon: MessageCircle,
  },
  {
    label: "Rating",
    value: "4.8",
    change: "+0.2",
    positive: true,
    icon: Star,
  },
  {
    label: "Boost Status",
    value: "Active",
    change: "Expires in 12 days",
    positive: null,
    icon: Zap,
  },
];

export default function DashboardStats() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const isBoost = stat.label === "Boost Status";
          const isActive = stat.value === "Active";

          return (
            <div
              key={stat.label}
              className={`flex flex-col gap-3 rounded-xl border p-5 transition-shadow hover:shadow-md ${
                isBoost && isActive
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </span>
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    isBoost && isActive
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Icon size={18} />
                </div>
              </div>

              <div className="flex items-end justify-between gap-2">
                <span
                  className={`text-2xl font-bold ${
                    isBoost && isActive ? "text-primary" : "text-foreground"
                  }`}
                >
                  {stat.value}
                </span>
                {stat.positive !== null ? (
                  <span
                    className={`text-xs font-semibold ${
                      stat.positive ? "text-[#25D366]" : "text-destructive"
                    }`}
                  >
                    {stat.change}
                  </span>
                ) : (
                  <span className="text-xs font-medium text-muted-foreground">
                    {stat.change}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
