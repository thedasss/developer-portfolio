"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Show/hide navbar based on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setHasScrolled(currentScrollY > 20);
    setLastScrollY(currentScrollY);

    // Determine active section
    const sections = navLinks.map((link) => link.href.replace("#", ""));
    let currentSection = "";

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          currentSection = section;
          break;
        }
      }
    }

    setActiveSection(currentSection);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hasScrolled
            ? "backdrop-blur-xl bg-dark-900/80 border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent">
                TS
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple group-hover:w-full transition-all duration-300" />
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg group ${
                      isActive
                        ? "text-neon-blue"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {/* Active indicator */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full transition-all duration-300 ${
                        isActive ? "w-6" : "w-0 group-hover:w-4"
                      }`}
                    />
                    {/* Hover background */}
                    <span
                      className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "bg-neon-blue/5"
                          : "bg-transparent group-hover:bg-white/5"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Mobile Hamburger Button */}
            <motion.button
              className="md:hidden relative z-50 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-40 h-full w-72 bg-dark-800/95 backdrop-blur-xl border-l border-white/5 md:hidden"
            >
              <div className="flex flex-col justify-center h-full px-8">
                <div className="space-y-2">
                  {navLinks.map((link, index) => {
                    const isActive =
                      activeSection === link.href.replace("#", "");
                    return (
                      <motion.button
                        key={link.href}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        onClick={() => scrollToSection(link.href)}
                        className={`block w-full text-left px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                          isActive
                            ? "text-neon-blue bg-neon-blue/10 border border-neon-blue/20"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span className="text-neon-blue/50 text-sm font-mono mr-3">
                          0{index + 1}.
                        </span>
                        {link.label}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Mobile sidebar footer */}
                <div className="mt-12 pt-8 border-t border-white/5">
                  <p className="text-gray-500 text-sm text-center">
                    © 2024 Thedas Silva
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
