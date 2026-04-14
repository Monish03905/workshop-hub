import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Masterclasses", href: "#workshops" },
  { label: "Curriculum", href: "#features" },
  { label: "Registry", href: "#workshops" },
  { label: "The Vault", href: "#", active: true },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="border-b border-border px-6 md:px-12 py-6 md:py-8 flex justify-between items-baseline">
      <div className="flex flex-col">
        <span className="text-2xl font-display font-bold tracking-tight text-primary uppercase">
          Ariston
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">
          Knowledge Curation
        </span>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-12 text-sm uppercase tracking-widest font-medium">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`transition-colors hover:text-primary ${
              link.active ? "text-primary" : "text-foreground"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-foreground"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-20 left-0 right-0 bg-background border-b border-border z-50 px-6 py-8 flex flex-col gap-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm uppercase tracking-widest font-medium text-foreground hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
