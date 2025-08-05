"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "ourstory", label: "Who We Are" },
  { href: "notion", label: "Our Story" },
  { href: "charity", label: "Charity" },
  { href: "execution", label: "Execution" },
  { href: "economicrationale", label: "Economic Rationale" },
  { href: "team", label: "Team" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-2 sm:py-3 md:py-4">
      <nav className="flex items-center justify-between backdrop-blur-lg rounded-lg bg-black/20 p-3 sm:p-4 lg:p-4">
        {/* Logo */}
        <a href="#home" onClick={e => { e.preventDefault(); scrollToSection("home"); }} className="flex items-center">
          <Image
            src="/logo2.png"
            alt="PPI Logo"
            width={80}
            height={40}
            className="w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-base">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={e => { e.preventDefault(); scrollToSection(link.href); }}
              className="text-white text-sm xl:text-base hover:text-green-600 transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* <button
            type="button"
            className="border hidden lg:flex border-white rounded-lg text-white hover:bg-white hover:text-black text-xs xl:text-sm p-2 xl:p-3 transition-colors bg-transparent"
          >
            GET IN TOUCH
          </button> */}

        {/* Hamburger for mobile/tablet */}
        <button
          className="lg:hidden flex items-center justify-center text-white p-1 sm:p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} className="sm:w-8 sm:h-8" /> : <Menu size={24} className="sm:w-8 sm:h-8" />}
        </button>

        {/* Mobile/Tablet Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="absolute top-full left-0 w-full px-4 lg:hidden"
              style={{ zIndex: 100 }}
            >
              <div className="bg-white/90 backdrop-blur-lg rounded-b-xl shadow-lg flex flex-col items-start p-4 sm:p-6 space-y-3 sm:space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={`#${link.href}`}
                    onClick={e => { e.preventDefault(); scrollToSection(link.href); setMenuOpen(false); }}
                    className="text-black text-sm sm:text-base font-medium hover:text-blue-600 transition-colors w-full text-start cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  type="button"
                  className="border border-black rounded-lg max-w-[200px] text-black hover:bg-black hover:text-white text-xs sm:text-sm p-3 sm:p-4 transition-colors bg-transparent w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  GET IN TOUCH
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
