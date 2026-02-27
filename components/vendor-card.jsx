import { Star, Zap, MessageCircle, ArrowRight } from "lucide-react";

export default function VendorCard({ vendor }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={vendor.image}
          alt={`${vendor.name} — ${vendor.category} vendor in Nashik`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent" />

        {/* Category badge */}
        <span className="absolute left-3 top-3 rounded-lg bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
          {vendor.category}
        </span>

        {/* Boosted badge */}
        {vendor.boosted && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            <Zap size={12} />
            Boosted
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Name & Rating */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold leading-snug text-foreground">
            {vendor.name}
          </h3>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-muted px-2.5 py-1 text-xs font-semibold text-foreground">
            <Star size={12} className="fill-primary text-primary" />
            {vendor.rating}
          </span>
        </div>

        {/* Description */}
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {vendor.description}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <a
            href={`https://wa.me/${vendor.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-[#FFFFFF] transition-all hover:bg-[#1EBE5D] hover:shadow-md"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-primary px-4 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground">
            View Details
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
