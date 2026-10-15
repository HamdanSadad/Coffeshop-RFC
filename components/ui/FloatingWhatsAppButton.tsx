"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function FloatingWhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // Pre-filled message
  const message = encodeURIComponent("Halo, saya mau tanya tentang Signature Menu.");
  const whatsappUrl = `https://wa.me/6282117964344?text=${message}`; // Replace with actual number

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
        transition={{ duration: 0.2 }}
        className="hidden md:block bg-[var(--color-bg-alt)] text-[var(--color-text-primary)] px-4 py-2 rounded-lg text-sm shadow-[var(--shadow-soft)] whitespace-nowrap border border-[var(--color-border-subtle)]"
      >
        Chat dengan barista
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat via WhatsApp"
          className="flex items-center justify-center w-14 h-14 bg-[var(--color-whatsapp)] text-white rounded-full shadow-lg relative overflow-hidden group"
        >
          {/* Pulse effect */}
          <div className="absolute inset-0 rounded-full animate-ping opacity-25 bg-[var(--color-whatsapp)]" />
          <MessageCircle className="w-6 h-6 relative z-10" />
        </Link>
      </motion.div>
    </div>
  );
}
