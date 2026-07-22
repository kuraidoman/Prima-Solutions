import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom"; // 1. Import Link and useNavigate

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate(); // Hook for programmatic navigation

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow bg-white ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-25 px-4">
        <Link to="/" className="font-poppins font-bold text-xl text-dark">
          <img src="/PrimaSolution.png" alt="PrimaSolution" className="h-16" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              {/* Note: Use <a> for hash links (#home), but <Link> for new pages (/projects) */}
              <a
                href={link.href}
                className="relative text-base font-medium text-foreground hover:text-gold transition-colors after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* 2. Wrap Button in Link or use onClick navigate */}
        <Button 
          onClick={() => navigate("/consult")} 
          className="hidden md:inline-flex bg-gold hover:bg-gold-light text-dark font-poppins font-semibold"
        >
          Consult Now
        </Button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4">
          <ul className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-foreground hover:text-gold transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* 3. Mobile Consult Button */}
          <Button 
            onClick={() => {
              navigate("/consult");
              setMobileOpen(false);
            }}
            className="w-full bg-gold hover:bg-gold-light text-dark font-poppins font-semibold"
          >
            Consult Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
