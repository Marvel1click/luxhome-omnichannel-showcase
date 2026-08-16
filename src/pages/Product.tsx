import { useState } from "react";
import { ArrowLeft, Check, Minus, Plus, Ruler, ShieldCheck, Truck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { useStore } from "@/context/StoreContext";
import { formatPrice, getProduct, products } from "@/lib/catalog";

export default function Product() {
  const { id } = useParams();
  const product = getProduct(id ?? "");
  const { addToCart, setConsultationOpen } = useStore();
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="section-shell py-24"><h1 className="font-display text-5xl">Piece not found.</h1><Link to="/shop" className="mt-6 inline-flex items-center gap-2 underline"><ArrowLeft className="size-4" />Return to the collection</Link></div>;

  const related = products.filter((candidate) => candidate.category === product.category && candidate.id !== product.id).slice(0, 3);

  return (
    <>
      <div className="section-shell py-6 sm:py-10">
        <Link to={`/collections/${product.category}`} className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"><ArrowLeft className="size-3.5" />Back to {product.category}</Link>
      </div>
      <section className="section-shell grid gap-10 pb-20 lg:grid-cols-[1.14fr_0.86fr] lg:gap-16 lg:pb-28">
        <div className="relative overflow-hidden bg-secondary">
          <img src={product.image} alt={product.name} className="aspect-[4/5] size-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]" style={{ objectPosition: product.imagePosition }} />
          {(product.isNew || product.bestseller) && <span className="absolute left-5 top-5 bg-background/92 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] backdrop-blur">{product.isNew ? "New arrival" : "Bestseller"}</span>}
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">{product.collection}</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.04] sm:text-6xl">{product.name}</h1>
          <p className="mt-5 text-lg font-semibold">{formatPrice(product.price)}</p>
          <p className="mt-7 text-base leading-8 text-muted-foreground">{product.description}</p>

          <div className="mt-8 grid grid-cols-2 gap-4 border-y border-border py-6 text-sm">
            <div><span className="text-xs text-muted-foreground">Material</span><p className="mt-1 font-semibold">{product.material}</p></div>
            <div><span className="text-xs text-muted-foreground">Finish</span><p className="mt-1 font-semibold">{product.colour}</p></div>
          </div>

          <div className="mt-7 flex gap-3">
            <div className="flex h-14 items-center border border-border">
              <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex size-12 items-center justify-center" aria-label="Decrease quantity"><Minus className="size-4" /></button>
              <span className="w-8 text-center text-sm font-semibold">{quantity}</span>
              <button type="button" onClick={() => setQuantity(quantity + 1)} className="flex size-12 items-center justify-center" aria-label="Increase quantity"><Plus className="size-4" /></button>
            </div>
            <Button size="xl" className="h-14 flex-1 rounded-none" onClick={() => addToCart(product.id, quantity)}>Add to bag</Button>
          </div>
          <button type="button" onClick={() => setConsultationOpen(true)} className="mt-4 h-12 w-full border border-foreground text-xs font-semibold uppercase tracking-[0.14em] transition hover:bg-primary hover:text-primary-foreground">Speak to a design advisor</button>

          <div className="mt-9 space-y-3 border-t border-border pt-7">
            {product.details.map((detail) => <div key={detail} className="flex items-center gap-3 text-sm text-muted-foreground"><Check className="size-4 text-accent-foreground" />{detail}</div>)}
          </div>

          <div className="mt-9 grid grid-cols-3 gap-2 border-t border-border pt-7 text-center text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
            <div><Truck className="mx-auto mb-2 size-5" strokeWidth={1.4} />White-glove delivery</div>
            <div><Ruler className="mx-auto mb-2 size-5" strokeWidth={1.4} />Measured placement</div>
            <div><ShieldCheck className="mx-auto mb-2 size-5" strokeWidth={1.4} />Five-year guarantee</div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/55 py-20 sm:py-28">
        <div className="section-shell">
          <div className="mb-10"><p className="eyebrow">Complete the room</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Consider these, too.</h2></div>
          <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{related.map((item) => <ProductCard key={item.id} product={item} />)}</div>
        </div>
      </section>
    </>
  );
}
