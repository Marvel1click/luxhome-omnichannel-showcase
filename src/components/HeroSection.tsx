import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/luxhome-hero.jpg";

const heroMetrics = [
  { value: "150%", label: "Online sales growth", detail: "First quarter after launch" },
  { value: "100%", label: "Unified inventory", detail: "Across all locations" },
  { value: "300%", label: "AR engagement lift", detail: "Room-preview interactions" },
  { value: "95%", label: "Customer satisfaction", detail: "Post-launch survey" },
];

export const HeroSection = () => {
  return (
    <section id="hero" className="relative isolate min-h-[92svh] overflow-hidden bg-primary pt-28 text-primary-foreground sm:pt-32 lg:min-h-[90svh]">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[64%]">
        <img
          src={heroImage}
          alt="LuxHome luxury living room used for the omnichannel retail case study"
          className="size-full object-cover object-center opacity-60 lg:opacity-95"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      <div className="section-shell relative z-10 flex min-h-[calc(92svh-7rem)] flex-col justify-between gap-16 pb-10 lg:min-h-[calc(90svh-8rem)]">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.68fr)]">
          <div className="max-w-4xl reveal">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-9 bg-accent" />
              <span className="eyebrow">Case Study</span>
            </div>

            <h1 className="max-w-5xl text-4xl font-semibold leading-none text-primary-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
              LuxHome:
              <span className="block">From Brick-and-Mortar</span>
              <span className="block text-accent">to Omnichannel Excellence</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-primary-foreground/82 sm:text-lg">
              We helped a premium furniture retailer modernize its sales experience with Shopify Plus,
              AR room preview, real-time inventory synchronization, and a luxury-first interface built
              for confident high-value purchases.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <a href="#case-study">
                  Explore the Case Study
                  <ArrowRight data-icon="inline-end" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-primary-foreground/25 bg-primary/35 text-primary-foreground hover:border-accent hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href="https://www.digitalmarvels.tech/portfolio" target="_blank" rel="noopener noreferrer">
                  View More Work
                  <ExternalLink data-icon="inline-end" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>

          <div className="hidden self-end justify-self-end lg:block">
            <div className="w-[360px] rounded-lg border border-primary-foreground/12 bg-primary/50 p-4 backdrop-blur-xl reveal animation-delay-200">
              <div className="mb-4 flex items-center justify-between text-sm">
                <span className="text-primary-foreground/70">Launch readiness</span>
                <span className="rounded-full bg-accent px-3 py-1 font-semibold text-accent-foreground">Live</span>
              </div>
              <div className="flex flex-col gap-3">
                {["Shopify Plus migration", "AR preview journey", "Inventory sync", "Client-ready design system"].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-md border border-primary-foreground/10 bg-primary-foreground/10 px-4 py-3">
                    <span className="text-sm text-primary-foreground/82">{item}</span>
                    <span className="size-2 rounded-full bg-accent" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 border-t border-primary-foreground/12 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {heroMetrics.map((metric, index) => (
            <div key={metric.label} className="reveal" style={{ animationDelay: `${300 + index * 90}ms` }}>
              <div className="text-3xl font-semibold leading-none text-primary-foreground sm:text-4xl md:text-5xl">
                {metric.value}
              </div>
              <div className="mt-3 text-sm font-semibold text-primary-foreground">{metric.label}</div>
              <div className="mt-1 text-xs text-primary-foreground/62">{metric.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
