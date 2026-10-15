"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsapClient";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const ORG_DATA = {
  level1: { id: 1, name: "Nama Owner", role: "Owner / Founder" },
  level2: [
    { id: 2, name: "Nama Teman 2", role: "Store Manager" },
    { id: 3, name: "Nama Teman 3", role: "Head Barista" },
  ],
  level3: [
    { id: 4, name: "Nama Teman 4", role: "Finance & Admin" },
    { id: 5, name: "Nama Teman 5", role: "Social Media & Mktg" },
    { id: 6, name: "Nama Teman 6", role: "Roaster & QC" },
  ],
  level4: [
    { id: 7, name: "Nama Teman 7", role: "Kitchen / Pastry" },
    { id: 8, name: "Nama Teman 8", role: "Barista" },
    { id: 9, name: "Nama Teman 9", role: "Barista" },
  ]
};

function FounderCard({ id, name, role }: { id: number, name: string, role: string }) {
  return (
    <div className="founder-card flex flex-col items-center text-center z-10 bg-bg-main p-4 w-40 md:w-48">
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-[#241A18] border-2 border-border-subtle mb-4 relative flex items-center justify-center">
         <Image src={`/images/founders/founder-${id}.jpg`} alt={name} fill className="object-cover" />
      </div>
      <h3 className="text-sm md:text-lg font-heading font-bold text-text-primary leading-tight mb-1">{name}</h3>
      <p className="text-xs md:text-sm text-accent-primary font-medium">{role}</p>
    </div>
  );
}

export function FoundersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion || !chartRef.current) return;

    gsap.fromTo(
      ".founder-card",
      { opacity: 0, scale: 0.8, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: chartRef.current,
          start: "top 80%",
        },
      }
    );
    
    gsap.fromTo(
      ".org-line",
      { scaleY: 0, scaleX: 0, opacity: 0 },
      {
        scaleY: 1,
        scaleX: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: chartRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: sectionRef, dependencies: [prefersReducedMotion] });

  return (
    <section id="team" ref={sectionRef} className="py-24 bg-bg-main relative">
      {/* overflow-x-auto allows scrolling if the chart is too wide for mobile */}
      <div className="container mx-auto px-4 overflow-x-auto pb-8">
        <div className="text-center mb-16">
          <h2 className="text-[var(--text-h2)] font-heading font-bold text-text-primary mb-4">
            Struktur Tim 9 Sekawan
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Pembagian peran profesional yang menyatukan visi kami untuk memberikan pengalaman ngopi terbaik.
          </p>
        </div>

        {/* 
          Org Chart Container 
          min-w-[1000px] ensures it never shrinks too much and breaks layout
        */}
        <div ref={chartRef} className="flex flex-col items-center min-w-[1000px] pb-12">
          
          {/* ================= LEVEL 1 ================= */}
          <FounderCard {...ORG_DATA.level1} />
          
          {/* Vertical line down from Level 1 */}
          <div className="org-line w-px h-12 bg-border-subtle origin-top"></div>
          
          {/* ================= LEVEL 2 ================= */}
          <div className="relative flex flex-col items-center w-full">
            {/* Horizontal Line for Level 2 */}
            <div className="org-line w-[600px] h-px bg-border-subtle absolute top-0 origin-center"></div>
            
            {/* Central spine going down behind/through the gap of Level 2 */}
            <div className="org-line w-px h-full bg-border-subtle absolute top-0 origin-top"></div>

            {/* Level 2 Cards */}
            <div className="flex justify-between w-[600px] relative z-10">
              <div className="flex flex-col items-center">
                <div className="org-line w-px h-8 bg-border-subtle origin-top"></div>
                <FounderCard {...ORG_DATA.level2[0]} />
              </div>
              <div className="flex flex-col items-center">
                <div className="org-line w-px h-8 bg-border-subtle origin-top"></div>
                <FounderCard {...ORG_DATA.level2[1]} />
              </div>
            </div>
          </div>

          {/* Additional vertical line below Level 2's spine to reach Level 3 */}
          <div className="org-line w-px h-12 bg-border-subtle origin-top"></div>

          {/* ================= LEVEL 3 ================= */}
          <div className="relative flex flex-col items-center w-full">
            {/* Horizontal Line for Level 3 */}
            <div className="org-line w-[800px] h-px bg-border-subtle absolute top-0 origin-center"></div>
            
            {/* Level 3 Cards */}
            <div className="flex justify-between w-[800px] relative z-10">
              {ORG_DATA.level3.map((founder) => (
                <div key={founder.id} className="flex flex-col items-center">
                  <div className="org-line w-px h-8 bg-border-subtle origin-top"></div>
                  <FounderCard {...founder} />
                  
                  {/* For the center card (id 5), we need to draw a line DOWN from it to connect to Level 4 */}
                  {founder.id === 5 && (
                    <div className="org-line w-px h-12 bg-border-subtle origin-top mt-auto"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ================= LEVEL 4 ================= */}
          {/* Notice Level 4 starts with a horizontal line, connecting from Level 3's center card's bottom line */}
          <div className="relative flex flex-col items-center w-full">
            {/* Horizontal Line for Level 4 */}
            <div className="org-line w-[800px] h-px bg-border-subtle absolute top-0 origin-center"></div>
            
            {/* Level 4 Cards */}
            <div className="flex justify-between w-[800px] relative z-10">
              {ORG_DATA.level4.map((founder) => (
                <div key={founder.id} className="flex flex-col items-center">
                  <div className="org-line w-px h-8 bg-border-subtle origin-top"></div>
                  <FounderCard {...founder} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
