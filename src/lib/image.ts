// Image URL helpers for fast, responsive loading from Cloudinary and Unsplash.
// We inject CDN transforms (auto format + auto quality + width) so browsers
// receive AVIF/WebP at the right size for the device — much smaller payloads.

const CLOUDINARY_HOST = "res.cloudinary.com";
const UNSPLASH_HOST = "images.unsplash.com";

const buildCloudinary = (url: string, width: number): string => {
  // Insert transform segment after `/upload/`
  // f_auto = best format (AVIF/WebP), q_auto = adaptive quality,
  // c_limit = never upscale, w_<n> = resize, dpr_auto = retina-aware
  const transform = `f_auto,q_auto,c_limit,w_${width},dpr_auto`;
  return url.replace("/upload/", `/upload/${transform}/`);
};

const buildUnsplash = (url: string, width: number): string => {
  const u = new URL(url);
  u.searchParams.set("w", String(width));
  u.searchParams.set("q", "75");
  u.searchParams.set("auto", "format");
  u.searchParams.set("fit", "crop");
  return u.toString();
};

export const optimizedImage = (url: string, width: number): string => {
  try {
    if (url.includes(CLOUDINARY_HOST)) return buildCloudinary(url, width);
    if (url.includes(UNSPLASH_HOST)) return buildUnsplash(url, width);
  } catch {
    /* fall through */
  }
  return url;
};

// Common widths for product cards (2-up mobile, 4-up desktop, retina)
const WIDTHS = [320, 480, 640, 800, 1000, 1200];

export const buildSrcSet = (url: string): string =>
  WIDTHS.map((w) => `${optimizedImage(url, w)} ${w}w`).join(", ");

// Sizes hint matches our grid: 2 cols mobile, 3 cols md, 4 cols lg
export const PRODUCT_IMAGE_SIZES =
  "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw";
