import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { products, type ProductCategory } from "@/lib/catalog";

const categoryOptions: { label: string; value: "all" | ProductCategory }[] = [
  { label: "All furniture", value: "all" },
  { label: "Living", value: "living" },
  { label: "Dining", value: "dining" },
  { label: "Bedroom", value: "bedroom" },
  { label: "Lighting", value: "lighting" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get("room") as ProductCategory | null) ?? "all";
  const [category, setCategory] = useState<"all" | ProductCategory>(initialCategory);
  const [material, setMaterial] = useState("all");
  const [sort, setSort] = useState("featured");

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) =>
      (category === "all" || product.category === category) &&
      (material === "all" || product.material.toLowerCase().includes(material)),
    );
    return [...filtered].sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      if (sort === "new") return Number(Boolean(b.isNew)) - Number(Boolean(a.isNew));
      return Number(Boolean(b.bestseller)) - Number(Boolean(a.bestseller));
    });
  }, [category, material, sort]);

  const changeCategory = (next: "all" | ProductCategory) => {
    setCategory(next);
    if (next === "all") setSearchParams({});
    else setSearchParams({ room: next });
  };

  return (
    <div className="section-shell pb-24 pt-14 sm:pt-20">
      <div className="max-w-3xl">
        <p className="eyebrow">The full collection</p>
        <h1 className="mt-5 font-display text-5xl leading-none sm:text-7xl">Furniture for a life well lived.</h1>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">Discover enduring forms, tactile materials and beautifully resolved details across every room.</p>
      </div>

      <div className="mt-14 border-y border-border py-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-1">
            {categoryOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => changeCategory(option.value)}
                className={`shrink-0 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition ${category === option.value ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="hidden size-4 text-muted-foreground sm:block" />
            <label className="sr-only" htmlFor="material-filter">Filter by material</label>
            <select id="material-filter" value={material} onChange={(event) => setMaterial(event.target.value)} className="h-10 flex-1 border border-border bg-background px-3 text-xs font-semibold uppercase tracking-[0.08em] outline-none sm:flex-none">
              <option value="all">All materials</option><option value="oak">Oak</option><option value="walnut">Walnut</option><option value="wool">Wool</option><option value="stone">Stone</option><option value="brass">Brass</option>
            </select>
            <label className="sr-only" htmlFor="sort-products">Sort products</label>
            <select id="sort-products" value={sort} onChange={(event) => setSort(event.target.value)} className="h-10 flex-1 border border-border bg-background px-3 text-xs font-semibold uppercase tracking-[0.08em] outline-none sm:flex-none">
              <option value="featured">Featured</option><option value="new">Newest</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between text-xs text-muted-foreground"><span>{visibleProducts.length} pieces</span><span>Made to order · Complimentary delivery</span></div>
      <div className="mt-8 grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
      {!visibleProducts.length && <div className="py-24 text-center"><h2 className="font-display text-3xl">No pieces match this edit.</h2><button type="button" onClick={() => { setMaterial("all"); changeCategory("all"); }} className="mt-5 border-b border-foreground text-xs font-semibold uppercase tracking-[0.14em]">Clear filters</button></div>}
    </div>
  );
}
