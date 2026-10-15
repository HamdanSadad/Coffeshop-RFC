"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuCard, MenuItem } from "../ui/MenuCard";
import { staggerContainer, fadeInUp } from "@/lib/motionConfig";

export function SignatureMenuSection() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [categories, setCategories] = useState<{id: string, name: string}[]>([{id: "All", name: "Semua Menu"}]);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const res = await fetch("/api/menu");
        const data = await res.json();
        setMenu(data.items);
        
        setCategories([{id: "All", name: "Semua Menu"}, ...data.categories]);
      } catch (error) {
        console.error("Failed to fetch menu:", error);
      }
    }
    fetchMenu();
  }, []);

  const filteredMenu = activeCategory === "All" 
    ? menu 
    : menu.filter(item => item.categoryId === activeCategory);

  return (
    <section id="menu" className="py-32 bg-[var(--color-bg-main)] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-[var(--text-h2)] font-heading font-bold text-text-primary mb-4">
            Menu Andalan Kami
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Sederhana tapi bermakna. Mulai dari segelas kopi sachet favorit hingga cemilan renyah untuk menemani obrolan santai Anda di pinggir sawah.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-sans text-sm transition-all duration-300 border ${
                activeCategory === category.id 
                  ? "bg-[var(--color-accent-primary)] text-[var(--color-bg-main)] border-[var(--color-accent-primary)]" 
                  : "bg-transparent text-[var(--color-text-secondary)] border-[var(--color-border-subtle)] hover:border-[var(--color-accent-primary)] hover:text-[var(--color-accent-primary)]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => (
              <motion.div 
                key={item.id}
                layout
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <MenuCard 
                  item={item} 
                  onClick={() => console.log("Open detail:", item.name)} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
