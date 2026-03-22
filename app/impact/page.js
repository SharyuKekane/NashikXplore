"use client";

import { useEffect, useRef, useState } from "react";
import {
  Target,
  Globe,
  TrendingUp,
  Heart,
  Briefcase,
  Users,
  IndianRupee,
  Store,
  Landmark,
  ArrowRight,
  Handshake,
  Sparkles,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

/* ─────────────── animated counter hook ─────────────── */
function useCounter(end, duration = 2000) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          function tick(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { value, ref };
}

/* ─────────────── cultural pattern SVG ─────────────── */
const PATTERN_SVG = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F4EDE4' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

/* ─────────────── SDG goals ─────────────── */
const SDG_GOALS = [
  {
    icon: Briefcase,
    title: "Decent Work",
    description:
      "Creating sustainable employment by connecting local vendors to a global audience of travelers seeking authentic experiences.",
  },
  {
    icon: TrendingUp,
    title: "Economic Growth",
    description:
      "Driving tourism revenue directly into local communities, ensuring artisans and small businesses capture the value they create.",
  },
  {
    icon: Globe,
    title: "Inclusive Tourism",
    description:
      "Promoting responsible tourism that respects local culture, empowers communities, and distributes economic benefit equitably.",
  },
];

/* ─────────────── impact stats ─────────────── */
const STATS = [
  { label: "Local Vendors Onboarded", end: 150, suffix: "+", icon: Store },
  {
    label: "Monthly Tourist Connections",
    end: 4200,
    suffix: "+",
    icon: Users,
  },
  {
    label: "Revenue Generated (Lakhs)",
    end: 18,
    prefix: "\u20B9",
    suffix: "L+",
    icon: IndianRupee,
  },
  { label: "Artisan Families Supported", end: 85, suffix: "+", icon: Heart },
];

/* ─────────────── vendor benefits ─────────────── */
const VENDOR_BENEFITS = [
  {
    icon: Sparkles,
    title: "Zero-Cost Visibility",
    description:
      "Free listing on our platform gives vendors instant digital presence without any upfront investment or subscription fees.",
  },
  {
    icon: Handshake,
    title: "Direct Customer Access",
    description:
      "WhatsApp integration connects tourists directly with vendors, eliminating middlemen and preserving full profit margins.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Credibility",
    description:
      "Verified badge system and authentic reviews build trust, helping first-time visitors confidently choose local businesses.",
  },
  {
    icon: TrendingUp,
    title: "Growth Analytics",
    description:
      "Simple dashboard showing profile views, customer inquiries, and seasonal trends helps vendors plan and grow strategically.",
  },
];

/* ─────────────── cultural pillars ─────────────── */
const CULTURE_PILLARS = [
  {
    title: "Kumbh Mela Heritage",
    description:
      "Nashik hosts one of the four sacred Kumbh Mela gatherings. We document and promote the spiritual traditions that draw millions.",
  },
  {
    title: "Wine Country Legacy",
    description:
      "India's wine capital thrives in Nashik. We connect travelers with vineyard artisans keeping this modern tradition alive.",
  },
  {
    title: "Warli Art Traditions",
    description:
      "Ancient tribal art forms passed through generations find new audiences as we spotlight the artisans behind the brushstrokes.",
  },
  {
    title: "Culinary Roots",
    description:
      "From misal pav to sabudana vada, Nashik's food heritage is preserved by the street vendors and home cooks we proudly feature.",
  },
];

/* ═══════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════ */
export default function ImpactPage() {
  return (
    <>
      <ImpactHero />
      <SDGSection />
      <StatsSection />
      <VendorBenefits />
      <CulturalPreservation />
      <InvestorCTA />
    </>
  );
}

/* ─────────────── hero ─────────────── */
function ImpactHero() {
  return (
    <section className="relative overflow-hidden bg-accent py-24 md:py-36">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: PATTERN_SVG }}
      />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            <Target size={14} />
            UN SDG 8 Aligned
          </span>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-accent-foreground md:text-6xl">
            Our Impact on Nashik
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-accent-foreground/80 md:text-xl">
            Every vendor listing, every tourist connection, and every rupee
            spent locally creates a ripple of economic opportunity and cultural
            preservation.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── SDG 8 section ─────────────── */
function SDGSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center gap-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <Globe size={28} className="text-primary" />
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Aligned with SDG 8
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            The United Nations Sustainable Development Goal 8 promotes sustained,
            inclusive economic growth, full and productive employment, and decent
            work for all. NashikXplore is built on this foundation.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid gap-6 md:grid-cols-3">
          {SDG_GOALS.map((goal) => (
            <div
              key={goal.title}
              className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <goal.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {goal.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── stats section ─────────────── */
function StatsSection() {
  return (
    <section className="border-y border-border bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Impact in Numbers
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Real progress measured in livelihoods uplifted, connections forged,
            and communities strengthened.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, end, prefix, suffix, icon: Icon }) {
  const { value, ref } = useCounter(end);
  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-8 text-center"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
        <Icon size={24} className="text-primary" />
      </div>
      <span className="font-mono text-4xl font-bold tracking-tight text-foreground">
        {prefix || ""}
        {value.toLocaleString("en-IN")}
        {suffix || ""}
      </span>
      <span className="text-sm font-medium text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

/* ─────────────── vendor benefits ─────────────── */
function VendorBenefits() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
          {/* Image side */}
          <div className="relative flex-shrink-0 lg:w-5/12">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/impact-vendors.jpg"
                alt="Local vendors of Nashik in a vibrant market"
                className="h-80 w-full object-cover lg:h-[480px]"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 shadow-lg md:bottom-6 md:right-6">
              <Store size={18} className="text-primary" />
              <span className="text-sm font-bold text-foreground">
                150+ Vendors Empowered
              </span>
            </div>
          </div>

          {/* Content side */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                How Local Vendors Benefit
              </h2>
              <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
                NashikXplore removes the barriers that keep talented local
                businesses invisible to travelers. Here is what changes when a
                vendor joins our platform.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {VENDOR_BENEFITS.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <benefit.icon size={20} className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-bold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── cultural preservation ─────────────── */
function CulturalPreservation() {
  return (
    <section className="border-y border-border bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-16 lg:flex-row-reverse lg:items-center lg:gap-20">
          {/* Image side */}
          <div className="relative flex-shrink-0 lg:w-5/12">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/impact-culture.jpg"
                alt="Indian artisans preserving traditional craft in Nashik"
                className="h-80 w-full object-cover lg:h-[480px]"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 shadow-lg md:bottom-6 md:left-6">
              <BookOpen size={18} className="text-primary" />
              <span className="text-sm font-bold text-foreground">
                Living Heritage
              </span>
            </div>
          </div>

          {/* Content side */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Preserving Culture, One Story at a Time
              </h2>
              <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
                Nashik is not just a destination -- it is a living archive of
                Indian civilization. From sacred ghats to tribal art, every
                tradition we spotlight is a tradition we help preserve.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {CULTURE_PILLARS.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="flex flex-col gap-2 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-bold text-foreground">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── investor CTA ─────────────── */
function InvestorCTA() {
  return (
    <section className="relative overflow-hidden bg-accent py-24 md:py-32">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: PATTERN_SVG }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20">
            <Landmark size={32} className="text-primary-foreground" />
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-accent-foreground md:text-5xl">
            Invest in Nashik{"'"}s Future
          </h2>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-accent-foreground/80">
            NashikXplore is building the digital infrastructure for
            hyper-local tourism in India. We are looking for investors and
            partners who believe that empowering communities is the most
            sustainable growth strategy.
          </p>

          {/* Key highlights */}
          <div className="grid w-full max-w-lg gap-4 sm:grid-cols-3">
            {[
              { label: "Scalable Model", value: "50+ cities" },
              { label: "Revenue Growth", value: "4x YoY" },
              { label: "Unit Economics", value: "Positive" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-accent-foreground/10 bg-accent-foreground/5 px-4 py-4"
              >
                <div className="font-mono text-lg font-bold text-accent-foreground">
                  {item.value}
                </div>
                <div className="text-xs text-accent-foreground/60">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="mailto:investors@nashikxplore.in"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              <Handshake size={18} />
              Partner With Us
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-accent-foreground/30 px-8 py-4 text-base font-semibold text-accent-foreground transition-all hover:border-accent-foreground/60 hover:bg-accent-foreground/10"
            >
              Download Pitch Deck
              <ArrowRight size={18} />
            </a>
          </div>

          <p className="text-sm text-accent-foreground/50">
            SDG 8 aligned. Impact-driven growth. Community-first approach.
          </p>
        </div>
      </div>
    </section>
  );
}
