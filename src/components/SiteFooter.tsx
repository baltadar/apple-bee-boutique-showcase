import logo from "@/assets/logo.svg";

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
          <h5 className="nav-link mb-3 block">Customer Care</h5>
          <ul className="space-y-2 text-muted-foreground">
            <li>Shipping & Returns</li>
            <li>Size Guide</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h5 className="nav-link mb-3 block">Newsletter</h5>
          <p className="text-muted-foreground mb-3">Receive new arrivals & private editorials.</p>
          <form className="flex border-b border-foreground/30">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button className="nav-link ml-3">Subscribe</button>
          </form>
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
