import { AnimatedPage } from "@/src/components/motion/AnimatedPage";
import { AuthorityStripSection } from "@/src/components/home/AuthorityStripSection";
import { CTASection } from "@/src/components/home/CTASection";
import { CategoriesSection } from "@/src/components/home/CategoriesSection";
import { ClubEvaluationsSection } from "@/src/components/home/ClubEvaluationsSection";
import { HeroSection } from "@/src/components/home/HeroSection";
import { TeachersSection } from "@/src/components/home/TeachersSection";
import { TestimonialsSection } from "@/src/components/home/TestimonialsSection";
import { ValuePillarsSection } from "@/src/components/home/ValuePillarsSection";

export default function Home() {
  return (
    <AnimatedPage>
      <HeroSection />
      <AuthorityStripSection />
      <ValuePillarsSection />
      <ClubEvaluationsSection />
      <CategoriesSection />
      <TeachersSection />
      <TestimonialsSection />
      <CTASection />
    </AnimatedPage>
  );
}
