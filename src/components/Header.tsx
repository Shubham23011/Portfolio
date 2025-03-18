
import { useState, useEffect } from "react";
import { Menu, X, Star } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-space-dark/80 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center space-x-2 text-white font-bold text-xl md:text-2xl font-display"
        >
          <Star className="h-6 w-6 text-cosmic-teal animate-pulse-glow" />
          <span>Shubham</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-white/80 rounded-md hover:text-white hover:bg-white/5 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 btn-cosmic"
          >
            Contact Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-space-dark/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-16 pb-6 px-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-white focus:outline-none"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="flex flex-col space-y-1 mt-6">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="mt-auto">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center justify-center btn-cosmic"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
