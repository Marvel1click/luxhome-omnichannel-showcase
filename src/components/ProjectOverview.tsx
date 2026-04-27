import { Box, Store, Trophy, TrendingUp } from "lucide-react";

const overviewCards = [
  {
    title: "The Problem",
    icon: Store,
    copy: "A premium in-store brand was losing digital demand because customers could not browse, plan, or validate big-ticket furniture purchases online.",
  },
  {
    title: "Our Solution",
    icon: Box,
    copy: "A Shopify Plus storefront with AR room preview, rich product storytelling, and real-time stock visibility across physical and digital channels.",
  },
  {
    title: "The Result",
    icon: Trophy,
    copy: "A polished omnichannel journey that reduced purchase friction and made the online experience feel as considered as the showroom.",
  },
  {
    title: "The Impact",
    icon: TrendingUp,
    copy: "Stronger conversion confidence, higher engagement, unified operations, and a scalable retail foundation for future growth.",
  },
];

export const ProjectOverview = () => {
  return (
    <section id="overview" className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="reveal">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="eyebrow">The Story</span>
            </div>
            <h2 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              A luxury retail experience rebuilt for the way customers buy now.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              LuxHome needed to move beyond a showroom-only model without diluting the premium
              feeling that made the brand valuable. The project translated that tactile, consultative
              buying journey into a fast, elegant, and measurable digital experience.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {overviewCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="group reveal rounded-lg border border-border/80 bg-card p-6 shadow-sm transition-luxury hover:-translate-y-1 hover:border-accent/55 hover:shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-8 flex size-11 items-center justify-center rounded-md border border-accent/35 bg-accent/10 text-accent transition-luxury group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-semibold text-card-foreground">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{card.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
