import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { collections, products, type ProductCategory } from "@/lib/catalog";

export default function Collection() {
  const { slug } = useParams();
  const category = slug as ProductCategory;
  const collection = collections[category];

  if (!collection) return <div className="section-shell py-24"><h1 className="font-display text-5xl">Collection not found.</h1><Link to="/shop" className="mt-6 inline-flex items-center gap-2 underline"><ArrowLeft className="size-4" />Return to shop</Link></div>;

  const collectionProducts = products.filter((product) => product.category === category);

  return (
    <>
      <section className="grid min-h-[580px] bg-[#24231f] text-white lg:grid-cols-2">
        <div className="flex flex-col justify-center p-8 sm:p-14 lg:p-20 xl:pl-[max(5rem,calc((100vw-80rem)/2))]">
          <p className="eyebrow !text-[#d6bd8b]">LuxHome · {collection.shortTitle}</p>
          <h1 className="mt-6 max-w-xl font-display text-5xl leading-[1.02] sm:text-7xl">{collection.title}</h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-white/64">{collection.copy}</p>
          <a href="#collection-products" className="mt-9 inline-flex w-fit items-center gap-3 border-b border-[#d6bd8b] pb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#d6bd8b]">View the collection <span>↓</span></a>
        </div>
        <img src={collection.image} alt={`${collection.shortTitle} furniture collection`} className="size-full min-h-[420px] object-cover" />
      </section>
      <section id="collection-products" className="section-shell py-20 sm:py-28">
        <div className="mb-10 flex items-end justify-between border-b border-border pb-6"><div><p className="eyebrow">The edit</p><h2 className="mt-3 font-display text-4xl">{collection.shortTitle}</h2></div><p className="text-xs text-muted-foreground">{collectionProducts.length} pieces</p></div>
        <div className="grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {collectionProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </>
  );
}
