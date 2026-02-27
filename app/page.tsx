import Header from "@/components/header";
import Hero from "@/components/hero";
import VendorDirectory from "@/components/vendor-directory";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <VendorDirectory />
      <CallToAction />
      <Footer />
    </main>
  );
}
