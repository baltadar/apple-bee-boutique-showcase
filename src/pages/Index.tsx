import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import { products, Category } from "@/data/products";

const Index = () => {
  const [params] = useSearchParams();
  const category = params.get("category") as Category | null;

  const filtered = useMemo(() => {
    if (!category) return products;
    if (category === "New Collection") return products.filter((p) => p.isNew);
    return products.filter((p) => p.category === category);
  }, [category]);

  const title = category ?? "April Collection";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero strip */}
        <section className="bg-beige/40">
          <div className="container py-16 md:py-24 text-center">
            <p className="nav-link mb-4">The April Edit</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto">
              Quiet wardrobe essentials, crafted to be lived in.
            </h2>
          </div>
        </section>

        {/* Collection */}
        <section className="container py-16 md:py-24">
          <header className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>
          </header>

          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground">No pieces in this category yet.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
