"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
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
    { name: "Home", href: "/#home" },
    { name: "Full Menu", href: "/menu" },
    { name: "Our Story", href: "/#story" },
    { name: "Locations", href: "/#locations" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If we're not on the home page and trying to go to a hash, let normal navigation happen
    if (href.startsWith("/#")) {
      const hash = href.replace("/", "");
      if (window.location.pathname === "/") {
        e.preventDefault();
        const element = document.querySelector(hash);
        if (element) {
          setMobileMenuOpen(false);
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        setMobileMenuOpen(false);
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-4 md:px-12 flex justify-between items-center
        ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }
      `}
    >
      <Link href="/" className="text-2xl font-black tracking-tighter text-white flex items-center gap-2 group">
        <span className="text-orange-500 transition-colors group-hover:text-white">বাচ্চার</span>
        <span className="transition-colors group-hover:text-orange-500">বিরিয়ানি</span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-sm font-semibold text-white/70 hover:text-orange-400 transition-colors uppercase tracking-[0.15em]"
          >
            {link.name}
          </Link>
        ))}
        <button 
          onClick={() => document.querySelector("#locations")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-2.5 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] hover:scale-105 active:scale-95 uppercase tracking-wider text-sm"
        >
          Visit Us
        </button>
      </nav>

      <button
        className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 p-8 flex flex-col gap-8 shadow-2xl md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xl font-bold text-white/90 hover:text-orange-500 transition-colors uppercase tracking-widest border-b border-white/5 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                document.querySelector("#locations")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-orange-500 text-white px-6 py-4 rounded-full font-black text-lg w-full uppercase tracking-widest shadow-[0_0_20px_rgba(249,115,22,0.4)]"
            >
              Visit Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
