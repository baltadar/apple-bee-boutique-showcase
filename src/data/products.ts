// Apple Bee Boutique — product catalog
// To add or swap products, edit this file. Image URLs can be any cloud-hosted link
// (Cloudinary, Shopify CDN, S3, Unsplash, etc.). Aspect ratio is enforced by the layout.

export type Category =
  | "New Collection"
  | "Dresses"
  | "Tops"
  | "Bottoms"
  | "Sets"
  | "Outerwear"
  | "Accessories";

export interface Product {
  id: string;
  name: string;
  price: number; // in your currency unit
  currency?: string; // default "USD"
  image: string; // primary image URL
  hoverImage?: string; // optional secondary image shown on hover
  category: Category;
  isNew?: boolean;
}

export const CATEGORIES: Category[] = [
  "New Collection",
  "Dresses",
  "Tops",
  "Bottoms",
  "Sets",
  "Outerwear",
  "Accessories",
];

export const products: Product[] = [
  {
    id: "ab-001",
    name: "Linen Wrap Dress",
    price: 148,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=80&auto=format&fit=crop",
    category: "Dresses",
    isNew: true,
  },
  {
    id: "ab-002",
    name: "Silk Slip Midi",
    price: 186,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=1200&q=80&auto=format&fit=crop",
    category: "Dresses",
    isNew: true,
  },
  {
    id: "ab-003",
    name: "Cotton Poplin Blouse",
    price: 92,
    image: "https://images.unsplash.com/photo-1485518882345-15568b007407?w=1200&q=80&auto=format&fit=crop",
    category: "Tops",
  },
  {
    id: "ab-004",
    name: "Pleated Wide-Leg Trouser",
    price: 124,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1200&q=80&auto=format&fit=crop",
    category: "Bottoms",
    isNew: true,
  },
  {
    id: "ab-005",
    name: "Knit Two-Piece Set",
    price: 198,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80&auto=format&fit=crop",
    category: "Sets",
  },
  {
    id: "ab-006",
    name: "Tailored Wool Coat",
    price: 320,
    image: "https://images.unsplash.com/photo-1551163943-3f7053a3e9b6?w=1200&q=80&auto=format&fit=crop",
    category: "Outerwear",
  },
  {
    id: "ab-007",
    name: "Leather Shoulder Bag",
    price: 168,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=80&auto=format&fit=crop",
    category: "Accessories",
    isNew: true,
  },
  {
    id: "ab-008",
    name: "Cashmere Crew",
    price: 145,
    image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=1200&q=80&auto=format&fit=crop",
    category: "Tops",
  },
  {
    id: "ab-009",
    name: "Pleated Midi Skirt",
    price: 118,
    image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=1200&q=80&auto=format&fit=crop",
    category: "Bottoms",
  },
  {
    id: "ab-010",
    name: "Ivory Slip Dress",
    price: 156,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1200&q=80&auto=format&fit=crop",
    category: "Dresses",
  },
  {
    id: "ab-011",
    name: "Trench Overcoat",
    price: 295,
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=1200&q=80&auto=format&fit=crop",
    category: "Outerwear",
    isNew: true,
  },
  {
    id: "ab-012",
    name: "Silk Scarf",
    price: 64,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=1200&q=80&auto=format&fit=crop",
    category: "Accessories",
  },
];

export const formatPrice = (price: number, currency = "USD") =>
  new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 0 }).format(price);
