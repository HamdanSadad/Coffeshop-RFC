"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsapClient";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function OurStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion) return;

    // Image Parallax
    gsap.fromTo(
      imageRef.current,
      { scale: 1 },
      {
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Text Reveal
    gsap.fromTo(
      textRef.current?.children ? Array.from(textRef.current.children) : [],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: sectionRef, dependencies: [prefersReducedMotion] });

  return (
    <section 
      id="story"
      ref={sectionRef} 
      className="py-32 bg-[var(--color-bg-alt)] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--color-border-subtle)] shadow-[var(--shadow-soft)]">
              <div ref={imageRef} className="w-full h-full bg-[#1A1514]">
                 <Image src="/images/our-story.jpg" alt="Kisah 9 Sekawan" fill className="object-cover opacity-80" />
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2" ref={textRef}>
            <h2 className="text-[var(--text-h2)] font-heading font-bold text-[var(--color-text-primary)] mb-6">
              Awal Mula Cerita
            </h2>
            <p className="text-[var(--text-body-lg)] text-[var(--color-text-secondary)] mb-6 leading-relaxed">
              RFC (Rice Field Coffee) lahir dari tongkrongan 9 sekawan yang selalu punya mimpi membangun bisnis bersama. Berawal dari obrolan santai, kini mimpi itu berdiri tegak di tengah bentangan sawah dengan latar belakang Gunung Ciremai.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)] mt-2.5 flex-shrink-0" />
                <span className="text-[var(--color-text-primary)]">Didirikan atas dasar persahabatan 9 orang yang erat.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)] mt-2.5 flex-shrink-0" />
                <span className="text-[var(--color-text-primary)]">Berlokasi strategis di tengah area persawahan yang asri.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)] mt-2.5 flex-shrink-0" />
                <span className="text-[var(--color-text-primary)]">Menyajikan nuansa kehangatan yang pas untuk melepas penat bersama sahabat.</span>
              </li>
            </ul>

            <div className="pt-6 border-t border-[var(--color-border-subtle)]">
               <p className="font-heading italic text-[var(--text-h3)] text-[var(--color-text-primary)]">
                 &quot;Dari teman, untuk teman. Di sinilah semua cerita baru dimulai.&quot;
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
