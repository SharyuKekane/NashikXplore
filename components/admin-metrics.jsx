"use client";

import { Store, Zap, Clock, Users } from "lucide-react";

const metrics = [
  {
    label: "Total Vendors",
    value: "142",
    change: "+8 this week",
    icon: Store,
  },
  {
    label: "Boosted Listings",
    value: "38",
    change: "26.7% of total",
    icon: Zap,
  },
  {
    label: "Pending Approvals",
    value: "12",
    change: "5 new today",
    icon: Clock,
    highlight: true,
  },
  {
    label: "Active Users",
    value: "3,847",
    change: "+15.3% this month",
    icon: Users,
  },
];

export default function AdminMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div
            key={metric.label}
            className={`flex flex-col gap-3 rounded-xl border p-5 transition-shadow hover:shadow-md ${
              metric.highlight
                ? "border-primary bg-primary/5"
                : "border-border bg-card"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                {metric.label}
              </span>
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  metric.highlight
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
                  metric.highlight ? "text-primary" : "text-foreground"
                }`}
              >
                {metric.value}
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {metric.change}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
