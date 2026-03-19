"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { CANDIDATE } from "@/lib/data";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#architecture", label: "Architecture" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20"
          : "bg-transparent"
      )}
    >
      <nav className="container-max px-6 md:px-12 lg:px-24 flex items-center justify-between h-16">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
            Z
          </div>
          <span className="font-semibold text-white hidden sm:block">
            {CANDIDATE.name.split(" ")[0]}
            <span className="text-indigo-400">.</span>
          </span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-3"
        >
          <a
            href="/resume.pdf"
            download
            className="btn-secondary text-xs py-2 px-4"
          >
            <Download size={14} />
            Resume
          </a>
          <a href="#contact" className="btn-primary text-xs py-2 px-4">
            Hire Me
          </a>
        </motion.div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2 border-t border-white/5 mt-2">
                <a
                  href="/resume.pdf"
                  download
                  className="btn-secondary text-xs py-2 px-4 flex-1 justify-center"
                >
                  <Download size={14} />
                  Resume
                </a>
                <a
                  href="#contact"
                  className="btn-primary text-xs py-2 px-4 flex-1 justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
