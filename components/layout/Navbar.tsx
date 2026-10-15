"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { CTAButton } from "../ui/CTAButton";

import { useLenis } from "lenis/react";

const NAV_LINKS = [
  { name: "Kisah Kami", href: "#story" },
  { name: "Tim", href: "#team" },
  { name: "Menu Andalan", href: "#menu" },
  { name: "Galeri", href: "#vibe" },
  { name: "Lokasi", href: "#location" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const lenis = useLenis();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      lenis?.scrollTo(href);
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div
          className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
            isScrolled ? "glass" : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="font-heading text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            RFC<span className="text-[var(--color-accent-primary)]">.</span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="font-sans text-[var(--text-body)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <CTAButton className="px-5 py-2 text-sm">Pesan Sekarang</CTAButton>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
