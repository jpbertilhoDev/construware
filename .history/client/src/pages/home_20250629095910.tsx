import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { AIIntroSection } from "@/components/sections/ai-intro-section";
import { SystemShowcase } from "@/components/sections/system-showcase";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { AIConsultantAdvanced } from "@/components/ai-consultant-advanced";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AIIntroSection />
      <SystemShowcase />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <AIConsultantAdvanced />
    </div>
  );
}
