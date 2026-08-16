import { useState } from "react";
import { ArrowRight, Check, MoveRight, Palette, Ruler, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { useStore } from "@/context/StoreContext";
import { collections, featuredProducts } from "@/lib/catalog";
import heroImage from "@/assets/storefront/hero.jpg";
import livingImage from "@/assets/storefront/living.jpg";

const collectionOrder = ["living", "dining", "bedroom"] as const;

export default function Home() {
  const { setConsultationOpen } = useStore();
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      <section className="relative isolate min-h-[calc(100svh-108px)] overflow-hidden bg-primary text-primary-foreground">
        <img src={heroImage} alt="Serene LuxHome living room with curved sofa and dark lounge chair" className="absolute inset-0 -z-20 size-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/72 via-black/28 to-black/5" />
        <div className="section-shell flex min-h-[calc(100svh-108px)] items-end pb-14 pt-24 sm:pb-20 lg:items-center">
          <div className="max-w-3xl animate-fade-up">
            <p className="eyebrow !text-[#d6bd8b]">The Autumn Collection · 2026</p>
            <h1 className="mt-6 text-balance font-display text-5xl font-normal leading-[0.96] sm:text-7xl lg:text-[96px]">
              A quieter kind<br />of luxury.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/74 sm:text-lg">
              Sculptural furniture, natural materials and enduring comfort—considered for the way you live now.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="xl" variant="hero" className="rounded-none border-0 px-9">
                <Link to="/shop">Explore the collection <ArrowRight /></Link>
              </Button>
              <Button size="xl" variant="outline" onClick={() => setConsultationOpen(true)} className="rounded-none border-white/50 bg-black/10 text-white hover:border-white hover:bg-white hover:text-primary">
                Book a consultation
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 lg:flex">
          Scroll to discover <span className="h-px w-12 bg-white/40" />
        </div>
      </section>

      <section className="section-shell py-20 sm:py-28">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Shop by room</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-6xl">Spaces that feel entirely your own.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">A refined edit of honest materials, generous proportions and pieces with the presence to shape a room.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {collectionOrder.map((key, index) => {
            const collection = collections[key];
            return (
              <Link key={key} to={`/collections/${key}`} className={`group relative overflow-hidden ${index === 1 ? "md:mt-12" : ""}`}>
                <div className="aspect-[3/4] overflow-hidden bg-secondary">
                  <img src={collection.image} alt={collection.title} className="size-full object-cover transition duration-700 group-hover:scale-[1.035]" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/72 to-transparent p-6 pt-24 text-white sm:p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">0{index + 1} · Collection</p>
                  <div className="mt-2 flex items-end justify-between gap-5"><h3 className="font-display text-3xl">{collection.shortTitle}</h3><ArrowRight className="size-5 transition group-hover:translate-x-1" /></div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-secondary/58 py-20 sm:py-28">
        <div className="section-shell">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div><p className="eyebrow">The current edit</p><h2 className="mt-4 font-display text-4xl sm:text-6xl">Objects of desire.</h2></div>
            <Link to="/shop" className="hidden items-center gap-3 border-b border-foreground pb-1 text-xs font-semibold uppercase tracking-[0.14em] sm:flex">Shop all <MoveRight className="size-4" /></Link>
          </div>
          <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
          <Button asChild variant="outline" size="lg" className="mt-10 w-full rounded-none sm:hidden"><Link to="/shop">Shop all furniture</Link></Button>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-32">
        <div className="grid items-stretch lg:grid-cols-[1.08fr_0.92fr]">
          <div className="min-h-[480px] overflow-hidden lg:min-h-[690px]"><img src={livingImage} alt="The LuxHome Aurelia modular sofa collection" className="size-full object-cover" /></div>
          <div className="flex flex-col justify-center bg-[#26251f] p-8 text-[#f5f0e7] sm:p-14 lg:p-16">
            <p className="eyebrow !text-[#d6bd8b]">Made for real life</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-6xl">Beautifully composed. Deeply comfortable.</h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-white/62 sm:text-base">Our pieces begin with how a room should feel. Every proportion is refined, every surface considered, and every material chosen to age with character.</p>
            <div className="mt-9 space-y-4 border-t border-white/14 pt-7">
              {["Made by specialist European workshops", "Natural, responsibly sourced materials", "Designed to be lived with for years"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/78"><Check className="size-4 text-[#d6bd8b]" />{item}</div>
              ))}
            </div>
            <Link to="/products/aurelia-modular-sofa" className="mt-9 inline-flex w-fit items-center gap-3 border-b border-[#d6bd8b] pb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#d6bd8b]">Discover Aurelia <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="section-shell grid sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Truck, title: "White-glove delivery", copy: "Placed and assembled in your room." },
            { icon: Palette, title: "Material library", copy: "Complimentary swatches to your door." },
            { icon: Ruler, title: "Space planning", copy: "Expert layouts for considered rooms." },
            { icon: ShieldCheck, title: "Five-year guarantee", copy: "Craftsmanship you can rely on." },
          ].map(({ icon: Icon, title, copy }) => (
            <div key={title} className="border-border px-4 py-10 sm:border-l sm:first:border-l-0 lg:px-7">
              <Icon className="size-6 text-accent-foreground" strokeWidth={1.4} />
              <h3 className="mt-5 font-display text-xl">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-20 text-center sm:py-28">
        <p className="eyebrow">Notes from the showroom</p>
        <h2 className="mx-auto mt-5 max-w-3xl text-balance font-display text-4xl leading-tight sm:text-6xl">A more personal way to furnish your home.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">Join our private list for new collection previews, material stories and invitations to our London showroom.</p>
        {subscribed ? (
          <div className="mx-auto mt-8 flex h-14 max-w-xl items-center justify-center gap-3 border border-accent bg-accent/10 text-sm font-semibold"><Check className="size-4" />You’re on the list. Welcome to LuxHome.</div>
        ) : (
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-2 sm:flex-row" onSubmit={(event) => { event.preventDefault(); setSubscribed(true); }}>
            <input required type="email" aria-label="Email address" placeholder="Email address" className="h-14 flex-1 border border-border bg-transparent px-5 text-sm outline-none focus:border-foreground" />
            <Button type="submit" size="xl" className="rounded-none px-8">Join the list <ArrowRight /></Button>
          </form>
        )}
      </section>
    </>
  );
}
