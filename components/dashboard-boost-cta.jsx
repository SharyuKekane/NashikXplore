import { Zap, ArrowRight, CheckCircle } from "lucide-react";

const BENEFITS = [
  "Priority placement in vendor directory",
  "Highlighted card with Boosted badge",
  "2x more visibility in search results",
  "Weekly analytics email report",
];

export default function DashboardBoostCta() {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-xl font-bold text-foreground">Upgrade Your Listing</h2>

      <div className="relative overflow-hidden rounded-xl border-2 border-primary bg-primary/5 p-6 sm:p-8">
        {/* Decorative background element */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10" />
        <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-primary/10" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Zap size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Boost Your Listing</h3>
                <p className="text-sm text-muted-foreground">Stand out and reach more travelers</p>
              </div>
            </div>

            <ul className="flex flex-col gap-2.5">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2.5 text-sm text-foreground">
                  <CheckCircle size={16} className="shrink-0 text-primary" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-3 lg:items-end">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-primary">&#8377;499</span>
              <span className="text-sm text-muted-foreground">/month</span>
            </div>
            <button className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg">
              Upgrade Now
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
