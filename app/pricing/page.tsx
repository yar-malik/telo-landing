import { SiteHeader } from "@/components/site-header";
import PricingPlansSection from "@/components/pricing-plans";
import { SiteFooter } from "@/components/site-footer";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100">
      <SiteHeader />
      <PricingPlansSection />
      <SiteFooter />
    </main>
  );
}
