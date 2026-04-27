import { useState } from "react";
import { Box, Gem, Network, RefreshCw, ScanLine, ShoppingBag } from "lucide-react";
import heroImage from "@/assets/luxhome-hero.jpg";

const featureSet = [
  {
    title: "Shopify Plus",
    description: "Enterprise commerce foundation built to support high-value furniture purchases.",
    icon: ShoppingBag,
  },
  {
    title: "AR Room Preview",
    description: "Customers can visualize scale, material, and placement before committing.",
    icon: ScanLine,
  },
  {
    title: "Real-time Inventory",
    description: "Stock visibility connects showroom availability with online purchase intent.",
    icon: RefreshCw,
  },
  {
    title: "Premium UX",
    description: "Editorial product storytelling mirrors the confidence of an in-store consultation.",
    icon: Gem,
  },
  {
    title: "Omnichannel Sync",
    description: "A connected journey across browsing, sales assistance, fulfillment, and follow-up.",
    icon: Network,
  },
];

const collections = [
  {
    label: "Living Room",
    headline: "Modular comfort for real spaces",
    product: "Aurelia Sectional",
    stock: "12 showroom-ready configurations",
  },
  {
    label: "Dining",
    headline: "Gathering pieces with concierge context",
    product: "Marble Halo Table",
    stock: "6 finishes synced across locations",
  },
  {
    label: "Bedroom",
    headline: "Quiet luxury with guided material choices",
    product: "Linen Platform Suite",
    stock: "9 curated room packages",
  },
];

export const VisualStorytelling = () => {
  const [activeCollection, setActiveCollection] = useState(collections[0]);

  return (
    <section id="experience" className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="section-shell">
        <div className="mb-14 text-center reveal">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="eyebrow">What We Built</span>
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Key features and capabilities
          </h2>
        </div>

        <div className="mb-16 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {featureSet.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group reveal border-l border-border bg-background px-5 py-2 transition-luxury hover:border-accent"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <Icon className="mb-5 size-7 text-accent transition-luxury group-hover:-translate-y-0.5" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{feature.description}</p>
              </article>
            );
          })}
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="reveal">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="eyebrow">Immersive By Design</span>
            </div>
            <h2 className="text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
              See it.
              <span className="block">Love it.</span>
              <span className="block">Own it.</span>
            </h2>
            <p className="mt-7 max-w-md text-base leading-8 text-muted-foreground">
              AR preview technology turns uncertainty into confidence, helping customers understand
              how premium pieces will look, feel, and fit in their own homes before purchase.
            </p>

            <div className="mt-8 flex flex-wrap gap-2" aria-label="Collection preview selector">
              {collections.map((collection) => (
                <button
                  key={collection.label}
                  type="button"
                  onClick={() => setActiveCollection(collection)}
                  aria-pressed={activeCollection.label === collection.label}
                  className={`rounded-md border px-4 py-2 text-sm font-semibold transition-luxury ${
                    activeCollection.label === collection.label
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-accent hover:text-foreground"
                  }`}
                >
                  {collection.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative min-h-[455px] reveal animation-delay-200 sm:min-h-[530px]">
            <div className="absolute bottom-0 right-0 hidden h-[78%] w-[88%] rounded-lg border border-border bg-card p-4 shadow-2xl lg:block">
              <div className="mb-4 flex items-center justify-between border-b border-border pb-3 text-xs font-semibold text-muted-foreground">
                <span>LUXHOME</span>
                <span>{activeCollection.label}</span>
              </div>
              <div className="grid h-[360px] grid-cols-[1fr_0.55fr] gap-4">
                <div className="overflow-hidden rounded-md">
                  <img src={heroImage} alt="" className="size-full object-cover" />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="rounded-md bg-secondary p-4">
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Box className="size-4 text-accent" aria-hidden="true" />
                      AR Preview
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">{activeCollection.headline}</p>
                  </div>
                  <div className="rounded-md border border-border bg-background p-4">
                    <p className="text-xs font-semibold uppercase text-accent">Featured piece</p>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">{activeCollection.product}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{activeCollection.stock}</p>
                  </div>
                  <div className="mt-auto rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground">
                    View in my room
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-[min(78vw,310px)] rounded-[2rem] border-[10px] border-primary bg-primary shadow-2xl lg:absolute lg:bottom-0 lg:left-0">
              <div className="overflow-hidden rounded-[1.35rem] bg-card">
                <div className="flex items-center justify-between border-b border-border px-4 py-3 text-xs font-semibold text-muted-foreground">
                  <span>LUXHOME</span>
                  <span>AR</span>
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase text-accent">{activeCollection.label}</p>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight text-card-foreground">
                    Luxury made for real life.
                  </h3>
                  <div className="mt-4 overflow-hidden rounded-md">
                    <img src={heroImage} alt="" className="aspect-[4/3] w-full object-cover" />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-md bg-secondary p-3 text-xs font-semibold text-secondary-foreground">
                      Collections
                    </div>
                    <div className="rounded-md bg-primary p-3 text-xs font-semibold text-primary-foreground">
                      Preview AR
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
