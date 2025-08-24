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
    <div className="min-h-screen">
      <Navigation />
      
      <section id="hero">
        <HeroSection />
      </section>
      
      <section id="overview">
        <ProjectOverview />
      </section>
      
      <section id="challenge">
        <ChallengeSolutionOutcome />
      </section>
      
      <section id="visual">
        <VisualStorytelling />
      </section>
      
      <section id="metrics">
        <KeyMetrics />
      </section>
      
      <section id="testimonial">
        <ClientTestimonial />
      </section>
      
      <section id="cta">
        <FinalCTA />
      </section>
    </div>
  );
};

export default Index;