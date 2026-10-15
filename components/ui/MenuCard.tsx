"use client";

import { motion } from "framer-motion";
import { cardHover } from "@/lib/motionConfig";
import Image from "next/image";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  image: string;
  isSignature?: boolean;
}

interface MenuCardProps {
  item: MenuItem;
  onClick: () => void;
}

export function MenuCard({ item, onClick }: MenuCardProps) {
  return (
    <motion.div
      variants={cardHover}
      whileHover="hover"
      className="relative w-full h-[400px] rounded-2xl overflow-hidden cursor-pointer group bg-[var(--color-bg-alt)] border border-[var(--color-border-subtle)]"
      onClick={onClick}
    >
      {/* Background Image Placeholder / Actual Image */}
      <div className="absolute inset-0 bg-[#241A18]">
         {/* <Image src={item.image} alt={item.name} fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity" /> */}
         <div className="absolute inset-0 flex items-center justify-center text-[var(--color-text-secondary)] opacity-50 text-sm">
           [Image: {item.name}]
         </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-main)] via-transparent to-transparent opacity-80" />

      {/* Badge */}
      {item.isSignature && (
        <div className="absolute top-4 right-4 bg-[var(--color-accent-primary)] text-[var(--color-bg-main)] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Signature
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-[var(--text-h3)] font-heading font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent-primary)] transition-colors">
          {item.name}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-sans font-medium text-[var(--color-text-primary)]">
            Rp {item.price.toLocaleString("id-ID")}
          </span>
          <span className="text-xs text-[var(--color-accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
            Lihat Detail &rarr;
          </span>
        </div>
      </div>
    </motion.div>
  );
}
