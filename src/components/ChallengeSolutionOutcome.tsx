import {
  CheckCircle2,
  Gem,
  Layers3,
  RefreshCw,
  ScanLine,
  ShoppingBag,
  Smartphone,
  Target,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const caseStudyItems = [
  {
    title: "Overview",
    copy: "LuxHome is a luxury furniture retailer that needed a credible online channel without losing the trust, richness, and guided feel of its showroom experience.",
  },
  {
    title: "Problem",
    copy: "Customers wanted to browse remotely, compare pieces, check availability, and understand scale in their own homes, but the brand had no digital experience to support those decisions.",
  },
  {
    title: "Solution",
    copy: "We designed and positioned a Shopify Plus commerce experience with AR room preview, curated product journeys, unified inventory, and premium brand storytelling.",
  },
  {
    title: "Key features",
    copy: "Immersive product galleries, AR room preview, stock-aware product pages, showroom-to-online handoff, collection landing pages, and conversion-focused CTAs.",
  },
  {
    title: "Tech stack",
    copy: "React, TypeScript, Vite, Tailwind CSS, shadcn/ui, Shopify Plus architecture, AR preview integration, and real-time inventory synchronization patterns.",
  },
  {
    title: "Design decisions",
    copy: "Warm editorial typography, restrained brass accents, dark premium contrast sections, larger product imagery, low-friction CTAs, and mobile-first device storytelling.",
  },
  {
    title: "Business value",
    copy: "The experience creates a measurable digital sales channel, supports higher purchase confidence, reduces operational fragmentation, and gives sales teams better product context.",
  },
  {
    title: "Final result",
    copy: "A client-ready omnichannel case study that presents LuxHome as a premium retailer with a scalable, polished, and conversion-aware digital commerce platform.",
  },
];

const featureHighlights = [
  { label: "Shopify Plus", icon: ShoppingBag },
  { label: "AR Room Preview", icon: ScanLine },
  { label: "Inventory Sync", icon: RefreshCw },
  { label: "Luxury UX", icon: Gem },
  { label: "Mobile Commerce", icon: Smartphone },
];

export const ChallengeSolutionOutcome = () => {
  return (
    <section id="case-study" className="gradient-subtle py-20 sm:py-24 lg:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="reveal">
            <div className="sticky top-28 rounded-lg border border-primary/10 gradient-panel p-7 text-primary-foreground shadow-2xl sm:p-9">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <span className="eyebrow">Case Study</span>
              </div>
              <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                From showroom dependency to a complete omnichannel commerce system.
              </h2>
              <p className="mt-6 text-base leading-8 text-primary-foreground/72">
                The original project idea remains intact: modernize a luxury furniture retailer. The
                upgraded presentation now makes the strategy, implementation value, and client outcome
                easier for prospects to understand.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {featureHighlights.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <Badge key={feature.label} variant="secondary" className="gap-2 border border-primary-foreground/10 bg-primary-foreground/10 px-3 py-1.5 text-primary-foreground">
                      <Icon className="size-3.5" aria-hidden="true" />
                      {feature.label}
                    </Badge>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {caseStudyItems.map((item, index) => (
              <article
                key={item.title}
                className="group reveal rounded-lg border border-border/80 bg-card p-6 shadow-sm transition-luxury hover:-translate-y-1 hover:border-accent/55 hover:shadow-xl"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-md border border-accent/35 bg-accent/10 text-accent transition-luxury group-hover:bg-accent group-hover:text-accent-foreground">
                    {index === 0 ? (
                      <Layers3 className="size-5" aria-hidden="true" />
                    ) : index === 1 ? (
                      <Target className="size-5" aria-hidden="true" />
                    ) : (
                      <CheckCircle2 className="size-5" aria-hidden="true" />
                    )}
                  </span>
                  <span className="text-sm font-semibold text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
