"use client";

import { Route, Clock, User } from "lucide-react";

const logs = [
  {
    id: 1,
    user: "Tourist #2847",
    interests: "Spiritual, Food",
    duration: "Full Day",
    stops: 6,
    generated: "2 hours ago",
  },
  {
    id: 2,
    user: "Tourist #2846",
    interests: "Vineyard, Experience",
    duration: "Half Day",
    stops: 4,
    generated: "5 hours ago",
  },
  {
    id: 3,
    user: "Tourist #2845",
    interests: "Heritage, Handicraft",
    duration: "2 Days",
    stops: 9,
    generated: "8 hours ago",
  },
  {
    id: 4,
    user: "Tourist #2844",
    interests: "Food, Experience",
    duration: "Half Day",
    stops: 3,
    generated: "1 day ago",
  },
  {
    id: 5,
    user: "Tourist #2843",
    interests: "Spiritual, Heritage",
    duration: "Full Day",
    stops: 7,
    generated: "1 day ago",
  },
];

export default function AdminItineraryLogs() {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">
          AI Itinerary Logs
        </h2>
        <span className="text-sm text-muted-foreground">
          {logs.length} recent generations
        </span>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-card">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                User
              </th>
              <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Interests
              </th>
              <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Duration
              </th>
              <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Stops
              </th>
              <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Generated
              </th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr
                key={log.id}
                className="border-b border-border last:border-0 transition-colors hover:bg-muted/30"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-muted-foreground" />
                    <span className="font-medium text-foreground">
                      {log.user}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="flex flex-wrap gap-1.5">
                    {log.interests.split(", ").map((interest) => (
                      <span
                        key={interest}
                        className="rounded-lg bg-muted px-2 py-0.5 text-xs font-medium text-foreground"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock size={13} />
                    <span className="text-xs">{log.duration}</span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1.5">
                    <Route size={13} className="text-primary" />
                    <span className="text-sm font-semibold text-foreground">
                      {log.stops}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4 text-xs text-muted-foreground">
                  {log.generated}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
