import AdminMetrics from "@/components/adminmetrics";
import AdminVendorTable from "@/components/adminvendortable";
import AdminCrowdData from "@/components/admincrowddata";
import AdminItineraryLogs from "@/components/adminitinerarylogs";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Admin Panel — NashikXplore",
  description: "Manage vendors, monitor crowd data, and review AI itinerary logs.",
};

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      {/* Page header */}
      <div className="mb-10 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Shield size={20} className="text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">
            Admin Control Panel
          </h1>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Monitor platform activity, manage vendor approvals, and oversee crowd intelligence.
        </p>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-10">
        <AdminMetrics />
        <AdminVendorTable />
        <AdminCrowdData />
        <AdminItineraryLogs />
      </div>
    </div>
  );
}
