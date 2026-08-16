import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useStore } from "@/context/StoreContext";
import { formatPrice, products } from "@/lib/catalog";

export default function Checkout() {
  const { cart, clearCart } = useStore();
  const [complete, setComplete] = useState(false);
  const lines = cart.flatMap((item) => {
    const product = products.find((candidate) => candidate.id === item.productId);
    return product ? [{ ...item, product }] : [];
  });
  const subtotal = lines.reduce((total, line) => total + line.product.price * line.quantity, 0);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    setComplete(true);
    clearCart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (complete) {
    return (
      <section className="section-shell flex min-h-[70svh] items-center justify-center py-20 text-center">
        <div className="max-w-2xl">
          <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-accent/18"><Check className="size-7 text-accent-foreground" /></span>
          <p className="eyebrow mt-8">Order request LH-260816</p>
          <h1 className="mt-5 font-display text-5xl leading-tight sm:text-7xl">Your considered edit is reserved.</h1>
          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-muted-foreground">This demonstration order is complete. In a live storefront, a LuxHome advisor would now confirm finishes, access and delivery timing with you.</p>
          <Button asChild size="xl" className="mt-9 rounded-none"><Link to="/shop">Continue exploring <ArrowRight /></Link></Button>
        </div>
      </section>
    );
  }

  if (!lines.length) {
    return <section className="section-shell flex min-h-[60svh] flex-col items-center justify-center py-20 text-center"><h1 className="font-display text-5xl">Your bag is empty.</h1><p className="mt-4 text-muted-foreground">Add a piece before continuing to checkout.</p><Button asChild className="mt-7 rounded-none"><Link to="/shop">Explore the collection</Link></Button></section>;
  }

  return (
    <div className="section-shell py-10 sm:py-16">
      <Link to="/shop" className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground"><ArrowLeft className="size-3.5" />Continue shopping</Link>
      <div className="mt-8 grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <form onSubmit={submit}>
          <p className="eyebrow">Secure checkout</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl">Delivery details</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">No payment will be taken. This interactive demonstration creates a sample order confirmation.</p>

          <div className="mt-10 grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-field"><span>First name</span><input required autoComplete="given-name" /></label>
              <label className="form-field"><span>Last name</span><input required autoComplete="family-name" /></label>
            </div>
            <label className="form-field"><span>Email</span><input required type="email" autoComplete="email" /></label>
            <label className="form-field"><span>Address</span><input required autoComplete="street-address" /></label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-field"><span>Town or city</span><input required autoComplete="address-level2" /></label>
              <label className="form-field"><span>Postcode</span><input required autoComplete="postal-code" /></label>
            </div>
            <label className="form-field"><span>Delivery notes</span><textarea rows={3} placeholder="Access, preferred room or parking details" /></label>
          </div>

          <div className="mt-9 border border-border bg-secondary/50 p-5">
            <div className="flex items-start gap-4"><div className="mt-0.5 size-4 rounded-full border-[4px] border-primary bg-background" /><div><p className="text-sm font-semibold">Complimentary white-glove delivery</p><p className="mt-1 text-xs leading-5 text-muted-foreground">Our team will contact you to agree a delivery date, place each piece in your room and remove all packaging.</p></div></div>
          </div>

          <Button type="submit" size="xl" className="mt-7 w-full rounded-none">Complete demo order <LockKeyhole /></Button>
        </form>

        <aside className="h-fit bg-[#26251f] p-7 text-white sm:p-10 lg:sticky lg:top-28">
          <h2 className="font-display text-3xl">Order summary</h2>
          <div className="mt-7 space-y-5">
            {lines.map(({ product, quantity }) => (
              <div key={product.id} className="grid grid-cols-[80px_1fr_auto] gap-4 border-b border-white/12 pb-5">
                <img src={product.image} alt="" className="aspect-[4/5] size-full object-cover" style={{ objectPosition: product.imagePosition }} />
                <div><p className="font-display text-base">{product.name}</p><p className="mt-1 text-xs text-white/48">Qty {quantity} · {product.colour}</p></div>
                <p className="text-xs font-semibold">{formatPrice(product.price * quantity)}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 space-y-3 text-sm"><div className="flex justify-between text-white/58"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div><div className="flex justify-between text-white/58"><span>Delivery</span><span>Complimentary</span></div><div className="flex justify-between border-t border-white/15 pt-4 font-semibold"><span>Total</span><span>{formatPrice(subtotal)}</span></div></div>
          <p className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-white/45"><LockKeyhole className="size-3.5" />Demonstration checkout · No payment taken</p>
        </aside>
      </div>
    </div>
  );
}
