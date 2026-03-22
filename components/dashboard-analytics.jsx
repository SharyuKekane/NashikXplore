"use client";

const weeklyData = [
  { label: "Mon", views: 68, clicks: 22 },
  { label: "Tue", views: 85, clicks: 30 },
  { label: "Wed", views: 120, clicks: 45 },
  { label: "Thu", views: 95, clicks: 38 },
  { label: "Fri", views: 140, clicks: 52 },
  { label: "Sat", views: 190, clicks: 71 },
  { label: "Sun", views: 175, clicks: 64 },
];

const maxValue = Math.max(...weeklyData.map((d) => d.views));

export default function DashboardAnalytics() {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Weekly Analytics</h2>
        <span className="text-sm text-muted-foreground">Last 7 days</span>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        {/* Legend */}
        <div className="mb-6 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-primary" />
            <span className="text-sm text-muted-foreground">Views</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-accent" />
            <span className="text-sm text-muted-foreground">WhatsApp Clicks</span>
          </div>
        </div>

        {/* Bar chart (CSS only) */}
        <div className="flex items-end gap-3 sm:gap-5">
          {weeklyData.map((day) => (
            <div key={day.label} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex w-full items-end justify-center gap-1" style={{ height: "180px" }}>
                {/* Views bar */}
                <div
                  className="w-full max-w-5 rounded-t-md bg-primary transition-all duration-500"
                  style={{
                    height: `${(day.views / maxValue) * 100}%`,
                  }}
                  title={`${day.views} views`}
                />
                {/* Clicks bar */}
                <div
                  className="w-full max-w-5 rounded-t-md bg-accent transition-all duration-500"
                  style={{
                    height: `${(day.clicks / maxValue) * 100}%`,
                  }}
                  title={`${day.clicks} clicks`}
                />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{day.label}</span>
            </div>
          ))}
        </div>

        {/* Summary row */}
        <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Total Views</span>
            <span className="text-lg font-bold text-foreground">
              {weeklyData.reduce((sum, d) => sum + d.views, 0).toLocaleString()}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-sm text-muted-foreground">Total Clicks</span>
            <span className="text-lg font-bold text-foreground">
              {weeklyData.reduce((sum, d) => sum + d.clicks, 0).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
