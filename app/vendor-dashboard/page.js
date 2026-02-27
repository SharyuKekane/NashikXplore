import Header from "@/components/header";
import Footer from "@/components/footer";
import DashboardStats from "@/components/dashboard-stats";
import DashboardListing from "@/components/dashboard-listing";
import DashboardAnalytics from "@/components/dashboard-analytics";
import DashboardBoostCta from "@/components/dashboard-boost-cta";

export const metadata = {
  title: "Vendor Dashboard — NashikXplore",
  description:
    "Manage your NashikXplore vendor listing. Track views, WhatsApp clicks, ratings, and boost your visibility.",
};

export default function VendorDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page header */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-8">
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Vendor Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Welcome back, Mama{"'"}s Misal House. Here{"'"}s how your listing is performing.
            </p>
          </div>
        </section>

        {/* Dashboard content */}
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-10">
          <DashboardStats />
          <DashboardListing />
          <DashboardAnalytics />
          <DashboardBoostCta />
        </div>
      </main>

      <Footer />
    </div>
  );
}
