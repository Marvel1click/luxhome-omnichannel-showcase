import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/luxhome-hero.jpg";

export const FinalCTA = () => {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24 lg:py-28">
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 -z-20 size-full object-cover opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-primary/82" />

      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="reveal">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="eyebrow">Ready to Transform?</span>
            </div>
            <h2 className="text-5xl font-semibold leading-tight sm:text-6xl">
              Let's build your next
              <span className="block text-accent">success story.</span>
            </h2>
          </div>

          <div className="reveal animation-delay-200 lg:max-w-xl lg:justify-self-end">
            <p className="text-base leading-8 text-primary-foreground/78 sm:text-lg">
              We help ambitious brands turn complex digital requirements into premium web experiences
              that drive growth, confidence, and lasting business impact.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="premium" size="xl">
                <a href="https://www.digitalmarvels.tech" target="_blank" rel="noopener noreferrer">
                  Start a Project
                  <ArrowRight data-icon="inline-end" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-primary-foreground/25 bg-primary/35 text-primary-foreground hover:border-accent hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href="https://www.digitalmarvels.tech/portfolio" target="_blank" rel="noopener noreferrer">
                  View Our Work
                  <ExternalLink data-icon="inline-end" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
