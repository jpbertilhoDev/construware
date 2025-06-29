import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { SystemShowcase } from "@/components/sections/system-showcase";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { AIConsultant } from "@/components/ai-consultant";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <SystemShowcase />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <AIConsultant />
    </div>
  );
}
