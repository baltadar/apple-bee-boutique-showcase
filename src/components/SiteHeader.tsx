import { Link, NavLink } from "react-router-dom";
import { Search } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import logo from "@/assets/logo.svg";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-border/60">
      {/* Top bar */}
      <div className="container">
        <div className="grid grid-cols-3 items-center h-16 md:h-20">
          <div className="flex items-center">
            <button aria-label="Search" className="p-2 -ml-2 text-foreground/80 hover:text-foreground transition-colors">
              <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </button>
          </div>

          <Link to="/" className="flex justify-center" aria-label="Apple Bee Boutique">
            <img
              src={logo}
              alt="Apple Bee Boutique"
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          <div className="flex items-center justify-end gap-1 md:gap-3" />
        </div>

        {/* Secondary nav */}
        <nav className="border-t border-border/50">
          <ul className="flex items-center justify-center gap-5 md:gap-8 overflow-x-auto py-3 no-scrollbar">
            {CATEGORIES.map((c) => (
              <li key={c} className="shrink-0">
                <NavLink
                  to={`/?category=${encodeURIComponent(c)}`}
                  className="nav-link"
                >
                  {c}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
