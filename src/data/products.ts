// Apple Bee Boutique — product catalog
// To add or swap products, edit this file. Image URLs can be any cloud-hosted link
// (Cloudinary, Shopify CDN, S3, Unsplash, etc.). Aspect ratio is enforced by the layout.

import nudeSneakers from "@/assets/products/nude-sneakers.jpg";
import nudeSlide from "@/assets/products/nude-slide.jpg";
import blackSlide from "@/assets/products/black-slide.jpg";
import kidsSuperhero from "@/assets/products/kids-superhero.jpg";
import oliveMaryJane from "@/assets/products/olive-mary-jane.jpg";
import blackMaryJane from "@/assets/products/black-mary-jane.jpg";

export type Category =
  | "Shoes"
  | "Dresses"
  | "Tops"
  | "Bottoms"
  | "Sets"
  | "Outerwear"
  | "Accessories";

export interface Product {
  id: string;
  name: string;
  price: number; // in KES (Kenyan Shillings)
  currency?: string; // default "KES"
  image: string; // primary image URL
  hoverImage?: string; // optional secondary image shown on hover
  category: Category;
  isNew?: boolean;
  outOfStock?: boolean;
  size?: string | number; // e.g. EU shoe size
}

export const CATEGORIES: Category[] = [
  "Shoes",
  "Dresses",
  "Tops",
  "Bottoms",
  "Sets",
  "Outerwear",
  "Accessories",
];

export const products: Product[] = [
  // New arrivals — woven olive slides (KES 600)
  {
    id: "ab-sh-101",
    name: "Olive Woven Slide",
    price: 600,
    image: "https://res.cloudinary.com/dbgcwdes6/image/upload/v1776933954/1776932900710_quj5d5.jpg",
    category: "Shoes",
    isNew: true,
    size: 42,
  },
  {
    id: "ab-sh-102",
    name: "Olive Woven Slide — Style II",
    price: 600,
    image: "https://res.cloudinary.com/dbgcwdes6/image/upload/v1776933954/1776932900736_zrbsfl.jpg",
    category: "Shoes",
    isNew: true,
    size: 39,
  },
  {
    id: "ab-sh-103",
    name: "Olive Woven Slide — Style III",
    price: 600,
    image: "https://res.cloudinary.com/dbgcwdes6/image/upload/v1776933954/1776932900771_cwjsic.jpg",
    category: "Shoes",
    isNew: true,
    size: 38,
  },
  {
    id: "ab-sh-104",
    name: "Olive Woven Slide — Style IV",
    price: 600,
    image: "https://res.cloudinary.com/dbgcwdes6/image/upload/v1776933954/1776932900811_shirpk.jpg",
    category: "Shoes",
    isNew: true,
    size: 40,
  },
  // New arrivals — beaded slides (KES 800)
  {
    id: "ab-sh-105",
    name: "Beaded Slide — Bronze Knot",
    price: 800,
    image: "https://res.cloudinary.com/dbgcwdes6/image/upload/v1776933955/1776932900855_vhid9f.jpg",
    category: "Shoes",
    isNew: true,
    size: 37,
  },
  {
    id: "ab-sh-106",
    name: "Beaded Slide — Onyx",
    price: 800,
    image: "https://res.cloudinary.com/dbgcwdes6/image/upload/v1776935862/1776932900893_qfjauz.jpg",
    category: "Shoes",
    isNew: true,
    size: 42,
  },
  {
    id: "ab-sh-107",
    name: "Beaded Slide — Copper Weave",
    price: 800,
    image: "https://res.cloudinary.com/dbgcwdes6/image/upload/v1776934867/1776932900930_fqxqky.jpg",
    category: "Shoes",
    isNew: true,
    size: 41,
  },
  {
    id: "ab-sh-108",
    name: "Beaded Slide — Silver Crest",
    price: 800,
    image: "https://res.cloudinary.com/dbgcwdes6/image/upload/v1776933954/1776932900965_l5hejc.jpg",
    category: "Shoes",
    isNew: true,
    size: 40,
  },
  // New arrivals — additional styles
  {
    id: "ab-sh-109",
    name: "Nude Tone Sneakers",
    price: 900,
    image: nudeSneakers,
    category: "Shoes",
    size: 36,
    outOfStock: true,
  },
  {
    id: "ab-sh-110",
    name: "Nude Slide Sandals",
    price: 400,
    image: nudeSlide,
    category: "Shoes",
    isNew: true,
    size: 38,
  },
  {
    id: "ab-sh-111",
    name: "Black Slide Sandals",
    price: 400,
    image: blackSlide,
    category: "Shoes",
    isNew: true,
    size: 40,
  },
  {
    id: "ab-sh-112",
    name: "Kids Superhero Slippers",
    price: 300,
    image: kidsSuperhero,
    category: "Shoes",
    isNew: true,
    size: "32–33",
  },
  {
    id: "ab-sh-113",
    name: "Olive Mary Jane Flats",
    price: 600,
    image: oliveMaryJane,
    category: "Shoes",
    isNew: true,
    size: 42,
  },
  {
    id: "ab-sh-114",
    name: "Black Mary Jane Flats",
    price: 600,
    image: blackMaryJane,
    category: "Shoes",
    isNew: true,
    size: 37,
  },
  {
    id: "ab-sh-001",
    name: "Leather Slingback Flat",
    price: 6800,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1200&q=80&auto=format&fit=crop",
    category: "Shoes",
    outOfStock: true,
  },
  {
    id: "ab-sh-002",
    name: "Suede Block Heel",
    price: 8900,
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=1200&q=80&auto=format&fit=crop",
    category: "Shoes",
    outOfStock: true,
  },
  {
    id: "ab-sh-003",
    name: "Woven Mule",
    price: 5900,
    image: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?w=1200&q=80&auto=format&fit=crop",
    category: "Shoes",
    outOfStock: true,
  },
  {
    id: "ab-sh-004",
    name: "Strappy Leather Sandal",
    price: 7200,
    image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=1200&q=80&auto=format&fit=crop",
    category: "Shoes",
    outOfStock: true,
  },
  ...([
    {
      id: "ab-001",
      name: "Linen Wrap Dress",
      price: 8500,
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=80&auto=format&fit=crop",
      category: "Dresses" as Category,
    },
    {
      id: "ab-002",
      name: "Silk Slip Midi",
      price: 11500,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=1200&q=80&auto=format&fit=crop",
      category: "Dresses" as Category,
    },
    {
      id: "ab-003",
      name: "Cotton Poplin Blouse",
      price: 5500,
      image: "https://images.unsplash.com/photo-1485518882345-15568b007407?w=1200&q=80&auto=format&fit=crop",
      category: "Tops" as Category,
    },
    {
      id: "ab-004",
      name: "Pleated Wide-Leg Trouser",
      price: 7800,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1200&q=80&auto=format&fit=crop",
      category: "Bottoms" as Category,
    },
    {
      id: "ab-005",
      name: "Knit Two-Piece Set",
      price: 12500,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80&auto=format&fit=crop",
      category: "Sets" as Category,
    },
    {
      id: "ab-007",
      name: "Leather Shoulder Bag",
      price: 10500,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=80&auto=format&fit=crop",
      category: "Accessories" as Category,
    },
    {
      id: "ab-008",
      name: "Cashmere Crew",
      price: 9200,
      image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=1200&q=80&auto=format&fit=crop",
      category: "Tops" as Category,
    },
    {
      id: "ab-009",
      name: "Pleated Midi Skirt",
      price: 7400,
      image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=1200&q=80&auto=format&fit=crop",
      category: "Bottoms" as Category,
    },
    {
      id: "ab-010",
      name: "Ivory Slip Dress",
      price: 9800,
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1200&q=80&auto=format&fit=crop",
      category: "Dresses" as Category,
    },
    {
      id: "ab-011",
      name: "Trench Overcoat",
      price: 18500,
      image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=1200&q=80&auto=format&fit=crop",
      category: "Outerwear" as Category,
    },
    {
      id: "ab-012",
      name: "Silk Scarf",
      price: 3800,
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=1200&q=80&auto=format&fit=crop",
      category: "Accessories" as Category,
    },
  ].map((p) => ({ ...p, outOfStock: true }))),
];

export const formatPrice = (price: number, currency = "KES") =>
  new Intl.NumberFormat("en-KE", { style: "currency", currency, maximumFractionDigits: 0 }).format(price);
