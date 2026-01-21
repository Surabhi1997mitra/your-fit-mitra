"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const preferred = saved || "dark";

    setTheme(preferred);
    document.documentElement.setAttribute("data-theme", preferred);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Coaching", href: "/coaching" },
    { name: "About", href: "/about" },
    { name: "Mission", href: "/mission" },
    { name: "Contact", href: "/contact" },
  ];

  // Active link style
  const linkClass = (href) =>
    `relative transition ${
      pathname === href
        ? "text-[var(--text-primary)] font-semibold after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-[#E10600]"
        : "text-[var(--text-secondary)]-300 hover:text-[var(--text-primary)]"
    }`;

  // Click outside to close
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="relative sticky top-0 z-50 bg-[var(--bg-secondary)] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          your.fit.mitra
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass(link.href)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="ml-4 relative group flex items-center justify-center w-10 h-10 rounded-full
             hover:bg-[var(--bg-secondary)] transition-all duration-300"
        >
          <span
            className={`text-lg transition-all duration-500 ${
              theme === "dark"
                ? "rotate-0 opacity-100"
                : "rotate-180 opacity-0 absolute"
            }`}
          >
            🌙
          </span>

          <span
            className={`text-lg transition-all duration-500 ${
              theme === "light"
                ? "rotate-0 opacity-100"
                : "-rotate-180 opacity-0 absolute"
            }`}
          >
            ☀️
          </span>

          {/* Hover label */}
          <span
            className="absolute -bottom-8 text-xs px-2 py-1 rounded bg-[var(--bg-secondary)]
                   text-[var(--text-secondary)] opacity-0 group-hover:opacity-100 transition"
          >
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </span>
        </button>

        <Link
          href="/contact#whatsapp"
          className="hidden md:block bg-[#E10600] hover:bg-red-700 transition px-5 py-2 text-sm font-semibold rounded-md text-white"
        >
          Sign Up
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[var(--text-primary)]"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Floating Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden absolute right-6 top-full mt-3 w-[220px] 
              rounded-lg bg-[var(--bg-secondary)] border border-white/10 shadow-xl z-40"
          >
            {/* Arrow caret */}
            <div
              className="absolute -top-2 right-4 w-4 h-4 bg-[var(--bg-secondary)] 
              border-l border-t border-white/10 rotate-45"
            />

            <ul className="flex flex-col gap-4 px-5 py-5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={linkClass(link.href)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Mobile CTA */}
              <li className="pt-3 border-t border-white/10">
                <Link
                  href="/contact#whatsapp"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center bg-[#E10600] hover:bg-red-700 transition py-2 rounded-md font-semibold"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
