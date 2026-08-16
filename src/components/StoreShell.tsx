import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Instagram,
  Menu,
  Minus,
  Package,
  Plus,
  Search,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useStore } from "@/context/StoreContext";
import { formatPrice, products } from "@/lib/catalog";

const navItems = [
  { to: "/shop", label: "Shop" },
  { to: "/collections/living", label: "Living" },
  { to: "/collections/dining", label: "Dining" },
  { to: "/collections/bedroom", label: "Bedroom" },
  { to: "/collections/lighting", label: "Lighting" },
];

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);
  return null;
};

export const StoreShell = () => {
  const {
    cart,
    cartCount,
    cartOpen,
    consultationOpen,
    quickView,
    addToCart,
    removeFromCart,
    setCartOpen,
    setConsultationOpen,
    setQuickView,
    updateQuantity,
  } = useStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [consultationSent, setConsultationSent] = useState(false);

  const cartLines = cart.flatMap((item) => {
    const product = products.find((candidate) => candidate.id === item.productId);
    return product ? [{ ...item, product }] : [];
  });
  const subtotal = cartLines.reduce((total, line) => total + line.product.price * line.quantity, 0);
  const searchResults = searchQuery.trim()
    ? products.filter((product) =>
        `${product.name} ${product.category} ${product.material}`.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : products.slice(0, 5);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <div className="bg-primary px-4 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground sm:text-xs">
        Complimentary white-glove delivery across Great Britain
      </div>

      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-xl">
        <div className="section-shell flex h-[76px] items-center justify-between gap-4">
          <button
            type="button"
            className="flex size-10 items-center justify-start lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
          >
            <Menu className="size-5" />
          </button>

          <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="LuxHome home">
            <span className="flex size-8 items-center justify-center border border-foreground font-display text-base">L</span>
            <span className="font-display text-xl uppercase tracking-[0.2em] sm:text-2xl">LuxHome</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `border-b py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition ${
                    isActive ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex size-10 items-center justify-center transition hover:bg-secondary"
              aria-label="Search catalogue"
            >
              <Search className="size-4.5" />
            </button>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative flex size-10 items-center justify-center transition hover:bg-secondary"
              aria-label={`Shopping bag with ${cartCount} items`}
            >
              <ShoppingBag className="size-4.5" />
              {cartCount > 0 && (
                <span className="absolute right-0 top-0 flex size-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-[#171715] text-[#f1eee8]">
        <div className="section-shell py-16 sm:py-20">
          <div className="grid gap-12 border-b border-white/12 pb-14 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <Link to="/" className="font-display text-3xl uppercase tracking-[0.18em]">LuxHome</Link>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
                Considered furniture for enduring interiors. Designed in London and made by specialist workshops across Europe.
              </p>
              <button
                type="button"
                onClick={() => setConsultationOpen(true)}
                className="mt-7 inline-flex items-center gap-2 border-b border-accent pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent"
              >
                Book a design consultation <ArrowRight className="size-4" />
              </button>
            </div>
            <div>
              <p className="footer-heading">Collections</p>
              <div className="mt-5 flex flex-col gap-3 text-sm text-white/58">
                {navItems.slice(1).map((item) => <Link key={item.to} to={item.to} className="hover:text-white">{item.label}</Link>)}
              </div>
            </div>
            <div>
              <p className="footer-heading">Visit</p>
              <div className="mt-5 space-y-3 text-sm leading-6 text-white/58">
                <p>27 Hanover Mews<br />London, W1S</p>
                <p>Mon–Sat, 10–6<br />Sunday, 11–5</p>
              </div>
            </div>
            <div>
              <p className="footer-heading">Follow</p>
              <div className="mt-5 flex items-center gap-4 text-white/58">
                <a href="#instagram" className="transition hover:text-white" aria-label="Instagram"><Instagram className="size-5" /></a>
                <a href="mailto:hello@luxhome.example" className="text-sm hover:text-white">Email us</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-6 text-[10px] uppercase tracking-[0.15em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 LuxHome. Demonstration storefront.</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <span>Delivery</span>
              <span>Care guide</span>
              <span>Terms</span>
              <a
                href="https://digitalmarvels.tech"
                target="_blank"
                rel="noreferrer"
                className="text-white/55 transition hover:text-white"
              >
                Made by Digital Marvels
              </a>
            </div>
          </div>
        </div>
      </footer>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-[88%] border-r-border bg-background p-0 sm:max-w-md">
          <SheetHeader className="border-b border-border p-6 text-left">
            <SheetTitle className="font-display text-2xl uppercase tracking-[0.16em]">LuxHome</SheetTitle>
            <SheetDescription>Explore our furniture collections.</SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col p-6" aria-label="Mobile navigation">
            <Link to="/" onClick={() => setMobileOpen(false)} className="mobile-nav-link">Home</Link>
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)} className="mobile-nav-link">
                {item.label} <ArrowRight className="size-4" />
              </Link>
            ))}
            <button
              type="button"
              onClick={() => { setMobileOpen(false); setConsultationOpen(true); }}
              className="mt-8 h-12 bg-primary text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground"
            >
              Book a consultation
            </button>
          </nav>
        </SheetContent>
      </Sheet>

      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        <SheetContent className="flex w-full flex-col border-l-border bg-background p-0 sm:max-w-lg">
          <SheetHeader className="border-b border-border p-6 text-left">
            <SheetTitle className="font-display text-3xl">Your bag</SheetTitle>
            <SheetDescription>{cartCount ? `${cartCount} ${cartCount === 1 ? "piece" : "pieces"} selected` : "Your considered edit is empty."}</SheetDescription>
          </SheetHeader>
          {cartLines.length ? (
            <>
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  {cartLines.map(({ product, quantity }) => (
                    <div key={product.id} className="grid grid-cols-[96px_1fr] gap-4 border-b border-border pb-6">
                      <img src={product.image} alt="" className="aspect-[4/5] size-full object-cover" style={{ objectPosition: product.imagePosition }} />
                      <div className="flex min-w-0 flex-col">
                        <div className="flex justify-between gap-4">
                          <div><p className="font-display text-lg">{product.name}</p><p className="mt-1 text-xs text-muted-foreground">{product.colour}</p></div>
                          <p className="text-sm font-semibold">{formatPrice(product.price * quantity)}</p>
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-4">
                          <div className="flex h-9 items-center border border-border">
                            <button type="button" onClick={() => updateQuantity(product.id, quantity - 1)} className="flex size-8 items-center justify-center" aria-label="Decrease quantity"><Minus className="size-3" /></button>
                            <span className="w-8 text-center text-xs font-semibold">{quantity}</span>
                            <button type="button" onClick={() => updateQuantity(product.id, quantity + 1)} className="flex size-8 items-center justify-center" aria-label="Increase quantity"><Plus className="size-3" /></button>
                          </div>
                          <button type="button" onClick={() => removeFromCart(product.id)} className="text-muted-foreground hover:text-foreground" aria-label={`Remove ${product.name}`}><Trash2 className="size-4" /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-border p-6">
                <div className="flex items-center justify-between text-sm"><span>Subtotal</span><span className="font-semibold">{formatPrice(subtotal)}</span></div>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">White-glove delivery is complimentary. Taxes are included.</p>
                <Button asChild size="xl" className="mt-5 w-full rounded-none">
                  <Link to="/checkout" onClick={() => setCartOpen(false)}>Continue to checkout <ArrowRight /></Link>
                </Button>
              </div>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
              <Package className="size-10 text-muted-foreground" strokeWidth={1.2} />
              <h3 className="mt-5 font-display text-2xl">Begin your edit</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">Discover pieces made to live beautifully with you, for years to come.</p>
              <Button asChild className="mt-7 rounded-none"><Link to="/shop" onClick={() => setCartOpen(false)}>Explore the collection</Link></Button>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="max-h-[88vh] max-w-2xl overflow-y-auto rounded-none border-border p-0">
          <DialogHeader className="border-b border-border p-6">
            <DialogTitle className="font-display text-3xl">Search LuxHome</DialogTitle>
            <DialogDescription>Find a piece, material or room.</DialogDescription>
          </DialogHeader>
          <div className="p-6">
            <div className="flex items-center border-b border-foreground pb-3">
              <Search className="mr-3 size-5 text-muted-foreground" />
              <input
                autoFocus
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Try ‘walnut’ or ‘lighting’"
                className="w-full bg-transparent text-lg outline-none placeholder:text-muted-foreground"
              />
            </div>
            <div className="mt-6 space-y-3">
              {searchResults.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                  className="grid grid-cols-[72px_1fr_auto] items-center gap-4 border-b border-border pb-3"
                >
                  <img src={product.image} alt="" className="aspect-square size-full object-cover" style={{ objectPosition: product.imagePosition }} />
                  <div><p className="font-display text-lg">{product.name}</p><p className="text-xs text-muted-foreground">{product.material}</p></div>
                  <p className="text-sm font-semibold">{formatPrice(product.price)}</p>
                </Link>
              ))}
              {!searchResults.length && <p className="py-10 text-center text-sm text-muted-foreground">No pieces found. Try another search.</p>}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={Boolean(quickView)} onOpenChange={(open) => !open && setQuickView(null)}>
        {quickView && (
          <DialogContent className="max-h-[92vh] max-w-5xl overflow-y-auto rounded-none border-0 p-0">
            <div className="grid md:grid-cols-2">
              <img src={quickView.image} alt={quickView.name} className="aspect-[4/3] size-full object-cover md:aspect-auto md:min-h-[580px]" style={{ objectPosition: quickView.imagePosition }} />
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <p className="eyebrow">{quickView.collection}</p>
                <DialogHeader className="mt-4 text-left">
                  <DialogTitle className="font-display text-4xl leading-tight sm:text-5xl">{quickView.name}</DialogTitle>
                  <DialogDescription className="text-base text-foreground">{formatPrice(quickView.price)}</DialogDescription>
                </DialogHeader>
                <p className="mt-6 text-sm leading-7 text-muted-foreground">{quickView.description}</p>
                <div className="mt-7 grid grid-cols-2 gap-4 border-y border-border py-5 text-xs">
                  <div><span className="text-muted-foreground">Material</span><p className="mt-1 font-semibold">{quickView.material}</p></div>
                  <div><span className="text-muted-foreground">Finish</span><p className="mt-1 font-semibold">{quickView.colour}</p></div>
                </div>
                <Button size="xl" className="mt-7 rounded-none" onClick={() => { addToCart(quickView.id); setQuickView(null); }}>
                  Add to bag <ShoppingBag />
                </Button>
                <Link to={`/products/${quickView.id}`} onClick={() => setQuickView(null)} className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.15em] underline underline-offset-4">
                  View full details
                </Link>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      <Dialog open={consultationOpen} onOpenChange={(open) => { setConsultationOpen(open); if (!open) setConsultationSent(false); }}>
        <DialogContent className="max-w-xl rounded-none border-border p-0">
          {consultationSent ? (
            <div className="flex min-h-[430px] flex-col items-center justify-center p-10 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-accent/18 text-accent-foreground"><Check className="size-6" /></span>
              <DialogTitle className="mt-6 font-display text-4xl">Your appointment request is in.</DialogTitle>
              <DialogDescription className="mt-4 max-w-sm leading-7">A LuxHome design advisor will be in touch within one working day to arrange a convenient time.</DialogDescription>
              <Button className="mt-8 rounded-none" onClick={() => setConsultationOpen(false)}>Return to the collection</Button>
            </div>
          ) : (
            <>
              <DialogHeader className="border-b border-border p-7 text-left">
                <p className="eyebrow">Complimentary service</p>
                <DialogTitle className="mt-3 font-display text-4xl">Book a design consultation</DialogTitle>
                <DialogDescription className="mt-2 leading-6">Tell us a little about your space and our team will arrange a private 45-minute appointment.</DialogDescription>
              </DialogHeader>
              <form className="grid gap-4 p-7" onSubmit={(event) => { event.preventDefault(); setConsultationSent(true); }}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="form-field"><span>Name</span><input required placeholder="Your name" /></label>
                  <label className="form-field"><span>Email</span><input required type="email" placeholder="you@example.com" /></label>
                </div>
                <label className="form-field"><span>Room</span><select required defaultValue=""><option value="" disabled>Select a room</option><option>Living room</option><option>Dining room</option><option>Bedroom</option><option>Whole home</option></select><ChevronDown className="pointer-events-none absolute bottom-4 right-3 size-4" /></label>
                <label className="form-field"><span>How can we help?</span><textarea rows={3} placeholder="Share dimensions, timing or pieces you love" /></label>
                <Button type="submit" size="xl" className="mt-2 rounded-none">Request an appointment <ArrowRight /></Button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
