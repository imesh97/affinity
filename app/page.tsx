import CtaSection from "@/components/CtaSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import MVPSection from "@/components/MVPSection";
import SolutionsSection from "@/components/SolutionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default async function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <SolutionsSection />
      <MVPSection />
      <FeaturesSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
