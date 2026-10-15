"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { CTAButton } from "../ui/CTAButton";
import { fadeInUp, staggerContainer } from "@/lib/motionConfig";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type HeroBackgroundConfig = {
  type: "image" | "video";
  src: string;
};

// Configurable background (Future-ready)
const HERO_BG_CONFIG: HeroBackgroundConfig = {
  type: "image",
  src: "/images/coffee-hero-default.jpg", 
};

export function HeroSection() {
  const typedElement = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (typedElement.current && !prefersReducedMotion) {
      typedInstance.current = new Typed(typedElement.current, {
        strings: ["Art", "Passion", "Moments"],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });
    }

    return () => {
      typedInstance.current?.destroy();
    };
  }, [prefersReducedMotion]);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-bg-main">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {HERO_BG_CONFIG.type === "image" ? (
          <div className="absolute inset-0 bg-[#1A1514]">
             {/* Gambar Hero Aktif */}
             <Image 
               src={HERO_BG_CONFIG.src}
               alt="Rice Field Coffee Vibe"
               fill
               priority
               className="object-cover opacity-60"
             />
          </div>
        ) : (
          <video 
            autoPlay={!prefersReducedMotion} 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-40"
          >
            <source src={HERO_BG_CONFIG.src} type="video/mp4" />
          </video>
        )}
        {/* Gradient Overlay untuk membuat tulisan terbaca & transisi mulus ke section berikutnya */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-main/20 to-bg-main" />
      </div>

      {/* Content Layer (Centered) */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center justify-center h-full pt-40 pb-16 text-center">
        
        <motion.div 
          className="w-full max-w-3xl flex flex-col justify-center items-center h-full"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 text-accent-primary font-medium text-sm tracking-widest uppercase">
            <span className="w-8 h-px bg-accent-primary hidden sm:block"></span>
            Rice Field Coffee
            <span className="w-8 h-px bg-accent-primary hidden sm:block"></span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-h1 font-heading font-bold text-text-primary leading-tight mb-6">
            Brewing <br />
            <span className="text-accent-primary min-w-[200px] inline-block">
              {prefersReducedMotion ? "Moments" : <span ref={typedElement}></span>}
            </span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-body-lg text-text-secondary mb-10 max-w-xl mx-auto leading-relaxed">
            Menikmati seduhan kopi hangat dengan hembusan angin persawahan dan latar belakang kemegahan Gunung Ciremai.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <CTAButton variant="primary">Lihat Signature Menu</CTAButton>
            <CTAButton variant="ghost">Kenali Kami Lebih Dekat</CTAButton>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-auto hidden md:flex items-center gap-4 text-sm text-text-secondary border-t-2 border-border-subtle pt-6">
            <p>Buka setiap hari 08.00–23.00 <br /> Lereng Gunung Ciremai</p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
