import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import SEO from "@/components/SEO";
import { products, Category } from "@/data/products";
import heroImage from "@/assets/hero-shoes-accessories.jpg";

const SITE_URL = "https://applebeeboutique.com";

const Index = () => {
  const [params] = useSearchParams();
  const category = (params.get("category") as Category | null) ?? "Shoes";

  const filtered = useMemo(() => {
    return products.filter((p) => p.category === category);
  }, [category]);

  const title = category;
  const path = `/?category=${encodeURIComponent(category)}`;

  const seoCopy: Record<Category, { title: string; description: string; intro: string }> = {
    Shoes: {
      title: "Ladies Shoes in Nairobi — Sandals, Slides & Flats | Apple Bee Boutique",
      description:
        "Shop affordable ladies shoes in Nairobi at Apple Bee Boutique. Sandals, slides, flats, sneakers and Mary Janes for women. Order online or via WhatsApp — delivery across Kenya.",
      intro:
        "Discover ladies shoes in Nairobi at Apple Bee Boutique — from woven olive slides and beaded sandals to Mary Jane flats and everyday sneakers. Affordable women's footwear in Kenya, delivered countrywide and easy to order on WhatsApp.",
    },
    Dresses: {
      title: "Dresses in Nairobi — Women's Dresses Kenya | Apple Bee Boutique",
      description:
        "Shop dresses in Nairobi — linen, silk and slip dresses for everyday and occasion wear. Ladies fashion in Kenya, order online or via WhatsApp.",
      intro:
        "Browse dresses in Nairobi at Apple Bee Boutique — linen wraps, silk slip midis and ivory slip dresses styled for Kenyan women.",
    },
    Tops: {
      title: "Women's Tops & Blouses in Nairobi | Apple Bee Boutique",
      description:
        "Cotton blouses, cashmere knits and everyday tops for women in Nairobi. Ladies fashion in Kenya — order online or via WhatsApp.",
      intro:
        "Shop women's tops and blouses in Nairobi — cotton poplin, cashmere crews and everyday essentials at Apple Bee Boutique.",
    },
    Bottoms: {
      title: "Women's Trousers & Skirts in Nairobi | Apple Bee Boutique",
      description:
        "Pleated trousers, midi skirts and tailored bottoms for women in Nairobi, Kenya. Order online or via WhatsApp.",
      intro:
        "Explore women's trousers and skirts in Nairobi — pleated wide-legs and midi skirts for work and weekends.",
    },
    Sets: {
      title: "Women's Two-Piece Sets in Nairobi | Apple Bee Boutique",
      description:
        "Coordinated knit sets and matching two-piece outfits for women in Nairobi. Ladies fashion in Kenya — order online or via WhatsApp.",
      intro:
        "Shop women's two-piece sets in Nairobi — knit co-ords designed to wear together or apart.",
    },
    Outerwear: {
      title: "Women's Coats & Outerwear in Nairobi | Apple Bee Boutique",
      description:
        "Trench coats and tailored outerwear for women in Nairobi, Kenya. Order online or via WhatsApp.",
      intro:
        "Discover women's outerwear in Nairobi — trench coats and layering pieces for cool Kenyan mornings.",
    },
    Accessories: {
      title: "Women's Accessories in Nairobi — Bags & Scarves | Apple Bee Boutique",
      description:
        "Leather shoulder bags, silk scarves and everyday accessories for women in Nairobi, Kenya. Order online or via WhatsApp.",
      intro:
        "Browse women's accessories in Nairobi — leather bags, silk scarves and finishing pieces from Apple Bee Boutique.",
    },
  };

  const seoTitle = seoCopy[category].title;
  const seoDescription = seoCopy[category].description;
  const seoIntro = seoCopy[category].intro;

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
      { "@type": "ListItem", position: 2, name: category, item: `${SITE_URL}${path}` },
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
        <section className="relative overflow-hidden" aria-labelledby="hero-heading">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/55" />
          <div className="relative container py-20 md:py-32 text-center text-background">
            <p className="text-xs uppercase tracking-[0.3em] mb-4 text-background/90">
              Apple Bee Boutique
            </p>
            <h1
              id="hero-heading"
              className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto text-background drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
            >
              Shoes & Ladies Accessories
            </h1>
            <p className="sr-only">
              Apple Bee Boutique is a Nairobi-based boutique offering shoes, dresses, tops,
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
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} priority={i < 4} />
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
