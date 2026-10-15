"use client";

import { useRef } from "react";
// import Image from "next/image";
import { gsap } from "@/lib/gsapClient";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const VIBE_IMAGES = [
  { id: 1, src: "/images/gallery/vibe-1.jpg", alt: "Pemandangan Sawah 1" },
  { id: 2, src: "/images/gallery/vibe-2.jpg", alt: "Gunung Ciremai" },
  { id: 3, src: "/images/gallery/vibe-3.jpg", alt: "Tempat Duduk Santai" },
  { id: 4, src: "/images/gallery/vibe-4.jpg", alt: "Es Kopi Sachet" },
  { id: 5, src: "/images/gallery/vibe-5.jpg", alt: "Nongkrong Bareng" },
  { id: 6, src: "/images/gallery/vibe-6.jpg", alt: "Suasana Malam" },
];

export function TheVibeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion || !gridRef.current) return;

    const items = gsap.utils.toArray<HTMLElement>(".vibe-item", gridRef.current);

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        }
      );
    });

  }, { scope: sectionRef, dependencies: [prefersReducedMotion] });

  return (
    <section id="vibe" ref={sectionRef} className="py-24 bg-bg-alt relative overflow-hidden">
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[var(--text-h2)] font-heading font-bold text-text-primary mb-4">
            Galeri Suasana
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Hembusan angin, indahnya persawahan, dan secangkir kopi untuk merayakan kebersamaan.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative">
          {VIBE_IMAGES.map((img) => (
            <div key={img.id} className="vibe-item relative overflow-hidden rounded-xl bg-bg-main border border-border-subtle aspect-square group">
               <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  {/* 
                    INSTRUKSIGambar Galeri:
                    1. Siapkan 6 foto suasana kedai Anda.
                    2. Taruh di folder 'public/images/gallery/'.
                    3. Beri nama 'vibe-1.jpg' sampai 'vibe-6.jpg'.
                    4. Hapus (uncomment) komponen Image di bawah ini.
                  */}
                  
                  {/* <Image 
                    src={img.src} 
                    alt={img.alt} 
                    fill 
                    className="object-cover" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                  /> */}
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-text-secondary opacity-40 text-center px-4 bg-[#1A1514]">
                    <span className="text-3xl mb-2">📸</span>
                    <span className="text-sm font-medium">{img.alt}</span>
                    <span className="text-xs mt-2 opacity-70">public/images/gallery/vibe-{img.id}.jpg</span>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
