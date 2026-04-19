import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import SEO from "@/components/SEO";
import { products, Category } from "@/data/products";

const SITE_URL = "https://applebeeboutique.co.ke";

const Index = () => {
  const [params] = useSearchParams();
  const category = params.get("category") as Category | null;

  const filtered = useMemo(() => {
    if (!category) return products;
    if (category === "New Collection") return products.filter((p) => p.isNew);
    return products.filter((p) => p.category === category);
  }, [category]);

  const title = category ?? "April Collection";
  const path = category ? `/?category=${encodeURIComponent(category)}` : "/";

  const seoTitle = category
    ? `${category} — Apple Bee Boutique Kenya`
    : "Apple Bee Boutique — Considered Womenswear in Kenya";
  const seoDescription = category
    ? `Shop ${category.toLowerCase()} from Apple Bee Boutique, a Nairobi-based womenswear label. Order online or via WhatsApp.`
    : "Quiet, considered womenswear in Nairobi. Shop dresses, tops, sets and outerwear designed to be lived in. Order online or via WhatsApp.";

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    numberOfItems: filtered.length,
    itemListElement: filtered.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        image: p.image,
        category: p.category,
        offers: {
          "@type": "Offer",
          priceCurrency: p.currency ?? "KES",
          price: p.price,
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}${path}`,
        },
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      ...(category
        ? [{ "@type": "ListItem", position: 2, name: category, item: `${SITE_URL}${path}` }]
        : []),
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title={seoTitle}
        description={seoDescription}
        path={path}
        jsonLd={[itemListJsonLd, breadcrumbJsonLd]}
      />
      <SiteHeader />

      <main className="flex-1">
        {/* Hero strip */}
        <section className="bg-beige/40" aria-labelledby="hero-heading">
          <div className="container py-16 md:py-24 text-center">
            <p className="nav-link mb-4">The April Edit</p>
            <h1
              id="hero-heading"
              className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto"
            >
              Quiet wardrobe essentials, crafted to be lived in.
            </h1>
            <p className="sr-only">
              Apple Bee Boutique is a Nairobi-based womenswear boutique offering dresses, tops,
              sets, outerwear and accessories. Shop online or order via WhatsApp.
            </p>
          </div>
        </section>

        {/* Collection */}
        <section className="container py-16 md:py-24" aria-labelledby="collection-heading">
          <header className="text-center mb-12 md:mb-16">
            <h2 id="collection-heading" className="font-serif text-3xl md:text-4xl">
              {title}
            </h2>
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
