import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Link } from "react-router-dom";

// WhatsApp number — international format, no +
const WHATSAPP_NUMBER = "254113822980";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Apple Bee Boutique, I'd like to place an order."
);

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.59 5.93L0 24l6.4-1.68a11.83 11.83 0 005.64 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.43zM12.05 21.3h-.01a9.45 9.45 0 01-4.82-1.32l-.35-.21-3.8 1 1.02-3.7-.23-.38a9.45 9.45 0 01-1.46-5.05c0-5.23 4.26-9.49 9.5-9.49 2.54 0 4.92.99 6.71 2.78a9.43 9.43 0 012.78 6.71c0 5.23-4.26 9.49-9.49 9.49zm5.2-7.1c-.28-.14-1.69-.83-1.95-.93-.26-.1-.45-.14-.64.14s-.74.93-.9 1.12c-.17.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.4-.84-.75-1.41-1.68-1.58-1.96-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.18-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.54-.87-2.11-.23-.55-.47-.48-.64-.49l-.55-.01a1.06 1.06 0 00-.77.36c-.26.28-1 .98-1 2.39s1.03 2.77 1.17 2.96c.14.19 2.02 3.08 4.89 4.32.68.29 1.21.47 1.63.6.68.22 1.31.19 1.8.12.55-.08 1.69-.69 1.93-1.36.24-.66.24-1.23.17-1.36-.07-.13-.26-.21-.54-.35z" />
  </svg>
);

const Cart = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <main className="flex-1 container py-20 md:py-28">
        <div className="max-w-xl mx-auto text-center">
          <p className="nav-link mb-4">Checkout</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-10">My Shopping Cart</h1>

          <div className="border-t border-b border-border/60 py-16 mb-10">
            <p className="text-muted-foreground text-base">
              Your cart is currently empty.
            </p>
          </div>

          <Link
            to="/"
            className="nav-link inline-block border-b border-foreground/40 pb-1 hover:border-foreground"
          >
            Continue Shopping
          </Link>

          <div className="mt-16 pt-10 border-t border-border/60">
            <p className="text-sm text-muted-foreground mb-5">
              Prefer to order personally? Reach out to us directly.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-foreground text-background px-7 py-3.5 text-xs uppercase tracking-[0.22em] hover:opacity-90 transition-opacity"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Order via WhatsApp
            </a>
          </div>
        </div>
      </main>

      <SiteFooter />

      {/* Floating WhatsApp button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-foreground text-background shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>
    </div>
  );
};

export default Cart;
