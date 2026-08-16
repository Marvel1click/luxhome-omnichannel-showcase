import { ArrowUpRight, Eye, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from "@/context/StoreContext";
import { formatPrice, type Product } from "@/lib/catalog";

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart, setQuickView } = useStore();

  return (
    <article className="group min-w-0">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <Link to={`/products/${product.id}`} aria-label={`View ${product.name}`}>
          <img
            src={product.image}
            alt={`${product.name} in the LuxHome collection`}
            className="size-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
            style={{ objectPosition: product.imagePosition }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        </Link>

        {(product.isNew || product.bestseller) && (
          <span className="absolute left-4 top-4 bg-background/92 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground backdrop-blur">
            {product.isNew ? "New arrival" : "Bestseller"}
          </span>
        )}

        <div className="absolute inset-x-4 bottom-4 flex translate-y-3 gap-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 focus-within:translate-y-0 focus-within:opacity-100">
          <button
            type="button"
            onClick={() => setQuickView(product)}
            className="flex h-11 flex-1 items-center justify-center gap-2 bg-background text-xs font-semibold uppercase tracking-[0.12em] text-foreground transition hover:bg-accent"
          >
            <Eye className="size-4" aria-hidden="true" /> Quick view
          </button>
          <button
            type="button"
            onClick={() => addToCart(product.id)}
            className="flex size-11 items-center justify-center bg-primary text-primary-foreground transition hover:bg-accent hover:text-accent-foreground"
            aria-label={`Add ${product.name} to bag`}
          >
            <Plus className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{product.collection}</p>
          <Link to={`/products/${product.id}`} className="mt-1.5 inline-flex items-center gap-1 font-display text-xl text-foreground">
            {product.name}
            <ArrowUpRight className="size-3.5 opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
          </Link>
          <p className="mt-1 text-sm text-muted-foreground">{product.material} · {product.colour}</p>
        </div>
        <p className="shrink-0 text-sm font-semibold text-foreground">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
};
