"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import VendorCard from "@/components/vendor-card";
import { vendors, CATEGORIES, SORT_OPTIONS } from "@/lib/vendors";

export default function VendorDirectory() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("rating");

  const filteredVendors = useMemo(() => {
    let result = [...vendors];

    // Filter by search
    if (search.trim()) {
      result = result.filter((v) =>
        v.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by category
    if (category !== "All") {
      result = result.filter((v) => v.category === category);
    }

    // Sort
    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sort === "boosted") {
      result.sort((a, b) => (b.boosted ? 1 : 0) - (a.boosted ? 1 : 0));
    } else if (sort === "newest") {
      result.sort((a, b) => new Date(b.joined) - new Date(a.joined));
    }

    return result;
  }, [search, category, sort]);

  return (
    <section id="vendors" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Local Vendor Directory
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
            Browse through our curated list of verified local businesses. Each
            vendor is handpicked to ensure an authentic Nashik experience.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search vendors by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-input bg-card py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="flex items-center gap-3">
            {/* Category filter */}
            <div className="relative">
              <SlidersHorizontal
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="appearance-none rounded-xl border border-input bg-card py-3 pl-10 pr-10 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort dropdown */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none rounded-xl border border-input bg-card py-3 pl-4 pr-10 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  Sort: {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category pills (desktop) */}
        <div className="mb-8 hidden flex-wrap gap-2 md:flex">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-xl px-5 py-2 text-sm font-medium transition-all ${
                category === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground border border-border hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vendor grid */}
        {filteredVendors.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card py-16">
            <p className="text-lg font-medium text-foreground">
              No vendors found
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
