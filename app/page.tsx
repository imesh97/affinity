import CtaSection from "@/components/CtaSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { PasswordPrompt } from "@/components/PasswordPrompt";
import SolutionsSection from "@/components/SolutionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const loginCookie = cookieStore.get(process.env.PASSWORD_COOKIE!);
  const isLoggedIn = !!loginCookie?.value;

  if (!isLoggedIn) {
    return <PasswordPrompt />;
  }

  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <SolutionsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
