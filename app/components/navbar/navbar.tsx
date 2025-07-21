"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/solutions", label: "Solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/partner-markets", label: "Partner Markets" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-24 py-4">
      <nav className="flex items-center justify-between backdrop-blur-lg rounded-lg bg-black/20 p-4 lg:p-4">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl  font-semibold">
          +Ppi
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 text-base">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm hover:text-green-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
         
        </div>

        <button
            type="button"
            className="border hidden lg:flex border-white rounded-lg text-white hover:bg-white hover:text-black text-xs p-2 transition-colors bg-transparent"
          >
            GET IN TOUCH
          </button>

        {/* Hamburger for mobile/tablet */}
        <button
          className="lg:hidden flex items-center justify-center text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
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
              <div className="bg-white/90 backdrop-blur-lg rounded-b-xl shadow-lg flex flex-col items-start p-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-black text-base font-medium hover:text-blue-600 transition-colors w-full text-start"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  type="button"
                  className="border border-black rounded-lg max-w-[200px] text-black hover:bg-black hover:text-white text-xs p-4 transition-colors bg-transparent w-full"
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
