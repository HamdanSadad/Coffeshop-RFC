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
                <div>
                  <p className="leading-relaxed">
                    4GG2+639 Cilimus,<br />
                    Kabupaten Kuningan, Jawa Barat
                  </p>
                  <a
                    href="https://maps.app.goo.gl/nCHVBvPqv6a14juu9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[var(--color-accent-primary)] hover:underline mt-2 font-medium"
                  >
                    Buka di Google Maps &rarr;
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[var(--color-accent-primary)] shrink-0" />
                <a 
                  href="https://wa.me/6282117964344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-accent-primary)] transition-colors"
                >
                  +62 821-1796-4344
                </a>
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

          {/* Map Embed */}
          <div className="h-72 md:h-auto min-h-[300px] w-full bg-[var(--color-bg-main)] rounded-2xl overflow-hidden border border-[var(--color-border-subtle)] relative shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d791.5230154953512!2d108.50033714921679!3d-6.874673655042931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1792033228803!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Lokasi RFC Coffee Shop"
              className="w-full h-full min-h-[300px]"
            />
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
