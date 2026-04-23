import { Product, formatPrice } from "@/data/products";

interface Props {
  product: Product;
}

const WHATSAPP_NUMBER = "254113822980";

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.59 5.93L0 24l6.4-1.68a11.83 11.83 0 005.64 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.43zM12.05 21.3h-.01a9.45 9.45 0 01-4.82-1.32l-.35-.21-3.8 1 1.02-3.7-.23-.38a9.45 9.45 0 01-1.46-5.05c0-5.23 4.26-9.49 9.5-9.49 2.54 0 4.92.99 6.71 2.78a9.43 9.43 0 012.78 6.71c0 5.23-4.26 9.49-9.49 9.49zm5.2-7.1c-.28-.14-1.69-.83-1.95-.93-.26-.1-.45-.14-.64.14s-.74.93-.9 1.12c-.17.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.4-.84-.75-1.41-1.68-1.58-1.96-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.18-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.54-.87-2.11-.23-.55-.47-.48-.64-.49l-.55-.01a1.06 1.06 0 00-.77.36c-.26.28-1 .98-1 2.39s1.03 2.77 1.17 2.96c.14.19 2.02 3.08 4.89 4.32.68.29 1.21.47 1.63.6.68.22 1.31.19 1.8.12.55-.08 1.69-.69 1.93-1.36.24-.66.24-1.23.17-1.36-.07-.13-.26-.21-.54-.35z" />
  </svg>
);

const ProductCard = ({ product }: Props) => {
  const message = encodeURIComponent(
    `Hi Apple Bee Boutique, I'd like to order: ${product.name} (${formatPrice(
      product.price,
      product.currency
    )}) — ref ${product.id}.`
  );
  const orderUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  const isOut = product.outOfStock;

  return (
    <article className="group animate-fade-in">
      <div className="product-image-wrap relative">
        {product.isNew && !isOut && (
          <span className="absolute top-3 left-3 z-10 bg-background/90 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.2em]">
            New in
          </span>
        )}
        {isOut && (
          <span className="absolute top-3 left-3 z-10 bg-foreground text-background px-2.5 py-1 text-[10px] uppercase tracking-[0.2em]">
            Out of stock
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="product-image"
        />
        {product.hoverImage && !isOut && (
          <img
            src={product.hoverImage}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />
        )}
      </div>
      <div className="pt-4 pb-2 text-center">
        <h3 className="font-sans text-[13px] tracking-wide text-foreground">{product.name}</h3>
        <p className="mt-1 text-[13px] text-muted-foreground">
          {formatPrice(product.price, product.currency)}
        </p>
        {isOut ? (
          <span className="mt-3 inline-flex items-center justify-center gap-2 w-full bg-muted text-muted-foreground text-[11px] uppercase tracking-[0.2em] py-2.5 cursor-not-allowed">
            Sold out
          </span>
        ) : (
          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${product.name} on WhatsApp`}
            className="mt-3 inline-flex items-center justify-center gap-2 w-full bg-foreground text-background text-[11px] uppercase tracking-[0.2em] py-2.5 hover:bg-foreground/90 transition-colors"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            Order
          </a>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
