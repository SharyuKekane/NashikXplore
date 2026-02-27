"use client";

import { useState } from "react";
import { CheckCircle, XCircle, Zap, Clock, ShieldCheck, ShieldX } from "lucide-react";

const initialVendors = [
  {
    id: 1,
    name: "Mama's Misal House",
    category: "Food",
    verification: "verified",
    boost: true,
    status: null,
  },
  {
    id: 2,
    name: "Godavari Heritage Walk",
    category: "Experience",
    verification: "verified",
    boost: false,
    status: null,
  },
  {
    id: 3,
    name: "Nashik Pottery Studio",
    category: "Handicraft",
    verification: "pending",
    boost: false,
    status: null,
  },
  {
    id: 4,
    name: "Ramkund Guest House",
    category: "Stay",
    verification: "pending",
    boost: false,
    status: null,
  },
  {
    id: 5,
    name: "Trimbak Temple Tours",
    category: "Spiritual",
    verification: "verified",
    boost: true,
    status: null,
  },
  {
    id: 6,
    name: "Warli Art Collective",
    category: "Handicraft",
    verification: "pending",
    boost: false,
    status: null,
  },
  {
    id: 7,
    name: "Sula Vineyard Experience",
    category: "Experience",
    verification: "verified",
    boost: true,
    status: null,
  },
];

function VerificationBadge({ status }) {
  if (status === "verified") {
    return (
      <span className="inline-flex items-center gap-1 rounded-lg bg-[#25D366]/10 px-2.5 py-1 text-xs font-semibold text-[#25D366]">
        <ShieldCheck size={12} />
        Verified
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
      <Clock size={12} />
      Pending
    </span>
  );
}

function BoostBadge({ active }) {
  if (active) {
    return (
      <span className="inline-flex items-center gap-1 rounded-lg bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
        <Zap size={12} />
        Boosted
      </span>
    );
  }
  return (
    <span className="text-xs text-muted-foreground">--</span>
  );
}

function StatusBadge({ status }) {
  if (status === "approved") {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#25D366]">
        <CheckCircle size={14} />
        Approved
      </span>
    );
  }
  if (status === "rejected") {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-destructive">
        <ShieldX size={14} />
        Rejected
      </span>
    );
  }
  return null;
}

export default function AdminVendorTable() {
  const [vendors, setVendors] = useState(initialVendors);

  function handleAction(id, action) {
    setVendors((prev) =>
      prev.map((v) => (v.id === id ? { ...v, status: action } : v))
    );
  }

  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Vendor Approvals</h2>
        <span className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {vendors.filter((v) => v.verification === "pending" && !v.status).length} pending
        </span>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-card">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Vendor Name
              </th>
              <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Category
              </th>
              <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Verification
              </th>
              <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Boost
              </th>
              <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor) => (
              <tr
                key={vendor.id}
                className="border-b border-border last:border-0 transition-colors hover:bg-muted/30"
              >
                <td className="px-5 py-4 font-medium text-foreground">
                  {vendor.name}
                </td>
                <td className="px-5 py-4">
                  <span className="rounded-lg bg-muted px-2.5 py-1 text-xs font-medium text-foreground">
                    {vendor.category}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <VerificationBadge status={vendor.verification} />
                </td>
                <td className="px-5 py-4">
                  <BoostBadge active={vendor.boost} />
                </td>
                <td className="px-5 py-4">
                  {vendor.status ? (
                    <StatusBadge status={vendor.status} />
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleAction(vendor.id, "approved")}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#25D366]/10 px-3 py-1.5 text-xs font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/20"
                      >
                        <CheckCircle size={14} />
                        Approve
                      </button>
                      <button
                        onClick={() => handleAction(vendor.id, "rejected")}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-destructive/10 px-3 py-1.5 text-xs font-semibold text-destructive transition-colors hover:bg-destructive/20"
                      >
                        <XCircle size={14} />
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
