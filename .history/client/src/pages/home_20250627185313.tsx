import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { SystemShowcase } from "@/components/sections/system-showcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <FeaturesSection />
      <SystemShowcase />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
    </div>
  );
}
