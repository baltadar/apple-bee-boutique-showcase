import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.svg";

const WHATSAPP_URL = "https://wa.me/254113822980";
const EMAIL = "lucy.ogeto@gmail.com";

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.59 5.93L0 24l6.4-1.68a11.83 11.83 0 005.64 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.43zM12.05 21.3h-.01a9.45 9.45 0 01-4.82-1.32l-.35-.21-3.8 1 1.02-3.7-.23-.38a9.45 9.45 0 01-1.46-5.05c0-5.23 4.26-9.49 9.5-9.49 2.54 0 4.92.99 6.71 2.78a9.43 9.43 0 012.78 6.71c0 5.23-4.26 9.49-9.49 9.49zm5.2-7.1c-.28-.14-1.69-.83-1.95-.93-.26-.1-.45-.14-.64.14s-.74.93-.9 1.12c-.17.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.4-.84-.75-1.41-1.68-1.58-1.96-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.18-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.54-.87-2.11-.23-.55-.47-.48-.64-.49l-.55-.01a1.06 1.06 0 00-.77.36c-.26.28-1 .98-1 2.39s1.03 2.77 1.17 2.96c.14.19 2.02 3.08 4.89 4.32.68.29 1.21.47 1.63.6.68.22 1.31.19 1.8.12.55-.08 1.69-.69 1.93-1.36.24-.66.24-1.23.17-1.36-.07-.13-.26-.21-.54-.35z" />
  </svg>
);

const SiteFooter = () => {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="container py-12 grid gap-10 md:grid-cols-3 text-sm">
        <div>
          <img src={logo} alt="Apple Bee Boutique" className="h-14 w-auto mb-3" />
          <p className="text-muted-foreground leading-relaxed">
            Considered pieces for the modern wardrobe. Designed with care, made to last.
          </p>
        </div>
        <div>
          <h5 className="nav-link mb-3 block">Call Us</h5>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <a
                href="tel:+254113822980"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                +254 113 822 980
              </a>
            </li>
            <li className="text-xs">Mon – Sat · 9:00 – 18:00</li>
          </ul>
        </div>
        <div>
          <h5 className="nav-link mb-3 block">Contact Us</h5>
          <ul className="space-y-3 text-muted-foreground">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4" />
                +254 113 822 980
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container py-6 border-t border-border/50 text-xs text-muted-foreground flex justify-between">
        <span>© {new Date().getFullYear()} Apple Bee Boutique</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
};

export default SiteFooter;
