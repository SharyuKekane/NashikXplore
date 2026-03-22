import { Clock, ArrowRight, MapPin } from "lucide-react";

export default function ItineraryStopCard({ stop, index }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={stop.image}
          alt={`${stop.name} in Nashik`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent" />

        {/* Stop number */}
        <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground shadow-sm">
          {index + 1}
        </span>

        {/* Category badge */}
        <span className="absolute right-3 top-3 rounded-lg bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
          {stop.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold leading-snug text-foreground">
            {stop.name}
          </h3>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-muted px-2.5 py-1 text-xs font-semibold text-foreground">
            <Clock size={12} className="text-primary" />
            {stop.duration}
          </span>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {stop.description}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-primary px-4 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground">
            View Details
            <ArrowRight size={14} />
          </button>
          <a
            href={stop.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-md"
          >
            <MapPin size={16} />
            Open in Maps
          </a>
        </div>
      </div>
    </div>
  );
}
