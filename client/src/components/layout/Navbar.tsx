import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@assets/Grey_Minimal_Winter_Snowflake_Ice_Rink_Skating_Logo_(4)_1768846706140.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 cursor-pointer">
            <img 
              src={logoImage} 
              alt="Presavia Logo" 
              className={cn("transition-all duration-300", scrolled ? "h-10" : "h-12")} 
            />
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-slate-700 hover:text-green-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 font-semibold">
            Schedule a visit
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4 shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-slate-700 hover:text-green-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-green-600 text-white rounded-full">
              Schedule a visit
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
