import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProjectOverview } from "@/components/ProjectOverview";
import { ChallengeSolutionOutcome } from "@/components/ChallengeSolutionOutcome";
import { VisualStorytelling } from "@/components/VisualStorytelling";
import { KeyMetrics } from "@/components/KeyMetrics";
import { ClientTestimonial } from "@/components/ClientTestimonial";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navigation />
      <HeroSection />
      <ProjectOverview />
      <ChallengeSolutionOutcome />
      <VisualStorytelling />
      <KeyMetrics />
      <ClientTestimonial />
      <FinalCTA />
    </main>
  );
};

export default Index;
