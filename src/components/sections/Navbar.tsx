import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

const navLinks = [
  { label: "O nas", href: "#about" },
  { label: "Drużyny", href: "#teams" },
  { label: "Osiągnięcia", href: "#achievements" },
  { label: "Treningi", href: "#training" },
  { label: "Galeria", href: "#gallery" },
  { label: "Kontakt", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-primary/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            <a href="/" className="text-3xl font-heading font-bold">
              WP<span style={{ color: "var(--primary)" }}>.</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative"
                whileHover={{ y: -2 }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button + Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button variant="primary" size="default">
                Dołącz do nas
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-b border-primary/10"
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              whileHover={{ x: 4 }}
            >
              {link.label}
            </motion.a>
          ))}
          <div className="pt-4 border-t border-primary/10">
            <Button variant="primary" size="default" className="w-full justify-center">
              Dołącz do nas
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
