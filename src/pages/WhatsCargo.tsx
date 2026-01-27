import Header from "@/whatscargo-components/Header";
import HeroSection from "@/whatscargo-components/HeroSection";
import HowItWorks from "@/whatscargo-components/HowItWorks";
import KeyFeatures from "@/whatscargo-components/KeyFeatures";
import PricingComparison from "@/whatscargo-components/PricingComparison";
import CreditsSystem from "@/whatscargo-components/CreditsSystem";
import AnalyticsSection from "@/whatscargo-components/AnalyticsSection";
import CTASection from "@/whatscargo-components/CTASection";
import Footer from "@/whatscargo-components/Footer";

export function WhatsCargo() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="features">
          <KeyFeatures />
        </section>
        <section id="pricing">
          <PricingComparison />
        </section>
        <CreditsSystem />
        <AnalyticsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
