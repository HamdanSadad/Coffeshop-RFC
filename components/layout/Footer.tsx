"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-bg-alt)] pt-20 pb-10 border-t border-[var(--color-border-subtle)] relative overflow-hidden" id="location">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact & Info */}
          <div>
            <h3 className="text-[var(--text-h3)] font-heading mb-6 text-[var(--color-text-primary)]">
              Find Us
            </h3>
            <div className="space-y-4 text-[var(--color-text-secondary)] font-sans">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 text-[var(--color-accent-primary)] shrink-0" />
                <p>
                  Jl. Senopati No. 123, Kebayoran Baru<br />
                  Jakarta Selatan 12190
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[var(--color-accent-primary)] shrink-0" />
                <p>+62 812-3456-7890</p>
              </div>
              <div className="mt-8">
                <p className="font-semibold text-[var(--color-text-primary)]">Open Everyday</p>
                <p>08.00 - 23.00 WIB</p>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="#" 
                className="w-10 h-10 rounded-full bg-[var(--color-glass-bg)] flex items-center justify-center border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] hover:border-[var(--color-accent-primary)] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="#" 
                className="w-10 h-10 rounded-full bg-[var(--color-glass-bg)] flex items-center justify-center border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] hover:border-[var(--color-accent-primary)] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Map (Placeholder for actual Google Maps iframe) */}
          <div className="h-64 md:h-full w-full bg-[var(--color-bg-main)] rounded-2xl overflow-hidden border border-[var(--color-border-subtle)] relative">
             <div className="absolute inset-0 flex items-center justify-center text-[var(--color-text-secondary)] bg-[var(--color-glass-bg)]">
                [Google Maps Embed]
             </div>
          </div>
        </div>

        {/* Big Typography Footer */}
        <div className="text-center mt-20">
          <h2 className="text-[12vw] leading-none font-heading font-black tracking-tighter text-[var(--color-text-primary)] opacity-5">
            SEE YOU TOMORROW
          </h2>
          <p className="text-[var(--color-text-secondary)] mt-4">
            Reservasi meja via WhatsApp dalam 5 detik.
          </p>
        </div>

        <div className="text-center text-sm text-[var(--color-text-secondary)]/50 mt-16 pt-8 border-t border-[var(--color-border-subtle)]">
          © {new Date().getFullYear()} Cinematic Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
