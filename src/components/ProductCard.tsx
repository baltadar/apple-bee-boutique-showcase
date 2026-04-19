import { Product, formatPrice } from "@/data/products";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <article className="group cursor-pointer animate-fade-in">
      <div className="product-image-wrap">
        {product.isNew && (
          <span className="absolute top-3 left-3 z-10 bg-background/90 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.2em]">
            New in
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="product-image"
        />
        {product.hoverImage && (
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
      </div>
    </article>
  );
};

export default ProductCard;
