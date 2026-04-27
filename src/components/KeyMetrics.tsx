import { ArrowRight, Gauge, PackageCheck, Sparkles, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  {
    value: "150%",
    label: "Online sales growth",
    description: "First quarter after launch",
    icon: TrendingUp,
  },
  {
    value: "100%",
    label: "Unified inventory",
    description: "Across store and web channels",
    icon: PackageCheck,
  },
  {
    value: "300%",
    label: "Engagement increase",
    description: "With AR preview interactions",
    icon: Sparkles,
  },
  {
    value: "95%",
    label: "Customer satisfaction",
    description: "Post-implementation survey",
    icon: Users,
  },
  {
    value: "40%",
    label: "Faster order fulfillment",
    description: "Across connected channels",
    icon: Gauge,
  },
];

export const KeyMetrics = () => {
  return (
    <section id="results" className="gradient-panel py-20 text-primary-foreground sm:py-24 lg:py-28">
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="reveal">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="eyebrow">The Results</span>
            </div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Measurable business impact for a premium retail brand.
            </h2>
          </div>

          <Button asChild variant="outline" size="lg" className="w-fit border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground hover:border-accent hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <a href="#case-study">
              View Project Details
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <article
                key={metric.label}
                className="group reveal border-l border-primary-foreground/14 px-5 py-4 transition-luxury hover:border-accent"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <Icon className="mb-5 size-8 text-accent transition-luxury group-hover:-translate-y-0.5" aria-hidden="true" />
                <div className="text-5xl font-semibold leading-none text-primary-foreground">{metric.value}</div>
                <h3 className="mt-4 text-base font-semibold text-accent">{metric.label}</h3>
                <p className="mt-2 text-sm leading-6 text-primary-foreground/65">{metric.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
